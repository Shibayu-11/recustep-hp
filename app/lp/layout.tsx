// app/lp/layout.tsx
import type { Metadata } from "next";
import NavbarLP from "@/components/layout/NavbarLP";

export const metadata: Metadata = {
  title: "27卒就活サポートLP｜株式会社リクステップ",
  description: "ES・履歴書作成、SPI対策まで一貫サポートする27卒向け就活LPです。",
};

export default function LPRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ここでは html / body は書かない
  return (
    <>
      <NavbarLP />
      <main className="min-h-[70dvh] bg-white text-slate-900">
        {children}
      </main>
      {/* 必要なら LP 専用フッターもここに追加 */}
    </>
  );
}
