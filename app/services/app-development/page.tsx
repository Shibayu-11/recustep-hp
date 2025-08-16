"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Smartphone, Monitor, Code, Palette, CheckCircle, ArrowRight, Star, Users, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "iOSアプリ開発",
    description: "Swift/SwiftUIを使用したネイティブアプリ開発。App Storeガイドラインに完全準拠し、高品質なiOSアプリを提供します。"
  },
  {
    icon: <Monitor className="h-8 w-8" />,
    title: "Androidアプリ開発", 
    description: "Kotlin/Javaによるネイティブ開発。Google Play Storeの最新要件に対応し、幅広いデバイスで動作するアプリを開発します。"
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "UI/UXデザイン",
    description: "ユーザビリティを重視したインターフェース設計。直感的で使いやすく、ブランドイメージを反映したデザインを提供します。"
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "運用・保守サポート",
    description: "リリース後のバグ修正、機能追加、OSアップデート対応まで継続的にサポート。安定したアプリ運営をお手伝いします。"
  }
];

const benefits = [
  "企画から開発、リリースまでワンストップ対応",
  "App Store・Google Play Store申請代行",
  "最新の開発技術・フレームワークを採用",
  "セキュリティ・パフォーマンスを重視した設計",
  "アナリティクス導入による効果測定",
  "継続的なアップデート・改善提案"
];

const processSteps = [
  {
    step: "01",
    title: "要件ヒアリング",
    description: "アプリの目的、ターゲットユーザー、必要な機能について詳しくお聞きします。"
  },
  {
    step: "02", 
    title: "企画・設計",
    description: "ユーザーストーリーの作成、画面設計、技術仕様の策定を行います。"
  },
  {
    step: "03",
    title: "デザイン制作",
    description: "ワイヤーフレーム、UIデザイン、プロトタイプを作成し、ユーザビリティを検証します。"
  },
  {
    step: "04",
    title: "開発・実装",
    description: "アジャイル開発手法により、段階的にアプリを構築していきます。"
  },
  {
    step: "05",
    title: "テスト・リリース",
    description: "品質保証テストを実施し、ストア申請からリリースまでサポートします。"
  }
];

export default function AppDevelopmentPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* 戻るリンク */}
        <Link href="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" />
          <span>サービス一覧に戻る</span>
        </Link>

        {/* ヘッダーセクション */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-8 mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-medium mb-6">
            <Smartphone className="h-4 w-4" />
            アプリ開発
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-red-500 to-pink-500">
            アプリ開発サービス
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            iOS・Androidアプリの企画から開発、リリースまでワンストップで対応。<br className="hidden sm:block" />
            ユーザビリティを重視したUI/UXデザインと、安定した動作を実現する技術力で、<br className="hidden sm:block" />
            ビジネス成長をサポートするアプリケーションを提供します。
          </p>
        </motion.div>

        {/* 主要機能セクション */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            主要サービス
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-2xl">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 選ばれる理由セクション */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20 py-16 px-8 bg-white/60 backdrop-blur-sm rounded-3xl"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            選ばれる理由
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-sm sm:text-base">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 開発フローセクション */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            開発フロー
          </h2>
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="flex items-center gap-6"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-2xl flex items-center justify-center font-bold text-lg">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTAセクション */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center py-16 px-8 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white rounded-3xl"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            アプリ開発のご相談はお気軽に
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            あなたのビジネスに最適なアプリソリューションをご提案いたします
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-orange-500 hover:bg-gray-100 font-semibold px-8 py-4"
              asChild
            >
              <Link href="/contact">
                無料相談を申し込む
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-500 font-semibold px-8 py-4"
              asChild
            >
              <Link href="/works">
                制作実績を見る
              </Link>
            </Button>
          </div>
        </motion.section>
      </div>
    </main>
  );
}