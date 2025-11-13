// app/columns/homepage-osaka-design/metadata.ts
import { Metadata } from "next";

const brandName = "株式会社リクステップ";
const title = "【大阪】デザインで成果を出すホームページ制作｜実際の事例も紹介";
const fullTitle = `${title}｜${brandName}`;
const description =
  "デザイン性と機能性に優れたホームページ制作に対応している、株式会社リクステップです。こちらでは、ホームページ制作においてデザインで成果を出す秘訣、業種別のホームページ制作事例、集客を意識したホームページ制作について、詳しく解説しています。";

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
    canonical: "https://recustep.com/columns/homepage-osaka-design",
  },
  openGraph: {
    title,
    description,
    url: "https://recustep.com/columns/homepage-osaka-design",
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