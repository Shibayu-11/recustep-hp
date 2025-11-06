// app/columns/homepage-osaka-analysis/page.tsx
"use client";


import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Building2, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function HomepageOsakaAnalysisPage() {
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
<span className="block">【大阪】ホームページ制作後に重要なレポート作成｜効果測定の中身も解説</span>
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
<span className="ml-2 text-gray-800 font-medium">【大阪】ホームページ制作後に重要なレポート作成｜効果測定の中身も解説</span>
</li>
</ul>
</nav>

<div
className="mt-14 bg-gray-800 text-white h-[300px] flex items-end justify-center mb-8 relative bg-cover bg-center max-md:h-auto max-md:pt-[4.5em] max-md:pb-0"
style={{
backgroundImage: "url('/images/columns/head-mv-09.jpg')",
}}
>
<h2 className="bg-black/40 w-full p-2 max-md:p-2 text-[20px] max-md:text-[14px]">
【大阪】ホームページ制作の後に重要になるレポートについて、効果測定の中身まで解説
</h2>
</div>


          <p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
                       大阪でホームページ制作を検討しているものの、費用対効果がわからず不安を感じていませんか。ホームページは制作して終わりではありません。効果測定と改善を繰り返すことで成果につながります。そのためには、定期的なレポートによる現状把握が欠かせません。
                       </p>
          <p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
                       こちらでは、ホームページ制作後の効果測定の必要性や、レポートで分析すべき指標について解説します。また、制作会社へレポート作成を依頼する際の費用相場や、レポートから改善点を見つける方法も紹介します。
                       </p>

<h2 className="mb-5 text-[20px] md:text-[24px] font-bold text-gray-800 pb-3 border-b-[3px] border-blue-500 relative leading-snug after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-[60px] after:md:w-[50px] after:h-[3px] after:bg-blue-800 mt-10">
  ホームページ制作の費用対効果を可視化する方法
</h2>
<section className="u-mb30 c-block">
<img
src="/images/columns/cost-effectiveness-concept.jpg"
alt="ホームページ制作の費用対効果を可視化する方法"
className="float-right ml-[2%] mb-[2%] w-[350px]
max-md:float-none max-md:w-full max-md:mr-0 max-md:ml-0 max-md:mb-[4%]"
draggable={false}
/>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ホームページを制作したものの、その効果を正しく把握できていない方は多いのではないでしょうか。制作にかかった費用に対し、どれだけの成果が出ているかを可視化するのは、ビジネスの成長に不可欠です。
</p>

<div>
<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  ホームページ制作で効果測定が欠かせない理由
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ホームページ制作後の効果測定は、ビジネスの成果を測るうえで非常に大切です。感覚的な判断ではなく、データに基づいた客観的な評価ができます。効果測定をおこなうことで、投じた費用に対するリターンが明確になります。成果が出ていない場合は、問題点を特定し、改善策を講じるきっかけにもなります。効果測定は、ホームページを単なる企業の顔から、稼ぐツールへと進化させるための羅針盤です。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  目標達成に不可欠なKGI・KPIの設定方法
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
効果測定を始める前に、まずは目標設定が必要です。最終目標であるKGIと、KGI達成のための中間目標であるKPIを具体的に設定しましょう。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
たとえば、KGIを「ホームページ経由の月間売上100万円」と設定したとします。その場合、KPIは「月間アクセス数5,000」「問い合わせ件数50件」「成約率10％」のように、具体的な数値で設定します。明確な目標があることで、分析の軸が定まり、施策の評価がしやすくなります。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  Googleアナリティクスで分析すべき指標
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
効果測定には、Googleアナリティクスのようなアクセス解析ツールの導入が一般的です。初心者でも見るべきポイントを押さえれば、多くの情報を得られます。最低限、以下の指標は定期的に確認しましょう。
</p>

<ul>
     <li>セッション数：ユーザーがサイトを訪問した回数</li>
     <li>ユーザー数：サイトを訪れた固有の人数</li>
     <li>ページビュー数：ページが閲覧された合計回数</li>
     <li>コンバージョン率：サイト訪問者のうち、目標を達成した割合</li>
     <li>直帰率：1ページだけ見てサイトを離れたユーザーの割合</li>
</ul>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
これらの指標を分析することで、ユーザーの行動やサイトの課題が明らかになります。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  レポートから費用対効果（ROI）を算出する計算式
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
レポートデータを活用すれば、ホームページ制作の費用対効果を算出できます。ROIは、投資した費用に対してどれだけの利益が生まれたかを示す指標です。計算式は以下の通りです。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ROI（％）＝（利益額ー投資額）÷投資額×100
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
たとえば、ホームページ制作費が50万円で、それによって得られた利益が80万円だった場合、ROIは60％となります。この数値が高いほど、投資効果が高いと言えます。定期的にROIを算出することで、ホームページが事業に貢献しているかを客観的に判断できます。
</p>

</div>
</section>
<h2 className="mb-5 text-[20px] md:text-[24px] font-bold text-gray-800 pb-3 border-b-[3px] border-blue-500 relative leading-snug after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-[60px] after:md:w-[50px] after:h-[3px] after:bg-blue-800 mt-10">
  レポート作成の費用とは｜種類別の目安と内訳
</h2>
<section className="u-mb30 c-block">
<img
src="/images/columns/tools-for-analyzing-graphs.jpg"
alt="レポート作成の費用とは｜種類別の目安と内訳"
className="float-right ml-[2%] mb-[2%] w-[350px]
max-md:float-none max-md:w-full max-md:mr-0 max-md:ml-0 max-md:mb-[4%]"
draggable={false}
/>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ホームページの効果測定の必要性はわかっても、自社でレポートを作成するのは難しい場合もあるでしょう。こちらでは、レポート作成を外注する際の費用相場や、その内訳を紹介します。
</p>

<div>
<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  ホームページ制作後のレポート作成にかかる費用相場
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ホームページのレポート作成を外部へ依頼する場合の費用は、レポートの内容や頻度によって変動します。一般的な月次レポートの費用相場は、月額2万円～5万円程度です。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
簡易的なアクセス状況の報告だけであれば費用は安く、競合分析や改善提案まで含むコンサルティング要素が強くなると高くなる傾向があります。まずは自社がレポートに何を求めるのかを明確にしましょう。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  効果測定レポートの費用を決める3つの内訳
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
レポート作成の費用は、主に以下の3つの要素で構成されます。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  データ集計・分析費用
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
Googleアナリティクスなどのツールからデータを抽出し、分析する作業費です。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  レポート作成費用
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
分析結果をわかりやすく資料にまとめるための費用です。グラフや表のデザインも含まれます。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  改善提案・コンサルティング費用
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
分析結果に基づき、具体的な改善策を提案するための費用です。専門的な知見が求められるため、費用の中でも大きな割合を占めます。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
これらの内訳を理解することで、見積りの妥当性を判断しやすくなります。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  目的で選ぶアクセス解析レポートの種類と特徴
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
アクセス解析レポートには、いくつかの種類があります。自社の目的に合ったレポートを選ぶことが、費用対効果を高めるうえで大切です。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  定例レポート
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
月次や週次でサイト全体の数値をまとめた基本的なレポートです。サイトの健康状態を把握するのに向いています。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  施策実行レポート
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
特定のキャンペーンや広告施策の効果を測定するためのレポートです。施策の成否を判断する材料になります。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  競合比較レポート
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
競合サイトの動向を分析し、自社サイトとの比較をおこなうレポートです。市場での立ち位置を確認し、戦略を立てるのに役立ちます。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
目的に応じてレポートを使いわけることで、より的確なサイト改善ができます。
</p>

</div>
</section>
<h2 className="mb-5 text-[20px] md:text-[24px] font-bold text-gray-800 pb-3 border-b-[3px] border-blue-500 relative leading-snug after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-[60px] after:md:w-[50px] after:h-[3px] after:bg-blue-800 mt-10">
  アクセス解析レポートから読み解ける改善点
</h2>
<section className="u-mb30 c-block">
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
アクセス解析レポートは、ただ数値を眺めるだけでは意味がありません。レポートからサイトの課題や改善点を読み取り、次のアクションにつなげることが最も大切です。
</p>

<div>
<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  アクセス解析レポートからわかる具体的な改善点
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
アクセス解析レポートからは、ユーザーの行動に関する多くのヒントが得られます。たとえば「特定のページの直帰率が異常に高い」場合、そのページのデザインや内容に問題があるのかもしれません。「スマホからのアクセスが少ない」のであれば、モバイル対応が不十分である可能性が考えられます。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ほかにも「問い合わせフォームまで到達しているのに離脱が多い」場合は、フォームの入力項目が多すぎるなどの課題が推測できます。このように、レポートの数値を深掘りすることで、具体的な改善点が見えてきます。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  改善点を反映し成果を出すPDCAサイクルの回し方
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
改善点を見つけたら、計画的に実行し、その効果を検証するPDCAサイクルを回すことが成果につながります。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  Plan（計画）
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
レポートから特定した課題に基づき、改善策の仮説を立て、実行計画を立てる。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  Do（実行）
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
計画に沿って、サイトの修正やコンテンツの追加など、改善策を実行する。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  Check（評価）
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
施策実行後、再度アクセス解析をおこない、数値の変化を測定・評価する。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  Action（改善）
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
評価結果に基づき、施策の継続、修正、または中止を判断し、次の計画につなげる。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
このサイクルを継続的に回すことで、ホームページは着実に成果を出せるようになります。
</p>

</div>
</section>
<h2 className="mb-5 text-[20px] md:text-[24px] font-bold text-gray-800 pb-3 border-b-[3px] border-blue-500 relative leading-snug after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-[60px] after:md:w-[50px] after:h-[3px] after:bg-blue-800 mt-10">
  効果測定・レポート作成なら株式会社リクステップにお任せください
</h2>
<section className="u-mb30 c-block">
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ホームページ制作の費用対効果を最大化するためには、Googleアナリティクスなどを活用した効果測定と、その結果に基づいた継続的な改善活動が不可欠です。定期的なレポートでサイトの現状を正確に把握し、データに基づいた改善を繰り返すことで、ホームページは強力なビジネスツールへと成長します。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
もし、「自社での効果測定やレポート作成は難しい」「改善点の見つけ方がわからない」とお悩みの企業担当者様がいらっしゃいましたら、株式会社リクステップにご相談ください。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
株式会社リクステップでは、最短3日でのホームページ制作はもちろん、公開後のアクセス解析レポートの作成、改善提案までワンストップで対応しております。月額費用内でレポート提出も可能で、お客様のビジネスゴール達成をデータに基づいてサポートします。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
メールでのお問い合わせは24時間受け付けておりますので、まずはお気軽にご連絡ください。
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
大阪でホームページ制作に関するご相談なら株式会社リクステップ
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