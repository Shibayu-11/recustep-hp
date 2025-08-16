"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft, ArrowRight, Check, Code, Layout, Search, Smartphone, Database, Download,
  FileText, Palette, Users, Target, Gauge, Shield, Sparkles, Calendar, ShoppingCart,
  CreditCard, Calculator, MessageCircle, MapPin, Star, Clock, Award, TrendingUp
} from "lucide-react";
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

      {/* ←★ Top画像セクションは削除済み */}

      {/* 大阪・南大阪特化SEO・MEO対策セクション（ここが実質のHero） */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-6xl mx-auto"
          >
            {/* エリア特化バッジ */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">大阪・南大阪エリア専門</span>
              </div>
              <div className="flex items-center gap-1 bg-yellow-50 px-4 py-2 rounded-full">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-semibold text-yellow-700">地域No.1実績</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="text-primary">ホームページ制作</span> 大阪で
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent block sm:inline">
                売上を最大化する
              </span>
            </h1>

            <div className="text-xl sm:text-2xl text-gray-700 mb-10 max-w-5xl mx-auto leading-relaxed">
              <p className="mb-4">
                <strong>大阪・南大阪</strong>を中心に、<strong className="text-primary">検索上位表示</strong>と<strong className="text-primary">地域集客力</strong>を重視した
                ホームページ制作で、お客様のビジネス成長を加速させます
              </p>
              <p className="text-lg text-gray-600">
                南大阪エリア（堺市・和泉市・松原市・羽曳野市・藤井寺市・富田林市など）の地域特性を活かした戦略的なホームページを制作
              </p>
            </div>

            {/* 実績数値 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
              <motion.div
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="text-3xl font-bold text-primary mb-2">300+</div>
                <h3 className="font-bold text-gray-900 mb-1">制作実績</h3>
                <p className="text-sm text-gray-600">大阪企業様の成功事例</p>
              </motion.div>

              <motion.div
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <h3 className="font-bold text-gray-900 mb-1">満足度</h3>
                <p className="text-sm text-gray-600">リピート率業界最高水準</p>
              </motion.div>

              <motion.div
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="text-3xl font-bold text-primary mb-2">24h</div>
                <h3 className="font-bold text-gray-900 mb-1">サポート</h3>
                <p className="text-sm text-gray-600">迅速な対応体制</p>
              </motion.div>

              <motion.div
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="text-3xl font-bold text-primary mb-2">3倍</div>
                <h3 className="font-bold text-gray-900 mb-1">集客効果</h3>
                <p className="text-sm text-gray-600">平均的な向上率</p>
              </motion.div>
            </div>

            {/* 強み */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
              <motion.div
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <Search className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">SEO対策に特化</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  「ホームページ制作 大阪」「ホームページ制作 南大阪」などの地域キーワードで検索上位表示を実現。Googleアルゴリズムに最適化した構造設計
                </p>
              </motion.div>

              <motion.div
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">MEO対策で地域集客</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Googleマップ検索での上位表示で南大阪エリアからの集客を強化。地域密着型ビジネスの売上向上をサポート
                </p>
              </motion.div>

              <motion.div
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">成果重視の制作</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  単なるWebサイト制作ではなく、売上向上・集客増加・ブランディング強化など、具体的な成果を重視した戦略的制作
                </p>
              </motion.div>
            </div>

            {/* 対応エリア */}
            <motion.div
              className="bg-primary/5 rounded-2xl p-8 mb-10 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">大阪・南大阪エリア対応地域</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">📍 主要対応エリア</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>大阪市全域</strong>（中央区・北区・西区・天王寺区・浪速区・住吉区・東住吉区・平野区・生野区・東成区・阿倍野区・住之江区・西成区・港区・大正区・福島区・此花区・西淀川区・淀川区・東淀川区・都島区・旭区・城東区・鶴見区）
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>南大阪エリア</strong>：堺市・和泉市・松原市・羽曳野市・藤井寺市・富田林市・河内長野市・大阪狭山市・高石市・泉大津市・忠岡町・岸和田市・貝塚市・泉佐野市・泉南市・阪南市・太子町・河南町・千早赤阪村
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">🚀 実績の多いエリア</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center bg-white/50 rounded-lg px-3 py-2">
                      <span>堺市</span><span className="text-primary font-semibold">80+ 件</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/50 rounded-lg px-3 py-2">
                      <span>大阪市</span><span className="text-primary font-semibold">120+ 件</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/50 rounded-lg px-3 py-2">
                      <span>和泉市</span><span className="text-primary font-semibold">35+ 件</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/50 rounded-lg px-3 py-2">
                      <span>松原市</span><span className="text-primary font-semibold">25+ 件</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-6 text-center">
                ※その他の関西エリア（京都・兵庫・奈良・和歌山）もご相談ください
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-12 py-4 text-lg shadow-xl">
                  無料相談・お見積り
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 px-12 py-4 text-lg shadow-xl">
                <Download className="mr-2 h-6 w-6" />
                事例集ダウンロード
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* リクステップの強み */}
        <div className="relative bg-gradient-to-br from-background to-muted/50 rounded-3xl p-8 lg:p-12 shadow-lg border border-border/50">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)] -z-10" />
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-700 to-black">
              大阪でホームページ制作を選ぶ理由
            </h2>
            <p className="text-2xl font-bold mb-4 text-foreground">
              確かな技術力と地域密着で、お客様のビジネスを支えます
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              豊富な大阪企業様での制作実績と専門性の高いチーム体制で、お客様のビジネス課題を確実に解決します。地域特性を活かした戦略と最新技術で、長期的な成長をサポートします。
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
            {[
              {
                icon: <Search className="h-8 w-8 text-primary" />,
                title: "大阪特化のSEO戦略",
                description: "大阪・南大阪の地域性を活かした検索エンジン最適化で、ターゲット顧客にしっかりとリーチします。"
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "地域密着の専門チーム",
                description: "大阪を熟知したプロジェクトマネージャー、エンジニア、デザイナーが連携し、質の高い制作を実現。"
              },
              {
                icon: <Code className="h-8 w-8 text-primary" />,
                title: "最新技術と実績",
                description: "300件以上の大阪企業様での制作実績を基に、最適な技術選定と実装を行います。"
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
                title: "地域課題解決力",
                description: "大阪・南大阪の事業環境を理解し、地域特性に合わせた最適なソリューションを提案。"
              },
              {
                icon: <Gauge className="h-8 w-8 text-primary" />,
                title: "迅速な対応体制",
                description: "大阪拠点だからこそ実現できる、スピーディーな打ち合わせと柔軟な対応。"
              },
              {
                icon: <Shield className="h-8 w-8 text-primary" />,
                title: "長期サポート",
                description: "制作後も継続的な運用サポートと地域マーケットに合わせた改善提案。"
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

        {/* 導入による効果 */}
        <div className="relative bg-gradient-to-br from-background to-muted/50 rounded-3xl p-8 lg:p-12 shadow-lg border border-border/50">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)] -z-10" />
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-700 to-black">
            ホームページ制作による効果
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed max-w-3xl mx-auto">
            大阪・南大阪でのリクステップのホームページ制作により、お客様のビジネスに以下のような効果をもたらします。
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "地域集客力向上",
                description: "「大阪 + 業種」での検索上位表示により、地域顧客からの問い合わせが大幅増加。",
                icon: <Users className="h-12 w-12 text-primary" />
              },
              {
                title: "売上・利益の向上",
                description: "戦略的なホームページ制作により、平均3倍の売上向上を実現しています。",
                icon: <TrendingUp className="h-12 w-12 text-primary" />
              },
              {
                title: "ブランド認知度UP",
                description: "大阪・南大阪エリアでの企業認知度向上とブランディング強化を実現。",
                icon: <Sparkles className="h-12 w-12 text-primary" />
              },
              {
                title: "業務効率化",
                description: "自動化機能の導入により、営業・マーケティング業務の効率化を支援。",
                icon: <Gauge className="h-12 w-12 text-primary" />
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

        {/* ★ホームページ制作の流れ（要求どおり「変更なし」） */}
        <div className="relative bg-gradient-to-br from-background to-muted/50 rounded-3xl p-8 lg:p-12 shadow-lg border border-border/50">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)] -z-10" />
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-700 to-black">
              ホームページ制作の流れ
            </h2>
            <p className="text-2xl font-bold mb-4 text-foreground">
              大阪・南大阪での成功を導く5つのステップ
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              大阪での豊富な制作実績を基に、地域特性を活かした体系的なアプローチでプロジェクトを進行。各フェーズで専門チームが連携し、確実な成果を実現します。
            </p>
          </div>

          {/* カード式縦並びフロー */}
          <div className="max-w-6xl mx-auto space-y-8">
            {[
              {
                step: "01",
                title: "ヒアリング・企画",
                description: "大阪・南大阪の市場環境を踏まえたヒアリングで、最適な戦略を立案します。",
                details: [
                  "地域特性を活かした戦略立案",
                  "競合他社の分析（大阪エリア特化）",
                  "ターゲット顧客の明確化",
                  "SEO・MEO戦略の策定",
                  "プロジェクト スケジュール調整"
                ],
                imageSrc: "/images/step/step01.png"
              },
              {
                step: "02",
                title: "要件定義・設計",
                description: "大阪でのビジネス成功を見据えた、戦略的なサイト設計を行います。",
                details: [
                  "大阪・南大阪向けUX/UI設計",
                  "地域SEO構造の最適化",
                  "モバイルファースト設計",
                  "アクセシビリティ対応",
                  "セキュリティ要件定義"
                ],
                imageSrc: "/images/step/step02.png"
              },
              {
                step: "03",
                title: "デザイン・開発",
                description: "大阪企業様のブランディングを意識した、高品質なデザイン・開発を実施。",
                details: [
                  "大阪らしさを活かしたデザイン",
                  "レスポンシブ対応コーディング",
                  "地域SEO・MEO対策実装",
                  "表示速度の最適化",
                  "品質テスト・検証"
                ],
                imageSrc: "/images/step/step03.png"
              },
              {
                step: "04",
                title: "公開・初期運用",
                description: "大阪・南大阪での集客効果を最大化する公開・運用を開始します。",
                details: [
                  "本番環境での公開作業",
                  "Google Analytics・Search Console設定",
                  "Googleマイビジネス最適化",
                  "初期パフォーマンス監視",
                  "運用マニュアル提供"
                ],
                imageSrc: "/images/step/step04.png"
              },
              {
                step: "05",
                title: "継続運用・改善",
                description: "大阪市場での長期的な成功を支える、継続的な運用・改善サポート。",
                details: [
                  "定期的なパフォーマンス分析",
                  "地域トレンドに合わせた改善提案",
                  "コンテンツ更新サポート",
                  "セキュリティ監視・保守",
                  "新機能追加・拡張対応"
                ],
                imageSrc: "/images/step/step05.png"
              }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <Card className="bg-white/30 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-xl hover:bg-white/40 transition-all duration-300">
                  <CardContent className="p-6 lg:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                      {/* 左：テキスト */}
                      <div className="lg:col-span-2">
                        <div className="flex items-start gap-6">
                          <div className="flex-shrink-0">
                            <div className="text-6xl font-bold text-gray-200">{phase.step}</div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-black mb-3">{phase.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">{phase.description}</p>
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
                      {/* 右：画像 */}
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

                {/* 縦の区切り矢印 */}
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

        {/* 料金プラン */}
        <div className="relative bg-gradient-to-br from-background to-muted/50 rounded-3xl p-8 lg:p-12 shadow-lg border border-border/50">
          <h2 className="text-3xl font-bold mb-8 text-center">料金プラン</h2>
          <p className="text-lg text-muted-foreground text-center mb-8">
            貴社のニーズに合わせたプランをご用意させていただきます。
            右記以外にも柔軟にアレンジできますのでご相談ください。
          </p>
          <p className="text-sm text-muted-foreground text-center mb-12">
            ※総額の一括払いも可能です。※契約は2年単位、更新は1年単位
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <Card className="relative bg-background/50 backdrop-blur-sm shadow-md overflow-hidden flex flex-col">
              <div className="bg-gray-600 text-white p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <FileText className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">LP制作プラン</h3>
                </div>
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6 text-sm text-center">
                  ランディングページ制作に最適なプラン
                </p>
                <div className="mb-6 text-center">
                  <div className="mb-3">
                    <span className="text-sm text-muted-foreground">初期費用：</span>
                    <span className="text-2xl font-bold ml-2">50,000</span>
                    <span className="text-lg">円</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm text-muted-foreground">+ 管理費（24ヶ月）</span>
                    <span className="text-sm">月々</span>
                    <span className="text-2xl font-bold text-primary">3,000</span>
                    <span className="text-lg">円</span>
                  </div>
                </div>
                <ul className="space-y-3 flex-1">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">ランディングページ（1ページ）制作</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">スマホ最適化（レスポンシブ対応）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">月1回までのテキスト・画像差し替え</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">基本SEO構造</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative bg-background/50 backdrop-blur-sm shadow-md overflow-hidden flex flex-col">
              <div className="bg-gray-500 text-white p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <Layout className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">基本HPプラン</h3>
                </div>
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6 text-sm text-center">
                  一般的な企業サイト制作に最適なプラン
                </p>
                <div className="mb-6 text-center">
                  <div className="mb-3">
                    <span className="text-sm text-muted-foreground">初期費用：</span>
                    <span className="text-2xl font-bold ml-2">100,000</span>
                    <span className="text-lg">円</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm text-muted-foreground">+ 管理費（24ヶ月）</span>
                    <span className="text-sm">月々</span>
                    <span className="text-2xl font-bold text-primary">5,000</span>
                    <span className="text-lg">円</span>
                  </div>
                </div>
                <ul className="space-y-3 flex-1">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">基本的なHPの制作（6ページまで）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">基本的なSEO対策</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">AEO対応構造の設計</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">月3回までの更新対応</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Google Search/GA4の設定・運用サポート</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative bg-background/50 backdrop-blur-sm shadow-md overflow-hidden flex flex-col">
              <div className="bg-gray-700 text-white p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <Search className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">SEO・AEO対策HPプラン</h3>
                </div>
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6 text-sm text-center">
                  本格的なSEO対策で上位表示を目指すプラン
                </p>
                <div className="mb-6 text-center">
                  <div className="mb-3">
                    <span className="text-sm text-muted-foreground">初期費用：</span>
                    <span className="text-2xl font-bold ml-2">150,000</span>
                    <span className="text-lg">円</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm text-muted-foreground">+ 管理費（24ヶ月）</span>
                    <span className="text-sm">月々</span>
                    <span className="text-2xl font-bold text-primary">10,000</span>
                    <span className="text-lg">円</span>
                  </div>
                </div>
                <ul className="space-y-3 flex-1">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">基本的なHPの制作（8ページまで）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">本格的なSEO対策運用</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">AEO対応構造の設計運用</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">月3回までの更新対応</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">継続的なサポート</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Google Search/GA4の設定・運用サポート</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* 共通お問い合わせ */}
          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-12 py-4 text-lg shadow-xl">
                プランについてお問い合わせ
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div className="relative bg-white/30 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-200/50">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)] -z-10" />
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-700 to-black">
            大阪・南大阪でのホームページ制作のご相談
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-8">
              大阪・南大阪での集客・売上向上を目指すホームページ制作に関するご相談は、
              お気軽にお問い合わせください。地域を熟知した専門スタッフが丁寧にご対応いたします。
            </p>
            <Link href="/contact">
              <Button size="lg" className="group">
                <span>無料相談・お見積り</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* 固定CTA */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex gap-4">
        <Button size="lg" className="shadow-lg">
          <Download className="mr-2 h-5 w-5" />
          <span>事例集ダウンロード</span>
        </Button>
        <Link href="/contact">
          <Button size="lg" className="shadow-lg group">
            <span>大阪での無料相談</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </main>
  );
}
