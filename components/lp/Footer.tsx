// components/lp/Footer.tsx
import Link from "next/link";

export function LPFooter() {
  return (
    <footer className="border-t mt-20">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-600">
        <div className="flex flex-wrap items-center gap-6">
          <Link href="/">コーポレート</Link>
          <Link href="/privacy">プライバシーポリシー</Link>
          <Link href="/terms">利用規約</Link>
        </div>
        <p className="mt-6">© {new Date().getFullYear()} 株式会社リクステップ</p>
      </div>
    </footer>
  );
}
