'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageSwitcher } from '@/components/language-switcher';
import { MegaMenu } from './mega-menu';
import { useTranslations } from '@/lib/hooks/use-translations';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslations();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const mobileNavigation = [
    {
      label: t('nav.solutions'),
      sections: [
        {
          title: t('nav.project'),
          items: [
            {
              title: 'Percisio Guidance',
              description: 'Real-time 3D navigation and roadmapping for image-guided interventions',
              href: '/our-products/percisio-guidance',
            },
            {
              title: 'Percisio Insight',
              description:
                'Advanced analytics and clinical decision support powered by patient data',
              href: '/our-products/percisio-insight',
            },
          ],
        },
        {
          title: 'By Application',
          items: [
            {
              title: 'Hepatic Drainage',
              description: 'A classic of interventional radiology',
              href: '/applications/hepatic-drainage',
            },
            {
              title: 'Biopsy',
              description: 'End-to-end guidance for minimally invasive biopsies',
              href: '/applications/biopsy',
            },
            {
              title: 'Pleural Drainage',
              description: 'Quick and efficient drainage of pleural fluid',
              href: '/applications/pleural-drainage',
            },
          ],
        },
      ],
    },
    {
      label: t('nav.resources'),
      sections: [
        {
          title: t('nav.resources'),
          items: [
            { title: t('nav.videos'), description: t('nav.videosDesc'), href: '/learn/videos' },
            { title: t('nav.faq'), description: t('nav.faqDesc'), href: '/learn/faq' },
          ],
        },
        {
          title: t('nav.insights'),
          items: [
            {
              title: t('nav.caseStudies'),
              description: t('nav.caseStudiesDesc'),
              href: '/insights/case-studies',
            },
            { title: t('nav.blog'), description: t('nav.blogDesc'), href: '/insights/blog' },
          ],
        },
      ],
    },
    {
      label: t('nav.about'),
      href: '/about-us/about',
    },
    {
      label: t('nav.contact'),
      href: '/contact',
    },
  ];

  return (
    <header className="border-border fixed inset-x-0 top-0 z-50 border-b bg-transparent backdrop-blur-md">
      <nav className="w-full px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div>
              <Link href="/" className="flex items-center space-x-2" aria-label="Percisio Home">
                <div
                  className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600"
                  aria-hidden="true"
                />
                <span className="text-xl font-bold">Percisio</span>
              </Link>
            </div>
          </div>

          <MegaMenu />

          <div className="hidden items-center space-x-4 lg:flex">
            <LanguageSwitcher />
            <div>
              <Button className="w-full" asChild>
                <Link href="/schedule" aria-label="Schedule a Live Demo">
                  Schedule a Live Demo
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-2 lg:hidden">
            <LanguageSwitcher />
            <div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                className="min-h-[44px] min-w-[44px]"
              >
                <div>
                  {mobileMenuOpen ? (
                    <X className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="h-6 w-6" aria-hidden="true" />
                  )}
                </div>
                <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-border bg-background max-h-[80vh] overflow-y-auto overscroll-contain scroll-smooth border-b lg:hidden"
            role="dialog"
            aria-label="Mobile navigation menu"
          >
            <div className="space-y-4 px-4 pt-2 pb-6">
              {/* Scroll indicator */}
              <div className="text-muted-foreground mb-2 text-center text-xs">
                Scroll to see all options
              </div>
              {mobileNavigation.map((section) => (
                <div key={section.label}>
                  {section.href ? (
                    <Link
                      href={section.href}
                      className="block flex min-h-[44px] items-center rounded-md px-3 py-3 text-base font-semibold"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {section.label}
                    </Link>
                  ) : (
                    <>
                      <div className="text-muted-foreground px-3 py-2 text-sm font-semibold tracking-wider uppercase">
                        {section.label}
                      </div>
                      {section.sections?.map((subsection) => (
                        <div key={subsection.title} className="ml-4">
                          <div className="text-muted-foreground px-3 py-1 text-xs font-medium tracking-wider uppercase">
                            {subsection.title}
                          </div>
                          <div className="space-y-1">
                            {subsection.items.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                className="block flex min-h-[44px] items-center rounded-md px-3 py-3 text-sm"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <div>
                                  <div className="font-medium">{item.title}</div>
                                  {'description' in item && item.description && (
                                    <div className="text-muted-foreground mt-1 text-xs">
                                      {item.description}
                                    </div>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              ))}
              <div className="border-border space-y-2 border-t pt-4">
                <Button className="min-h-[44px] w-full" asChild>
                  <Link href="/schedule" aria-label="Schedule a Live Demo">
                    {t('home.ctaPrimary')}
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
