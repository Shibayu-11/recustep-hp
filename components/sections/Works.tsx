// app/(wherever)/sections/Works.tsx
"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Building2,
  Users,
  Code,
  Palette,
  FileText,
  Utensils,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

/* ===== データ ===== */
const works = [
  {
    title: "製造業A社様 - コーポレートサイトリニューアル",
    description:
      "従来のサイトでは企業の技術力や実績が十分に伝わらず、新規顧客獲得に課題を抱えていました。",
    solution:
      "企業の強みを明確に打ち出すデザイン設計、技術紹介ページの充実、導入事例の詳細化を実施。CMSを導入し、社内での情報更新も可能にしました。",
    results:
      "サイトリニューアル後、問い合わせ数が3倍に増加。特に技術系の問い合わせが大幅に向上し、新規案件の獲得につながりました。",
    tags: ["HP制作", "CMS導入", "SEO対策"],
    icon: <Building2 className="h-5 w-5 text-black" />,
    improvement: "300%",
    metric: "問い合わせ数",
  },
  {
    title: "IT企業B社様 - エンジニア採用支援",
    description:
      "急成長中のスタートアップで、優秀なエンジニアの採用が急務でしたが、採用ノウハウや工数が不足していました。",
    solution:
      "採用戦略の立案から求人原稿作成、面接代行まで一貫してサポート。技術力を適切に評価できる面接官を派遣し、候補者の適性を多角的に判断しました。",
    results:
      "6ヶ月間で20名以上のエンジニアを採用。面接代行により社内の業務負荷を大幅に軽減し、本業に集中できる環境を実現しました。",
    tags: ["採用支援", "面接代行", "技術評価"],
    icon: <Users className="h-5 w-5 text-black" />,
    improvement: "20名",
    metric: "採用成功",
  },
  {
    title: "小売業C社様 - 受発注管理システム開発",
    description:
      "手作業による受発注管理で、ミスの発生や処理時間の長さが課題となっていました。",
    solution:
      "既存業務フローを詳細に分析し、自動化可能な部分を特定。在庫管理との連携機能も含めた包括的なシステムを構築しました。",
    results:
      "受発注処理時間を80%削減し、ヒューマンエラーをほぼゼロに。売上データの可視化により、経営判断の迅速化も実現しました。",
    tags: ["システム開発", "業務効率化", "DX推進"],
    icon: <Code className="h-5 w-5 text-black" />,
    improvement: "80%",
    metric: "処理時間削減",
  },
  {
    title: "デザイン事務所D社様 - ArtBloom導入",
    description:
      "オフィス空間に彩りを加えたいが、アート作品の選定や管理に悩んでいました。",
    solution:
      "ArtBloomのサブスクリプションサービスを導入。オフィスの雰囲気に合わせた作品を定期的に提供し、季節やプロジェクトに応じて入れ替えを実施。",
    results:
      "来客からの評価が向上し、社員のモチベーション向上にも寄与。アーティストとの交流イベントも開催し、新しいビジネスアイデアの創出につながりました。",
    tags: ["アート事業", "空間デザイン", "ブランディング"],
    icon: <Palette className="h-5 w-5 text-black" />,
    improvement: "150%",
    metric: "満足度向上",
  },
  {
    title: "コンサル会社E社様 - 面接代行サービス",
    description:
      "専門性の高い人材の採用で、適切な評価基準の設定と面接官のスキル不足が課題でした。",
    solution:
      "業界経験豊富な面接官による代行サービスを提供。科学的な適性検査と組み合わせ、候補者の能力を多面的に評価しました。",
    results:
      "採用精度が大幅に向上し、入社後1年の定着率が95%に。採用にかかる工数も50%削減され、本業への集中が可能になりました。",
    tags: ["面接代行", "適性検査", "人材評価"],
    icon: <FileText className="h-5 w-5 text-black" />,
    improvement: "95%",
    metric: "定着率",
  },
  {
    title: "飲食店F社様 - 食ラボ活用",
    description:
      "地域の老舗和食店で、新規顧客の獲得と話題性の創出が課題でした。",
    solution:
      "食ラボを通じて近隣のイタリアンレストランとコラボ。和洋折衷の限定メニューを開発し、共同でイベントを開催しました。",
    results:
      "コラボイベントは大盛況で、両店舗とも新規顧客を獲得。SNSでの話題化により、メディアにも取り上げられ、地域活性化にも貢献しました。",
    tags: ["飲食店マッチング", "コラボ企画", "地域活性化"],
    icon: <Utensils className="h-5 w-5 text-black" />,
    improvement: "200%",
    metric: "集客増加",
  },
];

