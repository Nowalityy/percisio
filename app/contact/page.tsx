'use client';

// HubSpot Forms API declaration
declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (config: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
        }) => void;
      };
    };
  }
}

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedCard } from '@/components/ui/animated-card';
import { AnimatedButton } from '@/components/ui/animated-button';
import { Building2, Users, MessageSquare, Calendar, ArrowRight, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from '@/lib/hooks/use-translations';
import { useEffect } from 'react';

export default function ContactPage() {
  const { locale } = useTranslations();

  useEffect(() => {
    // Check if script already exists
    const existingScript = document.getElementById('hs-script-loader');
    if (existingScript) {
      return; // Script already loaded
    }

    const script = document.createElement('script');
    script.src = 'https://js-eu1.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.id = 'hs-script-loader';

    script.onload = () => {
      if (window.hbspt?.forms) {
        window.hbspt.forms.create({
          region: 'eu1',
          portalId: '147085456',
          formId: 'dd0cc51a-4aba-4ce6-ad4f-da34784ff7ff',
          target: '#hs-form-container',
        });
      }
    };

    document.body.appendChild(script);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: 'Frédéric Lesage',
      role: locale === 'fr' ? 'PDG' : 'CEO',
      linkedin: 'https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-lesage-08a4a622/',
    },
    {
      id: 2,
      name: 'Benoit Marcot',
      role: locale === 'fr' ? 'Directeur Technique' : 'CTO',
      linkedin: 'https://www.linkedin.com/in/bmarcot/',
    },
    {
      id: 3,
      name: 'Nicolas Gautier',
      role: locale === 'fr' ? 'Ingénieur Électronique' : 'Electronics Engineer',
      linkedin: 'https://www.linkedin.com/in/nicolasg-l/',
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div 
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4" variant="secondary">
              Get in Touch
            </Badge>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Contact Our Team</h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
              Ready to transform your medical practice? Our experts are here to help you get started
              with Percisio.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid gap-12 lg:grid-cols-2">
            {/* HubSpot Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <AnimatedCard delay={0.2}>
                <CardContent>
                  {/* HubSpot Form */}
                  <div id="hs-form-container"></div>
                </CardContent>
              </AnimatedCard>
            </motion.div>

            {/* Additional Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Quick Actions */}
              <AnimatedCard delay={0.4}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Quick Actions
                  </CardTitle>
                  <CardDescription>Common ways to get in touch with our team.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <AnimatedButton 
                    variant="outline" 
                    className="w-full justify-start"
                    asChild
                    delay={0.1}
                  >
                    <Link href="/schedule">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule a Live Demo
                      <ArrowRight className="ml-auto h-4 w-4" />
                    </Link>
                  </AnimatedButton>
                  
                  <AnimatedButton 
                    variant="outline" 
                    className="w-full justify-start"
                    asChild
                    delay={0.2}
                  >
                    <Link href="/learn/faq">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Browse FAQ
                      <ArrowRight className="ml-auto h-4 w-4" />
                    </Link>
                  </AnimatedButton>
                  
                  <AnimatedButton 
                    variant="outline" 
                    className="w-full justify-start"
                    asChild
                    delay={0.3}
                  >
                    <Link href="/learn/documentation">
                      <Building2 className="mr-2 h-4 w-4" />
                      View Documentation
                      <ArrowRight className="ml-auto h-4 w-4" />
                    </Link>
                  </AnimatedButton>
                </CardContent>
              </AnimatedCard>

              {/* Team Info */}
              <AnimatedCard delay={0.5}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Our Team
                  </CardTitle>
                  <CardDescription>Meet the experts behind Percisio.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {teamMembers.map((member) => (
                      <div key={member.id} className="flex items-start gap-3">
                        <div className="bg-primary/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
                          <Users className="text-primary h-5 w-5" />
                      </div>
                        <div className="flex-1">
                          <p className="font-medium">{member.name}</p>
                          <p className="text-primary text-sm font-medium">{member.role}</p>
                          {member.linkedin && (
                            <Link
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary inline-flex items-center text-sm hover:underline"
                            >
                              <Linkedin className="mr-1.5 h-3.5 w-3.5" />
                              LinkedIn
                            </Link>
                          )}
                    </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </AnimatedCard>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
