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
import { useTranslations } from '@/lib/hooks/use-translations';
import { useState } from 'react';

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
  pricing: [
    { id: 'pricing', category: 'pricing' },
  ],
};

export default function FAQPage() {
  const { t } = useTranslations();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const allFAQs = Object.values(faqCategories).flat();
  const filteredFAQs = selectedCategory === 'all' 
    ? allFAQs 
    : faqCategories[selectedCategory] || [];

  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-5xl font-bold md:text-6xl">
              {t('faq.title')}
            </h1>
            <p className="text-muted-foreground text-xl">
              {t('faq.subtitle')}
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            <Badge
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              className="cursor-pointer px-4 py-2 text-sm"
              onClick={() => setSelectedCategory('all')}
            >
              All
            </Badge>
            {Object.keys(faqCategories).map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className="cursor-pointer px-4 py-2 text-sm"
                onClick={() => setSelectedCategory(category)}
              >
                {t(`faq.categories.${category}`)}
              </Badge>
            ))}
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="w-full">
            {filteredFAQs.map((faq, index) => (
              <AccordionItem key={faq.id} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="text-xs">
                      {t(`faq.categories.${faq.category}`)}
                    </Badge>
                    <span className="font-medium">
                      {t(`faq.questions.${faq.id}.question`)}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-4">
                  <div className="prose prose-sm max-w-none">
                    {t(`faq.questions.${faq.id}.answer`)}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact CTA */}
          <div className="mt-16 rounded-lg bg-muted/50 p-8 text-center">
            <h3 className="mb-4 text-2xl font-semibold">
              Still have questions?
            </h3>
            <p className="mb-6 text-muted-foreground">
              Can&apos;t find the answer you&apos;re looking for? Our expert team is here to help.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Contact Support
              </a>
              <a
                href="/schedule"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Schedule a Demo
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
