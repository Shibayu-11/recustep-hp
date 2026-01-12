"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* =========================
   レイアウト定数（PCは現状維持）
   ========================= */
const SPLIT_TOP = 62;
const SPLIT_BOTTOM = 38;

const CLIP_IMG  = `polygon(0 0, ${SPLIT_TOP}% 0, ${SPLIT_BOTTOM}% 100%, 0% 100%)`;
const CLIP_TEXT = `polygon(${SPLIT_TOP}% 0, 100% 0, 100% 100%, ${SPLIT_BOTTOM}% 100%)`;

const LEFT_COL_OFFSET  = "lg:mt-36 xl:mt-48 2xl:mt-56";
const RIGHT_COL_RAISE  = "lg:-mt-10 xl:-mt-14 2xl:-mt-16";
const SECTION_SHIFT    = "lg:-mt-6 xl:-mt-8 2xl:-mt-10";

/* =========================
   型
   ========================= */
type Svc = {
  id: string;
  titleEn: string;     // EN は改行を含めてもOK（例: "APP\nDEVELOPMENT"）
  titleJp: string;     // 小さめラベル
  description: string;
  href: string;
  illustration: string;
};

/* =========================
   データ（pngに統一）
   ========================= */
const services: Svc[] = [
  {
    id: "hp-lp",
    titleEn: "WEB\nCREATIVE",
    titleJp: "HP・LP制作",
    description:
      "企業紹介・サービス紹介・採用特化など、目的に沿った情報設計とデザインで成果に直結するサイトを制作します。",
    href: "/services/hp-lp",
    illustration: "/images/services/hp-lp-service.png",
  },
  {
    id: "app-development",
    titleEn: "APP\nDEVELOPMENT",
    titleJp: "アプリ開発",
    description:
      "iOS / Android の企画から開発・公開までワンストップ対応。UI/UX と安定性を両立します。",
    href: "/services/app-development",
    illustration: "/images/services/app-development-service.png",
  },
  {
    id: "recruitment",
    titleEn: "HUMAN\nRESOURCES",
    titleJp: "採用支援",
    description:
      "採用戦略の設計から導線整備、選考プロセスの改善まで。成長に必要な人材確保を伴走支援します。",
    href: "/services/recruitment",
    illustration: "/images/services/recruitment-support.png",
  },
  {
    id: "system",
    titleEn: "SYSTEM",
    titleJp: "システム開発",
    description:
      "業務要件を踏まえ、最小実装から拡張まで設計。運用まで見据えた堅実なアーキテクチャで作ります。",
    href: "/services/system",
    illustration: "/images/services/system-development.png",
  },
  {
    id: "artbloom",
    titleEn: "ARTBLOOM",
    titleJp: "アートのサブスク",
    description:
      "空間やブランドに合わせた作品を定期交換で提供。アーティストと企業をつなぎ価値を生み出します。",
    href: "/services/artbloom",
    illustration: "/images/services/artbloom-service.png",
  },
  {
    id: "recuste",
    titleEn: "RECUSTE",
    titleJp: "就活生向けアプリ\n「リクステ」",
    description:
      "履歴書・ES作成、AI添削、資格学習、企業スカウト機能を搭載。専任CAが伴走し、内定獲得までを一貫支援します。",
    href: "/services/recuste",
    illustration: "/images/services/recuste-service.png",
  },
];

