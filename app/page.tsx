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
          <ClientScene cameraPosition={[0, 0, 3]} />
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
            <AnimatedButton delay={0.2} size="lg" className="text-lg" asChild>
              <Link href="/schedule" aria-label="Schedule a Live Demo">
                {t('home.ctaPrimary')} <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </AnimatedButton>
            <AnimatedButton
              delay={0.4}
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
            </AnimatedButton>
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
            src="https://www.youtube.com/embed/zgXU63Wfcu4?si=F_3CYGn7XbQhCpet"
            title="Percisio - An overview of Percisio's cutting-edge technology"
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
                      <motion.div
                        className="bg-primary/10 group-hover:bg-primary/20 mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-colors"
                        whileHover={{ rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <feature.icon className="text-primary h-6 w-6" aria-hidden="true" />
                      </motion.div>
                      <CardTitle>{t(feature.titleKey)}</CardTitle>
                      <CardDescription className="text-base">{t(feature.descKey)}</CardDescription>
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
      className="from-muted/20 to-background bg-gradient-to-b py-20"
      aria-labelledby="more-features-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <motion.h2
            id="more-features-heading"
            className="mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Discover More Features
          </motion.h2>
          <motion.p
            className="text-muted-foreground mx-auto max-w-3xl text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Explore additional capabilities that make Percisio the comprehensive solution for modern
            healthcare.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <HoverCard delay={index * 0.1} hoverContent={`Learn more about ${feature.title}`}>
                <Card className="group h-full cursor-pointer transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <motion.div
                        className={`bg-gradient-to-r ${feature.color} flex h-12 w-12 items-center justify-center rounded-xl shadow-lg`}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <feature.icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <CardTitle className="group-hover:text-primary text-lg transition-colors">
                          {feature.title}
                        </CardTitle>
                        <CardDescription className="text-sm leading-relaxed">
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
    <section className="py-20" aria-labelledby="cta-heading">
      <AnimatedSection>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 id="cta-heading" className="mb-6 text-4xl font-bold md:text-5xl">
            {t('home.ctaTitle')}
          </h2>
          <p className="text-muted-foreground mb-8 text-xl">{t('home.ctaDescription')}</p>
          <AnimatedButton delay={0.2} size="lg" className="text-lg" asChild>
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
      <AdditionalFeaturesSection />
      <CTASection t={t} />
      <Footer />
    </div>
  );
}
