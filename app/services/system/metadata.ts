// app/services/system/metadata.ts
import { Metadata } from "next";

const title = "業務効率化を実現するシステム開発支援";
const fullTitle = `${title}｜株式会社リクステップ`;
const description =
  "基幹システムから業務アプリ開発まで、要件定義・設計・開発・運用をワンストップで支援。SaaS連携や内製化支援で業務効率化とDXを加速させます。";

export const metadata: Metadata = {
  title: fullTitle,
  description,
  keywords: [
    "システム開発",
    "業務効率化",
    "業務改善",
    "DX支援",
    "業務システム",
    "SaaS連携",
    "内製化",
    "大阪",
  ],
  category: "service",
  alternates: {
    canonical: "https://recustep.com/services/system",
  },
  openGraph: {
    title: fullTitle,
    description,
    url: "https://recustep.com/services/system",
    siteName: "株式会社リクステップ",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://recustep.com/images/services/system-development.png",
        width: 1200,
        height: 630,
        alt: "業務効率化を実現するシステム開発支援",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description,
    images: ["https://recustep.com/images/services/system-development.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
