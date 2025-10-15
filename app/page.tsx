'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/shared/animated-section';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslations } from '@/lib/hooks/use-translations';
import { Brain, Shield, Activity, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const ClientScene = dynamic(
  () => import('@/components/3d/client-scene').then((mod) => mod.ClientScene),
  { ssr: false }
);

// --- HERO SECTION ---
function HeroSection({ t }: { t: (key: string) => string }) {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
      aria-labelledby="hero-heading"
    >
      <div
        className="via-background absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10"
        aria-hidden="true"
      />
      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        <Suspense
          fallback={
            <div className="h-full w-full bg-gradient-to-br from-cyan-500/10 to-blue-600/10" />
          }
        >
          <ClientScene cameraPosition={[0, 0, 8]} />
        </Suspense>
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="mb-4" variant="secondary">
            {t('home.badge')}
          </Badge>
          <h1
            id="hero-heading"
            className="mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-5xl font-bold text-transparent md:text-7xl"
          >
            {t('home.title')}
          </h1>
          <p className="text-muted-foreground mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
            {t('home.subtitle')}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="text-lg" asChild>
              <Link href="/schedule" aria-label="Schedule a Live Demo">
                {t('home.ctaPrimary')} <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg"
              onClick={() => {
                document
                  .getElementById('features-section')
                  ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              aria-label="Scroll to features section"
            >
              {t('home.ctaSecondary')}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// --- GLOBAL HEALTHCARE CHALLENGES SECTION ---
function GlobalChallenges() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const panels = [
    {
      title: 'Shortage of Skilled Professionals',
      description:
        'Healthcare systems worldwide are facing a growing shortage of trained professionals. PERCISIO bridges this gap by offering intuitive procedural guidance, empowering even non-experts to perform essential interventions safely and confidently.',
    },
    {
      title: 'Limited Access to Operating Rooms',
      description:
        'Operating rooms for interventional procedures are often scarce or unavailable. PERCISIO provides a portable, easy-to-use system that allows critical medical procedures to start outside traditional operating rooms, wherever care is needed.',
    },
    {
      title: 'Affordable and Accessible Innovation',
      description:
        'Designed with accessibility in mind, PERCISIO is an affordable medical device that brings interventional medicine within reach of more healthcare providers and patients worldwide.',
    },
  ];

  return (
    <section className="bg-secondary/20 py-24" aria-labelledby="challenges-heading">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2
              id="challenges-heading"
              className="mb-12 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl"
            >
              Addressing Global Healthcare Challenges
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {panels.map((panel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="border-border bg-background/80 h-full border p-6 text-left backdrop-blur-md transition-shadow hover:shadow-lg">
                    <CardHeader className="mb-4 p-0">
                      <CardTitle className="text-primary mb-2 text-xl font-semibold">
                        {panel.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground text-base leading-relaxed">
                        {panel.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// --- VIDEO SECTION ---
function VideoSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-black/70"></div>
      <motion.div
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="xs:pt-[65%] relative w-full pt-[75%] sm:pt-[56.25%] md:pt-[50%] lg:pt-[45%] xl:pt-[40%] 2xl:pt-[35%]">
          <iframe
            className="absolute top-0 left-0 h-full w-full rounded-none shadow-xl sm:rounded-lg sm:shadow-2xl"
            src="https://www.youtube.com/embed/AB-lq46epYU?autoplay=0&controls=1&rel=0&modestbranding=1"
            title="Percisio - Roadmapping and Assisted Guidance in IR"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </motion.div>
    </section>
  );
}

// --- FEATURES SECTION
function FeaturesSection({
  t,
  features,
}: {
  t: (key: string) => string;
  features: Array<{
    icon: React.ComponentType<{ className?: string }>;
    titleKey: string;
    descKey: string;
    link: string;
  }>;
}) {
  return (
    <section id="features-section" className="py-20" aria-labelledby="features-heading">
      <AnimatedSection>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 id="features-heading" className="mb-4 text-4xl font-bold md:text-5xl">
              {t('home.featuresTitle')}
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
              {t('home.featuresSubtitle')}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Link href={feature.link} aria-label={`Learn more about ${t(feature.titleKey)}`}>
                  <Card className="group h-full cursor-pointer transition-shadow hover:shadow-lg">
                    <CardHeader>
                      <div className="bg-primary/10 group-hover:bg-primary/20 mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-colors">
                        <feature.icon className="text-primary h-6 w-6" aria-hidden="true" />
                      </div>
                      <CardTitle>{t(feature.titleKey)}</CardTitle>
                      <CardDescription className="text-base">{t(feature.descKey)}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

// --- CTA SECTION ---
function CTASection({ t }: { t: (key: string) => string }) {
  return (
    <section className="py-20" aria-labelledby="cta-heading">
      <AnimatedSection>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 id="cta-heading" className="mb-6 text-4xl font-bold md:text-5xl">
            {t('home.ctaTitle')}
          </h2>
          <p className="text-muted-foreground mb-8 text-xl">{t('home.ctaDescription')}</p>
          <Button size="lg" className="text-lg" asChild>
            <Link href="/schedule" aria-label="Get started with Percisio">
              {t('home.ctaPrimary')} <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </AnimatedSection>
    </section>
  );
}

// --- HOMEPAGE ---
export default function HomePage() {
  const { t } = useTranslations();

  const features = [
    {
      icon: Brain,
      titleKey: 'home.features.precision.title',
      descKey: 'home.features.precision.description',
      link: '/features/precision',
    },
    {
      icon: Activity,
      titleKey: 'home.features.prepTime.title',
      descKey: 'home.features.prepTime.description',
      link: '/features/preptime',
    },
    {
      icon: Shield,
      titleKey: 'home.features.rxReduction.title',
      descKey: 'home.features.rxReduction.description',
      link: '/features/rxreduction',
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      <Header />
      <HeroSection t={t} />
      <GlobalChallenges />
      <VideoSection />
      <FeaturesSection t={t} features={features} />
      <CTASection t={t} />
      <Footer />
    </div>
  );
}
