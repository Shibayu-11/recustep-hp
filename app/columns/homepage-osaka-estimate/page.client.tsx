// app/columns/homepage-osaka-estimate/page.tsx
"use client";


import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Building2, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function HomepageOsakaEstimate() {
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
<span className="block">【大阪】ホームページ制作の価格相場｜見積りを取る方法を解説</span>
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
<span className="ml-2 text-gray-800 font-medium">【大阪】ホームページ制作の価格相場｜見積りを取る方法を解説</span>
</li>
</ul>
</nav>

<div
className="mt-14 bg-gray-800 text-white h-[300px] flex items-end justify-center mb-8 relative bg-cover bg-center max-md:h-auto max-md:pt-[4.5em] max-md:pb-0"
style={{
backgroundImage: "url('/images/columns/head-mv-02.jpg')",
}}
>
<h2 className="bg-black/40 w-full p-2 max-md:p-2 text-[20px] max-md:text-[14px]">
大阪でのホームページ制作の価格相場や、見積りを取る方法について解説
</h2>
</div>


          <p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
                       ホームページ制作を依頼したいものの、価格相場の見当がつかず、依頼をためらっている方が多いのではないでしょうか。ホームページ制作の価格は、サイトの規模や機能、デザインなど多くの要素により変動します。そのため、まずは自社のホームページに必要な要素や目的、狙いを明らかにしておく必要があります。
                       </p>
          <p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
                       こちらでは、ホームページ制作における大阪の価格相場や費用内訳、見積りを取る際のポイントを解説します。さらに、制作費を少しでも抑えたい方に向けて、コスト削減の実践的なテクニックも紹介するので、ぜひ最後までご覧ください。
                       </p>

<h2 className="mb-5 text-[20px] md:text-[24px] font-bold text-gray-800 pb-3 border-b-[3px] border-blue-500 relative leading-snug after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-[60px] after:md:w-[50px] after:h-[3px] after:bg-blue-800 mt-10">
  ホームページ制作の価格を左右する要素
</h2>
<section className="u-mb30 c-block">
<img
src="/images/columns/calculator-pen-clipboard.jpg"
alt="ホームページ制作の価格を左右する要素"
className="float-right ml-[2%] mb-[2%] w-[350px]
max-md:float-none max-md:w-full max-md:mr-0 max-md:ml-0 max-md:mb-[4%]"
draggable={false}
/>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ホームページ制作を依頼するにあたり、まずは価格の決まり方と見積りの流れを理解しておきましょう。
</p>

<div>
<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  ホームページ制作の価格を左右する4つの要素
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ホームページ制作の価格は、主に4つの要素によって決まります。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  サイトの規模やページ数
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ページ数が多くなるほど、コンテンツ制作やデザイン、コーディングの工数が増えるため、価格は高くなります。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  デザインの質
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
オリジナルのデザインを1から制作する場合は、デザイナーの工数がかかるため高額になります。既存のテンプレートを活用すれば、デザイン費用を抑えられます。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  搭載する機能
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
オンライン予約システムやECサイトの決済機能など、高度な機能を追加すると開発費用が上乗せされます。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  コンテンツ制作の依頼範囲
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
サイトに掲載する文章や写真、イラストなどを制作会社に依頼する場合、別途ライティング費用や撮影費用が発生します。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  見積り依頼前に準備すべき3つのこと
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
正確な見積りを出してもらうためには、次の3つのことを意識して依頼準備を始めましょう。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  ホームページの目的を明確にする
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
まずは、「新規顧客を獲得したい」「採用活動を強化したい」など、ホームページを制作する目的を具体的に言語化しましょう。目的が明確であれば、必要な機能やデザインの方向性が定まり、制作会社も精度の高い見積りを提示できます。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  参考サイトをリストアップする
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
デザインや構成のイメージに近い参考サイトを2～3サイトほど探しておくと、制作者とイメージを共有しやすくなります。同業他社のサイトや、全く異なる業界でも「このデザインが良い」と感じるサイトを具体的に示しましょう。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  予算の上限を決めておく
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
どの程度の費用をかけられるのか、あらかじめ社内で予算の上限を決めておきましょう。予算を伝えることで、制作会社は予算範囲内で実現可能なプランを提案してくれます。
</p>

</div>
</section>

<h2 className="mb-5 text-[20px] md:text-[24px] font-bold text-gray-800 pb-3 border-b-[3px] border-blue-500 relative leading-snug after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-[60px] after:md:w-[50px] after:h-[3px] after:bg-blue-800 mt-10">
  理想のデザインを予算内で叶える！賢い「伝え方」のコツ
</h2>
<section className="u-mb30 c-block">
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
「かっこいいサイトにしたいけれど、予算が跳ね上がるのは困る」というのは、多くの方が抱える悩みです。実は、伝え方を工夫するだけで、コストを抑えつつ理想に近いデザインを実現できる場合があります。
</p>
<ul className="mt-4">
  <li><strong>・優先順位を伝える</strong>：「ここはこだわりたい」「ここはシンプルでOK」とメリハリをつける</li>
  <li><strong>・イメージを視覚的に</strong>：言葉だけでなく、好きな雰囲気の画像やサイトを見せる</li>
</ul>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
制作会社はプロですので、予算の範囲内で魅力を引き出す方法を一緒に考えてくれます。ホームページ制作を相談する際に、ぜひ「これだけは譲れないポイント」を1つ絞って伝えてみてください。
</p>
</section>



<h2 className="mb-5 text-[20px] md:text-[24px] font-bold text-gray-800 pb-3 border-b-[3px] border-blue-500 relative leading-snug after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-[60px] after:md:w-[50px] after:h-[3px] after:bg-blue-800 mt-10">
  ホームページ制作の価格相場と費用例について
</h2>
<section className="u-mb30 c-block">
<img
src="/images/columns/laptop-showing-code.jpg"
alt="ホームページ制作の価格相場と費用例について"
className="float-right ml-[2%] mb-[2%] w-[350px]
max-md:float-none max-md:w-full max-md:mr-0 max-md:ml-0 max-md:mb-[4%]"
draggable={false}
/>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
こちらでは、ホームページ制作の具体的な費用相場や費用の内訳、制作後に発生するランニングコストについて詳しく解説します。作りたいサイトがどの価格帯に該当するのか、参考にしてみてください。
</p>

<div>
<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  【目的別】ホームページ制作の費用相場
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ホームページ制作の費用は、サイトの目的や規模によって大きく異なります。こちらでは、一般的な価格相場を目的別にまとめました。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  シンプルな企業サイト：30万円～80万円
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
会社概要や事業内容、問い合わせフォームなど、基本的な情報のみを掲載する小規模なサイトです。名刺代わりとして最低限の情報を発信したい企業に向いています。テンプレートデザインを活用することで、価格を抑えられます。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  標準的なコーポレートサイト：80万円～150万円
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
サービス紹介や実績紹介、ブログ機能、採用情報など、コンテンツが充実した中規模サイトです。企業のブランディングやマーケティング活用を目的とします。オリジナルデザインの作成やCMSの導入もおこなわれます。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  マーケティング特化型サイト：100万円～200万円
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
SEO対策やコンテンツマーケティング、MAツール連携など、Webマーケティング戦略を重視したサイトです。集客やリード獲得を本格的におこないたい企業向けで、戦略設計から関わるため費用は高くなります。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  ホームページ制作費の具体的な内訳とは
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ホームページ制作の見積りには、さまざまな項目が含まれています。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  ディレクション費
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
プロジェクト全体の進行管理や企画構成、要件定義などにかかる費用です。制作費全体の10％～20％が目安とされています。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  デザイン費
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
サイト全体のデザインやレイアウト、ロゴ、バナーなどを制作する費用です。オリジナルデザインかテンプレート活用かで大きく変動します。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  コーディング費
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
デザインをブラウザで表示できるように、HTMLやCSS、JavaScriptなどの言語でプログラミングする作業費用です。ページ数やアニメーションなどの動きの有無で価格が変わります。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  CMS導入費
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
WordPressなどのコンテンツ管理システムを導入する費用です。導入により、ブログの更新やページの修正を自社でおこなえるようになります。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  コンテンツ制作費
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
サイトに掲載する文章のライティングや、写真・動画の撮影、イラスト作成などを依頼する場合に発生する費用です。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  制作後に発生する月額費用
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ホームページは制作して終わりではなく、公開後も維持・管理するための費用がかかります。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  サーバーレンタル代
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ホームページのデータを保管しておくサーバーのレンタル費用です。月額で数百円から3,000円程度が一般的です。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  ドメイン管理費
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
インターネット上の住所にあたるドメインを維持するための費用です。年間で数百円～1,000円程度かかります。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  保守管理費
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
システムのアップデートやセキュリティ対策、データのバックアップなど、サイトを安全に運用するための費用です。制作会社に依頼する場合、月額5,000円～50,000円程度が相場です。
</p>

<h4 className="mb-2.5 mt-5 text-[16px] md:text-[15px] font-semibold text-gray-600 pl-2.5 md:pl-2 border-l-[3px] border-blue-300 leading-relaxed">
  SSL証明書費用
</h4>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
サイトの通信を暗号化し、セキュリティを高めるためのSSL証明書にかかる費用です。無料のものもありますが、信頼性の高い有料版は年間で数万円かかる場合があります。
</p>

</div>
</section>
<h2 className="mb-5 text-[20px] md:text-[24px] font-bold text-gray-800 pb-3 border-b-[3px] border-blue-500 relative leading-snug after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-[60px] after:md:w-[50px] after:h-[3px] after:bg-blue-800 mt-10">
  制作費を抑えるための実践テクニック
</h2>
<section className="u-mb30 c-block">
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ホームページ制作にはある程度の費用がかかりますが、工夫次第でコストは抑えられます。
</p>

<div>
<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  テンプレートデザインで初期費用を抑える
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
デザインに強いこだわりがない場合や、とにかく早くサイトを立ち上げたい場合は、テンプレートを活用するのがおすすめです。オリジナルデザインを1から制作すると高額になりがちですが、既存のデザインテンプレートを利用すれば、デザイン費用を大幅に削減できます。初期費用を抑えつつ、クオリティの高いホームページを短納期で手に入れるための有効な手段です。
</p>

<h3 className="mb-2.5 mt-[30px] text-[18px] md:text-lg font-semibold text-gray-800 pl-3 border-l-4 border-blue-500 leading-relaxed">
  掲載する原稿や画像を自社で用意する
</h3>
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ホームページに掲載する文章や写真、イラストなどの素材を自社で準備することも、コスト削減につながります。コンテンツ制作まで制作会社に依頼すると、ライティング費用や撮影費用が別途発生するためです。会社の強みやサービスの特徴、商品への想いなどは、自社の担当者が執筆した方が熱意が伝わる場合もあります。自社でできる範囲のコンテンツを準備するだけで、数十万円単位の費用を削減できるかもしれません。
</p>

</div>
</section>
<h2 className="mb-5 text-[20px] md:text-[24px] font-bold text-gray-800 pb-3 border-b-[3px] border-blue-500 relative leading-snug after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-[60px] after:md:w-[50px] after:h-[3px] after:bg-blue-800 mt-10">
  【大阪】低価格・短納期でのホームページ制作は株式会社リクステップにご相談ください
</h2>
<section className="u-mb30 c-block">
<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
ホームページ制作にかかる費用は、求める機能やホームページの規模、作成に必要な工数によって変動します。低価格で依頼したい場合は、料金価格が明瞭な制作会社を選ばなくてはなりません。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
株式会社リクステップは、大阪を中心に全国の中小企業様やスタートアップ企業様を支援しております。最大の強みは、圧倒的な低価格とスピード納品です。一般的な制作会社では数十万円かかるホームページを、初期費用15万円というリーズナブルな価格で提供します。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
お申し込みから最短5日という驚異的なスピードでの納品も可能ですので、すぐにでも事業をスタートさせたい、できるだけ初期投資を抑えたいという経営者様のニーズに全力でお応えします。
</p>

<p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-7 sm:leading-8">
コストパフォーマンスに優れたホームページ制作会社をお探しなら、ぜひ一度、株式会社リクステップへお問い合わせください。
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
価格重視なら大阪のホームページ制作、株式会社リクステップへ
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