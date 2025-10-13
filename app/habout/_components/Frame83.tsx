import svgPaths from "./svg-4wrelnsp04";

function Frame57() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-end relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white w-full">
        <p className="leading-[normal]">
          If you opened my photo gallery, you’d probably wonder if I even exist. There are barely any pictures of me,
          not because I’m camera shy (best believe I will photobomb everyone), but because my phone has been busy
          capturing everyone and everything else. My classmates sometimes grab my phone and flood it with their
          selfies-moments I might have to squint to remember but never to forget, because the laughter always lingers.
          Other times, I’m the one behind the camera, saving those small, unpolished slices of life: sweaty badminton
          matches under the sun, makeshift class parties with our chaotic soda cocktails, school trips filled with
          stories of traditional crafts, and naps where we whispered until we burst out laughing. They’re not perfect
          shots, but they’re proof that we lived, that we laughed, that we were young together in this small slice of
          time that will never return.
        </p>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-end relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white w-full">
        <p className="leading-[normal]">
          Beyond the gallery, I’m the eldest child in my family, the “big sister” not just to my two siblings but to all
          my cousins. I love kids, and I’d like to think I’m pretty good with them too. People usually recognize me by
          my toothy smile and big laugh-I’m energetic, restless, always talking, sometimes to the point where I joke
          that if you generated “ADHD kid” with AI, you’d get me.
        </p>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame57 />
      <Frame58 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex gap-[72px] items-start justify-end relative shrink-0 w-full">
      <Frame66 />
      <div className="bg-[#e12926] h-[453px] shrink-0 w-[296px]" />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[20px] h-[165px] items-start relative shrink-0 w-[960px]">
      <div className="bg-[#d9d9d9] h-full shrink-0 w-[216.75px]" />
      <div className="basis-0 bg-[#d9d9d9] grow h-full min-h-px min-w-px shrink-0" />
      <div className="basis-0 bg-[#d9d9d9] grow h-full min-h-px min-w-px shrink-0" />
      <div className="basis-0 bg-[#d9d9d9] grow h-full min-h-px min-w-px shrink-0" />
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

function Frame70() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center p-[8px] relative shrink-0">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none" />
      <div className="flex h-[24px] items-center justify-center relative shrink-0 w-[24px]">
        <div className="flex-none rotate-[270deg]">
          <ArrowLeft />
        </div>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="h-[6px] relative shrink-0 w-[26px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 6">
        <g id="Frame 72">
          <circle cx="3" cy="3" fill="var(--fill-0, #CECECE)" id="Ellipse 4" r="3" />
          <circle cx="13" cy="3" fill="var(--fill-0, white)" id="Ellipse 5" r="3" />
          <circle cx="23" cy="3" fill="var(--fill-0, #CECECE)" id="Ellipse 6" r="3" />
        </g>
      </svg>
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

function Frame71() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center p-[8px] relative shrink-0">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none" />
      <div className="flex h-[24px] items-center justify-center relative shrink-0 w-[24px]">
        <div className="flex-none rotate-[90deg]">
          <ArrowLeft1 />
        </div>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame70 />
      <Frame72 />
      <Frame71 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0">
      <Frame55 />
      <Frame73 />
    </div>
  );
}

function Frame67() {
  return (
    <div className=" h-[975px] relative shrink-0 w-full">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[72px] h-[975px] items-end justify-center px-[160px] py-0 relative w-full">
          <div
            className="flex flex-col font-['Inter:Extra_Bold',_sans-serif] font-extrabold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[36px] text-white"
            style={{ width: "min-content" }}
          >
            <p className="leading-[normal]">THE MAKING OF ME</p>
          </div>
          <Frame65 />
          <Frame69 />
        </div>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[28px] py-[16px] relative shrink-0">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-nowrap">
        <p className="leading-[normal] whitespace-pre">Read more</p>
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-between min-h-px min-w-px relative shrink-0">
      <div
        className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[20px] text-black"
        style={{ width: "min-content" }}
      >
        <p className="leading-[normal]">
          I’m also a big feminist, and that passion shows up clearly in my projects. From school initiatives to advocacy
          campaigns, I pour my energy into creating spaces where women’s voices are heard and respected.
        </p>
      </div>
      <Frame56 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[64px] h-[340px] items-center relative shrink-0 w-full">
      <div className="basis-0 bg-[#d9d9d9] grow h-full min-h-px min-w-px shrink-0" />
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[35px] justify-center leading-[0] left-[157px] not-italic text-[18px] text-black top-[173.5px] translate-y-[-50%] w-[174px]">
        <p className="leading-[normal]">→ url /project/her</p>
      </div>
      <Frame68 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[28px] py-[16px] relative shrink-0">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-nowrap">
        <p className="leading-[normal] whitespace-pre">Read more</p>
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-end justify-between min-h-px min-w-px relative shrink-0">
      <div
        className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[20px] text-black"
        style={{ width: "min-content" }}
      >
        <p className="leading-[normal]">
          And when I’m not working or studying, I’m moving. Whether it’s a quick grocery run, a weekend trip across
          town, or wandering through a new city in another country, I love the thrill of going out and discovering
          something new.
        </p>
      </div>
      <Frame82 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[64px] h-[340px] items-center relative shrink-0 w-full">
      <Frame84 />
      <div className="basis-0 bg-[#d9d9d9] grow h-full min-h-px min-w-px shrink-0" />
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[35px] justify-center leading-[0] left-[664px] not-italic text-[18px] text-black top-[165.5px] translate-y-[-50%] w-[174px]">
        <p className="leading-[normal]">→ url /hat-there</p>
      </div>
    </div>
  );
}

