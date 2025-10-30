'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { VideoCard } from '@/components/video/video-card';
import { AnimatedSection } from '@/components/shared/animated-section';
import { Play } from 'lucide-react';
import { useTranslations } from '@/lib/hooks/use-translations';

interface Video {
  id: string;
  title_en: string;
  title_fr: string;
  description_en: string;
  description_fr: string;
  slug: string;
  youtube_id: string | null;
  video_url: string | null;
  thumbnail_url: string | null;
  duration: number | null;
  category: string;
  view_count: number;
  published: boolean;
}

export default function VideosPage() {
  const { t } = useTranslations();
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [locale, setLocale] = useState<'en' | 'fr'>('en');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('preferredLanguage') as 'en' | 'fr';
      if (saved) {
        setLocale(saved);
      }

      const handleLanguageChange = (e: CustomEvent) => {
        setLocale(e.detail);
      };
      window.addEventListener('languageChange', handleLanguageChange as EventListener);
      return () =>
        window.removeEventListener('languageChange', handleLanguageChange as EventListener);
    }
  }, []);

  useEffect(() => {
    async function fetchVideos() {
      const mockVideos = [
        {
          id: '1',
          title_en: 'Percisio Overview',
          title_fr: 'Présentation Percisio',
          description_en: 'An overview of Percisio’s cutting-edge technology.',
          description_fr: 'Une présentation de la technologie Percisio.',
          slug: 'percisio-overview',
          youtube_id: 'zgXU63Wfcu4',
          video_url: null,
          thumbnail_url: null,
          duration: 180,
          category: 'overview',
          view_count: 1200,
          published: true,
        },
        {
          id: '2',
          title_en: 'Percisio Features',
          title_fr: 'Fonctionnalités de Percisio',
          description_en: 'Discover the key features of Percisio.',
          description_fr: 'Découvrez les fonctionnalités principales de Percisio.',
          slug: 'percisio-features',
          youtube_id: 'AB-lq46epYU',
          video_url: null,
          thumbnail_url: null,
          duration: 240,
          category: 'features',
          view_count: 980,
          published: true,
        },
        {
          id: '3',
          title_en: 'Technical Demonstration',
          title_fr: 'Démonstration technique',
          description_en: 'A deep technical demonstration of Percisio.',
          description_fr: 'Une démonstration technique détaillée de Percisio.',
          slug: 'percisio-technical',
          youtube_id: 'IW_lMfDVFwg',
          video_url: null,
          thumbnail_url: null,
          duration: 300,
          category: 'technical',
          view_count: 760,
          published: true,
        },
        {
          id: '4',
          title_en: 'Two Cameras',
          title_fr: 'Deux caméras',
          description_en: 'A deep technical demonstration of Percisio.',
          description_fr: 'Une démonstration technique détaillée de Percisio.',
          slug: 'percisio-technical',
          youtube_id: 'Dclvm_MGpLc',
          video_url: null,
          thumbnail_url: null,
          duration: 200,
          category: 'technical',
          view_count: 1340,
          published: true,
        },
        {
          id: '5',
          title_en: 'Augmented Reality',
          title_fr: 'Realité Augmentée',
          description_en: 'See Percisio’s augmented reality in action.',
          description_fr: 'Découvrez la réalité augmentée avec Percisio.',
          slug: 'percisio-ar-demo',
          youtube_id: '1vS33d1PKBs',
          video_url: null,
          thumbnail_url: null,
          duration: 210,
          category: 'ar-demo',
          view_count: 890,
          published: true,
        },
      ];

      setVideos(mockVideos);
      setLoading(false);
    }

    fetchVideos();
  }, []);

  const categories = [
    { id: 'overview', label: t('videos.categories.overview') },
    { id: 'technical', label: t('videos.categories.technical') },
    { id: 'features', label: t('videos.categories.features') },
    { id: 'ar-demo', label: t('videos.categories.arDemo') },
  ];

  const videosByCategory = categories
    .map((cat) => ({
      ...cat,
      videos: videos.filter((v) => v.category === cat.id),
    }))
    .filter((cat) => cat.videos.length > 0);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 pt-16">
        <section className="from-background to-secondary/20 bg-gradient-to-b py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="mx-auto mb-16 max-w-3xl text-center">
                <div className="bg-primary/10 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full">
                  <Play className="text-primary h-8 w-8" />
                </div>
                <h1 className="mb-6 text-4xl font-bold md:text-5xl">{t('videos.title')}</h1>
                <p className="text-muted-foreground text-xl">{t('videos.intro')}</p>
              </div>
            </AnimatedSection>

            {loading ? (
              <div className="py-16 text-center">
                <div className="border-primary inline-block h-12 w-12 animate-spin rounded-full border-b-2"></div>
                <p className="text-muted-foreground mt-4">{t('videos.loading')}</p>
              </div>
            ) : (
              <>
                {videosByCategory.map((category, idx) => (
                  <AnimatedSection key={category.id} delay={idx * 0.1}>
                    <div className="mb-16">
                      <h2 className="mb-8 text-3xl font-bold capitalize">{category.label}</h2>
                      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {category.videos.map((video) => (
                          <VideoCard
                            key={video.id}
                            title={locale === 'en' ? video.title_en : video.title_fr}
                            description={
                              locale === 'en' ? video.description_en : video.description_fr
                            }
                            youtubeId={video.youtube_id || undefined}
                            videoUrl={video.video_url || undefined}
                            thumbnailUrl={video.thumbnail_url || undefined}
                            duration={video.duration || undefined}
                            viewCount={video.view_count}
                            category={video.category}
                          />
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}

                {videos.length === 0 && !loading && (
                  <div className="py-16 text-center">
                    <p className="text-muted-foreground text-xl">{t('videos.empty')}</p>
                  </div>
                )}
              </>
            )}

            {videos.length > 0 && (
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'VideoGallery',
                    name: 'Percisio Video Demonstrations',
                    description: 'Medical device technology demonstrations',
                    video: videos.map((video) => ({
                      '@type': 'VideoObject',
                      name: locale === 'en' ? video.title_en : video.title_fr,
                      description: locale === 'en' ? video.description_en : video.description_fr,
                      thumbnailUrl:
                        video.thumbnail_url ||
                        `https://img.youtube.com/vi/${video.youtube_id}/maxresdefault.jpg`,
                      uploadDate: new Date().toISOString(),
                      contentUrl: video.youtube_id
                        ? `https://www.youtube.com/watch?v=${video.youtube_id}`
                        : video.video_url,
                      embedUrl: video.youtube_id
                        ? `https://www.youtube-nocookie.com/embed/${video.youtube_id}`
                        : video.video_url,
                    })),
                  }),
                }}
              />
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
