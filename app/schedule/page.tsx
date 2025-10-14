'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Clock, User, Mail } from 'lucide-react';

export default function SchedulePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="mb-8 text-center text-4xl font-bold">Schedule a Live Demo</h1>
      <Card>
        <CardHeader>
          <CardTitle>Book Your Personalized Demo</CardTitle>
          <CardDescription>
            Fill out the form below and our team will contact you to schedule your live demo.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex items-center space-x-2">
              <User className="text-muted-foreground h-5 w-5" />
              <Input placeholder="Your Name" />
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="text-muted-foreground h-5 w-5" />
              <Input placeholder="Your Email" type="email" />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="text-muted-foreground h-5 w-5" />
            <Input placeholder="Preferred Date" type="date" />
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="text-muted-foreground h-5 w-5" />
            <Input placeholder="Preferred Time" type="time" />
          </div>
          <Textarea placeholder="Additional details or specific questions..." rows={4} />
          <Button size="lg" className="w-full">
            Submit Request
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
