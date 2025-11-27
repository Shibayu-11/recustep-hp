// app/layout.tsx
import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
import "@/styles/representative-mask.css";

const googleSiteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
  process.env.GOOGLE_SITE_VERIFICATION;

export const viewport: Viewport = {
  themeColor: "#ff6b35",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://recustep.com"),
  title: {
    default: "【大阪】ホームページ制作からSEO対策まで対応｜株式会社リクステップ",
    template: "%s｜株式会社リクステップ",
  },
  description:
    "大阪でホームページ制作会社をお探しなら株式会社リクステップへ。短納期・24時間メール受け付け・SEO対策レポート付きのWeb制作。サブスクリプションプランや豊富な事例を兼ね備えいます。LINE連携対応、システム開発・アプリ制作・採用支援も一貫サポート。初回相談無料です。",
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
  alternates: {
    canonical: "https://recustep.com/",
  },
  verification: googleSiteVerification
    ? { google: googleSiteVerification }
    : undefined,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

        {/* Google Site Verification ▼▼ */}
        <meta
          name="google-site-verification"
          content="SoX_uz5g0e1W18KLyDraN4FK4KYE5p3QlXmWjjDYfqs"
        />

        {/* ▼▼ GA4（gtag.js） ▼▼ */}
        <Script
          id="ga4-src"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-B14ETBJZC4"
        />
        <Script id="ga4-inline" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B14ETBJZC4');
          `}
        </Script>

        {/* ▼▼ Microsoft Clarity ▼▼ */}
        <Script id="ms-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)}
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "u0nyfyrhys");
          `}
        </Script>
      </head>
      <body className="font-sans" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}

          {/* ==== 静的エクスポート用の「隠しリンク」：/lp をビルドに含めるため ==== */}
          <div className="hidden" aria-hidden="true">
            <Link href="/lp">27卒就活サポートLP</Link>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
