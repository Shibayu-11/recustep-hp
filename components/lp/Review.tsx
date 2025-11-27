// components/lp/Review.tsx
"use client";

import Image from "next/image";

type Voice = {
  name: string;
  school: string;
  grade: string;
  job: string;
  text: string;
};

const voices: Voice[] = [
  {
    name: "白上 さん",
    school: "大阪商業大学",
    grade: "2026年卒",
    job: "第一志望 営業職 内定",
    text: "自分自身で就職活動をしている時には何をやっていいかわからないことが多かったが、担当者が企業分析から面接のコツ、選考の進め方まで丁寧に教えてくれたので非常に進めやすかったです。企業紹介も押し付けがなく、こちらの希望に合わせて優しく提案していただき、前向きに就活を続けられました。",
  },
  {
    name: "中野 さん",
    school: "京都大学",
    grade: "2026年卒",
    job: "国内最大手 IT企業 エンジニア職 内定",
    text: "ESを一緒に分解してもらい、自分でも気づけていなかった強みを言語化できました。エンジニア就活に必要な資格選び、学習計画、技術試験の対策まで伴走していただき、本番の面接でも事前に整理した内容を落ち着いて話せました。",
  },
  {
    name: "植田 さん",
    school: "大阪経済大学",
    grade: "2026年卒",
    job: "第一志望メーカー 総合職 内定",
    text: "就活の進め方が分からず不安でしたが、週1で進捗を整理してもらえたので『次に何をすべきか』が常に明確でした。不安が解消され、腰を据えて準備できました。",
  },
  {
    name: "北田 さん",
    school: "摂南大学",
    grade: "2026年卒",
    job: "不動産ベンチャー 営業職 内定",
    text: "『逆算スケジュール』を一緒に作成したことで選考の計画が立てやすく、インターンと授業・サークルの両立がスムーズにできました。ES作成や面接対策を効率よく行えるように支援してもらったのが、内定につながったと思います。",
  },
];

export function ReviewSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* ===== 上段：PCは横並び / SPは縦並び ===== */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:gap-10 lg:gap-16">
            {/* 左：画像 */}
            <div className="relative w-full md:w-[60%] aspect-[16/9] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/lp/review-main.jpg"
                alt="就活サポートの面談の様子"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
            </div>

            {/* 右：水色カード（PCでは少し上にズラす） */}
            <div className="mt-8 md:-mt-10 w-full md:w-[40%]">
              <div className="rounded-3xl bg-[#E5EEF7] px-6 py-8 md:px-10 md:py-12 shadow-md">
                <p className="text-xs font-semibold tracking-[0.3em] text-sky-900 mb-3">
                  REVIEW
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-sky-900 leading-snug mb-4">
                  学生の正直 Q&amp;A
                </h2>
                <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-4">
                  「どんなサポートを受けられるのか」「他のエージェントと何が違うのか」。実際にサポートを利用した学生の声をピックアップして紹介します。
                </p>
                <button className="mt-2 text-sm font-medium text-sky-900 underline-offset-4 hover:underline">
                  Other Students &gt;
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ===== 下段：横スクロールのレビューカード ===== */}
        <div className="mt-14 md:mt-16">
          <div className="mb-4 md:mb-6 flex items-baseline justify-between">
            <p className="text-xs font-semibold tracking-[0.3em] text-slate-500">
              STUDENTS VOICE
            </p>
            <p className="hidden md:block text-xs text-slate-400">
              スワイプでレビューをチェック
            </p>
          </div>

          <div className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 md:pb-2">
            {voices.map((v, idx) => (
              <article
                key={`${v.name}-${idx}`}
                className="snap-center flex-shrink-0 min-w-[260px] max-w-[280px] md:min-w-[280px] md:max-w-[320px] rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm"
              >
                <div className="text-xs text-slate-500 mb-1">
                  {v.school}
                  <span className="ml-1">{v.grade}</span>
                </div>
                <h3 className="text-sm font-semibold text-slate-900 mb-2">
                  {v.name}
                </h3>
                <p className="text-xs text-sky-800 font-medium mb-3">{v.job}</p>
                <p className="text-xs leading-relaxed text-slate-700">{v.text}</p>
              </article>
            ))}
          </div>

          <p className="mt-1 md:hidden text-[11px] text-slate-400">
            横にスワイプしてレビューを見られます
          </p>
        </div>
      </div>
    </section>
  );
}

export default ReviewSection;
