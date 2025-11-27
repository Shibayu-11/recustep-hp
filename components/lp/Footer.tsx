import Link from "next/link";
import Image from "next/image";

export function LPFooter() {
  return (
    <footer className="border-t mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-600">

        {/* --- 上段：ロゴ + リンク --- */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* ロゴ */}
          <div className="flex items-center">
            <Image
              src="/images/logo/lp-logo.png" // ←SVGにしたければ png → svg に変えるだけ
              alt="リクステップ ロゴ"
              width={160}
              height={50}
              className="h-auto w-[140px] md:w-[160px]"
            />
          </div>

          {/* リンク */}
          <div className="flex flex-wrap items-center gap-6 text-slate-600 text-sm">
            <Link href="/">コーポレート</Link>
            <Link href="/privacy">プライバシーポリシー</Link>
            <Link href="/terms">利用規約</Link>
          </div>
        </div>

        {/* --- 下段：コピーライト --- */}
        <p className="mt-6 text-slate-500">
          © {new Date().getFullYear()} 株式会社リクステップ
        </p>
      </div>
    </footer>
  );
}
