"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, MessageCircle, CheckCircle, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = new FormData(e.currentTarget);
      
      // ここでフォーム送信処理を実装
      // 今回はダミーで成功として扱います
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      formRef.current?.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen py-16 sm:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              お気軽に
              <span className="block sm:inline bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-purple-500 sm:ml-2">
                ご相談ください
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
              ビジネスの課題解決に向けて、まずはお話をお聞かせください。<br className="hidden sm:block" />
              専門スタッフが丁寧にご対応いたします。初回相談は無料です。
            </p>
          </motion.div>
        </div>

        {/* Contact Methods Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto"
        >
          {/* LINE Card */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-green-400 to-green-600 text-white mb-6">
                <MessageCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">公式LINEで相談</h3>
              <p className="text-base text-muted-foreground mb-2 font-medium">リクステップ公式LINE</p>
              <p className="text-sm text-muted-foreground mb-6">24時間受付・気軽にメッセージ</p>
              
              <div className="space-y-4">
                <Link 
                  href="https://lin.ee/Dxtgx5Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-green-400 to-green-600 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  LINEで相談
                </Link>
                
                <div className="mt-4 p-4 bg-white rounded-lg border shadow-sm">
                  {/* 複数のパスを試すか、Base64エンコードされた画像を使用 */}
                  <img 
                    src="/images/line-qr-code.png"
                    alt="LINE QRコード"
                    className="w-24 h-24 mx-auto mb-4"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      // 画像が読み込めない場合は代替画像またはSVGを表示
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 96 96'%3E%3Crect width='96' height='96' fill='%23f0f0f0'/%3E%3Ctext x='48' y='48' text-anchor='middle' dy='0.3em' font-family='Arial' font-size='10' fill='%23666'%3EQRコード%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <p className="text-sm text-gray-600 font-medium">QRコードで友達追加</p>
                  <p className="text-xs text-gray-500 mt-1">スマートフォンでスキャンしてください</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Email Card */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white mb-6">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">メールでのお問い合わせ</h3>
              <p className="text-base text-muted-foreground mb-2 font-medium">info@recustep.com</p>
              <p className="text-sm text-muted-foreground mb-6">24時間受付</p>
              
              <Link 
                href="mailto:info@recustep.com"
                className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg hover:opacity-90 transition-opacity"
              >
                メールを送る
              </Link>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  お問い合わせフォーム
                </h2>
                <p className="text-muted-foreground">
                  下記フォームにご記入いただき、送信ボタンを押してください。<br />
                  営業時間内に担当者よりご連絡いたします。
                </p>
              </div>

              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 p-4 mb-6 bg-green-50 border border-green-200 rounded-lg text-green-800">
                  <CheckCircle className="h-5 w-5" />
                  <span>お問い合わせを受け付けました。ありがとうございます。</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 p-4 mb-6 bg-red-50 border border-red-200 rounded-lg text-red-800">
                  <AlertCircle className="h-5 w-5" />
                  <span>送信に失敗しました。もう一度お試しください。</span>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">お名前 <span className="text-red-500">*</span></Label>
                    <Input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder="山田 太郎" 
                      required 
                      className="w-full border-2 focus:border-primary transition-colors" 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">会社名・団体名</Label>
                    <Input 
                      type="text" 
                      id="company" 
                      name="company" 
                      placeholder="株式会社〇〇" 
                      className="w-full border-2 focus:border-primary transition-colors" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">メールアドレス <span className="text-red-500">*</span></Label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="you@example.com" 
                    required 
                    className="w-full border-2 focus:border-primary transition-colors" 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">ご相談内容のカテゴリ <span className="text-red-500">*</span></Label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full border-2 rounded-md px-3 py-2 bg-background focus:border-primary transition-colors"
                  >
                    <option value="">選択してください</option>
                    <option value="HP・LP制作">HP・LP制作</option>
                    <option value="システム開発">システム開発</option>
                    <option value="採用支援">採用支援</option>
                    <option value="面接代行サービス">面接代行サービス</option>
                    <option value="アート事業">アート事業</option>
                    <option value="飲食店マッチング">飲食店マッチング</option>
                    <option value="その他">その他</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">お問い合わせ内容 <span className="text-red-500">*</span></Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="ご相談内容を詳しくご記入ください。"
                    required
                    rows={4}
                    className="w-full resize-none border-2 focus:border-primary transition-colors"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full group bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 shadow-lg" 
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? '送信中...' : 'お問い合わせを送信'}</span>
                  {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            ※ 頂いたお問い合わせには、営業時間内（平日9:00-18:00）に順次ご返信いたします。<br />
            緊急のご相談は、公式LINEをご利用ください。
          </p>
        </motion.div>
      </div>
    </main>
  );
}