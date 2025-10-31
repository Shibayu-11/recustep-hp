import { Metadata } from "next";

const title = "プライバシーポリシー";
const fullTitle = `${title}｜株式会社リクステップ`;
const description =
  "株式会社リクステップが定めるプライバシーポリシー。個人情報の利用目的や管理体制、お問い合わせ窓口についてご案内します。";

export const metadata: Metadata = {
  title: fullTitle,
  description,
  alternates: {
    canonical: "https://recustep.com/privacy",
  },
  openGraph: {
    title: fullTitle,
    description,
    url: "https://recustep.com/privacy",
    siteName: "株式会社リクステップ",
    locale: "ja_JP",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: fullTitle,
    description,
  },
  robots: {
    index: false,
    follow: true,
  },
};