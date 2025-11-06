// app/columns/homepage-osaka-automation/metadata.ts
import { Metadata } from "next";

const brandName = "株式会社リクステップ";
const title = "【大阪】LINE連携に対応したホームページ作成｜自動化についても解説";
const fullTitle = `${title}｜${brandName}`;
const description =
  "ホームページとLINEの連携に対応している、株式会社リクステップです。こちらでは、ホームページとLINEを連携して売上につなげる方法、LINE連携によるホームページ作成の自動化や、問い合わせ数の改善について、詳しく紹介していきます。";

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
    canonical: "https://recustep.com/columns/homepage-osaka-automation",
  },
  openGraph: {
    title,
    description,
    url: "https://recustep.com/columns/homepage-osaka-automation",
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