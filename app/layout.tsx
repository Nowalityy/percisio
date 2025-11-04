import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
  fallback: ['ui-monospace', 'monospace'],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: 'Percisio - Precision Guidance for Image-Guided Procedures',
  description:
    'Advanced AR-powered surgical guidance system that enhances precision, reduces radiation exposure, and empowers medical professionals.',
  other: {
    preload: '/dockPercisio.glb',
    'dns-prefetch': 'https://fonts.googleapis.com',
    preconnect: 'https://fonts.gstatic.com',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="light" className="light">
      <head>
        <link rel="preload" href="/dockPercisio.glb" as="fetch" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: '#ffffff', color: '#0a0a0a' }}
      >
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KTRCENX2W3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KTRCENX2W3');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
