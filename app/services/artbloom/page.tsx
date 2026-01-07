import type { Metadata } from "next";
import ArtbloomPage from "./page.client";

const title = "ArtBloom｜アートのサブスク事業";
const fullTitle = `${title}｜株式会社リクステップ`;
const description =
  "ArtBloomはオフィスや店舗にアートを届けるサブスクリプションサービス。空間に合わせた作品提案とアーティスト支援で、企業価値とブランド体験を高めます。";

export const metadata: Metadata = {
  title: fullTitle,
  description,
  keywords: [
    "アートサブスク",
    "オフィスアート",
    "アーティスト支援",
    "空間デザイン",
    "ブランディング",
    "大阪",
  ],
  category: "service",
  alternates: {
    canonical: "https://recustep.com/services/artbloom",
  },
  openGraph: {
    title: fullTitle,
    description,
    url: "https://recustep.com/services/artbloom",
    siteName: "株式会社リクステップ",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://recustep.com/images/services/artbloom.png",
        width: 1200,
        height: 630,
        alt: "ArtBloom｜アートのサブスク事業",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description,
    images: ["https://recustep.com/images/services/artbloom.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ArtbloomRoutePage() {
  return <ArtbloomPage />;
}