// app/columns/homepage-osaka-speed/metadata.ts
import { Metadata } from "next";

const brandName = "株式会社リクステップ";
const title = "【大阪】短納期に対応できるホームページ制作会社｜依頼のコツも解説";
const fullTitle = `${title}｜${brandName}`;
const description =
  "短納期でのホームページ制作に対応している、株式会社リクステップです。こちらでは、ランディングページ制作・採用サイト制作を依頼する際のポイントや、それぞれの費用相場について解説しています。";

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
    canonical: "https://recustep.com/columns/homepage-osaka-speed",
  },
  openGraph: {
    title,
    description,
    url: "https://recustep.com/columns/homepage-osaka-speed",
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