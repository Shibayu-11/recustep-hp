// components/sections/Vision.tsx
"use client";

import Image from "next/image";

export default function Vision() {
  return (
    <section className="w-full bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 md:grid-cols-2">
          {/* 左：テキスト */}
          <div className="space-y-6">
            <p className="text-xs tracking-[0.2em] text-slate-500">
              VISION
            </p>

            <div>
              <h2 className="text-[26px] md:text-[30px] lg:text-[32px] font-bold leading-snug text-slate-900">
                テクノロジー×実行力で、<br />
                <span className="inline-block whitespace-normal md:whitespace-nowrap">
                  日本の成長をもう一度、加速させる。
                </span>
              </h2>
            </div>

            <p className="text-sm md:text-[15px] leading-relaxed text-slate-700">
              リクステップは、
              <span className="font-semibold">
                IT・人材・AIシステム開発という領域を横断しながら、
                「仕組み」で日本の成長を押し上げる会社
              </span>
              です。人口減少・人手不足・中小企業の非効率――
              その多くは、才能が十分に活かされていないことに起因しています。
            </p>

            <p className="text-sm md:text-[15px] leading-relaxed text-slate-700">
              私たちは、
              <span className="font-semibold">
                テクノロジーと仕組み化によって、人と企業の価値を何倍にも引き上げる。
              </span>
              これを使命としています。
            </p>

            <div className="pt-4 border-t border-slate-200 space-y-3">
              <p className="text-xs font-semibold tracking-[0.15em] text-slate-500">
                MISSION — 何を実現するのか
              </p>

              <p className="text-sm md:text-[15px] font-semibold">
                「人と組織の成長を指数関数的に高める仕組み」をつくる。
              </p>

              <ul className="mt-2 space-y-1.5 text-xs md:text-[13px] text-slate-700">
                <li>・HP/LP制作を通じて、企業の魅力を引き出す</li>
                <li>・人材採用・育成のDX</li>
                <li>・中小企業の業務自動化・効率化</li>
                <li>・企業価値を社会に広げる仕組み</li>
                <li>・AI時代に適応したインフラ構築</li>
              </ul>
            </div>
          </div>

          {/* 右：画像 */}
          <div className="relative">
            <div
            className="relative w-full aspect-[3/2] md:aspect-[3/2] overflow-hidden"
            style={{
                clipPath:
                "polygon(8% 0, 100% 0, 100% 92%, 92% 100%, 0 100%, 0 8%)",
            }}
            >
            <Image
            src="/images/vision-main.jpg"
            alt="Vision Image"
            fill
            className="object-cover"
            priority
            />
            </div>
        　</div>
        </div>
      </div>
    </section>
  );
}
