// components/sections/CEOMessage.tsx
"use client";

import Image from "next/image";

export default function CEOMessage() {
  return (
    <section className="relative w-full bg-white py-20 md:py-32 overflow-hidden">
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

      <div className="relative text-center mb-12 md:mb-20 px-6">
        <p className="text-[13px] tracking-[0.2em] font-semibold text-[#D46A3A] mb-3">
          CEO MESSAGE
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-800 leading-tight">
          テクノロジーと構造で社会を前へ
        </h2>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        <div className="relative w-full representative-mask overflow-hidden shadow-xl max-w-md mx-auto">
          <div className="relative w-full aspect-[3/4]">
            <Image
              src="/images/lp/ceo.png"
              alt="株式会社リクステップ 代表 柴悠介"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="relative text-slate-700 leading-relaxed text-[15px] md:text-base space-y-5">
          <p>
            リクステップは、テクノロジーと人間力を軸に、
            <span className="font-semibold">
              "構造をつくり、社会を前へ進める会社"
            </span>
            です。
          </p>
          <p>
            日本には、まだ十分に活かされていない可能性が数多くあります。
            採用、生産性、情報設計、教育、クリエイティブ、地域経済——
            それらはどれも
            <span className="font-semibold">
              「仕組みを変えれば成果が変わる」領域
            </span>
            です。
          </p>
          <p>
            私たちが提供するのは制作物でも代行でもなく、
            <span className="font-semibold">"再現性のある成長構造"</span>
            をつくることです。企業の核に入り込み、課題を言語化し、
            成長の土台を再設計します。
          </p>
          <p>
            AI・UX設計・採用戦略・業務効率化・ブランド構築・教育支援。
            リクステップの事業は多様ですが、根底にあるのはいつもひとつです。
          </p>
          <p className="font-semibold text-slate-900">
            「人と組織が、正しく努力すれば報われる社会をつくる。」
          </p>
          <p>
            私たちは企業の伴走者として、挑戦する人が挑戦できる環境を、
            挑戦する企業が伸び続ける構造を、これからもつくり続けます。
          </p>
          <p>日本の成長を、もう一度加速させるために。</p>

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
