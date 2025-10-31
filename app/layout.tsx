// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#ff6b35",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://recustep.com"),
  title: {
    default:
      "大阪のホームページ制作ならリクステップ｜HP・LP制作、システム開発、採用支援",
    template: "%s｜株式会社リクステップ",
  },
  description:
    "大阪・南大阪のホームページ制作会社リクステップ。大阪市・堺市・南大阪エリアを中心に、HP・LP制作から採用サイト、システム開発まで一貫サポート。問い合わせ数3倍UP実績多数。",
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico", sizes: "any" },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        url: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    title: "大阪のホームページ制作ならリクステップ｜大阪市・堺市・南大阪対応",
    description:
      "大阪・南大阪のホームページ制作会社。大阪市・堺市・南大阪エリアを中心に、HP・LP制作から採用サイト、システム開発まで一貫サポート。",
    url: "https://recustep.com",
    siteName: "リクステップ - 大阪・南大阪のホームページ制作会社",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        // metadataBase により絶対URLに解決されます
        url: "/favicon/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "リクステップ - 大阪・南大阪のホームページ制作会社",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "大阪のホームページ制作ならリクステップ｜大阪市・堺市・南大阪対応",
    description:
      "大阪・南大阪のホームページ制作会社。HP・LP制作から採用サイト、システム開発まで一貫サポート。",
    images: ["/favicon/android-chrome-512x512.png"],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 構造化データ（JSON-LD）
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "株式会社リクステップ",
    alternateName: "リクステップ",
    description:
      "大阪・南大阪を中心としたホームページ制作、システム開発、採用支援を行う会社",
    url: "https://recustep.com",
    telephone: "080-6354-0254",
    email: "info@recustep.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "大阪市",
      addressRegion: "大阪府",
      addressCountry: "JP",
    },
    openingHours: "Mo-Fr 09:00-18:00",
    areaServed: [
      "大阪府",
      "大阪市",
      "堺市",
      "和泉市",
      "松原市",
      "羽曳野市",
      "藤井寺市",
      "大阪狭山市",
      "富田林市",
      "河内長野市",
      "南大阪地域",
    ],
    serviceType: ["ホームページ制作", "LP制作", "システム開発", "採用支援", "面接代行"],
    priceRange: "¥10,000-¥500,000",
    image: "https://recustep.com/favicon/android-chrome-512x512.png",
    founder: {
      "@type": "Person",
      name: "柴 悠介",
    },
    sameAs: ["https://recustep.com"],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "ホームページ制作サービス",
    description:
      "大阪を中心としたホームページ制作、LP制作、システム開発サービス",
    provider: {
      "@type": "LocalBusiness",
      name: "株式会社リクステップ",
      address: {
        "@type": "PostalAddress",
        addressLocality: "大阪市",
        addressRegion: "大阪府",
        addressCountry: "JP",
      },
    },
    areaServed: ["大阪府", "大阪市", "堺市", "南大阪地域"],
    serviceType: [
      "コーポレートサイト制作",
      "ランディングページ制作",
      "採用サイト制作",
      "ECサイト制作",
      "システム開発",
    ],
  };

  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
