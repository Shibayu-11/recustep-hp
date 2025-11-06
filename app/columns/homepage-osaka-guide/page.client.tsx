// app/columns/homepage-osaka-guide/page.tsx
"use client";


import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Building2, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function HomepageOsakaGuidePage() {
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
<span className="block">【大阪】相場より安いホームページ制作会社の探し方｜失敗しないコツも解説</span>
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
<span className="ml-2 text-gray-800 font-medium">【大阪】相場より安いホームページ制作会社の探し方｜失敗しないコツも解説</span>
</li>
</ul>
</nav>

<div
className="mt-14 bg-gray-800 text-white h-[300px] flex items-end justify-center mb-8 relative bg-cover bg-center max-md:h-auto max-md:pt-[4.5em] max-md:pb-0"
style={{
backgroundImage: "url('/images/columns/head-mv-06.jpg')",
}}
>
<h2 className="bg-black/40 w-full p-2 max-md:p-2 text-[20px] max-md:text-[14px]">
大阪で相場より安いホームページ制作会社を探す方法と、失敗しないためのコツを解説
</h2>
</div>


          <p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
                       大阪で事業を運営しており、「できるだけ費用を抑えて、早くホームページが欲しい」とお考えの方はいらっしゃいませんか。
                       </p>
          <p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
                       相場よりも安い価格でのホームページ制作依頼を実現するには、いくつかのコツがあります。
                       </p>
          <p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
                       こちらでは、低価格・短納期での対応が可能なホームページ制作会社を探している方に向けて、依頼で失敗しないためのポイントを解説します。
                       </p>
          <p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
                       制作会社選びのコツから、見積りのチェックリスト、運用保守の重要性まで解説するので、最後までご覧ください。
                       </p>

<h2 className="mb-5 text-[20px] md:text-[24px] font-bold text-gray-800 pb-3 border-b-[3px] border-blue-500 relative leading-snug after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-[60px] after:md:w-[50px] after:h-[3px] after:bg-blue-800 mt-10">
  【大阪】相場より安いホームページ制作を短納期で作るコツ
</h2>
<section className="u-mb30 c-block">
<img
src="/images/columns/reasonable-card-on-pattern.jpg"
alt="【大阪】相場より安いホームページ制作を短納期で作るコツ"
className="float-right ml-[2%] mb-[2%] w-[350px]
max-md:float-none max-md:w-full max-md:mr-0 max-md:ml-0 max-md:mb-[4%]"
draggable={false}
/>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
低価格かつ短納期でホームページ制作を依頼したいという要望は、誰もが持っています。しかし、スピードと価格だけを重視すると、期待した品質や成果を得られないサイトになる可能性があります。こちらでは、安さと速さを両立させながら、満足のいくホームページを手に入れるためのポイントを解説します。
</p>

<div>
<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  制作会社選びのポイント｜安さだけでは決めない
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ホームページ制作会社を選ぶとき、価格だけで判断するのは避けましょう。たしかに費用は重要な要素ですが、品質やサポート体制も同様に確認する必要があります。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
まずは、制作会社の実績やポートフォリオを確認しましょう。過去にどのような業種のサイトを制作してきたか、デザインの質はどうかをチェックします。自社の業界に近い実績があれば、スムーズな制作が期待できるでしょう。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
また、担当者との相性やコミュニケーションの取りやすさも見過ごせません。こちらの要望を正確に理解し、専門的な視点から提案してくれる会社が理想です。安易に価格だけで決めず、総合的な観点から信頼できるパートナーを選んでください。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  ホームページ制作の依頼から納品までの基本的な流れ
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ホームページ制作を依頼してから納品されるまでの流れを理解しておくと、スムーズな進行が可能です。一般的なホームページ制作のプロセスは、以下の通りです。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  問い合わせ・相談
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
Webサイトや電話で連絡し、要望を伝えます。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  ヒアリング・要件定義
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
担当者と打ち合わせをおこない、目的やターゲット、必要な機能などを具体的に決めます。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  見積り・契約
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ヒアリング内容を基に見積書が提示され、合意すれば契約となります。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  制作・確認
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
制作会社がデザインやコーディングを進めます。途中で進捗を確認し、修正依頼を出します。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  納品・公開
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
最終確認後、ホームページがWeb上に公開されます。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
この流れを把握しておくことで、各段階で何をすべきかが把握できるので、安心して制作を任せられます。
</p>

</div>
</section>
<h2 className="mb-5 text-[20px] md:text-[24px] font-bold text-gray-800 pb-3 border-b-[3px] border-blue-500 relative leading-snug after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-[60px] after:md:w-[50px] after:h-[3px] after:bg-blue-800 mt-10">
  ホームページ制作で失敗しないための見積りチェックリスト
</h2>
<section className="u-mb30 c-block">
<img
src="/images/columns/magnifying-glass-checklist.jpg"
alt="ホームページ制作で失敗しないための見積りチェックリスト"
className="float-right ml-[2%] mb-[2%] w-[350px]
max-md:float-none max-md:w-full max-md:mr-0 max-md:ml-0 max-md:mb-[4%]"
draggable={false}
/>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ホームページ制作で後悔しないためには、見積り内容の精査が欠かせません。見積りの項目を一つひとつ確認することで、納得がいく制作依頼ができるでしょう。
</p>

<div>
<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  ホームページ制作の見積り依頼前に準備しておくべきこと
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
正確な見積りを取るためには、依頼前の準備が大切です。制作会社に丸投げするのではなく、自社でホームページの目的や役割を明確にしておきましょう。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
たとえば、「新規顧客を獲得したい」「自社のブランディングを強化したい」など、目的を具体的にします。また、ターゲットとなる顧客層や、Webサイトに掲載したい情報をリストアップしておくと、話がスムーズに進みます。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
参考にしたい競合サイトやデザインのイメージを、いくつかピックアップしておくのもおすすめです。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  見積書で確認すべき必須項目とは
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
見積書を受け取ったら、記載されている項目を細かく確認しましょう。特に以下の項目には注意が必要です。
</p>

<ul>
     <li>初期費用：企画費、デザイン費、コーディング費など、制作にかかる費用の内訳</li>
     <li>月額費用：サーバー・ドメインの管理費、保守費用など、公開後に発生する費用の内訳</li>
     <li>作業範囲：ページ数、搭載する機能（問い合わせフォームなど）、スマホ対応の有無</li>
     <li>修正回数：デザインや内容の修正に対応してくれる回数や範囲</li>
     <li>納品物：サイトデータや各種アカウント情報など、何が納品されるか</li>
</ul>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
これらの項目が曖昧な場合は、必ず契約前に詳細を確認し、疑問点を解消しておくとトラブル防止につながります。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  ホームページ制作における初期費用と月額費用の相場
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ホームページ制作の費用相場は、制作会社やサイトの規模によってさまざまです。一般的な相場観を知っておくことで、提示された見積りが妥当かどうかを判断する基準になります。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
小規模な企業サイトや店舗サイトの場合、初期費用は30万円～80万円程度が一つの目安です。テンプレートを活用したシンプルな構成であれば、さらに費用を抑えられるでしょう。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
月額費用は、サーバー・ドメイン代や保守サポートの内容によって変動し、数千円から数万円が相場です。費用の安さだけでなく、サポート内容が自社のニーズに合っているかを見極めることが大切です。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  追加料金が発生しやすいケースと見積り時の注意点
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
当初の見積りから追加料金が発生し、予算をオーバーしてしまうケースもあります。追加料金が発生しやすい代表的な例は以下の通りです。
</p>

<ul>
     <li>契約範囲外のページや機能の追加</li>
     <li>大幅なデザイン変更や作り直し</li>
     <li>提供する原稿や写真素材の大幅な修正</li>
     <li>規定回数を超える修正依頼</li>
</ul>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
こうした事態を避けるため、見積り段階で「どこまでが料金内で、どこからが追加料金になるのか」という線引きを明確にしておきましょう。
</p>

</div>
</section>
<h2 className="mb-5 text-[20px] md:text-[24px] font-bold text-gray-800 pb-3 border-b-[3px] border-blue-500 relative leading-snug after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-[60px] after:md:w-[50px] after:h-[3px] after:bg-blue-800 mt-10">
  ホームページ制作会社と運用保守について
</h2>
<section className="u-mb30 c-block">
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ホームページは作って終わりではありません。公開後も安定して運用し、ビジネスの成果につなげるためには運用保守が不可欠です。
</p>

<div>
<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  運用保守の基本的なサービス内容
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
運用保守には、ホームページを安全かつ最新の状態で維持するためのさまざまな業務が含まれます。主なサービス内容は以下の通りです。
</p>

<ul>
     <li>サーバー・ドメイン管理：ホームページを公開するためのサーバーやドメインの契約更新、障害対応</li>
     <li>コンテンツ更新：お知らせやブログ、実績などの情報を定期的に更新</li>
     <li>バックアップ：万が一のデータ消失に備え、定期的にサイトデータを保管</li>
     <li>セキュリティ対策：不正アクセスやウイルスからサイトを保護するためのソフトウェア更新</li>
</ul>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
これらの業務を自社でおこなうには、専門知識が必要です。制作会社に任せることで、本業に集中しながら安心してサイトを運営できます。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  制作会社における運用保守の料金体系とプラン
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ホームページ制作会社が提供する運用保守の料金は、サポート範囲によって異なります。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
たとえば、「コンテンツの更新は月1回まで」「軽微な修正のみ対応」などのシンプルなプランであれば、月額数千円から利用可能です。一方で、更新頻度が高く、技術的な相談にいつでも対応してくれる手厚いプランは、月額数万円になることもあります。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
料金とサービス内容のバランスが取れたプランを選ぶことが、コストを抑えつつ効果的に運用するコツです。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  運用保守契約の注意点
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
運用保守の契約においても、価格だけで判断するのはリスクが伴います。契約前には、以下の点を確認しておくことをおすすめします。
</p>

<ul>
     <li>サポートの範囲：テキスト修正や画像差し替えなど、具体的にどこまで対応してもらえるか確認</li>
     <li>対応時間：トラブル発生時に、平日日中のみか、夜間や休日も対応可能か確認</li>
     <li>連絡手段：電話、メール、チャットツールなど、どのような方法で連絡できるか確認</li>
     <li>契約期間と解約条件：最低契約期間の有無や、解約時の手続きについて確認</li>
</ul>

</div>
</section>
<h2 className="mb-5 text-[20px] md:text-[24px] font-bold text-gray-800 pb-3 border-b-[3px] border-blue-500 relative leading-snug after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-[60px] after:md:w-[50px] after:h-[3px] after:bg-blue-800 mt-10">
  【大阪】安くて早いホームページ制作なら株式会社リクステップへ
</h2>
<section className="u-mb30 c-block">
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
こちらでは、制作会社を選ぶポイントや、見積りのチェックリスト、運用保守のポイントまでを解説しました。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ホームページ制作会社選びで失敗しないためには、価格だけでなく実績やサポート体制を総合的に判断することが大切です。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
株式会社リクステップは、低価格での最適なホームページ制作を提案します。サーバー代込みで月1回の更新が可能な月額3,000円のプランの提供や、集客につなげるためのサポートも充実させております。地域に根差した店舗様には、月額10,000円からのMEO対策サービスも提供しております。LINEを活用した手厚いサポートもお任せください。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
まずはお客様のビジネスの課題や、ホームページで実現したいことをお聞かせください。
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
【大阪】相場より安いホームページ制作会社のお探しなら株式会社リクステップへ
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