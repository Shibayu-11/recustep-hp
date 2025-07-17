"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Check, Users, Sparkles, Target, RefreshCcw, Building2 } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function SyokulabPage() {
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
              飲食店の可能性を広げる<br />
              マッチングプラットフォーム
            </motion.h1>
            <motion.p
              className="mt-6 text-lg text-muted-foreground text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              飲食店同士のコラボレーションを促進し、
              新しい価値の創造と地域の活性化を支援します。
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

      {/* Features Section */}
      <div className="relative bg-gradient-to-br from-background to-muted/50 rounded-3xl p-12 mb-12 shadow-lg border border-border/50">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)] -z-10" />
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-purple-500">
            食ラボの特徴
          </h2>
          <p className="text-2xl font-bold mb-4 text-foreground">
            飲食店の新しい可能性を開く、3つの機能
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            食ラボは、飲食店同士のマッチングを通じて、
            新しいメニューの開発や期間限定イベントの開催を支援。
            地域の飲食シーンに新しい価値を創造します。
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Users className="h-8 w-8 text-primary" />,
              title: "店舗マッチング",
              description: "条件に合う店舗を簡単に検索・マッチング。メッセージでスムーズな連絡が可能"
            },
            {
              icon: <Sparkles className="h-8 w-8 text-primary" />,
              title: "コラボイベント支援",
              description: "イベント企画から告知、集客までをトータルサポート"
            },
            {
              icon: <Target className="h-8 w-8 text-primary" />,
              title: "実績分析",
              description: "イベントの売上・集客データを分析し、次回の改善に活用"
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

      {/* Benefits Section */}
      <div className="relative bg-gradient-to-br from-background to-muted/50 rounded-3xl p-12 mb-12 shadow-lg border border-border/50">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)] -z-10" />
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-purple-500">
            導入メリット
          </h2>
          <p className="text-2xl font-bold mb-4 text-foreground">
            食ラボがもたらす、3つの価値
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            店舗同士のコラボレーションを通じて、
            新しい価値を創造し、地域の活性化に貢献します。
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Building2 className="h-8 w-8 text-primary" />,
              title: "新規顧客の獲得",
              description: "コラボ店舗のファン層へのアプローチで、新しい顧客層を開拓"
            },
            {
              icon: <RefreshCcw className="h-8 w-8 text-primary" />,
              title: "メニュー開発の効率化",
              description: "異なるジャンルの店舗とのコラボで、独自性のある商品を開発"
            },
            {
              icon: <Target className="h-8 w-8 text-primary" />,
              title: "話題性の創出",
              description: "ユニークなコラボイベントで、メディアや SNS での注目を獲得"
            }
          ].map((benefit, index) => (
            <Card key={index} className="bg-background/50 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Price Section */}
      <div className="relative bg-gradient-to-br from-background to-muted/50 rounded-3xl p-12 mb-12 shadow-lg border border-border/50">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)] -z-10" />
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-purple-500">
            料金プラン
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            初期費用0円からスタート可能。
            店舗の規模や利用目的に応じて最適なプランをご提案します。
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="bg-background/50 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold">¥0</span>
                <span className="text-muted-foreground">初期費用</span>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">基本料金 ¥1,500/月</h4>
                    <p className="text-sm text-muted-foreground">
                      マッチング機能、メッセージ機能、基本的な分析機能を利用可能
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">イベント企画運営サポート</h4>
                    <p className="text-sm text-muted-foreground">
                      コラボイベントの企画立案から当日の運営まで専門スタッフがサポート
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">オプションサービス</h4>
                    <p className="text-sm text-muted-foreground">
                      PR支援、メニュー開発アドバイス、集客支援など、必要に応じて追加可能
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
                  <Label htmlFor="company">店舗名</Label>
                  <Input id="company" placeholder="〇〇食堂" className="bg-background" />
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