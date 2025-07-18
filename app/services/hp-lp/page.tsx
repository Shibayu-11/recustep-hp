"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Check, Code, Layout, Search, Smartphone, Database, Download, FileText, Palette, Users, Target, Gauge, Shield, Sparkles, Calendar, ShoppingCart, CreditCard, Calculator, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function HPLPPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <Link href="/" className="text-sm text-muted-foreground flex items-center gap-1 mb-4">
          <ArrowLeft className="h-4 w-4" />
          <span>トップページに戻る</span>
        </Link>
      </div>

      {/* Hero Section with Background Image */}
      <section className="relative py-12 bg-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <Image
                src="/images/hp-hero-bg.png"
                alt="Webサイトの課題を、一気通貫で解決します"
                width={2400}
                height={800}
                className="w-full h-auto select-none pointer-events-none"
                priority
                quality={100}
                unoptimized={true}
                draggable={false}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  msUserSelect: 'none',
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* リクステップの強み Section */}
        <div className="relative bg-gradient-to-br from-background to-muted/50 rounded-3xl p-8 lg:p-12 shadow-lg border border-border/50">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)] -z-10" />
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-700 to-black">
              リクステップの強み
            </h2>
            <p className="text-2xl font-bold mb-4 text-foreground">
              確かな技術力と実績で、お客様のビジネスを支えます。
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              豊富な開発実績と専門性の高いチーム体制で、お客様のビジネス課題を確実に解決します。最新技術の活用と安定した保守運用で、長期的な成長をサポートします。
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
            {[
              {
                icon: <Search className="h-8 w-8 text-primary" />,
                title: "戦略的なSEO設計",
                description: "様々な業界・規模のサイト制作経験を活かし、最適なSEO戦略とソリューションを実現。"
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "専門チーム体制",
                description: "プロジェクトマネージャー、エンジニア、デザイナーが連携し、質の高い開発を実現。"
              },
              {
                icon: <Code className="h-8 w-8 text-primary" />,
                title: "最新技術の活用",
                description: "モダンな技術スタックを採用し、拡張性と保守性に優れたシステムを構築。"
              }
            ].map((item, index) => (
              <Card key={index} className="bg-white/30 backdrop-blur-sm border border-gray-200/50 shadow-md hover:shadow-lg hover:bg-white/40 transition-all">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
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
                icon: <Shield className="h-8 w-8 text-primary" />,
                title: "安定した保守運用",
                description: "開発後も継続的なサポートと改善提案で、システムの価値を最大化。"
              }
            ].map((item, index) => (
              <Card key={index} className="bg-background/50 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 導入による効果 Section */}
        <div className="relative bg-gradient-to-br from-background to-muted/50 rounded-3xl p-8 lg:p-12 shadow-lg border border-border/50">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)] -z-10" />
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-700 to-black">
            導入による効果
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed max-w-3xl mx-auto">
            リクステップのHP・LP制作により、お客様のビジネスに以下のような効果をもたらします。
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "エンゲージメント",
                description: "アクセス数やエンゲージメントを集計し、顧客数の増加に貢献いたします。",
                icon: <Users className="h-12 w-12 text-primary" />
              },
              {
                title: "リード獲得",
                description: "SEOやAEO対策に加えて興味を引くタイトルや内容で検索順位を上昇させます。",
                icon: <Target className="h-12 w-12 text-primary" />
              },
              {
                title: "ブランディング",
                description: "HPデザインを構築・強化し、顧客様に好印象を与えます。",
                icon: <Sparkles className="h-12 w-12 text-primary" />
              },
              {
                title: "売上向上",
                description: "サービスの販売促進につなげ、業績を向上させる。",
                icon: <ArrowRight className="h-12 w-12 text-primary" />
              }
            ].map((effect, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                className="group"
              >
                <Card className="bg-white/40 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-xl hover:bg-white/50 transition-all duration-300 transform hover:scale-[1.02] h-full">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="p-4 bg-primary/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        {effect.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                      {effect.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {effect.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 制作フロー Section */}
        <div className="relative bg-gradient-to-br from-background to-muted/50 rounded-3xl p-8 lg:p-12 shadow-lg border border-border/50">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)] -z-10" />
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-700 to-black">
              開発の流れ
            </h2>
            <p className="text-2xl font-bold mb-4 text-foreground">
              プロジェクトの成功を支える5つのステップ
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              リクステップでは、プロジェクトの成功に向けて体系的なアプローチを採用。各フェーズで専門チームが連携し、確実な成果を実現します。
            </p>
          </div>
          
          {/* カード式縦並びフロー */}
          <div className="max-w-6xl mx-auto space-y-8">
            {[
              {
                step: "01",
                title: "契約",
                description: "お客様の要望をお聞きし、最適なプランをご提案いたします。",
                details: [
                  "デザイン/構造の提案",
                  "要望の確認",
                  "お見積もり",
                  "支払い方法選択",
                  "自動更新設定"
                ],
                imageSrc: "/images/step/step01.png"
              },
              {
                step: "02", 
                title: "要件定義",
                description: "サイトの目的とターゲットを明確にし、最適な構成を設計します。",
                details: [
                  "競合分析",
                  "ターゲット設定", 
                  "サイト設計",
                  "制作スケジュール確定",
                  "品質管理体制"
                ],
                imageSrc: "/images/step/step02.png"
              },
              {
                step: "03",
                title: "設計・制作", 
                description: "デザインの確立からコーディングまで、高品質なサイトを制作します。",
                details: [
                  "デザインの確立",
                  "コーディング",
                  "SEO/AEO対策実装",
                  "セキュリティ設計",
                  "進捗可視化"
                ],
                imageSrc: "/images/step/step03.png"
              },
              {
                step: "04",
                title: "公開・運用",
                description: "サイトの公開と初期運用を行い、成果を確認します。",
                details: [
                  "公開",
                  "成果物提示",
                  "確認修正",
                  "パフォーマンス監視",
                  "初期費用決済"
                ],
                imageSrc: "/images/step/step04.png"
              },
              {
                step: "05",
                title: "継続運用",
                description: "長期的なサポートと継続的な改善でサイトの価値を向上させます。",
                details: [
                  "サーバー・ドメイン管理",
                  "サブスク費用のお支払い",
                  "継続的な改善",
                  "課金設定完了",
                  "長期サポート体制"
                ],
                imageSrc: "/images/step/step05.png"
              }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <Card className="bg-white/30 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-xl hover:bg-white/40 transition-all duration-300">
                  <CardContent className="p-6 lg:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                      {/* 左側：テキストコンテンツ */}
                      <div className="lg:col-span-2">
                        <div className="flex items-start gap-6">
                          {/* ステップ番号 */}
                          <div className="flex-shrink-0">
                            <div className="text-6xl font-bold text-gray-200">
                              {phase.step}
                            </div>
                          </div>
                          
                          {/* コンテンツ */}
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-black mb-3">{phase.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                              {phase.description}
                            </p>
                            
                            {/* 詳細リスト */}
                            <div className="space-y-2">
                              {phase.details.map((detail, detailIndex) => (
                                <div key={detailIndex} className="flex items-center gap-3">
                                  <Check className="h-4 w-4 text-black flex-shrink-0" />
                                  <span className="text-sm text-gray-700">{detail}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* 右側：画像 */}
                      <div className="lg:col-span-1">
                        <div className="w-full h-48 lg:h-64 flex items-center justify-center">
                          <Image
                            src={phase.imageSrc}
                            alt={`${phase.title}のイメージ`}
                            width={600}
                            height={500}
                            className="w-full h-full object-contain select-none"
                            quality={100}
                            unoptimized={true}
                            priority={index < 2}
                            draggable={false}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* 矢印（最後以外） */}
                {index < 4 && (
                  <div className="flex justify-center my-6">
                    <div className="w-0.5 h-8 bg-gray-300"></div>
                    <div className="absolute mt-6">
                      <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-gray-400"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="relative bg-gradient-to-br from-background to-muted/50 rounded-3xl p-8 lg:p-12 shadow-lg border border-border/50">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)] -z-10" />
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-700 to-black">
            料金プラン
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed max-w-3xl mx-auto">
            貴社のニーズに合わせたプランをご用意しています。
            右記以外にも柔軟にアレンジ可能ですのでご相談ください。
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto justify-center">
            {[
              {
                name: "LIGHT",
                description: "シンプルなランディングページ制作に最適なプラン",
                initialCost: "¥30,000",
                monthlyCost: "¥3,000",
                period: "/月（24ヶ月）",
                features: [
                  "ランディングページ（1ページ）制作",
                  "配置デザインのディレクション",
                  "スマホ最適化（レスポンシブ対応）",
                  "月1回までのテキスト・画像差し替え",
                  "基本SEO構造"
                ]
              },
              {
                name: "スタンダード",
                description: "一般的な企業サイトから本格的なSEO対策まで対応するプラン",
                initialCost: "¥100,000",
                monthlyCost: "¥5,000",
                period: "/月（24ヶ月）",
                features: [
                  "最大10ページまでの構築",
                  "CMS導入",
                  "お問い合わせフォーム",
                  "月3回までの更新対応",
                  "SNS連携",
                  "アクセス解析設定",
                  "本格的なSEO対策",
                  "AEO対応構造の設計",
                  "Google Search Console / GA4の設定・運用サポート"
                ],
                recommended: true
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative bg-background/50 backdrop-blur-sm ${plan.recommended ? 'border-primary' : 'border-0'} shadow-md h-full`}>
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">おすすめ</Badge>
                </div>
              )}
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6 text-sm">{plan.description}</p>
                <div className="mb-6">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-sm text-muted-foreground">初期費用</span>
                    <span className="text-3xl font-bold">{plan.initialCost}</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">{plan.monthlyCost}</span>
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-black flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button className="w-full">お問い合わせ</Button>
                </Link>
              </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Extension Options Section */}
        <div className="relative bg-gradient-to-br from-background to-muted/50 rounded-3xl p-8 lg:p-12 shadow-lg border border-border/50">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)] -z-10" />
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-700 to-black">
            オプションのご案内
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed max-w-4xl mx-auto">
            必要に応じて、予約受付・決済・会員制サイト・多言語対応など拡張機能を柔軟に組み合わせて開発できます。
          </p>
          {/* 改善点：2列レイアウトでより余裕のあるデザインに */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "お問い合わせフォーム",
                description: "自動返信メール・項目カスタマイズ・CSV出力対応",
                icon: <FileText className="h-8 w-8 text-primary" />
              },
              {
                title: "SEO・AEO対策",
                description: "構造化データ・サイトマップ・ページ速度最適化",
                icon: <Search className="h-8 w-8 text-primary" />
              },
              {
                title: "スマホ最適化",
                description: "レスポンシブ対応・表示速度最適化・画像圧縮",
                icon: <Smartphone className="h-8 w-8 text-primary" />
              },
              {
                title: "アニメーション",
                description: "動画表示・JavaScript・ローディングアニメーション",
                icon: <Sparkles className="h-8 w-8 text-primary" />
              },
              {
                title: "予約受付機能",
                description: "時間枠選択・バッティング制御・スケジュール管理",
                icon: <Calendar className="h-8 w-8 text-primary" />
              },
              {
                title: "簡易EC機能",
                description: "商品一覧・カート・注文受付（非ログイン制）",
                icon: <ShoppingCart className="h-8 w-8 text-primary" />
              },
              {
                title: "クレカ決済導入",
                description: "Stripe決済・月額課金・EC決済システム対応",
                icon: <CreditCard className="h-8 w-8 text-primary" />
              },
              {
                title: "会員ログイン",
                description: "ログイン認証機能・会員限定ページ・メンテナンス表示",
                icon: <Users className="h-8 w-8 text-primary" />
              },
              {
                title: "見積もりフォーム",
                description: "入力内容に応じた金額の自動計算・表示",
                icon: <Calculator className="h-8 w-8 text-primary" />
              },
              {
                title: "AIチャット機能",
                description: "AIチャット機能の構築・サイト内FAQ自動回答",
                icon: <MessageCircle className="h-8 w-8 text-primary" />
              },
              {
                title: "CMS導入",
                description: "WordPress・microCMS対応・マニュアル提供",
                icon: <Database className="h-8 w-8 text-primary" />
              }
            ].map((option, index) => (
              <Card key={index} className="bg-white/30 backdrop-blur-sm border border-gray-200/50 shadow-md hover:shadow-lg hover:bg-white/40 transition-all transform hover:scale-[1.02]">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                      {option.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2">{option.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{option.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 導入による効果 Section */}
        <div className="relative bg-gradient-to-br from-background to-muted/50 rounded-3xl p-8 lg:p-12 shadow-lg border border-border/50">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)] -z-10" />
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-700 to-black">
            導入による効果
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed max-w-3xl mx-auto">
            リクステップのHP・LP制作により、お客様のビジネスに以下のような効果をもたらします。
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "エンゲージメント",
                description: "アクセス数やエンゲージメントを集計し、顧客数の増加に貢献いたします。",
                icon: <Users className="h-12 w-12 text-primary" />
              },
              {
                title: "リード獲得",
                description: "SEOやAEO対策に加えて興味を引くタイトルや内容で検索順位を上昇させます。",
                icon: <Target className="h-12 w-12 text-primary" />
              },
              {
                title: "ブランディング",
                description: "HPデザインを構築・強化し、顧客様に好印象を与えます。",
                icon: <Sparkles className="h-12 w-12 text-primary" />
              },
              {
                title: "売上向上",
                description: "サービスの販売促進につなげ、業績を向上させる。",
                icon: <ArrowRight className="h-12 w-12 text-primary" />
              }
            ].map((effect, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                className="group"
              >
                <Card className="bg-white/40 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-xl hover:bg-white/50 transition-all duration-300 transform hover:scale-[1.02] h-full">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="p-4 bg-primary/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        {effect.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                      {effect.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {effect.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative bg-white/30 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-200/50">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)] -z-10" />
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-700 to-black">
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