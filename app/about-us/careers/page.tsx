import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Career| Percisio',
  description: 'Explore exciting career opportunities at Percisio and join our innovative team.',
};

export default function CareerPage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <Users className="text-primary mx-auto mb-6 h-20 w-20" />
            <h1 className="mb-6 text-5xl font-bold md:text-6xl">Careers at Percisio</h1>
            <p className="text-muted-foreground mx-auto mb-8 max-w-3xl text-xl">
              Join our innovative team and help shape the future of medical technology. We&apos;re
              building cutting-edge solutions that improve patient outcomes worldwide.
            </p>
            <Button size="lg" asChild>
              <Link href="/about-us/careers/apply">Apply Now</Link>
            </Button>
          </div>

          {/* Why Join Us Section */}
          <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 text-center">
              <div className="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Innovation First</h3>
              <p className="text-muted-foreground">
                Work on groundbreaking medical technology that makes a real difference in
                healthcare.
              </p>
            </div>
            <div className="p-6 text-center">
              <div className="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Global Impact</h3>
              <p className="text-muted-foreground">
                Be part of a mission to improve medical care accessibility worldwide.
              </p>
            </div>
            <div className="p-6 text-center">
              <div className="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Great Team</h3>
              <p className="text-muted-foreground">
                Collaborate with talented professionals in a supportive, growth-oriented
                environment.
              </p>
            </div>
          </div>

          {/* Open Positions Section */}
          <div className="text-center">
            <h2 className="mb-8 text-3xl font-bold">Open Positions</h2>
            <div className="bg-muted/50 mb-8 rounded-lg p-8">
              <p className="text-muted-foreground mb-4">
                We&apos;re always looking for exceptional talent to join our team.
              </p>
              <p className="text-muted-foreground mb-6">
                Don&apos;t see a specific role that matches your skills? We&apos;d still love to
                hear from you!
              </p>
              <Button size="lg" asChild>
                <Link href="/about-us/careers/apply">Submit Your Application</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
