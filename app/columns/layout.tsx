import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";

export default function ColumnsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* 黒文字＋白背景ナビ */}
      <Navbar solidOnLoad />

      {/* コンテンツ */}
      <div className="pt-16 lg:pt-20">{children}</div>
    </>
  );
}
