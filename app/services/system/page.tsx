"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Shield, Users, Sparkles, Target, Gauge, Cpu, Check } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function SystemPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <Link href="/" className="text-sm text-muted-foreground flex items-center gap-1 mb-4">
          <ArrowLeft className="h-4 w-4" />
          <span>トップページに戻る</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 bg-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              システム開発の課題を、<br />
              一気通貫で解決します
            </motion.h1>
            <motion.p
              className="mt-6 text-lg text-muted-foreground text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              業務効率化や新規事業立ち上げのためのシステム開発を承ります。
              要件定義から設計、開発、保守まで一貫してサポートします。
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Button size="lg" className="mt-8">
                無料相談してみる
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <div className="relative bg-gradient-to-br from-background to-muted/50 rounded-3xl p-12 mb-12 shadow-lg border border-border/50">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)] -z-10" />
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-purple-500">
            開発の流れ
          </h2>
          <p className="text-2xl font-bold mb-4 text-foreground">
            プロジェクトの成功を支える5つのステップ
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            リクステップでは、プロジェクトの成功に向けて体系的なアプローチを採用。
            各フェーズで専門チームが連携し、確実な成果を実現します。
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
          
          {[
            {
              step: "01",
              title: "要件定義",
              description: "現状の課題や目的を整理し、システムに必要な機能を定義します。",
              items: [
                "現状業務の分析と課題の特定",
                "システム化による改善効果の試算",
                "必要機能の洗い出しと優先順位付け",
                "非機能要件の定義",
                "スケジュールとコストの概算"
              ]
            },
            {
              step: "02",
              title: "基本設計",
              description: "システム全体の構成、データベース設計、画面設計を行います。",
              items: [
                "全体アーキテクチャの設計",
                "データベース構造の最適化",
                "ユーザーインターフェースの設計",
                "セキュリティ設計",
                "システム間連携の設計"
              ]
            },
            {
              step: "03",
              title: "開発",
              description: "設計に基づいて、実際のプログラミングとテストを行います。",
              items: [
                "プログラミングと単体テスト",
                "定期的なレビューと品質確認",
                "進捗管理とリスク管理",
                "ドキュメント作成",
                "中間デモンストレーション"
              ]
            },
            {
              step: "04",
              title: "テスト・導入",
              description: "総合テストを実施し、本番環境への導入を行います。",
              items: [
                "結合テストと総合テスト",
                "ユーザー受入テストの支援",
                "本番環境の構築",
                "データ移行の実施",
                "利用者教育の実施"
              ]
            },
            {
              step: "05",
              title: "運用・保守",
              description: "システムの安定運用と継続的な改善を支援します。",
              items: [
                "24時間監視体制の構築",
                "定期的な保守メンテナンス",
                "問い合わせ対応",
                "パフォーマンス分析",
                "改善提案の実施"
              ]
            }
          ].map((phase, index) => (
            <div key={index} className="relative mb-16 last:mb-0">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-full md:w-1/2 md:text-right md:pr-12">
                  {index % 2 === 0 && (
                    <Card className="bg-background/50 backdrop-blur-sm border-0 shadow-md">
                      <CardContent className="p-6">
                        <div className="text-4xl font-bold text-primary mb-4">{phase.step}</div>
                        <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                        <p className="text-muted-foreground mb-4">{phase.description}</p>
                        <ul className="space-y-2">
                          {phase.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center justify-end gap-2">
                              <span>{item}</span>
                              <Check className="h-4 w-4 text-primary flex-shrink-0" />
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )}
                </div>
                <div className="w-full md:w-1/2 md:pl-12">
                  {index % 2 === 1 && (
                    <Card className="bg-background/50 backdrop-blur-sm border-0 shadow-md">
                      <CardContent className="p-6">
                        <div className="text-4xl font-bold text-primary mb-4">{phase.step}</div>
                        <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                        <p className="text-muted-foreground mb-4">{phase.description}</p>
                        <ul className="space-y-2">
                          {phase.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-primary flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strengths Section */}
      <div className="relative bg-gradient-to-br from-background to-muted/50 rounded-3xl p-12 mb-12 shadow-lg border border-border/50">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)] -z-10" />
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-purple-500">
            リクステップの強み
          </h2>
          <p className="text-2xl font-bold mb-4 text-foreground">
            確かな技術力と実績で、お客様のビジネスを支えます。
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            豊富な開発実績と専門性の高いチーム体制で、
            お客様のビジネス課題を確実に解決します。
            最新技術の活用と安定した保守運用で、長期的な成長をサポートします。
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Shield className="h-8 w-8 text-primary" />,
              title: "豊富な開発実績",
              description: "様々な業界・規模のシステム開発経験を活かし、最適なソリューションを提供します。"
            },
            {
              icon: <Users className="h-8 w-8 text-primary" />,
              title: "専門チーム体制",
              description: "プロジェクトマネージャー、エンジニア、デザイナーが連携し、質の高い開発を実現。"
            },
            {
              icon: <Sparkles className="h-8 w-8 text-primary" />,
              title: "最新技術の活用",
              description: "モダンな技術スタックを採用し、拡張性と保守性に優れたシステムを構築。"
            },
            {
              icon: <Target className="h-8 w-8 text-primary" />,
              title: "課題解決力",
              description: "お客様の業務を深く理解し、本質的な課題解決につながるシステムを提案。"
            },
            {
              icon: <Gauge className="h-8 w-8 text-primary" />,
              title: "スピーディーな開発",
              description: "アジャイル開発手法を採用し、素早くフィードバックを反映。"
            },
            {
              icon: <Cpu className="h-8 w-8 text-primary" />,
              title: "安定した保守運用",
              description: "開発後も継続的なサポートと改善提案で、システムの価値を最大化。"
            }
          ].map((feature, index) => (
            <Card key={index} className="bg-background/50 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Subscription Plan */}
      <div className="relative bg-gradient-to-br from-background to-muted/50 rounded-3xl p-12 mb-12 shadow-lg border border-border/50">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)] -z-10" />
        <h2 className="text-3xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-purple-500">
          サブスクリプションプラン
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground mb-8 text-center leading-relaxed">
            月額5万円からスタート可能な柔軟なプラン。
            そのうち3万円を開発積立金として確保し、
            御社に最適なシステム開発を計画的に実現します。
          </p>
          <Card className="bg-background/50 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold">¥50,000</span>
                <span className="text-muted-foreground">/月〜</span>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">開発積立金 ¥30,000/月</h4>
                    <p className="text-sm text-muted-foreground">
                      積立金は将来のシステム開発や機能追加に使用可能
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">定期的な業務分析</h4>
                    <p className="text-sm text-muted-foreground">
                      月1回の定例会で業務課題を分析し、改善提案を実施
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">システム提案</h4>
                    <p className="text-sm text-muted-foreground">
                      分析結果に基づき、最適なシステム化計画を提案
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">技術サポート</h4>
                    <p className="text-sm text-muted-foreground">
                      既存システムの運用相談や技術的なアドバイスを提供
                    </p>
                  </div>
                </div>
              </div>
              <Button className="w-full">お問い合わせ</Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative bg-gradient-to-br from-background to-muted/50 rounded-3xl p-12 shadow-lg border border-border/50">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)] -z-10" />
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-purple-500">
          お問い合わせ
        </h2>
        <div className="max-w-2xl mx-auto">
          <Card className="bg-background/50 backdrop-blur-sm border-0 shadow-md">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">お名前</Label>
                  <Input id="name" placeholder="山田 太郎" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">会社名</Label>
                  <Input id="company" placeholder="株式会社XXX" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">メールアドレス</Label>
                  <Input id="email" type="email" placeholder="you@example.com" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">お問い合わせ内容</Label>
                  <Textarea
                    id="message"
                    placeholder="ご相談内容をご記入ください"
                    rows={4}
                    className="bg-background"
                  />
                </div>
                <Button className="w-full group">
                  <span>送信する</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}