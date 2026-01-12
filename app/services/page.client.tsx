"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

/* ====== サービス定義 ====== */
const services = [
  {
    id: "hp-lp",
    title: "HP・LP制作",
    description:
      "企業紹介、サービス紹介、採用特化など、目的に応じた高品質なサイトを企画・制作。デザインとテクノロジーで企業の魅力を最大限に引き出します。公開後の運用まで見据え、成果につながる導線設計を重視します。",
    href: "/services/hp-lp",
    features: ["コーポレートサイト制作", "ランディングページ制作", "採用サイト制作", "CMS導入・運用サポート"],
  },
  {
    id: "app-development",
    title: "アプリ開発",
    description:
      "iOS・Androidアプリの企画から開発、リリースまでワンストップで対応。ユーザビリティを重視したUI/UXデザインと安定した動作を実現します。保守・改善まで含めて事業成長を支えます。",
    href: "/services/app-development",
    features: ["iOSアプリ開発", "Androidアプリ開発", "UI/UXデザイン", "運用・保守サポート"],
  },
  {
    id: "recruitment",
    title: "採用支援",
    description:
      "採用戦略の立案から求人サイト制作、媒体運用、スカウト、面接設計、内定フォロー、オンボーディングまで。データドリブンで継続改善し、必要な人材の獲得を加速します。職種ごとの勝ち筋に合わせて運用設計します。",
    href: "/services/recruitment",
    features: ["採用戦略立案", "求人票/採用サイト最適化", "媒体運用・スカウト", "ATS運用・一次面接代行"],
  },
  {
    id: "system",
    title: "システム開発",
    description:
      "業務効率化や新規事業立ち上げのためのシステム開発を承ります。要件定義から設計、開発、保守まで一貫してサポートします。現場運用に合わせた無理のない導入を大切にします。",
    href: "/services/system",
    features: ["業務システム開発", "Webアプリケーション開発", "モバイルアプリ開発", "保守・運用サポート"],
  },
  {
    id: "recuste",
    title: "就活生向けアプリ「リクステ」",
    description:
      "履歴書・ES作成、AI添削、資格学習、企業スカウト、専任CAサポートを搭載。内定獲得までを一貫支援します。学習と実践の両輪で就活の不安を解消します。",
    href: "/services/recuste",
    features: ["履歴書/ES作成", "AI添削", "企業スカウト", "専任CAサポート"],
  },
  {
    id: "artbloom",
    title: "アートのサブスク事業",
    description:
      "ArtBloomは、アーティストと企業をつなぐアートサブスク。空間に合わせた作品提案と運用を行います。ブランド体験を高める演出まで設計します。",
    href: "/services/artbloom",
    features: ["アート作品レンタル", "アーティスト支援", "空間デザイン提案", "イベント企画"],
  },
];

/* Hero画像の割り当て（拡張子を jpg で統一） */
const heroSrc: Record<string, string> = {
  "hp-lp": "/images/hero/hp.jpg",
  "app-development": "/images/hero/app.jpg",
  recruitment: "/images/hero/human.jpg",
  system: "/images/hero/system.jpg",
  artbloom: "/images/hero/artbloom.jpg",
  recuste: "/images/hero/recuste.jpg",
};

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gray-50" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-12 lg:pt-14 pb-20">
        <header className="mt-1 md:mt-2 mb-8">
          <h1 className="text-left text-[11px] tracking-[0.18em] text-slate-400">
            SERVICE
          </h1>

          <div className="mt-6 space-y-6">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight leading-relaxed text-gray-900">
              デザインとテクノロジーを融合し、貴社の「本質的なビジネス成長」を牽引するワンストップ・パートナー
            </h2>

            <div className="space-y-4 text-[13px] md:text-[14px] leading-7 text-gray-600">
              <p>
                株式会社リクステップは、デジタル変革（DX）が加速する時代において、企業が直面する課題をデザインとテクノロジーの力で解決し、持続的な成長を実現するための少数精鋭プロフェッショナルチームです。単に美しいWebサイトを作るだけでなく、ビジネスの戦略設計から情報設計、そして成果に直結する実装品質までを一気通貫で追求する、真のワンストップ・ソリューションを提供します。
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                成果にコミットする包括的なサービス群
              </h3>
              <p className="text-[13px] md:text-[14px] leading-7 text-gray-600">
                リクステップは、貴社のニーズに合わせ、事業成長に必要なデジタルソリューションを幅広く提供します。
                目的や体制に応じて最適な手段を組み合わせ、企画から実装、運用まで一貫して支援します。
                施策を点で終わらせず、成果が続く状態をつくることを重視しています。
              </p>
            </div>
          </div>
        </header>

        <section className="mt-6 md:mt-10">
          <div className="space-y-14 md:space-y-16">
            {services.map((svc, idx) => {
              const reverse = idx % 2 === 1;
              return (
                <article
                  key={svc.id}
                  className="group grid items-center gap-6 md:gap-10 md:grid-cols-2"
                >
                  <motion.div
                    initial={{ opacity: 0, x: reverse ? 24 : -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={reverse ? "md:order-2" : "md:order-1"}
                  >
                    <Link
                    href={svc.href}
                    className="block overflow-hidden"
                  >
                    <div
                      className="relative w-full aspect-[16/9]"
                      style={{
                        clipPath:
                          "polygon(6% 0, 100% 0, 100% 94%, 94% 100%, 0 100%, 0 6%)",
                      }}
                    >
                        <Image
                          src={heroSrc[svc.id] ?? "/images/hero/hp.jpg"}
                          alt={svc.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          priority={idx === 0}
                        />
                      </div>
                    </Link>
                  </motion.div>

                  <div className={reverse ? "md:order-1" : "md:order-2"}>
                    <h3 className="text-2xl md:text-[28px] font-bold tracking-tight">
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
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <div className="h-16" />
      </div>
    </main>
  );
}

/* 2つずつに分割 */
