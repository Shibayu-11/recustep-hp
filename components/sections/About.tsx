"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield, Clock, Zap, Sparkles, Star } from "lucide-react";

const values = [
  {
    title: "本質へのこだわり",
    description: "見えている課題ではなく、その奥にある\"構造\"から捉えます。",
    icon: <CheckCircle className="h-6 w-6" />,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20"
  },
  {
    title: "現場からの実装",
    description: "仮説と試行を繰り返しながら、現場で動く仕組みをともに創ります。",
    icon: <Shield className="h-6 w-6" />,
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20"
  },
  {
    title: "共に挑む姿勢",
    description: "私たちは\"請負業者\"ではありません。クライアントと同じ視点で並走します。",
    icon: <Clock className="h-6 w-6" />,
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20"
  },
  {
    title: "持続する変化",
    description: "その場しのぎの対応ではなく、事業や社会に根づく解決策を目指します。",
    icon: <Zap className="h-6 w-6" />,
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20"
  },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

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

        {/* Values Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">私たちの価値観</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              リクステップが大切にしているのは、表面的な成果だけでなく、構造の奥から本質に迫る姿勢です。
              私たちは「共に考え、共に創る」パートナーとして、持続的で意味のある変化を支えていきます。
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -8 }}>
                <Card className={`h-full border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-gradient-to-br ${value.bgGradient} backdrop-blur-sm group`}>
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${value.gradient} shadow-lg mb-4 group-hover:scale-110 transition-transform duration-500`}>
                      <div className="text-white">
                        {value.icon}
                      </div>
                    </div>
                    <h4 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {value.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}