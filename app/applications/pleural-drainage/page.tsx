'use client';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Activity } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from '@/lib/hooks/use-translations';

export default function PleuralDrainagePage() {
  const { t } = useTranslations();
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Activity className="text-primary mx-auto mb-6 h-20 w-20" />
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">
            {t('applicationsPages.pleural.title')}
          </h1>
          <p className="text-muted-foreground mx-auto mb-8 max-w-3xl text-xl">
            {t('applicationsPages.pleural.subtitle')}
          </p>
          <div className="mx-auto max-w-4xl text-left">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8 flex justify-center">
                <Image
                  src="/hepatic_drainage.png"
                  alt={t('applicationsContent.pleural.imageAlt')}
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <p className="mb-4">{t('applicationsContent.pleural.para1')}</p>
              <p className="mb-4">{t('applicationsContent.pleural.para2')}</p>
              <p>{t('applicationsContent.pleural.para3')}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
