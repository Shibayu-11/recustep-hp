// app/columns/homepage-osaka-benefits/metadata.ts
import { Metadata } from "next";

const brandName = "株式会社リクステップ";
const title = "【大阪】24時間メールを受け付けるホームページ作成会社を選ぶメリット";
const fullTitle = `${title}｜${brandName}`;
const description =
  "ホームページ制作や運営サポートに対応している、株式会社リクステップです。こちらでは、メールを24時間受け付けている制作会社を選ぶメリットや、依頼前に知っておきたい事前知識について、詳しく紹介しています。";

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
    canonical: "https://recustep.com/columns/homepage-osaka-benefits",
  },
  openGraph: {
    title,
    description,
    url: "https://recustep.com/columns/homepage-osaka-benefits",
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