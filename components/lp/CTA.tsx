// components/lp/CTA.tsx
import Link from "next/link";

const LINE_URL = "https://lin.ee/xxxxxxxx"; // ← ここを公式LINEのURLに差し替え

type Props = {
  title?: string;
  sub?: string;
  buttonLabel?: string;
  href?: string;
};

export default function CTA({
  title = "まずは状況ヒアリング（無料）",
  sub = "志望業界・学年・現在の課題をお聞きして、最短ルートをご提案します。",
  buttonLabel = "公式LINEで相談する",
  href = LINE_URL,
}: Props) {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      {/* 六角形の薄いグレー背景 */}
      <div className="absolute inset-0 flex justify-center pointer-events-none -z-10">
        <div className="cta-hex-bg w-[1200px] max-w-[95%] h-[380px] md:h-[420px] bg-slate-100" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 whitespace-pre-line">
          {title}
        </h2>
        <p className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed">
          {sub}
        </p>

        <div className="mt-8 md:mt-10">
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-[#06C755] text-white px-8 py-4 text-sm md:text-base shadow-md hover:opacity-90 transition"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
