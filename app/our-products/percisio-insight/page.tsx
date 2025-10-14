import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Activity } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Percisio Insight | Percisio',
  description: 'Advanced analytics and clinical decision support powered by patient data.',
};

export default function InsightPage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Activity className="text-primary mx-auto mb-6 h-20 w-20" />
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">Percisio Insight</h1>
          <p className="text-muted-foreground mx-auto mb-8 max-w-3xl text-xl">
            Advanced analytics and clinical decision support powered by patient data.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
