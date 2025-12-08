// components/layout/Navbar.tsx
"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

/** ===== 設定（HOMEにHeroがある想定） ===== */
const HOME_PAGE = "/";
const HERO_HASH = "#hero";
const HERO_ID = "hero";
const HOME_HREF = `${HOME_PAGE}${HERO_HASH}`;

const navigationItems = [
  { name: "HOME", href: HOME_HREF }, 
  { name: "ABOUT US", href: "/about" },
  { name: "SERVICE", href: "/services" },
  { name: "BLOG", href: "/blog" },
  { name: "COMPANY", href: "/company" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // 常に固定表示（視認性のため）
  const isScrolled = true;

  // HOME 以外のタブだけアクティブ下線を出す
  const isActive = (href: string, isHomeTab = false) => {
    if (isHomeTab) return false; // HOMEは常に下線なし
    const base = href.split("#")[0];
    return pathname === base;
  };

  // HOMEクリック：同一ページなら #hero へスムーススクロール
  const handleHomeClick = useCallback<React.MouseEventHandler<HTMLAnchorElement>>(
    (e) => {
      if (pathname !== HOME_PAGE) return; // 他ページでは通常遷移（/#hero）
      e.preventDefault();
      const el = document.getElementById(HERO_ID);
      if (!el) return;
      const headerEl = document.querySelector("header") as HTMLElement | null;
      const offset = headerEl ? headerEl.getBoundingClientRect().height : 96;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset - 6;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      setIsMenuOpen(false);
    },
    [pathname]
  );

  // モバイル：他タブ押下時は閉じる
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div
          className="transition-all duration-500 ease-out"
          style={{
            backgroundColor: isScrolled
              ? "rgba(255, 255, 255, 1)"
              : "transparent",
            backdropFilter: isScrolled ? "blur(20px)" : "none",
            WebkitBackdropFilter: isScrolled ? "blur(20px)" : "none",
            borderBottom: isScrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center h-16 lg:h-20">
              {/* ロゴ */}
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

              {/* デスクトップナビ */}
              <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10 flex-1">
                {navigationItems.map((item) => {
                  const isHomeTab = item.name === "HOME";
                  const active = isActive(item.href, isHomeTab);

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={isHomeTab ? handleHomeClick : undefined}
                      className="relative group transition-all duration-300"
                    >
                      <span
                        className={`text-sm font-medium tracking-wide transition-all duration-300 group-hover:text-black ${
                          active
                            ? "text-black"
                            : isScrolled
                            ? "text-gray-800"
                            : "text-white"
                        }`}
                      >
                        {item.name}
                      </span>

                      {/* 下線：HOMEは出さない（アクティブもホバーも） */}
                      {!isHomeTab && active && (
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-current rounded-full"
                          layoutId="activeNavItem"
                          initial={false}
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                      {/* ホバー下線もHOMEは出さない */}
                      {!isHomeTab && (
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-current rounded-full opacity-0 group-hover:opacity-50"
                          initial={false}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* CTA */}
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

              {/* モバイルメニュー切替 */}
              <button
                onClick={() => setIsMenuOpen((v) => !v)}
                className="lg:hidden p-2 rounded-md transition-colors duration-300 ml-auto"
                aria-label="Toggle navigation"
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

      {/* モバイルメニュー（必要ならそのまま） */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              key="overlay"
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />
            <motion.nav
              key="drawer"
              className="fixed top-0 right-0 bottom-0 z-[60] w-[78%] max-w-[360px] bg-white shadow-xl p-6 pt-20"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
            >
              <ul className="space-y-4">
                {navigationItems.map((item) => {
                  const isHomeTab = item.name === "HOME";
                  return (
                    <li key={`m-${item.name}`}>
                      <Link
                        href={item.href}
                        onClick={isHomeTab ? undefined : closeMenu}
                        className="block text-base font-semibold text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
                <li className="pt-2">
                  <Button asChild className="w-full">
                    <Link href="/contact" onClick={closeMenu}>
                      CONTACT
                    </Link>
                  </Button>
                </li>
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
