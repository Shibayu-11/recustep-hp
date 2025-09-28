// app/terms/page.tsx
"use client";

import { motion } from "framer-motion";
import { Building2, Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import FixedBottomFooter from "@/components/layout/FixedBottomFooter";

export default function TermsPage() {
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
                  特定商取引法に基づく表記
                </motion.h1>
                
                <motion.p
                  {...fadeInUp}
                  transition={{ delay: 0.1 }}
                  className="text-gray-600 text-lg mb-8"
                >
                  株式会社リクステップのサービスご利用にあたり、特定商取引法に基づく表記を以下に記載いたします。
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* メインコンテンツ */}
        <div className="container mx-auto px-8 sm:px-12 lg:px-16 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {/* 事業者情報 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-orange-600" />
                      事業者情報
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">販売業者</h3>
                        <p className="text-gray-600">株式会社リクステップ</p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">運営統括責任者</h3>
                        <p className="text-gray-600">柴 悠介</p>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-gray-400 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">所在地</h3>
                          <p className="text-gray-600">
                            大阪府和泉市<br />
                            （詳細住所はお問い合わせ時にお知らせいたします）
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2 inline-block mr-4">電話番号</h3>
                          <p className="text-gray-600 inline-block">090-2382-1811</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2 inline-block mr-4">メールアドレス</h3>
                          <p className="text-gray-600 inline-block">info@recustep.com</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* サービス・料金情報 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>サービス・料金に関する事項</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">販売価格</h3>
                      <p className="text-gray-600">
                        各サービスページに記載の価格（税込表示）<br />
                        ※プロジェクトの規模や要件により個別にお見積もりいたします
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">支払方法</h3>
                      <ul className="text-gray-600 list-disc list-inside space-y-1">
                        <li>銀行振込</li>
                        <li>クレジットカード決済</li>
                        <li>請求書払い（法人のみ）</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">支払時期</h3>
                      <p className="text-gray-600">
                        契約によって柔軟に対応
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* 納期・キャンセル */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>納期・キャンセルに関する事項</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">納期</h3>
                      <p className="text-gray-600">
                        プロジェクトの内容により異なりますが、契約締結後2〜8週間程度<br />
                        詳細な納期は個別にご相談・合意の上で決定いたします
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">キャンセル・返品について</h3>
                      <p className="text-gray-600">
                        サービスの特性上、着手後のキャンセルはお受けできません。<br />
                        ただし、以下の場合は除きます：
                      </p>
                      <ul className="text-gray-600 list-disc list-inside space-y-1 mt-2">
                        <li>弊社の責めに帰すべき事由により納期に大幅な遅延が生じた場合</li>
                        <li>仕様書で合意した内容と著しく異なる成果物が納品された場合</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* 免責事項 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>免責事項</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-gray-600 space-y-3">
                      <p>
                        当サービスの利用により発生した損害について、弊社の故意または重大な過失がある場合を除き、
                        いかなる損害についても責任を負いかねます。
                      </p>
                      <p>
                        サーバーの障害、インターネット回線の不具合等、弊社の管理下にない事象により
                        サービスが利用できない場合の損害については、責任を負いかねます。
                      </p>
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