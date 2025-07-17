"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield, Clock, Zap, Sparkles, Star } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Simple light gray background */}
      <div className="absolute inset-0 bg-gray-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              私たちの
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-purple-500 ml-2">
                ビジョン
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              リクステップは、テクノロジーの力でビジネスの可能性を最大限に引き出し、
              お客様と共に成長することを目指しています。
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video lg:aspect-square order-2 lg:order-1"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-2xl z-0" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-2xl z-0" />
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/about/team-photo.jpg"
                alt="Our team"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">私たちについて</h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 leading-relaxed">
                リクステップは、「構造を変える力」を信じています。
                採用・仕組み・開発など、表面的な課題だけでなく、その背後にある"社会の前提"ごと組み替える。
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
                私たちは、現場と向き合いながら、意志ある企業や個人と共に、「仕方ない」を塗り替えていくチームです。
                ビジネスを通じて、構造そのものを変える。リクステップは、そんな挑戦を"当たり前"にしていきます。
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "2019", label: "設立年", gradient: "from-blue-500 to-cyan-500" },
                  { value: "10+", label: "スタッフ", gradient: "from-purple-500 to-pink-500" },
                  { value: "2", label: "拠点数", gradient: "from-green-500 to-emerald-500" },
                  { value: "24h", label: "サポート", gradient: "from-orange-500 to-red-500" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="text-center"
                  >
                    <div className={`text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${stat.gradient} mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}