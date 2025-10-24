'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/shared/animated-section';
import { AnimatedCard } from '@/components/ui/animated-card';
import { AnimatedButton } from '@/components/ui/animated-button';
import { HoverCard } from '@/components/ui/hover-card';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslations } from '@/lib/hooks/use-translations';
import { Brain, Shield, Activity, ArrowRight, Play, CheckCircle, Users, Award } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Suspense, lazy, useState } from 'react';

const ClientScene = dynamic(
  () => import('@/components/3d/client-scene').then((mod) => mod.ClientScene),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full bg-gradient-to-br from-cyan-500/10 to-blue-600/10" />
    ),
  }
);

// Lazy load heavy components
const LazyAdditionalFeaturesSection = lazy(() =>
  Promise.resolve({ default: AdditionalFeaturesSection })
);

// YouTube Facade for performance optimization
function YouTubeFacade() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const { ref } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    onChange: (inView) => setIsIntersecting(inView),
  });

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div ref={ref} className="absolute top-0 left-0 h-full w-full">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center rounded-none bg-black sm:rounded-lg">
          <div className="text-center text-white">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-600">
              <Play className="ml-1 h-8 w-8" />
            </div>
            <p className="text-sm">Click to load video</p>
          </div>
        </div>
      )}
      {isIntersecting && (
        <iframe
          className="absolute top-0 left-0 h-full w-full rounded-none shadow-xl sm:rounded-lg sm:shadow-2xl"
          src="https://www.youtube.com/embed/zgXU63Wfcu4?si=F_3CYGn7XbQhCpet&rel=0&modestbranding=1"
          title="Percisio - An overview of Percisio's cutting-edge technology"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          onLoad={handleLoad}
        />
      )}
    </div>
  );
}

// --- HERO SECTION ---
function HeroSection({ t }: { t: (key: string) => string }) {
  return (
    <section
      className="relative flex min-h-screen items-center py-16 sm:py-20 lg:py-24"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                type: 'tween',
              }}
              className="fade-in-up"
            >
              <h1
                id="hero-heading"
                className="mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-3xl font-bold text-transparent sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl"
              >
                {t('home.title')}
              </h1>
              <p className="text-muted-foreground mx-auto mb-6 max-w-2xl text-base sm:mb-8 sm:text-lg md:text-xl lg:mx-0">
                {t('home.subtitle')}
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
                <AnimatedButton delay={0.2} size="lg" className="text-base sm:text-lg" asChild>
                  <Link href="/schedule" aria-label="Schedule a Live Demo">
                    {t('home.ctaPrimary')}{' '}
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Link>
                </AnimatedButton>
                <AnimatedButton
                  delay={0.4}
                  size="lg"
                  variant="outline"
                  className="text-base sm:text-lg"
                  onClick={() => {
                    document
                      .getElementById('features-section')
                      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  aria-label="Scroll to features section"
                >
                  {t('home.ctaSecondary')}
                </AnimatedButton>
              </div>
            </motion.div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: 0.2,
              }}
              className="fade-in-right img-fade-in relative"
            >
              <img
                src="/cam_percisio.png"
                alt="PERCISIO Medical Device"
                className="h-auto max-w-full rounded-lg shadow-xl sm:max-w-md lg:max-w-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- GLOBAL HEALTHCARE CHALLENGES SECTION ---
