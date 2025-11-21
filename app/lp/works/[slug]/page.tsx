// app/lp/works/[slug]/page.tsx
import type { Metadata, ResolvingMetadata } from "next";

type Props = { params: { slug: string } };

const DB: Record<string, { title: string; body: string }> = {
  "kansaikei-it": {
    title: "関西系IT企業：ES再構成→1次/2次通過",
    body:
      "課題：自己PRの抽象度が高い／面接で深掘りに弱い。\n対応：実エピソードの時系列化→成果指標を数値化→問答テンプレ化。\n結果：一次/二次通過、最終へ。",
  },
  "major-mfg": {
    title: "大手メーカー：SPI弱点補強→内々定",
    body:
      "課題：数的推理の時間切れ多発。\n対応：演習ログ→誤答パターン抽出→時間配分ルール化。\n結果：本番スコア向上、内々定獲得。",
  },
};

export async function generateMetadata(
  { params }: Props,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const w = DB[params.slug];
  const title = w ? `${w.title}｜支援実績` : "支援実績";
  const url = `https://recustep.com/lp/works/${params.slug}`;
  return { title, alternates: { canonical: url }, openGraph: { url, title } };
}

export default function WorkDetail({ params }: Props) {
  const w = DB[params.slug];
  if (!w) return <p className="p-6">Not Found</p>;
  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-extrabold whitespace-pre-line">{w.title}</h1>
      <p className="mt-6 leading-7 text-slate-700 whitespace-pre-line">{w.body}</p>
      <a
        href="/contact"
        className="mt-10 inline-block rounded-xl bg-slate-900 text-white px-5 py-3"
      >
        この事例に近い支援を相談する
      </a>
    </article>
  );
}
