// app/columns/homepage-osaka-automation/page.tsx
"use client";


import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Building2, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function HomepageOsakaAutomationPage() {
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
<span className="block">【大阪】LINE連携に対応したホームページ作成｜自動化についても解説</span>
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
<span className="ml-2 text-gray-800 font-medium">【大阪】LINE連携に対応したホームページ作成｜自動化についても解説</span>
</li>
</ul>
</nav>

<div
className="mt-14 bg-gray-800 text-white h-[300px] flex items-end justify-center mb-8 relative bg-cover bg-center max-md:h-auto max-md:pt-[4.5em] max-md:pb-0"
style={{
backgroundImage: "url('/images/columns/head-mv-03.jpg')",
}}
>
<h2 className="bg-black/40 w-full p-2 max-md:p-2 text-[20px] max-md:text-[14px]">
【大阪】LINE連携に対応したホームページ作成で、売上アップや自動化を実現する方法
</h2>
</div>


          <p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
                       大阪で店舗を経営するオーナー様の中には、集客や業務効率化に課題を感じている方も多いのではないでしょうか。特に、ITに不慣れな方の場合、何から手をつければ良いかわからないかもしれません。
                       </p>
          <p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
                       そこで注目したいのが、多くの人が日常的に使うLINEとホームページを連携させる方法です。LINE連携による問い合わせや予約の自動化をおこなえば、顧客との接点が増え、集客アップにつながります。
                       </p>
          <p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
                       こちらでは、LINE連携に対応したホームページ作成のメリットや、具体的な自動化の方法、問い合わせ数を増やすためのポイントについて解説します。売上アップと業務効率化を実現するヒントとして、ぜひ最後までご覧ください。
                       </p>

<h2 className="mb-5 text-[20px] md:text-[24px] font-bold text-gray-800 pb-3 border-b-[3px] border-blue-500 relative leading-snug after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-[60px] after:md:w-[50px] after:h-[3px] after:bg-blue-800 mt-10">
  LINE連携でホームページからの売上アップを実現
</h2>
<section className="u-mb30 c-block">
<img
src="/images/columns/sending-message-smartphone.jpg"
alt="LINE連携でホームページからの売上アップを実現"
className="float-right ml-[2%] mb-[2%] w-[350px]
max-md:float-none max-md:w-full max-md:mr-0 max-md:ml-0 max-md:mb-[4%]"
draggable={false}
/>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
LINEとホームページを連携させると、顧客とのコミュニケーションが活発になり、売上向上に直結する仕組みを構築できます。こちらでは、LINE連携がどのようにして売上につながるのかについて、詳しく解説します。
</p>

<div>
<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  LINE連携による顧客との関係構築
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
LINE公式アカウントをホームページと連携させると、友だち登録をしてくれた顧客に直接アプローチできます。たとえば、セール情報や新商品の案内、クーポンなどを配信することで、再来店や再購入を促せます。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
メールマガジンよりも開封率が高いLINEは、顧客に情報を届けやすい点が強みです。顧客一人ひとりに合わせたメッセージを送ることで、親近感を持ってもらい、店舗のファンになってもらえる好循環が生まれるでしょう。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  ホームページとLINEの予約・決済連携による自動化
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ホームページにLINEの予約機能を連携させると、顧客は使い慣れたLINEアプリから簡単に予約を完了できます。電話予約のように営業時間内に対応する必要がなくなるので、機会損失を防げます。さらに、LINE上で決済まで完結する仕組みを導入すれば、当日の会計業務もスムーズになります。予約から決済までを自動化することで、スタッフの負担を減らし、顧客満足度の向上も実現できるのです。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  問い合わせからスムーズに予約へつなげられる
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
顧客が店舗に対して疑問・質問を持っている場合でも、LINEからの問い合わせを有効にしておけば質問のハードルを下げられるので、そこから予約へつなげられる確率も上がります。受けた問い合わせに対して、チャットで迅速に対応することで、顧客の関心が高い状態で予約へと誘導できるでしょう。簡単な質問には自動で応答し、複雑な内容のみスタッフが対応する分担も可能です。
</p>

</div>
</section>
<h2 className="mb-5 text-[20px] md:text-[24px] font-bold text-gray-800 pb-3 border-b-[3px] border-blue-500 relative leading-snug after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-[60px] after:md:w-[50px] after:h-[3px] after:bg-blue-800 mt-10">
  LINE連携で実現できる自動化について
</h2>
<section className="u-mb30 c-block">
<img
src="/images/columns/gear-hand-network-diagram.jpg"
alt="LINE連携で実現できる自動化について"
className="float-right ml-[2%] mb-[2%] w-[350px]
max-md:float-none max-md:w-full max-md:mr-0 max-md:ml-0 max-md:mb-[4%]"
draggable={false}
/>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ホームページとLINEを連携させるメリットの一つが「自動化」です。これまでスタッフが手動でおこなっていた多くの業務を自動化できれば、人手不足の解消や人件費の削減につながります。こちらでは、どのようなことが自動化できるのか、その事例を見ていきましょう。
</p>

<div>
<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  LINEチャットボットによる24時間自動問い合わせ対応
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ホームページにLINEのチャットボットを設置すると、顧客からのよくある質問に24時間365日、自動で応答できます。「営業時間は？」「駐車場はありますか？」などの定型的な質問にも、即座に回答が可能になります。これにより、スタッフの問い合わせ対応の時間を大幅に削減できるでしょう。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  ホームページ更新と連動したLINEメッセージ自動配信
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ホームページのブログやお知らせを更新した際に、その内容をLINEの友だち全員に自動でメッセージ配信する仕組みも構築できます。これにより、新しい情報を公開するたびに、手動でLINEのメッセージを作成し、配信する手間が省けます。この機能を活用すれば、常に最新の情報を顧客に届けられるでしょう。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  LINEで顧客情報を自動収集・管理する仕組みづくり
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
LINE公式アカウントを通じて、顧客の属性や好みを自動で収集・管理することも可能です。たとえば、収集した情報を元に、特定の顧客層にだけターゲットを絞ったメッセージなどを配信できます。この機能を活用すれば、「20代女性向けの新商品情報」や「リピーター限定の特別クーポン」なども送れるので、販促効果を最大化できます。
</p>

</div>
</section>
<h2 className="mb-5 text-[20px] md:text-[24px] font-bold text-gray-800 pb-3 border-b-[3px] border-blue-500 relative leading-snug after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-[60px] after:md:w-[50px] after:h-[3px] after:bg-blue-800 mt-10">
  LINE連携に対応したホームページ作成で、問い合わせ数を改善する方法
</h2>
<section className="u-mb30 c-block">
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ホームページからの問い合わせは、売上に直結します。しかし「ホームページはあるものの、なかなか問い合わせにつながらない」と悩むオーナー様も少なくありません。LINE連携なら、この課題を解決できるかもしれません。
</p>

<div>
<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  問い合わせフォームより手軽なLINEのメッセージ機能
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
従来の問い合わせフォームは、名前やメールアドレス、電話番号など、入力項目が多くて手間がかかっていました。一方LINEであれば、多くの人が日常的に使うアプリのため、メッセージを送る感覚で気軽に問い合わせができます。この手軽さが、問い合わせの心理的なハードルを大きく下げるため、問い合わせ数の増加が期待できるのです。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  ホームページ訪問者をLINEの問い合わせへ誘導する方法
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ホームページを訪れたユーザーを自然にLINEの問い合わせへと誘導するには、導線設計が重要です。たとえば、ホームページの目立つ場所に「LINEでのお問い合わせはこちら」というボタンを設置したり、ページの右下に追従する形で友だち追加のアイコンを表示させる方法があります。また、「友だち追加でクーポンプレゼント」などの特典を用意するのも効果的です。ユーザーにとってのメリットを提示することで、友だち登録や問い合わせにつなげられるでしょう。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  LINE経由の問い合わせ効果を測定・分析するポイント
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
LINE連携による問い合わせ数改善の効果を正しく評価するためには、データの測定と分析が欠かせません。LINE公式アカウントの分析機能を活用すれば、特定の期間内に何件の問い合わせがあったか、どのページから友だち追加されたかなどを把握できます。これらのデータを定期的に確認すれば、「どの施策が問い合わせ増につながったか」を分析できます。データに基づいて改善を繰り返すことで、より効果的に問い合わせ数を増やしていける好循環を生み出せます。
</p>

</div>
</section>



<h2 className="mb-5 text-[20px] md:text-[24px] font-bold text-gray-800 pb-3 border-b-[3px] border-blue-500 relative leading-snug after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-[60px] after:md:w-[50px] after:h-[3px] after:bg-blue-800 mt-10">
  成長のヒントが見つかる！「レポート」で成果を可視化して改善
</h2>
<section className="u-mb30 c-block">
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ホームページを公開した後に大切となるのは、「狙い通りに集客できているか」を確かめることです。大阪の激戦区で勝ち抜くためには、感覚に頼るのではなく、データに基づいた改善が欠かせません。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
そこで活用したいのが、サイトの動きをまとめたレポートです。レポートを確認することで、以下のような「次の一手」が見えてきます。
</p>

<ul className="mt-4">
  <li><strong>・効果測定</strong>：LINE登録や予約が、どのページから発生しているか特定する</li>
  <li><strong>・改善点の発見</strong>：ユーザーが途中で離脱している「もったいない場所」を見つける</li>
  <li><strong>・費用の最適化</strong>：反応が良い施策に絞ることで、無駄な広告費などを抑える</li>
</ul>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
「数字は苦手…」というオーナー様もご安心ください。難しいデータ分析ではなく、お客様の反応を「見える化」するだけで、お店の強みをさらに伸ばすヒントが次々と見つかります。定期的にサイトのチェックを行い、より愛されるお店づくりを目指しましょう。
</p>

</section>


<h2 className="mb-5 text-[20px] md:text-[24px] font-bold text-gray-800 pb-3 border-b-[3px] border-blue-500 relative leading-snug after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-[60px] after:md:w-[50px] after:h-[3px] after:bg-blue-800 mt-10">
  【大阪】LINE連携に対応したホームページ作成のご依頼は、株式会社リクステップへ
</h2>
<section className="u-mb30 c-block">
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
こちらでは店舗のオーナー様に向けて、LINE連携に対応したホームページの作成がもたらすメリットを解説しました。LINEとホームページを連携させれば、顧客との関係を深めてリピートを促進できます。また、問い合わせ対応や情報発信を自動化することで、業務効率の大幅な改善もおこなえます。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
株式会社リクステップは、大阪を中心に全国の中小店舗様へ向けたホームページ作成サービスを提供しております。LINE連携をはじめ、お客様のビジネス課題を解決するための最適なプランを提案いたします。最大の強みは最短3日という圧倒的な納品スピードと、業界最安水準の価格設定ですので、急遽ホームページの作成が必要になった方にもご利用いただけます。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
低コストかつ短納期で、問い合わせを増やせるホームページを導入したいとお考えでしたら、ぜひ株式会社リクステップにご相談ください。
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
【大阪】ホームページとLINEの連携に対応している、株式会社リクステップ
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