'use client';

import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <div className="bg-background min-h-screen px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Contact Us</h1>
        <p className="text-muted-foreground mb-12 text-lg">
          Have questions or want to schedule a demo? Reach out to us and we&apos;ll get back to you
          promptly.
        </p>

        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <div className="flex items-center gap-4">
            <Mail className="text-primary h-6 w-6" />
            <a href="mailto:contact@percisio.com" className="text-primary text-lg font-medium">
              contact@percisio.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-primary h-6 w-6" />
            <a href="tel:+1234567890" className="text-primary text-lg font-medium">
              +33 ....
            </a>
          </div>
        </div>

        {submitted ? (
          <div className="rounded-lg bg-green-100 p-6 text-green-800">
            Thank you! Your message has been sent.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border-border bg-background focus:ring-primary w-full rounded-md border p-3 text-sm focus:ring-2 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border-border bg-background focus:ring-primary w-full rounded-md border p-3 text-sm focus:ring-2 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="border-border bg-background focus:ring-primary w-full rounded-md border p-3 text-sm focus:ring-2 focus:outline-none"
              rows={6}
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
