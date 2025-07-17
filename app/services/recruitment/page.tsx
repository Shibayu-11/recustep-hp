"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Check, Users, Brain, RefreshCcw, Target, Sparkles } from "lucide-react";
import { Waves } from "@/components/ui/wave-background";
import Link from "next/link";

export default function RecruitmentPage() {
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
              採用の悩みを、<br />
              一気通貫で解決します
            </motion.h1>
            <motion.p
              className="mt-6 text-lg text-muted-foreground text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              求人サイト制作から戦略設計、面接代行、内定フォローまで
              専門チームがワンストップで支援します。
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

      {/* Service Flow Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-purple-500">
              サービスの流れ
            </h2>
            <p className="text-2xl font-bold mb-4 text-foreground">
              採用成功に向けた5つのステップ
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              リクステップでは、採用活動の成功に向けて体系的なアプローチを採用。
              各フェーズで専門チームが連携し、最適な人材採用を実現します。
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
            
            {[
              {
                step: "01",
                title: "現状分析・ヒアリング",
                description: "採用課題や目標、企業文化について詳しくお伺いします",
                items: [
                  "現在の採用状況の確認",
                  "課題の洗い出し",
                  "採用目標の設定",
                  "企業文化・価値観の理解"
                ]
              },
              {
                step: "02",
                title: "採用戦略の設計",
                description: "データに基づいた効果的な採用戦略を立案します",
                items: [
                  "採用チャネルの選定",
                  "採用基準の設計",
                  "選考フローの最適化",
                  "スケジュール策定"
                ]
              },
              {
                step: "03",
                title: "求人サイト・コンテンツ制作",
                description: "魅力が伝わる求人コンテンツを制作します",
                items: [
                  "求人原稿の作成",
                  "採用サイトの制作",
                  "PR動画の制作",
                  "SNS運用支援"
                ]
              },
              {
                step: "04",
                title: "選考支援・面接代行",
                description: "効率的な選考プロセスをサポートします",
                items: [
                  "応募者対応",
                  "書類選考代行",
                  "面接代行",
                  "適性検査の実施"
                ]
              },
              {
                step: "05",
                title: "内定者フォロー",
                description: "入社までのフォローを徹底的に行います",
                items: [
                  "内定通知の作成",
                  "入社前研修の設計",
                  "情報提供・コミュニケーション",
                  "入社後のフォローアップ"
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
      </section>

      {/* Common Issues Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-purple-500">
              よくある採用の悩み
            </h2>
            <p className="text-2xl font-bold mb-4 text-foreground">
              採用における3つの課題を解決します
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              多くの企業が抱える採用の課題に対して、
              リクステップは豊富な経験とノウハウで最適な解決策を提供します。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "応募が集まらない",
                problem: "求人を出しても良い応募が来ない、採用媒体の選定が難しい",
                solution: "業界・職種に最適な採用媒体の選定と、魅力が伝わる求人コンテンツの作成で、質の高い応募を実現します。",
                icon: <Target className="h-8 w-8 text-primary" />
              },
              {
                title: "選考の工数が多い",
                problem: "応募者対応や面接調整に時間がかかり、本来の業務に支障が出ている",
                solution: "応募者対応から面接代行まで、採用業務を一括して代行。貴社の業務効率化を実現します。",
                icon: <RefreshCcw className="h-8 w-8 text-primary" />
              },
              {
                title: "ミスマッチが多い",
                problem: "入社後のギャップで早期退職が続く、選考基準があいまい",
                solution: "科学的な適性検査と、貴社の文化に合わせた選考基準の設計で、長期的な活躍が期待できる人材を採用できます。",
                icon: <Brain className="h-8 w-8 text-primary" />
              }
            ].map((issue, index) => (
              <Card key={index} className="bg-background/50 backdrop-blur-sm border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4">{issue.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{issue.title}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-muted-foreground mb-2">課題</h4>
                      <p>{issue.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-muted-foreground mb-2">解決方法</h4>
                      <p>{issue.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-purple-500">
              導入効果
            </h2>
            <p className="text-2xl font-bold mb-4 text-foreground">
              数字で見る採用改善の実績
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              リクステップの採用支援サービスを導入いただいた企業様の
              具体的な改善効果をご紹介します。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "応募数の増加",
                number: "250%",
                description: "適切な採用戦略と魅力的な求人コンテンツにより、質の高い応募数が大幅に増加",
                icon: <Users className="h-8 w-8 text-primary" />
              },
              {
                title: "採用工数の削減",
                number: "70%",
                description: "面接代行と応募者対応の効率化により、社内の採用関連業務を大幅に削減",
                icon: <RefreshCcw className="h-8 w-8 text-primary" />
              },
              {
                title: "定着率の向上",
                number: "90%",
                description: "科学的な適性検査と丁寧な内定者フォローにより、入社後1年の定着率が向上",
                icon: <Sparkles className="h-8 w-8 text-primary" />
              }
            ].map((result, index) => (
              <Card key={index} className="bg-background/50 backdrop-blur-sm border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">{result.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{result.title}</h3>
                  <div className="text-4xl font-bold text-primary my-4">{result.number}</div>
                  <p className="text-muted-foreground">{result.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            貴社の課題に合った採用支援をご提案します
          </h2>
          <Button size="lg" className="group">
            無料相談してみる
            <ArrowRight className="ml-2 h-5 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>
    </main>
  );
}