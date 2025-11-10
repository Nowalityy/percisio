'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setShowBanner(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookie-consent', 'necessary');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed right-4 bottom-4 left-4 z-50 mx-auto max-w-2xl"
        >
          <Card className="border-2 p-6 shadow-2xl">
            <h3 className="mb-2 text-lg font-semibold">Cookie Consent</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              We use cookies to enhance your browsing experience, serve personalized content, and
              analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of
              cookies.{' '}
              <Link href="/legal/cookies" className="underline">
                Read our Cookie Policy
              </Link>
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button onClick={acceptAll} className="flex-1">
                Accept All
              </Button>
              <Button onClick={acceptNecessary} variant="outline" className="flex-1">
                Necessary Only
              </Button>
            </div>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
