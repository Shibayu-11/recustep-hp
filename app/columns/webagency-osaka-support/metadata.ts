// app/columns/webagency-osaka-support/metadata.ts
import { Metadata } from "next";

const brandName = "株式会社リクステップ";
const title = "【大阪】保守・運用サポートが充実したweb制作会社の選び方を解説";
const fullTitle = `${title}｜${brandName}`;
const description =
  "サイトの保守・運用サポートに対応している、株式会社リクステップです。こちらでは、web制作会社がおこなう保守サポート、運用までweb制作会社に任せる方法、トラブル時に頼りになるweb制作サポートを探すコツについて紹介していきます。";

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
    canonical: "https://recustep.com/columns/webagency-osaka-support",
  },
  openGraph: {
    title,
    description,
    url: "https://recustep.com/columns/webagency-osaka-support",
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