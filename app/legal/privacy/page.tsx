'use client';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { useTranslations } from '@/lib/hooks/use-translations';

export default function PrivacyPage() {
  const { t, getRaw } = useTranslations();
  const personalItems =
    getRaw<string[]>('legal.privacy.sections.informationCollection.personal.items') || [];
  const phiItems = getRaw<string[]>('legal.privacy.sections.informationCollection.phi.items') || [];
  const technicalItems =
    getRaw<string[]>('legal.privacy.sections.informationCollection.technical.items') || [];
  const serviceProvisionItems =
    getRaw<string[]>('legal.privacy.sections.useInformation.serviceProvision.items') || [];
  const qualityItems =
    getRaw<string[]>('legal.privacy.sections.useInformation.qualityImprovement.items') || [];
  const legalItems =
    getRaw<string[]>('legal.privacy.sections.useInformation.legalCompliance.items') || [];
  const safeguardsItems =
    getRaw<string[]>('legal.privacy.sections.hipaaCompliance.safeguards.items') || [];
  const sharingLimitedItems =
    getRaw<string[]>('legal.privacy.sections.sharing.limited.items') || [];
  const dataSecurityItems = getRaw<string[]>('legal.privacy.sections.dataSecurity.items') || [];
  const dataRetentionItems = getRaw<string[]>('legal.privacy.sections.dataRetention.items') || [];
  const rightsAccessItems = getRaw<string[]>('legal.privacy.sections.rights.access.items') || [];
  const rightsDeletionItems =
    getRaw<string[]>('legal.privacy.sections.rights.deletion.items') || [];
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-4xl font-bold md:text-5xl">{t('legal.privacy.title')}</h1>
          <div className="prose prose-lg max-w-none">
            <p className="lead mb-8">
              {t('legal.privacy.lastUpdated')}: {new Date().toLocaleDateString()}
            </p>

            <h2 className="mt-12 mb-6">1. {t('legal.privacy.sections.introduction.title')}</h2>
            <p>{t('legal.privacy.sections.introduction.content1')}</p>
            <p>{t('legal.privacy.sections.introduction.content2')}</p>

            <h2 className="mt-12 mb-6">
              2. {t('legal.privacy.sections.informationCollection.title')}
            </h2>

            <h3 className="mt-8 mb-4">
              {t('legal.privacy.sections.informationCollection.personal.title')}
            </h3>
            <p>{t('legal.privacy.sections.informationCollection.personal.intro')}</p>
            <ul>
              {personalItems.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>

            <h3 className="mt-8 mb-4">
              {t('legal.privacy.sections.informationCollection.phi.title')}
            </h3>
            <p>{t('legal.privacy.sections.informationCollection.phi.intro')}</p>
            <ul>
              {phiItems.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>

            <h3 className="mt-8 mb-4">
              {t('legal.privacy.sections.informationCollection.technical.title')}
            </h3>
            <p>{t('legal.privacy.sections.informationCollection.technical.intro')}</p>
            <ul>
              {technicalItems.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>

            <h2 className="mt-12 mb-6">{t('legal.privacy.sections.useInformation.title')}</h2>

            <h3 className="mt-8 mb-4">
              {t('legal.privacy.sections.useInformation.serviceProvision.title')}
            </h3>
            <p>{t('legal.privacy.sections.useInformation.serviceProvision.intro')}</p>
            <ul>
              {serviceProvisionItems.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>

            <h3 className="mt-8 mb-4">
              {t('legal.privacy.sections.useInformation.qualityImprovement.title')}
            </h3>
            <p>{t('legal.privacy.sections.useInformation.qualityImprovement.intro')}</p>
            <ul>
              {qualityItems.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>

            <h3 className="mt-8 mb-4">
              {t('legal.privacy.sections.useInformation.legalCompliance.title')}
            </h3>
            <p>{t('legal.privacy.sections.useInformation.legalCompliance.intro')}</p>
            <ul>
              {legalItems.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>

            <h2 className="mt-12 mb-6">{t('legal.privacy.sections.hipaaCompliance.title')}</h2>
            <p>{t('legal.privacy.sections.hipaaCompliance.content')}</p>

            <h3 className="mt-8 mb-4">
              {t('legal.privacy.sections.hipaaCompliance.safeguards.title')}
            </h3>
            <ul>
              {safeguardsItems.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>

            <h3 className="mt-8 mb-4">{t('legal.privacy.sections.hipaaCompliance.baas.title')}</h3>
            <p>{t('legal.privacy.sections.hipaaCompliance.baas.content')}</p>

            <h2 className="mt-12 mb-6">{t('legal.privacy.sections.sharing.title')}</h2>

            <h3 className="mt-8 mb-4">{t('legal.privacy.sections.sharing.limited.title')}</h3>
            <p>{t('legal.privacy.sections.sharing.limited.intro')}</p>
            <ul>
              {sharingLimitedItems.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>

            <h3 className="mt-8 mb-4">{t('legal.privacy.sections.sharing.deidentified.title')}</h3>
            <p>{t('legal.privacy.sections.sharing.deidentified.content')}</p>

            <h2 className="mt-12 mb-6">{t('legal.privacy.sections.dataSecurity.title')}</h2>
            <p>{t('legal.privacy.sections.dataSecurity.intro')}</p>
            <ul>
              {dataSecurityItems.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>

            <h2 className="mt-12 mb-6">{t('legal.privacy.sections.dataRetention.title')}</h2>
            <p>{t('legal.privacy.sections.dataRetention.intro')}</p>
            <ul>
              {dataRetentionItems.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>

            <h2 className="mt-12 mb-6">{t('legal.privacy.sections.rights.title')}</h2>

            <h3 className="mt-8 mb-4">{t('legal.privacy.sections.rights.access.title')}</h3>
            <p>{t('legal.privacy.sections.rights.access.intro')}</p>
            <ul>
              {rightsAccessItems.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>

            <h3 className="mt-8 mb-4">{t('legal.privacy.sections.rights.deletion.title')}</h3>
            <p>{t('legal.privacy.sections.rights.deletion.intro')}</p>
            <ul>
              {rightsDeletionItems.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>

            <h3 className="mt-8 mb-4">{t('legal.privacy.sections.rights.withdrawal.title')}</h3>
            <p>{t('legal.privacy.sections.rights.withdrawal.content')}</p>

            <h2 className="mt-12 mb-6">{t('legal.privacy.sections.intlTransfers.title')}</h2>
            <p>{t('legal.privacy.sections.intlTransfers.content')}</p>

            <h2 className="mt-12 mb-6">{t('legal.privacy.sections.children.title')}</h2>
            <p>{t('legal.privacy.sections.children.content')}</p>

            <h2 className="mt-12 mb-6">{t('legal.privacy.sections.changes.title')}</h2>
            <p>{t('legal.privacy.sections.changes.content')}</p>

            <h2 className="mt-12 mb-6">{t('legal.privacy.sections.contact.title')}</h2>
            <p>{t('legal.privacy.sections.contact.intro')}</p>
            <p>Email: hello@percisio.com</p>

            <h2 className="mt-12 mb-6">{t('legal.privacy.sections.complaints.title')}</h2>
            <p>{t('legal.privacy.sections.complaints.content')}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
