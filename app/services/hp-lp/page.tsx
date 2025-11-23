import HPLPPage from "./page.client";

export { metadata } from "./metadata";

export default function HPLPRoutePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ホームページ・LP制作サービス",
    "provider": {
      "@type": "Organization",
      "name": "株式会社リクステップ",
      "url": "https://recustep.com",
      "logo": "https://recustep.com/images/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "大阪府",
        "addressCountry": "JP"
      }
    },
    "areaServed": [
      {
        "@type": "Place",
        "name": "大阪府"
      },
      {
        "@type": "Place",
        "name": "京都府"
      },
      {
        "@type": "Place",
        "name": "兵庫県"
      },
      {
        "@type": "Place",
        "name": "奈良県"
      },
      {
        "@type": "Place",
        "name": "滋賀県"
      },
      {
        "@type": "Place",
        "name": "和歌山県"
      }
    ],
    "serviceType": "ホームページ制作",
    "description": "大阪・京都・兵庫など関西圏の商圏に合わせたホームページ・LP制作。SEO/AEO/MEOとUI/UX改善で、問い合わせや予約につながるサイトを構築します。",
    "url": "https://recustep.com/services/hp-lp",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "JPY",
      "lowPrice": "80000",
      "highPrice": "300000"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HPLPPage />
    </>
  );
}