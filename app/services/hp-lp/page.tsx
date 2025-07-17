"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Check, Code, Layout, Search, Smartphone, Database, Download, FileText, Palette } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function HPLPPage() {
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
              Webサイトの課題を、<br />
              一気通貫で解決します
            </motion.h1>
            <motion.p
              className="mt-6 text-lg text-muted-foreground text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              企業紹介、サービス紹介、採用特化など、目的に応じた高品質なサイトを企画・制作。
              デザインとテクノロジーで企業の魅力を最大限に引き出します。
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
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

      {/* Features Section */}
      <div className="relative bg-gradient-to-br from-background to-muted/50 rounded-3xl p-12 mb-12 shadow-lg border border-border/50">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)] -z-10" />
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-purple-500">
            必要なものはすべて揃う。
          </h2>
          <p className="text-2xl font-bold mb-4 text-foreground">
            デザインからブランディングまで、ワンストップでご提供します。
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            リクステップでは、Web制作に必要なすべての要素を自社でカバーできます。
            UIデザイン、ロゴ作成、ブランディング設計、コピーライティングまで、
            目的や業種に応じて最適な形でご提案・制作します。
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Layout className="h-8 w-8 text-primary" />,
              title: "UI/UXデザイン・ワイヤーフレーム",
              description: "使いやすさと見た目の美しさを両立したデザインを提供"
            },
            {
              icon: <Palette className="h-8 w-8 text-primary" />,
              title: "ロゴ作成・ブランド設計",
              description: "企業の想いやコンセプトを視覚的に表現するロゴ・トーン設計"
            },
            {
              icon: <FileText className="h-8 w-8 text-primary" />,
              title: "コピーライティング",
              description: "伝わる言葉で魅力を引き出し、ユーザーの行動を促進"
            }
          ].map((item, index) => (
            <Card key={index} className="bg-background/50 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Technical Features Section */}
      <div className="relative bg-gradient-to-br from-background to-muted/50 rounded-3xl p-12 mb-12 shadow-lg border border-border/50">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)] -z-10" />
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-purple-500">
            見た目だけじゃない。
          </h2>
          <p className="text-2xl font-bold mb-4 text-foreground">
            機能もしっかり設計し、運用しやすいサイトへ。
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            スマホ・タブレット表示への最適化、SEOに強い構造、CMSによる簡単更新など、
            運用後も困らない"実用性のある機能"を実装します。
            ご希望に応じて予約システムや会員制サイト、EC対応なども構築可能です。
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: <Smartphone className="h-8 w-8 text-primary" />,
              title: "スマホ・各ブラウザ最適化",
              description: "すべての端末で最適な表示を実現するレスポンシブ対応"
            },
            {
              icon: <Search className="h-8 w-8 text-primary" />,
              title: "SEO基礎設計",
              description: "検索エンジンからの自然流入を増やす構造化データ対応"
            },
            {
              icon: <Database className="h-8 w-8 text-primary" />,
              title: "CMS導入",
              description: "WordPressやmicroCMSによる簡単な更新システム"
            },
            {
              icon: <Code className="h-8 w-8 text-primary" />,
              title: "拡張機能対応",
              description: "予約フォーム・決済・ログインなど必要な機能を追加"
            }
          ].map((item, index) => (
            <Card key={index} className="bg-background/50 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Results Section */}
      <div className="relative bg-gradient-to-br from-background to-muted/50 rounded-3xl p-12 mb-12 shadow-lg border border-border/50">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)] -z-10" />
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-purple-500">
            "作って終わり"じゃない。
          </h2>
          <p className="text-2xl font-bold mb-4 text-foreground">
            その先の成果までコミットします。
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            制作・開発はあくまで手段です。リクステップでは、サイトの成果（アクセス数・問合せ数・業務効率化）にこだわり、成果を測定・改善する仕組みも含めてご提案しています。
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-background/50 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <Check className="h-5 w-5 text-primary" />
                </div>
              </div>
              <span className="text-foreground font-medium">オーガニック流入・CV率アップ</span>
            </CardContent>
          </Card>
          <Card className="bg-background/50 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <Check className="h-5 w-5 text-primary" />
                </div>
              </div>
              <span className="text-foreground font-medium">問い合わせ対応の自動化による工数削減</span>
            </CardContent>
          </Card>
          <Card className="bg-background/50 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <Check className="h-5 w-5 text-primary" />
                </div>
              </div>
              <span className="text-foreground font-medium">アクセス解析＋改善提案によるPDCA支援</span>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="relative bg-gradient-to-br from-background to-muted/50 rounded-3xl p-12 mb-12 shadow-lg border border-border/50">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)] -z-10" />
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-purple-500">
          料金プラン
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">
          貴社のニーズに合わせたプランをご用意しています。
          右記以外にも柔軟にアレンジ可能ですのでご相談ください。
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "LIGHT",
              description: "シンプルなランディングページ制作に最適なプラン",
              initialCost: "¥10,000",
              monthlyCost: "¥1,000",
              period: "/月（24ヶ月）",
              features: [
                "ランディングページ（1ページ）制作",
                "スマホ最適化（レスポンシブ対応）",
                "月1回までのテキスト・画像差し替え",
                "基本SEO構造"
              ]
            },
            {
              name: "スタンダード",
              description: "一般的な企業サイトから本格的なSEO対策まで対応するプラン",
              initialCost: "¥30,000",
              monthlyCost: "¥5,000",
              period: "/月（24ヶ月）",
              features: [
                "最大10ページまでの構築",
                "CMS導入",
                "お問い合わせフォーム",
                "月10回までの更新対応",
                "SNS連携",
                "アクセス解析設定",
                "本格的なSEO対策",
                "AEO対応構造の設計",
                "Google Search Console / GA4の設定・運用サポート"
              ],
              recommended: true
            }
          ].map((plan, index) => (
            <div key={index} className={`${index === 0 ? 'md:col-start-1' : 'md:col-start-3'}`}>
              <Card className={`relative bg-background/50 backdrop-blur-sm ${plan.recommended ? 'border-primary' : 'border-0'} shadow-md h-full`}>
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">おすすめ</Badge>
                </div>
              )}
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-muted-foreground">初期費用</span>
                    <span className="text-2xl font-bold">{plan.initialCost}</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">{plan.monthlyCost}</span>
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button className="w-full">お問い合わせ</Button>
                </Link>
              </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Extension Options Section */}
      <div className="relative bg-gradient-to-br from-background to-muted/50 rounded-3xl p-12 mb-12 shadow-lg border border-border/50">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)] -z-10" />
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-purple-500">
          拡張機能オプション（任意追加）
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "SEO・AEO対策",
              description: "構造化データの選択・Q&A・キーワード設計込みで集客UP",
              price: "¥25,000〜"
            },
            {
              title: "見積もりフォーム",
              description: "入力内容に応じた金額の自動計算・表示",
              price: "¥15,000〜"
            },
            {
              title: "クレカ決済導入",
              description: "Stripeによる単発/月額決済機能の追加",
              price: "¥30,000〜"
            },
            {
              title: "予約受付機能",
              description: "時間枠の選択・バッティング制御・自動通知付きの実用予約システム",
              price: "¥30,000〜"
            },
            {
              title: "会員ログイン",
              description: "認証機能＋会員限定ページ表示",
              price: "¥50,000〜"
            },
            {
              title: "簡易EC機能",
              description: "商品一覧・カート・注文受付（非ログイン制）",
              price: "¥50,000〜"
            },
            {
              title: "多言語切替",
              description: "英語などの他言語ページ追加（切替ボタン含む）",
              price: "¥10,000/言語〜"
            }
          ].map((option, index) => (
            <Card key={index} className="bg-background/50 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02]">
              <CardContent className="p-6">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-lg font-bold mb-2">{option.title}</h3>
                    <p className="text-muted-foreground">{option.description}</p>
                  </div>
                  <span className="text-sm font-medium whitespace-nowrap">
                    {option.price}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Download Section */}
      <div className="relative bg-gradient-to-br from-background to-muted/50 rounded-3xl p-12 mb-12 shadow-lg border border-border/50">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)] -z-10" />
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-purple-500">
          資料ダウンロード
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-background/50 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <FileText className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">サービス詳細資料</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                制作の流れや具体的な事例、料金プランの詳細をご確認いただけます。
              </p>
              <Button className="w-full group">
                <Download className="mr-2 h-4 w-4" />
                <span>ダウンロード</span>
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-background/50 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <FileText className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">制作実績集</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                これまでの制作実績と、具体的な成果指標をまとめた資料です。
              </p>
              <Button className="w-full group">
                <Download className="mr-2 h-4 w-4" />
                <span>ダウンロード</span>
              </Button>
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
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-8">
            HP・LP制作に関するご相談は、お気軽にお問い合わせください。
            専門スタッフが丁寧にご対応いたします。
          </p>
          <Link href="/contact">
            <Button size="lg" className="group">
              <span>お問い合わせする</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Fixed CTA */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex gap-4">
        <Button size="lg" className="shadow-lg">
          <Download className="mr-2 h-5 w-5" />
          <span>資料ダウンロード</span>
        </Button>
        <Link href="/contact">
          <Button size="lg" className="shadow-lg group">
            <span>お問い合わせ</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </main>
  );
}