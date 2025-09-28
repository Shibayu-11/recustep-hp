"use client";

import { motion } from "framer-motion";

export default function ArtbloomPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="text-center max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            ArtBloom
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8">
            アートのサブスク事業
          </p>
          
          <div className="inline-flex items-center px-6 py-3 bg-orange-100 text-orange-800 rounded-full text-lg font-medium mb-8">
            11月初旬リリース予定
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