/* =========================================================
   スマホ専用カード（参考デザイン準拠）
   ========================================================= */
   function MobileServiceCard({ s, priority = false }: { s: Svc; priority?: boolean }) {
    const isArt  = s.id === "artbloom";
    const isRecuste = s.id === "recuste";

    // 表示テキスト：ARTBLOOM / RECUSTE は 1 行固定
    const titleText =
      isArt ? "ARTBLOOM"
      : isRecuste ? "RECUSTE"
      : s.titleEn;

    // ★ 指示反映：全カードでもう"1行分"さらに下げる
    // 以前: hp/app/recruit/system = 3em, art/recuste = 4em
    // 今回: hp/app/recruit/system = 4em, art/recuste = 5em
    const topById: Record<string, string> = {
      "hp-lp":            "mt-[4em]",
      "app-development":  "mt-[4em]",
      "recruitment":      "mt-[4em]",
      "system":           "mt-[4em]",
      "artbloom":         "mt-[5em]",
      "recuste":          "mt-[5em]",
    };
    const topClass = topById[s.id] ?? "mt-[4em]";

    const leftShift = "ml-[-3.5ch]";
    const whiteSpace = isArt || isRecuste ? "whitespace-nowrap" : "whitespace-pre-line";
  
    return (
      <motion.article
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20% 0px" }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <Link
          href={s.href}
          className="group block bg-white border border-black/5 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.16)] rounded-none overflow-hidden"
        >
          {/* 斜め分割ヘッダー（SP 専用） */}
          <div className="relative w-full h-[190px]">
            {/* 左：画像面 */}
            <div className="absolute inset-0" style={{ WebkitClipPath: CLIP_IMG, clipPath: CLIP_IMG }}>
              <Image
                src={s.illustration}
                alt={s.titleJp}
                fill
                sizes="(max-width: 768px) 100vw"
                className="object-cover object-center"
                priority={priority}
              />
            </div>
  
            {/* 右：白面 */}
            <div className="absolute inset-0 bg-white" style={{ WebkitClipPath: CLIP_TEXT, clipPath: CLIP_TEXT }} />
  
            {/* タイトルブロック（白面側） */}
            <div className="absolute inset-y-0 right-0" style={{ left: `${SPLIT_TOP}%` }}>
              <div className="h-full w-full pl-3 pr-2">
                {/* 日本語ラベル（据え置き） */}
                <div className="pt-2">
                  <p className="translate-y-[1em] md:translate-y-0 text-[13px] font-semibold tracking-wide text-gray-500">
                    {s.titleJp}
                  </p>
                </div>
  
                {/* 英語見出し（全カード均等にさらに +1行） */}
                <div className="h-full flex flex-col justify-start">
                  <h3
                    className={[
                      leftShift,
                      topClass,
                      "pb-0 text-left font-black tracking-tight leading-[1.05] text-black",
                      whiteSpace,
                      "break-words",
                      "text-[clamp(16px,4.8vw,22px)]",
                    ].join(" ")}
                  >
                    {titleText}
                  </h3>
                </div>
              </div>
            </div>
          </div>
  
          {/* 説明＋CTA（据え置き） */}
          <div className="p-4 pt-0">
            <div className="mt-4 border-t border-gray-200 pt-4">
              <p className="text-[15px] leading-8 text-gray-800">{s.description}</p>
            </div>
            <span className="mt-4 inline-flex items-center text-primary font-medium">
              詳しく見る
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      </motion.article>
    );
  }
  
  
  
/* =========================================================
   PC 用カード（既存のまま・変更しない）
   ========================================================= */
