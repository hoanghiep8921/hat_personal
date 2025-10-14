import React, { useState } from "react";
import Image from "next/image";

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  quality?: number;
  sizes?: string;
  priority?: boolean;
}

export function ImageWithFallback({ 
  src, 
  alt, 
  className, 
  width = 800, 
  height = 600,
  loading = "lazy",
  quality = 75,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false
}: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false);

  const handleError = () => {
    setDidError(true);
  };

  return didError ? (
    <div className={`inline-block bg-gray-100 text-center align-middle ${className ?? ""}`}>
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt="Error loading image" data-original-url={src} />
      </div>
    </div>
  ) : (
    <Image 
      src={src} 
      alt={alt} 
      width={width}
      height={height}
      className={className}
      onError={handleError}
      loading={priority ? undefined : loading}
      priority={priority}
      quality={quality}
      sizes={sizes}
    />
  );
}
