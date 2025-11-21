export default function Services() {
    const items = [
      "SPI対策",
      "ES作成",
      "履歴書作成",
      "面接対策",
      "企業提案",
      "就活戦略立案",
      "就活コンサルティング",
    ];
    return (
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-xl font-bold">提供サービス</h2>
        <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t) => (
            <li key={t} className="rounded-xl border p-5">
              <h3 className="font-semibold">{t}</h3>
              <p className="mt-2 text-slate-600 text-sm">
                {desc(t)}
              </p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  
  function desc(t: string) {
    switch (t) {
      case "SPI対策":
        return "演習ログから誤答傾向を抽出し、時間配分を最適化。";
      case "ES作成":
        return "設問意図→構成→言い換え→推敲まで伴走します。";
      case "履歴書作成":
        return "読み手の評価基準に合わせて見せ方を最適化。";
      case "面接対策":
        return "想定問答・深掘り対応・逆質問を型で準備。録画FB可。";
      case "企業提案":
        return "志向性×スキルに合う企業をピックし個別対策を提示。";
      case "就活戦略立案":
        return "本選考日から逆算し、週次タスクを設計します。";
      default:
        return "状況に応じて個別に最短ルートをご提案。";
    }
  }
  