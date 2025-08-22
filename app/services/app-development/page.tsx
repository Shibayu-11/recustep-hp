// app/services/app-development/page.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Smartphone,
  Code,
  Palette,
  Shield,
  Sparkles,
  Gauge,
  BarChart3,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Target,
  Rocket,
  ShieldCheck,
  PlusCircle,
} from "lucide-react";

/* =========================
   ページ本体
   ========================= */
export default function AppDevelopmentPage() {
  return (
    <main className="bg-[#f7f9fb]">
      {/* ====== HERO（画像は今の高さ/位置のまま） ====== */}
      <section className="relative w-full overflow-hidden">
        <div
          className="
            max-w-7xl mx-auto
            min-h-[560px] md:min-h-[720px]
            flex flex-col md:flex-row
            items-stretch
            justify-start md:justify-between
          "
        >
          {/* 左：テキスト（復旧） */}
          <motion.div
            className="
              order-2 md:order-1
              w-full md:w-[55%] lg:w-[54%]
              px-6 md:px-10 lg:px-16
              py-8 md:py-20 lg:py-24
              relative z-10
              -mt-6 sm:-mt-10 md:mt-0
            "
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full md:max-w-[720px]">
              <h1
                className="
                  text-[24px] sm:text-[30px]
                  md:text-[48px] lg:text-[56px]
                  font-bold
                  leading-tight md:leading-[1.1]
                  tracking-[-0.01em] md:tracking-[-0.02em]
                  text-gray-900
                "
              >
                <span className="block whitespace-nowrap">アジャイルで伴走する。</span>
                <span className="block whitespace-nowrap">iOS / Android 開発。</span>
              </h1>

              <p
                className="
                  mt-6 md:mt-7
                  text-[14px] sm:text-[15px] md:text-lg
                  leading-relaxed md:leading-8
                  text-gray-700
                "
              >
                計画→実装→検証→改善を短いスプリントで反復。<br className="hidden md:block" />
                ユーザーの声とデータで「小さく速く」価値を出し、<br className="hidden md:block" />
                ストア要件とセキュリティを満たしながら継続的に品質と成果を伸ばします。
              </p>

              <div className="mt-7 md:mt-9">
                <Link href="/contact">
                  <Button className="text-sm md:text-base lg:text-lg px-6 md:px-7 lg:px-8 py-4 md:py-5 lg:py-6 rounded-xl">
                    無料相談を申し込む
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* 右：画像（object-position は center、クリップはそのまま） */}
          <motion.div
            className="
              order-1 md:order-2
              w-full md:w-[45%] lg:w-[46%]
              h-[36vh] sm:h-[40vh] md:min-h-[720px]
              relative
            "
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="absolute inset-0"
              style={{ clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0 100%)" }}
            >
              <img
                src="/images/pages/app-dev-hero.png"
                alt="アプリ開発サービス"
                className="
                  w-full h-full object-cover select-none pointer-events-none
                  object-[74%_center] md:object-[78%_center]
                "
                draggable={false}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== 3つの「つまずき」 ====== */}
      <Problems />

      {/* ====== 特徴 ====== */}
      <Features />

      {/* ====== 提供範囲 ====== */}
      <Scope />

      {/* ====== 進め方（二段ジグザグ＋双方矢印） ====== */}
      <Process />

      {/* ====== アジャイル詳説 ====== */}
      <AgileDetails />

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
   3つの「つまずき」
   ========================= */
function Problems() {
  const items = [
    {
      title: "要件が固まらない / 変更が多い",
      body:
        "短いスプリントで“まず動くもの”を出し、学びながら要件を磨き込みます。変更前提の計画でリスクを最小化。",
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: "UI/UXが弱く継続率が伸びない",
      body:
        "オンボーディングや主要導線を定性・定量で検証。体験価値を上げるUI/UX改善を反復します。",
      icon: <Palette className="w-6 h-6" />,
    },
    {
      title: "品質/申請/運用が不安",
      body:
        "クラッシュ/ANR監視・自動テスト・CI/CD・ストア申請代行まで。公開後も安定運用を支援。",
      icon: <Shield className="w-6 h-6" />,
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900">
          アプリ開発の“つまずき”<br className="md:hidden" />
          <span className="md:inline"> 3つ</span> を最短で解消
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
   特徴（丸サークル）
   ========================= */
function Features() {
  const circles = [
    {
      title: "ネイティブ最適化",
      desc: "Swift/SwiftUI・Kotlin対応。端末性能を活かし体験を最大化。",
      icon: <Smartphone className="w-5 h-5 md:w-6 md:h-6" />,
    },
    {
      title: "UI/UXファースト",
      desc: "ユーザビリティ検証を反復。継続率・CVで改善を評価。",
      icon: <Palette className="w-5 h-5 md:w-6 md:h-6" />,
    },
    {
      title: "品質を仕組み化",
      desc: "Lint/Format/自動テスト/CI/CDで安定とスピードを両立。",
      icon: <Gauge className="w-5 h-5 md:w-6 md:h-6" />,
    },
    {
      title: "運用まで伴走",
      desc: "申請代行・監視・レポート・改善提案まで一気通貫で支援。",
      icon: <BarChart3 className="w-5 h-5 md:w-6 md:h-6" />,
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
          ※ クロスプラットフォーム併用も相談可。要件から最適構成をご提案します。
        </p>
      </div>
    </section>
  );
}

/* =========================
   提供範囲（アジャイル版）
   ========================= */
function Scope() {
  const items = [
    { icon: <Sparkles className="w-5 h-5" />, text: "企画・要件定義（KGI/KPI・ユーザーストーリー・ロードマップ）" },
    { icon: <Palette className="w-5 h-5" />, text: "情報設計・UI/UX・プロトタイプ（ユーザーテスト）" },
    { icon: <Code className="w-5 h-5" />, text: "iOS/Android ネイティブ実装（通知・課金・API連携 等）" },
    { icon: <Shield className="w-5 h-5" />, text: "セキュリティ・監視・クラッシュ/ANR対策、自動テスト/CI/CD" },
    { icon: <Calendar className="w-5 h-5" />, text: "スプリント運用（計画/レビュー/レトロ）・リリース計画" },
    { icon: <BarChart3 className="w-5 h-5" />, text: "アナリティクス設計・ABテスト・改善レポート" },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900">
              <span className="block">アジャイルで「全部」伴走。</span>
              <span className="block">小さく速く、価値に直行。</span>
            </h2>
            <p className="mt-4 text-gray-700 leading-8 text-[14px] md:text-base">
              計画から実装・検証・改善までを反復。要件変更に強く、学びを次スプリントへすばやく反映します。
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

          <div className="relative">
            <img
              src="/images/app/stack-preview.png"
              alt="提供範囲"
              className="w-full h-auto pointer-events-none select-none"
              draggable={false}
            />
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-gray-700 text-[14px] md:text-base">
                <CheckCircle2 className="w-5 h-5 text-gray-900" />
                <span>ストア要件を設計段階から考慮。審査・申請まで代行</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 text-[14px] md:text-base">
                <CheckCircle2 className="w-5 h-5 text-gray-900" />
                <span>計測→学習→改善を高速ループ。継続率・CVを継続的に向上</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================
   進め方（参考画像と同配置）
   ========================= */
   function Process() {
    const top = [
      { label: "MVP定義",     icon: <Target className="h-6 w-6 md:h-7 md:w-7" />,      ring: "#C9A78E" },
      { label: "初期リリース", icon: <Sparkles className="h-6 w-6 md:h-7 md:w-7" />,    ring: "#E4572E" },
      { label: "テスト①",     icon: <ShieldCheck className="h-6 w-6 md:h-7 md:w-7" />, ring: "#6B5F2B" },
      { label: "テスト②",     icon: <ShieldCheck className="h-6 w-6 md:h-7 md:w-7" />, ring: "#6B5F2B" },
    ];
    const bottom = [
      { label: "設計/開発",   icon: <Code className="h-6 w-6 md:h-7 md:w-7" />,        ring: "#9CA3AF" },
      { label: "機能追加①",   icon: <PlusCircle className="h-6 w-6 md:h-7 md:w-7" />,  ring: "#4B5563" },
      { label: "追加機能②",   icon: <PlusCircle className="h-6 w-6 md:h-7 md:w-7" />,  ring: "#4B5563" },
      { label: "本格リリース", icon: <Rocket className="h-6 w-6 md:h-7 md:w-7" />,      ring: "#E4572E" },
    ];
  
    // カラム位置（%）とY座標
    const xs = [8, 36, 64, 92];
    const xFinal = Math.min(96, xs[3] + 6); // 本格リリースを少し右寄せ
    const yBar = 160, yTop = 245, yBottom = 390, H = 440;
  
    return (
      <section className="bg-[#fbfcfe] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900">
            アジャイル開発で実現する
          </h2>
  
          <div className="relative mt-8 hidden md:block">
            <svg className="absolute inset-0 w-full" style={{ height: H }}>
              <defs>
                {/* 両端矢印（期間バー用） */}
                <marker id="arrowBoth" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto">
                  <polygon points="0 0, 10 4, 0 8" fill="#111827" />
                </marker>
              </defs>
  
              {/* 3ヶ月 */}
              <g stroke="#111827" strokeWidth="2" markerStart="url(#arrowBoth)" markerEnd="url(#arrowBoth)">
                <line x1={`${xs[0]}%`} y1={yBar} x2={`${xs[1]}%`} y2={yBar} />
              </g>
              <text x={`${(xs[0] + xs[1]) / 2}%`} y={yBar - 5} textAnchor="middle" fontSize="16" fontWeight="400" fill="#111827">
                3ヶ月
              </text>
  
              {/* 2週間 */}
              <g stroke="#111827" strokeWidth="2" markerStart="url(#arrowBoth)" markerEnd="url(#arrowBoth)">
                <line x1={`${xs[1]}%`} y1={yBar} x2={`${xs[2]}%`} y2={yBar} />
              </g>
              <text x={`${(xs[1] + xs[2]) / 2}%`} y={yBar - 5} textAnchor="middle" fontSize="16" fontWeight="400" fill="#111827">
                2週間
              </text>
  
              {/* 2週間 … */}
              <g stroke="#111827" strokeWidth="2" markerStart="url(#arrowBoth)" markerEnd="url(#arrowBoth)">
                <line x1={`${xs[2]}%`} y1={yBar} x2={`${xs[3]}%`} y2={yBar} />
              </g>
              <text x={`${(xs[2] + xs[3]) / 2}%`} y={yBar - 5} textAnchor="middle" fontSize="16" fontWeight="400" fill="#111827">
                2週間 …
              </text>
  
              {/* 縦の点線 */}
              {[0,1,2,3].map(i => (
                <line key={`v-${i}`} x1={`${xs[i]}%`} y1={yTop + 40} x2={`${xs[i]}%`} y2={yBottom - 40}
                      stroke="#9CA3AF" strokeWidth="2" strokeDasharray="4 6" />
              ))}
  
              {/* 斜め点線（設計→初期、機能①→テスト①、テスト②→本格） */}
              <line x1={`${xs[0]}%`} y1={yBottom} x2={`${xs[1]}%`} y2={yTop}
                    stroke="#9CA3AF" strokeWidth="2" strokeDasharray="4 6" />
              <line x1={`${xs[1]}%`} y1={yBottom} x2={`${xs[2]}%`} y2={yTop}
                    stroke="#9CA3AF" strokeWidth="2" strokeDasharray="4 6" />
              <line x1={`${xs[3]}%`} y1={yTop} x2={`${xFinal}%`} y2={yBottom}
                    stroke="#9CA3AF" strokeWidth="2" strokeDasharray="4 6" />
  
              {/* … ドット（追加機能②→本格リリースの途中） */}
              {Array.from({ length: 4 }).map((_, k) => {
                const t = 0.35 + 0.12 * k;
                const cx = xs[2] + (xFinal - xs[2]) * t;
                return <circle key={`dots-${k}`} cx={`${cx}%`} cy={yBottom + 18} r="3.6" fill="#111827" />;
              })}
            </svg>
  
            {/* ノード：上段 */}
            <div style={{ height: H }} className="relative">
              {top.map((n, i) => (
                <div key={`top-${i}`} className="absolute" style={{ left: `calc(${xs[i]}% - 40px)`, top: yTop - 40 }}>
                  <div className="h-20 w-20 rounded-full grid place-items-center shadow-[0_12px_22px_-10px_rgba(0,0,0,0.25)]"
                       style={{ border: `10px solid ${n.ring}`, background: "white" }}>
                    <div className="h-12 w-12 rounded-full bg-white grid place-items-center text-gray-900">{n.icon}</div>
                  </div>
                  <p className="mt-2 text-center text-sm font-semibold text-gray-800 whitespace-nowrap">{n.label}</p>
                </div>
              ))}
  
              {/* ノード：下段（最後のみ右寄せ） */}
              {bottom.map((n, i) => {
                const x = i === bottom.length - 1 ? xFinal : xs[i];
                return (
                  <div key={`bottom-${i}`} className="absolute" style={{ left: `calc(${x}% - 40px)`, top: yBottom - 40 }}>
                    <div className="h-20 w-20 rounded-full grid place-items-center shadow-[0_12px_22px_-10px_rgba(0,0,0,0.25)]"
                         style={{ border: `10px solid ${n.ring}`, background: "white" }}>
                      <div className="h-12 w-12 rounded-full bg-white grid place-items-center text-gray-900">{n.icon}</div>
                    </div>
                    <p className="mt-2 text-center text-sm font-semibold text-gray-800 whitespace-nowrap">{n.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
  
          {/* SP：縦並び（簡易） */}
          <div className="mt-8 grid gap-6 md:hidden">
            {[0,1,2,3].map(i => (
              <div key={`col-${i}`} className="grid grid-cols-1 gap-6">
                <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                  <div className="h-14 w-14 rounded-full grid place-items-center" style={{ border: `8px solid ${top[i].ring}`, background: "white" }}>
                    <div className="h-9 w-9 rounded-full bg-white grid place-items-center text-gray-900">{top[i].icon}</div>
                  </div>
                  <div className="font-semibold text-gray-900">{top[i].label}</div>
                </div>
                <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                  <div className="h-14 w-14 rounded-full grid place-items-center" style={{ border: `8px solid ${bottom[i].ring}`, background: "white" }}>
                    <div className="h-9 w-9 rounded-full bg-white grid place-items-center text-gray-900">{bottom[i].icon}</div>
                  </div>
                  <div className="font-semibold text-gray-900">{bottom[i].label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  
  
/* =========================
   アジャイル詳説（2列）
   ========================= */
   function AgileDetails() {
    const blocks = [
      {
        title: "早期に「動くもの」を確認できる",
        body:
          "最初の2〜4週間でMVP（最小実装）を提示。画面遷移・主要フロー・API連携など、リスクの高い箇所から手を付けることで“不確実性”を前倒しで解消します。仕様書ではなく、実際のアプリで合意形成を進めます。",
      },
      {
        title: "フィードバックを即座に反映",
        body:
          "各スプリントの終わりにデモ/レビューを実施。利用ログとユーザーインタビューを併用して優先度を更新し、次スプリントのBacklogへ即反映。意思決定を可視化することで“後戻り”を最小にします。",
      },
      {
        title: "市場変化に迅速対応",
        body:
          "OS/SDK変更や競合機能に合わせ、短いリリースサイクルで追従。フラグ管理・段階Rolloutを仕組み化することで、影響範囲を抑えながら高速に実験/展開できます。",
      },
      {
        title: "リスクを最小限に抑制",
        body:
          "CI/CD・自動テスト・クラッシュ/ANR監視を標準装備。セキュリティ要件やストア審査要件も設計段階から折り込み、障害や申請差し戻しの確率を下げます。",
      },
    ];
  
    return (
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            アジャイル開発の強みを、実務で活かす
          </h3>
  
          {/* 二列グリッド（SPは1列、md以上で2列） */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {blocks.map((b, i) => (
              <div
                key={i}
                className="h-full rounded-xl border border-gray-200 bg-white/70 p-5 md:p-6 shadow-sm"
              >
                <div className="text-base md:text-lg font-semibold text-gray-900">
                  {b.title}
                </div>
                <p className="mt-2 text-gray-700 leading-7">{b.body}</p>
              </div>
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
      tag: "toCサービス",
      title: "初回版を4週間で公開。オンボーディング改善で継続率+18%",
      body:
        "短いスプリントで“最小の価値”を出し、利用データから導線を改善。ストア申請〜運用まで伴走しました。",
      img: "/images/app/case-toc.png",
    },
    {
      tag: "toB SaaS",
      title: "現場起点の要件に対応。クラッシュ率-65%、NPS改善",
      body:
        "CI/CDと監視体制を整備。ユーザーインタビューでUIを再設計し、解約率も低下。",
      img: "/images/app/case-saas.png",
    },
    {
      tag: "新規事業",
      title: "仮説検証→ピボットを素早く。市場適合までの無駄を最小化",
      body:
        "MVP→β→本番の段階展開。指標に基づく検証で“外さない意思決定”を実現。",
      img: "/images/app/case-newbiz.png",
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
      q: "iOS/Androidどちらも対応できますか？",
      a: "はい。ネイティブ個別、もしくは要件に応じたクロスプラットフォーム併用も可能です。",
    },
    {
      q: "公開後の運用までお願いできますか？",
      a: "はい。障害監視、分析レポート、改善提案、軽微改修まで包括的に支援します。",
    },
    {
      q: "ストア申請が不安です。",
      a: "事前要件整理〜提出物準備〜指摘対応まで代行します。審査要件を設計段階から考慮します。",
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
   最後のCTA
   ========================= */
function FinalCTA() {
  return (
    <section id="contact" className="bg-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900">
          小さく始めて、速く学ぶ。アジャイルで前へ。
        </h2>
        <p className="mt-4 text-gray-700">
          10〜15分のオンラインヒアリングで現状とゴールを整理。最短ルートをご提案します。
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
