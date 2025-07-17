"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Simple white background */}
      <div className="absolute inset-0 bg-white" />

      <div className="container mx-auto px-4 py-20 sm:py-32 lg:py-40 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          {/* Badge */}

          <motion.h1 
            className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight max-w-5xl mx-auto leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="block mb-2 sm:mb-4">変わり続ける企業に、</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-purple-500">
              変わり続ける支援を。
            </span>
          </motion.h1>
          
          <motion.p
            className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Webサイト制作、業務システム開発、採用支援を通じて、<br className="hidden sm:block" />
            企業ごとの成長段階や課題に合わせた最適なソリューションをワンストップで提供します。
          </motion.p>

          <motion.div 
            className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link href="/services">
              <Button size="lg" className="group bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white shadow-xl px-8 py-6 text-lg w-full sm:w-auto">
                <span>サービスを見る</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-2 w-full sm:w-auto">
                お問い合わせ
              </Button>
            </Link>
          </motion.div>

          {/* Process Steps - 色を削除 */}
          <motion.div 
            className="mt-16 sm:mt-24 w-full max-w-7xl mx-auto relative px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {/* Mobile: Horizontal scroll */}
            <div className="block lg:hidden">
              <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                {[
                  { 
                    step: "1", 
                    title: "ヒアリング", 
                    desc: "課題や目的、ターゲット層、既存業務などを確認し、目的と方向性を整理します。"
                  },
                  { 
                    step: "2", 
                    title: "要件・構成の整理", 
                    desc: "必要な構成（ページ数・機能・設計方針など）を明確化し、提案します。"
                  },
                  { 
                    step: "3", 
                    title: "プロトタイプの提示", 
                    desc: "ワイヤーフレーム、デザイン案、動作試作などを共有。現場の声を取り入れて調整します。"
                  },
                  { 
                    step: "4", 
                    title: "制作・実装", 
                    desc: "サイト構築またはシステム開発を行い、動作・表示を確認しながら進行します。"
                  },
                  { 
                    step: "5", 
                    title: "公開・運用サポート", 
                    desc: "公開設定・納品・引き渡し後の運用支援、追加対応も行います。継続的な改善提案も可能です。"
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 w-72 snap-center"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  >
                    <div className="bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 dark:border-white/10 h-full">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-xl bg-muted/50 shadow-lg flex items-center justify-center mb-4">
                          <div className="text-xl font-bold text-foreground">
                            {item.step}
                          </div>
                        </div>
                        
                        <h3 className="text-base font-bold mb-3">
                          {item.title}
                        </h3>
                        
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Scroll indicator */}
              <div className="flex justify-center mt-4">
                <div className="flex gap-2">
                  {[...Array(5)].map((_, index) => (
                    <div key={index} className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop: Grid layout */}
            <div className="hidden lg:grid lg:grid-cols-5 gap-8">
              {[
                { 
                  step: "1", 
                  title: "ヒアリング", 
                  desc: "課題や目的、ターゲット層、既存業務などを確認し、目的と方向性を整理します。"
                },
                { 
                  step: "2", 
                  title: "要件・構成の整理", 
                  desc: "必要な構成（ページ数・機能・設計方針など）を明確化し、提案します。"
                },
                { 
                  step: "3", 
                  title: "プロトタイプの提示", 
                  desc: "ワイヤーフレーム、デザイン案、動作試作などを共有。現場の声を取り入れて調整します。"
                },
                { 
                  step: "4", 
                  title: "制作・実装", 
                  desc: "サイト構築またはシステム開発を行い、動作・表示を確認しながら進行します。"
                },
                { 
                  step: "5", 
                  title: "公開・運用サポート", 
                  desc: "公開設定・納品・引き渡し後の運用支援、追加対応も行います。継続的な改善提案も可能です。"
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-white/20 dark:border-white/10 h-full">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-2xl bg-muted/50 shadow-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                        <div className="text-2xl font-bold text-foreground">
                          {item.step}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    
                    {/* Connection line for desktop */}
                    {index < 4 && (
                      <div className="hidden lg:block absolute left-full top-1/2 w-8 h-[2px] bg-border transform -translate-y-1/2 group-hover:bg-primary/50 transition-colors duration-300" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}