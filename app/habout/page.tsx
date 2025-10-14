"use client";

import { useState } from "react";
import svgPaths from "./_components/svg-4wrelnsp04";
import { ImageWithFallback } from "./_components/ImageWithFallback";
import { StarsBackground } from "../components/backgrounds/stars";
import { useRouter } from "next/navigation";

function Frame57() {
  return (
    <div className="content-stretch flex flex-col gap-4 md:gap-[28px] items-end relative shrink-0 w-full">
      <div className="flex flex-col font-light justify-center leading-relaxed not-italic relative shrink-0 text-sm md:text-lg text-white w-full">
        <p className="leading-relaxed">
          "If you opened my photo gallery, you might wonder if I even exist. There are barely any pictures of me - not because I’m camera-shy (I’ll photobomb anyone) - but because my phone’s always capturing everyone else. My classmates flood it with selfies, and I keep snapshots of sweaty games, chaotic class parties, school trips, and late-night laughter. They’re not perfect, but they’re proof we lived, laughed, and were young. Outside the gallery, I’m the eldest child - the “big sister” to my siblings and cousins. I love kids, laugh loudly, talk endlessly, and joke that if AI made an ‘ADHD kid,’ it’d probably be me."
        </p>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-4 md:gap-[24px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame57 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start w-full">
      {/* Text Content */}
      <div className="flex-1 order-2 md:order-1">
        <Frame66 />
      </div>
      
      {/* Image */}
      <div className="w-full md:w-1/2 order-1 md:order-2 flex-shrink-0">
        <div className="aspect-square rounded-lg overflow-hidden">
          <ImageWithFallback
            src="/habout/IMG_20190808_163948.jpg"
            alt="Personal photo"
            className="w-full h-full object-cover transform transition-transform hover:scale-[1.02]"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
}

function Frame55({ currentSlide }: { currentSlide: number }) {
  const images = [
    "/habout/about.jpg",
    "/habout/about2.jpg",
    "/habout/about3.jpg",
    "/habout/about4.jpg",
    "/habout/about5.jpg",
    "/habout/about6.jpg",
    "/habout/about7.jpg",
    "/habout/about8.jpg",
    "/habout/about9.jpg",
    "/habout/about10.jpg",
  ];

  // Split images into two rows
  const topRowImages = images.slice(0, 5);
  const bottomRowImages = images.slice(5, 9);

  return (
    <div className="w-full">
      {/* Mobile: Single image display */}
      <div className="block md:hidden">
        <div className="aspect-[4/3] rounded-lg overflow-hidden">
          <ImageWithFallback 
            src={images[currentSlide]} 
            alt={`Gallery image ${currentSlide + 1}`} 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
      
      {/* Desktop: Two rows of images */}
      <div className="hidden md:flex flex-col gap-[20px]">
        {/* Top row - 5 images */}
        <div className="flex gap-[20px] items-start">
          {topRowImages.map((img, idx) => (
            <div
              key={idx}
              className={`flex-1 transition-all duration-300 rounded-lg overflow-hidden ${currentSlide === idx ? "opacity-100" : "opacity-60"}`}
            >
              <ImageWithFallback 
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
              key={idx + 5}
              className={`flex-1 transition-all duration-300 rounded-lg overflow-hidden ${currentSlide === idx + 5 ? "opacity-100" : "opacity-60"}`}
            >
              <ImageWithFallback 
                src={img} 
                alt={`Gallery image ${idx + 6}`} 
                className="aspect-[4/3] object-cover w-full" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="relative size-[24px]" data-name="arrow-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-left">
          <path
            d={svgPaths.pba57d40}
            id="Vector"
            stroke="var(--stroke-0, #D9D9D9)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame70({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="box-border content-stretch flex gap-[8px] items-center p-[8px] relative shrink-0 hover:bg-white/10 transition-colors cursor-pointer"
    >
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none" />
      <div className="flex h-[24px] items-center justify-center relative shrink-0 w-[24px]">
        <div className="flex-none rotate-[270deg]">
          <ArrowLeft />
        </div>
      </div>
    </button>
  );
}

function Frame72({ currentSlide }: { currentSlide: number }) {
  return (
    <div className="flex items-center justify-center gap-2">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
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

function ArrowLeft1() {
  return (
    <div className="relative size-[24px]" data-name="arrow-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-left">
          <path
            d={svgPaths.pba57d40}
            id="Vector"
            stroke="var(--stroke-0, #D9D9D9)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame71({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="box-border content-stretch flex gap-[8px] items-center p-[8px] relative shrink-0 hover:bg-white/10 transition-colors cursor-pointer"
    >
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none" />
      <div className="flex h-[24px] items-center justify-center relative shrink-0 w-[24px]">
        <div className="flex-none rotate-[90deg]">
          <ArrowLeft1 />
        </div>
      </div>
    </button>
  );
}

function Frame73({ currentSlide, onPrev, onNext }: { currentSlide: number; onPrev: () => void; onNext: () => void }) {
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
      <Frame72 currentSlide={currentSlide} />
      
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

function Frame69() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide(prev => (prev === 0 ? 8 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide(prev => (prev === 8 ? 0 : prev + 1));
  };

  return (
    <div className="w-full">
      <div className="space-y-6">
        <Frame55 currentSlide={currentSlide} />
        <Frame73 currentSlide={currentSlide} onPrev={handlePrev} onNext={handleNext} />
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="relative shrink-0 w-full py-16 md:py-20">
      <StarsBackground className="absolute inset-0" pointerEvents={false}>
        <div className="flex flex-col items-center justify-center relative z-10 px-4 md:px-0">
          <div className="max-w-[960px] w-full">
            {/* Title Section */}
            <div className="text-center md:text-left mb-12 md:mb-16">
              <h2 className="font-extrabold text-3xl md:text-[36px] text-white leading-tight">
                THE MAKING OF ME
              </h2>
            </div>
            
            {/* Content Section */}
            <div className="space-y-12 md:space-y-16">
              <Frame65 />
              <Frame69 />
            </div>
          </div>
        </div>
      </StarsBackground>
    </div>
  );
}

function Frame56({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="border border-black px-4 md:px-8 py-2 md:py-3 text-sm md:text-lg text-black hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 group relative overflow-hidden"
    >
      <span className="relative z-10">Read more</span>
      <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </button>
  );
}

function Frame68() {

  const router = useRouter();
  const handleReadMore = () => {
    router.push("/under-the-hat");
  };

  return (
    <div className="flex flex-col justify-between h-full space-y-6">
      <div className="flex-1">
        <p className="text-sm md:text-lg text-black leading-relaxed font-light">
          I'm also a big feminist, and that passion shows up clearly in my projects. From school initiatives to advocacy
          campaigns, I pour my energy into creating spaces where women's voices are heard and respected.
        </p>
      </div>
      <div className="flex-shrink-0">
        <Frame56 onClick={handleReadMore} />
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center w-full max-w-[960px] mx-auto">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex-shrink-0">
        <div className="aspect-[4/3] rounded-lg overflow-hidden">
          <ImageWithFallback 
            src="/habout/IMG_9769.jpeg" 
            alt="Feminist project" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
      
      {/* Text Content */}
      <div className="w-full md:w-1/2">
        <Frame68 />
      </div>
    </div>
  );
}

function Frame82({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="border border-black px-4 md:px-8 py-2 md:py-3 text-sm md:text-lg text-black hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 group relative overflow-hidden"
    >
      <span className="relative z-10">Read more</span>
      <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </button>
  );
}

function Frame84() {
  const router = useRouter();
  const handleReadMore = () => {
    router.push("/hat-there");
  };

  return (
    <div className="flex flex-col justify-between h-full space-y-6">
      <div className="flex-1">
        <p className="text-sm md:text-lg text-black leading-relaxed font-light">
          And when I'm not working or studying, I'm moving. Whether it's a quick grocery run, a weekend trip across
          town, or wandering through a new city in another country, I love the thrill of going out and discovering
          something new.
        </p>
      </div>
      <div className="flex-shrink-0">
        <Frame82 onClick={handleReadMore} />
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center w-full max-w-[960px] mx-auto">
      {/* Text Content */}
      <div className="w-full md:w-1/2 order-2 md:order-1">
        <Frame84 />
      </div>
      
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex-shrink-0 order-1 md:order-2">
        <div className="aspect-[4/3] rounded-lg overflow-hidden">
          <ImageWithFallback 
            src="/habout/IMG_9497.jpeg" 
            alt="Travel exploration" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
    </div>
  );
}

function Frame85() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-8 md:gap-[72px] items-center justify-center p-4 md:p-8 lg:p-[160px] relative w-full bg-white">
          <Frame59 />
          <Frame60 />
        </div>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 md:gap-[24px] items-center leading-[0] not-italic px-4 md:px-0 py-4 md:py-[24px] relative shrink-0 text-center text-white w-full">
      <div
        className="flex flex-col max-w-[960px] mx-auto font-extrabold justify-center min-w-full relative shrink-0 text-2xl md:text-[36px]"
        style={{ width: "min-content" }}
      >
        <p className="leading-[normal]">HIGHLIGHTS</p>
      </div>
      <div className="flex flex-col font-light justify-center relative shrink-0 text-base md:text-[20px] w-full max-w-[358px] px-4">
        <p className="leading-[normal]">A look at the moments where hard work turned into recognition</p>
      </div>

      <Frame80 />
    </div>
  );
}

function Frame61() {
  const achievementImages = [
    {
      image: "/habout/1684381840044.png",
      award: "MERIT",
      competition: "Immerse Education Essay Competition 2024",
    },
    {
      image: "/habout/66725418810fac0054018251-428659260_773444684815109_7424247042684281572_n.webp",
      award: "Honorable Delegate",
      competition: "IVMUN 2024",
    },
    {
      image: "/habout/455820011_122103203600471066_4032051755095375641_n.jpg",
      className: "border border-gray-500",
      award: "Chair-woman",
      competition: "Youth Diplomats of Vietnam for Committee World Trade Organization",
    },
    {
      image: "/habout/435484628_122111435324254967_836468466759337260_n.jpg",
      className: "border border-gray-500",
      award: "Outstanding Start-Up Idea",
      competition: "High School Business Case 2024",
    },
  ];

  return (
    <div className="relative shrink-0 w-full bg-white">
      <div className="max-w-[960px] mx-auto size-full px-4 md:px-0">
        <div className="box-border content-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-[28px] items-start py-8 md:py-16 relative w-full">
          {achievementImages.map(({ image, className, award, competition }, idx) => (
            <div key={idx} className={`flex flex-col gap-4 h-full`}>
              <ImageWithFallback
                src={image}
                alt={`Achievement ${idx + 1}`}
                className={`size-auto aspect-square object-contain ${className}`}
              />
              <div className="text-black text-center text-sm md:text-base">
                <p className="font-bold">{award}</p>
                <p>{competition}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col gap-4 md:gap-[24px] items-center justify-center relative shrink-0 w-full">
      <Frame61 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="box-border content-stretch flex flex-col gap-8 md:gap-[72px] items-center pt-8 md:pt-16 relative shrink-0 w-full">
      <Frame74 />
      <Frame76 />
    </div>
  );
}

function Group1() {
  return (
    <div className="shrink-0 w-full">
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1690181307176-95fde5584eed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbHV0ZSUyMG11c2ljJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzU5MzI4MjI4fDA&ixlib=rb-4.1.0&q=80&w=1080"
        alt="Flute performance"
        className="size-auto aspect-[16/9] object-cover"
      />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col gap-2 md:gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-white w-full">
      <div className="flex flex-col font-semibold justify-center relative shrink-0 text-lg md:text-[20px] w-full">
        <p className="leading-[normal]">Flute Performance</p>
      </div>
      <div className="flex flex-col font-light justify-center relative shrink-0 text-sm md:text-[16px] w-full">
        <p className="leading-[normal]">
          A quieter, more personal side of me: playing the flute. I may not be a professional musician, but I find joy
          in breathing life into melodies-simple notes that can carry calmness, nostalgia, or even playfulness. It's one
          of those little things that remind me art doesn't always need a stage to feel meaningful.
        </p>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col gap-4 md:gap-[24px] items-start relative shrink-0 flex-1">
      {/* <Group1 /> */}
      <div className="w-full aspect-video relative rounded-lg overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/xiBY656mpsA"
          title="School Play Performance"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Frame77 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-col gap-2 md:gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-white w-full">
      <div className="flex flex-col font-semibold justify-center relative shrink-0 text-lg md:text-[20px] w-full">
        <p className="leading-[normal]">School Play – Mắc mưu Thị Hến</p>
      </div>
      <div className="flex flex-col font-light justify-center relative shrink-0 text-sm md:text-[16px] w-full">
        <p className="leading-[normal]">
          As both director and actor, I had the chance to bring a classic Vietnamese comedy to life at school. I played
          the role of Lão Đề's wife in Mắc mưu Thị Hến, guiding my friends through rehearsals while also stepping into
          character myself. It was a mix of chaos and laughter, but also teamwork, creativity, and the thrill of live
          performance.
        </p>
      </div>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col gap-4 md:gap-[24px] items-start relative shrink-0 flex-1">
      <div className="w-full aspect-video relative rounded-lg overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/aYqb-7AM9JM?start=615&end=690"
          title="School Play Performance"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Frame86 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="max-w-[960px] mx-auto content-stretch flex flex-col md:flex-row gap-6 md:gap-9 items-center relative shrink-0 px-4 md:px-0">
      <Frame78 />
      <Frame79 />
    </div>
  );
}

export default function App() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full overflow-y-auto">
      <Frame67 />
      <Frame85 />
      <Frame62 />
      {/* Frame64 - Unified Format */}
      <div className="bg-white w-full py-4 px-4 md:px-0">
        <div className="max-w-[960px] mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="backdrop-blur-md bg-black flex flex-col gap-4 py-6 md:py-8 lg:py-12 items-center justify-center rounded-xl shadow-xl border">
              <button
                onClick={() => {
                  window.location.href = "/hat-there";
                }}
                className="border-2 border-white px-4 md:px-6 py-2 text-xl md:text-2xl lg:text-3xl text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group relative overflow-hidden"
              >
                <span className="relative z-10 whitespace-pre">HAT THERE</span>
                <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Frame64 */}
    </div>
  );
}
