// app/columns/homepage-osaka-guide/metadata.ts
import { Metadata } from "next";

const brandName = "株式会社リクステップ";
const title = "【大阪】相場より安いホームページ制作会社の探し方｜失敗しないコツも解説";
const fullTitle = `${title}｜${brandName}`;
const description =
  "大阪に拠点を構えるホームページ制作会社、株式会社リクステップです。こちらでは、短納期・相場より安い金額で依頼できるホームページ制作、依頼で失敗しないための見積りチェックリスト、ホームページの運用管理について、解説していきます。";

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
    canonical: "https://recustep.com/columns/homepage-osaka-guide",
  },
  openGraph: {
    title,
    description,
    url: "https://recustep.com/columns/homepage-osaka-guide",
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