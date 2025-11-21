// components/lp/Hero.tsx
"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { TextScramble } from "@/components/ui/text-scramble";

/** /public/images/hero-job/* を配置（.jpg推奨） */
const im = (name: string) => `/images/hero-job/${name}.jpg`;

type Item = { src: string; title?: string };

export default function Hero({
  items = [
    { src: im("spi"),       title: "SPI対策" },
    { src: im("es"),        title: "ES作成" },
    { src: im("resume"),    title: "履歴書作成" },
    { src: im("interview"), title: "面接対策" },
    { src: im("offer"),     title: "企業提案" },
    { src: im("strategy"),  title: "就活戦略立案" },
    { src: im("consult"),   title: "就活コンサル" },
    { src: im("manage"),    title: "進捗管理" },
  ],
  lineUrl = "https://lin.ee/your-line-id",
  contactUrl = "/contact",
}: {
  items?: Item[];
  lineUrl?: string;
  contactUrl?: string;
}) {
  const list = useMemo(() => items, [items]);
  return (
    <section
  id="hero"
  className="relative w-full bg-white pt-[72px] md:pt-[100px] pb-12 md:pb-16 overflow-hidden"
>

      <MobileHero items={list} lineUrl={lineUrl} contactUrl={contactUrl} />
      <DesktopHero items={list} contactUrl={contactUrl} />
    </section>
  );
}

