"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Building2, MapPin, Phone, Mail, Clock } from "lucide-react";
import FixedBottomFooter from "@/components/layout/FixedBottomFooter";

/* ====== コラム定義 ====== */
const columns = [
  {
    id: "homepage-osaka-design",
    title: "【大阪】デザインで成果を出すホームページ制作｜実際の事例も紹介",
    description:
      "デザイン性と機能性に優れたホームページ制作に対応している、株式会社リクステップです。こちらでは、ホームページ制作においてデザインで成果を出す秘訣、業種別のホームページ制作事例、集客を意識したホームページ制作について、詳しく解説しています。",
    href: "/columns/homepage-osaka-design",
    features: ["ホームページ制作", "大阪", "事例"],
  },
  {
    id: "homepage-osaka-estimate",
    title: "【大阪】ホームページ制作の価格相場｜見積りを取る方法を解説",
    description:
      "低予算でのホームページ制作に対応している、株式会社リクステップです。こちらでは、ホームページ制作の価格相場や費用の例、実際に見積りを取る方法、制作費を抑えるテクニックについて、詳しく解説していきます。",
    href: "/columns/homepage-osaka-estimate",
    features: ["ホームページ制作", "大阪", "価格"],
  },
  {
    id: "homepage-osaka-automation",
    title: "【大阪】LINE連携に対応したホームページ作成｜自動化についても解説",
    description:
      "ホームページとLINEの連携に対応している、株式会社リクステップです。こちらでは、ホームページとLINEを連携して売上につなげる方法、LINE連携によるホームページ作成の自動化や、問い合わせ数の改善について、詳しく紹介していきます。",
    href: "/columns/homepage-osaka-automation",
    features: ["ホームページ制作", "大阪", "LINE"],
  },
  {
    id: "homepage-osaka-benefits",
    title: "【大阪】24時間メールを受け付けるホームページ作成会社を選ぶメリット",
    description:
      "ホームページ制作や運営サポートに対応している、株式会社リクステップです。こちらでは、メールを24時間受け付けている制作会社を選ぶメリットや、依頼前に知っておきたい事前知識について、詳しく紹介しています。",
    href: "/columns/homepage-osaka-benefits",
    features: ["ホームページ制作", "大阪", "24時間"],
  },
  {
    id: "homepage-osaka-speed",
    title: "【大阪】短納期に対応できるホームページ制作会社｜依頼のコツも解説",
    description:
      "短納期でのホームページ制作に対応している、株式会社リクステップです。こちらでは、ランディングページ制作・採用サイト制作を依頼する際のポイントや、それぞれの費用相場について解説しています。",
    href: "/columns/homepage-osaka-speed",
    features: ["ホームページ制作", "大阪", "短納期"],
  },
  {
    id: "homepage-osaka-guide",
    title: "【大阪】相場より安いホームページ制作会社の探し方｜失敗しないコツも解説",
    description:
      "大阪に拠点を構えるホームページ制作会社、株式会社リクステップです。こちらでは、短納期・相場より安い金額で依頼できるホームページ制作、依頼で失敗しないための見積りチェックリスト、ホームページの運用管理について、解説していきます。",
    href: "/columns/homepage-osaka-guide",
    features: ["ホームページ制作", "大阪", "安い"],
  },
  {
    id: "webagency-osaka-benefits",
    title: "【大阪】サブスクリプションで利用できるweb制作会社を選ぶメリット",
    description:
      "大阪に拠点を構えるweb制作会社、株式会社リクステップです。こちらでは、web制作会社を月額サブスクリプションで利用できるサービスとそのメリット、サブスクリプション型web制作サイトの選び方について、紹介しています。",
    href: "/columns/webagency-osaka-benefits",
    features: ["web制作会社", "大阪", "サブスクリプション"],
  },
    {
    id: "webagency-osaka-support",
    title: "【大阪】保守・運用サポートが充実したweb制作会社の選び方を解説",
    description:
      "サイトの保守・運用サポートに対応している、株式会社リクステップです。こちらでは、web制作会社がおこなう保守サポート、運用までweb制作会社に任せる方法、トラブル時に頼りになるweb制作サポートを探すコツについて紹介していきます。",
    href: "/columns/webagency-osaka-support",
    features: ["web制作会社", "大阪", "サポート"],
  },
    {
    id: "homepage-osaka-analysis",
    title: "【大阪】ホームページ制作後に重要なレポート作成｜効果測定の中身も解説",
    description:
      "ホームページ制作・運用レポート作成に対応している、株式会社リクステップです。こちらでは、ホームページ制作にかかる費用を可視化する方法、レポートを出す際にかかる費用、改善点レポートの中身について詳しく解説いたします。",
    href: "/columns/homepage-osaka-analysis",
    features: ["ホームページ制作", "大阪", "レポート"],
  },
    {
    id: "homepage-osaka-insights",
    title: "【大阪】SEOに強いホームページ制作｜かかる費用や納期について解説",
    description:
      "SEOに強いホームページ制作に対応している、株式会社リクステップです。こちらでは、SEO重視のホームページ制作の例、ホームページ制作の実績紹介、SEOに強いホームページを作る際の納期目安について詳しく紹介いたします。",
    href: "/columns/homepage-osaka-insights",
    features: ["ホームページ制作", "大阪", "SEO"],
  },
];

