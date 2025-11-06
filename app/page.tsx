import { Suspense } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Works from '@/components/sections/Works';
import Columns from '@/components/sections/Columns';
import Contact from '@/components/sections/Contact';
import FixedBottomFooter from '@/components/layout/FixedBottomFooter';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
          </div>
        }>
          <Hero />
          <h1 className="text-center bg-white px-5 text-sm md:text-base font-bold text-gray-700">
            大阪のホームページ制作なら株式会社リクステップ｜短納期・SEO対策対応
          </h1>
          <Services />
          <About />
          <Works />
          <Columns />
          <Contact />
        </Suspense>
      </main>
      <FixedBottomFooter />
    </>
  );
}