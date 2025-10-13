"use client";
import { StarsBackground } from "../components/backgrounds/stars";
import { AnimatedHeader } from "./_components/AnimatedHeader";
import { AnimatedStorySection } from "./_components/AnimatedStorySection";
import { useRouter } from "next/navigation";

export default function App() {
  const router = useRouter();
  return (
    <StarsBackground className="min-h-screen w-full antialiased">
      <div className="flex flex-col gap-8 md:gap-12 w-full min-h-screen">
        {/* Header */}
        <header className="w-full py-6 md:py-8 lg:py-16">
          <div className="max-w-[960px] mx-auto">
            <div className="max-w-6xl mx-auto">
              <AnimatedHeader />
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex flex-col gap-4 md:gap-8 w-full">
          {/* Story 1: Bá Thước */}
          <AnimatedStorySection title="Footprints in Bá Thước" bgColor="bg-[#41a334]" galleryType="fansipan">
            <div className="flex flex-col justify-center relative w-full">
              <p className="leading-relaxed text-sm md:text-base lg:text-lg">{`I've never understood why people dislike lists - I love them! Checking things off feels like therapy. So, travel lists combine my two favorite things: listing and traveling. In 10th grade, I got to check off Bá Thước.`}</p>
            </div>
            <div className="flex flex-col justify-center relative w-full">
              <p className="leading-relaxed text-sm md:text-base lg:text-lg">{`We started at Pà Pan Elementary, a small mountain school with rustic walls and endless laughter. That morning, we hosted games - tug-of-war, badminton (I may have bragged a bit when they cheered), and jump rope. Later, we led a financial workshop where "little adults" leaned in to learn about saving and dreaming big. Before leaving, we painted and decorated a play space, a small reminder that learning should always include joy.`}</p>
            </div>
            <div className="flex flex-col justify-center relative w-full">
              <p className="leading-relaxed text-sm md:text-base lg:text-lg">
                But the best part was the children: chatty Ngọc, confident Ánh, goofy Cường, shy Quân, and so many others whose names still echo in my mind. When we said goodbye, they hugged us tightly: "Don't forget our names," they said - and I haven't.
              </p>
            </div>
            <div className="flex flex-col justify-center relative w-full">
              <p className="leading-relaxed text-lg">
                Bá Thước also stole my heart through its food and culture. I learned to make cơm lam, rolled bánh sừng trâu, and joined the villagers in múa sạp under a starry sky. We laughed through broken Thai phrases, grateful for every connection.
              </p>
            </div>
            <div className="flex flex-col justify-center relative w-full">
              <p className="leading-relaxed text-lg mb-0">
                The next day, we explored Hang Dơi (yes, with real bat droppings) and, despite a few clumsy falls, it was worth it. Then came the rice fields - my favorite. Barefoot in the mud, I was reminded of childhood days with my grandmother, hands deep in the earth, feeling grounded in every sense.
              </p>
              <p className="leading-relaxed text-lg">
                Looking back, Bá Thước wasn't just a trip - it was an exchange. We shared what we knew and left with something greater: warmth, resilience, tradition, and the memory of children's laughter. Impact doesn't travel one way; it circles back, quietly, and stays with you.
              </p>
            </div>
          </AnimatedStorySection>

          {/* Divider */}
          <div className="max-w-[960px] mx-auto px-4 md:px-0">
            <div className="max-w-6xl mx-auto">
              <hr className="border-t border-white/20" />
            </div>
          </div>

          {/* Story 2: Fansipan */}
          <AnimatedStorySection
            title="Fansipan - The Peak Beyoond The Fog"
            bgColor="bg-[#be1386]"
            galleryType="fansipan"
          >
            <div className="flex flex-col justify-center relative w-full">
              <p className="leading-relaxed text-lg">The peak that taught me to look around</p>
            </div>
            <div className="flex flex-col justify-center relative w-full">
              <p className="leading-relaxed text-lg mb-0">{`I've always been a beach girl - water over mountains any day. Yet there I was on a chilly morning at the foot of Fansipan, facing 600 steps after a cable car ride that already felt like a victory. This trip was special because my grandma came along - my favorite person, my steady Warren Buffett to my chaotic stock market self.`}</p>
            </div>
            <div className="flex flex-col justify-center relative w-full">
              <p className="leading-relaxed text-lg">
                The cable car view was breathtaking: clouds curling around mountains, valleys below, and, thanks to Grandma's luck, a double rainbow arcing across the sky. I've always loved rainbows - they include every color, leaving none behind.
              </p>
            </div>
            <div className="flex flex-col justify-center relative w-full">
              <p className="leading-relaxed text-lg mb-0">
                Then came the climb. Six hundred steps that burned, tested my breath, and my pride. When I finally reached the top, the view was... fog. Just white mist swallowing everything. For a moment, I felt crushed - until I saw my sisters laughing and my grandma smiling, proud and content. She hadn't done anything this strenuous in years, yet there she was, glowing with joy.
              </p>
              <p className="leading-relaxed text-lg">
                That's when I realized the peak wasn't the point - the journey was. The flowers along the path, a rainbow bug, the laughter. That night's dinner of smoky grilled meat and cơm lam tasted divine, maybe because everything - effort, joy, and love - had led up to it.
              </p>
            </div>
          </AnimatedStorySection>

          {/* Divider */}
          <div className="max-w-[960px] mx-auto ">
            <div className="max-w-6xl mx-auto">
              <hr className="border-t border-white/20" />
            </div>
          </div>

          {/* Story 3: Bắc Kạn */}
          <AnimatedStorySection title="Bắc Kạn - Weaving Memories" bgColor="bg-[#2e7acf]" galleryType="backan">
            <div className="flex flex-col justify-center relative w-full">
              <p className="leading-relaxed text-lg">
                I came to Bắc Kạn for the Bride to Business project, where we hosted a talk on financial technology and how child marriage affects women's lives. Serious stuff-but once the project wrapped up, the real joy began: slowing down, exploring, and finding beauty in small moments.
              </p>
            </div>
            <div className="flex flex-col justify-center relative w-full">
              <p className="leading-relaxed text-lg">
                First was weaving. My clumsy hands tangled the threads while the artisans smiled and showed me brocade patterns-stories of mountains, harvests, and pride passed through generations. I realized I wasn't just weaving fabric, but touching memory itself.
              </p>
            </div>
            <div className="flex flex-col justify-center relative w-full">
              <p className="leading-relaxed text-lg">
                Then came the đàn tính. Watching the craftsman carve and string it felt like seeing someone breathe life into wood. When he played, the sound floated through the mountains; when I tried, it was more of a "remix no one asked for," but I couldn't stop smiling.
              </p>
            </div>
            <div className="flex flex-col justify-center relative w-full">
              <p className="leading-relaxed text-lg">
                At Hang Múa Hạ, the glittering stalactites felt like stepping into another world. I was, predictably, the last one out-but proud of every step, cheered on by my friends.
              </p>
            </div>
            <div className="flex flex-col justify-center relative w-full">
              <p className="leading-relaxed text-lg">
                When the trip ended, I knew Bắc Kạn had given me more than a project. It gave me memories stitched like brocade-threads of sound, rhythm, laughter, and quiet strength-woven into a song I'll keep with me long after the journey.
              </p>
            </div>
          </AnimatedStorySection>

          {/* Footer CTA */}
          <div className="max-w-[960px] mx-auto w-full pb-8 md:pb-12 px-4 md:px-0">
            <div className="max-w-6xl mx-auto">
              <div className="backdrop-blur-md bg-white/5 flex flex-col gap-4 py-6 md:py-8 lg:py-12 items-center justify-center rounded-xl shadow-xl border border-white/10">
                <button
                  onClick={() => {
                    router.push("/under-the-hat");
                  }}
                  className="border-2 border-white px-4 md:px-6 py-2 text-xl md:text-2xl lg:text-3xl text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group relative overflow-hidden"
                >
                  <span className="relative z-10 whitespace-pre">UNDER THE HAT</span>
                  <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </StarsBackground>
  );
}

