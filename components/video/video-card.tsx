'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { VideoPlayer } from './video-player';
import { Clock, Eye } from 'lucide-react';

interface VideoCardProps {
  title: string;
  description: string;
  youtubeId?: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  duration?: number;
  viewCount?: number;
  category?: string;
}

export function VideoCard({
  title,
  description,
  youtubeId,
  videoUrl,
  thumbnailUrl,
  duration,
  viewCount,
  category,
}: VideoCardProps) {
  const formatDuration = (seconds?: number) => {
    if (!seconds) return null;
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <VideoPlayer
        youtubeId={youtubeId}
        videoUrl={videoUrl}
        title={title}
        thumbnailUrl={thumbnailUrl}
      />
      <CardHeader>
        <div className="mb-2 flex items-start justify-between gap-2">
          <CardTitle className="text-xl">{title}</CardTitle>
          {category && (
            <Badge variant="secondary" className="capitalize">
              {category}
            </Badge>
          )}
        </div>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
