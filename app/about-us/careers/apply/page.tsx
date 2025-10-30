'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import {
  ArrowLeft,
  Upload,
  FileText,
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTranslations } from '@/lib/hooks/use-translations';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  position: string;
  experience: string;
  education: string;
  coverLetter: string;
  resume: File | null;
  portfolio: string;
  linkedin: string;
  availability: string;
  salary: string;
}

export default function ApplyPage() {
  const router = useRouter();
  const { t, getRaw } = useTranslations();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    position: '',
    experience: '',
    education: '',
    coverLetter: '',
    resume: null,
    portfolio: '',
    linkedin: '',
    availability: '',
    salary: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, resume: file }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log('Application submitted:', formData);
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const positions = [
    'Software Engineer',
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    'DevOps Engineer',
    'Data Scientist',
    'Machine Learning Engineer',
    'Product Manager',
    'UI/UX Designer',
    'Marketing Manager',
    'Sales Representative',
    'Business Development',
    'Medical Device Engineer',
    'Quality Assurance Engineer',
    'Other',
  ];

  const experienceLevels = [
    'Entry Level (0-2 years)',
    'Mid Level (3-5 years)',
    'Senior Level (6-10 years)',
    'Lead/Principal (10+ years)',
  ];

  const availabilityOptions = [
    'Immediately',
    '2 weeks notice',
    '1 month notice',
    '2 months notice',
    '3+ months notice',
  ];

  // Prefer translated option arrays if provided
  const positionsOptions = getRaw<string[]>('careersApply.options.positions') || positions;
  const experienceOptions = getRaw<string[]>('careersApply.options.experience') || experienceLevels;
  const availabilityI18nOptions =
    getRaw<string[]>('careersApply.options.availability') || availabilityOptions;

  if (submitted) {
    return (
      <div className="bg-background min-h-screen">
        <Header />
        <main className="pt-24 pb-20">
          <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6 lg:px-8">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 p-4">
              <svg
                className="h-10 w-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="mb-4 text-3xl font-bold text-green-600">
              {t('careersApply.submitted.title')}
            </h1>
            <p className="text-muted-foreground mb-8 text-lg">{t('careersApply.submitted.desc')}</p>
            <div className="space-y-4">
              <Button onClick={() => router.push('/about-us/careers')} variant="outline">
                {t('careersApply.submitted.viewPositions')}
              </Button>
              <Button onClick={() => router.push('/')}>
                {t('careersApply.submitted.backHome')}
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="mb-6 flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('careersApply.back')}
          </Button>

          <div className="mb-8 text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">{t('careersApply.title')}</h1>
            <p className="text-muted-foreground text-xl">{t('careersApply.subtitle')}</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                {t('careersApply.form.title')}
              </CardTitle>
              <CardDescription>{t('careersApply.form.desc')}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 text-lg font-semibold">
                    <User className="h-5 w-5" />
                    {t('careersApply.form.personal')}
                  </h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="flex items-center space-x-2">
                      <User className="text-muted-foreground h-5 w-5" />
                      <Input
                        name="firstName"
                        placeholder={t('careersApply.form.firstName')}
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="text-muted-foreground h-5 w-5" />
                      <Input
                        name="lastName"
                        placeholder={t('careersApply.form.lastName')}
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="flex items-center space-x-2">
                      <Mail className="text-muted-foreground h-5 w-5" />
                      <Input
                        name="email"
                        type="email"
                        placeholder={t('careersApply.form.email')}
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="text-muted-foreground h-5 w-5" />
                      <Input
                        name="phone"
                        type="tel"
                        placeholder={t('careersApply.form.phone')}
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="text-muted-foreground h-5 w-5" />
                    <Input
                      name="location"
                      placeholder={t('careersApply.form.location')}
                      value={formData.location}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Professional Information */}
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 text-lg font-semibold">
                    <Briefcase className="h-5 w-5" />
                    {t('careersApply.form.professional')}
                  </h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        {t('careersApply.form.positionLabel')}
                      </label>
                      <select
                        name="position"
                        value={formData.position}
                        onChange={(e) => handleSelectChange('position', e.target.value)}
                        className="border-input bg-background ring-offset-background focus:ring-ring w-full rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-offset-2"
                        required
                      >
                        <option value="">{t('careersApply.form.positionPlaceholder')}</option>
                        {positionsOptions.map((position) => (
                          <option key={position} value={position}>
                            {position}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        {t('careersApply.form.experienceLabel')}
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={(e) => handleSelectChange('experience', e.target.value)}
                        className="border-input bg-background ring-offset-background focus:ring-ring w-full rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-offset-2"
                        required
                      >
                        <option value="">{t('careersApply.form.experiencePlaceholder')}</option>
                        {experienceOptions.map((level) => (
                          <option key={level} value={level}>
                            {level}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="text-muted-foreground h-5 w-5" />
                    <Input
                      name="education"
                      placeholder={t('careersApply.form.education')}
                      value={formData.education}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 text-lg font-semibold">
                    <FileText className="h-5 w-5" />
                    {t('careersApply.form.additional')}
                  </h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        {t('careersApply.form.availabilityLabel')}
                      </label>
                      <select
                        name="availability"
                        value={formData.availability}
                        onChange={(e) => handleSelectChange('availability', e.target.value)}
                        className="border-input bg-background ring-offset-background focus:ring-ring w-full rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-offset-2"
                        required
                      >
                        <option value="">{t('careersApply.form.availabilityPlaceholder')}</option>
                        {availabilityI18nOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Input
                        name="salary"
                        placeholder={t('careersApply.form.salary')}
                        value={formData.salary}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Input
                      name="linkedin"
                      placeholder={t('careersApply.form.linkedin')}
                      value={formData.linkedin}
                      onChange={handleChange}
                    />
                    <Input
                      name="portfolio"
                      placeholder={t('careersApply.form.portfolio')}
                      value={formData.portfolio}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Resume Upload */}
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 text-lg font-semibold">
                    <Upload className="h-5 w-5" />
                    {t('careersApply.form.resumeTitle')}
                  </h3>
                  <div className="border-muted-foreground/25 rounded-lg border-2 border-dashed p-6 text-center">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                      id="resume-upload"
                      required
                    />
                    <label htmlFor="resume-upload" className="cursor-pointer">
                      <Upload className="text-muted-foreground mx-auto mb-4 h-12 w-12" />
                      <p className="text-muted-foreground mb-2 text-sm">
                        {formData.resume
                          ? formData.resume.name
                          : t('careersApply.form.resumeClick')}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {t('careersApply.form.resumeNote')}
                      </p>
                    </label>
                  </div>
                </div>

                {/* Cover Letter */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">{t('careersApply.form.coverLetter')}</h3>
                  <Textarea
                    name="coverLetter"
                    placeholder={t('careersApply.form.coverPlaceholder')}
                    value={formData.coverLetter}
                    onChange={handleChange}
                    rows={6}
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting
                      ? t('careersApply.form.submitting')
                      : t('careersApply.form.submit')}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