function GlobalChallenges() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '50px',
  });
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
    <section
      className="bg-secondary/20 section-fade-in py-12 sm:py-16 md:py-20 lg:py-24"
      aria-labelledby="challenges-heading"
    >
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2
              id="challenges-heading"
              className="mb-8 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-2xl font-bold text-transparent sm:mb-10 sm:text-3xl md:mb-12 md:text-4xl lg:text-5xl"
            >
              Addressing Global Healthcare Challenges
            </h2>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {panels.map((panel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: 'easeOut',
                    type: 'tween',
                  }}
                >
                  <Card className="border-border bg-background/80 card-hover fade-in-up h-full border p-4 text-left backdrop-blur-md transition-shadow hover:shadow-lg sm:p-6">
                    <CardHeader className="mb-4 p-0">
                      <CardTitle className="text-primary mb-2 text-lg font-semibold sm:text-xl">
                        {panel.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground text-sm leading-relaxed sm:text-base">
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
    <section className="section-fade-in relative w-full overflow-hidden bg-black py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20">
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-black/70"></div>
      <motion.div
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="relative w-full pt-[65%] sm:pt-[60%] md:pt-[55%] lg:pt-[50%] xl:pt-[45%]">
          <YouTubeFacade />
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
    <section
      id="features-section"
      className="py-12 sm:py-16 md:py-20"
      aria-labelledby="features-heading"
    >
      <AnimatedSection>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-14 md:mb-16">
            <h2
              id="features-heading"
              className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl"
            >
              {t('home.featuresTitle')}
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-base sm:text-lg md:text-xl">
              {t('home.featuresSubtitle')}
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <HoverCard
                key={index}
                delay={index * 0.1}
                hoverContent={`Learn more about ${t(feature.titleKey)}`}
              >
                <Link href={feature.link} aria-label={`Learn more about ${t(feature.titleKey)}`}>
                  <AnimatedCard
                    delay={index * 0.1}
                    hoverScale={1.05}
                    className="group h-full cursor-pointer"
                  >
                    <CardHeader>
                      <div className="bg-primary/10 group-hover:bg-primary/20 mb-3 flex h-10 w-10 items-center justify-center rounded-lg transition-colors sm:mb-4 sm:h-12 sm:w-12">
                        <feature.icon
                          className="text-primary h-5 w-5 sm:h-6 sm:w-6"
                          aria-hidden="true"
                        />
                      </div>
                      <CardTitle>{t(feature.titleKey)}</CardTitle>
                      <CardDescription className="text-sm sm:text-base">
                        {t(feature.descKey)}
                      </CardDescription>
                    </CardHeader>
                  </AnimatedCard>
                </Link>
              </HoverCard>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

// --- ADDITIONAL FEATURES SECTION ---
function AdditionalFeaturesSection() {
  const additionalFeatures = [
    {
      icon: Users,
      title: 'Multi-User Collaboration',
      description:
        'Enable real-time collaboration between medical teams with shared visualization and annotation tools.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Award,
      title: 'Clinical Validation',
      description:
        'Extensively tested and validated in clinical settings with proven results across multiple institutions.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description:
        'Built-in quality checks and validation protocols ensure consistent and reliable performance.',
      color: 'from-purple-500 to-violet-500',
    },
    {
      icon: Play,
      title: 'Training Modules',
      description:
        'Comprehensive training programs and interactive modules to ensure successful implementation.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description:
        'Advanced machine learning algorithms provide intelligent recommendations and predictive analytics.',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Shield,
      title: 'Data Security',
      description:
        'Enterprise-grade security protocols ensure patient data protection and regulatory compliance.',
      color: 'from-teal-500 to-green-500',
    },
  ];

  return (
    <section
      className="from-muted/20 to-background bg-gradient-to-b py-12 sm:py-16 md:py-20"
      aria-labelledby="more-features-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-14 md:mb-16">
          <motion.h2
            id="more-features-heading"
            className="mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-2xl font-bold text-transparent sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Discover More Features
          </motion.h2>
          <motion.p
            className="text-muted-foreground mx-auto max-w-3xl text-base sm:text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Explore additional capabilities that make Percisio the comprehensive solution for modern
            healthcare.
          </motion.p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <HoverCard delay={index * 0.1} hoverContent={`Learn more about ${feature.title}`}>
                <Card className="group card-hover fade-in-up h-full cursor-pointer transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div
                        className={`bg-gradient-to-r ${feature.color} flex h-10 w-10 items-center justify-center rounded-xl shadow-lg sm:h-12 sm:w-12`}
                      >
                        <feature.icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="group-hover:text-primary text-base transition-colors sm:text-lg">
                          {feature.title}
                        </CardTitle>
                        <CardDescription className="text-xs leading-relaxed sm:text-sm">
                          {feature.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </HoverCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- CTA SECTION ---
function CTASection({ t }: { t: (key: string) => string }) {
  return (
    <section className="py-12 sm:py-16 md:py-20" aria-labelledby="cta-heading">
      <AnimatedSection>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2
            id="cta-heading"
            className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl"
          >
            {t('home.ctaTitle')}
          </h2>
          <p className="text-muted-foreground mb-6 text-base sm:mb-8 sm:text-lg md:text-xl">
            {t('home.ctaDescription')}
          </p>
          <AnimatedButton delay={0.2} size="lg" className="text-base sm:text-lg" asChild>
            <Link href="/schedule" aria-label="Get started with Percisio">
              {t('home.ctaPrimary')} <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </AnimatedButton>
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
      <Suspense fallback={<div className="py-12 sm:py-16 md:py-20" />}>
        <LazyAdditionalFeaturesSection />
      </Suspense>
      <CTASection t={t} />
      <Footer />
    </div>
  );
}