function DesktopServiceCard({ s, priority = false }: { s: Svc; priority?: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20% 0px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <Link
        href={s.href}
        className="group block relative overflow-hidden bg-white border border-black/5 shadow-[0_25px_60px_-20px_rgba(0,0,0,0.18)] rounded-none"
      >
        <div className="relative w-full h-[240px] sm:h-[300px] md:h-[360px] lg:h-[400px]">
          {/* 左：画像 */}
          <div className="absolute inset-0" style={{ WebkitClipPath: CLIP_IMG, clipPath: CLIP_IMG }}>
            <Image
              src={s.illustration}
              alt={s.titleJp}
              fill
              sizes="(max-width: 1024px) 100vw, 640px"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              priority={priority}
            />
          </div>

          {/* 右：白面 */}
          <div className="absolute inset-0 bg-white" style={{ WebkitClipPath: CLIP_TEXT, clipPath: CLIP_TEXT }} />

          {/* テキスト */}
          <div className="absolute inset-y-0 right-0 flex items-center" style={{ left: `${SPLIT_TOP}%` }}>
            <div className="px-6 sm:px-7 md:px-8 w-full">
              <div className="-ml-3 sm:-ml-4 md:-ml-5 lg:-ml-6">
                <p className="text-[13px] md:text-sm text-gray-500 font-medium">{s.titleJp}</p>
                <h3 className="mt-1 md:mt-2 font-extrabold tracking-normal leading-[1.12] whitespace-pre-line break-normal text-black text-[24px]">
                  {s.titleEn}
                </h3>
              </div>

              <div className="mt-5 md:mt-6 h-px bg-gray-100" />

              <div className="-ml-6 sm:-ml-10 md:-ml-14 lg:-ml-16 pr-4 sm:pr-6 md:pr-8 lg:pr-10">
                <p className="mt-5 md:mt-6 text-[14px] md:text-[15px] leading-8 text-gray-700 break-words max-w-none">
                  {s.description}
                </p>
              </div>

              <span className="mt-6 inline-flex items-center text-primary font-medium">
                詳しく見る
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

/* =========================================================
   セクション
   - PC：既存2カラム（変更なし）
   - SP：カード順を指定の並びに変更し、上記モバイルUIを使用
   ========================================================= */
const mobileOrder: string[] = [
  "hp-lp",            // HP制作
  "app-development",  // アプリ開発
  "recruitment",      // 採用支援
  "system",           // システム開発
  "artbloom",         // アート
  "recuste",          // リクステ
];

export default function Service() {
  // PC レイアウト用（現行どおり）
  const rightCol = services.filter((_, i) => i % 2 === 0);
  const leftCol  = services.filter((_, i) => i % 2 === 1);

  // SP 並び替え
  const dict = Object.fromEntries(services.map(s => [s.id, s]));
  const mobileList = mobileOrder.map(id => dict[id]).filter(Boolean) as Svc[];

  return (
    <section id="services" className="relative bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 見出し・リード文 */}
        <div className="mb-4 md:mb-6 space-y-6">
          <p className="text-[10px] tracking-[0.18em] text-slate-400">
            SERVICE
          </p>

          <div>
            <h2 className="text-[22px] md:text-[24px] lg:text-[26px] font-semibold leading-snug text-slate-900">
              デザインとテクノロジーを融合し、<br />
              貴社の「本質的なビジネス成長」を<br className="md:hidden" />
              牽引するワンストップ・パートナー
            </h2>
          </div>

          <p className="text-[13px] md:text-[14px] leading-relaxed text-slate-600">
            採用、生産性、業務設計、教育、ブランド。<br />
            分野は違っても、向き合う本質は一つ。<br />
            成長が続く仕組みを設計すること。
          </p>

          <p className="text-[13px] md:text-[14px] leading-relaxed text-slate-600">
            私たちは、答えを外から与える会社ではありません。<br />
            企業の中に入り、課題を言語化し、<br />
            再現性のある成長構造として実装します。
          </p>
        </div>

        {/* SP（スマホ専用デザイン） */}
        <div className="md:hidden space-y-8">
          {mobileList.map((s, i) => (
            <MobileServiceCard key={`sp-${s.id}`} s={s} priority={i === 0} />
          ))}
        </div>

        {/* PC（既存 2 カラム） */}
        <div className={`hidden md:grid lg:grid-cols-2 gap-8 lg:gap-12 ${SECTION_SHIFT}`}>
          <div className={`space-y-10 lg:space-y-14 order-2 lg:order-1 ${LEFT_COL_OFFSET}`}>
            {leftCol.map((s) => (
              <DesktopServiceCard key={`pc-left-${s.id}`} s={s} />
            ))}
          </div>

          <div className={`space-y-10 lg:space-y-14 order-1 lg:order-2 ${RIGHT_COL_RAISE}`}>
            {rightCol.map((s, idx) => (
              <DesktopServiceCard key={`pc-right-${s.id}`} s={s} priority={idx === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
