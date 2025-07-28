import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '大阪のホームページ制作ならリクステップ｜HP・LP制作、システム開発、採用支援',
  description: '大阪・南大阪のホームページ制作会社リクステップ。大阪市・堺市・南大阪エリアを中心に、HP・LP制作から採用サイト、システム開発まで一貫サポート。問い合わせ数3倍UP実績多数。',
  
  // ファビコン設定
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  },
  
  // PWA設定
  manifest: '/favicon/site.webmanifest',
  
  // テーマカラー（リクステップのブランドカラー）
  themeColor: '#ff6b35',
  
  // Open Graph設定（大阪・南大阪SEO最適化）
  openGraph: {
    title: '大阪のホームページ制作ならリクステップ｜大阪市・堺市・南大阪対応',
    description: '大阪・南大阪のホームページ制作会社。大阪市・堺市・南大阪エリアを中心に、HP・LP制作から採用サイト、システム開発まで一貫サポート。',
    url: 'https://recustep.com',
    siteName: 'リクステップ - 大阪・南大阪のホームページ制作会社',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/favicon/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'リクステップ - 大阪・南大阪のホームページ制作会社'
      }
    ]
  },
  
  // Twitter Card設定
  twitter: {
    card: 'summary_large_image',
    title: '大阪のホームページ制作ならリクステップ｜大阪市・堺市・南大阪対応',
    description: '大阪全土対応のホームページ制作会社。大阪市・堺市・南大阪を中心に、HP・LP制作から採用サイト、システム開発まで一貫サポート。',
    images: ['/favicon/android-chrome-512x512.png']
  },
  
  // 検索エンジン用設定
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // 大阪・南大阪特化キーワード
  keywords: [
    'ホームページ制作 大阪',
    'ホームページ制作 南大阪',
    'HP制作 大阪',
    'HP制作 南大阪',
    'Web制作 大阪',
    'Web制作 南大阪',
    'ランディングページ 大阪',
    'ホームページ制作 大阪市',
    'ホームページ制作 堺市',
    'ホームページ制作 和泉市',
    'ホームページ制作 松原市',
    'ホームページ制作 羽曳野市',
    'システム開発 大阪',
    '採用サイト制作 大阪',
    '採用支援 大阪',
    'リクステップ',
    '大阪 制作会社',
    '南大阪 制作会社',
    '大阪 Web制作',
    '南大阪 Web制作'
  ],
  
  // 言語設定
  alternates: {
    canonical: 'https://recustep.com'
  },
  
  // その他の設定
  category: 'technology'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        {/* ローカルSEO用構造化データ */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "株式会社リクステップ",
              "description": "大阪・南大阪のホームページ制作会社。HP・LP制作、システム開発、採用支援を一貫提供。",
              "url": "https://recustep.com",
              "telephone": "090-2382-1811",
              "email": "info@recustep.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "大阪市",
                "addressRegion": "大阪府",
                "addressCountry": "JP"
              },
              "openingHours": "Mo-Fr 09:00-18:00",
              "areaServed": [
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
                "南大阪地域"
              ],
              "serviceType": [
                "ホームページ制作",
                "LP制作",
                "システム開発",
                "採用支援",
                "面接代行"
              ],
              "priceRange": "¥10,000-¥500,000",
              "image": "https://recustep.com/favicon/android-chrome-512x512.png",
              "founder": {
                "@type": "Person",
                "name": "柴 悠介"
              },
              "sameAs": [
                "https://recustep.com"
              ]
            })
          }}
        />
        
        {/* サービス用構造化データ */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "ホームページ制作サービス",
              "description": "大阪を中心としたホームページ制作、LP制作、システム開発サービス",
              "provider": {
                "@type": "LocalBusiness",
                "name": "株式会社リクステップ",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "和泉市",
                  "addressRegion": "大阪府"
                }
              },
              "areaServed": "大阪府",
              "serviceType": "ホームページ制作",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "JPY",
                "price": "10000",
                "description": "月額1,000円からのホームページ制作サービス"
              }
            })
          }}
        />
        
        {/* 基本メタタグ */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* 地理的メタタグ（大阪全域） */}
        <meta name="geo.region" content="JP-27" />
        <meta name="geo.placename" content="大阪府" />
        {/* 具体的な座標は削除してエリア全体をカバー */}
        
        {/* パフォーマンス最適化 */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
              {children}
            </main>
            {/* Footer コンポーネントは後で追加 */}
            {/* <Footer /> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}