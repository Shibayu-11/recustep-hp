import { Suspense } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Works from '@/components/sections/Works';
import Contact from '@/components/sections/Contact';
import LoadingSpinner from '@/components/ui/loading-spinner';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Suspense fallback={<LoadingSpinner />}>
          <Hero />
          <Services />
          <About />
          <Works />
          <Contact />
        </Suspense>
      </main>
    </>
  );
}