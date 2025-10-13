'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

interface ImageCarouselProps {
  images: string[];
  altPrefix: string;
}

function ImageGallery({ images, altPrefix }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, images.length]);

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative overflow-hidden">
      {/* Mobile Carousel: One image at a time */}
      <div className="block md:hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <motion.div
              key={image}
              className="min-w-full relative aspect-[4/3]"
              onHoverStart={() => setIsPaused(true)}
              onHoverEnd={() => setIsPaused(false)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={image}
                alt={`${altPrefix} image ${index + 1}`}
                fill
                className="object-cover rounded-md"
                sizes="100vw"
                priority={index === 0}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop Carousel: Two images at a time */}
      <div className="hidden md:block">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${Math.floor(currentIndex / 2) * 100}%)` }}
        >
          {Array.from({ length: Math.ceil(images.length / 2) }).map((_, pairIndex) => (
            <div key={pairIndex} className="min-w-full flex flex-row gap-4">
              {[0, 1].map(offset => {
                const imageIndex = pairIndex * 2 + offset;
                if (imageIndex >= images.length) return null;

                return (
                  <motion.div
                    key={images[imageIndex]}
                    className="flex-1 relative aspect-[4/3]"
                    onHoverStart={() => setIsPaused(true)}
                    onHoverEnd={() => setIsPaused(false)}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={images[imageIndex]}
                      alt={`${altPrefix} image ${imageIndex + 1}`}
                      fill
                      className="object-cover rounded-md"
                      sizes="50vw"
                      priority={imageIndex < 2}
                    />
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white scale-110' : 'bg-white/40 hover:bg-white/60'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-colors border-2 border-gray-200 bg-white/10 hover:bg-gray-200/40"
        aria-label="Previous image"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-colors border-2 border-gray-200 bg-white/10 hover:bg-gray-200/40"
        aria-label="Next image"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

export function ImageCarousel({ images, altPrefix }: ImageCarouselProps) {
  return (
    <div className="w-full">
      <div className="w-full">
        <ImageGallery images={images} altPrefix={altPrefix} />
      </div>
    </div>
  );
}

