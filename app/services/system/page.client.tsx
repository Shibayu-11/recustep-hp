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
    <main className="bg-[#f7f9fb]">
      {/* ====== HEROセクション（アプリ開発と同じレイアウト） ====== */}
      <section className="relative w-full overflow-hidden">
        <div
          className="
            max-w-7xl mx-auto
            min-h-[560px] md:min-h-[720px]
            flex flex-col md:flex-row
            items-stretch
            justify-start md:justify-between
          "
        >
          {/* 左：テキスト */}
          <motion.div
            className="
              order-2 md:order-1
              w-full md:w-[55%] lg:w-[54%]
              px-6 md:px-10 lg:px-16
              py-8 md:py-20 lg:py-24
              relative z-10
              -mt-6 sm:-mt-10 md:mt-0
            "
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full md:max-w-[720px]">
              <h1
                className="
                  text-[24px] sm:text-[30px]
                  md:text-[48px] lg:text-[56px]
                  font-bold
                  leading-tight md:leading-[1.1]
                  tracking-[-0.01em] md:tracking-[-0.02em]
                  text-gray-900
                "
              >
                <span className="block whitespace-nowrap">システム開発の課題を、</span>
                <span className="block whitespace-nowrap">一気通貫で解決します。</span>
              </h1>

              <p
                className="
                  mt-6 md:mt-7
                  text-[14px] sm:text-[15px] md:text-lg
                  leading-relaxed md:leading-8
                  text-gray-700
                "
              >
                業務効率化や新規事業立ち上げのためのシステム開発を承ります。<br className="hidden md:block" />
                要件定義から設計、開発、保守まで一貫してサポート。<br className="hidden md:block" />
                業務要件を踏まえ、最小実装から拡張まで設計し、運用まで見据えた堅実なアーキテクチャで作ります。
              </p>

              <div className="mt-7 md:mt-9">
                <Link href="/contact">
                  <Button className="text-sm md:text-base lg:text-lg px-6 md:px-7 lg:px-8 py-4 md:py-5 lg:py-6 rounded-xl">
                    無料相談を申し込む
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* 右：画像（システム開発用画像に変更、クリップは同じ） */}
          <motion.div
            className="
              order-1 md:order-2
              w-full md:w-[45%] lg:w-[46%]
              h-[36vh] sm:h-[40vh] md:min-h-[720px]
              relative
            "
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="absolute inset-0"
              style={{ clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0 100%)" }}
            >
              <img
                src="/images/hero/system.jpg"
                alt="システム開発サービス"
                className="
                  w-full h-full object-cover select-none pointer-events-none
                  object-[74%_center] md:object-[78%_center]
                "
                draggable={false}
              />
            </div>
          </motion.div>
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



      {/* Pricing Section */}
      <div className="relative bg-gradient-to-br from-background to-muted/50 rounded-3xl p-12 mb-12 shadow-lg border border-border/50">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)] -z-10" />
        <h2 className="text-3xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-purple-500">
          料金について
        </h2>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-2xl font-bold mb-4 text-foreground">
            DX化を並走しながら、導入できそうなサービスを提案
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            お客様の業務フローを深く理解し、段階的なDX化を支援します。
            現状分析から始まり、効果的なシステム導入まで一貫してサポート。
            無理のないペースで、確実にデジタル変革を実現します。
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* DX化支援プラン */}
          <Card className="bg-background/50 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">DX化支援プラン</h3>
                <div className="flex items-baseline justify-center gap-2 mb-4">
                  <span className="text-4xl font-bold">¥80,000</span>
                  <span className="text-muted-foreground">/月〜</span>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">現状業務の詳細分析</h4>
                    <p className="text-sm text-muted-foreground">
                      既存業務フローの可視化と課題の特定
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">段階的DX化ロードマップ</h4>
                    <p className="text-sm text-muted-foreground">
                      優先順位を明確にした実行計画の策定
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">最適ツール・システム提案</h4>
                    <p className="text-sm text-muted-foreground">
                      業務に最適化されたソリューションの選定
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">導入・運用サポート</h4>
                    <p className="text-sm text-muted-foreground">
                      実装から定着まで継続的な支援
                    </p>
                  </div>
                </div>
              </div>
              <Button className="w-full">詳しく相談する</Button>
            </CardContent>
          </Card>

          {/* カスタム開発プラン */}
          <Card className="bg-background/50 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">カスタム開発プラン</h3>
                <div className="flex items-baseline justify-center gap-2 mb-4">
                  <span className="text-4xl font-bold">¥150,000</span>
                  <span className="text-muted-foreground">/月〜</span>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">専用システム設計・開発</h4>
                    <p className="text-sm text-muted-foreground">
                      業務要件に完全対応したオリジナルシステム
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">既存システム連携</h4>
                    <p className="text-sm text-muted-foreground">
                      現在利用中のツールとのスムーズな統合
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">スケーラブル設計</h4>
                    <p className="text-sm text-muted-foreground">
                      将来的な事業拡大に対応できる柔軟な構成
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">24時間保守・運用</h4>
                    <p className="text-sm text-muted-foreground">
                      システムの安定稼働を継続的に保証
                    </p>
                  </div>
                </div>
              </div>
              <Button className="w-full">カスタム見積もり</Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            どちらのプランも、まずは無料のヒアリングから始めさせていただきます。
          </p>
          <Button size="lg" variant="outline">
            無料相談を予約する
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">よくある質問</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              question: "既存システムとの連携は可能ですか？",
              answer: "はい、可能です。現在お使いのシステムとの連携方法を分析し、最適な統合プランをご提案いたします。API連携やデータ移行も含めて対応いたします。"
            },
            {
              question: "開発期間はどのくらいかかりますか？",
              answer: "プロジェクトの規模によりますが、小規模なシステムで2-3ヶ月、中規模で4-6ヶ月程度が目安です。要件定義時に詳細なスケジュールをお示しします。"
            },
            {
              question: "保守・運用サポートは含まれますか？",
              answer: "はい、開発完了後の保守・運用サポートも含まれています。24時間監視、定期メンテナンス、トラブル対応まで包括的にサポートいたします。"
            }
          ].map((faq, index) => (
            <Card key={index} className="bg-white hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-medium">{faq.question}</h3>
                    <ArrowRight className="h-5 w-5 transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{faq.answer}</p>
                </details>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            小さく始めて、確実に成果を。システム化で前へ。
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            10〜15分のオンラインヒアリングで現状とゴールを整理。最短ルートをご提案します。
          </p>
          <Button size="lg" className="px-8 py-4">
            無料相談を予約する
          </Button>
        </div>
      </div>
    </main>
  );
}