'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function SchedulePage() {
  const router = useRouter();

  useEffect(() => {
    // Load HubSpot Meetings script
    const script = document.createElement('script');
    script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-4 py-20">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="mb-6 flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <h1 className="mb-8 text-center text-4xl font-bold">Schedule a Live Demo</h1>
          <div className="bg-card rounded-lg border p-6">
            <div className="mb-6 text-center">
              <h2 className="mb-2 text-2xl font-semibold">Book Your Personalized Demo</h2>
              <p className="text-muted-foreground">
                Select a convenient time slot for your live demonstration of Percisio.
              </p>
            </div>
            <div
              className="meetings-iframe-container"
              data-src="https://meetings-eu1.hubspot.com/benoit-marcot?embed=true"
            ></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
