// components/lp/Flow.tsx
"use client";

import Image from "next/image";

const STEPS = [
  {
    id: "01",
    label: "まずは相談",
    title: "LINEで「就活の不安」を相談。",
    description:
      "自己分析や志望業界が未定でもOK。今の状況と不安をヒアリングし、ざっくりとした方向性を一緒に整理します。",
    color: "bg-[#F37368]",
    icon: "/images/lp/flow/step01.png",
  },
  {
    id: "02",
    label: "企業を提案",
    title: "希望や性格に合う企業をご提案。",
    description:
      "あなたの希望や価値観・性格に合った“リアルな求人”をピックアップ。押し売りではなく、候補の一つとしてご紹介します。",
    color: "bg-[#0D294D]",
    icon: "/images/lp/flow/step02.png",
  },
  {
    id: "03",
    label: "予定を立てる",
    title: "エントリー・面接の日程を整理。",
    description:
      "選考スケジュールをカレンダーで可視化し、個別のToDoとあわせて逆算スケジュールを作成。やることを明確にします。",
    color: "bg-[#CF3F75]",
    icon: "/images/lp/flow/step03.png",
  },
  {
    id: "04",
    label: "面接対策",
    title: "本番を想定した面接トレーニング。",
    description:
      "実際の質問想定、逆質問の準備、話し方の改善まで丁寧に練習。オンライン面接も想定してロールプレイングを行います。",
    color: "bg-[#0C9DB4]",
    icon: "/images/lp/flow/step04.png",
  },
  {
    id: "05",
    label: "内定獲得 & 継続サポート",
    title: "内定後継続支援",
    description:
      "内定後の不安や入社前準備、将来のキャリア相談も継続してサポート。住まいなどのライフ面も相談OKです。",
    color: "bg-[#0C8F5B]",
    icon: "/images/lp/flow/step05.png",
  },
];

export default function FlowSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="mb-12">
          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] text-slate-500 mb-2">
            SUPPORT FLOW
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            サポートのプロセス
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600">
            初回相談から内定後のフォローまで、あなたの就活を一気通貫でサポートします。
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-[8%] right-[8%] top-24 border-t border-dashed border-slate-300 z-0" />

          <div className="grid gap-10 md:gap-8 md:grid-cols-5">
            {STEPS.map((step) => (
              <div key={step.id} className="flex flex-col items-center">
                <div className="relative mb-10 flex flex-col items-center z-10">
                  <span className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-1">
                    {step.id}
                  </span>

                  <div className="w-14 h-1.5 rounded-full bg-slate-200 mb-3 shadow-sm" />

                  <div className="relative flex flex-col items-center">
                    <div className={`w-24 h-12 rounded-t-full ${step.color}`} />

                    {/* ★ ここだけ 2px だけ上に修正 ★ */}
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[10px] w-16 h-16 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center overflow-hidden">
                      <Image
                        src={step.icon}
                        width={48}
                        height={48}
                        alt={`step-${step.id}`}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="hidden md:block mt-10 w-3 h-3 bg-slate-400 rounded-full" />
                </div>

                <div className="w-full max-w-xs md:max-w-none mx-auto rounded-2xl bg-white shadow-md border border-slate-100 px-5 py-6 min-h-[260px] flex flex-col">
                  <p className="text-xs font-semibold tracking-[0.15em] text-slate-500 mb-1">
                    STEP {step.id}
                  </p>

                  <h3 className="text-sm md:text-base font-semibold text-slate-900 mb-2">
                    {step.label}
                  </h3>

                  <p className="text-xs md:text-sm font-medium text-slate-800 mb-1">
                    {step.title}
                  </p>

                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed flex-1">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
