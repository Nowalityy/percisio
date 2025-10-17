'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Activity,
  Target,
  Zap,
  Smartphone,
  Syringe,
  Stethoscope,
  Scissors,
  Radio,
  Package,
  ExternalLink,
  CheckCircle,
  Lightbulb,
  Shield,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

export default function InsightPage() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const attachmentCategories = [
    {
      icon: Syringe,
      title: 'Needles & Catheters',
      items: [
        'Biopsy needles',
        'Percutaneous intervention needles',
        'Epidural needles',
        'Central venous catheters',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Stethoscope,
      title: 'Ultrasound Probes',
      items: ['Linear probe', 'Convex probe'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Scissors,
      title: 'Surgical Instruments',
      items: ['Laparoscopic tools', 'Electrosurgical probes'],
      color: 'from-purple-500 to-violet-500',
    },
    {
      icon: Radio,
      title: 'Endoscopic & Minimally Invasive Instruments',
      items: ['Endoscopic tools', 'Minimally invasive devices'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Zap,
      title: 'Radiation & Laser Therapy Devices',
      items: ['Radiation therapy tools', 'Laser therapy devices'],
      color: 'from-indigo-500 to-blue-500',
    },
  ];

  const keyFeatures = [
    {
      icon: Target,
      title: 'Millimetric Precision',
      description:
        'Tests performed on the 3D abdominal phantom demonstrate that the tracking system ensures millimetric precision.',
    },
    {
      icon: Zap,
      title: 'Real-time Tracking',
      description:
        'Each attachment module is equipped with an electronic system designed to provide real-time spatial tracking.',
    },
    {
      icon: Smartphone,
      title: 'Lightweight Design',
      description:
        'Every attachment module is light enough to not disturb the practitioner during the operation.',
    },
    {
      icon: Package,
      title: 'Portable Setup',
      description:
        'The Percisio setup is lighter than any comparable product and can be easily transported in a small bag.',
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
              <h1 className="mb-6 text-5xl font-bold md:text-6xl">Percisio Insight</h1>
              <Badge className="mb-4" variant="secondary">
                A smart tracking system for any medical device
              </Badge>
              <p className="text-muted-foreground mx-auto mb-8 max-w-4xl text-xl leading-relaxed">
                PERCISIO comes with a comprehensive set of attachment modules, each equipped with an
                electronic system designed to provide real-time spatial tracking. The following
                illustration shows the needle module used for percutaneous procedures.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="bg-muted/20 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">Key Features</h2>
              <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
                Advanced tracking technology for precise medical procedures
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {keyFeatures.map((feature, index) => (
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

        {/* Sun Nuclear Phantom Section */}
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
                        <Target className="text-primary h-6 w-6" />
                        <CardTitle className="text-2xl">Sun Nuclear Abdominal Phantoms</CardTitle>
                      </div>
                      <CardDescription className="text-lg">
                        Tests performed on the 3D abdominal phantom demonstrate that the tracking
                        system ensures millimetric precision, which can be enhanced with any type of
                        ultrasound probe.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        The <strong>Multi-Modality Abdominal Biopsy Phantoms</strong> are suitable
                        for CT, MRI and Ultrasound, providing simplified abdominal phantoms suitable
                        for training and demonstrating image-guided needle biopsy navigation tools.
                      </p>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <h4 className="mb-2 font-semibold">
                            Triple Modality 3D Abdominal Phantom
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline">26 x 19 x 12.5 cm</Badge>
                            <Badge variant="outline">11 lbs (5 kg)</Badge>
                            <Badge variant="outline">Re-usable</Badge>
                          </div>
                        </div>
                        <div>
                          <h4 className="mb-2 font-semibold">
                            Image-Guided Abdominal Biopsy Phantom
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline">28 x 20 x 12.5 cm</Badge>
                            <Badge variant="outline">12.1 lbs (5.5 kg)</Badge>
                            <Badge variant="outline">12 masses (5-12 mm)</Badge>
                          </div>
                        </div>
                      </div>
                      <Link
                        href="https://www.sunnuclear.com/products/multi-modality-abdominal-biopsy-phantoms"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 inline-flex items-center gap-2 transition-colors"
                      >
                        Learn more about Sun Nuclear Phantoms
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        Precision Testing
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Tests performed on the 3D abdominal phantom demonstrate that the tracking
                        system ensures millimetric precision, which can be enhanced with any type of
                        ultrasound probe.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Lightbulb className="h-5 w-5" />
                        Enhanced Performance
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Improve performance of freehand abdominal biopsies and validate automated
                        biopsy systems with comprehensive tracking capabilities.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Attachment Modules Section */}
        <section className="bg-muted/20 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                Compatible Medical Instruments
              </h2>
              <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
                Attachments can fit a wide range of medical instruments
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {attachmentCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="mb-4 flex items-center gap-3">
                        <div
                          className={`bg-gradient-to-r ${category.color} flex h-12 w-12 items-center justify-center rounded-xl shadow-lg`}
                        >
                          <category.icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-xl">{category.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-muted-foreground flex items-center gap-2"
                          >
                            <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-500" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Setup & Benefits Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">The Setup</h2>
              <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
                Redefining medical procedures with portable, lightweight technology
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Package className="h-6 w-6" />
                      Portable Design
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      The Percisio setup is lighter than any comparable product and can be easily
                      transported in a small bag from one room to another or even outside the
                      hospital.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Lightweight</Badge>
                      <Badge variant="outline">Portable</Badge>
                      <Badge variant="outline">Easy transport</Badge>
                      <Badge variant="outline">Small bag size</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      New Standard
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      This new standard redefines medical procedures for various applications and
                      helps reduce congestion in critical services.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="h-5 w-5" />
                      Wide Applications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Suitable for various medical applications including biopsies, percutaneous
                      interventions, surgical procedures, and therapeutic treatments.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
