"use client";

import Image from "next/image";

interface StaticImageGalleryProps {
  images: string[];
  altPrefix: string;
}

export function StaticImageGallery({ images, altPrefix }: StaticImageGalleryProps) {
  // Take first 8 images and split into two rows
  const displayImages = images.slice(0, 8);
  const topRowImages = displayImages.slice(0, 4);
  const bottomRowImages = displayImages.slice(4, 8);

  return (
    <div className="w-full animate-fade-in-up">
      {/* Desktop: Two rows of images */}
      <div className="flex flex-col gap-[20px]">
        {/* Top row - 4 images */}
        <div className="flex gap-[20px] items-start">
          {topRowImages.map((img, idx) => (
            <div
              key={idx}
              className="flex-1 transition-all duration-300 rounded-lg overflow-hidden hover:scale-[1.02]"
            >
              <Image 
                width={800}
                height={600}
                src={img} 
                alt={`${altPrefix} ${idx + 1}`} 
                className="aspect-[4/3] object-cover w-full" 
                loading={idx < 2 ? "eager" : "lazy"}
                quality={75}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
        
        {/* Bottom row - 4 images */}
        {bottomRowImages.length > 0 && (
          <div className="flex gap-[20px] items-start">
            {bottomRowImages.map((img, idx) => (
              <div
                key={idx + 4}
                className="flex-1 transition-all duration-300 rounded-lg overflow-hidden hover:scale-[1.02]"
              >
                <Image 
                  width={800}
                  height={600}
                  src={img} 
                  alt={`${altPrefix} ${idx + 5}`} 
                  className="aspect-[4/3] object-cover w-full" 
                  loading="lazy"
                  quality={75}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

