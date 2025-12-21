// app/(wherever)/sections/Works.tsx
"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns";

/* ===== お客様の声データ ===== */
const testimonials = [
  [
    {
      text: "リクステップのHP制作サービスは期待以上でした。戦略設計から実装まで一貫してサポートしていただき、問い合わせ数が3倍に増加しました。",
      name: "田中 健太",
      role: "製造業A社 代表取締役",
    },
    {
      text: "採用代行サービスのおかげで、半年で20名のエンジニアを採用できました。面接の質が高く、入社後の定着率も95%と非常に満足しています。",
      name: "佐藤 美咲",
      role: "IT企業B社 人事部長",
    },
    {
      text: "業務システムの開発により、受発注処理時間が80%削減されました。経営判断のスピードも格段に上がり、売上向上に直結しています。",
      name: "鈴木 大輔",
      role: "小売業C社 取締役",
    },
  ],
  [
    {
      text: "アプリ開発を依頼しましたが、UI/UXデザインから実装まで丁寧に対応していただきました。ユーザーからの評価も高く、ダウンロード数が順調に伸びています。",
      name: "松本 奈々",
      role: "フィットネス事業D社 CEO",
    },
    {
      text: "面接代行サービスは本当に助かりました。専門性の高い人材の見極めが的確で、採用精度が大幅に向上しました。",
      name: "山田 浩二",
      role: "コンサル会社E社 CEO",
    },
    {
      text: "リクステのシステム開発は、業務フローを熟知した上での提案でした。現場の声を反映した使いやすいシステムが完成し、業務効率が劇的に改善しました。",
      name: "伊藤 由美",
      role: "物流会社G社 業務部長",
    },
  ],
  [
    {
      text: "採用戦略から実行まで一貫してサポートしていただき、目標人数を上回る採用ができました。リクステップとの出会いが会社の成長につながっています。",
      name: "中村 誠",
      role: "不動産会社H社 代表",
    },
    {
      text: "Web制作だけでなく、SEO対策やマーケティング戦略まで提案していただき、オンラインからの売上が5倍になりました。",
      name: "小林 愛子",
      role: "EC事業I社 取締役",
    },
    {
      text: "システム開発の品質が非常に高く、運用後のサポートも充実しています。おかげで安心して事業に集中できています。",
      name: "渡辺 拓也",
      role: "金融サービスJ社 CTO",
    },
  ],
];

export default function Works() {
  return (
    <section id="works" className="w-full bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ヘッダー（Vision/Serviceと同じスタイル） */}
        <div className="mb-12 space-y-6">
          <p className="text-xs tracking-[0.2em] text-slate-500">
            VOICE
          </p>

          <div>
            <h2 className="text-[26px] md:text-[30px] lg:text-[32px] font-bold leading-snug text-slate-900">
              私たちが提供するのは制作物でも代行でもなく、<br />
              「成果が出る状態を生む"構造そのもの"」
            </h2>
          </div>

          <p className="text-sm md:text-[15px] leading-relaxed text-slate-700">
            様々な業界・規模のお客様にサービスをご利用いただき、<br />
            実際に成果を上げていただいています。<br />
            HP制作、アプリ開発、システム開発、採用支援など、<br />
            具体的なサービス活用事例とお客様の声をご紹介します。
          </p>
        </div>

        {/* お客様の声スクロールカラム */}
        <div className="flex gap-6 justify-center overflow-hidden max-h-[600px] [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <TestimonialsColumn
            testimonials={testimonials[0]}
            duration={15}
            className="hidden md:block"
          />
          <TestimonialsColumn
            testimonials={testimonials[1]}
            duration={19}
            className="hidden sm:block"
          />
          <TestimonialsColumn
            testimonials={testimonials[2]}
            duration={17}
            className="hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
}