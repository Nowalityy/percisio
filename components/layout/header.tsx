'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageSwitcher } from '@/components/language-switcher';
import { MegaMenu } from './mega-menu';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const mobileNavigation = [
    {
      nameKey: 'Solutions',
      items: [
        { nameKey: 'nav.project', href: '/about' },
        { nameKey: 'nav.procedure', href: '/case-studies' },
        { nameKey: 'nav.technology', href: '/features/ai-visualization' },
        { nameKey: 'Holographic Roadmapping', href: '/features/holographic-roadmapping' },
        {
          nameKey: "Patient's Data and IT Subsystems",
          href: '/features/patients-data-and-it-subsystems',
        },
      ],
    },
    {
      nameKey: 'Resources',
      items: [
        { nameKey: 'nav.videos', href: '/videos' },
        { nameKey: 'nav.documentation', href: '/blog' },
        { nameKey: 'nav.faq', href: '/faq' },
        { nameKey: 'nav.caseStudies', href: '/case-studies' },
        { nameKey: 'nav.blog', href: '/blog' },
      ],
    },
    {
      nameKey: 'Company',
      items: [
        { nameKey: 'nav.about', href: '/about' },
        { nameKey: 'nav.team', href: '/team' },
        { nameKey: 'Terms of Service', href: '/legal/terms' },
        { nameKey: 'Privacy Policy', href: '/legal/privacy' },
        { nameKey: 'Cookie Policy', href: '/legal/cookies' },
      ],
    },
    { nameKey: 'nav.contact', href: '/contact' },
  ];

  return (
    <header className="border-border bg-background/80 fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-lg">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2" aria-label="Percisio Home">
              <div
                className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600"
                aria-hidden="true"
              />
              <span className="text-xl font-bold">Percisio</span>
            </Link>
          </div>

          <MegaMenu />

          <div className="hidden items-center space-x-4 md:flex">
            <LanguageSwitcher />
            <Button className="w-full" asChild>
              <Link href="/schedule" aria-label="Schedule a Live Demo">
                Schedule a Live Demo
              </Link>
            </Button>
          </div>

          <div className="flex items-center space-x-2 lg:hidden">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
              <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
            </Button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-border bg-background border-b md:hidden"
            role="dialog"
            aria-label="Mobile navigation menu"
          >
            <div className="space-y-4 px-4 pt-2 pb-6">
              {mobileNavigation.map((section) => (
                <div key={section.nameKey}>
                  {section.href ? (
                    <Link
                      href={section.href}
                      className="hover:bg-accent block rounded-md px-3 py-2 text-base font-semibold"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {section.nameKey}
                    </Link>
                  ) : (
                    <>
                      <div className="text-muted-foreground px-3 py-2 text-sm font-semibold tracking-wider uppercase">
                        {section.nameKey}
                      </div>
                      <div className="space-y-1">
                        {section.items?.map((item) => (
                          <Link
                            key={item.nameKey}
                            href={item.href}
                            className="hover:bg-accent block rounded-md px-3 py-2 text-sm"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.nameKey}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
              <div className="border-border space-y-2 border-t pt-4">
                <Button className="w-full" asChild>
                  <Link href="/schedule" aria-label="Schedule a Live Demo">
                    Schedule a Live Demo
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