/* ===== アニメ設定 ===== */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export default function Works() {
  return (
    <section id="works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 見出し */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
              サービス
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-purple-500 ml-2">
                ご利用例
              </span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              様々な業界・規模のお客様にご利用いただいています。
              具体的なサービス活用事例と成果をご紹介します。
            </p>
          </motion.div>
        </div>

        {/* 横スクロールカード（カード小さめ＆文字も縮小） */}
        <div className="relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex gap-6 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-hide"
          >
            {works.map((work, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="flex-shrink-0 w-[19rem] snap-center"
              >
                <Card className="h-full border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 bg-white group relative overflow-hidden">
                  <CardContent className="p-6 relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-white shadow-sm border border-gray-200 group-hover:bg-gray-50 transition-colors duration-300 flex-shrink-0">
                          {work.icon}
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {work.tags.map((tag, tIdx) => (
                            <Badge
                              key={tIdx}
                              variant="secondary"
                              className="text-[10.5px] px-2 py-0.5"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* 成果メトリクス（SPは横並び・改行なし / sm以上は縦並び） */}
                      <div className="text-right sm:text-right">
                        <div className="flex items-baseline gap-1 whitespace-nowrap sm:flex-col sm:items-end sm:gap-0">
                          <span className="text-base sm:text-xl font-extrabold text-primary leading-none">
                            {work.improvement}
                          </span>
                          <span className="text-[10.5px] sm:text-[11px] text-gray-600 leading-none">
                            {work.metric}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* タイトル */}
                    <h3 className="text-lg font-bold mb-3 leading-snug group-hover:text-primary transition-colors duration-300">
                      {work.title}
                    </h3>

                    {/* 本文 */}
                    <div className="space-y-5">
                      <div className="space-y-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <div className="w-1 h-3.5 bg-red-400 rounded-full" />
                            <h4 className="text-[12px] font-semibold text-red-600">
                              課題
                            </h4>
                          </div>
                          <p className="text-[13px] leading-relaxed pl-3 border-l-2 border-red-100 text-gray-700">
                            {work.description}
                          </p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <div className="w-1 h-3.5 bg-blue-400 rounded-full" />
                            <h4 className="text-[12px] font-semibold text-blue-600">
                              ソリューション
                            </h4>
                          </div>
                          <p className="text-[13px] leading-relaxed pl-3 border-l-2 border-blue-100 text-gray-700">
                            {work.solution}
                          </p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <div className="w-1 h-3.5 bg-green-400 rounded-full" />
                            <h4 className="text-[12px] font-semibold text-green-600">
                              成果
                            </h4>
                          </div>
                          <p className="text-[13px] leading-relaxed pl-3 border-l-2 border-green-100 text-gray-700">
                            {work.results}
                          </p>
                        </div>
                      </div>

                      {/* フッター */}
                      <div className="flex items-center justify-between pt-3 border-t border-border">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-[12.5px] font-medium text-green-600">
                            プロジェクト完了
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <TrendingUp className="h-4 w-4 text-primary" />
                          <span className="text-[12.5px] text-gray-600">
                            継続サポート中
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* スクロールドット（ダミー） */}
          <div className="flex justify-center mt-5">
            <div className="flex gap-2">
              {works.map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-muted-foreground/30"
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <Card className="bg-background/50 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-10">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  あなたの成功事例を一緒に作りませんか？
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                  お客様の課題に合わせた最適なソリューションをご提案いたします。
                  まずはお気軽にご相談ください。
                </p>

                <Button size="lg" className="group px-7 py-4 text-base sm:text-lg">
                  <span>無料相談を始める</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}