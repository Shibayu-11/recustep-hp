"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, MapPin, Phone, Mail, Clock, Target, Award, ArrowRight, User, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CompanyPage() {
  return (
    <main className="relative py-24 overflow-hidden">
      {/* Simple light gray background */}
      <div className="absolute inset-0 bg-gray-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-purple-500">
                会社概要
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              テクノロジーの力でビジネスの可能性を最大限に引き出し、
              お客様と共に成長する企業を目指しています。
            </p>
          </motion.div>
        </div>

        {/* Company Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 mb-16"
        >
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-2xl z-0" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-2xl z-0" />
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Office"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20" />
            </div>
          </div>

          <div className="space-y-6">
            {[
              { icon: <Building2 className="h-6 w-6 text-primary" />, title: "会社名", content: "株式会社リクステップ" },
              { icon: <User className="h-6 w-6 text-primary" />, title: "代表取締役", content: "柴　悠介" },
              { icon: <MapPin className="h-6 w-6 text-primary" />, title: "所在地", content: "〒594-0013\n大阪府和泉市鶴山台1丁目12-27" },
              { icon: <Phone className="h-6 w-6 text-primary" />, title: "電話番号", content: "090-2382-1811" },
              { icon: <Mail className="h-6 w-6 text-primary" />, title: "メールアドレス", content: "info@recustep.com" },
              { icon: <Clock className="h-6 w-6 text-primary" />, title: "営業時間", content: "平日 9:00-18:00" },
              { icon: <Building2 className="h-6 w-6 text-primary" />, title: "オフィス", content: "〒530-0001\n大阪府大阪市北区梅田1-1-3 大阪駅前第3ビル29階1-1-1号室" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 p-4 rounded-lg bg-background/50 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-2 rounded-lg bg-primary/10">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-medium mb-1">{item.title}</h3>
                  <p className="text-muted-foreground whitespace-pre-line">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision & Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">ビジョン & ミッション</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              私たちが目指す未来と、その実現に向けた取り組み
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8" />,
                title: "ビジョン",
                content: "テクノロジーを通じて、すべての企業がデジタル時代で輝けるビジネスを創造する",
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20"
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "ミッション",
                content: "最新のテクノロジーと創造力で、お客様のビジネスの可能性を最大限に引き出し、持続的な成長をサポートする",
                gradient: "from-purple-500 to-pink-500",
                bgGradient: "from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
              >
                <Card className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-gradient-to-br ${item.bgGradient} backdrop-blur-sm group h-full`}>
                  <CardContent className="p-8">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.gradient} shadow-lg mb-4 group-hover:scale-110 transition-transform duration-500`}>
                      <div className="text-white">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {item.content}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-500 rounded-3xl blur-2xl opacity-20" />
            <Card className="relative bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-12">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6">お問い合わせ</h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    サービスに関するご質問やご相談は、お気軽にお問い合わせください。
                  </p>
                  
                  <Link href="/contact">
                    <Button size="lg" className="group bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white shadow-lg px-8 py-4 text-lg">
                      <span>お問い合わせする</span>
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </main>
  );
}