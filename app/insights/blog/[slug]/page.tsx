import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  await params; // Acknowledge params to avoid unused variable warning

  // This would typically fetch the blog post data based on the slug
  // For now, we'll show a placeholder
  const post = null;

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/insights/blog"
              className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </div>

          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <div className="mb-4 flex items-center gap-2">
                <Badge>Category</Badge>
              </div>
              <h1 className="mb-4 text-4xl font-bold">Blog Post Title</h1>
              <div className="text-muted-foreground flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>Author Name</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Published Date</span>
                </div>
              </div>
            </header>

            <div className="mb-8">
              <div className="relative aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20">
                <Image
                  src="/placeholder-blog-image.jpg"
                  alt="Blog post image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p>Blog post content would go here...</p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
