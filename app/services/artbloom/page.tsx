"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ArtbloomPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <Link href="/" className="text-sm text-muted-foreground flex items-center gap-1 mb-4">
          <ArrowLeft className="h-4 w-4" />
          <span>トップページに戻る</span>
        </Link>
      </div>

      <section className="relative py-24 bg-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              アートに、収入と未来を。<br />
              空間に、物語と出会いを。
            </motion.h1>
            <motion.p
              className="mt-6 text-lg text-muted-foreground text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              若手アーティストの才能と想いを、空間を通じて社会へ届ける
              サブスクリプション型アートレンタルサービス
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Button size="lg" className="mt-8">
                ArtBloom公式サイトへ
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            <span className="text-indigo-500">1.</span> はじまりの想い
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            <span className="font-semibold">ArtBloom</span>は、「才能があっても発信の機会がない」「絵を売るために作品よりもマーケティングが求められる」そんな矛盾に苦しむ若手アーティストの声から生まれました。
          </p>
          <p className="mb-4 leading-relaxed text-gray-700">
            一方で、日常にアートがもっとあれば、きっと社会は豊かになる。無機質な空間に感性が宿ることで、会話が生まれ、人がやさしくなる。
          </p>
          <p className="leading-relaxed text-gray-700">
            私たちは、<strong>アートの"売買"ではなく、"循環"をつくりたい</strong>と考えました。
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            <span className="text-indigo-500">2.</span> ArtBloomが提供する仕組み
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            <span className="font-semibold">ArtBloom</span>は、アーティストと空間をつなぐ<strong>サブスクリプション型アートレンタルサービス</strong>です。企業や店舗が、毎月定額で作品をレンタルでき、一定期間ごとに新しい作品に入れ替わります。
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-gray-700">定額でアート作品をレンタル、定期的に入れ替え可能</li>
            <li className="text-gray-700">各作品にはアーティストの「ストーリーカード」を同封</li>
            <li className="text-gray-700">気に入った作品は購入も可能（レンタル費の一部が充当）</li>
            <li className="text-gray-700">アーティストとの対話・イベントの機会も創出</li>
          </ul>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            <span className="text-indigo-500">3.</span> アーティスト支援のしくみ
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            <span className="font-semibold">ArtBloom</span>の最大の使命は、<strong>アーティストが「描くこと」で生活できる環境</strong>をつくることです。
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-gray-700">作品登録3点までは無料、それ以降は売価の5%が掲載料</li>
            <li className="text-gray-700">サブスク収益に応じて売上保証積立金を分配</li>
            <li className="text-gray-700">「売れた数」ではなく「描いた数」「継続した努力」も評価</li>
            <li className="text-gray-700">一部のアーティストにはArtBloomからの依頼制作も実施予定</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            <span className="text-indigo-500">4.</span> 社会的意義と未来像
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            私たちは、ビジネスとしてだけでなく、<span className="font-semibold">「アート×福祉×教育」</span>の交点を見据えています。
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-gray-700"><strong>NPO法人による無償支援枠の設置：</strong>掲載料・送料を全額負担</li>
            <li className="text-gray-700"><strong>寄付型サブスク：</strong>企業レンタル費の一部で病院・福祉施設へ作品提供</li>
            <li className="text-gray-700"><strong>地方創生・教育連携：</strong>地方の学校・図書館にアートを届ける仕組み</li>
          </ul>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            <span className="text-indigo-500">5.</span> 最後に｜私たちが描く社会
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            アートには、人の心を動かす力があります。<br />
            でも、それが「売れた」「バズった」だけで評価される時代は、そろそろ終わりにしたい。
          </p>
          <p className="mb-4 leading-relaxed text-gray-700">
            ArtBloomは、作品の背景にある「想い」や「過程」こそ尊重し、その<strong>ストーリーごと空間に届ける</strong>サービスです。
          </p>
          <p className="mt-12 text-lg font-semibold">
            そして、アートが飾られている空間が<br className="sm:hidden" />
            「普通の風景」になる社会を目指して。
          </p>
          <p className="text-sm text-gray-600 mt-2">
            カフェにも、病院にも、学校にも、オフィスにも。<br />
            誰かが描いた一枚が、誰かの心を救う日が、きっとあると信じて。
          </p>
        </div>
      </section>
    </main>
  );
}