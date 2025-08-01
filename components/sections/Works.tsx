"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users, Code, Palette, FileText, Utensils, TrendingUp, CheckCircle } from "lucide-react";

const works = [
  {
    title: "製造業A社様 - コーポレートサイトリニューアル",
    description: "従来のサイトでは企業の技術力や実績が十分に伝わらず、新規顧客獲得に課題を抱えていました。",
    solution: "企業の強みを明確に打ち出すデザイン設計、技術紹介ページの充実、導入事例の詳細化を実施。CMSを導入し、社内での情報更新も可能にしました。",
    results: "サイトリニューアル後、問い合わせ数が3倍に増加。特に技術系の問い合わせが大幅に向上し、新規案件の獲得につながりました。",
    tags: ["HP制作", "CMS導入", "SEO対策"],
    icon: <Building2 className="h-6 w-6 text-black dark:text-white" />,
    improvement: "300%",
    metric: "問い合わせ数"
  },
  {
    title: "IT企業B社様 - エンジニア採用支援",
    description: "急成長中のスタートアップで、優秀なエンジニアの採用が急務でしたが、採用ノウハウや工数が不足していました。",
    solution: "採用戦略の立案から求人原稿作成、面接代行まで一貫してサポート。技術力を適切に評価できる面接官を派遣し、候補者の適性を多角的に判断しました。",
    results: "6ヶ月間で20名以上のエンジニアを採用。面接代行により社内の業務負荷を大幅に軽減し、本業に集中できる環境を実現しました。",
    tags: ["採用支援", "面接代行", "技術評価"],
    icon: <Users className="h-6 w-6 text-black dark:text-white" />,
    improvement: "20名",
    metric: "採用成功"
  },
  {
    title: "小売業C社様 - 受発注管理システム開発",
    description: "手作業による受発注管理で、ミスの発生や処理時間の長さが課題となっていました。",
    solution: "既存業務フローを詳細に分析し、自動化可能な部分を特定。在庫管理との連携機能も含めた包括的なシステムを構築しました。",
    results: "受発注処理時間を80%削減し、ヒューマンエラーをほぼゼロに。売上データの可視化により、経営判断の迅速化も実現しました。",
    tags: ["システム開発", "業務効率化", "DX推進"],
    icon: <Code className="h-6 w-6 text-black dark:text-white" />,
    improvement: "80%",
    metric: "処理時間削減"
  },
  {
    title: "デザイン事務所D社様 - ArtBloom導入",
    description: "オフィス空間に彩りを加えたいが、アート作品の選定や管理に悩んでいました。",
    solution: "ArtBloomのサブスクリプションサービスを導入。オフィスの雰囲気に合わせた作品を定期的に提供し、季節やプロジェクトに応じて入れ替えを実施。",
    results: "来客からの評価が向上し、社員のモチベーション向上にも寄与。アーティストとの交流イベントも開催し、新しいビジネスアイデアの創出につながりました。",
    tags: ["アート事業", "空間デザイン", "ブランディング"],
    icon: <Palette className="h-6 w-6 text-black dark:text-white" />,
    improvement: "150%",
    metric: "満足度向上"
  },
  {
    title: "コンサル会社E社様 - 面接代行サービス",
    description: "専門性の高い人材の採用で、適切な評価基準の設定と面接官のスキル不足が課題でした。",
    solution: "業界経験豊富な面接官による代行サービスを提供。科学的な適性検査と組み合わせ、候補者の能力を多面的に評価しました。",
    results: "採用精度が大幅に向上し、入社後1年の定着率が95%に。採用にかかる工数も50%削減され、本業への集中が可能になりました。",
    tags: ["面接代行", "適性検査", "人材評価"],
    icon: <FileText className="h-6 w-6 text-black dark:text-white" />,
    improvement: "95%",
    metric: "定着率"
  },
  {
    title: "飲食店F社様 - 食ラボ活用",
    description: "地域の老舗和食店で、新規顧客の獲得と話題性の創出が課題でした。",
    solution: "食ラボを通じて近隣のイタリアンレストランとコラボ。和洋折衷の限定メニューを開発し、共同でイベントを開催しました。",
    results: "コラボイベントは大盛況で、両店舗とも新規顧客を獲得。SNSでの話題化により、メディアにも取り上げられ、地域活性化にも貢献しました。",
    tags: ["飲食店マッチング", "コラボ企画", "地域活性化"],
    icon: <Utensils className="h-6 w-6 text-black dark:text-white" />,
    improvement: "200%",
    metric: "集客増加"
  },
];

export default function Works() {
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
    <section id="works" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              サービス
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-purple-500 ml-2">
                ご利用例
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              様々な業界・規模のお客様にご利用いただいています。<br className="hidden sm:block" />
              具体的なサービス活用事例と成果をご紹介します。
            </p>
          </motion.div>
        </div>

        {/* Horizontal scroll container */}
        <div className="relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          >
            {works.map((work, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 w-96 snap-center"
              >
                <Card className="h-full border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 bg-white group relative overflow-hidden">
                  <CardContent className="p-8 relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-white shadow-md border border-gray-200 group-hover:bg-gray-50 transition-colors duration-500 flex-shrink-0">
                          {work.icon}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {work.tags.map((tag, tagIndex) => (
                            <Badge 
                              key={tagIndex} 
                              variant="secondary" 
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {/* Success metric */}
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                          {work.improvement}
                        </div>
                        <div className="text-xs text-gray-600">{work.metric}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                      {work.title}
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="relative">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-1 h-4 bg-red-400 rounded-full" />
                            <h4 className="text-sm font-semibold text-red-600">課題</h4>
                          </div>
                          <p className="text-sm leading-relaxed pl-3 border-l-2 border-red-100 text-gray-700">
                            {work.description}
                          </p>
                        </div>
                        
                        <div className="relative">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-1 h-4 bg-blue-400 rounded-full" />
                            <h4 className="text-sm font-semibold text-blue-600">ソリューション</h4>
                          </div>
                          <p className="text-sm leading-relaxed pl-3 border-l-2 border-blue-100 text-gray-700">
                            {work.solution}
                          </p>
                        </div>
                        
                        <div className="relative">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-1 h-4 bg-green-400 rounded-full" />
                            <h4 className="text-sm font-semibold text-green-600">成果</h4>
                          </div>
                          <p className="text-sm leading-relaxed pl-3 border-l-2 border-green-100 text-gray-700">
                            {work.results}
                          </p>
                        </div>
                      </div>
                      
                      {/* Success indicator */}
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm font-medium text-green-600">プロジェクト完了</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-primary" />
                          <span className="text-sm text-gray-600">継続サポート中</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Scroll indicators */}
          <div className="flex justify-center mt-6">
            <div className="flex gap-2">
              {works.map((_, index) => (
                <div key={index} className="w-2 h-2 rounded-full bg-muted-foreground/30" />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-20"
        >
          <Card className="bg-background/50 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-12">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                  あなたの成功事例を一緒に作りませんか？
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  お客様の課題に合わせた最適なソリューションをご提案いたします。<br className="hidden sm:block" />
                  まずはお気軽にご相談ください。
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="group px-8 py-4 text-lg">
                    <span>無料相談を始める</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                    ご利用例一覧を見る
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}