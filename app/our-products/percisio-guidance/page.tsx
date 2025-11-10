'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity, Eye, Target, Shield, Monitor, Layers, Zap, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { useTranslations } from '@/lib/hooks/use-translations';

export default function GuidancePage() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { t, getRaw } = useTranslations();

  const applications = (getRaw<Array<{ title: string; description: string }>>(
    'guidance.essential.applications'
  ) || []) as Array<{ title: string; description: string }>;

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
              <h1 className="mb-6 text-5xl font-bold md:text-6xl">{t('guidance.hero.title')}</h1>
              <Badge className="mb-4" variant="secondary">
                {t('guidance.hero.badge')}
              </Badge>
              <p className="text-muted-foreground mx-auto mb-8 max-w-4xl text-xl leading-relaxed">
                {t('guidance.hero.subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* The Power of Computer Vision Section */}
        <section className="bg-muted/20 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                {t('guidance.powerVision.title')}
              </h2>
              <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
                {t('guidance.powerVision.description')}
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="mb-4 flex items-center gap-3">
                    <Eye className="text-primary h-6 w-6" />
                    <CardTitle className="text-2xl">
                      {t('guidance.powerVision.cards.0.title')}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-lg">
                    {t('guidance.powerVision.cards.0.description')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {t('guidance.powerVision.cards.2.description')}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    {t('guidance.powerVision.cards.1.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('guidance.powerVision.cards.1.description')}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    {t('guidance.powerVision.cards.2.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('guidance.powerVision.cards.2.description')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Medical Applications Gallery Section */}
        <section ref={ref} className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-16 text-center">
                <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                  {t('guidance.gallery.title')}
                </h2>
                <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
                  {t('guidance.gallery.description')}
                </p>
              </div>

              {/* Professional Medical Gallery */}
              <div className="mb-16">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {/* Needle Guidance Procedure */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src="/guidance_image/body_probe_needle-4.jpg"
                        alt="PERCISIO Needle Guidance Procedure"
                        width={400}
                        height={300}
                        className="h-64 w-full object-cover"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-lg font-semibold">
                        {t('guidance.gallery.items.0.title')}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {t('guidance.gallery.items.0.description')}
                      </p>
                    </div>
                  </motion.div>

                  {/* Abscess Treatment 1 */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src="/guidance_image/abscess1.jpg"
                        alt="PERCISIO Abscess Treatment Procedure"
                        width={400}
                        height={300}
                        className="h-64 w-full object-cover"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-lg font-semibold">
                        {t('guidance.gallery.items.1.title')}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {t('guidance.gallery.items.1.description')}
                      </p>
                    </div>
                  </motion.div>

                  {/* Abscess Treatment 2 */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src="/guidance_image/abscess2.jpg"
                        alt="PERCISIO Advanced Abscess Treatment"
                        width={400}
                        height={300}
                        className="h-64 w-full object-cover"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-lg font-semibold">
                        {t('guidance.gallery.items.2.title')}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {t('guidance.gallery.items.2.description')}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Essential Procedures List */}
              <div className="mb-12">
                <Card className="mx-auto max-w-4xl">
                  <CardHeader>
                    <div className="mb-4 flex items-center gap-3">
                      <Layers className="text-primary h-6 w-6" />
                      <CardTitle className="text-2xl">{t('guidance.essential.title')}</CardTitle>
                    </div>
                    <CardDescription className="text-lg">
                      {t('guidance.essential.intro')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      {applications.map((app, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="text-primary h-5 w-5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">{app.title}</p>
                            <p className="text-muted-foreground text-sm">{app.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Seamless Integration Section */}
        <section className="bg-muted/20 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                {t('guidance.integration.title')}
              </h2>
              <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
                {t('guidance.integration.description')}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10">
                      <Zap className="h-8 w-8 text-blue-500" />
                    </div>
                    <CardTitle className="text-xl">
                      {t('guidance.integration.cards.0.title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {t('guidance.integration.cards.0.description')}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                      <Monitor className="h-8 w-8 text-green-500" />
                    </div>
                    <CardTitle className="text-xl">
                      {t('guidance.integration.cards.1.title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {t('guidance.integration.cards.1.description')}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/10">
                      <Activity className="h-8 w-8 text-purple-500" />
                    </div>
                    <CardTitle className="text-xl">
                      {t('guidance.integration.cards.2.title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {t('guidance.integration.cards.2.description')}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="mt-16 text-center">
              <Card className="mx-auto max-w-4xl">
                <CardContent className="py-12">
                  <h3 className="mb-6 text-3xl font-bold">{t('guidance.integration.ctaTitle')}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {t('guidance.integration.ctaDescription')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
