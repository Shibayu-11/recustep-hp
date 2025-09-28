"use client";

import React from 'react';
import Link from 'next/link';

export default function FixedBottomFooter() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-16 sm:px-20 lg:px-24 py-6">
        <div className="grid grid-cols-2 gap-8">
          {/* サービス */}
          <div>
            <h3 className="text-lg font-semibold mb-4">サービス</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/services/hp-lp" 
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  HP・LP制作
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/app-development" 
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  アプリ開発
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/recruitment" 
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  採用支援
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/system" 
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  システム開発
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/artbloom" 
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  アートのサブスク事業
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/syokulab" 
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  飲食店支援アプリ「食ラボ」
                </Link>
              </li>
            </ul>
          </div>

          {/* 会社情報 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">会社情報</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/company" 
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  会社概要
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  特定商取引法に基づく表記
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy" 
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-gray-700 mt-6 pt-4">
          <p className="text-center text-gray-400 text-sm">
            © 2025 株式会社リクステップ All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}