import type { Metadata } from "next";
import SyokulabPage from "./page.client";

const title = "食ラボ｜飲食店マッチングアプリ";
const fullTitle = `${title}｜株式会社リクステップ`;
const description =
  "飲食店同士のコラボを生み出すマッチングアプリ『食ラボ』。メニュー開発やイベント連携を支援し、地域飲食店の新しい出会いと集客を実現します。";

export const metadata: Metadata = {
  title: fullTitle,
  description,
  keywords: [
    "飲食店アプリ",
    "マッチングサービス",
    "コラボ支援",
    "店舗集客",
    "地域活性化",
    "大阪",
  ],
  category: "service",
  alternates: {
    canonical: "https://recustep.com/services/syokulab",
  },
  openGraph: {
    title: fullTitle,
    description,
    url: "https://recustep.com/services/syokulab",
    siteName: "株式会社リクステップ",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://recustep.com/images/services/syokulab.png",
        width: 1200,
        height: 630,
        alt: "食ラボ｜飲食店マッチングアプリ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description,
    images: ["https://recustep.com/images/services/syokulab.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SyokulabRoutePage() {
  return <SyokulabPage />;
}