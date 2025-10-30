'use client';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';
import Link from 'next/link';
// metadata removed for client component translations
import { useTranslations } from '@/lib/hooks/use-translations';

// no metadata export in client component

export default function CareerPage() {
  const { t } = useTranslations();
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <Users className="text-primary mx-auto mb-6 h-20 w-20" />
            <h1 className="mb-6 text-5xl font-bold md:text-6xl">{t('careersPage.title')}</h1>
            <p className="text-muted-foreground mx-auto mb-8 max-w-3xl text-xl">
              {t('careersPage.subtitle')}
            </p>
            <Button size="lg" asChild>
              <Link href="/about-us/careers/apply">{t('careersPage.cta')}</Link>
            </Button>
          </div>

          {/* Why Join Us Section */}
          <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 text-center">
              <div className="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">{t('careersPage.why.innovationTitle')}</h3>
              <p className="text-muted-foreground">{t('careersPage.why.innovationText')}</p>
            </div>
            <div className="p-6 text-center">
              <div className="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">{t('careersPage.why.impactTitle')}</h3>
              <p className="text-muted-foreground">{t('careersPage.why.impactText')}</p>
            </div>
            <div className="p-6 text-center">
              <div className="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">{t('careersPage.why.teamTitle')}</h3>
              <p className="text-muted-foreground">{t('careersPage.why.teamText')}</p>
            </div>
          </div>

          {/* Open Positions Section */}
          <div className="text-center">
            <h2 className="mb-8 text-3xl font-bold">{t('careersPage.openPositions.title')}</h2>
            <div className="bg-muted/50 mb-8 rounded-lg p-8">
              <p className="text-muted-foreground mb-4">{t('careersPage.openPositions.line1')}</p>
              <p className="text-muted-foreground mb-6">{t('careersPage.openPositions.line2')}</p>
              <Button size="lg" asChild>
                <Link href="/about-us/careers/apply">{t('careersPage.openPositions.cta')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
