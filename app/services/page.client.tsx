"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

/* ====== サービス定義 ====== */
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
      "採用戦略の立案から求人サイト制作、媒体運用、スカウト、面接設計、内定フォロー、オンボーディングまで。データドリブンで継続改善し、必要な人材の獲得を加速します。",
    href: "/services/recruitment",
    features: ["採用戦略立案", "求人票/採用サイト最適化", "媒体運用・スカウト", "ATS運用・一次面接代行"],
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

/* Hero画像の割り当て（拡張子を jpg で統一） */
const heroSrc: Record<string, string> = {
  "hp-lp": "/images/hero/hp.jpg",
  "app-development": "/images/hero/app.jpg",
  recruitment: "/images/hero/human.jpg",
  system: "/images/hero/system.jpg",
  artbloom: "/images/hero/artbloom.jpg",
  syokulab: "/images/hero/shokulab.jpg",
};

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gray-50" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-12 lg:pt-14 pb-20">
        <header className="mt-1 md:mt-2 mb-8">
          <h1 className="text-left text-4xl sm:text-5xl font-extrabold tracking-tight">SERVICE</h1>

          <div className="mt-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-relaxed text-gray-900">
              デザインとテクノロジーを融合し、貴社の「本質的なビジネス成長」を牽引するワンストップ・パートナー
            </h2>

            <div className="space-y-4 text-[15px] md:text-[16px] leading-8 text-gray-700">
              <p>
                株式会社リクステップは、デジタル変革（DX）が加速する時代において、企業が直面する課題をデザインとテクノロジーの力で解決し、持続的な成長を実現するための少数精鋭プロフェッショナルチームです。単に美しいWebサイトを作るだけでなく、ビジネスの戦略設計から情報設計、そして成果に直結する実装品質までを一気通貫で追求する、真のワンストップ・ソリューションを提供します。
              </p>
              <p>
                私たちの核となる強みは、最先端の技術スタックと徹底したSEO最適化へのこだわりです。高速な表示速度と高いセキュリティを実現するNext.jsなどのモダンな技術を採用し、検索エンジンからの評価を高め、ユーザー体験（UI/UX）を最大化します。企画・要件定義から開発、公開後の解析設定、継続的な伴走型運用改善まで、すべてデータドリブンで実行し、貴社のデジタル資産を「生きた競争力」へと進化させます。
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                成果にコミットする包括的なサービス群
              </h3>
              <p className="text-[15px] md:text-[16px] leading-8 text-gray-700">
                リクステップは、貴社のニーズに合わせ、事業成長に必要なデジタルソリューションを幅広く提供します。
              </p>
            </div>
          </div>
        </header>

        <section className="mt-6 md:mt-10">
          <div className="grid gap-y-14 md:gap-y-16">
            {chunk2(services).map((row, rIdx) => (
              <div key={rIdx} className="grid md:grid-cols-2 gap-8 md:gap-10 items-start">
                {row.map((svc) => (
                  <article key={svc.id} className="group">
                    <Link href={svc.href} className="block rounded-2xl overflow-hidden">
                      <div className="relative w-full aspect-[16/9]">
                        <Image
                          src={heroSrc[svc.id] ?? "/images/hero/hp.jpg"}
                          alt={svc.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          priority={rIdx === 0}
                        />
                      </div>
                    </Link>

                    <h3 className="mt-5 text-2xl md:text-[28px] font-bold tracking-tight">
                      <Link href={svc.href} className="hover:text-primary transition-colors">
                        {svc.title}
                      </Link>
                    </h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{svc.description}</p>

                    <ul className="mt-4 grid grid-cols-1 gap-2">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-primary/80" />
                          <span className="text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4">
                      <Link href={svc.href} className="inline-flex items-center text-primary hover:opacity-90">
                        <span>詳しく見る</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                ))}
                {row.length === 1 && <div className="hidden md:block" />}
              </div>
            ))}
          </div>
        </section>

        <div className="h-16" />
      </div>
    </main>
  );
}

/* 2つずつに分割 */
function chunk2<T>(arr: T[]): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += 2) {
    out.push(arr.slice(i, i + 2));
  }
  return out;
}