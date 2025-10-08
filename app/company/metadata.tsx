import { Metadata } from "next";

const title = "会社概要・アクセス";
const fullTitle = `${title}｜株式会社リクステップ`;
const description =
  "株式会社リクステップの企業情報。ミッション・バリュー、所在地、代表メッセージ、沿革、事業内容を掲載しています。大阪を拠点にWeb制作と採用支援を提供。";

export const metadata: Metadata = {
  title: fullTitle,
  description,
  keywords: [
    "会社概要",
    "企業情報",
    "大阪",
    "ホームページ制作会社",
    "採用支援会社",
    "アクセス",
    "沿革",
  ],
  alternates: {
    canonical: "https://recustep.com/company",
  },
  openGraph: {
    title: fullTitle,
    description,
    url: "https://recustep.com/company",
    siteName: "株式会社リクステップ",
    locale: "ja_JP",
    type: "profile",
    images: [
      {
        url: "https://recustep.com/images/company/visual-1.png",
        width: 1200,
        height: 630,
        alt: "株式会社リクステップの会社概要",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description,
    images: ["https://recustep.com/images/company/visual-1.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};