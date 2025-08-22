"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative pt-24 md:pt-16 lg:pt-14 pb-20 overflow-hidden"
    >
      {/* 背景（薄いグレー） */}
      <div className="absolute inset-0 bg-gray-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 見出し */}
        <div className="max-w-3xl mb-6 md:mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold scroll-mt-24 md:scroll-mt-16"
          >
            About us
          </motion.h2>
        </div>

        {/* 本文＋画像（ネガティブマージン排除） */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-12 mb-16">
          {/* 左：本文 */}
          <div className="order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-base sm:text-lg text-muted-foreground mb-4 leading-relaxed">
                リクステップは、「構造を変える力」を信じています。採用・仕組み・開発など、表面的な課題だけでなく、その背後にある&quot;社会の前提&quot;ごと組み替える。
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
                私たちは、現場と向き合いながら、意志ある企業や個人と共に、「仕方ない」を塗り替えていくチームです。ビジネスを通じて、構造そのものを変える。リクステップは、そんな挑戦を&quot;当たり前&quot;にしていきます。
              </p>

              {/* 数値 */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "2017", label: "設立年" },
                  { value: "10+", label: "スタッフ" },
                  { value: "2", label: "拠点数" },
                  { value: "24h", label: "サポート" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.45 }}
                    className="text-center"
                  >
                    <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* 右：画像（モバイルで自然に収まるよう最大幅を制御） */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 max-w-[640px] w-full mx-auto lg:mx-0"
          >
            <div className="relative z-10">
              <img
                src="/images/about/team-photo.png"
                alt="Our team"
                className="w-full h-auto object-contain select-none pointer-events-none"
                draggable={false}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
