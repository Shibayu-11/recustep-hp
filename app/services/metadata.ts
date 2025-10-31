// app/services/metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "サービス一覧",
  description:
    "株式会社リクステップが提供する各種サービスをご紹介。HP・LP制作、採用支援、システム開発、アート事業、飲食店支援など、幅広い課題を一気通貫で解決します。大阪・南大阪エリアを中心に全国対応。",
  keywords: [
    "リクステップ",
    "サービス一覧",
    "大阪 ホームページ制作",
    "アプリ開発",
    "採用支援",
    "システム開発",
    "アート事業",
    "飲食店支援",
    "南大阪",
    "堺市",
  ],
  alternates: {
    canonical: "https://recustep.com/services",
  },
  openGraph: {
    title: "サービス一覧｜株式会社リクステップ",
    description:
      "株式会社リクステップが提供する各種サービスをご紹介。HP・LP制作、採用支援、システム開発、アート事業、飲食店支援など、幅広い課題を一気通貫で解決します。大阪・南大阪エリアを中心に全国対応。",
    url: "https://recustep.com/services",
    siteName: "株式会社リクステップ",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://recustep.com/og/services.jpg", // 任意のOG画像をpublic/og/に配置
        width: 1200,
        height: 630,
        alt: "株式会社リクステップ - サービス一覧",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "サービス一覧｜株式会社リクステップ",
    description:
      "株式会社リクステップが提供する各種サービスをご紹介。HP・LP制作、採用支援、システム開発、アート事業、飲食店支援など、幅広い課題を一気通貫で解決します。",
    images: ["https://recustep.com/og/services.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "og:type": "website",
    "og:locale": "ja_JP",
    "og:site_name": "株式会社リクステップ",
  },
};
