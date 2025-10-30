'use client';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { useTranslations } from '@/lib/hooks/use-translations';

export default function TermsPage() {
  const { t, getRaw } = useTranslations();
  const useLicenseItems = getRaw<string[]>('legal.terms.sections.useLicense.items') || [];
  const userRespItems = getRaw<string[]>('legal.terms.sections.userResponsibilities.items') || [];
  const liabilityItems = getRaw<string[]>('legal.terms.sections.limitationLiability.items') || [];
  const indemnItems = getRaw<string[]>('legal.terms.sections.indemnification.items') || [];
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-4xl font-bold md:text-5xl">{t('legal.terms.title')}</h1>
          <div className="prose prose-lg max-w-none">
            <p className="lead mb-8">
              {t('legal.terms.lastUpdated')}: {new Date().toLocaleDateString()}
            </p>

            <h2 className="mt-12 mb-6">1. {t('legal.terms.sections.acceptance.title')}</h2>
            <p>{t('legal.terms.sections.acceptance.content')}</p>

            <h2 className="mt-12 mb-6">2. {t('legal.terms.sections.description.title')}</h2>
            <p>{t('legal.terms.sections.description.content')}</p>

            <h2 className="mt-12 mb-6">3. {t('legal.terms.sections.deviceCompliance.title')}</h2>
            <p>{t('legal.terms.sections.deviceCompliance.content1')}</p>
            <p>{t('legal.terms.sections.deviceCompliance.content2')}</p>

            <h2 className="mt-12 mb-6">4. {t('legal.terms.sections.useLicense.title')}</h2>
            <p>{t('legal.terms.sections.useLicense.intro')}</p>
            <ul>
              {useLicenseItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <h2 className="mt-12 mb-6">
              5. {t('legal.terms.sections.userResponsibilities.title')}
            </h2>
            <p>{t('legal.terms.sections.userResponsibilities.intro')}</p>
            <ul>
              {userRespItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <h2 className="mt-12 mb-6">6. {t('legal.terms.sections.medicalDisclaimer.title')}</h2>
            <p>{t('legal.terms.sections.medicalDisclaimer.content')}</p>

            <h2 className="mt-12 mb-6">7. {t('legal.terms.sections.dataSecurity.title')}</h2>
            <p>{t('legal.terms.sections.dataSecurity.content1')}</p>
            <p>{t('legal.terms.sections.dataSecurity.content2')}</p>

            <h2 className="mt-12 mb-6">8. {t('legal.terms.sections.ipRights.title')}</h2>
            <p>{t('legal.terms.sections.ipRights.content1')}</p>
            <p>{t('legal.terms.sections.ipRights.content2')}</p>

            <h2 className="mt-12 mb-6">9. {t('legal.terms.sections.limitationLiability.title')}</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, PERCISIO SHALL NOT BE LIABLE FOR ANY INDIRECT,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul>
              {liabilityItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p>{t('legal.terms.sections.limitationLiability.footer')}</p>

            <h2 className="mt-12 mb-6">10. {t('legal.terms.sections.indemnification.title')}</h2>
            <p>{t('legal.terms.sections.indemnification.intro')}</p>
            <ul>
              {indemnItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <h2 className="mt-12 mb-6">11. {t('legal.terms.sections.availability.title')}</h2>
            <p>{t('legal.terms.sections.availability.content1')}</p>
            <p>{t('legal.terms.sections.availability.content2')}</p>

            <h2 className="mt-12 mb-6">12. {t('legal.terms.sections.termination.title')}</h2>
            <p>{t('legal.terms.sections.termination.content')}</p>

            <h2 className="mt-12 mb-6">13. {t('legal.terms.sections.governingLaw.title')}</h2>
            <p>{t('legal.terms.sections.governingLaw.content')}</p>

            <h2 className="mt-12 mb-6">14. {t('legal.terms.sections.severability.title')}</h2>
            <p>{t('legal.terms.sections.severability.content')}</p>

            <h2 className="mt-12 mb-6">15. {t('legal.terms.sections.contact.title')}</h2>
            <p>{t('legal.terms.sections.contact.content')}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
