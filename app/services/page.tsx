"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Monitor, Code, Users, FileText, Palette, Building2, Sparkles } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "hp-lp",
    title: "HP・LP制作",
    description: "企業紹介、サービス紹介、採用特化など、目的に応じた高品質なサイトを企画・制作。デザインとテクノロジーで企業の魅力を最大限に引き出します。",
    icon: <Monitor className="h-8 w-8" />,
    href: "/services/hp-lp",
    features: [
      "コーポレートサイト制作",
      "ランディングページ制作",
      "採用サイト制作",
      "CMS導入・運用サポート"
    ],
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20"
  },
  {
    id: "system",
    title: "システム開発",
    description: "業務効率化や新規事業立ち上げのためのシステム開発を承ります。要件定義から設計、開発、保守まで一貫してサポートします。",
    icon: <Code className="h-8 w-8" />,
    href: "/services/system",
    features: [
      "業務システム開発",
      "Webアプリケーション開発",
      "モバイルアプリ開発",
      "保守・運用サポート"
    ],
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20"
  },
  {
    id: "recruitment",
    title: "採用支援",
    description: "多種多様な人材の採用に関するあらゆる課題を解決します。求人サイト制作から採用戦略立案、面接、採用まで、企業の成長に必要な人材確保をサポートします。",
    icon: <Users className="h-8 w-8" />,
    href: "/services/recruitment",
    features: [
      "採用戦略立案",
      "求人サイト制作",
      "採用フロー設計",
      "内定者フォロー"
    ],
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20"
  },
  {
    id: "interview",
    title: "面接代行サービス",
    description: "専門家による面接代行と科学的な適性検査で、最適な人材選考をサポート。採用精度の向上に貢献します。",
    icon: <FileText className="h-8 w-8" />,
    href: "/services/interview",
    features: [
      "面接代行",
      "適性検査",
      "評価レポート作成",
      "フィードバック"
    ],
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20"
  },
  {
    id: "artbloom",
    title: "アートのサブスク事業",
    description: "ArtBloomは、アーティストと企業をつなぐ新しい形のアートサブスクリプションサービス。空間に彩りを添える作品を定期的に提供します。",
    icon: <Palette className="h-8 w-8" />,
    href: "/services/artbloom",
    features: [
      "アート作品レンタル",
      "アーティスト支援",
      "空間デザイン提案",
      "イベント企画"
    ],
    gradient: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20"
  },
  {
    id: "syokulab",
    title: "飲食店マッチングアプリ「食ラボ」",
    description: "飲食店同士が自由にコラボできるプラットフォームを作り、地域活性化と店舗の集客支援。",
    icon: <Building2 className="h-8 w-8" />,
    href: "/services/syokulab",
    features: [
      "店舗マッチング",
      "コラボイベント支援",
      "集客支援",
      "実績分析"
    ],
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20"
  }
];

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen py-24 overflow-hidden">
      {/* Simple light gray background */}
      <div className="absolute inset-0 bg-gray-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" />
          <span>トップページに戻る</span>
        </Link>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              ビジネスの成長を加速する
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-purple-500">
                サービス一覧
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              リクステップは、お客様のビジネスの成長をトータルでサポートします。
              各サービスは単体でも、組み合わせても活用いただけます。
            </p>
          </motion.div>
        </div>

        <div className="grid gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <Link href={service.href}>
                <Card className={`group hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm`}>
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                      <div className="md:col-span-2 space-y-4">
                        <div className="flex items-center gap-4">
                          <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                            <div className="text-white">
                              {service.icon}
                            </div>
                          </div>
                          <h2 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                            {service.title}
                          </h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                        <div className="grid grid-cols-2 gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-center md:justify-end">
                        <Button className="group/btn bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white shadow-lg">
                          <span>詳しく見る</span>
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}