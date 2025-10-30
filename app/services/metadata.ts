// app/services/metadata.ts

import { Metadata } from "next";

const title = "サービス一覧｜株式会社リクステップ";
const description =
  "株式会社リクステップが提供する各種サービスをご紹介。HP制作、アプリ開発、採用支援、システム開発、アート事業、飲食店支援など多岐にわたり対応。ビジネス課題を一気通貫で解決します。";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "リクステップ",
    "サービス一覧",
    "大阪 ホームページ制作",
    "アプリ開発",
    "採用支援",
    "システム開発",
    "アート事業",
    "飲食店支援",
  ],
  alternates: {
    canonical: "https://recustep.com/services",
  },
  openGraph: {
    title,
    description,
    url: "https://recustep.com/services",
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