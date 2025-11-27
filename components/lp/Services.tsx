// components/lp/Services.tsx
"use client";

import Image from "next/image";

type Strength = {
  id: string;
  title: string;
  body: string;
  image: string;
  align: "left" | "right";
};

const STRENGTHS: Strength[] = [
  {
    id: "01",
    title: "就活を“丸投げできる”体制",
    body:
      "「就活って、結局は自分でやらなきゃでしょ？」そう思っている人は多いです。ですがリクステップでは、自己分析・企業選び・ES添削・面接練習・内定後の相談まで、ぜんぶひとまとめでサポートします。ESだけ別の人、面接対策は別のところ…というバラバラ支援ではなく、1人の担当が最初から最後まで並走するから、途中で迷わず前に進めます。",
    image: "/images/lp/strengths/strength01.jpg",
    align: "left",
  },
  {
    id: "02",
    title: "見える化 × 実践型サポート",
    body:
      "リクステップでは、志望先ごとの通過率のスコアリングや、志望企業に刺さるESテンプレの提供など「戦略を立てて就活を進める」仕組みが整っています。感覚や運任せではなく、『何をすれば突破できるか』が明確になります。単発サポートではなく、合格するまで伴走するスタイルです。",
    image: "/images/lp/strengths/strength02.jpg",
    align: "right",
  },
  {
    id: "03",
    title: "圧倒的に“人に近い”支援",
    body:
      "相談はLINE一本で完結。「ES落ちた」「明日の面接が不安」などの緊急相談にも即レスします。Zoomだけでなく、大阪近郊なら対面支援も対応可能です。ただ情報を渡すだけでなく、“人対人”の就活支援だからこそ『不安が消える』『やるべきことが明確になる』と好評です。",
    image: "/images/lp/strengths/strength03.jpg",
    align: "left",
  },
  {
    id: "04",
    title: "就活後も“人生の伴走者”",
    body:
      "リクステップは『内定がゴール』ではありません。上京に伴う住まい探しや不動産の手配、保険手続きなど、社会人生活のスタートラインに必要な準備までサポートします。各分野の専門家・提携企業と連携し、就活支援からキャリアの第一歩までを丸ごと任せられる体制を整えています。これが、リクステップが他の就活サービスと大きく違う点です。",
    image: "/images/lp/strengths/strength04.jpg",
    align: "right",
  },
];

// ===================== 上部：SERVICE 説明ブロック =====================

function ServiceIntro() {
  return (
    <section className="relative w-full py-24 md:py-28 bg-white overflow-visible">
      {/* グレー六角形背景（テキスト＋画像の下に敷く） */}
      <div className="absolute inset-x-0 top-6 md:top-4 z-0 flex justify-center pointer-events-none">
        <div className="service-hex-bg" />
      </div>

      {/* コンテンツ本体 */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-start md:items-center gap-16 md:gap-24">
        {/* 左：テキスト */}
        <div className="w-full md:w-1/2">
          <p className="text-xs font-semibold tracking-[0.35em] text-slate-500 mb-4">
            SERVICE
          </p>

          {/* 必ず 2 行で改行（PC幅なら2行固定） */}
          <h2 className="text-2xl md:text-3xl font-bold leading-tight whitespace-pre-line break-keep text-slate-900">
            {"株式会社リクステップは\n最適なキャリアのご提案で人生をサポートします。"}
          </h2>

          <div className="mt-5 space-y-4 text-[15px] md:text-base leading-relaxed text-slate-700">
            <p>
              弊社は新卒の方を中心に就職活動を一貫してサポートしている企業です。
              ご希望に沿ったスケジュールを組み、面接対策からSPI試験の対策まで幅広く行います。
            </p>
            <p>
              リクステップは「就活を丸ごと任せられる」ことに特化した就活サポートサービスです。
              自己分析・企業選び・ES添削・面接練習・内定後の相談まで、
              就活に必要なプロセスをすべて1つにまとめてサポートします。
            </p>
            <p>
              また、専用アプリ「Recruit Step」で履歴書作成からES作成、資格勉強、SPI対策までサポート。
              あなたに最適な戦略を設計し、合格するまで伴走します。
            </p>
          </div>
        </div>

        {/* 右：スマホ画像（左上 & 右下だけ角落とし） */}
        <div className="w-full md:w-[48%] flex justify-center md:justify-end">
          <div className="service-image-wrapper w-[260px] h-[420px] md:w-[340px] md:h-[520px] lg:w-[380px] lg:h-[560px]">
            <div className="service-image-inner">
              <Image
                src="/images/lp/service-intro.png"
                alt="Recruit Step アプリ画面"
                fill
                sizes="(min-width: 1024px) 380px, (min-width: 768px) 340px, 260px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===================== 下部：STRENGTH セクション =====================

export default function ServicesSection() {
  return (
    <section className="w-full bg-white">
      {/* 1. SERVICE ブロック */}
      <ServiceIntro />

      {/* 2. STRENGTH */}
      <section className="w-full bg-white pb-16 md:pb-24 mt-10 md:mt-8">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="text-xs font-semibold tracking-[0.35em] text-slate-400">
            STRENGTH
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-900 md:text-3xl">
            リクステップが選ばれる4つの理由
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
            初回相談から内定後のフォローまで、就活を“丸ごと任せられる”体制を整えています。
            その特徴を4つの視点からご紹介します。
          </p>
        </div>

        <div className="mt-12 space-y-16 md:mt-16 md:space-y-20">
          {STRENGTHS.map((s) => (
            <div key={s.id} className="relative">
              <div className="mx-auto max-w-6xl px-4 md:px-6">
                <div
                  className={`flex ${
                    s.align === "right" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div className="relative h-[260px] w-full overflow-hidden rounded-3xl md:h-[360px] md:w-[86%] lg:h-[420px]">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(min-width: 1024px) 1100px, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div
                className={`relative -mt-10 md:-mt-16 mx-auto max-w-6xl px-4 md:px-6 flex ${
                  s.align === "right" ? "justify-end" : "justify-start"
                }`}
              >
                <article className="w-full max-w-xl rounded-3xl bg-white px-6 py-6 shadow-[0_18px_45px_rgba(15,23,42,0.16)] md:px-8 md:py-8">
                  <div className="flex items-start gap-6">
                    <div className="pt-1 text-slate-500">
                      <p className="text-[11px] font-semibold tracking-[0.25em]">
                        STRENGTH
                      </p>
                      <p className="mt-1 text-3xl font-bold text-slate-900">
                        {s.id}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-[15px]">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
