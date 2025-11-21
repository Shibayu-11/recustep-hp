// app/lp/services/page.tsx
import type { Metadata } from "next";
import { CTA } from "@/components/lp/CTA";

export const metadata: Metadata = {
  title: "サービス",
  description: "SPI/ES/面接/逆算管理をニーズ別に。単発/月額/成果連動オプションまで用意。",
  alternates: { canonical: "https://recustep.com/lp/services" },
};

const plans = [
  {
    name: "単発チケット",
    price: "¥9,800 / 回〜",
    points: ["ES添削 or 面接練習 60分", "記録と改善点を共有", "翌日までにフィードバック"],
  },
  {
    name: "月額ベーシック",
    price: "¥29,800 / 月",
    points: ["週1回セッション", "SPI演習セット", "逆算ToDo & 進捗管理"],
  },
  {
    name: "月額プロ",
    price: "¥49,800 / 月",
    points: ["週2回セッション", "ES無制限添削", "模擬面接＋録画FB / 週1"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-3xl font-extrabold">サービス / 料金</h1>
        <p className="mt-3 text-slate-600">
          忙しい新卒のために、必要なものを必要なだけ。途中でのプラン変更も可能です。
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="rounded-2xl border p-6">
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <p className="mt-2 text-2xl font-bold">{p.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {p.points.map((pt) => (
                  <li key={pt}>・{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border p-6 bg-slate-50">
          <h3 className="font-semibold">オプション</h3>
          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li>・企業別ガチ対策パック（過去問/面接傾向/逆質問集）：¥14,800/社</li>
            <li>・ガクチカ/自己PRの再構築ワーク：¥19,800</li>
            <li>・英語面接対策（基礎テンプレ＋添削）：¥14,800</li>
          </ul>
        </div>
      </section>

      <CTA title="最適プランの提案を受ける（無料）" />
    </>
  );
}
