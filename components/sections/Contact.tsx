"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, ArrowRight, Sparkles, MessageCircle, Clock, CheckCircle, Building2 } from "lucide-react";
import { useState, useRef } from "react";
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://tfpvuxxoylxyhwlpepvm.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmcHZ1eHhveWx4eWh3bHBlcHZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzODczNzgsImV4cCI6MjA1OTk2MzM3OH0.eA18LoCaKK163khNdlfdECPu1H2HTFejUxPXXEbMu-w'
);

export default function Contact() {
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
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Simple light gray background */}
      <div className="absolute inset-0 bg-gray-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              お気軽に
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-purple-500 ml-2">
                ご相談ください
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              ビジネスの課題解決に向けて、まずはお話をお聞かせください。<br className="hidden sm:block" />
              専門スタッフが丁寧にご対応いたします。初回相談は無料です。
            </p>
          </motion.div>
        </div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {[
            {
              icon: <Phone className="h-6 w-6" />,
              title: "お電話でのお問い合わせ",
              content: "080-6354-0254",
              description: "平日 9:00-18:00",
              gradient: "from-green-500 to-emerald-500",
              bgGradient: "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20"
            },
            {
              icon: <Mail className="h-6 w-6" />,
              title: "メールでのお問い合わせ",
              content: "info@recustep.com",
              description: "24時間受付",
              gradient: "from-blue-500 to-cyan-500",
              bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20"
            },
            {
              icon: <Clock className="h-6 w-6" />,
              title: "営業時間",
              content: "平日 9:00-18:00",
              description: "土日祝日は休業",
              gradient: "from-purple-500 to-pink-500",
              bgGradient: "from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20"
            }
          ].map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              <Card className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-gradient-to-br ${method.bgGradient} backdrop-blur-sm group h-full`}>
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${method.gradient} shadow-lg mb-4 group-hover:scale-110 transition-transform duration-500`}>
                    <div className="text-white">
                      {method.icon}
                    </div>
                  </div>
                  <h3 className="font-bold mb-2 group-hover:text-primary transition-colors duration-300">{method.title}</h3>
                  <p className="text-lg font-semibold text-primary mb-1">{method.content}</p>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid gap-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">メール</h3>
                      <p className="text-muted-foreground">info@protectedustep.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">電話</h3>
                      <p className="text-muted-foreground">080-6354-0254</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">所在地</h3>
                      <p className="text-muted-foreground">
                        〒594-0013
                        <br />
                        大阪府和泉市鶴山台1丁目12-27
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">オフィス</h3>
                      <p className="text-muted-foreground">
                        〒530-0001
                        <br />
                        大阪府大阪市北区梅田1-1-3 大阪駅前第3ビル29階1-1-1号室
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">迅速な対応をお約束</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        お問い合わせいただいた内容には、営業時間内であれば当日中、
                        営業時間外の場合は翌営業日までにご返信いたします。
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 shadow-xl bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>お問い合わせフォーム</CardTitle>
                <p className="text-sm text-muted-foreground">
                  以下のフォームにご記入いただき、送信してください。
                </p>
              </CardHeader>
              <CardContent>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 p-4 bg-green-500/10 text-green-500 rounded-lg border border-green-500/20"
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
                    className="mb-4 p-4 bg-red-500/10 text-red-500 rounded-lg border border-red-500/20"
                  >
                    送信に失敗しました。時間をおいて再度お試しください。
                  </motion.div>
                )}
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
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
                    <Label htmlFor="company">会社名</Label>
                    <Input 
                      type="text" 
                      id="company" 
                      name="company" 
                      placeholder="株式会社XXX" 
                      className="w-full border-2 focus:border-primary transition-colors" 
                    />
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
                    <span>{isSubmitting ? "送信中..." : "送信する"}</span>
                    {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />}
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
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
    </section>
  );
}