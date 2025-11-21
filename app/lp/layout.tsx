// app/lp/layout.tsx
import NavbarLP from "@/components/layout/NavbarLP";

export default function LPRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className="min-h-dvh bg-white text-slate-900">
        <NavbarLP />
        <main className="min-h-[70dvh]">{children}</main>
        {/* 既存のLPFooterでOK */}
      </body>
    </html>
  );
}
