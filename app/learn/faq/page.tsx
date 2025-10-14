'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useEffect, useState } from 'react';

export default function FAQPage() {
  const [faqs, setFaqs] = useState<any[]>([]);

  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-5xl font-bold md:text-6xl">Frequently Asked Questions</h1>
            <p className="text-muted-foreground text-xl">
              Find answers to common questions about Percisio.
            </p>
          </div>

          {faqs.length > 0 ? (
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.id} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question_en}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer_en}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-muted-foreground py-12 text-center">FAQ content coming soon</div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
