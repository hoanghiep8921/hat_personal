"use client";

import React from "react";
import { StaticImageGallery } from "./StaticImageGallery";

const FANSIPAN_IMAGES = [
  "/hat-there/fansipan/20200620_085210.jpg",
  "/hat-there/fansipan/20200620_093403.jpg",
  "/hat-there/fansipan/20200620_093630.jpg",
  "/hat-there/fansipan/20200620_112139.jpg",
  "/hat-there/fansipan/20200620_123029.jpg",
  "/hat-there/fansipan/20200620_124502.jpg",
  "/hat-there/fansipan/20200620_124936.jpg",
  "/hat-there/fansipan/20200620_183828.jpg",
];

const BATHUOC_IMAGES = [
  "/hat-there/bathuoc/20240525_152053.jpg",
  "/hat-there/bathuoc/20240525_153325.jpg",
  "/hat-there/bathuoc/20240525_155800.jpg",
  "/hat-there/bathuoc/20240525_163834.jpg",
  "/hat-there/bathuoc/20240525_183005.jpg",
  "/hat-there/bathuoc/20240526_092145.jpg",
  "/hat-there/bathuoc/20240526_102306.jpg",
  "/hat-there/bathuoc/20240526_145433.jpg",
];

const BACKAN_IMAGES = [
  "/hat-there/bac-can/IMG_2761.jpeg",
  "/hat-there/bac-can/IMG_4137.JPG",
  "/hat-there/bac-can/IMG_4562.JPG",
  "/hat-there/bac-can/IMG_9471.JPG",
  "/hat-there/bac-can/IMG_9490.JPG",
  "/hat-there/bac-can/IMG_9499.JPG",
  "/hat-there/bac-can/IMG_9510.JPG",
  "/hat-there/bac-can/IMG_9839.JPG",
];

interface StorySectionProps {
  title: string;
  bgColor: string;
  children: React.ReactNode;
  galleryType?: "bathuoc" | "fansipan" | "backan";
}

export function AnimatedStorySection({ title, bgColor, children, galleryType = "fansipan" }: StorySectionProps) {
  const galleryImages = 
    galleryType === "fansipan" ? FANSIPAN_IMAGES :
    galleryType === "bathuoc" ? BATHUOC_IMAGES :
    BACKAN_IMAGES;

  const altPrefix = 
    galleryType === "fansipan" ? "Fansipan" :
    galleryType === "bathuoc" ? "Bá Thước" :
    "Bắc Kạn";

  return (
    <section className="py-8 md:py-12 lg:py-16 w-full">
      <div className="max-w-[960px] mx-auto px-4 md:px-0">
        <div className="max-w-6xl mx-auto flex flex-col gap-8 md:gap-12 lg:gap-16">
          <div className="text-center animate-fade-in-up">
            <h2 className="font-bold text-xl md:text-3xl lg:text-4xl xl:text-5xl text-white">{title}</h2>
          </div>
          <div className={`${bgColor} bg-opacity-70 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up-delay`}>
            <div className="p-4 md:p-6 lg:p-8 xl:p-12">
              <div className="prose prose-sm md:prose-base lg:prose-xl prose-invert max-w-none font-light space-y-4 md:space-y-6 text-white/90">
                {React.Children.map(children, (child, index) => (
                  <div className="animate-fade-in-up" style={{ animationDelay: `${3 * (index + 1)}s` }}>
                    {child}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <StaticImageGallery images={galleryImages} altPrefix={altPrefix} />
        </div>
      </div>
    </section>
  );
}