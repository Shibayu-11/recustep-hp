// app/services/metadata.ts

import { Metadata } from "next";

const title = "【大阪】ホームページ作成・事例・SEOに関するお役立ちコラム│株式会社リクステップ";
const description =
  "大阪のホームページ制作に関するお悩みを解決するコラム。制作会社の選び方から費用を抑えるコツ、SEO対策まで幅広く解説。短納期・サブスクリプション型のメリット、LINE・24時間サポートの活用法、レポート分析による改善方法を紹介しています。";

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
  alternates: {
    canonical: "https://recustep.com/columns",
  },
  openGraph: {
    title,
    description,
    url: "https://recustep.com/columns",
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