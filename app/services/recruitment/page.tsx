"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Users,
  Target,
  Clock,
  FileText,
  Phone,
  Calendar,
  BarChart3,
  Shield,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

/* =========================
   ページ本体
   ========================= */
export default function RecruitmentPage() {
  return (
    <main className="bg-[#f7f9fb]">
      {/* ====== HERO（固定） ====== */}
<section className="relative w-full overflow-hidden pt-[88px] lg:pt-[104px]">
  <div
    className="
      max-w-7xl mx-auto
      min-h-[560px] md:min-h-[720px]
      flex flex-col md:flex-row
      items-stretch
      justify-start md:justify-between   /* ← SPは上寄せ、PCは従来どおり */
    "
  >
    {/* 左：テキスト（SPだけ上に約2行ぶん持ち上げ） */}
    <motion.div
      className="
        order-2 md:order-1
        w-full md:w-[52%]
        px-6 md:px-10 lg:px-16
        py-8 md:py-14
        relative z-10
        mt-12 sm:mt-16 md:mt-0 
      "
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full md:max-w-[640px]">
        <h1 className="text-[24px] sm:text-[32px] md:text-[48px] lg:text-[56px] font-bold leading-tight tracking-[-0.01em] text-gray-900">
          <span className="block whitespace-nowrap">採用の常識を変える。</span>
          <span className="block whitespace-nowrap">人事部を持たない選択。</span>
        </h1>

        <p className="mt-6 text-[14px] sm:text-[15px] md:text-lg leading-relaxed text-gray-700">
          <span className="md:inline-block md:whitespace-nowrap">
            人材採用は、もはや <strong className="text-gray-800">“専任の人事部”</strong> を持たなくても実現できる時代。
          </span>
          <br className="hidden md:block" />
          <span className="md:inline-block">
            リクステップは貴社の「採用部門そのもの」として機能し、
          </span>
          <br className="hidden md:block" />
          <span className="md:inline-block">
            コストと手間を最小限に、<strong className="font-semibold">最大の採用成果</strong>をお届けします。
          </span>
        </p>

        <div className="mt-7 md:mt-8">
          <Link href="#contact">
            <Button className="text-sm md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-xl">
              無料相談を申し込む
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>

    {/* 右：画像（ナビ直下まで引き上げ＋斜めクリップ） */}
    <motion.div
      className="order-1 md:order-2 w-full md:w-[48%] h-[42vh] md:min-h-[720px] relative -mt-[88px] lg:-mt-[104px]"
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div
        className="absolute inset-0"
        style={{ clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0 100%)" }}
      >
        <img
          src="/images/pages/humanpage.png"
          alt="採用代行サービス"
          className="w-full h-full object-cover select-none pointer-events-none object-[82%_center]"
          draggable={false}
        />
      </div>
    </motion.div>
  </div>
</section>

      {/* ====== 3つの「ない」 ====== */}
      <Problems />

      {/* ====== 特徴（ATS×低コスト×即応×プロ支援） ====== */}
      <Features />

      {/* ====== 提供範囲（やること一覧） ====== */}
      <Scope />

      {/* ====== 進め方（フロー） ====== */}
      <Process />

      {/* ====== 事例 / お客様の声 ====== */}
      <Voices />

      {/* ====== FAQ ====== */}
      <FAQ />

      {/* ====== 最後のCTA ====== */}
      <FinalCTA />
    </main>
  );
}

/* =========================
   3つの「ない」
   ========================= */
function Problems() {
  const items = [
    {
      title: "募集しても応募が来ない / 採用できない",
      body:
        "母集団の量と質を同時に最大化。媒体選定・求人票・打ち出しを再設計し、短期での応募増と採用決定を狙います。",
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: "採用しても人が育たない・定着しない",
      body:
        "オンボーディングの整備や目標設定の仕組みづくりまで伴走。一次面接までを代行し、カルチャーとのミスマッチも低減。",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "人事リソースが足りない・時間がない",
      body:
        "媒体運用・スカウト・スクリーニング・一次面接までを丸ごと代行。担当者は意思決定に集中できます。",
      icon: <Clock className="w-6 h-6" />,
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900">
          中小企業が抱える採用の悩み<br className="md:hidden" />
          <span className="md:inline"> 3つの「ない」</span> を解決に導きます
        </h2>

        <div className="mt-8 md:mt-10 grid md:grid-cols-3 gap-6 md:gap-8">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl border border-gray-100 bg-white shadow-sm p-5 md:p-7"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white">
                {it.icon}
              </div>
              <h3 className="mt-3 md:mt-4 font-bold text-base md:text-lg text-gray-900 leading-snug">
                {it.title}
              </h3>
              <p className="mt-2 md:mt-3 text-[13.5px] md:text-[15px] leading-7 text-gray-600">
                {it.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================
   特徴（丸サークル：SP 2×2 / PC 4カラム）
   ========================= */
function Features() {
  const circles = [
    {
      title: "自社開発ATSの活用",
      desc: "応募〜選考の状況をリアルタイム共有。採用フェーズの透明化を実現。",
      icon: <Shield className="w-5 h-5 md:w-6 md:h-6" />,
    },
    {
      title: "低コストで始めやすい",
      desc: "月額は抑えめ。採用決定時のみの成果報酬モデルにも対応。",
      icon: <Sparkles className="w-5 h-5 md:w-6 md:h-6" />,
    },
    {
      title: "プロによる運用・改善",
      desc: "媒体運用〜スカウト〜一次面接まで徹底代行。毎週レポートで改善。",
      icon: <BarChart3 className="w-5 h-5 md:w-6 md:h-6" />,
    },
    {
      title: "即応体制",
      desc: "応募来たら即対応。連絡・日程調整・合否通知まで機動的に実行。",
      icon: <Phone className="w-5 h-5 md:w-6 md:h-6" />,
    },
  ];

  return (
    <section className="bg-[#fbfcfe] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900">リクステップの特徴</h2>

        <div className="mt-8 md:mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {circles.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="
                relative aspect-square rounded-full bg-white
                shadow-[0_18px_40px_-18px_rgba(0,0,0,0.15)]
                border border-gray-100
                flex flex-col items-center justify-center text-center
                p-5 md:p-6
              "
            >
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-gray-900 text-white flex items-center justify-center">
                {c.icon}
              </div>
              <h3 className="mt-3 md:mt-4 font-bold text-[13.5px] md:text-base text-gray-900">
                {c.title}
              </h3>
              <p className="mt-2 text-[12.5px] md:text-sm text-gray-600 leading-7">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 md:mt-8 text-xs md:text-sm text-gray-500">
          ※ 料金はご要望により設計（小さく始める固定費 + 採用決定時のみ成果報酬 のハイブリッドも可）
        </p>
      </div>
    </section>
  );
}

/* =========================
   提供範囲（やること一覧）
   ========================= */
function Scope() {
  const items = [
    { icon: <FileText className="w-5 h-5" />, text: "求人要件定義／求人票作成（打ち出しの設計）" },
    { icon: <Target className="w-5 h-5" />, text: "媒体選定・出稿、スカウト運用（原稿作成・配信設計）" },
    { icon: <Shield className="w-5 h-5" />, text: "ATS初期設定・ダッシュボード整備（見える化）" },
    { icon: <Users className="w-5 h-5" />, text: "応募者対応／スクリーニング／一次面接代行" },
    { icon: <Calendar className="w-5 h-5" />, text: "候補者連絡・日程調整・合否通知" },
    { icon: <BarChart3 className="w-5 h-5" />, text: "週次レポート（KPI可視化）／改善提案" },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            {/* 2行固定 */}
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900">
              <span className="block">採用で「手を動かすところ」</span>
              <span className="block">全部やります</span>
            </h2>
            <p className="mt-4 text-gray-700 leading-8 text-[14px] md:text-base">
              担当者さまは要件の決定と最終判断に集中。私たちがオペレーションを一気通貫で担い、毎週の改善で成果に直行します。
            </p>

            <ul className="mt-6 space-y-4">
              {items.map((it, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 text-gray-900">{it.icon}</div>
                  <span className="text-gray-800 text-[14px] md:text-base">{it.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 右側：背景透過PNG。枠は完全にナシ */}
          <div className="relative">
            <img
              src="/images/recruitment/consulting-process.png"
              alt="提供範囲"
              className="w-full h-auto pointer-events-none select-none"
              draggable={false}
            />
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-gray-700 text-[14px] md:text-base">
                <CheckCircle2 className="w-5 h-5 text-gray-900" />
                <span>一次面接までを代行、意思決定だけに集中できる体制</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 text-[14px] md:text-base">
                <CheckCircle2 className="w-5 h-5 text-gray-900" />
                <span>自社ATSでフェーズ可視化。ボトルネックがすぐ分かる</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================
   進め方（フロー）
   ========================= */
function Process() {
  const steps = [
    { title: "1. キックオフ", body: "採用要件・ペルソナ・KGI/KPIを確定。ATS初期設定。" },
    { title: "2. 求人票/媒体設計", body: "打ち出しと媒体配分を設計。スカウト文章も作成。" },
    { title: "3. 運用開始", body: "出稿・スカウト・応募対応を同時に開始。" },
    { title: "4. 書類選考／一次面接", body: "スクリーニング〜一次面接まで徹底代行。" },
    { title: "5. 週次レポート", body: "数値レビュー、課題→打ち手を毎週更新。" },
    { title: "6. 内定〜入社", body: "条件調整・クロージング支援。入社後フォローも可。" },
  ];

  return (
    <section className="bg-[#fbfcfe] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900">ご契約から採用までの流れ</h2>

        <div className="mt-8 md:mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="rounded-xl border border-gray-100 bg-white p-5 md:p-6 shadow-sm"
            >
              <div className="flex items-center gap-2 text-gray-900 font-semibold">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-900 text-white text-sm">
                  {i + 1}
                </span>
                {s.title}
              </div>
              <p className="mt-3 text-[13.5px] md:text-sm text-gray-600 leading-7">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================
   事例 / お客様の声
   ========================= */
function Voices() {
  const cards = [
    {
      tag: "IT・システム",
      title: "応募ゼロ→3ヶ月で2名採用。採用費も半減",
      body:
        "求人票の打ち出しを刷新、スカウト設計と一次面接代行で歩留まりが改善。現場の負担も大幅に減りました。",
      img: "/images/recruitment/client-it.png",
    },
    {
      tag: "製造業",
      title: "人事業務をまるっと代行。採用と定着が同時に前進",
      body:
        "ATSで見える化し、毎週レポートで改善を回す体制に。採用の手応えが数字で分かるようになりました。",
      img: "/images/recruitment/client-manufacturing.png",
    },
    {
      tag: "サービス",
      title: "採用決定が続き、事業拡大・新規事業もスタート",
      body:
        "媒体の選定から日程調整までお任せ。即日対応が効いて、面接数と内定率が着実に伸びました。",
      img: "/images/recruitment/client-service.png",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900">クライアントの声</h2>

        <div className="mt-8 md:mt-10 grid md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-[0_18px_40px_-18px_rgba(0,0,0,0.16)]"
            >
              <img src={c.img} alt={c.tag} className="w-full h-40 object-cover" />
              <div className="p-6">
                <span className="text-xs font-semibold text-blue-600">{c.tag}</span>
                <h3 className="mt-2 font-bold text-gray-900">{c.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-7">{c.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================
   FAQ
   ========================= */
function FAQ() {
  const qa = [
    {
      q: "料金はどのくらい？",
      a: "小さく始める月額固定費 + 採用決定時のみ成果報酬 を基本に、お客様の状況に合わせて設計します。",
    },
    {
      q: "媒体やスカウトの運用だけお願いできますか？",
      a: "はい。運用のみ、一次面接のみ、レポート/改善のみなど、パーツ単位のご依頼も可能です。",
    },
    {
      q: "ATSの利用は必須ですか？",
      a: "原則ご利用いただきます。選考状況の可視化・高速な意思決定に直結し、成果が出やすくなります。",
    },
  ];

  return (
    <section className="bg-[#fbfcfe] py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 text-center">よくある質問</h2>

        <div className="mt-8 md:mt-10 space-y-4">
          {qa.map((item, i) => (
            <details key={i} className="group rounded-xl border border-gray-200 bg-white p-5 md:p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                <span className="font-semibold text-gray-900">{item.q}</span>
                <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-gray-700 leading-8">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================
   最後のCTA（「詳しく見る」ボタンは削除）
   ========================= */
function FinalCTA() {
  return (
    <section id="contact" className="bg-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900">
          人事部を置かずに、採用を前に進めよう。
        </h2>
        <p className="mt-4 text-gray-700">
          まずは課題の棚卸しから。オンラインで現状を伺い、適切な開始プランをご提案します。
        </p>

        <div className="mt-8 flex items-center justify-center">
          <Link href="/contact">
            <Button size="lg" className="px-8 py-6 rounded-xl">
              無料相談を予約する
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
