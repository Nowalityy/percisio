'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from '@/lib/hooks/use-translations';

interface MegaMenuItem {
  title: string;
  description?: string;
  href: string;
}

interface MegaMenuSection {
  title: string;
  items: MegaMenuItem[];
}

interface NavItem {
  label: string;
  href?: string;
  sections?: MegaMenuSection[];
}

export function MegaMenu() {
  const { t } = useTranslations();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();

  const navigation: NavItem[] = [
    {
      label: t('nav.solutions'),
      sections: [
        {
          title: t('nav.project'),
          items: [
            {
              title: t('nav.percisioGuidance'),
              description: t('nav.percisioGuidanceDesc'),
              href: '/our-products/percisio-guidance',
            },
            {
              title: t('nav.percisioInsight'),
              description: t('nav.percisioInsightDesc'),
              href: '/our-products/percisio-insight',
            },
          ],
        },
        {
          title: t('nav.byApplication'),
          items: [
            {
              title: t('nav.hepaticDrainage'),
              description: t('nav.hepaticDrainageDesc'),
              href: '/applications/hepatic-drainage',
            },
            {
              title: t('nav.biopsy'),
              description: t('nav.biopsyDesc'),
              href: '/applications/biopsy',
            },
            {
              title: t('nav.pleuralDrainage'),
              description: t('nav.pleuralDrainageDesc'),
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
            {
              title: t('nav.blog'),
              description: t('nav.blogDesc'),
              href: '/insights/blog',
            },
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

  const isActive = (href?: string, sections?: MegaMenuSection[]) => {
    if (href) return pathname === href;
    if (sections)
      return sections.some((section) => section.items.some((item) => pathname === item.href));
    return false;
  };

  return (
    <nav className="hidden items-center space-x-1 lg:flex">
      {navigation.map((item) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => item.sections && setActiveMenu(item.label)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          {item.href ? (
            <Link
              href={item.href}
              className={`px-4 py-2 text-sm font-medium ${
                isActive(item.href) ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {item.label}
            </Link>
          ) : (
            <button
              className={`flex items-center gap-1 px-4 py-2 text-sm font-medium ${
                isActive(undefined, item.sections) ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {item.label}
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
          )}

          <AnimatePresence>
            {item.sections && activeMenu === item.label && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="border-border bg-background absolute top-full left-0 mt-2 overflow-hidden rounded-lg border shadow-2xl"
                style={{ minWidth: '500px' }}
              >
                <div className="grid grid-cols-2 gap-8 p-6">
                  {item.sections.map((section) => (
                    <div key={section.title}>
                      <h3 className="text-muted-foreground mb-3 text-xs font-semibold tracking-wider uppercase">
                        {section.title}
                      </h3>
                      <div className="space-y-1">
                        {section.items.map((menuItem) => (
                          <Link
                            key={menuItem.href}
                            href={menuItem.href}
                            className="block rounded-md px-3 py-2"
                          >
                            <div className="text-sm font-medium">
                              {menuItem.title}
                            </div>
                            {menuItem.description && (
                              <div className="text-muted-foreground mt-0.5 text-xs">
                                {menuItem.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </nav>
  );
}
