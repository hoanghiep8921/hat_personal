"use client";

import React from "react";
import { ImageCarousel } from "./ImageCarousel";
import { VideoPlayer } from "./VideoPlayer";

const FANSIPAN_IMAGES = [
  "/hat-there/fansipan/20200619_201032.jpg",
  "/hat-there/fansipan/20200620_093358.jpg",
  "/hat-there/fansipan/20200620_112139.jpg",
  "/hat-there/fansipan/20200620_112159.jpg",
  "/hat-there/fansipan/20200620_124434.jpg",
  "/hat-there/fansipan/20200620_175949.jpg",
  "/hat-there/fansipan/20200620_181917.jpg",
  "/hat-there/fansipan/20200620_183828.jpg",
];

const BACKAN_VIDEO_SRC = "/hat-there/bac-can.mp4";

interface StorySectionProps {
  title: string;
  bgColor: string;
  children: React.ReactNode;
  galleryType?: "fansipan" | "backan";
}

export function AnimatedStorySection({ title, bgColor, children, galleryType = "fansipan" }: StorySectionProps) {
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
          {galleryType === "fansipan" ? (
            <ImageCarousel images={FANSIPAN_IMAGES} altPrefix="Fansipan story" />
          ) : (
            <VideoPlayer src={BACKAN_VIDEO_SRC} playbackRate={0.5} />
          )}
        </div>
      </div>
    </section>
  );
}
