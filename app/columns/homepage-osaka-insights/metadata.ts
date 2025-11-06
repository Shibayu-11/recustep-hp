// app/columns/homepage-osaka-insights/metadata.ts
import { Metadata } from "next";

const brandName = "株式会社リクステップ";
const title = "【大阪】SEOに強いホームページ制作｜かかる費用や納期について解説";
const fullTitle = `${title}｜${brandName}`;
const description =
  "SEOに強いホームページ制作に対応している、株式会社リクステップです。こちらでは、SEO重視のホームページ制作の例、ホームページ制作の実績紹介、SEOに強いホームページを作る際の納期目安について詳しく紹介いたします。";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "ホームページ制作",
    "大阪",
    "事例",
    "価格",
    "レポート",
    "SEO",
    "LINE",
    "24時間",
    "短納期",
    "安い",
    "サブスクリプション",
    "サポート",
    "web制作会社",
  ],
  category: "columns",
  alternates: {
    canonical: "https://recustep.com/columns/homepage-osaka-insights",
  },
  openGraph: {
    title,
    description,
    url: "https://recustep.com/columns/homepage-osaka-insights",
    siteName: "株式会社リクステップ",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};