"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Light overlay for better button visibility */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="container mx-auto px-4 py-20 sm:py-32 lg:py-40 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <motion.h1 
            className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight max-w-5xl mx-auto leading-tight text-white drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="block mb-2 sm:mb-4">変わり続ける企業に、</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-100">
              変わり続ける支援を。
            </span>
          </motion.h1>
          
          <motion.p
            className="mt-8 text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0 drop-shadow-md"
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
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-2 w-full sm:w-auto border-white/70 text-white hover:bg-white hover:text-black backdrop-blur-sm">
                お問い合わせ
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}