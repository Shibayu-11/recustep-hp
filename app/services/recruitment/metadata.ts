import { Metadata } from "next";

const title = "採用支援・RPOで採用成果を最大化";
const fullTitle = `${title}｜株式会社リクステップ`;
const description =
  "新卒・中途・地方採用に強い伴走型の採用支援。採用戦略設計、母集団形成、選考設計、面接代行、定着支援までワンストップで支援します。";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "採用支援",
    "採用代行",
    "RPO",
    "母集団形成",
    "選考設計",
    "面接代行",
    "定着支援",
    "大阪",
  ],
  category: "service",
  alternates: {
    canonical: "https://recustep.com/services/recruitment",
  },
  openGraph: {
    title: fullTitle,
    description,
    url: "https://recustep.com/services/recruitment",
    siteName: "株式会社リクステップ",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://recustep.com/images/services/recruitment-support.png",
        width: 1200,
        height: 630,
        alt: "採用支援・RPOサービス",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description,
    images: ["https://recustep.com/images/services/recruitment-support.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
