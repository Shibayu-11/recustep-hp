// app/privacy/page.tsx
"use client";

import { motion } from "framer-motion";
import { Shield, Eye, Lock, Users, FileText, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import FixedBottomFooter from "@/components/layout/FixedBottomFooter";

export default function PrivacyPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-100">
        {/* ヘッダー部分 */}
        <div className="pt-24 pb-12">
          <div className="container mx-auto px-8 sm:px-12 lg:px-16">
            <motion.div {...fadeInUp}>
              <div className="max-w-4xl mx-auto">
                <motion.h1
                  {...fadeInUp}
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                >
                  プライバシーポリシー
                </motion.h1>
                
                <motion.p
                  {...fadeInUp}
                  transition={{ delay: 0.1 }}
                  className="text-gray-600 text-lg mb-8"
                >
                  株式会社リクステップ（以下「当社」）は、お客様の個人情報の保護を重要視し、
                  個人情報保護法をはじめとする関連法令を遵守し、適切に取り扱います。
                </motion.p>
                
                <motion.div
                  {...fadeInUp}
                  transition={{ delay: 0.2 }}
                  className="text-right text-gray-500"
                >
                  制定日：2025年4月1日<br />
                  最終更新日：2025年7月1日
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* メインコンテンツ */}
        <div className="container mx-auto px-8 sm:px-12 lg:px-16 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              
              {/* 個人情報の定義 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-orange-600" />
                      第1条 個人情報の定義
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      本プライバシーポリシーにおいて「個人情報」とは、個人情報保護法第2条第1項に定義される
                      個人情報を指します。具体的には、生存する個人に関する情報であって、
                      当該情報に含まれる氏名、生年月日その他の記述により特定の個人を識別することができるものをいいます。
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* 個人情報の収集 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Eye className="h-5 w-5 text-orange-600" />
                      第2条 個人情報の収集方法
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">
                      当社は、以下の方法により個人情報を収集いたします：
                    </p>
                    <ul className="text-gray-600 list-disc list-inside space-y-2">
                      <li>お問い合わせフォームからの入力</li>
                      <li>お電話でのお問い合わせ</li>
                      <li>メールでのお問い合わせ</li>
                      <li>契約書・申込書等の書面への記入</li>
                      <li>面談・打ち合わせでの聞き取り</li>
                      <li>名刺交換</li>
                    </ul>
                    
                    <div className="mt-6">
                      <h3 className="font-semibold text-gray-900 mb-2">収集する個人情報の種類</h3>
                      <ul className="text-gray-600 list-disc list-inside space-y-1">
                        <li>氏名</li>
                        <li>会社名・部署名・役職</li>
                        <li>電話番号</li>
                        <li>メールアドレス</li>
                        <li>住所（法人所在地含む）</li>
                        <li>その他、サービス提供に必要な情報</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* 利用目的 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-orange-600" />
                      第3条 個人情報の利用目的
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      当社は、以下の目的のために個人情報を利用いたします：
                    </p>
                    <ol className="text-gray-600 list-decimal list-inside space-y-2">
                      <li>お客様への連絡、回答、情報提供</li>
                      <li>サービスの提供、契約の履行</li>
                      <li>お見積もり、提案書の作成・送付</li>
                      <li>アフターサポート、メンテナンス</li>
                      <li>新サービス・キャンペーンのご案内</li>
                      <li>統計資料の作成（個人を特定しない形）</li>
                      <li>その他、お客様との取引に関連する業務</li>
                    </ol>
                  </CardContent>
                </Card>
              </motion.div>

              {/* お問い合わせ窓口 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-orange-600" />
                      お問い合わせ窓口
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">
                      個人情報の取扱いに関するご質問・ご意見・苦情・開示請求等については、
                      以下の窓口までお問い合わせください：
                    </p>
                    
                    <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                      <p className="font-semibold text-gray-900">株式会社リクステップ 個人情報保護担当</p>
                      <p className="text-gray-600">電話：090-2382-1811</p>
                      <p className="text-gray-600">メール：info@recustep.com</p>
                      <p className="text-gray-600">受付時間：平日9:00-20:00（土日祝日除く）</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <FixedBottomFooter />
    </>
  );
}