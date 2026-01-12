"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-white py-24 overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              お気軽に
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-purple-500 ml-2">
                ご相談ください
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              ビジネスの課題解決に向けて、まずはお話をお聞かせください。<br className="hidden sm:block" />
              専門スタッフが丁寧にご対応いたします。初回相談は無料です。
            </p>

            <div className="pt-6">
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 shadow-xl px-12 py-6 text-lg"
              >
                <Link href="/contact">
                  <span>お問い合わせはこちら</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground pt-4">
              お電話、メール、LINE、お問い合わせフォームからお選びいただけます
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
