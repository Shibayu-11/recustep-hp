// app/about/page.tsx

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="w-full bg-white">
      {/* ==== VISION / 理念セクション ==== */}
      <section className="w-full bg-white py-24">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="grid items-start gap-12 md:grid-cols-2">
            {/* 左：VISION テキスト */}
            <div className="space-y-6">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-400">
                VISION — リクステップが見据える未来
              </p>

              {/* ★ ここを2行固定に変更 */}
              <h2 className="text-[13px] md:text-[14px] font-semibold leading-relaxed text-slate-600">
                <span className="block">
                  テクノロジー×実行力で、
                </span>
                <span className="block whitespace-nowrap">
                  日本の成長をもう一度、加速させる。
                </span>
              </h2>

              <div className="space-y-4 text-[13px] md:text-[14px] leading-relaxed text-slate-600">
                <p>
                  リクステップは、
                  <span className="font-semibold">
                    IT・人材・デザイン・AIシステム開発を横断する「実行組織」
                  </span>
                  です。企業や社会が抱える課題の多くは、努力不足ではなく
                  <span className="font-semibold">
                    「仕組みが時代に合っていないこと」
                  </span>
                  によって生まれています。
                </p>

                <p>
                  人口減少・人手不足・情報設計の遅れ・業務非効率——
                  これらは、本来であれば
                  <span className="font-semibold">
                    正しい構造が整えば解決できる領域
                  </span>
                  です。
                </p>

                <p>
                  私たちは、
                  <span className="font-semibold">
                    テクノロジーと人間力を掛け合わせ、成長を生む「仕組み」をつくる
                  </span>
                  ことで、日本に再び「成果の伸びる構造」を取り戻します。
                </p>

                <div>
                  <p className="text-[13px] md:text-[14px] text-slate-600">
                    日本は本来もっと成長できる国です。その鍵は
                    <span className="font-semibold">「根性」ではなく「構造」</span>
                    にあります。リクステップは、
                    <span className="font-semibold">
                      人と企業が最大限の力を発揮できる仕組み
                    </span>
                    をつくり、日本全体の成長をもう一度加速させます。
                  </p>
                </div>
              </div>
            </div>

            {/* 右：VISION 画像 */}
            <div>
              <div
                className="relative w-full aspect-[3/2] overflow-hidden"
                style={{
                  clipPath:
                    "polygon(8% 0, 100% 0, 100% 92%, 92% 100%, 0 100%, 0 8%)",
                }}
              >
                <Image
                  src="/images/vision-main.jpg"
                  alt="Vision Image 1"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* VALUE セクション（画像左・テキスト右） */}
          <div className="mt-12 md:mt-16 grid items-start gap-12 md:grid-cols-2">
            {/* 左：VALUE 画像 */}
            <div>
              <div
                className="relative w-full aspect-[3/2] overflow-hidden"
                style={{
                  clipPath:
                    "polygon(8% 0, 100% 0, 100% 92%, 92% 100%, 0 100%, 0 8%)",
                }}
              >
                <Image
                  src="/images/vision-sub.jpg"
                  alt="Value Image"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* 右：VALUE テキスト */}
            <div className="space-y-3 text-[13px] md:text-[14px] leading-relaxed text-slate-600">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-400">
                VALUE — リクステップが提供する価値
              </p>

              <p className="font-semibold text-[13px] md:text-[14px]">
                私たちが提供するのは制作物でも代行でもなく、
                「成果が出る状態を生む“構造そのもの”」です。
              </p>

              <ul className="mt-2 space-y-1.5 text-[13px] md:text-[14px] text-slate-600">
                <li>・HP/LP制作で企業の魅力を正しく言語化し、伝わる形にする</li>
                <li>・採用構造の再設計で、組織成長と個人成長を一致させる</li>
                <li>・業務と判断を自動化し、生産性を劇的に引き上げる</li>
                <li>・AIとデザインで、中小企業にも戦える「構造」を提供する</li>
              </ul>

              <p className="text-[13px] md:text-[14px] text-slate-600">
                これらは単発の施策ではなく、現場に根づく「仕組み」として設計します。
                経営と現場の両視点から再現性を高め、成果が続く状態をつくることが私たちの価値です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==== CEO MESSAGE ==== */}
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
          <p className="text-[11px] tracking-[0.18em] font-semibold text-[#D46A3A] mb-3">
            CEO MESSAGE
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 leading-tight">
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

          <div className="relative text-slate-600 leading-relaxed text-[13px] md:text-[14px] space-y-5">
            <p>
              リクステップは、テクノロジーと人間力を軸に、
              <span className="font-semibold">
                “構造をつくり、社会を前へ進める会社”
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
              <span className="font-semibold">“再現性のある成長構造”</span>
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
    </main>
  );
}
