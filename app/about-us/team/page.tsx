'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Linkedin } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from '@/lib/hooks/use-translations';

export default function TeamPage() {
  const { locale } = useTranslations();

  const teamMembers = [
    {
      id: 1,
      name: 'Frédéric Lesage',
      role: locale === 'fr' ? 'PDG' : 'CEO',
      bio:
        locale === 'fr'
          ? 'Ingénieur de formation, spécialisé en gestion de projets IT et Industrie 4.0. Expertise en réalité augmentée/virtuelle et science des données.'
          : 'Engineer by background, specialized in IT project management and Industry 4.0. Expertise in augmented/virtual reality and data science.',
      linkedin: 'https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-lesage-08a4a622/',
    },
    {
      id: 2,
      name: 'Benoit Marcot',
      role: locale === 'fr' ? 'Directeur Technique' : 'CTO',
      bio:
        locale === 'fr'
          ? 'Ingénieur de formation, spécialiste IT freelance. Expertise en blockchain et technologies émergentes.'
          : 'Engineer by training, freelance IT specialist. Expertise in blockchain and emerging technologies.',
      linkedin: 'https://www.linkedin.com/in/bmarcot/',
    },
    {
      id: 3,
      name: 'Nicolas Gautier',
      role: locale === 'fr' ? 'Ingénieur Électronique' : 'Electronics Engineer',
      bio:
        locale === 'fr'
          ? 'Formation en ingénierie, spécialiste en Industrie 4.0, cobotique, robotique, fabrication et électronique.'
          : 'Engineering background, specialist in Industry 4.0, cobotics, robotics, manufacturing, and electronics.',
      linkedin: 'https://www.linkedin.com/in/nicolasg-l/',
    },
    {
      id: 4,
      name: 'Bernard Landry',
      role: locale === 'fr' ? 'Conseiller Médical' : 'Medical Adviser',
      bio:
        locale === 'fr'
          ? "Médecin nucléaire, spécialiste en exposition aux rayons X. Membre d'EURADOS."
          : 'Nuclear physician, specialist in X-ray exposure. Member of EURADOS.',
    },
    {
      id: 5,
      name: 'Nikola Milosavljevic',
      role: locale === 'fr' ? 'Développeur Web' : 'Web Developer',
      bio:
        locale === 'fr'
          ? 'Alternant en développement web, spécialisé en développement front-end et back-end. Compétent dans la création de designs web responsive et optimisés.'
          : 'Alternant in web development, specialized in front-end and back-end development. Skilled in creating responsive and optimized web designs.',
      linkedin: 'https://www.linkedin.com/in/nikola-milosavljevic-397806327/',
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-5xl font-bold md:text-6xl">
              {locale === 'fr' ? 'Notre Équipe' : 'Our Team'}
            </h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
              {locale === 'fr'
                ? "Rencontrez les experts qui dirigent l'innovation en technologie de visualisation médicale."
                : 'Meet the experts driving innovation in medical visualization technology.'}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-600/20">
                  <div className="text-6xl font-bold text-cyan-600/30">{member.name.charAt(0)}</div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{member.bio}</p>
                  {member.linkedin && (
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary inline-flex items-center text-sm hover:underline"
                      aria-label={`${member.name} LinkedIn profile`}
                    >
                      <Linkedin className="mr-2 h-4 w-4" aria-hidden="true" />
                      LinkedIn
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
