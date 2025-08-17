"use client";

import { motion } from "framer-motion";

export default function SyokulabPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-red-50">
      <div className="text-center max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
            食ラボ
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8">
            飲食店マッチングアプリ
          </p>
          
          <div className="inline-flex items-center px-6 py-3 bg-orange-100 text-orange-800 rounded-full text-lg font-medium mb-8">
            🚀 9月初旬リリース予定
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Coming Soon
          </h2>
          <p className="text-lg text-gray-600">
            準備中です。もうしばらくお待ちください。
          </p>
        </motion.div>
      </div>
    </main>
  );
}