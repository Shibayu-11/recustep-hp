import { Metadata } from "next";

const title = "お問い合わせ・無料相談";
const fullTitle = `${title}｜株式会社リクステップ`;
const description =
  "ホームページ制作・システム開発・採用支援に関するご相談やお見積り依頼はこちら。オンライン・対面の打ち合わせにも柔軟に対応しています。";

export const metadata: Metadata = {
  title: fullTitle,
  description,
  keywords: [
    "お問い合わせ",
    "資料請求",
    "無料相談",
    "見積依頼",
    "大阪",
    "ホームページ制作",
    "システム開発",
    "採用支援",
  ],
  alternates: {
    canonical: "https://recustep.com/contact",
  },
  openGraph: {
    title: fullTitle,
    description,
    url: "https://recustep.com/contact",
    siteName: "株式会社リクステップ",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://recustep.com/images/hero/consult.jpg",
        width: 1200,
        height: 630,
        alt: "リクステップへのお問い合わせ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description,
    images: ["https://recustep.com/images/hero/consult.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
