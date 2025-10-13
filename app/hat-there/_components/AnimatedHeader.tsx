"use client";

export function AnimatedHeader() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-8 lg:gap-12 px-4 md:px-0">
      <div className="text-center md:text-left">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-[36px] text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 transition-all duration-300">
          HAT THERE
        </h1>
      </div>
      <div className="max-w-xl">
        <p className="font-light text-sm md:text-base lg:text-lg text-white/80 leading-relaxed text-center md:text-right">
          A collection of journeys - from misty mountains to village classrooms - where each trip became more than
          travel. These are the moments of exchange, growth, and memories I carry with me.
        </p>
      </div>
    </div>
  );
}
