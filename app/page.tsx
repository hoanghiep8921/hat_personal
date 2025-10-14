"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

// Gallery carousel components
function GalleryFrame55({ currentSlide }: { currentSlide: number }) {
  const images = [
    "/home/image/IMG_20251011_120659.jpg",
    "/home/image/IMG_20251011_120657.jpg",
    "/home/image/IMG_20251011_121237.jpg",
    "/home/image/IMG_20251011_121610.jpg",
    "/home/image/IMG_20251011_121636.jpg",
    "/home/image/IMG_20251011_122117.jpg",
    "/home/image/IMG_20251011_120640.jpg",
    "/home/image/IMG_20251011_122350.jpg"
  ];

  // Split images into two rows
  const topRowImages = images.slice(0, 4);
  const bottomRowImages = images.slice(4, 8);

  return (
    <div className="w-full">
      {/* Mobile: Single image display */}
      <div className="block md:hidden">
        <div className="aspect-[4/3] rounded-lg overflow-hidden">
          <Image 
            width={1000}
            height={1000}
            src={images[currentSlide]} 
            alt={`Gallery image ${currentSlide + 1}`} 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
      
      {/* Desktop: Two rows of images */}
      <div className="hidden md:flex flex-col gap-[20px]">
        {/* Top row - 4 images */}
        <div className="flex gap-[20px] items-start">
          {topRowImages.map((img, idx) => (
            <div
              key={idx}
              className={`flex-1 transition-all duration-300 rounded-lg overflow-hidden ${currentSlide === idx ? "opacity-100" : "opacity-60"}`}
            >
              <Image 
                width={1000}
                height={1000}
                src={img} 
                alt={`Gallery image ${idx + 1}`} 
                className="aspect-[4/3] object-cover w-full" 
              />
            </div>
          ))}
        </div>
        
        {/* Bottom row - 4 images */}
        <div className="flex gap-[20px] items-start">
          {bottomRowImages.map((img, idx) => (
            <div
              key={idx + 4}
              className={`flex-1 transition-all duration-300 rounded-lg overflow-hidden ${currentSlide === idx + 4 ? "opacity-100" : "opacity-60"}`}
            >
              <Image 
                width={1000}
                height={1000}
                src={img} 
                alt={`Gallery image ${idx + 5}`} 
                className="aspect-[4/3] object-cover w-full" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GalleryFrame72({ currentSlide }: { currentSlide: number }) {
  return (
    <div className="flex items-center justify-center gap-2">
      {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            currentSlide === index ? "bg-white" : "bg-gray-400"
          }`}
        />
      ))}
    </div>
  );
}

function GalleryFrame73({ currentSlide, onPrev, onNext }: { currentSlide: number; onPrev: () => void; onNext: () => void }) {
  return (
    <div className="flex items-center justify-between w-full">
      {/* Previous Button */}
      <button 
        onClick={onPrev}
        className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        aria-label="Previous image"
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      {/* Dots Indicator */}
      <GalleryFrame72 currentSlide={currentSlide} />
      
      {/* Next Button */}
      <button 
        onClick={onNext}
        className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        aria-label="Next image"
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

export default function Home() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide(prev => (prev === 0 ? 7 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide(prev => (prev === 7 ? 0 : prev + 1));
  };

  return (
    <main className="flex min-h-screen flex-col">
      <div className="max-w-[960px] mx-auto px-4 md:px-0">
        {/* Horizons of Hat Section */}
        <section className="mx-auto max-w-[960px] py-12 md:py-24">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-16 text-center md:text-left">HORIZONS OF HAT</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 md:mb-16">
            <div
              className="transform hover:scale-105 transition-transform animate-slideUp opacity-0"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              <Image
                width={1000}
                height={1000}
                src="/home/IMG_20251011_121116.jpg"
                className="w-full h-full object-cover aspect-[3/4] rounded-lg"
                alt="IMG_20251011_121116.jpg"
              />
            </div>
            <div
              className="transform hover:scale-105 transition-transform animate-slideUp opacity-0"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              <Image
                width={1000}
                height={1000}
                src="/home/IMG_20251011_122257.jpg"
                className="w-full h-full object-cover aspect-[3/4] rounded-lg"
                alt="IMG_20251011_122257.jpg"
              />
            </div>
            <div
              className="transform hover:scale-105 transition-transform animate-slideUp opacity-0"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              <Image
                width={1000}
                height={1000}
                src="/home/20191024_125049.jpg"
                className="w-full h-full object-cover aspect-[3/4] rounded-lg"
                alt="20191024_125049.jpg"
              />
            </div>
            <div
              className="transform hover:scale-105 transition-transform animate-slideUp opacity-0"
              style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
            >
              <Image
                width={1000}
                height={1000}
                src="/home/IMG_9769.jpeg"
                className="w-full h-full object-cover aspect-[3/4] rounded-lg"
                alt="IMG_9769.jpeg"
              />
            </div>
          </div>
          <div className="max-w-lg ml-auto text-center md:text-left">
            <p className="mb-6 md:mb-8 text-gray-300 text-lg md:text-xl group cursor-pointer">
              <span className="inline-block transform transition-all duration-300 hover:translate-x-2 hover:text-white">
                Discover a journey where youth meets experience. <br />
                Step through memories, achievements, and passions through the eyes of HAT.
              </span>
            </p>
            <button
              onClick={() => router.push('/under-the-hat')}
              className="text-sm md:text-md w-full md:w-auto md:float-end border border-white px-6 md:px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 hover:shadow-glow relative overflow-hidden group"
            >
              <span className="relative z-10">View my projects</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </section>

        {/* Gallery/Intro Section */}
        <section className="py-12 md:py-24">
          <div className="max-w-[960px] mx-auto flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="w-full md:flex-1">
              <div className="cursor-pointer">
                <Image
                  width={1000}
                  height={1000}
                  src="/home/IMG_20190808_163945.jpg"
                  className="aspect-square transform transition-transform hover:scale-[1.02] rounded-md object-cover"
                  alt="IMG_20190808_163945.jpg"
                />
              </div>
            </div>
            <div className="w-full md:flex-1 space-y-4 md:space-y-6">
              <p className="text-sm md:text-base lg:text-xl leading-relaxed text-gray-300">
                My gallery isn't filled with selfies - it's filled with stories. Blurry snapshots of badminton games,
                noisy class parties, school trips, and naps on the floor mats. Each photo is proof that we laughed,
                lived, and grew together in this fleeting time of youth. They remind me that belonging is not about
                faces alone, but about the people, the warmth, and the memories we weave together. When I look back, I
                don't want to see just me - I want to see us. And if you're curious about the person behind the lens, let
                me introduce myself.
              </p>
              <div className="text-center md:text-right">
                <Link href="/habout" className="w-full md:w-auto border border-gray-300 px-6 md:px-8 py-3 text-base md:text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 group relative overflow-hidden inline-block">
                  <span className="relative z-10">Read more</span>
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Gallery Section */}
        <section className="py-12 md:py-24">
          <div className="w-full">
            <div className="space-y-6">
              <GalleryFrame55 currentSlide={currentSlide} />
              <GalleryFrame73 currentSlide={currentSlide} onPrev={handlePrev} onNext={handleNext} />
            </div>
          </div>
        </section>

        {/* My Projects Section */}
        <section className="py-12 md:py-24 px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 lg:mb-16 text-center transition-all duration-300">
            MY PROJECTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 mb-6 md:mb-8 lg:mb-12">
            <div className="text-center">
              <Link href="/under-the-hat#her">
                <Image
                  width={1000}
                  height={1000}
                  src="/home/FB_IMG_1759659504779.jpg"
                  className="aspect-square transform transition-transform hover:scale-[1.02] rounded-md object-cover"
                  alt="FB_IMG_1759659504779.jpg"
                />
                <p className="mt-4 text-lg font-semibold">HER</p>
              </Link>
            </div>
            <div className="text-center">
              <Link href="/under-the-hat#carve-per-diem">
                <Image
                  width={1000}
                  height={1000}
                  src="/home/Carve Per Diem Guideline-02.jpg"
                  className="aspect-square transform transition-transform hover:scale-[1.02] rounded-md object-cover"
                  alt="Carve Per Diem Guideline-02.jpg"
                />
                <p className="mt-4 text-lg font-semibold">CARVE PER DIEM</p>
              </Link>
            </div>
            <div className="text-center">
              <Link href="/under-the-hat#research-covid">
                <Image
                  width={1000}
                  height={1000}
                  src="/home/RESEARCH.jpg"
                  className="aspect-square transform transition-transform hover:scale-[1.02] rounded-md object-cover"
                  alt="freepik__talk__60440.png"
                />
                <p className="mt-4 text-lg font-semibold">RESEARCH</p>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <Link href="/under-the-hat" className="w-full md:w-auto border border-gray-300 px-6 md:px-8 py-3 text-base md:text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 group relative overflow-hidden">
              <span className="relative z-10">Read more</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          </div>
        </section>

        {/* Habout Section - Unified Format */}
        <section className="py-8 md:py-12 lg:py-24 px-4">
          <div className="backdrop-blur-md bg-white/5 flex flex-col gap-4 py-6 md:py-8 lg:py-12 items-center justify-center rounded-xl shadow-xl border border-white/10">
            <button
              onClick={() => {
                router.push("/habout");
              }}
              className="border-2 border-white px-4 md:px-6 py-2 text-xl md:text-2xl lg:text-3xl text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group relative overflow-hidden"
            >
              <span className="relative z-10 whitespace-pre">HABOUT</span>
              <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