/* columns画像の割り当て（拡張子を jpg で統一） */
const columnsSrc: Record<string, string> = {
  "homepage-osaka-design": "/images/columns/man-operating-laptop-office.jpg",
  "homepage-osaka-estimate": "/images/columns/calculator-pen-clipboard.jpg",
  "homepage-osaka-automation": "/images/columns/sending-message-smartphone.jpg",
  "homepage-osaka-benefits": "/images/columns/businessman-in-web-meeting.jpg",
  "homepage-osaka-speed": "/images/columns/young-business-people-meeting.jpg",
  "homepage-osaka-guide": "/images/columns/reasonable-card-on-pattern.jpg",
  "webagency-osaka-benefits": "/images/columns/two-women-design-review.jpg",
  "webagency-osaka-support": "/images/columns/young-technician-working-datacenter.jpg",
  "homepage-osaka-analysis": "/images/columns/cost-effectiveness-concept.jpg",
  "homepage-osaka-insights": "/images/columns/increasing-bar-graph-note.jpg",
};

export default function columnsPage() {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gray-50" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-12 lg:pt-14 pb-20">
          <header className="mt-1 md:mt-2 mb-8">
            <h1 className="text-left text-[11px] tracking-[0.18em] text-slate-400">
              BLOG
            </h1>
            <p className="mt-4 text-[13px] md:text-[14px] leading-7 text-gray-600">
              制作・運用の現場で得た知見や、成果につながる施策をまとめています。
              課題の整理から改善の打ち手まで、実務で使える視点をコンパクトに共有します。
              デザイン、導線、コンテンツ、SEOなど幅広いテーマを扱い、目的に合わせたヒントを提供します。
              はじめての担当者にも伝わる言葉で、要点を整理した読みやすい構成を意識しています。
              日々の運用にすぐ使える内容を中心に、継続的に更新しています。
            </p>
          </header>

          <section className="mt-6 md:mt-10">
            <div className="grid gap-y-14 md:gap-y-16">
              {chunk2(columns).map((row, rIdx) => (
                <div key={rIdx} className="grid md:grid-cols-2 gap-8 md:gap-10 items-start">
                  {row.map((svc) => (
                    <article key={svc.id} className="group">
                      <Link href={svc.href} className="block rounded-2xl overflow-hidden">
                        <div className="relative w-full aspect-[16/9]">
                          <Image
                            src={columnsSrc[svc.id] ?? "/images/columns/hp.jpg"}
                            alt={svc.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority={rIdx === 0}
                          />
                        </div>
                      </Link>

                      <h2 className="mt-5 text-2xl md:text-[24px] font-bold tracking-tight">
                        <Link href={svc.href} className="hover:text-primary transition-colors">
                          {svc.title}
                        </Link>
                      </h2>
                      <p className="mt-3 text-muted-foreground leading-relaxed">{svc.description}</p>

                      <ul className="mt-4 grid grid-cols-1 gap-2">
                        {svc.features.map((f) => (
                          <li key={f} className="flex items-start gap-2">
                            <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-primary/80" />
                            <span className="text-sm">{f}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4">
                        <Link href={svc.href} className="inline-flex items-center text-primary hover:opacity-90">
                          <span>詳しく見る</span>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </article>
                  ))}
                  {row.length === 1 && <div className="hidden md:block" />}
                </div>
              ))}
            </div>
          </section>

          <div className="mt-14">
<h2 className="mb-5 text-[20px] md:text-[24px] font-bold text-gray-800 pb-3 border-b-[3px] border-blue-500 relative leading-snug after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-[60px] after:md:w-[50px] after:h-[3px] after:bg-blue-800 mt-10">
大阪のホームページ制作なら株式会社リクステップ
</h2>
<div className="space-y-6">
{[
{ icon: <Building2 className="h-6 w-6 text-primary" />, title: "会社名", content: "株式会社リクステップ" },
{ icon: <MapPin className="h-6 w-6 text-primary" />, title: "オフィス", content: "〒590-0957\n大阪府堺市堺区中之町西２-1-22　パルテ堺501号" },
{ icon: <Phone className="h-6 w-6 text-primary" />, title: "電話番号", content: "090-2382-1811" },
{ icon: <Mail className="h-6 w-6 text-primary" />, title: "メールアドレス", content: "info@recustep.com" },
{ icon: <Clock className="h-6 w-6 text-primary" />, title: "営業時間", content: "平日 9:00-20:00" },
].map((item, i) => (
<motion.div
key={i}
initial={{ opacity: 0, x: 20 }}
animate={{ opacity: 1, x: 0 }}
transition={{ delay: 0.2 + i * 0.06, duration: 0.4 }}
className="flex items-start gap-4 p-4 rounded-lg bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
>
<div className="p-2 rounded-lg bg-primary/10">{item.icon}</div>
<div>
<h3 className="font-medium mb-1">{item.title}</h3>
<p className="text-gray-600 whitespace-pre-line">{item.content}</p>
</div>
</motion.div>
))}
</div>
</div>

          <div className="h-16" />
        </div>
      </main>
      <FixedBottomFooter />
    </>
  );
}

/* 2つずつに分割 */
function chunk2<T>(arr: T[]): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += 2) {
    out.push(arr.slice(i, i + 2));
  }
  return out;
}
