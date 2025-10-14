import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function PrivacyPage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-4xl font-bold md:text-5xl">Privacy Policy</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead">Last updated: {new Date().toLocaleDateString()}</p>
            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including name, email address,
              company information, and usage data.
            </p>
            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services,
              communicate with you, and ensure security.
            </p>
            <h2>3. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your
              personal data against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <h2>4. HIPAA Compliance</h2>
            <p>
              Our platform is HIPAA compliant and follows strict protocols for handling protected
              health information (PHI).
            </p>
            <h2>5. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information at any
              time.
            </p>
            <h2>6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at
              privacy@medtechpro.com
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
