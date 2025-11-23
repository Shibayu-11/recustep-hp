import RecruitmentPage from "./page.client";

export { metadata } from "./metadata";

export default function RecruitmentRoutePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "採用支援・RPOサービス",
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
    "serviceType": "採用支援",
    "description": "新卒・中途・地方採用に強い伴走型の採用支援。採用戦略設計、母集団形成、選考設計、面接代行、定着支援までワンストップで支援します。",
    "url": "https://recustep.com/services/recruitment",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "採用支援サービス",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "採用戦略設計"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "母集団形成"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "選考設計・面接代行"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "定着支援"
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
      <RecruitmentPage />
    </>
  );
}