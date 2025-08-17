"use client";

import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, Layout, FileText, Search } from "lucide-react";
import Image from "next/image";

export default function HPLPPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 固定ヘッダー */}
      <Navbar />

      {/* ===== Hero：モバイル小さめ / 上タブ分の余白維持 ===== */}
      <section className="relative pt-[88px] lg:pt-[104px] pb-10 sm:pb-12 md:pb-16 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-[22px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-[-0.01em]">
              <span className="block">ホームページ制作で、</span>
              <span className="block">関西のビジネス成長を加速させる。</span>
            </h1>

            <p className="mt-5 sm:mt-6 text-[14px] sm:text-[15px] md:text-lg leading-[1.9] sm:leading-relaxed text-gray-700 max-w-3xl mx-auto">
              関西（大阪・兵庫・京都・奈良・滋賀・和歌山）の商圏と顧客行動に合わせて、
              <strong className="text-gray-900">「検索上位表示」</strong>と<strong className="text-gray-900">「地域集客」</strong>を重視。
              「問い合わせ / 来店 / 採用」などのKPIへ直結する<strong className="text-gray-900">構造設計・導線設計</strong>を実装します。
              見た目だけでなく、数字で“効く”Webサイトをつくります。
            </p>

            {/* KPI 指標：モバイルは余白/文字サイズを抑える */}
            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
              {[
                { value: "300+", label1: "制作実績", label2: "関西企業の成功事例" },
                { value: "98%", label1: "満足度・継続率", label2: "高いリピート率" },
                { value: "24h", label1: "迅速な対応体制", label2: "専任チームが伴走" },
              ].map((kpi, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-200 bg-white shadow-sm p-4 sm:p-6 text-center"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-gray-900">{kpi.value}</div>
                  <div className="mt-1 text-[13px] sm:text-[15px] font-semibold text-gray-900">
                    {kpi.label1}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">{kpi.label2}</div>
                </div>
              ))}
            </div>

            {/* CTA（モバイル小さめ） */}
            <div className="mt-8 sm:mt-10">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="px-7 sm:px-10 py-4 sm:py-6 text-[15px] sm:text-base rounded-xl"
                >
                  無料相談・お見積り
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== 情報設計・導線設計（中央配置 / 文面は左寄せ） ===== */}
      <section className="bg-white py-14 sm:py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900">
            関西の商圏と顧客行動に効く「情報設計」と「導線設計」
          </h2>
          <p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
            私たちはデザインの前に、まず<strong className="text-gray-900">「どんな人が、どの検索/導線で、何を期待して来訪し、
            どの意思決定を経て、どこに到達して欲しいのか」</strong>を徹底的に分解します。
            その上で、検索エンジンとユーザーの両方に“読み解きやすい”情報構造を設計し、
            コンバージョン（資料請求 / 来店予約 / 採用応募 / 問い合わせ）に最短で進む導線を組み立てます。
          </p>

          <div className="mt-6 sm:mt-8">
            <h3 className="text-[15px] sm:text-base font-bold text-gray-900">設計の中心に置くこと</h3>
            <ul className="mt-3 space-y-2 text-[14px] sm:text-[15px] text-gray-700 leading-7">
              <li>・検索キーワード群と来訪意図に合致したページ / セクション設計（SEO / AEO）</li>
              <li>・スマホ前提の視線移動とタップ距離を考えたCTA配置</li>
              <li>・MEO（地図検索）や広告 / オウンドの流入と、サイト内の役割分担</li>
              <li>・ページ速度・可読性・構造化データなど“裏側の品質”</li>
            </ul>
          </div>

          <div className="mt-6 sm:mt-8">
            <h3 className="text-[15px] sm:text-base font-bold text-gray-900">こんな課題に効きます</h3>
            <ul className="mt-3 space-y-2 text-[14px] sm:text-[15px] text-gray-700 leading-7">
              <li>・サイトはあるが、検索から流入がほとんど増えない</li>
              <li>・アクセスはあるのに、問い合わせ / 予約 / 応募に繋がらない</li>
              <li>・何を改善すれば数字が動くのか、根拠を持って説明できない</li>
            </ul>
            <p className="mt-5 sm:mt-6 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
              「ホームページ制作 関西」「業種名 + 地域」などの検索意図にまっすぐ応える構造を、企画段階から組み込みます。
              デザインは“伝わるための結果”であり、はじめにあるのは情報設計です。
            </p>
          </div>
        </div>
      </section>

      {/* ===== ホームページ制作の流れ（レイアウト維持 / モバイル縮小） ===== */}
      <section className="relative bg-gradient-to-br from-background to-muted/50 rounded-none md:rounded-3xl p-5 sm:p-6 md:p-12 shadow-none md:shadow-lg md:border md:border-border/50">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)] -z-10 pointer-events-none" />
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-700 to-black">
            ホームページ制作の流れ
          </h2>
          <p className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">
            関西での成功を導く5つのステップ
          </p>
          <p className="text-[14px] sm:text-lg text-muted-foreground leading-7 sm:leading-relaxed">
            関西での豊富な制作実績を基に、地域特性を活かした体系的なアプローチでプロジェクトを進行。
            各フェーズで専門チームが連携し、確実な成果を実現します。
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
          {[
            {
              step: "01",
              title: "ヒアリング・企画",
              description: "関西の市場環境を踏まえたヒアリングで、最適な戦略を立案します。",
              details: [
                "地域特性を活かした戦略立案",
                "競合他社の分析（関西エリア特化）",
                "ターゲット顧客の明確化",
                "SEO・AEO / MEO戦略の策定",
                "プロジェクト スケジュール調整",
              ],
              imageSrc: "/images/step/step01.png",
            },
            {
              step: "02",
              title: "要件定義・設計",
              description: "関西でのビジネス成功を見据えた、戦略的なサイト設計を行います。",
              details: [
                "関西向けUX/UI設計",
                "地域SEO構造の最適化",
                "モバイルファースト設計",
                "アクセシビリティ対応",
                "セキュリティ要件定義",
              ],
              imageSrc: "/images/step/step02.png",
            },
            {
              step: "03",
              title: "デザイン・開発",
              description:
                "ブランディングを意識した、高品質なデザイン・開発を実施。",
              details: [
                "地域性を活かしたデザイン",
                "レスポンシブ対応コーディング",
                "地域SEO・MEO対策実装",
                "表示速度の最適化",
                "品質テスト・検証",
              ],
              imageSrc: "/images/step/step03.png",
            },
            {
              step: "04",
              title: "公開・初期運用",
              description: "関西での集客効果を最大化する公開・運用を開始します。",
              details: [
                "本番環境での公開作業",
                "GA4 / Search Console設定",
                "Googleマップ最適化（MEO）",
                "初期パフォーマンス監視",
                "運用マニュアル提供",
              ],
              imageSrc: "/images/step/step04.png",
            },
            {
              step: "05",
              title: "継続運用・改善",
              description:
                "地域市場での長期的な成功を支える、継続的な運用・改善サポート。",
              details: [
                "定期的なパフォーマンス分析",
                "地域トレンドに合わせた改善提案",
                "コンテンツ更新サポート",
                "セキュリティ監視・保守",
                "新機能追加・拡張対応",
              ],
              imageSrc: "/images/step/step05.png",
            },
          ].map((phase, index) => (
            <div key={index} className="relative">
              <Card className="bg-white/30 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-xl hover:bg-white/40 transition-all duration-300">
                <CardContent className="p-5 sm:p-6 lg:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
                    {/* テキスト */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-4 sm:gap-6">
                        <div className="flex-shrink-0">
                          <div className="text-5xl sm:text-6xl font-bold text-gray-200">
                            {phase.step}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 sm:mb-3">
                            {phase.title}
                          </h3>
                          <p className="text-[14px] sm:text-base text-gray-600 mb-4 sm:mb-6 leading-7 sm:leading-relaxed">
                            {phase.description}
                          </p>
                          <div className="space-y-1.5 sm:space-y-2">
                            {phase.details.map((detail, i2) => (
                              <div key={i2} className="flex items-center gap-2.5 sm:gap-3">
                                <Check className="h-4 w-4 text-black flex-shrink-0" />
                                <span className="text-[13px] sm:text-sm text-gray-700">
                                  {detail}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* 画像 */}
                    <div className="lg:col-span-1">
                      <div className="w-full h-36 sm:h-48 lg:h-64 flex items-center justify-center">
                        <Image
                          src={phase.imageSrc}
                          alt={`${phase.title}のイメージ`}
                          width={600}
                          height={500}
                          className="w-full h-full object-contain select-none"
                          quality={100}
                          unoptimized
                          priority={index < 2}
                          draggable={false}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 区切り */}
              {index < 4 && (
                <div className="flex justify-center my-5 sm:my-6">
                  <div className="w-0.5 h-6 sm:h-8 bg-gray-300" />
                  <div className="absolute mt-5 sm:mt-6">
                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-gray-400" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ===== 料金プラン（レイアウト維持 / モバイル縮小） ===== */}
      <section className="relative bg-gradient-to-br from-background to-muted/50 rounded-none md:rounded-3xl p-5 sm:p-6 md:p-12 shadow-none md:shadow-lg md:border md:border-border/50">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">料金プラン</h2>
        <p className="text-[14px] sm:text-lg text-muted-foreground text-center mb-6 sm:mb-8 px-4">
          貴社のニーズに合わせたプランをご用意させていただきます。
          右記以外にも柔軟にアレンジできますのでご相談ください。
        </p>
        <p className="text-xs sm:text-sm text-muted-foreground text-center mb-10 sm:mb-12">
          ※総額の一括払いも可能です。※契約は2年単位、更新は1年単位
        </p>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto px-4 sm:px-6">
          {/* LP制作プラン */}
          <Card className="relative bg-background/50 backdrop-blur-sm shadow-md overflow-hidden flex flex-col">
            <div className="bg-gray-600 text-white p-5 sm:p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 flex items-center justify-center mb-3 sm:mb-4">
                  <FileText className="h-9 w-9 sm:h-12 sm:w-12 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">LP制作プラン</h3>
              </div>
            </div>
            <CardContent className="p-5 sm:p-6 flex-1 flex flex-col">
              <p className="text-[13px] sm:text-sm text-muted-foreground mb-5 sm:mb-6 text-center">
                ランディングページ制作に最適なプラン
              </p>
              <div className="mb-5 sm:mb-6 text-center">
                <div className="mb-2 sm:mb-3">
                  <span className="text-xs sm:text-sm text-muted-foreground">初期費用：</span>
                  <span className="text-xl sm:text-2xl font-bold ml-2">50,000</span>
                  <span className="text-base sm:text-lg">円</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                  <span className="text-xs sm:text-sm text-muted-foreground">+ 管理費（24ヶ月）</span>
                  <span className="text-xs sm:text-sm">月々</span>
                  <span className="text-xl sm:text-2xl font-bold text-primary">3,000</span>
                  <span className="text-base sm:text-lg">円</span>
                </div>
              </div>
              <ul className="space-y-2.5 sm:space-y-3 flex-1">
                {[
                  "ランディングページ（1ページ）制作",
                  "スマホ最適化（レスポンシブ対応）",
                  "月1回までのテキスト・画像差し替え",
                  "基本SEO構造",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-[13px] sm:text-sm">{t}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* 基本HPプラン */}
          <Card className="relative bg-background/50 backdrop-blur-sm shadow-md overflow-hidden flex flex-col">
            <div className="bg-gray-500 text-white p-5 sm:p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 flex items-center justify-center mb-3 sm:mb-4">
                  <Layout className="h-9 w-9 sm:h-12 sm:w-12 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">基本HPプラン</h3>
              </div>
            </div>
            <CardContent className="p-5 sm:p-6 flex-1 flex flex-col">
              <p className="text-[13px] sm:text-sm text-muted-foreground mb-5 sm:mb-6 text-center">
                一般的な企業サイト制作に最適なプラン
              </p>
              <div className="mb-5 sm:mb-6 text-center">
                <div className="mb-2 sm:mb-3">
                  <span className="text-xs sm:text-sm text-muted-foreground">初期費用：</span>
                  <span className="text-xl sm:text-2xl font-bold ml-2">100,000</span>
                  <span className="text-base sm:text-lg">円</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                  <span className="text-xs sm:text-sm text-muted-foreground">+ 管理費（24ヶ月）</span>
                  <span className="text-xs sm:text-sm">月々</span>
                  <span className="text-xl sm:text-2xl font-bold text-primary">5,000</span>
                  <span className="text-base sm:text-lg">円</span>
                </div>
              </div>
              <ul className="space-y-2.5 sm:space-y-3 flex-1">
                {[
                  "基本的なHPの制作（6ページまで）",
                  "基本的なSEO対策",
                  "AEO対応構造の設計",
                  "月3回までの更新対応",
                  "Google Search/GA4の設定・運用サポート",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-[13px] sm:text-sm">{t}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* SEO・AEO対策HPプラン */}
          <Card className="relative bg-background/50 backdrop-blur-sm shadow-md overflow-hidden flex flex-col">
            <div className="bg-gray-700 text-white p-5 sm:p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 flex items-center justify-center mb-3 sm:mb-4">
                  <Search className="h-9 w-9 sm:h-12 sm:w-12 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">SEO・AEO対策HPプラン</h3>
              </div>
            </div>
            <CardContent className="p-5 sm:p-6 flex-1 flex flex-col">
              <p className="text-[13px] sm:text-sm text-muted-foreground mb-5 sm:mb-6 text-center">
                本格的なSEO対策で上位表示を目指すプラン
              </p>
              <div className="mb-5 sm:mb-6 text-center">
                <div className="mb-2 sm:mb-3">
                  <span className="text-xs sm:text-sm text-muted-foreground">初期費用：</span>
                  <span className="text-xl sm:text-2xl font-bold ml-2">150,000</span>
                  <span className="text-base sm:text-lg">円</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                  <span className="text-xs sm:text-sm text-muted-foreground">+ 管理費（24ヶ月）</span>
                  <span className="text-xs sm:text-sm">月々</span>
                  <span className="text-xl sm:text-2xl font-bold text-primary">10,000</span>
                  <span className="text-base sm:text-lg">円</span>
                </div>
              </div>
              <ul className="space-y-2.5 sm:space-y-3 flex-1">
                {[
                  "基本的なHPの制作（8ページまで）",
                  "本格的なSEO対策運用",
                  "AEO対応構造の設計運用",
                  "月3回までの更新対応",
                  "継続的なサポート",
                  "Google Search/GA4の設定・運用サポート",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-[13px] sm:text-sm">{t}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* 共通CTA */}
        <div className="mt-10 sm:mt-12 text-center px-4">
          <Link href="/contact">
            <Button size="lg" className="px-9 sm:px-12 py-4 text-[15px] sm:text-lg shadow-xl rounded-xl">
              プランについてお問い合わせ
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
