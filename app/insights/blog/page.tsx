'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function BlogPage() {
  const [posts] = useState<
    Array<{
      id: number;
      title: string;
      excerpt: string;
      date: string;
      author: string;
      image: string;
      slug_en: string;
      cover_image?: string;
      title_en: string;
      category: string;
      excerpt_en: string;
      author_name: string;
      published_at: string;
      [key: string]: string | number | boolean | undefined; // Allow additional properties
    }>
  >([]);

  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-5xl font-bold md:text-6xl">Blog</h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
              Insights, updates, and innovations in surgical visualization technology.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.length > 0 ? (
              posts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug_en}`}>
                  <Card className="h-full transition-shadow hover:shadow-lg">
                    <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-cyan-500/20 to-blue-600/20">
                      {post.cover_image && (
                        <Image
                          src={post.cover_image}
                          alt={post.title_en}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                    <CardHeader>
                      <div className="mb-2 flex items-center gap-2">
                        <Badge>{post.category}</Badge>
                      </div>
                      <CardTitle className="line-clamp-2">{post.title_en}</CardTitle>
                      <CardDescription className="line-clamp-3">{post.excerpt_en}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-muted-foreground flex items-center text-sm">
                        <span>{post.author_name}</span>
                        <span className="mx-2">·</span>
                        <span>{new Date(post.published_at).toLocaleDateString()}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            ) : (
              <div className="text-muted-foreground col-span-full py-12 text-center">
                Blog posts coming soon
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
