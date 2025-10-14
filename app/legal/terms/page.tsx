import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function TermsPage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-4xl font-bold md:text-5xl">Terms of Service</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead">Last updated: {new Date().toLocaleDateString()}</p>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using Percisio, you accept and agree to be bound by these Terms of
              Service.
            </p>
            <h2>2. Use License</h2>
            <p>
              Percisio grants you a limited, non-exclusive, non-transferable license to use our
              platform for surgical visualization purposes.
            </p>
            <h2>3. User Responsibilities</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials
              and for all activities under your account.
            </p>
            <h2>4. Medical Disclaimer</h2>
            <p>
              Percisio is a tool to assist medical professionals. Final medical decisions remain the
              responsibility of licensed healthcare providers.
            </p>
            <h2>5. Limitation of Liability</h2>
            <p>
              Percisio shall not be liable for any indirect, incidental, special, consequential or
              punitive damages.
            </p>
            <h2>6. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with applicable laws.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
