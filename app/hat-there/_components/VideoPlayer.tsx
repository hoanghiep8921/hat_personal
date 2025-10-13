'use client';

import React, { useRef, useEffect } from 'react';

interface VideoPlayerProps {
  src: string;
  playbackRate?: number;
}

export function VideoPlayer({ src, playbackRate = 1 }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="relative aspect-video rounded-lg overflow-hidden">
        <video
          ref={videoRef}
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
