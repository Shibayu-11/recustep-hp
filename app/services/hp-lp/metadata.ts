// app/services/hp-lp/metadata.ts
import { Metadata } from "next";

const title = "関西で成果を出すホームページ制作サービス";
const fullTitle = `${title}｜株式会社リクステップ`;
const description =
  "大阪・京都・兵庫など関西圏の商圏に合わせたホームページ・LP制作。SEO/AEO/MEOとUI/UX改善で、問い合わせや予約につながるサイトを構築します。";

export const metadata: Metadata = {
  title: fullTitle,
  description,
  keywords: [
    "ホームページ制作",
    "LP制作",
    "Web制作会社",
    "SEO対策",
    "MEO対策",
    "AEO対策",
    "関西",
    "大阪",
  ],
  category: "service",
  alternates: {
    canonical: "https://recustep.com/services/hp-lp",
  },
  openGraph: {
    title: fullTitle,
    description,
    url: "https://recustep.com/services/hp-lp",
    siteName: "株式会社リクステップ",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://recustep.com/images/services/hp-lp-service.png",
        width: 1200,
        height: 630,
        alt: "関西の企業向けホームページ制作サービス",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description,
    images: ["https://recustep.com/images/services/hp-lp-service.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
