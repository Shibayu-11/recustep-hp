// app/services/recruitment/layout.tsx
import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";

export default function RecruitmentLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* ロード直後から黒文字・白背景で見えるように */}
      <Navbar solidOnLoad />

      {/* ヘッダーの高さ分だけ下げる（16 / 20 = h-16 / h-20） */}
      <div className="pt-16 lg:pt-20">{children}</div>
    </>
  );
}
