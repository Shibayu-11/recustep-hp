// components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navigationItems = [
  { name: "ABOUT US", href: "/about" },
  { name: "SERVICE", href: "/services" },
  { name: "BLOG", href: "/blog" },
  { name: "COMPANY", href: "/company" },
];

// ★追加：ロード直後からソリッド表示にできる
type Props = { solidOnLoad?: boolean };

export default function Navbar({ solidOnLoad = false }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 通常のスクロール判定 or 強制ソリッド
  const rawIsScrolled = scrollY > 20;
  const isScrolled = solidOnLoad ? true : rawIsScrolled;
  const headerOpacity = Math.min(scrollY / 200, 0.98);

  return (
    <>
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
            borderBottom: isScrolled
              ? "1px solid rgba(0, 0, 0, 0.06)"
              : "none",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center h-16 lg:h-20">
              <Link href="/" className="flex items-center group mr-12 lg:mr-16">
                <Image
                  src="/images/logo/logo.png"
                  alt="RECUSTEP"
                  width={180}
                  height={50}
                  className="h-10 lg:h-12 w-auto transition-all duration-300 group-hover:opacity-80"
                  priority
                />
              </Link>

              <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10 flex-1">
                {navigationItems.map((item) => (
                  <Link key={item.name} href={item.href} className="relative group">
                    <span
                      className={`text-sm font-medium tracking-wide transition-all duration-300 group-hover:text-black ${
                        pathname === item.href
                          ? "text-black"
                          : isScrolled
                          ? "text-gray-800"
                          : "text-white"
                      }`}
                    >
                      {item.name}
                    </span>
                    {pathname === item.href && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-current rounded-full"
                        layoutId="activeNavItem"
                        initial={false}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-current rounded-full opacity-0 group-hover:opacity-50"
                      initial={false}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                ))}
              </nav>

              <div className="hidden lg:flex items-center ml-auto">
                <Button
                  asChild
                  className={`rounded-full transition-all duration-300 px-8 py-2.5 text-sm font-medium border-2 ${
                    isScrolled
                      ? "bg-black text-white border-black hover:bg-gray-800 hover:border-gray-800"
                      : "bg-white text-black border-white hover:bg-gray-100"
                  }`}
                >
                  <Link href="/contact">CONTACT</Link>
                </Button>
              </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-md transition-colors duration-300 ml-auto"
              >
                {isMenuOpen ? (
                  <X className={`h-6 w-6 ${isScrolled ? "text-black" : "text-white"}`} />
                ) : (
                  <Menu className={`h-6 w-6 ${isScrolled ? "text-black" : "text-white"}`} />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* モバイルメニュー＆オーバーレイ（既存のまま） */}
      {/* ...（省略：あなたの現状コードそのまま流用でOK）... */}
    </>
  );
}
