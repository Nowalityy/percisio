'use client';

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { VideoPlayer } from './video-player';
import { useTranslations } from '@/lib/hooks/use-translations';

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
  category,
}: VideoCardProps) {
  const { t } = useTranslations();
  const catKeyMap: Record<string, string> = { 'ar-demo': 'arDemo' };
  const resolvedCategoryKey = category ? catKeyMap[category] || category : undefined;
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
          {resolvedCategoryKey && (
            <Badge variant="secondary" className="capitalize">
              {t(`videos.categories.${resolvedCategoryKey}`)}
            </Badge>
          )}
        </div>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
