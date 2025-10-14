import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function CookiesPage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-4xl font-bold md:text-5xl">Cookie Policy</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead">Last updated: {new Date().toLocaleDateString()}</p>
            <h2>1. What Are Cookies</h2>
            <p>
              Cookies are small text files stored on your device when you visit our website. They
              help us provide you with a better experience.
            </p>
            <h2>2. Types of Cookies We Use</h2>
            <h3>Essential Cookies</h3>
            <p>
              Required for the website to function properly, including authentication and security
              features.
            </p>
            <h3>Analytics Cookies</h3>
            <p>
              Help us understand how visitors interact with our website by collecting and reporting
              information anonymously.
            </p>
            <h3>Preference Cookies</h3>
            <p>Allow the website to remember choices you make and provide enhanced features.</p>
            <h2>3. Managing Cookies</h2>
            <p>
              You can control and/or delete cookies as you wish. You can delete all cookies already
              on your computer and set most browsers to prevent them from being placed.
            </p>
            <h2>4. Contact Us</h2>
            <p>
              For questions about our use of cookies, please contact us at privacy@medtechpro.com
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
