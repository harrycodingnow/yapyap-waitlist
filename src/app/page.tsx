"use client";
import React, { useState } from "react";
import { motion, easeInOut } from "framer-motion";
import Image from "next/image";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function WaitlistPage() {
  // animations
  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeInOut },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-50 text-slate-900 flex items-center justify-center">
      {/* animated aurora background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#FDBA74]/35 blur-3xl"
          animate={{
            x: [0, 40, -10, 0],
            y: [0, -20, 10, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: easeInOut }}
        />
        <motion.div
          className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-amber-300/30 blur-3xl"
          animate={{
            x: [0, -30, 15, 0],
            y: [0, 30, -20, 0],
            scale: [1, 0.9, 1.05, 1],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: easeInOut,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-300/20 blur-3xl"
          animate={{ scale: [1, 1.15, 0.95, 1] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: easeInOut,
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6">
        <motion.main
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2"
        >
          {/* Left Section */}
          <motion.section variants={fadeUp} className="space-y-8 max-w-xl">
            {/* Logo */}
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm">
                <Image
                  src={`${base}/icon.png`}
                  alt="Yapyap"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
              </div>
              <span className="text-2xl font-semibold text-gray-900">
                Yapyap
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={fadeUp} className="space-y-4">
              <h1 className="text-5xl font-extrabold tracking-tight leading-tight text-gray-900 lg:text-7xl">
                一個 <span className="text-gray-700">(即時匿名)</span>
                <br />
                陪伴你的社群
              </h1>
              <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                讓你與附近的人分享即時想法——有趣、有用，有時候還有點辛辣。無需個人檔案，沒有壓力
                👀
              </p>
              {/* Feature Points */}
              <ul className="text-base text-gray-700 grid gap-2">
                <li>📍 限 5 公里內可見</li>
                <li>⏳ 貼文 24 小時後自動刪除 (Beta 版暫時保留)</li>
              </ul>
            </motion.div>

            {/* App Store Link */}
            <motion.div variants={fadeUp} className="space-y-4">
              <motion.a
                href="https://apps.apple.com/tw/app/yapyap-%E5%8D%B3%E6%99%82%E5%8C%BF%E5%90%8D%E7%A4%BE%E7%BE%A4-%E9%99%90%E5%AE%9A-5-%E5%85%AC%E9%87%8C/id6751183691?l=en-GB"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative inline-flex items-center justify-center gap-3 rounded-xl bg-black px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-gray-800 transition-colors overflow-hidden group"
              >
                <motion.span
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-120%", "120%"] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    ease: easeInOut,
                  }}
                />
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                在 App Store 下載
              </motion.a>
            </motion.div>

            {/* Follow Link */}
            <motion.a
              variants={fadeUp}
              href="https://www.threads.com/@yapyap.app"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors"
            >
              關注 Threads @yapyap2026
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m7 17 10-10" />
                <path d="M7 7h10v10" />
              </svg>
            </motion.a>
          </motion.section>

          {/* Right Section - Phone Mockup */}
          <section
            className="flex justify-center lg:justify-end"
            style={{ perspective: 1200 }}
          >
            <PhoneMockup />
          </section>
        </motion.main>
      </div>
    </div>
  );
}

function PhoneMockup() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: easeInOut }}
      className="relative"
    >
      {/* floating effect */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, -0.5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: easeInOut }}
        whileHover={{ rotateY: 6, rotateX: -2, scale: 1.02 }}
        className="relative h-[575px] w-[275px] rounded-[3rem] bg-black p-2 shadow-2xl lg:h-[640px] lg:w-[305px]"
      >
        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-6 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
        {/* Screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-white">
          <Image
            src={`${base}/screenshot.jpeg`}
            alt="Yapyap App Screenshot"
            fill
            className="object-cover"
          />
          {/* moving glare */}
          <motion.div
            className="pointer-events-none absolute top-0 left-[-40%] h-full w-1/2 rotate-12 bg-white/10"
            animate={{ left: ["-40%", "120%"] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: easeInOut,
            }}
          />
        </div>
        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 h-1 w-28 -translate-x-1/2 rounded-full bg-white/40" />
      </motion.div>
      {/* soft drop shadow */}
      <div className="absolute -inset-6 -z-10 rounded-[4rem] bg-black/10 blur-2xl" />
    </motion.div>
  );
}
