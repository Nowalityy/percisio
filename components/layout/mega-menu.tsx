'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();

  const navigation: NavItem[] = [
    {
      label: 'Solutions',
      sections: [
        {
          title: 'Our Products',
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
      label: 'Resources',
      sections: [
        {
          title: 'Learn',
          items: [
            {
              title: 'Videos',
              description: 'Product demos and tutorials',
              href: '/learn/videos',
            },
            {
              title: 'Documentation',
              description: 'Technical guides and API docs',
              href: '/learn/documentation',
            },
            {
              title: 'FAQ',
              description: 'Common questions answered',
              href: '/learn/faq',
            },
          ],
        },
        {
          title: 'Insights',
          items: [
            {
              title: 'Case Studies',
              description: 'Real-world success stories',
              href: '/case-studies',
            },
            {
              title: 'Blog',
              description: 'Latest news and insights',
              href: '/blog',
            },
          ],
        },
      ],
    },
    {
      label: 'Company',
      sections: [
        {
          title: 'About Us',
          items: [
            {
              title: 'About Percisio',
              description: 'Our mission and vision',
              href: '/about-us/about',
            },
            {
              title: 'Team',
              description: 'Meet the experts',
              href: '/about-us/team',
            },
            {
              title: 'Careers',
              description: 'Join our team',
              href: '/about-us/career',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            { title: 'Terms of Service', href: '/legal/terms' },
            { title: 'Privacy Policy', href: '/legal/privacy' },
            { title: 'Cookie Policy', href: '/legal/cookies' },
          ],
        },
      ],
    },
    {
      label: 'Contact',
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
              className={`hover:text-primary px-4 py-2 text-sm font-medium transition-colors ${
                isActive(item.href) ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {item.label}
            </Link>
          ) : (
            <button
              className={`hover:text-primary flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
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
                className="border-border bg-background/95 absolute top-full left-0 mt-2 overflow-hidden rounded-lg border shadow-2xl backdrop-blur-lg"
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
                            className="group hover:bg-accent block rounded-md px-3 py-2 transition-colors"
                          >
                            <div className="group-hover:text-primary text-sm font-medium transition-colors">
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
