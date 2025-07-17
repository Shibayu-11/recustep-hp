"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Code, Users, FileText, Palette, Building2, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    id: "hp-lp",
    title: "HP・LP制作",
    description: "企業紹介、サービス紹介、採用特化など、目的に応じた高品質なサイトを企画・制作。デザインとテクノロジーで企業の魅力を最大限に引き出します。",
    href: "/services/hp-lp",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
    illustration: "/images/services/hp-lp-service.jpg",
    features: ["レスポンシブデザイン", "CMS導入", "SEO最適化", "高速表示"]
  },
  {
    id: "system",
    title: "システム開発",
    description: "業務効率化や新規事業立ち上げのためのシステム開発を承ります。要件定義から設計、開発、保守まで一貫してサポートします。",
    href: "/services/system",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20",
    illustration: "/images/services/system-development.jpg",
    features: ["要件定義", "アジャイル開発", "クラウド対応", "保守運用"]
  },
  {
    id: "recruitment",
    title: "採用支援",
    description: "多種多様な人材の採用に関するあらゆる課題を解決します。求人サイト制作から採用戦略立案、面接、採用まで、企業の成長に必要な人材確保をサポートします。",
    href: "/services/recruitment",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
    illustration: "/images/services/recruitment-support.jpg",
    features: ["採用戦略立案", "求人サイト制作", "候補者スクリーニング", "内定者フォロー"]
  },
  {
    id: "interview",
    title: "面接代行サービス",
    description: "専門家による面接代行と科学的な適性検査で、最適な人材選考をサポート。採用精度の向上に貢献します。",
    href: "/services/interview",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20",
    illustration: "/images/services/interview-service.jpg",
    features: ["面接代行", "適性検査", "評価レポート", "採用コンサル"]
  },
  {
    id: "artbloom",
    title: "アートのサブスク事業",
    description: "ArtBloomは、アーティストと企業をつなぐ新しい形のアートサブスクリプションサービス。空間に彩りを添える作品を定期的に提供します。",
    href: "/services/artbloom",
    gradient: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20",
    illustration: "/images/services/artbloom-service.jpg",
    features: ["作品レンタル", "定期入れ替え", "アーティスト支援", "空間デザイン"]
  },
  {
    id: "syokulab",
    title: "飲食店マッチングアプリ「食ラボ」",
    description: "飲食店同士が自由にコラボできるプラットフォームを作り、地域活性化と店舗の集客支援。",
    href: "/services/syokulab",
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20",
    illustration: "/images/services/syokulab-service.jpg",
    features: ["店舗マッチング", "コラボ企画", "イベント運営", "集客支援"]
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Simple white background */}
      <div className="absolute inset-0 bg-white" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              ビジネスの成長を加速する
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-purple-500">
                6つのサービス
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              リクステップは、多様なサービスを通じて、お客様のビジネスの成長をトータルでサポートします。
              各サービスは単体でも、組み合わせても活用いただけます。
            </p>
          </motion.div>
        </div>

        {/* Alternating Services Layout */}
        <div className="space-y-24">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="relative"
              >
                <Link href={service.href}>
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Image Section */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}
                    >
                      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
                        {/* Decorative elements */}
                        <div className={`absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                        <div className={`absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                        
                        <img
                          src={service.illustration}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        
                        {/* Service number */}
                        <div className="absolute bottom-6 left-6">
                          <div className="text-6xl font-bold text-white/20 group-hover:text-white/30 transition-colors duration-500">
                            0{index + 1}
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                      whileHover={{ x: isEven ? 10 : -10 }}
                      transition={{ duration: 0.3 }}
                      className={`space-y-6 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                    >
                      <Card className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-gradient-to-br ${service.bgGradient} group/card relative overflow-hidden`}>
                        {/* Subtle background pattern */}
                        <div className="absolute inset-0 opacity-10 group-hover/card:opacity-15 transition-opacity duration-500">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-current to-transparent rounded-full blur-3xl" />
                        </div>
                        
                        <CardContent className="p-8 lg:p-10 relative z-10">
                          <div className="space-y-6">
                            {/* Header */}
                            <div className="space-y-4">
                              <div className="flex items-center gap-4">
                                <div className="text-4xl font-bold text-muted-foreground/30">
                                  0{index + 1}
                                </div>
                                <div className="h-px flex-1 bg-gradient-to-r from-muted-foreground/20 to-transparent" />
                              </div>
                              
                              <h3 className="text-3xl lg:text-4xl font-bold group-hover/card:text-primary transition-colors duration-300">
                                {service.title}
                              </h3>
                            </div>
                            
                            {/* Description */}
                            <p className="text-lg text-muted-foreground leading-relaxed">
                              {service.description}
                            </p>
                            
                            {/* Features */}
                            <div className="grid grid-cols-2 gap-3">
                              {service.features.map((feature, featureIndex) => (
                                <motion.div
                                  key={featureIndex}
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.1 * featureIndex, duration: 0.3 }}
                                  className="flex items-center gap-3"
                                >
                                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                                  <span className="text-sm font-medium">{feature}</span>
                                </motion.div>
                              ))}
                            </div>
                            
                            {/* CTA */}
                            <div className="flex items-center justify-between pt-4">
                              <Button 
                                variant="ghost" 
                                className="group/btn p-0 h-auto text-primary hover:bg-transparent font-semibold text-lg"
                              >
                                <span>詳しく見る</span>
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-2" />
                              </Button>
                              
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span>利用可能</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        
                        {/* Bottom accent line */}
                        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500 origin-${isEven ? 'left' : 'right'}`} />
                      </Card>
                    </motion.div>
                  </div>
                </Link>
                
                {/* Connection line to next service */}
                {index < services.length - 1 && (
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 hidden lg:block">
                    <div className="w-px h-24 bg-gradient-to-b from-muted-foreground/20 to-transparent" />
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-muted-foreground/30" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-32"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-500 rounded-3xl blur-3xl opacity-20" />
            <Card className="relative bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-12 lg:p-16">
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-4xl sm:text-5xl font-bold mb-8">
                    どのサービスが最適かわからない？
                  </h3>
                  <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                    お客様の課題やご要望をお聞かせください。<br className="hidden sm:block" />
                    最適なサービスの組み合わせを無料でご提案いたします。
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
                    <Link href="#contact">
                      <Button size="lg" className="group bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white shadow-xl px-10 py-6 text-xl">
                        <span>無料相談を予約する</span>
                        <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                    <Link href="/services">
                      <Button size="lg" variant="outline" className="px-10 py-6 text-xl border-2">
                        サービス一覧を見る
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span>初回相談無料</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span>オンライン対応</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500" />
                      <span>即日回答</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-500" />
                      <span>24時間受付</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}