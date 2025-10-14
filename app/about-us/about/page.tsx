import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Award, Globe, Zap, Users } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Leading Medical AR Technology',
  description:
    'Learn about Percisio, our patented Class IIA medical device, and our mission to transform minimally invasive procedures through AI-powered augmented reality.',
  openGraph: {
    title: 'About Percisio - Leading Medical AR Technology',
    description:
      'Pioneering the future of surgical visualization with AI-powered augmented reality and holographic guidance.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-5xl font-bold md:text-6xl">About Percisio</h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
              Percisio is a Class IIA medical device protected by a European patent, leveraging
              AI-powered augmented reality and holograms to guide minimally invasive procedures with
              precision, even for non-experts.
            </p>
          </div>

          <div className="mb-20 grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Target className="text-primary mb-4 h-12 w-12" />
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enhance surgical outcomes and patient safety through innovative holographic and
                  AR-guided procedures, making complex medical tasks accessible to all
                  practitioners.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="text-primary mb-4 h-12 w-12" />
                <CardTitle>Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Precision, innovation, and smart integration. We believe the best medical
                  solutions come from thoughtful design and intelligent use of existing
                  technologies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="text-primary mb-4 h-12 w-12" />
                <CardTitle>Global Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Addressing the global shortage of medical experts, serving hospitals worldwide,
                  and enabling remote guidance through advanced imaging and AR technology.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <Zap className="text-primary mb-4 h-12 w-12" />
                <CardTitle>Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  PERCISIO adopts a hologram-based approach to map patient anatomy, track
                  instruments in real time, and provide on-screen guidance for procedures like
                  percutaneous drainage of liver abscesses.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="text-primary mb-4 h-12 w-12" />
                <CardTitle>Philosophy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Built as a DIY project to rival big medical companies, Percisio emphasizes
                  ergonomics, efficiency, and the smartest integration of available subsystems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
