"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FileText,
  BookOpen,
  Calendar,
  Mail,
  Lightbulb,
  UserCheck,
  Headphones,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: FileText,
    title: "履歴書・ES作成 + AI添削",
    description: "簡単なフォーム入力で履歴書・ESを作成。AIが内容を分析し、より魅力的な表現へと添削します。",
  },
  {
    icon: BookOpen,
    title: "充実の資格学習コンテンツ",
    description: "宅建・FP・簿記・SPI対策・MOS・面接マナー・敬語講座・ビジネス用語・NISA・税金など、就活から社会人まで役立つ学習コンテンツを提供。",
  },
  {
    icon: Calendar,
    title: "予定管理（カレンダー連携）",
    description: "説明会・面接・提出期限をカレンダーと連携して一元管理。大事な予定を見逃しません。",
  },
  {
    icon: Mail,
    title: "企業からのスカウト機能",
    description: "登録したSPIスコアや履歴書を見た企業から直接スカウトが届く。効率的に就活を進められます。",
  },
  {
    icon: Lightbulb,
    title: "ガクチカ・面接対策AI",
    description: "エピソードを入力するだけで、AIがガクチカや面接で押すべきポイントを分析・提案します。",
  },
  {
    icon: UserCheck,
    title: "性格診断 × 業界マッチング",
    description: "性格診断の結果から、あなたに合った業種・業界を提案。自己分析をサポートします。",
  },
  {
    icon: Headphones,
    title: "専任CAにいつでも相談",
    description: "困ったときは専任のキャリアアドバイザー（CA）にチャットで相談可能。就活の悩みを一緒に解決します。",
  },
];

export default function RecustePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitle1Ref = useRef<HTMLParagraphElement>(null);
  const subtitle2Ref = useRef<HTMLParagraphElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ヒーローセクションのアニメーション
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(badgeRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: "power2.out",
      })
      .from(titleRef.current, {
        opacity: 0,
        y: 30,
        scale: 0.9,
        duration: 0.8,
        ease: "back.out(1.7)",
      }, "-=0.3")
      .from(subtitle1Ref.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
      }, "-=0.4")
      .from(subtitle2Ref.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
      }, "-=0.4");

      // 機能カードのスタガーアニメーション
      if (featuresRef.current) {
        const cards = featuresRef.current.querySelectorAll(".feature-card");
        gsap.from(cards, {
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 50,
          scale: 0.95,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
        });
      }

      // ベネフィットセクション
      if (benefitsRef.current) {
        gsap.from(benefitsRef.current, {
          scrollTrigger: {
            trigger: benefitsRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power2.out",
        });

        const benefitItems = benefitsRef.current.querySelectorAll(".benefit-item");
        gsap.from(benefitItems, {
          scrollTrigger: {
            trigger: benefitsRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          x: -30,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        });
      }

      // CTAセクション
      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 40,
          scale: 0.95,
          duration: 0.8,
          ease: "back.out(1.4)",
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4" ref={heroRef}>
        <div className="max-w-5xl mx-auto text-center">
          <div>
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              就活生向けオールインワンアプリ
            </div>

            <h1
              ref={titleRef}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"
            >
              リクステ
            </h1>

            <p
              ref={subtitle1Ref}
              className="text-xl sm:text-2xl text-gray-700 mb-4 font-medium"
            >
              就活に必要な全てが、ここに。
            </p>

            <p
              ref={subtitle2Ref}
              className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto"
            >
              履歴書作成からAI添削、資格学習、企業スカウト、専任CAサポートまで。<br />
              内定獲得までを一貫して支援する、就活生のためのアプリです。
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              主な機能
            </h2>
            <p className="text-gray-600 text-lg">
              就活のすべてのステージをサポートする7つの機能
            </p>
          </div>

          <div ref={featuresRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="feature-card bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div
            ref={benefitsRef}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
              リクステが選ばれる理由
            </h2>

            <div className="space-y-4">
              {[
                "履歴書作成からスカウト受信まで、アプリ一つで完結",
                "AIによる添削で、書類選考の通過率を向上",
                "資格学習で就活と同時にスキルアップ",
                "専任CAの伴走サポートで、安心して就活に集中できる",
                "性格診断で自分に合った業界・企業を発見",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="benefit-item flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div ref={ctaRef}>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-lg font-medium mb-8">
              2025年春リリース予定
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-600">
              現在開発中です。リリースまでもうしばらくお待ちください。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
