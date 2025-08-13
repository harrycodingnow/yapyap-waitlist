"use client";
import React, { useState } from "react";
import { motion, easeInOut } from "framer-motion";
import Image from "next/image";

const FORMSPARK_FORM_ID = "gQzFUvFRI";
const FORMSPARK_URL = `https://submit-form.com/${FORMSPARK_FORM_ID}`;
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError("請輸入有效的 Email");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch(FORMSPARK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          source: "yapyap_waitlist",
          page: typeof window !== "undefined" ? window.location.href : "",
          locale:
            typeof navigator !== "undefined" && navigator.language
              ? navigator.language
              : "zh-TW",
        }),
      });

      if (!res.ok) throw new Error("submit failed");
      setSubmitted(true);
      setEmail("");
    } catch (err) {
      console.error("Form submission error:", err);
      setError("加入失敗，請再試一次。");
    } finally {
      setLoading(false);
    }
  };

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
                陪伴你社區的夥伴
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

            {/* Email Form */}
            <motion.form
              variants={fadeUp}
              onSubmit={onSubmit}
              className="relative max-w-md"
            >
              {submitted ? (
                <div className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-green-700">
                  <span>✅</span>
                  <span>收到！我們會在開放時通知你。</span>
                </div>
              ) : (
                <div className="flex items-stretch gap-0 overflow-hidden rounded-xl border border-gray-200 bg-white/90 shadow-sm focus-within:ring-4 focus-within:ring-orange-200">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="輸入你的電子郵件"
                    className="flex-1 h-12 px-4 text-gray-900 bg-transparent outline-none placeholder:text-gray-400"
                    disabled={loading}
                  />
                  <motion.button
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                    type="submit"
                    disabled={loading}
                    className="relative h-12 px-6 bg-[#FDBA74] text-white font-semibold rounded-none disabled:opacity-60"
                  >
                    <motion.span
                      className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
                      animate={{ x: ["-120%", "120%"] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.8,
                        ease: easeInOut,
                      }}
                    />
                    {loading ? "加入中…" : "加入候補名單"}
                  </motion.button>
                </div>
              )}
              {error && (
                <div className="mt-2 text-sm text-red-600" aria-live="polite">
                  {error}
                </div>
              )}
            </motion.form>

            {/* Follow Link */}
            <motion.a
              variants={fadeUp}
              href="https://www.threads.com/@yapyap.app"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors"
            >
              關注 @yapyap 以獲取最新消息
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
