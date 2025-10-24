'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Activity,
  Eye,
  Target,
  Shield,
  Monitor,
  Layers,
  ExternalLink,
  Zap,
  CheckCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';

export default function GuidancePage() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const applications = [
    {
      title: 'Biopsy',
      description: 'Precise tissue sampling with real-time guidance',
    },
    {
      title: 'Infiltration',
      description: 'Accurate injection procedures with visual support',
    },
    {
      title: 'Puncture',
      description: 'Safe needle placement with continuous monitoring',
    },
    {
      title: 'Drainage',
      description: 'Efficient fluid removal with guided access',
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
              <h1 className="mb-6 text-5xl font-bold md:text-6xl">PERCISIO Guidance</h1>
              <Badge className="mb-4" variant="secondary">
                A new standard for medicine
              </Badge>
              <p className="text-muted-foreground mx-auto mb-8 max-w-4xl text-xl leading-relaxed">
                Introducing PERCISIO Guidance, a new standard for medicine.
              </p>
            </motion.div>
          </div>
        </section>

        {/* The Power of Computer Vision Section */}
        <section className="bg-muted/20 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">The Power of Computer Vision</h2>
              <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
                PERCISIO is powered by computer vision, providing you with a state-of-the-art
                assistance system that actively tracks medical instruments during procedures.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="mb-4 flex items-center gap-3">
                    <Eye className="text-primary h-6 w-6" />
                    <CardTitle className="text-2xl">Advanced Computer Vision</CardTitle>
                  </div>
                  <CardDescription className="text-lg">
                    This technology supports practitioners in both interventional and
                    non-interventional medicine.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Thanks to this support system, performing a medical procedure with PERCISIO
                    becomes effortless, enhancing both safety and efficiency.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Real-time Tracking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Advanced computer vision technology actively tracks medical instruments during
                    procedures, providing continuous support for practitioners.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Effortless Procedures
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Thanks to this support system, performing a medical procedure with PERCISIO
                    becomes effortless, enhancing both safety and efficiency.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Medical Applications Gallery Section */}
        <section ref={ref} className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-16 text-center">
                <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                  Medical Applications in Practice
                </h2>
                <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
                  PERCISIO is built to assist practitioners across various applications, from
                  controls to critical percutaneous interventions.
                </p>
              </div>

              {/* Professional Medical Gallery */}
              <div className="mb-16">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {/* Needle Guidance Procedure */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src="/guidance_image/body_probe_needle-4.jpg"
                        alt="PERCISIO Needle Guidance Procedure"
                        width={400}
                        height={300}
                        className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-lg font-semibold">Needle Guidance</h3>
                      <p className="text-muted-foreground text-sm">
                        Precise needle placement with real-time tracking
                      </p>
                    </div>
                  </motion.div>

                  {/* Abscess Treatment 1 */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src="/guidance_image/abscess1.jpg"
                        alt="PERCISIO Abscess Treatment Procedure"
                        width={400}
                        height={300}
                        className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-lg font-semibold">Abscess Treatment</h3>
                      <p className="text-muted-foreground text-sm">
                        Guided drainage procedures with enhanced precision
                      </p>
                    </div>
                  </motion.div>

                  {/* Abscess Treatment 2 */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src="/guidance_image/abscess2.jpg"
                        alt="PERCISIO Advanced Abscess Treatment"
                        width={400}
                        height={300}
                        className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-lg font-semibold">Advanced Treatment</h3>
                      <p className="text-muted-foreground text-sm">
                        Complex procedures with computer vision support
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Essential Procedures List */}
              <div className="mb-12">
                <Card className="mx-auto max-w-4xl">
                  <CardHeader>
                    <div className="mb-4 flex items-center gap-3">
                      <Layers className="text-primary h-6 w-6" />
                      <CardTitle className="text-2xl">Essential Procedures</CardTitle>
                    </div>
                    <CardDescription className="text-lg">
                      This indispensable tool supports essential procedures such as:
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      {applications.map((app, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="text-primary h-5 w-5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">{app.title}</p>
                            <p className="text-muted-foreground text-sm">{app.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Seamless Integration Section */}
        <section className="bg-muted/20 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                Seamless Integration and Flexibility
              </h2>
              <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
                We understand the need for adaptability in the clinical setting.
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
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10">
                      <Zap className="h-8 w-8 text-blue-500" />
                    </div>
                    <CardTitle className="text-xl">Extensive Compatibility</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      PERCISIO can be integrated with an extensive array of tools, ensuring
                      compatibility with your current inventory.
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
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                      <Monitor className="h-8 w-8 text-green-500" />
                    </div>
                    <CardTitle className="text-xl">Universal Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      Whether you are using ultrasound probes or various clinical needles, PERCISIO
                      works right alongside you.
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
                    <CardTitle className="text-xl">Modern Design</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      Beyond its technical sophistication, PERCISIO is designed for the modern
                      practice: it is lightweight, mobile, and user-friendly.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="mt-16 text-center">
              <Card className="mx-auto max-w-4xl">
                <CardContent className="py-12">
                  <h3 className="mb-6 text-3xl font-bold">Adopt PERCISIO Today</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    The solution that brings simplicity and technological advancement to the
                    forefront of your medical procedures.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
