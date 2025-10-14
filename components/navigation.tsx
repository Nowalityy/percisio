'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export function Navigation() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();

  const navigation = [
    {
      label: 'Solutions',
      sections: [
        {
          title: 'Our Products',
          items: [
            {
              title: 'Percisio Guidance',
              description: 'Real-time 3D navigation and roadmapping for image-guided interventions',
              href: '/solutions/guidance',
            },
            {
              title: 'Percisio Insight',
              description:
                'Advanced analytics and clinical decision support powered by patient data',
              href: '/solutions/insight',
            },
          ],
        },
        {
          title: 'By Application',
          items: [
            {
              title: 'Hepatic Drainage',
              description: 'A classic of interventional radiology',
              href: '/solutions/hepatic-drainage',
            },
            {
              title: 'Biopsy',
              description: 'End-to-end guidance for minimally invasive biopsies',
              href: '/solutions/biopsy',
            },
            {
              title: 'Pleural Drainage',
              description: 'Quick and efficient drainage of pleural fluid',
              href: '/solutions/pleural-drainage',
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
              href: '/resources/videos',
            },
            {
              title: 'Documentation',
              description: 'Technical guides and API docs',
              href: '/resources/documentation',
            },
            {
              title: 'FAQ',
              description: 'Common questions answered',
              href: '/resources/faq',
            },
          ],
        },
        {
          title: 'Insights',
          items: [
            {
              title: 'Case Studies',
              description: 'Real-world success stories',
              href: '/resources/case-studies',
            },
            {
              title: 'Blog',
              description: 'Latest news and insights',
              href: '/resources/blog',
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
              href: '/company/about',
            },
            {
              title: 'Team',
              description: 'Meet the experts',
              href: '/company/team',
            },
            {
              title: 'Careers',
              description: 'Join our team',
              href: '/company/careers',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            { title: 'Terms of Service', href: '/company/terms' },
            { title: 'Privacy Policy', href: '/company/privacy' },
            { title: 'Cookie Policy', href: '/company/cookies' },
          ],
        },
      ],
    },
  ];

  const isActive = (sections: Array<{ items: Array<{ href: string }> }>) => {
    return sections.some((section) => section.items.some((item) => pathname === item.href));
  };

  return (
    <nav className="hidden items-center space-x-1 lg:flex">
      {navigation.map((item) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => setActiveMenu(item.label)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <button
            className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors hover:text-cyan-400 ${
              isActive(item.sections) ? 'text-cyan-400' : 'text-slate-300'
            }`}
          >
            {item.label}
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {activeMenu === item.label && (
            <div className="absolute top-full left-0 z-50 mt-2 overflow-hidden rounded-lg border border-cyan-500/20 bg-slate-800/95 shadow-2xl backdrop-blur-lg transition-all duration-200">
              <div className="grid grid-cols-2 gap-8 p-6" style={{ minWidth: '500px' }}>
                {item.sections.map((section) => (
                  <div key={section.title}>
                    <h3 className="mb-3 text-xs font-semibold tracking-wider text-cyan-400 uppercase">
                      {section.title}
                    </h3>
                    <div className="space-y-1">
                      {section.items.map((menuItem) => (
                        <Link
                          key={menuItem.href}
                          href={menuItem.href}
                          className="group block rounded-md px-3 py-2 transition-colors hover:bg-slate-700/50"
                        >
                          <div className="text-sm font-medium text-white transition-colors group-hover:text-cyan-400">
                            {menuItem.title}
                          </div>
                          {'description' in menuItem && menuItem.description && (
                            <div className="mt-0.5 text-xs text-slate-400">
                              {menuItem.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
