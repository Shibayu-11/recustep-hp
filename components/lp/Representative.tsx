// components/lp/Representative.tsx
"use client";

import Image from "next/image";
import "@/styles/representative-mask.css";

export default function RepresentativeSection() {
  return (
    <section className="relative w-full bg-white py-20 md:py-32 overflow-hidden">

      {/* === 大和財託風：右側に大きな薄いグレー背景 === */}
      <div
        className="
          absolute 
          top-10
          right-0
          w-[85%]
          md:w-[65%]
          h-[95%]
          bg-[#f3f3f3]
          clip-diagonal-bg
          pointer-events-none
        "
      />

      {/* ===== 見出し ===== */}
      <div className="relative text-center mb-12 md:mb-20 px-6">
        <p className="text-[13px] tracking-[0.2em] font-semibold text-[#D46A3A] mb-3">
          CEO MESSAGE
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-800 leading-tight">
          全ての挑戦者に希望を
        </h2>
      </div>

      {/* ===== 本文 ===== */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 md:gap-16 items-start">

        {/* 左：画像（角カット） */}
        <div className="relative w-full representative-mask overflow-hidden shadow-xl max-w-md mx-auto">
          <div className="relative w-full aspect-[3/4]">
            <Image
              src="/images/lp/ceo.png"
              alt="株式会社リクステップ 代表 柴悠介"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 400px, 80vw"
            />
          </div>
        </div>

        {/* 右：文章（増量版） */}
        <div className="relative text-slate-700 leading-relaxed text-[15px] md:text-base space-y-5">
          <p>
            就活には「正解」や「王道パターン」は存在しません。
            誰かがつくった模範解答に合わせる生き方ではなく、
            あなた自身の価値観や強みを軸にキャリアを組み立てていく時代になっています。
          </p>

          <p>
            私たちリクステップが大切にしているのは、
            <span className="font-semibold">
              「あなたがどんな人生を歩みたいのか」
            </span>
            を起点にすることです。
            夢や理想、働き方のイメージ、いま抱えている不安——
            そのすべてを丁寧に聞くところから、
            あなたの就活は本当の意味でスタートします。
          </p>

          <p>
            そして、ただ励ますだけでも、ただ企業を紹介するだけでもありません。
            <span className="font-semibold">
              未来から逆算した“逆算型キャリア戦略”
            </span>
            を一緒につくり、必要な準備や対策を一つずつ整えていきます。
            書類添削・面接対策・企業分析などの全てを、
            あなた専用の形にカスタマイズしてサポートします。
          </p>

          <p>
            就活を「孤独な戦い」にしてほしくありません。
            誰かと一緒に悩み、一緒に考え、一緒に前へ進むことで、
            あなたの選択肢は広がり、可能性は大きく伸びていくからです。
          </p>

          <p>
            挑戦するあなたが、
            <span className="font-semibold">“自分らしく生きる未来”</span>
            をつかめるように。
            そのための一歩を、私たちが全力で支えます。
          </p>

          <div className="pt-4">
            <p className="font-semibold text-slate-900">
              株式会社リクステップ
              <br />
              代表取締役　柴 悠介
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
