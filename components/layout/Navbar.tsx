"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "サービス", href: "/services" },
  { name: "会社概要", href: "/company" },
  { name: "実績", href: "#works" },
  { name: "お問い合わせ", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/40"
          : "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/40"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full px-2 sm:px-4 lg:px-6">
        <div className="flex h-14 sm:h-16 items-center justify-between w-full">
          {/* Logo - 左端に */}
          <Link 
            href="/" 
            className="flex items-center"
          >
            <img 
              src="/images/logo/logo.svg"
              alt="リクステップ" 
              className="h-8 sm:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation - 右端に */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {navItems.slice(0, 3).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm lg:text-base text-foreground/80 hover:text-foreground transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            
            {/* お問い合わせボタン */}
            <Link href="/contact">
              <Button className="font-medium text-sm lg:text-base px-3 lg:px-4 py-2">
                お問い合わせ
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu" className="h-8 w-8">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[300px]">
                <div className="flex flex-col gap-6 mt-8">
                  {navItems.slice(0, 3).map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-foreground/80 hover:text-foreground text-lg font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link href="/contact">
                    <Button className="mt-4 w-full">
                      お問い合わせ
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}