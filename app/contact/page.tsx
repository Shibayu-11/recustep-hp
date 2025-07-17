"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, ArrowRight, ArrowLeft, Clock, MessageCircle, CheckCircle, Building2 } from "lucide-react";
import { useState, useRef } from "react";
import { createClient } from '@supabase/supabase-js';
import Link from "next/link";

const supabase = createClient(
  'https://tfpvuxxoylxyhwlpepvm.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmcHZ1eHhveWx4eWh3bHBlcHZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzODczNzgsImV4cCI6MjA1OTk2MzM3OH0.eA18LoCaKK163khNdlfdECPu1H2HTFejUxPXXEbMu-w'
);

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = new FormData(formRef.current!);
      const { error } = await supabase
        .from('contact_forms')
        .insert({
          name: formData.get('name'),
          company: formData.get('company'),
          email: formData.get('email'),
          service: formData.get('service'),
          message: formData.get('message'),
        });

      if (error) throw error;

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
      {/* Simple light gray background */}
      <div className="absolute inset-0 bg-gray-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 sm:mb-8">
          <ArrowLeft className="h-4 w-4" />
          <span>トップページに戻る</span>
        </Link>

        {/* Hero Section - 控えめに調整 */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
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

        {/* Contact Methods - 控えめに調整 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {[
            {
              icon: <Phone className="h-6 w-6 text-primary" />,
              title: "お電話でのお問い合わせ",
              content: "080-6354-0254",
              description: "平日 9:00-18:00"
            },
            {
              icon: <Mail className="h-6 w-6 text-primary" />,
              title: "メールでのお問い合わせ",
              content: "info@recustep.com",
              description: "24時間受付"
            },
            {
              icon: <Clock className="h-6 w-6 text-primary" />,
              title: "営業時間",
              content: "平日 9:00-18:00",
              description: "土日祝日は休業"
            }
          ].map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm h-full">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                    {method.icon}
                  </div>
                  <h3 className="font-bold mb-2">{method.title}</h3>
                  <p className="text-lg font-semibold text-primary mb-1">{method.content}</p>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="space-y-6 sm:space-y-8">
              {/* Office Image */}
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-16 h-16 sm:w-24 sm:h-24 bg-primary/5 rounded-lg z-0" />
                <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-blue-500/5 rounded-lg z-0" />
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Our team"
                  className="w-full h-full object-cover relative z-10"
                />
              </div>

              {/* Contact Details */}
              <div className="grid gap-4 sm:gap-6">
                <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="p-2 sm:p-3 rounded-full bg-primary/10 flex-shrink-0">
                        <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-medium text-sm sm:text-base">メール</h3>
                        <p className="text-muted-foreground text-sm sm:text-base break-all">info@rikustep.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="p-2 sm:p-3 rounded-full bg-primary/10 flex-shrink-0">
                        <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm sm:text-base">電話</h3>
                        <p className="text-muted-foreground text-sm sm:text-base">080-6354-0254</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="p-2 sm:p-3 rounded-full bg-primary/10 flex-shrink-0">
                        <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm sm:text-base">所在地</h3>
                        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                          〒594-0013<br />
                          大阪府和泉市鶴山台1丁目12-27
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="p-2 sm:p-3 rounded-full bg-primary/10 flex-shrink-0">
                        <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm sm:text-base">オフィス</h3>
                        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                          〒530-0001<br />
                          大阪府大阪市北区梅田1-1-3<br className="sm:hidden" />
                          <span className="hidden sm:inline"> </span>大阪駅前第3ビル29階1-1-1号室
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md bg-primary/5 border-primary/10">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="p-2 sm:p-3 rounded-full bg-primary/10 flex-shrink-0">
                        <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm sm:text-base mb-2">迅速な対応をお約束</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          お問い合わせいただいた内容には、営業時間内であれば当日中、
                          営業時間外の場合は翌営業日までにご返信いたします。
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <Card className="border-0 shadow-lg bg-background/90 backdrop-blur-sm">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl">お問い合わせフォーム</CardTitle>
                <p className="text-sm text-muted-foreground">
                  以下のフォームにご記入いただき、送信してください。
                </p>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 p-3 sm:p-4 bg-green-500/10 text-green-500 rounded-lg text-sm sm:text-base border border-green-500/20"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>送信が完了しました。担当者より連絡させていただきます。</span>
                    </div>
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 p-3 sm:p-4 bg-red-500/10 text-red-500 rounded-lg text-sm sm:text-base border border-red-500/20"
                  >
                    送信に失敗しました。時間をおいて再度お試しください。
                  </motion.div>
                )}
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm sm:text-base">お名前 <span className="text-red-500">*</span></Label>
                    <Input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder="山田 太郎" 
                      required 
                      className="w-full text-sm sm:text-base h-10 sm:h-11 border focus:border-primary transition-colors" 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm sm:text-base">会社名</Label>
                    <Input 
                      type="text" 
                      id="company" 
                      name="company" 
                      placeholder="株式会社XXX" 
                      className="w-full text-sm sm:text-base h-10 sm:h-11 border focus:border-primary transition-colors" 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm sm:text-base">メールアドレス <span className="text-red-500">*</span></Label>
                    <Input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="you@example.com" 
                      required 
                      className="w-full text-sm sm:text-base h-10 sm:h-11 border focus:border-primary transition-colors" 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-sm sm:text-base">ご相談内容のカテゴリ <span className="text-red-500">*</span></Label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full border rounded-md px-3 py-2 sm:py-3 bg-background text-sm sm:text-base h-10 sm:h-11 focus:border-primary transition-colors"
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
                    <Label htmlFor="message" className="text-sm sm:text-base">お問い合わせ内容 <span className="text-red-500">*</span></Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="ご相談内容を詳しくご記入ください。&#10;・現在の課題&#10;・ご希望の納期&#10;・予算感&#10;など"
                      required
                      rows={6}
                      className="w-full text-sm sm:text-base resize-none border focus:border-primary transition-colors"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full group h-11 sm:h-12 text-sm sm:text-base shadow-md hover:shadow-lg" 
                    disabled={isSubmitting}
                  >
                    <span>{isSubmitting ? "送信中..." : "送信する"}</span>
                    {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />}
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    ご入力いただいた個人情報は、お問い合わせへの回答およびサービスのご案内のみに使用し、
                    適切に管理いたします。第三者への提供は行いません。
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </main>
  );
}