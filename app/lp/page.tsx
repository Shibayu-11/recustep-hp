// app/lp/page.tsx
import Hero from "@/components/lp/Hero";
import ServicesSection from "@/components/lp/Services";
import ReviewSection from "@/components/lp/Review";

export const revalidate = 0;

export default function LPPage() {
  return (
    <>
      {/* ===== 余白（ヘッダーとの被り防止） ===== */}
      <div className="pt-2 md:pt-4" />

      {/* ===== 1. Hero ===== */}
      <Hero />

      {/* ===== 2. Services ===== */}
      <div className="mt-20 md:mt-32">
        <ServicesSection />
      </div>

      {/* ===== 3. Review（見出し + 横スクロール） ===== */}
      <div className="mt-20 md:mt-32">
        <ReviewSection />
      </div>
    </>
  );
}
