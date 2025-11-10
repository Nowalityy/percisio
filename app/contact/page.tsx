'use client';

// HubSpot Forms API declaration
declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (config: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
        }) => void;
      };
    };
  }
}

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { CardContent } from '@/components/ui/card';
import { AnimatedCard } from '@/components/ui/animated-card';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function ContactPage() {
  useEffect(() => {
    // Check if script already exists
    const existingScript = document.getElementById('hs-script-loader');
    if (existingScript) {
      return; // Script already loaded
    }

    const script = document.createElement('script');
    script.src = 'https://js-eu1.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.id = 'hs-script-loader';

    script.onload = () => {
      if (window.hbspt?.forms) {
        window.hbspt.forms.create({
          region: 'eu1',
          portalId: '147085456',
          formId: 'dd0cc51a-4aba-4ce6-ad4f-da34784ff7ff',
          target: '#hs-form-container',
        });
      }
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold md:text-5xl">Contact Our Team </h1>
          </motion.div>

          <div className="flex flex-col items-center gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-xl"
            >
              <AnimatedCard>
                <CardContent>
                  <div id="hs-form-container"></div>
                </CardContent>
              </AnimatedCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden w-full max-w-xl lg:block"
              aria-hidden="true"
            >
              <div className="h-32" />
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
