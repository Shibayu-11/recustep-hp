import { Suspense } from "react";

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import CEOMessage from "@/components/sections/CEOMessage";
import Works from "@/components/sections/Works";
import Columns from "@/components/sections/Columns";
import Contact from "@/components/sections/Contact";
import Vision from "@/components/sections/Vision";
import Navbar from "@/components/layout/Navbar";
import FixedBottomFooter from "@/components/layout/FixedBottomFooter";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary" />
            </div>
          }
        >
          <Hero />
          <Vision />
          <Services />
          <CEOMessage />
          <Works />
          <Columns />
          <Contact />
        </Suspense>
      </main>

      <FixedBottomFooter />
    </>
  );
}
