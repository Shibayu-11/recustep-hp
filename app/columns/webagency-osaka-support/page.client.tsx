// app/columns/webagency-osaka-support/page.tsx
"use client";


import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Building2, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function WebagencyOsakaSupportPage() {
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
<span className="block">【大阪】保守・運用サポートが充実したweb制作会社の選び方を解説</span>
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
<span className="ml-2 text-gray-800 font-medium">【大阪】保守・運用サポートが充実したweb制作会社の選び方を解説</span>
</li>
</ul>
</nav>

<div
className="mt-14 bg-gray-800 text-white h-[300px] flex items-end justify-center mb-8 relative bg-cover bg-center max-md:h-auto max-md:pt-[4.5em] max-md:pb-0"
style={{
backgroundImage: "url('/images/columns/head-mv-08.jpg')",
}}
>
<h2 className="bg-black/40 w-full p-2 max-md:p-2 text-[20px] max-md:text-[14px]">
大阪で保守・運用サポートが充実したweb制作会社を選ぶコツを解説
</h2>
</div>


          <p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
                       大阪でweb制作会社を探しているものの、制作後の保守やサポート体制に不安を感じていませんか。webサイトは完成してからが本当のスタートです。安定した運用や、予期せぬトラブルに対応するためには、信頼できるパートナーのサポートが欠かせません。
                       </p>
          <p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
                       こちらでは、web制作会社が提供する保守・運用サポートの内容や、トラブル時の対応、適切な会社の選び方まで詳しく解説します。
                       </p>
          <p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
                       保守・運営サポートも充実したweb制作会社をお探しなら、株式会社リクステップをぜひご検討ください。
                       </p>

<h2 className="mb-5 text-[20px] md:text-[24px] font-bold text-gray-800 pb-3 border-b-[3px] border-blue-500 relative leading-snug after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-[60px] after:md:w-[50px] after:h-[3px] after:bg-blue-800 mt-10">
  web制作会社の保守サポートを徹底解説
</h2>
<section className="u-mb30 c-block">
<img
src="/images/columns/young-technician-working-datacenter.jpg"
alt="web制作会社の保守サポートを徹底解説"
className="float-right ml-[2%] mb-[2%] w-[350px]
max-md:float-none max-md:w-full max-md:mr-0 max-md:ml-0 max-md:mb-[4%]"
draggable={false}
/>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
web制作会社を選ぶときは、デザインや機能だけでなく、保守サポートの内容確認も大切です。webサイトは公開後も安定して稼働させる必要があり、専門的な知識が求められる場面も少なくありません。こちらでは、webサイトの保守サポートの基本を解説します。
</p>

<div>
<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  そもそもwebサイトの保守サポートとは
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
webサイトの保守サポートとは、完成したwebサイトが正常に機能し続けるように管理・メンテナンスする業務全般を指します。具体的には、サーバーやドメインの管理、ソフトウェアのアップデート、データのバックアップなどが含まれます。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
webサイトは、家と同じで定期的なメンテナンスが必要です。放置していると、セキュリティが脆弱になったり、システム障害が発生する可能性があります。専門的な保守サポートは、webサイトを最適な状態に保ち、ビジネスチャンスの損失を防ぐ役割を担います。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  web制作会社が提供する具体的な保守内容
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
web制作会社では、以下のような保守サービスが提供されます。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  サーバー・ドメインの管理
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
サーバーの監視やドメインの更新手続きを代行します。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  CMSのアップデート
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
WordPressなどのCMS本体やプラグインを最新の状態に保ちます。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  データのバックアップ
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
定期的にサイトのデータを保存し、万が一のデータ消失時に復旧できるように備えます。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  死活監視
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
webサイトが正常に表示されているかを24時間365日監視し、異常があれば通知します。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
これらの内容は契約プランによって異なるため、自社に必要なサポート範囲を明確にしておくことが重要です。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  大阪エリアにおけるwebサイト保守の費用相場
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
大阪エリアでのwebサイト保守にかかる費用は、サポートの内容やサイトの規模によって大きく変動します。一般的な相場としては、月額5,000円から50,000円程度が目安です。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
小規模なサイトの基本的な保守であれば月額1万円未満で対応するケースもあります。一方で、大規模なECサイトや頻繁な更新が必要なサイトの場合は、月額10万円以上になるケースも珍しくありません。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
株式会社リクステップなら、低予算でのwebサイト保守が実現できます。気になる方は、お気軽にお問い合わせください。
</p>

        <div className="mt-10 sm:mt-12 text-center px-4">
          <Link href="/contact">
            <Button size="lg" className="px-9 sm:px-12 py-4 text-[15px] sm:text-lg shadow-xl rounded-xl">
              お問い合わせはこちら
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
</div>
</section>
<h2 className="mb-5 text-[20px] md:text-[24px] font-bold text-gray-800 pb-3 border-b-[3px] border-blue-500 relative leading-snug after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-[60px] after:md:w-[50px] after:h-[3px] after:bg-blue-800 mt-10">
  運用まで任せられるweb制作会社を選ぶ基準
</h2>
<section className="u-mb30 c-block">
<img
src="/images/columns/laptop-with-growth-chart.jpg"
alt="運用まで任せられるweb制作会社を選ぶ基準"
className="float-right ml-[2%] mb-[2%] w-[350px]
max-md:float-none max-md:w-full max-md:mr-0 max-md:ml-0 max-md:mb-[4%]"
draggable={false}
/>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
webサイトは、ただ存在するだけではビジネスの成果につながりません。集客や売上を向上させるためには、戦略的な運用が求められます。
</p>

<div>
<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  webサイトの「保守」と「運用」の明確な違い
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
保守と運用は混同されがちですが、その目的は明確に異なります。保守の目的がwebサイトを正常に維持することであるのに対し、運用はwebサイトを成長させ、ビジネス上の成果を最大化することを目的とします。
</p>

<ul>
     <li>保守：サーバー管理、セキュリティ対策、バックアップなど、サイトの土台を守る業務</li>
     <li>運用：コンテンツの追加・更新、SEO対策、アクセス解析、広告運用など、サイトを活用して成果を出すための業務</li>
</ul>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
両者は車の両輪のような関係であり、安定した保守があってこそ効果的な運用が成り立ちます。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  制作会社に運用代行を依頼するメリット
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
webサイトの運用には、マーケティングやSEO、コンテンツ作成といった専門知識が必要です。これらの業務をすべて社内で対応するのは、特にリソースが限られる中小企業にとっては大きな負担となります。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
web制作会社に運用を依頼すれば、専門知識を持つプロに任せられるため、自社の担当者は本来の業務に集中できます。また、客観的な視点からサイトの課題を分析し、効果的な改善策を提案してもらえる点も大きなメリットです。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  webサイト運用代行で依頼できる業務範囲
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
webサイトの運用代行サービスで依頼できる業務は多岐にわたります。主な業務範囲は以下の通りです。
</p>

<ul>
     <li>コンテンツ更新：お知らせやブログ記事の作成・投稿</li>
     <li>SEO対策：検索順位を上げるための内部・外部対策</li>
     <li>アクセス解析：Googleアナリティクスなどを用いたデータ分析と改善提案</li>
     <li>広告運用：リスティング広告やSNS広告の管理・最適化</li>
     <li>SNS運用代行：公式アカウントの投稿作成やコメント対応</li>
</ul>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
どこまで業務を依頼するかによって費用は変動するため、自社の目的や予算に合わせて最適なプランを選びましょう。
</p>

</div>
</section>
<h2 className="mb-5 text-[20px] md:text-[24px] font-bold text-gray-800 pb-3 border-b-[3px] border-blue-500 relative leading-snug after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-[60px] after:md:w-[50px] after:h-[3px] after:bg-blue-800 mt-10">
  トラブル時に頼れるweb制作サポートとは
</h2>
<section className="u-mb30 c-block">
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
webサイトを運営していると、予期せぬトラブルが発生することがあります。「サイトが表示されなくなった」「ハッキングされたかもしれない」といった緊急事態に、迅速かつ的確に対応できるサポート体制は不可欠です。
</p>

<div>
<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  webサイトで起こりがちなトラブル事例
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
webサイトの運営では、以下のようなトラブルが発生する可能性があります。
</p>

<ul>
     <li>サーバーダウン：アクセス集中やサーバーの不具合でサイトが表示されなくなる</li>
     <li>webサイトの改ざん：悪意のある第三者によってコンテンツが書き換えられたり、ウイルスが埋め込まれる</li>
     <li>表示崩れ：CMSやプラグインのアップデート後に、レイアウトが崩れて正しく表示されなくなる</li>
     <li>フォームの不具合：お問い合わせフォームが機能せず、見込み客からの連絡を受け取れない</li>
</ul>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
これらのトラブルは、ビジネスの機会損失や企業の信頼低下に直結する可能性があります。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  迅速なトラブル対応が事業を守る理由
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
webサイトのトラブルが発生したとき、対応の遅れは致命傷になりかねません。たとえば、ECサイトが1時間停止するだけで、数百万単位の売上を失うケースもあります。また、サイトの改ざんを放置すれば、訪問者にウイルスを感染させてしまう加害者になるリスクも否定できません。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
迅速な原因究明と復旧作業は、金銭的な損失を最小限に抑えるだけでなく、顧客や取引先からの信頼を守るうえでも非常に重要です。トラブル発生時にすぐ相談できるパートナーの存在は、事業継続性の観点からも大切です。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  サポート契約の種類とそれぞれの特徴
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
webサイトのサポート契約には、主に月額固定で保守・運用を請け負う月額契約と、トラブル発生時などに都度対応を依頼するスポット契約の2種類があります。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  月額契約
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
毎月定額の費用で、定期的なメンテナンスや緊急時の対応が含まれます。予防保守が中心で、常にサイトを最適な状態に保ちたい企業向けと言えます。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  スポット契約
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
必要なときだけ、作業内容に応じて費用を支払う契約です。コストは抑えられるものの、緊急時にすぐ対応してもらえないリスクがあります。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
安定したサイト運営を目指すなら、迅速な対応が期待できる月額契約がおすすめです。
</p>

</div>
</section>
<h2 className="mb-5 text-[20px] md:text-[24px] font-bold text-gray-800 pb-3 border-b-[3px] border-blue-500 relative leading-snug after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-[60px] after:md:w-[50px] after:h-[3px] after:bg-blue-800 mt-10">
  【大阪】webサイト制作・保守・運用は株式会社リクステップにご相談ください
</h2>
<section className="u-mb30 c-block">
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
web制作会社を選ぶなら、制作後の保守・運用サポートまで見据えることが大切です。安定したサイト運営には、日々のメンテナンスやセキュリティ対策、そして万が一のトラブルに迅速に対応できる体制が欠かせません。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
webサイトの保守・運用に関するお悩みは、ぜひ株式会社リクステップにご相談ください。株式会社リクステップは、大阪を中心に全国の企業様へweb制作から保守・運用まで、ワンストップで対応しております。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
月額1,000円からという業界最安クラスの価格で、サーバー・ドメイン管理、定期バックアップ、WordPressのアップデートなどの基本的な保守を網羅しているのが強みです。さらに、最短3日というスピード納品にも対応しており、お急ぎの場合でも安心です。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
限られた予算の中で、webサイトの保守・運用、トラブル対応まで一括で任せたいとお考えの方は、ぜひ一度お問い合わせください。
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
【大阪】保守・運用サポートが充実したweb制作会社の選ぶなら株式会社リクステップ
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