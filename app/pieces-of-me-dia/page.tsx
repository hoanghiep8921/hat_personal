"use client";
import { StarsBackground } from "@/app/components/backgrounds/stars";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

function MediaImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className || ""}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover rounded-lg transition-transform duration-300 hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}

function AnimatedSection({
  children,
  slideFrom = "left",
  delay = 0,
}: {
  children: React.ReactNode;
  slideFrom?: "left" | "right";
  delay?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.05 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const transformClass =
    slideFrom === "left"
      ? isVisible
        ? "translate-x-0"
        : "md:-translate-x-full"
      : isVisible
      ? "translate-x-0"
      : "md:translate-x-full";

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${transformClass} ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      {children}
    </div>
  );
}

export default function PiecesOfMediaPage() {
  const router = useRouter();
  return (
    <StarsBackground
      className="min-h-screen w-full antialiased"
      factor={0.1}
      speed={30}
      starColor="rgba(255, 255, 255, 0.8)"
    >
      <div className="flex flex-col items-start relative w-full min-h-screen">
        {/* Header Section */}
        <div className="relative w-full">
          <div className="flex flex-col items-center justify-center min-h-[200px] px-4 md:px-0">
            <div className="w-full max-w-[960px] mx-auto ">
              <div className="flex flex-col md:flex-row items-center md:items-center justify-between relative w-full gap-6 md:gap-0">
                <div className="flex flex-col font-['Poppins', sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-2xl md:text-3xl lg:text-4xl text-nowrap text-white drop-shadow-xl text-center md:text-left">
                  <p className="leading-[normal] whitespace-pre">PIECES OF ME-DIA</p>
                </div>
                <div className="flex flex-col gap-4 md:gap-6 items-start justify-center relative w-full md:w-[563px]">
                  <div className="flex flex-col gap-4 md:gap-8 items-end relative w-full">
                    <div className="flex flex-col font-['Poppins', sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-sm md:text-base lg:text-lg text-white drop-shadow-lg w-full text-center md:text-left">
                      <p className="leading-[normal]">
                        This is where I collect the little fragments of art that have shaped me - films that kept me up
                        thinking, poems that whispered truths I didn't know I needed, books that opened windows to other
                        worlds, and stories that still linger long after the last page. They may look like pieces of
                        media, but together, they're pieces of me.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full max-w-[960px] mx-auto py-8 md:py-12 px-4 md:px-0">
          <div className="flex flex-col items-center relative w-full">
            {/* Section 1: Elizabethtown */}
            <AnimatedSection slideFrom="left" delay={0}>
              <div className="box-border flex flex-col gap-8 items-center px-0 py-8 relative w-full">
                <div className="flex flex-col gap-8 items-center relative w-full">
                  <div className="flex flex-col gap-8 items-center relative w-full max-w-[1200px]">
                    <div className="rounded-2xl shadow-2xl relative w-full bg-[#41a334] bg-opacity-70">
                      <div className="w-full">
                        <div className="box-border flex flex-col gap-4 md:gap-6 items-start p-4 md:p-6 lg:p-8 relative w-full">
                          {/* Content Layout: Image Left, Text Right */}
                          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-start relative w-full">
                            {/* Image Section */}
                            <div className="w-full lg:w-2/5 flex-shrink-0">
                              <div className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] overflow-hidden rounded-lg shadow-lg">
                                <MediaImage
                                  src="/pieces-of-media/clairebear.jpg"
                                  alt="Elizabethtown movie poster"
                                  className="w-full h-full"
                                />
                              </div>
                            </div>
                            
                            {/* Text Section */}
                            <div className="w-full lg:w-3/5 flex-1">
                              {/* Title */}
                              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">In Defense of the Dream Girl</h2>
                              <div className="prose prose-sm md:prose-base lg:prose-xl prose-invert max-w-none font-light space-y-4 md:space-y-6 text-white">
                                <div className="flex flex-col justify-center relative w-full">
                                  <p className="leading-relaxed text-sm md:text-base lg:text-lg">{`The term Manic Pixie Dream Girl (MPDG)-coined by Nathan Rabin after Kirsten Dunst's character in Elizabethtown-refers to women who seemingly exist only to inspire a male protagonist's growth. They're portrayed as whimsical, ethereal, and mysterious, yet often stripped of real depth or agency.`}</p>
                                </div>
                                <div className="flex flex-col justify-center relative w-full space-y-4">
                                  <p className="leading-relaxed text-sm md:text-base lg:text-lg">{`Ironically, though born from feminist critique, the term has since narrowed how female characters are perceived-punishing those who aren't overtly "strong" or "independent." That it came from a male critic eager to categorize women should've been a red flag.`}</p>
                                  <p className="leading-relaxed text-sm md:text-base lg:text-lg">
                                    So here I stand, in defense of these so-called dream girls-not as flat archetypes, but as complex characters too often misunderstood by the very narratives that claim to define them.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Section 2: The Bear */}
            <AnimatedSection slideFrom="right" delay={200}>
              <div className="box-border flex flex-col gap-8 items-center px-0 py-8 relative w-full">
                <div className="flex flex-col gap-8 items-center relative w-full">
                  <div className="flex flex-col gap-8 items-center relative w-full max-w-[1200px]">
                    <div className="rounded-2xl shadow-2xl relative w-full bg-[#be1386] bg-opacity-70">
                      <div className="w-full">
                        <div className="box-border flex flex-col gap-4 md:gap-6 items-start p-4 md:p-6 lg:p-8 relative w-full">
                          {/* Content Layout: Text Left, Image Right */}
                          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-start relative w-full">
                            {/* Text Section */}
                            <div className="w-full lg:w-3/5 flex-1 order-2 lg:order-1">
                              {/* Title */}
                              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">Beyond the Dream Girl: Rethinking Claire in The Bear</h2>
                              <div className="prose prose-sm md:prose-base lg:prose-xl prose-invert max-w-none font-light space-y-4 md:space-y-6 text-white">
                                <div className="flex flex-col justify-center relative w-full">
                                  <p className="leading-relaxed text-sm md:text-base lg:text-lg">
                                  The Bear follows Carmy, a chef returning to Chicago to rebuild his late brother’s sandwich shop while battling grief. Claire - his childhood friend and an ER doctor - offers calm in his chaos, yet many dismissed her as a Manic Pixie Dream Girl (MPDG).
                                  </p>
                                </div>
                                <div className="flex flex-col justify-center relative w-full">
                                  <p className="leading-relaxed text-sm md:text-base lg:text-lg">
                                    But her “perfection” reflects Carmy’s projection - his craving for stability he can’t sustain. The MPDG label, overused, flattens women into types. Not every woman must be bold to be real; quiet strength and tenderness are depth too. True independence is the freedom to be imperfect and human.
                                  </p>
                                </div>
                              </div>
                            </div>
                            
                            {/* Image Section */}
                            <div className="w-full lg:w-2/5 flex-shrink-0 order-1 lg:order-2">
                              <div className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] overflow-hidden rounded-lg shadow-lg">
                                <MediaImage
                                  src="/pieces-of-media/hq720.jpg"
                                  alt="The Bear TV show scene"
                                  className="w-full h-full"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Section 3: Noah */}
            <AnimatedSection slideFrom="left" delay={400}>
              <div className="box-border flex flex-col gap-8 items-center px-0 py-8 relative w-full">
                <div className="flex flex-col gap-8 items-center relative w-full">
                  <div className="flex flex-col gap-8 items-center relative w-full max-w-[1200px]">
                    <div className="rounded-2xl shadow-2xl relative w-full bg-[#2e7acf] bg-opacity-70">
                      <div className="w-full">
                        <div className="box-border flex flex-col gap-4 md:gap-6 items-start p-4 md:p-6 lg:p-8 relative w-full">
                          {/* Content Layout: Image Left, Text Right */}
                          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-start relative w-full">
                            {/* Image Section */}
                            <div className="w-full lg:w-2/5 flex-shrink-0">
                              <div className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] overflow-hidden rounded-lg shadow-lg">
                                <MediaImage
                                  src="/pieces-of-media/idiot-noah.jpg"
                                  alt="Noah building the ark"
                                  className="w-full h-full"
                                />
                              </div>
                            </div>
                            
                            {/* Text Section */}
                            <div className="w-full lg:w-3/5 flex-1">
                              {/* Title */}
                              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">The Virtue of Perseverance</h2>
                              <div className="prose prose-sm md:prose-base lg:prose-xl prose-invert max-w-none font-light space-y-4 md:space-y-6 text-white">
                                <div className="flex flex-col justify-center relative w-full">
                                  <p className="leading-relaxed text-sm md:text-base lg:text-lg">In modern media, persistence without success is often mocked-ambition without results seen as delusion. Yet across spiritual and cultural traditions, perseverance is celebrated as the essence of growth.</p>
                                </div>
                                <div className="flex flex-col justify-center relative w-full">
                                  <p className="leading-relaxed text-sm md:text-base lg:text-lg">
                                    From Noah and Moses in the Bible to Siddhartha and Milarepa in Buddhism, faith and endurance transform struggle into meaning. Even Greek myths-of Icarus, Daedalus, and Prometheus-reflect the human urge to strive, risk, and sacrifice for progress.
                                  </p>
                                </div>
                                <div className="flex flex-col justify-center relative w-full">
                                  <p className="leading-relaxed text-sm md:text-base lg:text-lg">
                                    What today's narratives dismiss as futility is, in truth, the heartbeat of progress: perseverance shapes resilience, deepens purpose, and defines what it means to be human.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Section 4: Inside Job */}
            <AnimatedSection slideFrom="right" delay={600}>
              <div className="box-border flex flex-col gap-8 items-center px-0 py-8 relative w-full">
                <div className="flex flex-col gap-8 items-center relative w-full">
                  <div className="flex flex-col gap-8 items-center relative w-full max-w-[1200px]">
                    <div className="rounded-2xl shadow-2xl relative w-full bg-[#e12926] bg-opacity-70">
                      <div className="w-full">
                        <div className="box-border flex flex-col gap-4 md:gap-6 items-start p-4 md:p-6 lg:p-8 relative w-full">
                          {/* Content Layout: Text Left, Image Right */}
                          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-start relative w-full">
                            {/* Text Section */}
                            <div className="w-full lg:w-3/5 flex-1 order-2 lg:order-1">
                              {/* Title */}
                              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">The Cost of Opacity</h2>
                              <div className="prose prose-sm md:prose-base lg:prose-xl prose-invert max-w-none font-light space-y-4 md:space-y-6 text-white">
                                <div className="flex flex-col justify-center relative w-full">
                                  <p className="leading-relaxed text-sm md:text-base lg:text-lg">Opacity breeds mistrust-and often, disaster. The BBC's The Lazarus Heist exposes how North Korea's hidden cyber networks enabled global thefts, while Inside Job (2010) links the 2008 financial collapse to opaque Wall Street dealings. Enron: The Smartest Guys in the Room reveals how deception destroyed a corporate giant.</p>
                                </div>
                                <div className="flex flex-col justify-center relative w-full">
                                  <p className="leading-relaxed text-sm md:text-base lg:text-lg">
                                    Across contexts, the message is clear: when transparency disappears, systems decay and society pays the price. Transparency isn't just virtue-it's protection.
                                  </p>
                                </div>
                              </div>
                            </div>
                            
                            {/* Image Section */}
                            <div className="w-full lg:w-2/5 flex-shrink-0 order-1 lg:order-2">
                              <div className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] overflow-hidden rounded-lg shadow-lg">
                                <MediaImage
                                  src="/pieces-of-media/inside-job.jpg"
                                  alt="Inside Job documentary"
                                  className="w-full h-full"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Section 5: Art */}
            <AnimatedSection slideFrom="left" delay={800}>
              <div className="box-border flex flex-col gap-8 items-center px-0 py-8 relative w-full">
                <div className="flex flex-col gap-8 items-center relative w-full">
                  <div className="flex flex-col gap-8 items-center relative w-full max-w-[1200px]">
                    <div className="rounded-2xl shadow-2xl relative w-full bg-[#FEA700] bg-opacity-70">
                      <div className="w-full">
                        <div className="box-border flex flex-col gap-4 md:gap-6 items-start p-4 md:p-6 lg:p-8 relative w-full">
                          {/* Content Layout: Image Left, Text Right */}
                          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-start relative w-full">
                            {/* Image Section */}
                            <div className="w-full lg:w-2/5 flex-shrink-0">
                              <div className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] overflow-hidden rounded-lg shadow-lg">
                                <MediaImage
                                  src="/pieces-of-media/p11671_v_h10_aa.jpg"
                                  alt="Art and creativity"
                                  className="w-full h-full"
                                />
                              </div>
                            </div>
                            
                            {/* Text Section */}
                            <div className="w-full lg:w-3/5 flex-1">
                              {/* Title */}
                              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">The Necessity of Art</h2>
                              <div className="prose prose-sm md:prose-base lg:prose-xl prose-invert max-w-none font-light space-y-4 md:space-y-6 text-white">
                                <div className="flex flex-col justify-center relative w-full">
                                  <p className="leading-relaxed text-sm md:text-base lg:text-lg">Art is not decoration-it's how we see, feel, and grow. Perfect Blue exposes the fracture between identity and performance; Dead Poets Society and Whiplash reveal that creativity demands both freedom and pain. In My Name Is Asher Lev, art becomes a struggle between faith and truth, while Patti Smith's Just Kids shows it as a lifeline binding people through creation.</p>
                                </div>
                                <div className="flex flex-col justify-center relative w-full">
                                  <p className="leading-relaxed text-sm md:text-base lg:text-lg">
                                    Across every form, art proves essential-not just to beauty, but to our humanity. It fuels ambition, shapes empathy, and keeps the spirit alive.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <div className="container mx-auto pb-8 md:pb-12 px-4 md:px-0">
              <div className="max-w-6xl mx-auto">
                <div className="backdrop-blur-md bg-white/5 flex flex-col gap-4 py-6 md:py-8 lg:py-12 items-center justify-center rounded-xl shadow-xl border border-white/10">
                  <button
                    onClick={() => {
                      router.push("/");
                    }}
                    className="border-2 border-white px-4 md:px-6 py-2 text-xl md:text-2xl lg:text-3xl text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group relative overflow-hidden"
                  >
                    <span className="relative z-10 whitespace-pre">HOME</span>
                    <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StarsBackground>
  );
}
