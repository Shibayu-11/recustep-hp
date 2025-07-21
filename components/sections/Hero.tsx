"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* Hero Image Section */}
      <section className="relative overflow-hidden min-h-screen pt-20 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        {/* Desktop Background Image */}
        <div className="absolute inset-0 hidden md:block w-full h-full">
          <Image
            src="/images/hero-image.png"
            alt="Hero Background"
            fill
            className="object-cover object-center pointer-events-none select-none"
            priority
            quality={100}
            draggable={false}
            style={{
              userSelect: 'none',
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none',
            }}
          />
        </div>

        {/* Mobile Background Image */}
        <div className="absolute inset-0 block md:hidden w-full h-full">
          <Image
            src="/images/hero-image-mobile.png"
            alt="Hero Background"
            fill
            className="object-cover object-center pointer-events-none select-none"
            priority
            quality={100}
            draggable={false}
            sizes="100vw"
            style={{
              userSelect: 'none',
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center center',
            }}
          />
        </div>

        {/* Bottom blur overlay - stronger for mobile */}
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-20 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />

        {/* Content positioned with proper spacing */}
        <div className="absolute bottom-0 left-0 right-0 md:bottom-auto md:left-auto md:right-[5%] md:top-[75%]">
          {/* Mobile Layout - Contact Button Only */}
          <div className="md:hidden pb-8 px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col">
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    className="w-full h-16 text-lg font-semibold bg-white hover:bg-gray-50 text-black shadow-xl rounded-lg border-0"
                  >
                    お問い合わせ
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Desktop Layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex md:flex-row md:gap-6"
          >
            <Link href="/services">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white shadow-xl px-12 py-12 text-xl w-64 min-w-64"
              >
                <span>サービスを見る</span>
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="px-12 py-12 text-xl border-2 w-64 min-w-64 border-gray-800 text-black bg-white/90 hover:bg-white hover:text-black shadow-xl backdrop-blur-sm"
              >
                お問い合わせ
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process Steps Section - Desktop Only */}
      <section className="bg-white py-20 hidden lg:block">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              私たちの進め方
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              お客様との対話を大切にし、段階的にプロジェクトを進めます
            </p>
          </motion.div>

          {/* Desktop: Grid layout */}
          <div className="grid lg:grid-cols-5 gap-8">
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
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 shadow-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                      <div className="text-2xl font-bold text-primary">
                        {item.step}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  
                  {/* Connection line for desktop */}
                  {index < 4 && (
                    <div className="hidden lg:block absolute left-full top-1/2 w-8 h-[2px] bg-gray-300 transform -translate-y-1/2 group-hover:bg-primary/50 transition-colors duration-300" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}