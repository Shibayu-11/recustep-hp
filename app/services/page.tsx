"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/* ====== 元データ（アイコンは使わない） ====== */
const services = [
  {
    id: "hp-lp",
    title: "HP・LP制作",
    description:
      "企業紹介、サービス紹介、採用特化など、目的に応じた高品質なサイトを企画・制作。デザインとテクノロジーで企業の魅力を最大限に引き出します。",
    href: "/services/hp-lp",
    features: ["コーポレートサイト制作", "ランディングページ制作", "採用サイト制作", "CMS導入・運用サポート"],
  },
  {
    id: "app-development",
    title: "アプリ開発",
    description:
      "iOS・Androidアプリの企画から開発、リリースまでワンストップで対応。ユーザビリティを重視したUI/UXデザインと安定した動作を実現します。",
    href: "/services/app-development",
    features: ["iOSアプリ開発", "Androidアプリ開発", "UI/UXデザイン", "運用・保守サポート"],
  },
  {
    id: "recruitment",
    title: "採用支援",
    description:
      "採用戦略の立案から求人サイト制作、面接設計、内定フォローまで。成長に必要な人材確保を支援します。",
    href: "/services/recruitment",
    features: ["採用戦略立案", "求人サイト制作", "採用フロー設計", "内定者フォロー"],
  },
  {
    id: "system",
    title: "システム開発",
    description:
      "業務効率化や新規事業立ち上げのためのシステム開発を承ります。要件定義から設計、開発、保守まで一貫してサポートします。",
    href: "/services/system",
    features: ["業務システム開発", "Webアプリケーション開発", "モバイルアプリ開発", "保守・運用サポート"],
  },
  {
    id: "artbloom",
    title: "アートのサブスク事業",
    description:
      "ArtBloomは、アーティストと企業をつなぐアートサブスク。空間に合わせた作品提案と運用を行います。",
    href: "/services/artbloom",
    features: ["アート作品レンタル", "アーティスト支援", "空間デザイン提案", "イベント企画"],
  },
  {
    id: "syokulab",
    title: "飲食店マッチングアプリ「食ラボ」",
    description:
      "飲食店同士が自由にコラボできるプラットフォームで、地域活性と集客を後押しします。",
    href: "/services/syokulab",
    features: ["店舗マッチング", "コラボイベント支援", "集客支援", "実績分析"],
  },
];

/* Hero画像の割り当て */
const heroSrc: Record<string, string> = {
  "hp-lp": "/images/hero/hp.png",
  "app-development": "/images/hero/app.png",
  recruitment: "/images/hero/human.png",
  system: "/images/hero/system.png",
  artbloom: "/images/hero/artbloom.png",
  syokulab: "/images/hero/shokulabo.png",
};

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gray-50" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* 戻る */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" />
          <span>トップページに戻る</span>
        </Link>

        {/* ====== SERVICE ヘッダー ====== */}
        <header className="mt-6 md:mt-10 mb-10 md:mb-14 text-center">
          <p className="tracking-[0.3em] text-xs md:text-sm text-primary/80">SERVICE</p>
          <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold">リクステップのサービス</h1>
        </header>

        {/* ====== 長文イントロ ====== */}
        <section className="mx-auto max-w-4xl text-[15px] md:text-[17px] leading-8 md:leading-9 text-muted-foreground mb-14 md:mb-20">
          <p className="mb-5">
            リクステップは、デザインとテクノロジーを横断する少数精鋭のチームです。見た目の美しさだけでなく、
            情報設計と実装品質、公開後の運用までを一貫して担います。企画・要件定義からデザイン、Next.js を
            用いた開発、CMS 導入、解析設定、速度・SEOの最適化までをワンストップで提供し、スピードと品質の両立を図ります。
          </p>
          <p>
            企業サイト、LP、採用サイト、業務システムやWebアプリなど、目的に合わせて最適な構成をご提案。
            GA4やSearch Consoleを用いた継続的な改善で、作って終わりではなく成果につながる運用を実現します。
          </p>
        </section>

        {/* ====== 私たちの進め方（そのまま） ====== */}
        <section aria-labelledby="process-title" className="mb-16 md:mb-24">
          <h2 id="process-title" className="text-center text-3xl md:text-4xl font-extrabold mb-3">私たちの進め方</h2>
          <p className="text-center text-muted-foreground mb-10">お客様との対話を大切にし、段階的にプロジェクトを進めます</p>

          <ol className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-5 max-w-6xl">
            {[
              { n: 1, title: "ヒアリング", body: "課題や目的、ターゲット層、既存業務を確認し、目的と方向性を整理します。" },
              { n: 2, title: "要件・構成の整理", body: "必要な構成（ページ数・機能・設計方針など）を明確化し、提案します。" },
              { n: 3, title: "プロトタイプの提示", body: "ワイヤー・デザイン案・試作を共有し、現場の声を取り入れて調整します。" },
              { n: 4, title: "制作・実装", body: "サイト／システムを構築。動作・表示を確認しながら進行します。" },
              { n: 5, title: "公開・運用サポート", body: "公開設定・納品後も運用支援や改善提案まで継続的に対応します。" },
            ].map((s) => (
              <li key={s.n} className="relative">
                <div className="hidden lg:block absolute top-1/2 left-0 right-0 translate-y-[-50%] h-px bg-neutral-200 z-0" />
                <div className="relative z-10 h-full rounded-3xl bg-white shadow-[0_6px_30px_-10px_rgba(0,0,0,0.15)] border border-black/5 p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-100 text-2xl font-bold text-neutral-800 shadow-inner">
                    {s.n}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">{s.title}</h3>
                  <p className="text-sm md:text-[15px] leading-7 text-muted-foreground">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ====== サービスカード：Hero画像×2カラム（参考デザインに寄せる） ====== */}
        <section className="mt-6 md:mt-10">
          <div className="grid gap-y-14 md:gap-y-16">
            {chunk2(services).map((row, rIdx) => (
              <div key={rIdx} className="grid md:grid-cols-2 gap-8 md:gap-10 items-start">
                {row.map((svc) => (
                  <article key={svc.id} className="group">
                    {/* 画像（クリックで詳細） */}
                    <Link href={svc.href} className="block rounded-2xl overflow-hidden">
                      <div className="relative w-full aspect-[16/9]">
                        <Image
                          src={heroSrc[svc.id] ?? "/images/hero/hp.png"}
                          alt={svc.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    </Link>

                    {/* タイトル／本文 */}
                    <h3 className="mt-5 text-2xl md:text-[28px] font-bold tracking-tight">
                      <Link href={svc.href} className="hover:text-primary transition-colors">{svc.title}</Link>
                    </h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{svc.description}</p>

                    {/* 箇条書き（必要なければ削除OK） */}
                    <ul className="mt-4 grid grid-cols-1 gap-2">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-primary/80" />
                          <span className="text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="mt-4">
                      <Link href={svc.href} className="inline-flex items-center text-primary hover:opacity-90">
                        <span>詳しく見る</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                ))}
                {/* 奇数件の時のスペーサー */}
                {row.length === 1 && <div className="hidden md:block" />}
              </div>
            ))}
          </div>
        </section>

        {/* ====== 以降（既存の"サービスについて"など）は修正なし ====== */}

        <div className="h-16" />
      </div>
    </main>
  );
}

/* 2つずつに分割して行を作る */
function chunk2<T>(arr: T[]): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += 2) out.push(arr.slice(i, i + 2));
  return out;
}