'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { useTranslations } from '@/lib/hooks/use-translations';

export default function AboutPage() {
  const { t } = useTranslations();
  const sections = [
    {
      id: 'teams',
      title: t('aboutPage.sections.team.title'),
      description: t('aboutPage.sections.team.description'),
      href: '/about-us/team',
      cta: t('aboutPage.sections.team.cta'),
    },
    {
      id: 'careers',
      title: t('aboutPage.sections.careers.title'),
      description: t('aboutPage.sections.careers.description'),
      href: '/about-us/careers',
      cta: t('aboutPage.sections.careers.cta'),
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{t('aboutPage.title')}</h1>
            <p className="text-muted-foreground mt-4 text-lg sm:text-xl">{t('aboutPage.intro')}</p>
          </div>

          <div className="space-y-8">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="border-border bg-card rounded-2xl border p-8 shadow-sm"
              >
                <h2 className="text-2xl font-semibold">{section.title}</h2>
                <p className="text-muted-foreground mt-3 text-base sm:text-lg">
                  {section.description}
                </p>
                <div className="mt-6">
                  <Link
                    href={section.href}
                    className="text-primary inline-flex items-center text-sm font-medium hover:underline"
                  >
                    {section.cta}
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
