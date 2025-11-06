// app/columns/homepage-osaka-speed/page.tsx
"use client";


import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Building2, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function HomepageOsakaSpeedPage() {
return (
    <main className="min-h-screen bg-white">
    {/* 固定ヘッダー */}
     <Navbar />
    {/* ===== Hero：モバイル小さめ / 上タブ分の余白維持 ===== */}


<section className="relative pt-[88px] lg:pt-[104px] pb-10 sm:pb-12 md:pb-16 bg-gradient-to-b from-white to-slate-50">
<div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
<motion.div
initial={{ opacity: 0, y: 18 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
className="text-center"
>
<h1 className="text-[24px] sm:text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-[-0.01em]">
<span className="block">【大阪】短納期に対応できるホームページ制作会社｜依頼のコツも解説</span>
</h1>
</motion.div>
</div>
</section>
<div className="max-w-4xl mx-auto pb-14 px-4">

<nav className="my-6 text-sm text-gray-600" aria-label="パンくずリスト">
<ul className="flex flex-wrap items-center space-x-2">
<li>
<a href="/" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">HOME</a>
</li>
<li className="flex items-center">
<span className="text-gray-400">›</span>
<a href="/columns" className="ml-2 text-blue-600 hover:text-blue-800 transition-colors duration-300">コラム一覧</a>
</li>
<li className="flex items-center">
<span className="text-gray-400">›</span>
<span className="ml-2 text-gray-800 font-medium">【大阪】短納期に対応できるホームページ制作会社｜依頼のコツも解説</span>
</li>
</ul>
</nav>

<div
className="mt-14 bg-gray-800 text-white h-[300px] flex items-end justify-center mb-8 relative bg-cover bg-center max-md:h-auto max-md:pt-[4.5em] max-md:pb-0"
style={{
backgroundImage: "url('/images/columns/head-mv-05.jpg')",
}}
>
<h2 className="bg-black/40 w-full p-2 max-md:p-2 text-[20px] max-md:text-[14px]">
【大阪】短納期での採用サイト・ランディングページ制作に対応できるホームページ制作会社
</h2>
</div>


          <p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
                       「販促用のランディングページを急いで作りたい」「採用サイトをすぐに公開したい」などの悩みを抱え、今すぐ依頼できるホームページ制作会社を探している方はいらっしゃいませんか。
                       </p>
          <p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
                       短納期でもコストパフォーマンスが高いランディングページ・採用サイトの作成を実現するためには、事前に知っておきたい依頼時のポイントがあります。
                       </p>
          <p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
                       こちらでは、大阪で短納期でのホームページ制作を依頼したい方へ向けて、ランディングページや採用サイトを迅速に立ち上げるためのポイントを解説します。制作会社選びのコツや、依頼前に準備すべきことも紹介するので、ぜひ参考にしてみてください。
                       </p>

<h2 className="mb-5 text-[20px] md:text-[24px] font-bold text-gray-800 pb-3 border-b-[3px] border-blue-500 relative leading-snug after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-[60px] after:md:w-[50px] after:h-[3px] after:bg-blue-800 mt-10">
  短納期でランディングページの制作を依頼するポイント
</h2>
<section className="u-mb30 c-block">
<img
src="/images/columns/young-business-people-meeting.jpg"
alt="短納期でランディングページの制作を依頼するポイント"
className="float-right ml-[2%] mb-[2%] w-[350px]
max-md:float-none max-md:w-full max-md:mr-0 max-md:ml-0 max-md:mb-[4%]"
draggable={false}
/>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ランディングページは、Web広告やSNSからの訪問者を直接コンバージョンへ導く重要なページです。キャンペーンや新商品の告知など、特定の目的に特化しているため、スピーディーな公開が求められるケースも少なくありません。こちらでは、ランディングページの制作を短納期で実現するためのポイントについて紹介します。
</p>

<div>
<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  ランディングページを短納期で制作するための工夫
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ランディングページを短納期で制作するためには、いくつかの工夫が必要です。一つは、テンプレートやフレームワークの活用です。実績のある構成を基にデザインを組み立てることで、ゼロから設計するよりも工数を大幅に削減できます。また、ヒアリングからデザイン、コーディング、公開までを一貫して担当するチーム体制も、迅速な制作を支える理由の一つです。これにより各工程間の連携がスムーズになり、手戻りや待ち時間を最小限に抑えられます。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  【大阪】制作会社に依頼するメリットと費用相場
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
大阪の制作会社へ依頼すると、対面での打ち合わせがしやすいというメリットがあります。電話やメールだけでは伝わりにくい細かなニュアンスも、直接会って話すことで正確に共有できるので、認識の齟齬を防げます。また、地域性を理解しているため、大阪の市場に合わせたターゲット設定やコンテンツ提案が期待できるでしょう。費用相場は制作内容によって変動しますが、テンプレートを活用した簡易的なLPであれば10万円～30万円程度が一般的です。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  依頼前に準備すべき3つのこと
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ランディングページの制作をスムーズに進めるには、事前の準備が鍵となります。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  ページの目的とターゲットの明確化
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
まずは、ページの目的とターゲットを明確にしましょう。「誰に、何を伝えて、どう行動してほしいか」を具体的に言語化してください。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  テキストや画像素材の準備
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
掲載したいテキストや画像素材は、あらかじめ用意しておきましょう。素材が揃っているだけで、制作会社の作業は格段に早まります。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  参考サイトの用意
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
デザインの参考になる競合サイトやイメージに近いサイトをいくつかリストアップしておくと、イメージの共有が円滑に進みます。
</p>

</div>
</section>
<h2 className="mb-5 text-[20px] md:text-[24px] font-bold text-gray-800 pb-3 border-b-[3px] border-blue-500 relative leading-snug after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-[60px] after:md:w-[50px] after:h-[3px] after:bg-blue-800 mt-10">
  短納期で採用サイトの制作を依頼する流れ
</h2>
<section className="u-mb30 c-block">
<img
src="/images/columns/plan-sign-blue-sky.jpg"
alt="短納期で採用サイトの制作を依頼する流れ"
className="float-right ml-[2%] mb-[2%] w-[350px]
max-md:float-none max-md:w-full max-md:mr-0 max-md:ml-0 max-md:mb-[4%]"
draggable={false}
/>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
企業の成長にとって、優秀な人材の確保は重要な経営課題です。採用サイトは、求職者に対して自社の魅力やビジョンを伝え、応募意欲を喚起する役割を担います。急な人員募集や採用イベントに合わせて、サイトを短納期で公開したいと考える企業も多いでしょう。こちらでは、採用サイトをスピーディーに立ち上げるための依頼のコツをお伝えします。
</p>

<div>
<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  採用サイトを短納期で制作するメリットとデメリット
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
採用サイトを短納期で制作する最大のメリットは、採用活動の機会損失を防げる点です。求人広告の出稿や合同説明会の開催に合わせ、タイムリーに情報発信を開始できます。一方で、デメリットも存在します。制作期間が短い分、コンテンツの作り込みが甘くなる可能性があります。社員インタビューや独自の福利厚生など、自社の魅力を深く伝えるためのコンテンツ作成には時間がかかるため、公開後の継続的な改善を視野に入れておくのが良いでしょう。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  【大阪】採用サイト制作における料金プランと選び方
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
大阪での採用サイト制作の料金は、規模や機能によって大きく異なります。数ページ構成のシンプルなサイトであれば30万円～50万円程度が相場です。一方、社員紹介やブログ機能、エントリーフォームなどを盛り込んだ本格的なサイトになると、100万円を超えるケースもあります。料金プランを選ぶ際は、まず採用活動に最低限必要な機能を洗い出しましょう。そのうえで、予算と照らし合わせながら、拡張性も考慮してプランを選択するのが賢明です。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  制作会社に依頼するときの流れと注意点
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
採用サイト制作を依頼する大まかな流れは、「要件定義」「設計」「デザイン制作」「コーディング」「公開」です。短納期を実現するには、各工程での迅速な確認とフィードバックが不可欠です。特に、デザイン案の確認や原稿のチェックは、滞ると全体のスケジュールに影響します。制作会社に丸投げするのではなく、自社の採用担当者もプロジェクトの一員として積極的に関わる姿勢が求められます。
</p>

</div>
</section>
<h2 className="mb-5 text-[20px] md:text-[24px] font-bold text-gray-800 pb-3 border-b-[3px] border-blue-500 relative leading-snug after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-[60px] after:md:w-[50px] after:h-[3px] after:bg-blue-800 mt-10">
  コーディングを短納期で依頼する際のコツ
</h2>
<section className="u-mb30 c-block">
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
もし自社でデザインデータを完成させた場合でも、HTMLやCSS、JavaScriptを使ってWebページとして表示させる、コーディングの作業が滞ってしまうケースがあります。社内に専門知識を持つ人材がいない場合、外部の制作会社にコーディングのみを依頼するという選択肢もあります。
</p>

<div>
<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  コーディング代行を短納期で依頼できるケース
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
コーディング代行を短納期で依頼できるのは、依頼内容が明確で、必要な素材がすべて揃っているケースです。たとえば、デザインデータが整理されており、仕様がFIXしている状態であれば、コーダーはすぐに作業に着手できます。また、ページ数が少なく、複雑なアニメーションやシステム連携を伴わない静的なサイトであるほど、短納期での対応がしやすくなります。レスポンシブ対応の有無も、納期に影響する要素の一つです。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  【大阪】コーディング代行の料金体系と見積り
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
大阪のコーディング代行の料金体系は、ページ単位やパーツ単位で設定されていることが一般的です。トップページは1万円～4万円、下層ページは1ページあたり5千円～2万円といった料金設定が多く見られます。正確な見積りを取得するには、デザインデータと合わせて詳細な仕様書を提出しましょう
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  丁寧なコーディングをおこなう制作会社の選び方
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
短納期でも丁寧にコーディングをしてくれる制作会社を選びたい場合は、事前に制作実績を確認しましょう。多様な業種やデザインのサイトを手がけている会社は、技術力が高いと判断できます。また、コーディングのルールやガイドラインを設けているかも重要なポイントです。誰が作業しても一定の品質を保てる体制が整っているかを確認してください。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  スムーズな依頼のために用意すべき仕様書の内容
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
スムーズなコーディング依頼には、詳細な仕様書の準備が欠かせません。最低限、以下の項目は記載しましょう。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  対象のデザインデータ
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ファイル名や共有URLを明記します。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  対応デバイスとブラウザ
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
PC、スマホそれぞれの対応範囲を指定します。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  動的要素
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
スライダーやアコーディオンなど、動きをつけたい箇所を具体的に指示します。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  納品形式
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ファイル形式や納品方法を記載します。これらの情報が整理されていることで、制作会社とのコミュニケーションコストが削減され、結果的に納期短縮につながります。
</p>

</div>
</section>
<h2 className="mb-5 text-[20px] md:text-[24px] font-bold text-gray-800 pb-3 border-b-[3px] border-blue-500 relative leading-snug after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-[60px] after:md:w-[50px] after:h-[3px] after:bg-blue-800 mt-10">
  【大阪】短納期でのホームページ制作なら、株式会社リクステップにお任せください
</h2>
<section className="u-mb30 c-block">
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
こちらでは、大阪でホームページ制作を短納期で実現するためのポイントを解説しました。ランディングページや採用サイトを迅速に立ち上げるには、制作会社との円滑な連携と、発注者側の事前準備が鍵となります。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
とにかく急いでサイトを公開したい、限られた予算で最大限の効果を出したいとお考えの方は、株式会社リクステップをご検討ください。株式会社リクステップは、お申し込みから最短3日～7日という驚異的なスピードで、高品質なホームページが納品可能です。低価格でありながら、集客や採用につながる効果的なサイト制作を実現します。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
まずは、お気軽にお問い合わせください。
</p>

        <div className="mt-10 sm:mt-12 text-center px-4">
          <Link href="/contact">
            <Button size="lg" className="px-9 sm:px-12 py-4 text-[15px] sm:text-lg shadow-xl rounded-xl">
              お問い合わせはこちら
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
</section>


<div className="mt-14">
<h2 className="mb-5 text-[20px] md:text-[24px] font-bold text-gray-800 pb-3 border-b-[3px] border-blue-500 relative leading-snug after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-[60px] after:md:w-[50px] after:h-[3px] after:bg-blue-800 mt-10">
【大阪】ホームページ制作・Web制作に関するコラム
</h2>
<ol className="space-y-3 mt-6">
  <li className="group">
    <a href="/columns/homepage-osaka-design" 
       className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-300">
      <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 text-sm font-bold text-white bg-blue-500 rounded-full group-hover:bg-blue-600 transition-colors">1</span>
      <span className="text-gray-800 group-hover:text-blue-600 transition-colors leading-relaxed">【大阪】デザインで成果を出すホームページ制作｜実際の事例も紹介</span>
    </a>
  </li>
  <li className="group">
    <a href="/columns/homepage-osaka-estimate" 
       className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-300">
      <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 text-sm font-bold text-white bg-blue-500 rounded-full group-hover:bg-blue-600 transition-colors">2</span>
      <span className="text-gray-800 group-hover:text-blue-600 transition-colors leading-relaxed">【大阪】ホームページ制作の価格相場｜見積りを取る方法を解説</span>
    </a>
  </li>
  <li className="group">
    <a href="/columns/homepage-osaka-automation" 
       className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-300">
      <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 text-sm font-bold text-white bg-blue-500 rounded-full group-hover:bg-blue-600 transition-colors">3</span>
      <span className="text-gray-800 group-hover:text-blue-600 transition-colors leading-relaxed">【大阪】LINE連携に対応したホームページ作成｜自動化についても解説</span>
    </a>
  </li>
  <li className="group">
    <a href="/columns/homepage-osaka-benefits" 
       className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-300">
      <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 text-sm font-bold text-white bg-blue-500 rounded-full group-hover:bg-blue-600 transition-colors">4</span>
      <span className="text-gray-800 group-hover:text-blue-600 transition-colors leading-relaxed">【大阪】24時間メールを受け付けるホームページ作成会社を選ぶメリット</span>
    </a>
  </li>
  <li className="group">
    <a href="/columns/homepage-osaka-speed" 
       className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-300">
      <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 text-sm font-bold text-white bg-blue-500 rounded-full group-hover:bg-blue-600 transition-colors">5</span>
      <span className="text-gray-800 group-hover:text-blue-600 transition-colors leading-relaxed">【大阪】短納期に対応できるホームページ制作会社｜依頼のコツも解説</span>
    </a>
  </li>
  <li className="group">
    <a href="/columns/homepage-osaka-guide" 
       className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-300">
      <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 text-sm font-bold text-white bg-blue-500 rounded-full group-hover:bg-blue-600 transition-colors">6</span>
      <span className="text-gray-800 group-hover:text-blue-600 transition-colors leading-relaxed">【大阪】相場より安いホームページ制作会社の探し方｜失敗しないコツも解説</span>
    </a>
  </li>
  <li className="group">
    <a href="/columns/webagency-osaka-benefits" 
       className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-300">
      <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 text-sm font-bold text-white bg-blue-500 rounded-full group-hover:bg-blue-600 transition-colors">7</span>
      <span className="text-gray-800 group-hover:text-blue-600 transition-colors leading-relaxed">【大阪】サブスクリプションで利用できるweb制作会社を選ぶメリット</span>
    </a>
  </li>
  <li className="group">
    <a href="/columns/webagency-osaka-support" 
       className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-300">
      <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 text-sm font-bold text-white bg-blue-500 rounded-full group-hover:bg-blue-600 transition-colors">8</span>
      <span className="text-gray-800 group-hover:text-blue-600 transition-colors leading-relaxed">【大阪】保守・運用サポートが充実したweb制作会社の選び方を解説</span>
    </a>
  </li>
    <li className="group">
    <a href="/columns/homepage-osaka-analysis" 
       className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-300">
      <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 text-sm font-bold text-white bg-blue-500 rounded-full group-hover:bg-blue-600 transition-colors">9</span>
      <span className="text-gray-800 group-hover:text-blue-600 transition-colors leading-relaxed">【大阪】ホームページ制作後に重要なレポート作成｜効果測定の中身も解説</span>
    </a>
  </li>
    <li className="group">
    <a href="/columns/homepage-osaka-insights" 
       className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-300">
      <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 text-sm font-bold text-white bg-blue-500 rounded-full group-hover:bg-blue-600 transition-colors">10</span>
      <span className="text-gray-800 group-hover:text-blue-600 transition-colors leading-relaxed">【大阪】SEOに強いホームページ制作｜かかる費用や納期について解説</span>
    </a>
  </li>
</ol>
</div>

<div className="mt-14">
<h2 className="mb-5 text-[20px] md:text-[24px] font-bold text-gray-800 pb-3 border-b-[3px] border-blue-500 relative leading-snug after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-[60px] after:md:w-[50px] after:h-[3px] after:bg-blue-800 mt-10">
【大阪】短納期に対応できるホームページ制作会社なら株式会社リクステップ
</h2>
<div className="space-y-6">
{[
{ icon: <Building2 className="h-6 w-6 text-primary" />, title: "会社名", content: "株式会社リクステップ" },
{ icon: <MapPin className="h-6 w-6 text-primary" />, title: "所在地", content: "〒594-0013\n大阪府和泉市鶴山台1丁目12-27" },
{ icon: <Phone className="h-6 w-6 text-primary" />, title: "電話番号", content: "090-2382-1811" },
{ icon: <Mail className="h-6 w-6 text-primary" />, title: "メールアドレス", content: "info@recustep.com" },
{ icon: <Clock className="h-6 w-6 text-primary" />, title: "営業時間", content: "平日 9:00-18:00" },
{ icon: <Building2 className="h-6 w-6 text-primary" />, title: "オフィス", content: "〒530-0001\n大阪府大阪市北区梅田1-1-3 大阪駅前第3ビル29階1-1-1号室" },
].map((item, i) => (
<motion.div
key={i}
initial={{ opacity: 0, x: 20 }}
animate={{ opacity: 1, x: 0 }}
transition={{ delay: 0.2 + i * 0.06, duration: 0.4 }}
className="flex items-start gap-4 p-4 rounded-lg bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
>
<div className="p-2 rounded-lg bg-primary/10">{item.icon}</div>
<div>
<h3 className="font-medium mb-1">{item.title}</h3>
<p className="text-gray-600 whitespace-pre-line">{item.content}</p>
</div>
</motion.div>
))}
</div>
</div>
</div>
      
    </main>
  );
}