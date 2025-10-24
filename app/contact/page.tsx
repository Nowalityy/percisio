'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedCard } from '@/components/ui/animated-card';
import { AnimatedButton } from '@/components/ui/animated-button';
import { HoverCard } from '@/components/ui/hover-card';
import {
  Send,
  CheckCircle,
  AlertCircle,
  Building2,
  Users,
  MessageSquare,
  Calendar,
  ArrowRight,
} from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log('Form submitted:', formData);
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'demo', label: 'Schedule a Demo' },
    { value: 'support', label: 'Technical Support' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'media', label: 'Media Inquiry' },
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
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <AnimatedCard delay={0.2}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Send us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="py-8 text-center"
                      >
                        <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-600" />
                        <h3 className="mb-2 text-xl font-semibold">Message Sent!</h3>
                        <p className="text-muted-foreground mb-6">
                          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                        </p>
                        <AnimatedButton
                          onClick={() => {
                            setSubmitted(false);
                            setFormData({
                              name: '',
                              email: '',
                              company: '',
                              phone: '',
                              subject: '',
                              message: '',
                              inquiryType: 'general',
                            });
                          }}
                        >
                          Send Another Message
                        </AnimatedButton>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                      >
                        <div className="grid gap-4 md:grid-cols-2">
                          <div>
                            <Input
                              name="name"
                              placeholder="Your Name *"
                              value={formData.name}
                              onChange={handleChange}
                              className={errors.name ? 'border-red-500' : ''}
                            />
                            {errors.name && (
                              <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-1 flex items-center gap-1 text-sm text-red-500"
                              >
                                <AlertCircle className="h-3 w-3" />
                                {errors.name}
                              </motion.p>
                            )}
                          </div>
                          <div>
                            <Input
                              name="email"
                              type="email"
                              placeholder="Your Email *"
                              value={formData.email}
                              onChange={handleChange}
                              className={errors.email ? 'border-red-500' : ''}
                            />
                            {errors.email && (
                              <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-1 flex items-center gap-1 text-sm text-red-500"
                              >
                                <AlertCircle className="h-3 w-3" />
                                {errors.email}
                              </motion.p>
                            )}
                          </div>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                          <Input
                            name="company"
                            placeholder="Company/Organization"
                            value={formData.company}
                            onChange={handleChange}
                          />
                          <Input
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>

                        <div>
                          <select
                            name="inquiryType"
                            value={formData.inquiryType}
                            onChange={handleChange}
                            className="border-input bg-background ring-offset-background focus:ring-ring w-full rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-offset-2"
                          >
                            {inquiryTypes.map((type) => (
                              <option key={type.value} value={type.value}>
                                {type.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <Input
                          name="subject"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                        />

                        <div>
                          <Textarea
                            name="message"
                            placeholder="Your Message *"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className={errors.message ? 'border-red-500' : ''}
                          />
                          {errors.message && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mt-1 flex items-center gap-1 text-sm text-red-500"
                            >
                              <AlertCircle className="h-3 w-3" />
                              {errors.message}
                            </motion.p>
                          )}
                        </div>

                        <AnimatedButton
                          type="submit"
                          size="lg"
                          className="w-full"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                              className="mr-2"
                            >
                              <Send className="h-4 w-4" />
                            </motion.div>
                          ) : (
                            <Send className="mr-2 h-4 w-4" />
                          )}
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </AnimatedButton>
                      </motion.form>
                    )}
                  </AnimatePresence>
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
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                        <Users className="text-primary h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Sales Team</p>
                        <p className="text-muted-foreground text-sm">sales@percisio.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                        <Building2 className="text-primary h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Technical Support</p>
                        <p className="text-muted-foreground text-sm">support@percisio.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                        <MessageSquare className="text-primary h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Partnerships</p>
                        <p className="text-muted-foreground text-sm">partnerships@percisio.com</p>
                      </div>
                    </div>
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
