// app/columns/webagency-osaka-benefits/page.tsx
"use client";


import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Building2, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function WebagencyOsakaBenefitsPage() {
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
<span className="block">【大阪】サブスクリプションで利用できるweb制作会社を選ぶメリット</span>
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
<span className="ml-2 text-gray-800 font-medium">【大阪】サブスクリプションで利用できるweb制作会社を選ぶメリット</span>
</li>
</ul>
</nav>

<div
className="mt-14 bg-gray-800 text-white h-[300px] flex items-end justify-center mb-8 relative bg-cover bg-center max-md:h-auto max-md:pt-[4.5em] max-md:pb-0"
style={{
backgroundImage: "url('/images/columns/head-mv-07.jpg')",
}}
>
<h2 className="bg-black/40 w-full p-2 max-md:p-2 text-[20px] max-md:text-[14px]">
【大阪】サブスクリプションで利用できるweb制作会社を選ぶメリットについて解説
</h2>
</div>


          <p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
                       大阪でweb制作会社を探している方で、サイト制作の初期費用の負担や、制作後の管理に不安を感じている方も多いのではないでしょうか。特に初期費用はまとまった金額が必要になるため、そこのコストだけでも分散させられればと考える方は少なくありません。そんな中、昨今は月額で利用できるサブスクリプション型のweb制作サービスが注目されています。
                       </p>
          <p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
                       こちらでは、サブスクリプション型web制作のメリットや、自社に合う制作会社の選び方について解説します。
                       </p>
          <p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
                       ホームページ制作の初期費用について悩んでいる方は、ぜひ参考にしてください。
                       </p>

<h2 className="mb-5 text-[20px] md:text-[24px] font-bold text-gray-800 pb-3 border-b-[3px] border-blue-500 relative leading-snug after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-[60px] after:md:w-[50px] after:h-[3px] after:bg-blue-800 mt-10">
  月額サブスクリプションで利用できるweb制作会社とは
</h2>
<section className="u-mb30 c-block">
<img
src="/images/columns/two-women-design-review.jpg"
alt="月額サブスクリプションで利用できるweb制作会社とは"
className="float-right ml-[2%] mb-[2%] w-[350px]
max-md:float-none max-md:w-full max-md:mr-0 max-md:ml-0 max-md:mb-[4%]"
draggable={false}
/>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
web制作会社を探す際、サブスクリプションという選択肢が広がっています。これは月額定額制でwebサイトの制作から保守までを依頼できるサービスです。こちらでは、サブスクリプションで利用できるweb制作会社の概要や、従来の一括払い型との違い、仕組みについて解説します。
</p>

<div>
<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  サブスクリプション型web制作の基本概要
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
サブスクリプション型web制作サービスは、月額料金を支払うことでwebサイトの制作、公開、運用、保守を一貫して受けられるサービスです。多くの場合、サーバーやドメインの管理費用も月額料金に含まれています。初期費用を大幅に抑えられ、手軽にwebサイトを始められる点が大きな特徴です。契約期間中は継続的なサポートが受けられるため、専門知識がない企業でも安心して導入できます。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  従来の一括払い型制作との明確な違い
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
従来の一括払い型は、制作時に数十万～数百万円の費用をまとめて支払うのが一般的でした。サイト完成後の更新や修正には、その都度追加費用が発生します。一方、サブスクリプション型は初期費用が無料または低価格で、月額定額で利用可能です。制作後の修正やコンテンツ追加、保守作業が料金内に含まれているプランも多く、コスト管理がしやすい点が大きな違いと言えるでしょう。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  月額定額サービスの仕組み
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
月額定額サービスは、制作会社が用意したテンプレートやフレームワークを基に、顧客の要望に合うwebサイトを構築することで成り立っています。制作プロセスを効率化することで、低価格と短納期を実現しています。顧客は月額料金を支払うことで、常に最新の状態に保たれたwebサイトと専門家によるサポートを利用し続けられます。
</p>

</div>
</section>
<h2 className="mb-5 text-[20px] md:text-[24px] font-bold text-gray-800 pb-3 border-b-[3px] border-blue-500 relative leading-snug after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-[60px] after:md:w-[50px] after:h-[3px] after:bg-blue-800 mt-10">
  定額サブスクリプション型web制作サービスのメリット
</h2>
<section className="u-mb30 c-block">
<img
src="/images/columns/blue-blocks-merit.jpg"
alt="定額サブスクリプション型web制作サービスのメリット"
className="float-right ml-[2%] mb-[2%] w-[350px]
max-md:float-none max-md:w-full max-md:mr-0 max-md:ml-0 max-md:mb-[4%]"
draggable={false}
/>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
定額サブスクリプション型のweb制作には、多くのメリットが存在します。特にコスト面や運用面でのメリットは、事業の成長を後押しする要素となり得ます。こちらでは、初期費用、予算計画、保守、公開速度の4つの観点から具体的なメリットを紹介します。
</p>

<div>
<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  初期費用を抑えて高品質なwebサイトを制作
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
webサイト制作で大きな障壁となるのが、高額な初期費用です。定額サブスクリプション型サービスでは、この初期費用が無料または数万円程度に設定されている場合がほとんどです。そのため、事業を始めたばかりの企業や、広告など他の分野に予算をかけたい中小企業でも、手軽に高品質なwebサイトを持てます。浮いた予算を採用活動やマーケティングに回すなど、戦略的な資金活用が可能になります。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  月額定額払いで将来の予算計画が容易に
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
サブスクリプション型の料金体系は、月額定額払いが基本です。毎月の支払い額が一定であるため、年間のコストを正確に把握でき、将来的な予算計画が非常に立てやすくなります。webサイトの更新や修正で突発的な出費が発生する心配もありません。資金繰りの見通しが立てやすい点は、安定した経営を目指す中小企業にとって大きなメリットと言えるでしょう。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  専門家による継続的な保守・更新サポート
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
webサイト公開後は、セキュリティの維持やコンテンツの鮮度を保つための継続的な運用が欠かせません。サブスクリプション型サービスには、専門家による保守や更新サポートが含まれているのが一般的です。法改正に伴うプライバシーポリシーの更新や、定期的なバックアップ作業なども任せられます。社内にweb担当者がいなくても、安心してサイト運用を続けられます。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  短納期でスピーディーなwebサイト公開
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ビジネスチャンスを逃さないためには、webサイトのスピーディーな公開が求められます。サブスクリプション型web制作は、既存のテンプレートやシステムを活用して効率的に制作を進めるため、短納期での公開が可能です。サービスによっては最短数日で公開できる場合もあり、急な事業展開やキャンペーンにも迅速に対応できます。市場の変化に素早く合わせられる点も、大きなメリットの一つです。
</p>

</div>
</section>
<h2 className="mb-5 text-[20px] md:text-[24px] font-bold text-gray-800 pb-3 border-b-[3px] border-blue-500 relative leading-snug after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-[60px] after:md:w-[50px] after:h-[3px] after:bg-blue-800 mt-10">
  サブスクリプション型web制作と保守の選び方
</h2>
<section className="u-mb30 c-block">
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
サブスクリプション型のweb制作会社を選ぶ際には、いくつかのポイントを押さえる必要があります。料金だけでなく、制作実績やサポート内容を総合的に判断し、自社の目的に合うパートナーを見つけることが大切です。
</p>

<div>
<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  制作実績で見るweb制作会社の実力
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
まず確認したいのが、web制作会社の制作実績です。過去にどのような業種のwebサイトを手掛けてきたか、デザインの質や機能性はどうかを確認しましょう。自社の業種に近い実績が豊富であれば、業界の特性を理解した提案が期待できます。実績ページを見ることで、その会社が得意とするデザインの方向性や技術レベルを把握できるでしょう。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  月額料金と保守内容のバランス
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
月額料金だけで判断するのは危険です。料金に含まれる保守内容を細かく確認し、コストパフォーマンスを見極めましょう。更新作業は月何回まで可能か、どのような修正に対応してくれるのか、セキュリティ対策は万全かを確認しておくと安心です。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  契約期間と解約条件の事前確認ポイント
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
サブスクリプション型サービスには、通常、契約期間が設定されています。最低契約期間はどのくらいか、期間中の解約は可能か、解約時に違約金は発生するかなどを事前に必ず確認してください。また、契約終了後にwebサイトのデータを譲渡してもらえるかどうかも重要なポイントです。将来的なサイトリニューアルや運営体制の変更も見据え、柔軟に対応できる契約内容の会社を選びましょう。
</p>

</div>
</section>
<h2 className="mb-5 text-[20px] md:text-[24px] font-bold text-gray-800 pb-3 border-b-[3px] border-blue-500 relative leading-snug after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-[60px] after:md:w-[50px] after:h-[3px] after:bg-blue-800 mt-10">
  株式会社リクステップは、サブスクリプションにも対応したweb制作会社です
</h2>
<section className="u-mb30 c-block">
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
web制作会社を探す中小企業の担当者にとって、サブスクリプション型サービスは有力な選択肢です。初期費用を抑えつつ、月額定額で高品質なwebサイトの制作から保守までを一貫して任せられます。予算計画の立てやすさや専門家による継続的なサポートは、事業成長を目指すうえで大きな助けとなるでしょう。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
株式会社リクステップは、webサイト制作をサブスクリプションプランで提供しております。業界最安水準の価格設定に加え、最短3日でのスピード納品にも対応しております。大阪を中心に全国のお客様をサポートし、多様なニーズに柔軟にお応えします。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
低コストかつ短納期で、保守も万全なwebサイト制作は、株式会社リクステップにご相談ください。
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
【大阪】サブスクリプションで利用できるweb制作会社を選ぶなら株式会社リクステップ
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