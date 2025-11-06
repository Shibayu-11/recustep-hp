"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Columns() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.6, duration: 0.6 }}
    className="text-center mt-0"
>
    <section id="columns"
      className="relative pt-8 pb-8 overflow-hidden"
    >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-background/50 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-10">
                  <div className="max-w-3xl mx-auto">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                      大阪のホームページ制作なら株式会社リクステップへ
                    </h3>
                    <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                        「大阪で価格相場より安いweb制作会社を探している」<br/>
                        「サブスクリプションで初期費用を抑えつつ、短納期での納品を依頼したい」
                    </p>

                    <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                        このようなお悩みをお持ちの方は、株式会社リクステップのコラムをご覧ください。
                    </p>

                    <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                        ホームページ制作会社の選び方から事例、費用を抑えるコツ、SEOのノウハウまで幅広く解説しています。また、レポートの分析による改善サポート、LINE連携や24時間メール受け付けのメリットも紹介しています。
                    </p>

                    <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                        ホームページ作成の専門家として、あなたのビジネスの成長をサポートします。
                    </p>
    
                    <Button asChild size="lg" className="group px-7 py-4 text-base sm:text-lg">
                    <Link href="/columns">
                        <span>コラム一覧へ</span>
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
        </div>
    </section>
    </motion.div>
  );
}
