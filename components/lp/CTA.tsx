// components/lp/CTA.tsx
import Link from "next/link";

export function CTA({
  title = "まずは状況ヒアリング（無料）",
  sub = "志望業界・学年・現在の課題をお聞きして、最短ルートをご提案します。",
  buttonLabel = "LINE / フォームで相談",
  href = "/contact",
}: {
  title?: string;
  sub?: string;
  buttonLabel?: string;
  href?: string;
}) {
  return (
    <section className="py-16 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
        <p className="mt-3 text-slate-600">{sub}</p>
        <div className="mt-8">
          <Link
            href={href}
            className="inline-block rounded-xl bg-slate-900 text-white px-6 py-3"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
