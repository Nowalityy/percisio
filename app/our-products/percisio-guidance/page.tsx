'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity, Eye, Target, Shield, Monitor, Layers, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

export default function GuidancePage() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const features = [
    {
      icon: Eye,
      title: 'Computer Vision Technology',
      description:
        'Uses depth camera technology to scan and automatically recognize spatial volumes in real-time.',
    },
    {
      icon: Target,
      title: 'Automatic Volume Recognition',
      description:
        'When a detected volume matches the expected reference, PERCISIO displays the hologram on screen.',
    },
    {
      icon: Shield,
      title: 'Continuous Monitoring',
      description:
        'Continuously monitors the volume to ensure the patient remains still during the procedure.',
    },
    {
      icon: Monitor,
      title: 'Multiple View Options',
      description:
        'Practitioners can access different views depending on the context and procedure requirements.',
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Activity className="text-primary mx-auto mb-6 h-20 w-20" />
              <h1 className="mb-6 text-5xl font-bold md:text-6xl">Percisio Guidance</h1>
              <Badge className="mb-4" variant="secondary">
                A system based on computer vision
              </Badge>
              <p className="text-muted-foreground mx-auto mb-8 max-w-4xl text-xl leading-relaxed">
                PERCISIO uses depth camera technology to scan its environment and automatically
                recognize spatial volumes. When a detected volume matches the expected reference,
                PERCISIO displays the hologram on screen.
              </p>
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-muted/20 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">How It Works</h2>
              <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
                Advanced computer vision technology for precise medical guidance
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center">
                    <CardHeader>
                      <div className="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                        <feature.icon className="text-primary h-8 w-8" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* KYOTO KAGAKU Phantom Section */}
        <section ref={ref} className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-16 text-center">
                <h2 className="mb-6 text-4xl font-bold md:text-5xl">Testing & Validation</h2>
                <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
                  Validated using industry-standard phantoms for accurate testing
                </p>
              </div>

              <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="mb-4 flex items-center gap-3">
                        <Layers className="text-primary h-6 w-6" />
                        <CardTitle className="text-2xl">KYOTO KAGAKU Phantom</CardTitle>
                      </div>
                      <CardDescription className="text-lg">
                        In our example, PERCISIO displays a hologram of the KYOTO KAGAKU phantom
                        used for testing purposes.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        The <strong>Whole Body Phantom &quot;PBU-50&quot;</strong> is an essential
                        asset for every radiography program, featuring radiology absorption and HU
                        numbers approximate to human body with main joints having close-to-human
                        articulation.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">165 cm height</Badge>
                        <Badge variant="outline">50 kg weight</Badge>
                        <Badge variant="outline">10 disassemblable parts</Badge>
                        <Badge variant="outline">No metal parts</Badge>
                      </div>
                      <Link
                        href="https://www.kyotokagaku.com/en/products_data/ph-2_01/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 inline-flex items-center gap-2 transition-colors"
                      >
                        Learn more about KYOTO KAGAKU Phantom
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Eye className="h-5 w-5" />
                        Volume Recognition Process
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        After the match, PERCISIO continuously monitors the volume to ensure the
                        patient remains still during the procedure. Practitioner can then perform
                        the operation in complete peace.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Monitor className="h-5 w-5" />
                        Multiple View Options
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        The practitioner can access different views depending on the context. On the
                        left, the hologram is shown without the skin, revealing the liver and the
                        yellow sphere representing the abscess. On the right, the hologram includes
                        the skin, with the entry zone highlighted in light green—indicating where
                        the practitioner must perform the percutaneous procedure.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-muted/20 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">Key Benefits</h2>
              <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
                Enhanced precision and safety for medical procedures
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                      <Target className="h-8 w-8 text-green-500" />
                    </div>
                    <CardTitle className="text-xl">Precise Targeting</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      Real-time holographic guidance ensures accurate targeting of anatomical
                      structures and procedures.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10">
                      <Shield className="h-8 w-8 text-blue-500" />
                    </div>
                    <CardTitle className="text-xl">Enhanced Safety</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      Continuous monitoring ensures patient stability and reduces the risk of
                      complications during procedures.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/10">
                      <Activity className="h-8 w-8 text-purple-500" />
                    </div>
                    <CardTitle className="text-xl">Real-time Feedback</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      Instant visual feedback allows practitioners to make informed decisions during
                      complex procedures.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
