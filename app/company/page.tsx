// app/company/page.tsx
"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, MapPin, Phone, Mail, Clock, ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CompanyPage() {
  return (
    // 上だけ詰める（スマホはさらに近く）
    <main className="relative pt-8 md:pt-12 lg:pt-14 pb-20 md:pb-24 overflow-hidden">
      {/* 背景 */}
      <div className="absolute inset-0 bg-gray-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ===== タイトル ===== */}
        <div className="mb-8 md:mb-10 lg:mb-12 text-left -mt-2 md:-mt-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-3 text-black">
              COMPANY
            </h1>
            <p className="text-base sm:text-lg text-gray-600">会社概要</p>
          </motion.div>
        </div>

        {/* ===== 会社情報 ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 mb-16"
        >
          {/* 画像ブロック：スマホは1枚、md以上は2枚 */}
          <div className="relative">
            <div className="overflow-x-auto">
              <div className="flex flex-col items-start gap-8">
                {/* 1枚目：常時表示（原寸／はみ出す時は横スクロール） */}
                <img
                  src="/images/company/visual-1.png"
                  alt="Company visual 1"
                  className="block w-auto max-w-full h-auto select-none pointer-events-none"
                  draggable={false}
                  loading="eager"
                />
                {/* 2枚目：md以上で表示（スマホは非表示） */}
                <img
                  src="/images/company/visual-2.png"
                  alt="Company visual 2"
                  className="hidden md:block w-auto max-w-full h-auto select-none pointer-events-none"
                  draggable={false}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* 情報リスト */}
          <div className="space-y-6">
            {[
              { icon: <Building2 className="h-6 w-6 text-primary" />, title: "会社名", content: "株式会社リクステップ" },
              { icon: <User className="h-6 w-6 text-primary" />, title: "代表取締役", content: "柴　悠介" },
              { icon: <MapPin className="h-6 w-6 text-primary" />, title: "所在地", content: "〒594-0013\n大阪府和泉市鶴山台1丁目12-27" },
              { icon: <Phone className="h-6 w-6 text-primary" />, title: "電話番号", content: "090-2382-1811" },
              { icon: <Mail className="h-6 w-6 text-primary" />, title: "メールアドレス", content: "info@recustep.com" },
              { icon: <Clock className="h-6 w-6 text-primary" />, title: "営業時間", content: "平日 9:00-18:00" },
              { icon: <Building2 className="h-6 w-6 text-primary" />, title: "オフィス", content: "〒530-0001\n大阪府大阪市北区梅田1-1-3 大阪駅前第3ビル29階1-1-1号室" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.06, duration: 0.4 }}
                className="flex items-start gap-4 p-4 rounded-lg bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="p-2 rounded-lg bg-primary/10">{item.icon}</div>
                <div>
                  <h3 className="font-medium mb-1">{item.title}</h3>
                  <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ===== CTA ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center"
        >
          <Card className="relative bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-12">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">お問い合わせ</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  サービスに関するご質問やご相談は、お気軽にお問い合わせください。
                </p>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="group bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white shadow-lg px-8 py-4 text-lg"
                  >
                    <span>お問い合わせする</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}
