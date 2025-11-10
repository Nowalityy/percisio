'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Activity,
  Target,
  Zap,
  Smartphone,
  Syringe,
  Stethoscope,
  Scissors,
  Radio,
  Package,
  ExternalLink,
  CheckCircle,
  Lightbulb,
  Shield,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { useTranslations } from '@/lib/hooks/use-translations';

export default function InsightPage() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { t, getRaw } = useTranslations();

  const categoriesRaw =
    getRaw<Array<{ title: string; items: string[]; color: string }>>(
      'insight.attachmentCategories'
    ) || [];
  const iconMap = [Syringe, Stethoscope, Scissors, Radio, Zap];
  const attachmentCategories = categoriesRaw.map((c, idx) => ({
    icon: iconMap[idx] || Syringe,
    ...c,
  }));

  const keyFeaturesRaw =
    getRaw<Array<{ title: string; description: string }>>('insight.keyFeaturesList') || [];
  const keyIcons = [Target, Zap, Smartphone, Package];
  const keyFeatures = keyFeaturesRaw.map((f, idx) => ({ icon: keyIcons[idx] || Target, ...f }));

  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Activity className="text-primary mx-auto mb-6 h-20 w-20" />
              <h1 className="mb-6 text-5xl font-bold md:text-6xl">{t('insight.hero.title')}</h1>
              <Badge className="mb-4" variant="secondary">
                {t('insight.hero.badge')}
              </Badge>
              <p className="text-muted-foreground mx-auto mb-8 max-w-4xl text-xl leading-relaxed">
                {t('insight.hero.subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="bg-muted/20 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                {t('insight.keyFeatures.title')}
              </h2>
              <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
                {t('insight.keyFeatures.subtitle')}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center">
                    <CardHeader>
                      <div className="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                        <feature.icon className="text-primary h-8 w-8" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sun Nuclear Phantom Section */}
        <section ref={ref} className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-16 text-center">
                <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                  {t('insight.testing.title')}
                </h2>
                <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
                  {t('insight.testing.subtitle')}
                </p>
              </div>

              <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="mb-4 flex items-center gap-3">
                        <Target className="text-primary h-6 w-6" />
                        <CardTitle className="text-2xl">
                          {t('insight.testing.sunNuclear.title')}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-lg">
                        {t('insight.testing.sunNuclear.description')}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {t('insight.testing.multiModality')}
                      </p>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <h4 className="mb-2 font-semibold">
                            Triple Modality 3D Abdominal Phantom
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {(getRaw<string[]>('insight.testing.sunNuclear.badgesLeft') || []).map(
                              (b, i) => (
                                <Badge variant="outline" key={i}>
                                  {b}
                                </Badge>
                              )
                            )}
                          </div>
                        </div>
                        <div>
                          <h4 className="mb-2 font-semibold">
                            Image-Guided Abdominal Biopsy Phantom
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {(getRaw<string[]>('insight.testing.sunNuclear.badgesRight') || []).map(
                              (b, i) => (
                                <Badge variant="outline" key={i}>
                                  {b}
                                </Badge>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                      <Link
                        href="https://www.sunnuclear.com/products/multi-modality-abdominal-biopsy-phantoms"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary inline-flex items-center gap-2"
                      >
                        {t('insight.testing.sunNuclear.link')}
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        {t('insight.testing.cards.0.title')}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {t('insight.testing.cards.0.description')}
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Lightbulb className="h-5 w-5" />
                        {t('insight.testing.cards.1.title')}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {t('insight.testing.cards.1.description')}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Attachment Modules Section */}
        <section className="bg-muted/20 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                {t('insight.compatible.title')}
              </h2>
              <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
                {t('insight.compatible.subtitle')}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {attachmentCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="mb-4 flex items-center gap-3">
                        <div
                          className={`bg-gradient-to-r ${category.color} flex h-12 w-12 items-center justify-center rounded-xl shadow-lg`}
                        >
                          <category.icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-xl">{category.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-muted-foreground flex items-center gap-2"
                          >
                            <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-500" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Setup & Benefits Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">{t('insight.setup.title')}</h2>
              <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
                {t('insight.setup.subtitle')}
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Package className="h-6 w-6" />
                      {t('insight.setup.portable.title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {t('insight.setup.portable.description')}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(getRaw<string[]>('insight.setup.portable.badges') || []).map((b, i) => (
                        <Badge variant="outline" key={i}>
                          {b}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      {t('insight.setup.standard.title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('insight.setup.standard.description')}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="h-5 w-5" />
                      {t('insight.setup.applications.title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('insight.setup.applications.description')}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
