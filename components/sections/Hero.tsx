"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* 背景要素 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30" />
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* パンくずリスト（SEO強化） */}
        <nav aria-label="パンくずリスト" className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-foreground transition-colors">
                大阪のホームページ制作
              </Link>
            </li>
            <li>/</li>
            <li className="text-foreground">トップページ</li>
          </ol>
        </nav>

        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* メインh1（既存文章維持） */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            aria-label="大阪・南大阪のホームページ制作会社リクステップ：多様なサービスでビジネス成長をサポート"
          >
            多様なサービスを通じて、<br />
            お客様のビジネスの成長を<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
              トータルでサポート
            </span>
          </motion.h1>

          {/* h2でSEO強化（新規追加） */}
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            大阪・南大阪のホームページ制作会社リクステップ
          </motion.h2>

          {/* 説明文（地域性を含めて最適化） */}
          <motion.p
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            大阪・南大阪を中心に、HP・LP制作、システム開発、採用支援を一貫提供。
            各サービスは単体でも、組み合わせても活用いただけます。
            地域企業の成長をデジタルの力で支援いたします。
          </motion.p>

          {/* サービス概要（新規追加） */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {[
              "大阪のHP制作",
              "南大阪のシステム開発", 
              "採用支援",
              "面接代行",
              "アート事業"
            ].map((service, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                {service}
              </span>
            ))}
          </motion.div>

          {/* CTA ボタン */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8 py-4">
                無料相談してみる
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                サービス一覧を見る
              </Button>
            </Link>
          </motion.div>

          {/* 実績数値（信頼性向上） */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            {[
              { number: "300+", label: "制作実績" },
              { number: "3倍", label: "問い合わせ増加" },
              { number: "98%", label: "お客様満足度" },
              { number: "24時間", label: "サポート対応" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* 地域情報（MEO強化） */}
          <motion.div
            className="mt-8 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <p>
              対応エリア：大阪市・堺市・和泉市・松原市・羽曳野市・藤井寺市・富田林市・河内長野市・大阪狭山市
            </p>
          </motion.div>
        </div>
      </div>

      {/* 構造化データ（SEO強化） */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "大阪・南大阪のホームページ制作会社リクステップ",
            "description": "大阪・南大阪でHP・LP制作、システム開発、採用支援を一貫提供。多様なサービスでお客様のビジネス成長をトータルサポート。",
            "url": "https://recustep.com",
            "provider": {
              "@type": "LocalBusiness",
              "name": "株式会社リクステップ",
              "areaServed": ["大阪府", "大阪市", "堺市", "南大阪地域"],
              "serviceType": ["ホームページ制作", "システム開発", "採用支援"]
            }
          })
        }}
      />
    </section>
  );
}

// ==========================================
// サービスページ用 Hero Section テンプレート
// ==========================================

// HP・LP制作ページ用
export function HPLPHeroSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="container mx-auto px-4 relative z-10">
        {/* パンくずリスト */}
        <nav aria-label="パンくずリスト" className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li><Link href="/">ホーム</Link></li>
            <li>/</li>
            <li><Link href="/services">大阪のサービス</Link></li>
            <li>/</li>
            <li className="text-foreground">HP・LP制作</li>
          </ol>
        </nav>

        <div className="text-center max-w-3xl mx-auto space-y-4">
          {/* メインh1（既存維持） */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Webサイトの課題を、<br />
            一気通貫で解決します
          </motion.h1>

          {/* SEO強化h2 */}
          <motion.h2
            className="text-2xl sm:text-3xl font-semibold text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            大阪・南大阪のホームページ制作専門
          </motion.h2>

          {/* 説明文 */}
          <motion.p
            className="mt-6 text-lg text-muted-foreground text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            企業紹介、サービス紹介、採用特化など、目的に応じた高品質なサイトを企画・制作。
            デザインとテクノロジーで企業の魅力を最大限に引き出します。
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link href="/contact">
              <Button size="lg" className="mt-8">
                無料相談してみる
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}