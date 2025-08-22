"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { TextScramble } from "@/components/ui/text-scramble";

export default function Hero() {
  const items = [
    { src: "/images/hero/hp.png",       title: "Web Creative" },     // 0
    { src: "/images/hero/app.png",      title: "App Development" },  // 1
    { src: "/images/hero/system.png",   title: "System" },           // 2 ← 2列目見切れ
    { src: "/images/hero/artbloom.png", title: "ArtBloom" },         // 3
    { src: "/images/hero/marketing.png",title: "Marketing" },        // 4
    { src: "/images/hero/shokulabo.png",title: "食ラボ" },            // 5
    { src: "/images/hero/human.png",    title: "Human Resources" },  // 6 ← 4列目：人材
    { src: "/images/hero/consult.png",  title: "Consulting" },       // 7
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
  const W = "w-[44vw]";          // 1列目基準の1.3倍
  const ASPECT = "aspect-[3/2]"; // 比率固定
  const TITLE_SPACE = "h-6";     // タイトル分の高さを仮で揃える

  const row1 = [items[0], items[1], items[4]]; // 右：Marketing（見切れ）
  const row2Peek = items[2];                   // System（2列目・見切れ）
  const row3 = [items[5], items[3]];           // 食ラボ + ArtBloom
  const row4 = items[6];                       // 人材

  return (
    <div className="block md:hidden w-full space-y-3">
      {/* ===== 1列目：3枚・右見切れ ===== */}
      <div className="relative w-full overflow-hidden">
        {/* 高さ統一プレースホルダ */}
        <div aria-hidden className={`invisible ${W} ${ASPECT}`} />
        <div aria-hidden className={`invisible ${TITLE_SPACE}`} />
        {/* 実体（絶対配置で高さは上のプレースホルダが担保） */}
        <div className="absolute inset-0 flex w-[132vw] gap-0">
          {row1.map((c, i) => (
            <div key={`r1-${i}`} className={W}>
              <Card {...c} mobileWidthClass="w-full" aspectClass={ASPECT} titleSizeClass="text-[12px]" />
            </div>
          ))}
        </div>
      </div>

      {/* ===== 2列目：中央に見出し（2行固定）＋ 右カード（タイトルは下に・見切れOK） ===== */}
      <div className="relative w-full overflow-hidden">
        {/* 高さ統一 */}
        <div aria-hidden className={`invisible ${W} ${ASPECT}`} />
        <div aria-hidden className={`invisible ${TITLE_SPACE}`} />

        {/* 見出し：縦中央／右側にカード分の余白（30vw） */}
        <div className="absolute left-0 right-[30vw] top-1/2 -translate-y-1/2 px-4 z-20">
          <HeadlineTwoLines />
        </div>

        {/* 右カード：カードごと絶対配置（タイトルは下、見切れてOK） */}
        <div className="absolute top-1/2 -translate-y-1/2 right-[-26vw] z-10 pointer-events-none select-none">
          <div className={`${W}`}>
            <Card
              {...row2Peek}
              mobileWidthClass="w-full"
              aspectClass={ASPECT}
              titleSizeClass="text-[12px]"
            />
          </div>
        </div>
      </div>

      {/* ===== 3列目：右2枚（右端1/3見切れ）＋ “DREAM × BUILD” を少し右へ ===== */}
      <div className="relative w-full overflow-hidden">
        {/* 高さ統一 */}
        <div aria-hidden className={`invisible ${W} ${ASPECT}`} />
        <div aria-hidden className={`invisible ${TITLE_SPACE}`} />

        {/* DREAM × BUILD（左→少し右へ） */}
        <div
          className="absolute left-[6vw] top-1/2 -translate-y-1/2 font-bold text-[#565656] z-20"
          style={{
            writingMode: "vertical-rl",
            WebkitWritingMode: "vertical-rl",
            letterSpacing: "0.14em",
            lineHeight: "0.9",
            fontSize: "22px",
          }}
        >
          <LoopingScramble text="DREAM × BUILD" />
        </div>

        {/* 右：2枚（合計88vw）を右に寄せ、≈1/3見切れ（~15vw） */}
        <div className="absolute top-0 right-[-15vw] flex gap-0 z-10">
          {row3.map((c, i) => (
            <div key={`r3-${i}`} className={W}>
              <Card {...c} mobileWidthClass="w-full" aspectClass={ASPECT} titleSizeClass="text-[12px]" />
            </div>
          ))}
        </div>
      </div>

      {/* ===== 4列目：左 人材カード、右 英字3行 ===== */}
      <div className="relative w-full overflow-hidden">
        {/* 高さ統一 */}
        <div aria-hidden className={`invisible ${W} ${ASPECT}`} />
        <div aria-hidden className={`invisible ${TITLE_SPACE}`} />

        {/* 実体 */}
        <div className="absolute inset-0 flex items-center justify-between">
          <div className={W}>
            <Card {...row4} mobileWidthClass="w-full" aspectClass={ASPECT} titleSizeClass="text-[12px]" />
          </div>
          <div className="w-[56vw] h-full flex items-center justify-center px-[2vw]">
            <div className="flex flex-col items-center">
              <LoopingScramble text="SHAPE"     className="font-extrabold text-[22px] leading-[1.15]" delayOffsetMs={0} />
              <LoopingScramble text="OUR"       className="font-extrabold text-[22px] leading-[1.15]" delayOffsetMs={250} />
              <LoopingScramble text="TOMORROW"  className="font-extrabold text-[22px] leading-[1.15]" delayOffsetMs={500} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================
 * Desktop（変更なし）
 * ========================= */
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
        {/* 上段：横くっつけ */}
        <div className="flex justify-center gap-0">
          {[top1, top2, top3].map((card, i) => (
            <Card key={`top-${i}`} {...card} delay={0.12 * i} />
          ))}
        </div>

        {/* 中段：縦スクランブル + 左右カード + 中央見出し */}
        <div className="flex items-center justify-center md:justify-start gap-0 relative md:left-[120px]">
          <div className="relative w-[64px] shrink-0">
            <div
              className="absolute inset-0 flex flex-col items-start font-bold tracking-widest text-[#545454] text-[36px]"
              style={{
                writingMode: "vertical-rl",
                WebkitWritingMode: "vertical-rl",
                letterSpacing: "0.15em",
                lineHeight: "0.9",
                transform: "translateX(-45px) translateY(-120px)",
              }}
            >
              <LoopingScramble text="Dream × Build" delayOffsetMs={0} />
              <LoopingScramble text="Inspire"         delayOffsetMs={300} />
              <LoopingScramble text="Create Next"     delayOffsetMs={600} />
            </div>
          </div>

          <Card {...middleLeft} delay={0.15} />

          <div className="flex flex-col justify-center items-center w-[80vw] max-w-[560px] h-[300px]">
            <HeadlineBlock />
            <LoopingScramble
              text="CREATE THE FUTURE"
              className="mt-4 font-mono font-semibold text-[16px] tracking-[0.08em]"
              delayOffsetMs={0}
            />
          </div>

          <Card {...middleRight} delay={0.18} />
        </div>

        {/* 下段：左2枚 + 英語3行 + 右端カード */}
        <div className="flex items-start justify-between gap-0">
          <div className="flex gap-0">
            <Card {...bottomLeft} delay={0.1} />
            <Card {...bottomMid} delay={0.2} />
          </div>

          <div className="flex flex-col items中心 justify-center w-[280px] h-[220px]">
            <LoopingScramble text="SHAPE"    className="font-extrabold text-[28px] leading-[1.2]" delayOffsetMs={0} />
            <LoopingScramble text="OUR"      className="font-extrabold text-[28px] leading-[1.2]" delayOffsetMs={400} />
            <LoopingScramble text="TOMORROW" className="font-extrabold text-[28px] leading-[1.2]" delayOffsetMs={800} />
          </div>

          <Card {...bottomRight} delay={0.3} />
        </div>
      </div>
    </div>
  );
}

/* =========================
 * 2行固定のモバイル見出し
 * ========================= */
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
