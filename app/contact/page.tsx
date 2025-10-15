'use client';

import { Button } from '@/components/ui/button';
import { Mail, Phone, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <div className="bg-background min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="mb-4 flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <h1 className="mb-3 text-3xl font-bold md:text-4xl">Contact Us</h1>
        <p className="text-muted-foreground mb-8 text-base">
          Have questions or want to schedule a demo? Reach out to us and we&apos;ll get back to you
          promptly.
        </p>

        <div className="mb-6 grid gap-3 md:grid-cols-2">
          <div className="flex items-center gap-3">
            <Mail className="text-primary h-5 w-5" />
            <a href="mailto:contact@percisio.com" className="text-primary text-base font-medium">
              contact@percisio.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-primary h-5 w-5" />
            <a href="tel:+1234567890" className="text-primary text-base font-medium">
              +33 ....
            </a>
          </div>
        </div>

        {submitted ? (
          <div className="rounded-lg bg-green-100 p-4 text-green-800">
            Thank you! Your message has been sent.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border-border bg-background focus:ring-primary w-full rounded-md border p-2.5 text-sm focus:ring-2 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border-border bg-background focus:ring-primary w-full rounded-md border p-2.5 text-sm focus:ring-2 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="border-border bg-background focus:ring-primary w-full rounded-md border p-2.5 text-sm focus:ring-2 focus:outline-none"
              rows={4}
            />
            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
