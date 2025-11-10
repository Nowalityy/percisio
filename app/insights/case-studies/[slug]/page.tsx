import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Building, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  await params; // Acknowledge params to avoid unused variable warning

  // This would typically fetch the case study data based on the slug
  // For now, we'll show a placeholder
  const caseStudy = null;

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/insights/case-studies"
              className="text-muted-foreground inline-flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Case Studies
            </Link>
          </div>

          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <div className="mb-4 flex items-center gap-2">
                <Badge>Industry</Badge>
              </div>
              <h1 className="mb-4 text-4xl font-bold">Case Study Title</h1>
              <div className="text-muted-foreground flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  <span>Company Name</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Date</span>
                </div>
              </div>
            </header>

            <div className="mb-8">
              <div className="relative aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20">
                <Image
                  src="/placeholder-case-study-image.jpg"
                  alt="Case study image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p>Case study content would go here...</p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
