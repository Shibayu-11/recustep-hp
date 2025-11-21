// app/lp/works/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "支援実績",
  alternates: { canonical: "https://recustep.com/lp/works" },
};

const works = [
  {
    slug: "kansaikei-it",
    title: "関西系IT企業：ES再構成→1次/2次通過",
    tags: ["ES添削", "面接対策", "逆算計画"],
  },
  {
    slug: "major-mfg",
    title: "大手メーカー：SPI弱点補強→内々定",
    tags: ["SPI", "面接", "進捗管理"],
  },
];

export default function WorksList() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-extrabold">支援実績</h1>

      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        {works.map((w) => (
          <Link
            key={w.slug}
            href={`/lp/works/${w.slug}`}
            className="rounded-2xl border p-5 hover:bg-slate-50"
          >
            <div className="aspect-video rounded-xl bg-slate-100 border" />
            <h3 className="mt-4 font-semibold">{w.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{w.tags.join(" / ")}</p>
          </Link>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border p-6 bg-slate-50">
        <h3 className="font-semibold">内定先（例）</h3>
        <p className="mt-2 text-sm text-slate-700">
          IT・コンサル・メーカー・不動産・小売 など（個人情報保護のため社名は面談時に開示）
        </p>
      </div>
    </section>
  );
}
