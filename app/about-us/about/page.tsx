'use client';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Award, Globe, Zap, Users } from 'lucide-react';
import type { Metadata } from 'next';
import { useTranslations } from '@/lib/hooks/use-translations';

// metadata removed to allow client component translations

export default function AboutPage() {
  const { t } = useTranslations();
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-5xl font-bold md:text-6xl">{t('aboutPage.title')}</h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
              {t('aboutPage.subtitle')}
            </p>
          </div>

          <div className="mb-20 grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Target className="text-primary mb-4 h-12 w-12" />
                <CardTitle>{t('aboutPage.missionTitle')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('aboutPage.missionText')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="text-primary mb-4 h-12 w-12" />
                <CardTitle>{t('aboutPage.valuesTitle')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('aboutPage.valuesText')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="text-primary mb-4 h-12 w-12" />
                <CardTitle>{t('aboutPage.impactTitle')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('aboutPage.impactText')}</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <Zap className="text-primary mb-4 h-12 w-12" />
                <CardTitle>{t('aboutPage.techTitle')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('aboutPage.techText')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="text-primary mb-4 h-12 w-12" />
                <CardTitle>{t('aboutPage.philosophyTitle')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('aboutPage.philosophyText')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
