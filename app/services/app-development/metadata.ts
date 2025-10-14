import { Metadata } from "next";

const title = "アジャイルで伴走するアプリ開発支援";
const fullTitle = `${title}｜株式会社リクステップ`;
const description =
  "iOS・Androidのネイティブアプリ/ハイブリッドアプリ開発を企画から運用まで一貫支援。アジャイル開発とUI/UX改善でユーザー体験と事業成長を両立させます。";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "アプリ開発",
    "iOSアプリ",
    "Androidアプリ",
    "ハイブリッドアプリ",
    "アジャイル開発",
    "UI/UXデザイン",
    "モバイル開発",
    "大阪",
  ],
  category: "service",
  alternates: {
    canonical: "https://recustep.com/services/app-development",
  },
  openGraph: {
    title: fullTitle,
    description,
    url: "https://recustep.com/services/app-development",
    siteName: "株式会社リクステップ",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://recustep.com/images/services/app-development.png",
        width: 1200,
        height: 630,
        alt: "アジャイルで伴走するアプリ開発支援",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description,
    images: ["https://recustep.com/images/services/app-development.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};