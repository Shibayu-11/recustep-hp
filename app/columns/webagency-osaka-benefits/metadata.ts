// app/columns/webagency-osaka-benefits/metadata.ts
import { Metadata } from "next";

const brandName = "株式会社リクステップ";
const title = "【大阪】サブスクリプションで利用できるweb制作会社を選ぶメリット";
const fullTitle = `${title}｜${brandName}`;
const description =
  "大阪に拠点を構えるweb制作会社、株式会社リクステップです。こちらでは、web制作会社を月額サブスクリプションで利用できるサービスとそのメリット、サブスクリプション型web制作サイトの選び方について、紹介しています。";

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
    canonical: "https://recustep.com/columns/webagency-osaka-benefits",
  },
  openGraph: {
    title,
    description,
    url: "https://recustep.com/columns/webagency-osaka-benefits",
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