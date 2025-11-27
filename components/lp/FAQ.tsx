// components/lp/FAQ.tsx
"use client";

export default function FAQSection() {
  return (
    <section className="w-full bg-slate-50 py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        {/* セクションヘッダー：他セクションとトンマナ合わせ */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-semibold tracking-[0.35em] text-slate-400">
            FAQ
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-slate-900">
            よくある質問
          </h2>
        </div>

        {/* Q&A リスト */}
        <div className="space-y-10 md:space-y-12">
          {/* Q1 */}
          <div className="flex items-start gap-4 md:gap-6">
            <div className="flex h-10 w-10 md:h-12 md:w-12 flex-shrink-0 items-center justify-center rounded-full border border-sky-500 text-base md:text-lg font-semibold text-sky-600">
              Q
            </div>
            <div>
              <h3 className="text-base md:text-lg font-semibold text-slate-900">
                担当者は変わりませんか？
              </h3>
              <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-700">
                はい、変わりません。就職活動のサポートは初回ヒアリングから
                アフターサポートまで同一のスタッフが一貫して対応いたします。
              </p>
            </div>
          </div>

          {/* Q2 */}
          <div className="flex items-start gap-4 md:gap-6">
            <div className="flex h-10 w-10 md:h-12 md:w-12 flex-shrink-0 items-center justify-center rounded-full border border-sky-500 text-base md:text-lg font-semibold text-sky-600">
              Q
            </div>
            <div>
              <h3 className="text-base md:text-lg font-semibold text-slate-900">
                就職活動について何もわからないので不安です…
              </h3>
              <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-700">
                どんな業界があるのか？から提出書類の作成、面接対策まで
                すべてお伝えいたしますのでご安心ください。学校の授業のような
                形でワークやインプット／アウトプットの時間も設けているため、
                効率よく知識を習得していただけます。
              </p>
            </div>
          </div>

          {/* Q3 */}
          <div className="flex items-start gap-4 md:gap-6">
            <div className="flex h-10 w-10 md:h-12 md:w-12 flex-shrink-0 items-center justify-center rounded-full border border-sky-500 text-base md:text-lg font-semibold text-sky-600">
              Q
            </div>
            <div>
              <h3 className="text-base md:text-lg font-semibold text-slate-900">
                内定はいくつかもらえるのでしょうか？
              </h3>
              <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-700">
                はい、基本的には 2〜3 社は内定が出るように選考スケジュールを
                設定しております。そのうえで、最後に内定先をしっかり比較して
                いただいた上で、ご就職先をお選びいただくことができます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
