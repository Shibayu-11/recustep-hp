import { Metadata } from "next";

const title = "特定商取引法に基づく表記";
const fullTitle = `${title}｜株式会社リクステップ`;
const description =
  "株式会社リクステップの提供するサービスに関する特定商取引法の表示。事業者情報や料金、提供条件、キャンセルポリシーを掲載しています。";

export const metadata: Metadata = {
  title: fullTitle,
  description,
  alternates: {
    canonical: "https://recustep.com/terms",
  },
  openGraph: {
    title: fullTitle,
    description,
    url: "https://recustep.com/terms",
    siteName: "株式会社リクステップ",
    locale: "ja_JP",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: fullTitle,
    description,
  },
  robots: {
    index: false,
    follow: true,
  },
};