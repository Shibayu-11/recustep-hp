import SystemPage from "./page.client";

export { metadata } from "./metadata";

export default function SystemRoutePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "システム開発支援サービス",
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
    "areaServed": {
      "@type": "Country",
      "name": "日本"
    },
    "serviceType": "システム開発",
    "description": "基幹システムから業務アプリ開発まで、要件定義・設計・開発・運用をワンストップで支援。SaaS連携や内製化支援で業務効率化とDXを加速させます。",
    "url": "https://recustep.com/services/system",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "システム開発サービス",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "要件定義・設計"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "業務システム開発"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SaaS連携"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "内製化支援"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SystemPage />
    </>
  );
}