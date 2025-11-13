// app/columns/homepage-osaka-estimate/metadata.ts
import { Metadata } from "next";

const brandName = "株式会社リクステップ";
const title = "【大阪】ホームページ制作の価格相場｜見積りを取る方法を解説";
const fullTitle = `${title}｜${brandName}`;
const description =
  "低予算でのホームページ制作に対応している、株式会社リクステップです。こちらでは、ホームページ制作の価格相場や費用の例、実際に見積りを取る方法、制作費を抑えるテクニックについて、詳しく解説していきます。";

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
    canonical: "https://recustep.com/columns/homepage-osaka-estimate",
  },
  openGraph: {
    title,
    description,
    url: "https://recustep.com/columns/homepage-osaka-estimate",
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