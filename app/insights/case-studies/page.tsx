'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from '@/lib/hooks/use-translations';

export default function CaseStudiesPage() {
  const { t } = useTranslations();
  const [caseStudies] = useState<
    Array<{
      id: number;
      title: string;
      description: string;
      image: string;
      category: string;
      slug: string;
      cover_image?: string;
      company: string;
      [key: string]: string | number | boolean | undefined; // Allow additional properties
    }>
  >([]);

  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-5xl font-bold md:text-6xl">{t('caseStudies.title')}</h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
              {t('caseStudies.subtitle')}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.length > 0 ? (
              caseStudies.map((study) => (
                <Link key={study.id} href={`/case-studies/${study.slug}`}>
                  <Card className="h-full">
                    <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-cyan-500/20 to-blue-600/20">
                      {study.cover_image && (
                        <Image
                          src={study.cover_image}
                          alt={study.company}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle>{study.company}</CardTitle>
                      <p className="text-muted-foreground text-sm">{study.industry}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="line-clamp-3 text-sm">{study.challenge}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))
            ) : (
              <div className="text-muted-foreground col-span-full py-12 text-center">
                {t('caseStudies.comingSoon')}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