/* ====== Mobile（完全版） ====== */
function MobileHero({
    items,
    lineUrl,        // 使わないが型は維持
    contactUrl,
  }: {
    items: Item[];
    lineUrl: string;
    contactUrl: string;
  }) {
    const W = "w-[44vw]";
    const ASPECT = "aspect-[3/2]";
    const TITLE = "h-6";
  
    const row1 = [items[0], items[1], items[4]];
    const row2Peek = items[2];
    const row3 = [items[5], items[3]];
    const row4 = items[6];
  
    return (
      <div className="block md:hidden w-full space-y-3">
        {/* 1列目 */}
        <Row>
          <Ghost w={W} a={ASPECT} t={TITLE} />
          <div className="absolute inset-0 flex w-[132vw]">
            {row1.map((c, i) => (
              <div key={`r1-${i}`} className={W}>
                <Card
                  {...c}
                  mobileWidthClass="w-full"
                  aspectClass={ASPECT}
                  titleSizeClass="text-[12px]"
                  sizes="(max-width:768px) 44vw"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </Row>
  
        {/* 2列目：画像を左寄せ（-8vw） */}
        <Row>
          <Ghost w={W} a={ASPECT} t={TITLE} />
          <div className="absolute left-0 right-[30vw] top-1/2 -translate-y-1/2 px-4 z-20">
            <HeadlineTwoLines />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-[-8vw] z-10 pointer-events-none select-none">
            <div className={W}>
              <Card
                {...row2Peek}
                mobileWidthClass="w-full"
                aspectClass={ASPECT}
                titleSizeClass="text-[12px]"
                sizes="(max-width:768px) 44vw"
              />
            </div>
          </div>
        </Row>
  
        {/* 3列目：テキスト「逆算 × 可視化」＋ 画像を少し左へ */}
        <Row>
          <Ghost w={W} a={ASPECT} t={TITLE} />
          <div
            className="absolute left-[1vw] top-1/2 -translate-y-1/2 font-bold text-[#565656] z-20 vertical-rl"
            style={{ letterSpacing: ".14em", lineHeight: "0.9", fontSize: "22px" }}
          >
            <LoopingScramble text="逆算 × 可視化" />
          </div>
          <div className="absolute top-0 right-[-5vw] flex gap-0 z-10">
            {row3.map((c, i) => (
              <div key={`r3-${i}`} className={W}>
                <Card
                  {...c}
                  mobileWidthClass="w-full"
                  aspectClass={ASPECT}
                  titleSizeClass="text-[12px]"
                  sizes="(max-width:768px) 44vw"
                />
              </div>
            ))}
          </div>
        </Row>
  
        {/* 4列目：ボタンは「無料相談はこちら」のみ */}
        <Row>
          <Ghost w={W} a={ASPECT} t={TITLE} />
          <div className="absolute inset-0 flex items-center justify-between">
            <div className={W}>
              <Card
                {...row4}
                mobileWidthClass="w-full"
                aspectClass={ASPECT}
                titleSizeClass="text-[12px]"
                sizes="(max-width:768px) 44vw"
              />
            </div>
            <div className="w-[56vw] h-full flex items-center justify-center px-[2vw]">
              <div className="flex flex-col items-center">
                <LoopingScramble text="SPI対策"   className="font-extrabold text-[22px]" />
                <LoopingScramble text="ES/履歴書" className="font-extrabold text-[22px]" />
                <LoopingScramble text="面接対策"   className="font-extrabold text-[22px]" />
                <a
                  href={contactUrl}
                  className="mt-4 inline-block rounded-xl bg-slate-900 text-white px-4 py-2 text-[12px]"
                >
                  無料相談はこちら
                </a>
              </div>
            </div>
          </div>
        </Row>
      </div>
    );
  }
  

/* ====== Desktop ====== */
function DesktopHero({
  items,
  contactUrl,
}: {
  items: Item[];
  contactUrl: string;
}) {
  const [top1, top2, top3] = items;
  const middleLeft = items[3], middleRight = items[4];
  const bottomLeft = items[5], bottomMid = items[6], bottomRight = items[7];

  return (
    <div className="hidden md:block">
      <div className="mx-auto w-full max-w-7xl px-6 space-y-12">
        {/* 上段 */}
        <div className="flex justify-center gap-0">
          {[top1, top2, top3].map((card, i) => (
            <Card
              key={`top-${i}`}
              {...card}
              delay={0.12 * i}
              priority={i === 0}
              sizes="(min-width:768px) 320px"
            />
          ))}
        </div>

        {/* 中段 */}
        <div className="flex items-center justify-center md:justify-start gap-0 relative md:left-[120px]">
          {/* 左：縦書き */}
          <div className="relative w-[64px] shrink-0">
            <div
              className="absolute inset-0 flex flex-col items-start font-bold text-[#545454] text-[36px] leading-[1.2] vertical-rl"
              style={{ letterSpacing: ".15em", transform: "translateX(-45px) translateY(-120px)", whiteSpace: "nowrap" }}
            >
              <div className="mb-4"><LoopingScramble text="誰にとっても" /></div>
              <div className="mb-4"><LoopingScramble text="良い選考準備を" /></div>
              <div className="mb-4"><LoopingScramble text="全ての挑戦者に" /></div>
              <div><LoopingScramble text="希望を" /></div>
            </div>
          </div>

          {/* 左カード */}
          <Card {...middleLeft} delay={0.15} sizes="(min-width:768px) 320px" />

          {/* 中央：完全中央配置 */}
          <div className="relative flex flex-col items-center justify-center w-[80vw] max-w-[560px] h-[300px] text-center">
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-5">
              <p className="font-bold text-[#545454] text-[64px] md:text-[88px] leading-tight">
                逆算✖️可視化
              </p>
              <a
                href={contactUrl}
                className="inline-block rounded-xl bg-slate-900 text-white px-6 py-3 text-[16px] font-semibold shadow hover:bg-slate-800 transition"
              >
                無料相談はこちら
              </a>
              <p className="font-mono font-semibold text-[14px] tracking-[0.08em] text-slate-600">
                TECHNOLOGY × PASSION for JOB HUNTINZ
              </p>
            </div>
          </div>

          {/* 右カード */}
          <Card {...middleRight} delay={0.18} sizes="(min-width:768px) 320px" />
        </div>

        {/* 下段 */}
        <div className="flex items-start justify-between gap-0">
          <div className="flex gap-0">
            <Card {...bottomLeft} delay={0.1} sizes="(min-width:768px) 320px" />
            <Card {...bottomMid} delay={0.2} sizes="(min-width:768px) 320px" />
          </div>

          <div className="flex flex-col items-center justify-center w-[280px] h-[220px]">
            <LoopingScramble text="SPI / ES / 面接" className="font-extrabold text-[26px] leading-[1.2]" />
            <LoopingScramble text="企業提案・戦略立案" className="font-extrabold text-[26px] leading-[1.2]" />
            <LoopingScramble text="就活コンサル" className="font-extrabold text-[26px] leading-[1.2]" />
          </div>

          <Card {...bottomRight} delay={0.3} sizes="(min-width:768px) 320px" />
        </div>
      </div>
    </div>
  );
}

/* ===== 小物 ===== */
const Row = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-full overflow-hidden">{children}</div>
);
const Ghost = ({ w, a, t }: { w: string; a: string; t: string }) => (
  <>
    <div aria-hidden className={`invisible ${w} ${a}`} />
    <div aria-hidden className={`invisible ${t}`} />
  </>
);

function HeadlineTwoLines() {
  return (
    <div className="text-[#3f3f3f] leading-[1.02]">
      <LoopingScramble text="就活を設計し" className="block font-bold text-[40px]" />
      <LoopingScramble text="最短で内定へ" className="block font-bold text-[40px] mt-1" />
    </div>
  );
}

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
    let alive = true, waitId: any = null, holdId: any = null;
    const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
    const fire = () => {
      if (!alive) return;
      setTrigger(true);
      holdId = setTimeout(() => {
        if (!alive) return;
        setTrigger(false);
        schedule();
      }, holdMs);
    };
    const schedule = () => {
      if (!alive) return;
      waitId = setTimeout(fire, rand(minIntervalMs, maxIntervalMs));
    };
    const kickoff = setTimeout(fire, Math.max(0, delayOffsetMs));
    return () => {
      alive = false;
      clearTimeout(kickoff);
      if (waitId) clearTimeout(waitId);
      if (holdId) clearTimeout(holdId);
    };
  }, [minIntervalMs, maxIntervalMs, holdMs, delayOffsetMs]);
  return (
    <TextScramble as="span" duration={1} speed={0.03} trigger={trigger} className={`text-[#545454] ${className ?? ""}`}>
      {text}
    </TextScramble>
  );
}

function Card({
  src,
  title,
  delay = 0,
  priority = false,
  mobileWidthClass = "w-[92vw]",
  aspectClass = "aspect-[4/3]",
  titleSizeClass = "text-[13px]",
  sizes = "(max-width:768px) 44vw, (max-width:1024px) 44vw, 320px",
}: {
  src: string;
  title?: string;
  delay?: number;
  priority?: boolean;
  mobileWidthClass?: string;
  aspectClass?: string;
  titleSizeClass?: string;
  sizes?: string;
}) {
  return (
    <div className={`${mobileWidthClass} sm:w-[44vw] md:w-[320px] text-center`}>
      <div className={`relative ${aspectClass} w-full`}>
        <Image src={src} alt={title ?? ""} fill priority={priority} className="object-cover" sizes={sizes} />
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
