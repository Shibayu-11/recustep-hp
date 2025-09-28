"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { TextScramble } from "@/components/ui/text-scramble";

/** 画像パスを .jpg に統一（ここだけ触れば全差し替え可） */
const im = (name: string) => `/images/hero/${name}.jpg`;

export default function Hero() {
  const items = [
    { src: im("hp"),         title: "Web Creative" },     // 0
    { src: im("app"),        title: "App Development" },  // 1
    { src: im("system"),     title: "System" },           // 2
    { src: im("artbloom"),   title: "ArtBloom" },         // 3
    { src: im("marketing"),  title: "Marketing" },        // 4
    { src: im("shokulab"),   title: "食ラボ" },            // 5 
    { src: im("human"),      title: "Human Resources" },  // 6
    { src: im("consult"),    title: "Consulting" },       // 7
  ];

  return (
    <section
      id="hero"
      className="relative w-full bg-white py-10 md:py-20 overflow-hidden scroll-mt-[92px] md:scroll-mt-[108px]"
    >
      <MobileHero items={items} />
      <DesktopHero items={items} />
    </section>
  );
}

function MobileHero({ items }: { items: { src: string; title?: string }[] }) {
  const W = "w-[44vw]";
  const ASPECT = "aspect-[3/2]";
  const TITLE_SPACE = "h-6";

  const row1 = [items[0], items[1], items[4]];
  const row2Peek = items[2];
  const row3 = [items[5], items[3]];
  const row4 = items[6];

  return (
    <div className="block md:hidden w-full space-y-3">
      {/* 1列目 */}
      <div className="relative w-full overflow-hidden">
        <div aria-hidden className={`invisible ${W} ${ASPECT}`} />
        <div aria-hidden className={`invisible ${TITLE_SPACE}`} />
        <div className="absolute inset-0 flex w-[132vw] gap-0">
          {row1.map((c, i) => (
            <div key={`r1-${i}`} className={W}>
              <Card {...c} mobileWidthClass="w-full" aspectClass={ASPECT} titleSizeClass="text-[12px]" />
            </div>
          ))}
        </div>
      </div>

      {/* 2列目 */}
      <div className="relative w-full overflow-hidden">
        <div aria-hidden className={`invisible ${W} ${ASPECT}`} />
        <div aria-hidden className={`invisible ${TITLE_SPACE}`} />
        <div className="absolute left-0 right-[30vw] top-1/2 -translate-y-1/2 px-4 z-20">
          <HeadlineTwoLines />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-[-26vw] z-10 pointer-events-none select-none">
          <div className={`${W}`}>
            <Card {...row2Peek} mobileWidthClass="w-full" aspectClass={ASPECT} titleSizeClass="text-[12px]" />
          </div>
        </div>
      </div>

      {/* 3列目 */}
      <div className="relative w-full overflow-hidden">
        <div aria-hidden className={`invisible ${W} ${ASPECT}`} />
        <div aria-hidden className={`invisible ${TITLE_SPACE}`} />
        <div
          className="absolute left-[6vw] top-1/2 -translate-y-1/2 font-bold text-[#565656] z-20"
          style={{ writingMode: "vertical-rl", WebkitWritingMode: "vertical-rl", letterSpacing: "0.14em", lineHeight: "0.9", fontSize: "22px" }}
        >
          <LoopingScramble text="DREAM × BUILD" />
        </div>
        <div className="absolute top-0 right-[-15vw] flex gap-0 z-10">
          {row3.map((c, i) => (
            <div key={`r3-${i}`} className={W}>
              <Card {...c} mobileWidthClass="w-full" aspectClass={ASPECT} titleSizeClass="text-[12px]" />
            </div>
          ))}
        </div>
      </div>

      {/* 4列目 */}
      <div className="relative w-full overflow-hidden">
        <div aria-hidden className={`invisible ${W} ${ASPECT}`} />
        <div aria-hidden className={`invisible ${TITLE_SPACE}`} />
        <div className="absolute inset-0 flex items-center justify-between">
          <div className={W}>
            <Card {...row4} mobileWidthClass="w-full" aspectClass={ASPECT} titleSizeClass="text-[12px]" />
          </div>
          <div className="w-[56vw] h-full flex items-center justify-center px-[2vw]">
            <div className="flex flex-col items-center">
              <LoopingScramble text="WEB開発"     className="font-extrabold text-[22px] leading-[1.15]" delayOffsetMs={0} />
              <LoopingScramble text="採用支援"       className="font-extrabold text-[22px] leading-[1.15]" delayOffsetMs={250} />
              <LoopingScramble text="コンサルティング"  className="font-extrabold text-[22px] leading-[1.15]" delayOffsetMs={500} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===== Desktop（縦書き修正版） ===== */
function DesktopHero({ items }: { items: { src: string; title?: string }[] }) {
  const [top1, top2, top3] = items;
  const middleLeft  = items[3];
  const middleRight = items[4];
  const bottomLeft  = items[5];
  const bottomMid   = items[6];
  const bottomRight = items[7];

  return (
    <div className="hidden md:block">
      <div className="mx-auto w-full max-w-7xl px-6 space-y-16">
        <div className="flex justify-center gap-0">
          {[top1, top2, top3].map((card, i) => (
            <Card key={`top-${i}`} {...card} delay={0.12 * i} />
          ))}
        </div>

        <div className="flex items-center justify-center md:justify-start gap-0 relative md:left-[120px]">
          <div className="relative w-[64px] shrink-0">
            <div
              className="absolute inset-0 flex flex-col items-start font-bold text-[#545454] text-[36px] leading-[1.2]"
              style={{ 
                writingMode: "vertical-rl", 
                WebkitWritingMode: "vertical-rl", 
                letterSpacing: "0.15em", 
                transform: "translateX(-45px) translateY(-120px)",
                whiteSpace: "nowrap"
              }}
            >
              <div className="mb-4">
                <LoopingScramble text="誰にとっても" delayOffsetMs={0} />
              </div>
              <div className="mb-4">
                <LoopingScramble text="良いサービスを" delayOffsetMs={300} />
              </div>
              <div className="mb-4">
                <LoopingScramble text="社会に価値を" delayOffsetMs={600} />
              </div>
              <div>
                <LoopingScramble text="仲間に幸せを" delayOffsetMs={900} />
              </div>
            </div>
          </div>

          <Card {...middleLeft} delay={0.15} />

          <div className="flex flex-col justify-center items-center w-[80vw] max-w-[560px] h-[300px]">
            <HeadlineBlock />
            <LoopingScramble text="TECHNOLOGY×PASSION" className="mt-4 font-mono font-semibold text-[16px] tracking-[0.08em]" delayOffsetMs={0} />
          </div>

          <Card {...middleRight} delay={0.18} />
        </div>

        <div className="flex items-start justify-between gap-0">
          <div className="flex gap-0">
            <Card {...bottomLeft} delay={0.1} />
            <Card {...bottomMid} delay={0.2} />
          </div>

          <div className="flex flex-col items-center justify-center w-[280px] h-[220px]">
            <LoopingScramble text="WEB開発"    className="font-extrabold text-[28px] leading-[1.2]" delayOffsetMs={0} />
            <LoopingScramble text="採用支援"      className="font-extrabold text-[28px] leading-[1.2]" delayOffsetMs={400} />
            <LoopingScramble text="コンサルティング" className="font-extrabold text-[28px] leading-[1.2]" delayOffsetMs={800} />
          </div>

          <Card {...bottomRight} delay={0.3} />
        </div>
      </div>
    </div>
  );
}

/* ===== 2行固定のモバイル見出し ===== */
function HeadlineTwoLines() {
  return (
    <div className="text-[#3f3f3f] leading-[1.02]">
      <LoopingScramble text="技術と情熱で" className="block font-bold text-[44px]" />
      <LoopingScramble text="未来を創る"   className="block font-bold text-[44px] mt-1" />
    </div>
  );
}

/* PC見出し（従来） */
function HeadlineBlock({ mobile = false }: { mobile?: boolean }) {
  if (mobile) {
    return (
      <p className="font-bold leading-[1.06] text-[#3f3f3f] text-center">
        <span className="text-[36px]">技術</span>
        <span className="text-[28px]">と</span>
        <span className="text-[36px]">情熱</span>
        <span className="text-[28px]">で</span>
        <br />
        <span className="text-[34px]">未来を創る</span>
      </p>
    );
  }
  return (
    <p className="font-bold leading-tight text-center md:text-left text-[#545454]">
      <span className="text-[48px] md:text-[80px]">技術</span>
      <span className="text-[40px] md:text-[60px]">と</span>
      <span className="text-[48px] md:text-[80px]">情熱</span>
      <span className="text-[40px] md:text-[60px]">で</span>
      <br />
      <span className="text-[44px] md:text-[70px]">未来を創る</span>
    </p>
  );
}

/* ===== スクランブル共通 ===== */
function LoopingScramble({
  text,
  className,
  minIntervalMs = 1600,
  maxIntervalMs = 4200,
  holdMs = 1000,
  delayOffsetMs = 0,
}: {
  text: string;
  className?: string;
  minIntervalMs?: number;
  maxIntervalMs?: number;
  holdMs?: number;
  delayOffsetMs?: number;
}) {
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    let alive = true;
    let waitId: ReturnType<typeof setTimeout> | null = null;
    let holdId: ReturnType<typeof setTimeout> | null = null;

    const rand = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const fireOnce = () => {
      if (!alive) return;
      setTrigger(true);
      if (holdId) clearTimeout(holdId);
      holdId = setTimeout(() => {
        if (!alive) return;
        setTrigger(false);
        scheduleNext();
      }, holdMs);
    };

    const scheduleNext = () => {
      if (!alive) return;
      const wait = rand(minIntervalMs, maxIntervalMs);
      waitId = setTimeout(fireOnce, wait);
    };

    const kickoff = setTimeout(fireOnce, Math.max(0, delayOffsetMs));

    return () => {
      alive = false;
      clearTimeout(kickoff);
      if (waitId) clearTimeout(waitId);
      if (holdId) clearTimeout(holdId);
    };
  }, [minIntervalMs, maxIntervalMs, holdMs, delayOffsetMs]);

  return (
    <TextScramble
      as="span"
      duration={1}
      speed={0.03}
      trigger={trigger}
      className={`text-[#545454] ${className ?? ""}`}
    >
      {text}
    </TextScramble>
  );
}

/* ===== カード ===== */
function Card({
  src,
  title,
  delay = 0,
  mobileWidthClass = "w-[92vw]",
  aspectClass = "aspect-[4/3]",
  titleSizeClass = "text-[13px]",
}: {
  src: string;
  title?: string;
  delay?: number;
  mobileWidthClass?: string;
  aspectClass?: string;
  titleSizeClass?: string;
}) {
  return (
    <div className={`${mobileWidthClass} sm:w-[44vw] md:w-[320px] text-center`}>
      <div className={`relative ${aspectClass} w-full`}>
        <Image
          src={src}
          alt={title ?? ""}
          fill
          className="object-cover rounded-none shadow-none"
          sizes="(max-width: 768px) 44vw, (max-width: 1024px) 44vw, 320px"
        />
      </div>

      {title ? (
        <LoopingScramble
          text={title}
          className={`mt-2 md:mt-4 ${titleSizeClass} md:text-lg font-bold`}
          delayOffsetMs={Math.max(0, Math.round(delay * 1000))}
        />
      ) : null}
    </div>
  );
}