'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

interface VideoPlayerProps {
  youtubeId?: string;
  videoUrl?: string;
  title: string;
  thumbnailUrl?: string;
  autoplay?: boolean;
}

export function VideoPlayer({
  youtubeId,
  videoUrl,
  title,
  thumbnailUrl,
  autoplay = false,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoplay);

  const embedUrl = youtubeId
    ? `https://www.youtube.com/embed/${youtubeId}${isPlaying ? '?autoplay=1' : ''}`
    : videoUrl;

  const defaultThumbnail = youtubeId
    ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
    : thumbnailUrl;

  if (!isPlaying && !autoplay) {
    return (
      <Card
        className="group relative cursor-pointer overflow-hidden"
        onClick={() => setIsPlaying(true)}
      >
        <div className="relative aspect-video">
          {defaultThumbnail && (
            <img src={defaultThumbnail} alt={title} className="h-full w-full object-cover" />
          )}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-colors group-hover:bg-black/60">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-20 w-20 items-center justify-center rounded-full bg-primary shadow-lg"
            >
              <Play className="ml-1 h-10 w-10 text-primary-foreground" />
            </motion.div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative aspect-video">
          <iframe
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </CardContent>
    </Card>
  );
}
