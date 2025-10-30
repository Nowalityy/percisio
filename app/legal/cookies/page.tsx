'use client';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { useTranslations } from '@/lib/hooks/use-translations';

export default function CookiesPage() {
  const { t } = useTranslations();
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-4xl font-bold md:text-5xl">{t('cookies.title')}</h1>
          <div className="prose prose-lg max-w-none">
            <p className="lead">
              {t('cookies.lastUpdated')}: {new Date().toLocaleDateString()}
            </p>
            <h2>1. {t('cookies.sections.what.title')}</h2>
            <p>{t('cookies.sections.what.content')}</p>
            <h2>2. {t('cookies.sections.types.title')}</h2>
            <h3>{t('cookies.sections.types.essential.title')}</h3>
            <p>{t('cookies.sections.types.essential.content')}</p>
            <h3>{t('cookies.sections.types.analytics.title')}</h3>
            <p>{t('cookies.sections.types.analytics.content')}</p>
            <h3>{t('cookies.sections.types.preference.title')}</h3>
            <p>{t('cookies.sections.types.preference.content')}</p>
            <h2>3. {t('cookies.sections.managing.title')}</h2>
            <p>{t('cookies.sections.managing.content')}</p>
            <h2>4. {t('cookies.sections.contact.title')}</h2>
            <p>{t('cookies.sections.contact.content')}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
