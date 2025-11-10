'use client';

import Link from 'next/link';
import { Linkedin, Youtube } from 'lucide-react';
import { useTranslations } from '@/lib/hooks/use-translations';

export function Footer() {
  const { t } = useTranslations();
  const footerLinks = {
    product: [
      { name: t('nav.percisioGuidance'), href: '/our-products/percisio-guidance' },
      { name: t('footer.videos'), href: '/learn/videos' },
      { name: t('footer.caseStudies'), href: '/insights/case-studies' },
      { name: t('footer.faq'), href: '/learn/faq' },
    ],
    company: [
      { name: t('footer.about'), href: '/about-us/about' },
      { name: t('footer.team'), href: '/about-us/team' },
      { name: t('footer.blog'), href: '/insights/blog' },
      { name: t('footer.careers'), href: '/about-us/careers' },
    ],
    legal: [
      { name: t('footer.privacyPolicy'), href: '/legal/privacy' },
      { name: t('footer.termsOfService'), href: '/legal/terms' },
      { name: t('footer.cookiePolicy'), href: '/legal/cookies' },
    ],
  };

  return (
    <footer className="border-border bg-secondary/30 mt-20 border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="mb-4 flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600" />
              <span className="text-xl font-bold">Percisio</span>
            </Link>
            <p className="text-muted-foreground mb-4 text-sm">{t('footer.description')}</p>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/company/percisio/"
                className="text-muted-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.youtube.com/@PERCISIO"
                className="text-muted-foreground"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">{t('footer.product')}</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">{t('footer.company')}</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-border mt-8 border-t pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Percisio. {t('footer.allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
}
