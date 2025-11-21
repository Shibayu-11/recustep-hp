// components/layout/NavbarLP.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = { solidOnLoad?: boolean };

export default function NavbarLP({ solidOnLoad = false }: Props) {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isScrolled = solidOnLoad ? true : scrollY > 20;
  const headerOpacity = Math.min(scrollY / 200, 0.98);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div
        className="transition-all duration-500 ease-out"
        style={{
          backgroundColor: isScrolled
            ? `rgba(255, 255, 255, ${solidOnLoad ? 0.98 : headerOpacity})`
            : "transparent",
          backdropFilter: isScrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(20px)" : "none",
          borderBottom: isScrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center h-16 lg:h-20">
            {/* ロゴ（LP用） */}
            <Link href="/lp" className="flex items-center group mr-4">
              <Image
                src="/images/logo/lp-logo.svg"   // ←下のSVGを保存
                alt="Recustep 就活支援"
                width={180}
                height={40}
                className="h-8 lg:h-10 w-auto transition-opacity duration-300 group-hover:opacity-80"
                priority
              />
            </Link>

            {/* 右側余白埋め */}
            <div className="flex-1" />

            {/* CTAのみ */}
            <Link
              href="/contact"
              className={`rounded-full transition-all duration-300 px-6 py-2.5 text-sm font-medium border-2 ${
                isScrolled
                  ? "bg-black text-white border-black hover:bg-gray-800 hover:border-gray-800"
                  : "bg-white text-black border-white hover:bg-gray-100"
              }`}
            >
              無料で相談
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
