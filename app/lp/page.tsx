// app/lp/page.tsx
import Hero from "@/components/lp/Hero";
import ServicesSection from "@/components/lp/Services";
import FlowSection from "@/components/lp/Flow";
import RepresentativeSection from "@/components/lp/Representative";
import ReviewSection from "@/components/lp/Review";
import CTA from "@/components/lp/CTA";
import FAQ from "@/components/lp/FAQ";
import { LPFooter } from "@/components/lp/Footer";

import "@/styles/representative-mask.css";

export const revalidate = 0;

export default function LPPage() {
  return (
    <>
      {/* 上部の余白 */}
      <div className="pt-2 md:pt-4" />

      <Hero />
      <ServicesSection />
      <FlowSection />
      <RepresentativeSection />
      <ReviewSection />
      <CTA />
      <FAQ />
      <LPFooter />
    </>
  );
}
