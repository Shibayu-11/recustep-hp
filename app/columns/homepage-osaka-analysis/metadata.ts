// app/columns/homepage-osaka-analysis/metadata.ts
import { Metadata } from "next";

const brandName = "株式会社リクステップ";
const title = "【大阪】ホームページ制作後に重要なレポート作成｜効果測定の中身も解説";
const fullTitle = `${title}｜${brandName}`;
const description =
  "ホームページ制作・運用レポート作成に対応している、株式会社リクステップです。こちらでは、ホームページ制作にかかる費用を可視化する方法、レポートを出す際にかかる費用、改善点レポートの中身について詳しく解説いたします。";

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
    canonical: "https://recustep.com/columns/homepage-osaka-analysis",
  },
  openGraph: {
    title,
    description,
    url: "https://recustep.com/columns/homepage-osaka-analysis",
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