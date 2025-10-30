'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { HoverCard } from '@/components/ui/hover-card';
import { useTranslations } from '@/lib/hooks/use-translations';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Search, HelpCircle, ThumbsUp, ThumbsDown, Filter, ArrowLeft } from 'lucide-react';

interface FAQItem {
  id: string;
  category: string;
}

const faqCategories: { [key: string]: FAQItem[] } = {
  general: [
    { id: 'whatIsPercisio', category: 'general' },
    { id: 'howDoesItWork', category: 'general' },
    { id: 'whatProcedures', category: 'general' },
    { id: 'clinicalValidation', category: 'general' },
  ],
  technology: [
    { id: 'accuracy', category: 'technology' },
    { id: 'setupTime', category: 'technology' },
    { id: 'radiationReduction', category: 'technology' },
    { id: 'compatibility', category: 'technology' },
    { id: 'dataSecurity', category: 'technology' },
  ],
  implementation: [
    { id: 'training', category: 'implementation' },
    { id: 'maintenance', category: 'implementation' },
    { id: 'integration', category: 'implementation' },
  ],
  support: [
    { id: 'support', category: 'support' },
    { id: 'future', category: 'support' },
  ],
  pricing: [{ id: 'pricing', category: 'pricing' }],
};

export default function FAQPage() {
  const { t } = useTranslations();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [feedback, setFeedback] = useState<{ [key: string]: 'helpful' | 'not-helpful' | null }>({});

  const allFAQs = Object.values(faqCategories).flat();

  const filteredFAQs = useMemo(() => {
    let filtered = selectedCategory === 'all' ? allFAQs : faqCategories[selectedCategory] || [];

    if (searchTerm) {
      filtered = filtered.filter((faq) => {
        const question = t(`faq.questions.${faq.id}.question`).toLowerCase();
        const answer = t(`faq.questions.${faq.id}.answer`).toLowerCase();
        return (
          question.includes(searchTerm.toLowerCase()) || answer.includes(searchTerm.toLowerCase())
        );
      });
    }

    return filtered;
  }, [selectedCategory, searchTerm, allFAQs, t]);

  const handleFeedback = (faqId: string, type: 'helpful' | 'not-helpful') => {
    setFeedback((prev) => ({ ...prev, [faqId]: type }));
  };

  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Button
              variant="ghost"
              onClick={() => router.back()}
              className="text-muted-foreground hover:text-foreground flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              {t('faqUi.back')}
            </Button>
          </motion.div>

          <div className="mb-16 text-center">
            <h1 className="mb-6 text-5xl font-bold md:text-6xl">{t('faq.title')}</h1>
            <p className="text-muted-foreground text-xl">{t('faq.subtitle')}</p>
          </div>

          {/* Search and Filter Section */}
          <motion.div
            className="mb-8 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Search Bar */}
            <div className="relative mx-auto max-w-md">
              <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
              <Input
                placeholder={t('faqUi.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-4 pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Badge
                  variant={selectedCategory === 'all' ? 'default' : 'outline'}
                  className="cursor-pointer px-4 py-2 text-sm transition-all duration-200 hover:shadow-md"
                  onClick={() => setSelectedCategory('all')}
                >
                  <Filter className="mr-2 h-3 w-3" />
                  {t('faqUi.all')}
                </Badge>
              </motion.div>
              {Object.keys(faqCategories).map((category, index) => (
                <motion.div
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Badge
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    className="cursor-pointer px-4 py-2 text-sm transition-all duration-200 hover:shadow-md"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {t(`faq.categories.${category}`)}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Accordion */}
          <AnimatePresence mode="wait">
            {filteredFAQs.length > 0 ? (
              <motion.div
                key="faq-list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {filteredFAQs.map((faq, index) => (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <HoverCard hoverContent={t('common.readMore')}>
                        <AccordionItem value={`item-${index}`} className="rounded-lg border px-4">
                          <AccordionTrigger className="py-6 text-left hover:no-underline">
                            <div className="flex items-center gap-3">
                              <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Badge variant="secondary" className="text-xs">
                                  {t(`faq.categories.${faq.category}`)}
                                </Badge>
                              </motion.div>
                              <span className="font-medium">
                                {t(`faq.questions.${faq.id}.question`)}
                              </span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground pb-6">
                            <div className="prose prose-sm mb-4 max-w-none">
                              {t(`faq.questions.${faq.id}.answer`)}
                            </div>

                            {/* Feedback Section */}
                            <motion.div
                              className="flex items-center gap-2 border-t pt-4"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.2 }}
                            >
                              <span className="text-muted-foreground text-sm">
                                {t('faqUi.wasThisHelpful')}
                              </span>
                              <div className="flex gap-1">
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => handleFeedback(faq.id, 'helpful')}
                                  className={`rounded p-1 transition-colors ${
                                    feedback[faq.id] === 'helpful'
                                      ? 'bg-green-50 text-green-600'
                                      : 'text-muted-foreground hover:text-green-600'
                                  }`}
                                >
                                  <ThumbsUp className="h-4 w-4" />
                                </motion.button>
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => handleFeedback(faq.id, 'not-helpful')}
                                  className={`rounded p-1 transition-colors ${
                                    feedback[faq.id] === 'not-helpful'
                                      ? 'bg-red-50 text-red-600'
                                      : 'text-muted-foreground hover:text-red-600'
                                  }`}
                                >
                                  <ThumbsDown className="h-4 w-4" />
                                </motion.button>
                              </div>
                            </motion.div>
                          </AccordionContent>
                        </AccordionItem>
                      </HoverCard>
                    </motion.div>
                  ))}
                </Accordion>
              </motion.div>
            ) : (
              <motion.div
                key="no-results"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="py-12 text-center"
              >
                <HelpCircle className="text-muted-foreground mx-auto mb-4 h-12 w-12" />
                <h3 className="mb-2 text-lg font-semibold">{t('faqUi.noResultsTitle')}</h3>
                <p className="text-muted-foreground">{t('faqUi.noResultsText')}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Contact CTA */}
          <motion.div
            className="bg-muted/50 mt-16 rounded-lg p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3
              className="mb-4 text-2xl font-semibold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {t('faqUi.stillHaveQuestions')}
            </motion.h3>
            <motion.p
              className="text-muted-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {t('faqUi.stillHaveQuestionsDesc')}
            </motion.p>
            <motion.div
              className="flex flex-col gap-4 sm:flex-row sm:justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href="/contact"
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-primary/20 inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-all duration-200 hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('faqUi.contactSupport')}
              </motion.a>
              <motion.a
                href="/schedule"
                className="border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center rounded-md border px-6 py-3 text-sm font-medium transition-all duration-200 hover:shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('faqUi.scheduleDemo')}
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