function Frame85() {
  return (
    <div className="h-[1032px] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[72px] h-[1032px] items-center justify-center px-[160px] py-0 relative w-full">
          <Frame59 />
          <Frame60 />
        </div>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className=" box-border content-stretch flex flex-col gap-[24px] items-center leading-[0] not-italic px-0 py-[24px] relative shrink-0 text-center text-white w-full">
      <div
        className="flex flex-col font-['Inter:Extra_Bold',_sans-serif] font-extrabold justify-center min-w-full relative shrink-0 text-[36px]"
        style={{ width: "min-content" }}
      >
        <p className="leading-[normal]">HIGHLIGHTS</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[20px] w-[358px]">
        <p className="leading-[normal]">A look at the moments where hard work turned into recognition</p>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="h-[295px] relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[28px] h-[295px] items-start px-[160px] py-0 relative w-full">
          <div className="basis-0 bg-[#d9d9d9] grow h-full min-h-px min-w-px shrink-0" />
          <div className="basis-0 bg-[#d9d9d9] grow h-full min-h-px min-w-px shrink-0" />
          <div className="basis-0 bg-[#d9d9d9] grow h-full min-h-px min-w-px shrink-0" />
          <div className="basis-0 bg-[#d9d9d9] grow h-full min-h-px min-w-px shrink-0" />
        </div>
      </div>
    </div>
  );
}

function Frame75() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex font-['Inter:Regular',_sans-serif] font-normal gap-[24px] items-start leading-[0] not-italic px-[160px] py-0 relative text-[16px] text-black text-center w-full">
          <div className="basis-0 flex flex-col grow justify-center leading-[normal] min-h-px min-w-px relative shrink-0">
            <p className="mb-0">MERIT</p>
            <p>Immerse Education Essay Competition 2024</p>
          </div>
          <div className="basis-0 flex flex-col grow justify-center leading-[normal] min-h-px min-w-px relative shrink-0">
            <p className="mb-0">Honorable Delegate</p>
            <p>IVMUN 2024</p>
          </div>
          <div className="basis-0 flex flex-col grow justify-center leading-[normal] min-h-px min-w-px relative shrink-0">
            <p className="mb-0">Chair-woman</p>
            <p>Youth Diplomats of Vietnam for Committee World Trade Organization</p>
          </div>
          <div className="basis-0 flex flex-col grow justify-center leading-[normal] min-h-px min-w-px relative shrink-0">
            <p className="mb-0">Outstanding Start-Up Idea</p>
            <p>{`High School Business Case 2024 `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full">
      <Frame61 />
      <Frame75 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[72px] h-[801px] items-center pb-0 pt-[36px] px-0 relative shrink-0 w-full">
      <Frame74 />
      <Frame76 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <div className="[grid-area:1_/_1] bg-[#d9d9d9] h-[295px] ml-0 mt-0 w-[470px]" />
      <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[35px] justify-center ml-[158.348px] mt-[147.5px] not-italic relative text-[18px] text-black translate-y-[-50%] w-[175.494px]">
        <p className="leading-[normal]">Video thổi sáo</p>
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-white w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center relative shrink-0 text-[20px] w-full">
        <p className="leading-[normal]">Flute Performance</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[normal]">
          A quieter, more personal side of me: playing the flute. I may not be a professional musician, but I find joy
          in breathing life into melodies-simple notes that can carry calmness, nostalgia, or even playfulness. It’s one
          of those little things that remind me art doesn’t always need a stage to feel meaningful.
        </p>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[470px]">
      <Group1 />
      <Frame77 />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <div className="[grid-area:1_/_1] bg-[#d9d9d9] h-[295px] ml-0 mt-0 w-[470px]" />
      <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[35px] justify-center ml-[158.348px] mt-[147.5px] not-italic relative text-[18px] text-black translate-y-[-50%] w-[175.494px]">
        <p className="leading-[normal]">Video diễn kịch</p>
      </div>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-white w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center relative shrink-0 text-[20px] w-full">
        <p className="leading-[normal]">School Play – Mắc mưu Thị Hến</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[normal]">
          As both director and actor, I had the chance to bring a classic Vietnamese comedy to life at school. I played
          the role of Lão Đề’s wife in Mắc mưu Thị Hến, guiding my friends through rehearsals while also stepping into
          character myself. It was a mix of chaos and laughter, but also teamwork, creativity, and the thrill of live
          performance.
        </p>
      </div>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[470px]">
      <Group2 />
      <Frame86 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex gap-[36px] items-center relative shrink-0">
      <Frame78 />
      <Frame79 />
    </div>
  );
}

function Frame81() {
  return (
    <div className=" content-stretch flex flex-col gap-[72px] h-[827px] items-center justify-center relative shrink-0 w-full">
      <div
        className="flex flex-col font-['Inter:Extra_Bold',_sans-serif] font-extrabold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[36px] text-center text-white"
        style={{ width: "min-content" }}
      >
        <p className="leading-[normal]">ANOTHER SIDE OF ME</p>
      </div>
      <Frame80 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[28px] py-[16px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[3px] border-solid border-white inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">HAT THERE</p>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="bg-[#b7b7b7] content-stretch flex flex-col gap-[8px] h-[512px] items-center justify-center relative shrink-0 w-full">
      <Frame87 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-nowrap">
        <p className="leading-[normal] whitespace-pre">→ url /hat-there</p>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="h-[757px] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[757px] items-center justify-center px-[160px] py-0 relative w-full">
          <Frame63 />
        </div>
      </div>
    </div>
  );
}

export default function Frame83() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <Frame67 />
      <Frame85 />
      <Frame62 />
      <Frame81 />
      <Frame64 />
    </div>
  );
}
