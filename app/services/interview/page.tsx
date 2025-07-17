"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Check, Users, Brain, FileText, Target, Sparkles } from "lucide-react";
import { Waves } from "@/components/ui/wave-background";
import Link from "next/link";

export default function InterviewPage() {
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
              面接の課題を、<br />
              一気通貫で解決します
            </motion.h1>
            <motion.p
              className="mt-6 text-lg text-muted-foreground text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              専門家による面接代行と科学的な適性検査で、最適な人材選考をサポート。
              採用精度の向上に貢献します。
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

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-purple-500">
              サービス内容
            </h2>
            <p className="text-2xl font-bold mb-4 text-foreground">
              面接から評価まで、トータルサポート
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              リクステップの面接代行サービスは、経験豊富な専門家による面接と
              科学的な適性検査を組み合わせ、最適な人材評価を実現します。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "面接代行",
                description: "貴社の採用基準に基づき、経験豊富な面接官が代行します。一貫した評価基準で、客観的な人材評価を実現します。",
                icon: <Users className="h-8 w-8 text-primary" />,
                features: [
                  "採用基準の明確化",
                  "面接実施・運営",
                  "評価基準の設計",
                  "結果のフィードバック"
                ]
              },
              {
                title: "適性検査",
                description: "科学的な手法を用いて、候補者の適性を多角的に評価。職務適性から文化適合性まで、包括的な分析を提供します。",
                icon: <Brain className="h-8 w-8 text-primary" />,
                features: [
                  "技術力評価",
                  "性格適性診断",
                  "コミュニケーション力",
                  "論理的思考力"
                ]
              },
              {
                title: "評価レポート作成",
                description: "面接結果と適性検査の結果を詳細にレポート。データに基づいた採用判断をサポートします。",
                icon: <FileText className="h-8 w-8 text-primary" />,
                features: [
                  "総合評価",
                  "強み・課題分析",
                  "配属提案",
                  "成長可能性"
                ]
              }
            ].map((service, index) => (
              <Card key={index} className="bg-background/50 backdrop-blur-sm border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-purple-500">
              特徴
            </h2>
            <p className="text-2xl font-bold mb-4 text-foreground">
              リクステップの面接代行が選ばれる理由
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              豊富な経験と専門知識を持つ面接官が、
              貴社の採用基準に沿った最適な人材評価を実現します。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "IT業界経験豊富な面接官",
                description: "技術的な知見と豊富な面接経験を持つ専門家が、的確な評価を行います。",
                icon: <Users className="h-8 w-8 text-primary" />
              },
              {
                title: "客観的な評価基準",
                description: "明確な評価基準と一貫した評価プロセスで、公平な人材評価を実現。",
                icon: <Target className="h-8 w-8 text-primary" />
              },
              {
                title: "科学的な適性診断",
                description: "最新の適性診断ツールを活用し、多角的な視点から候補者を評価。",
                icon: <Brain className="h-8 w-8 text-primary" />
              },
              {
                title: "詳細な評価レポート",
                description: "面接結果と適性検査の分析結果を、わかりやすくレポート化。",
                icon: <FileText className="h-8 w-8 text-primary" />
              },
              {
                title: "採用精度の向上",
                description: "科学的なアプローチで、採用のミスマッチを大幅に削減。",
                icon: <Target className="h-8 w-8 text-primary" />
              },
              {
                title: "採用工数の削減",
                description: "面接運営から評価まで一括代行し、社内の業務負荷を軽減。",
                icon: <Sparkles className="h-8 w-8 text-primary" />
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-background/50 backdrop-blur-sm border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">料金プラン</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "基本プラン",
                price: "3万円",
                period: "/回",
                description: "1次面接に特化したプラン",
                features: [
                  "1次面接の実施",
                  "基本的な評価レポート",
                  "合否判定",
                  "フィードバックミーティング"
                ]
              },
              {
                name: "総合プラン",
                price: "5万円",
                period: "/回",
                description: "1次・2次面接を含む総合的な評価",
                features: [
                  "1次・2次面接の実施",
                  "詳細な評価レポート",
                  "適性検査の実施",
                  "合否判定・採用提案",
                  "フィードバックミーティング"
                ],
                recommended: true
              },
              {
                name: "プレミアムプラン",
                price: "8万円",
                period: "/回",
                description: "選考から入社後フォローまで",
                features: [
                  "全面接工程の実施",
                  "総合評価レポート",
                  "高度な適性検査",
                  "入社後の配属提案",
                  "定着化支援"
                ]
              }
            ].map((plan, index) => (
              <Card 
                key={index} 
                className={`relative bg-background/50 backdrop-blur-sm ${
                  plan.recommended 
                    ? "ring-2 ring-primary shadow-lg" 
                    : "border-0 shadow-md"
                }`}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">
                    お問い合わせ
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center mt-8">
            ※ 適性検査は別途料金となります。詳細はお問い合わせください。
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            まずは無料相談から始めませんか？
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            貴社の採用課題やニーズをお聞かせください。
            最適な面接代行プランをご提案いたします。
          </p>
          <Button size="lg" className="group">
            無料相談してみる
            <ArrowRight className="ml-2 h-5 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>
    </main>
  );
}