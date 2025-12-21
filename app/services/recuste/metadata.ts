import { Metadata } from "next";

const title = "リクステ｜就活生向けオールインワンアプリ";
const fullTitle = `${title}｜株式会社リクステップ`;
const description =
  "就活に必要な全てがここに。履歴書・ES作成、AI添削、資格学習、企業スカウト、専任CAサポートを搭載。内定獲得までを一貫支援する就活生向けアプリ『リクステ』。";

export const metadata: Metadata = {
  title: fullTitle,
  description,
  keywords: [
    "就活アプリ",
    "就職活動",
    "履歴書作成",
    "ES添削",
    "AI添削",
    "企業スカウト",
    "就活支援",
    "資格学習",
    "SPI対策",
    "キャリアアドバイザー",
  ],
  category: "service",
  alternates: {
    canonical: "https://recustep.com/services/recuste",
  },
  openGraph: {
    title: fullTitle,
    description,
    url: "https://recustep.com/services/recuste",
    siteName: "株式会社リクステップ",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://recustep.com/images/services/recuste.png",
        width: 1200,
        height: 630,
        alt: "リクステ｜就活生向けオールインワンアプリ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description,
    images: ["https://recustep.com/images/services/recuste.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
