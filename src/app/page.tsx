import React, { useState } from "react";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-white text-slate-900">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500 shadow-sm">
            <span className="text-xl">🦊</span>
          </div>
          <div className="font-semibold">Yapyap</div>
        </div>
        <a
          href="#"
          className="text-sm text-slate-500 underline-offset-4 hover:underline"
        >
          關注 @yapyap 以獲取最新消息
        </a>
      </header>

      <main className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-24 pt-6 md:grid-cols-2">
        <section>
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100/60 px-3 py-1 text-xs font-medium text-orange-700">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            在地．匿名．即時
          </div>

          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            一個 <span className="text-orange-600">（即時）</span>
            <span className="block bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
              陪伴你社區的夥伴
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-slate-600">
            Yapyap
            是一個輕量級、基於位置的聊天平台，讓你與附近的人分享即時想法——有趣、有用，有時候還有點辛辣。無需個人檔案，沒有壓力——只要感受你周遭的氛圍。
          </p>

          <form onSubmit={onSubmit} className="mt-8 flex w-full max-w-xl gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="輸入你的電子郵件"
              className="h-12 flex-1 rounded-xl border border-slate-200 bg-white px-4 text-slate-900 outline-none ring-orange-200 placeholder:text-slate-400 focus:ring-4"
            />
            <button
              type="submit"
              className="h-12 rounded-xl bg-orange-600 px-5 font-semibold text-white shadow-sm transition active:translate-y-[1px] hover:bg-orange-700"
            >
              {submitted ? "你已加入！" : "加入候補名單"}
            </button>
          </form>

          <p className="mt-3 text-xs text-slate-500">
            不會寄垃圾信。我們會在你所在的城市開放時通知你。
          </p>

          <ul className="mt-8 grid max-w-xl grid-cols-1 gap-3 text-sm text-slate-700 sm:grid-cols-2">
            <li className="flex items-start gap-2">
              <span>✅</span> 預設匿名
            </li>
            <li className="flex items-start gap-2">
              <span>⚡</span> 即時訊息，範圍約 2 公里
            </li>
            <li className="flex items-start gap-2">
              <span>🛡️</span> 防垃圾與投票防作弊
            </li>
            <li className="flex items-start gap-2">
              <span>🗺️</span> 超在地話題與活動
            </li>
          </ul>
        </section>

        <section className="flex w-full items-center justify-center md:justify-end">
          <PhoneMockup />
        </section>
      </main>

      <footer className="mx-auto w-full max-w-7xl px-6 pb-10 text-xs text-slate-500">
        © {new Date().getFullYear()} Yapyap. 版權所有。
      </footer>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative w-[320px] select-none">
      <div className="relative rounded-[2.4rem] border border-slate-200 bg-black p-2 shadow-2xl">
        <div className="mx-auto mb-2 mt-1 h-5 w-28 rounded-b-2xl bg-black" />
        <div className="h-[600px] overflow-hidden rounded-3xl bg-white">
          <AppTopBar />
          <div className="h-[1px] w-full bg-slate-100" />
          <div className="flex h-[510px] flex-col overflow-y-auto p-10 pb-2">
            <YapCard
              name="使用者 0"
              time="下午 1:26"
              text="剛剛板橋下午雷陣雨超大，誰的雨傘被風吹翻了？"
            />
            <YapCard
              name="使用者 1"
              time="下午 1:27"
              color="text-emerald-600"
              text="西門町看到穿雨衣的烏龜是真的可愛🐢☔️"
            />
            <YapCard
              name="使用者 2"
              time="下午 1:27"
              color="text-sky-600"
              text="期中考把腦燒壞了，有沒有人推薦速效醒腦法"
            />
            <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
              * 自你上次查看後：500 公尺內新增 3 則貼文
            </div>
          </div>
          <Composer />
        </div>
      </div>
    </div>
  );
}

function AppTopBar() {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <div className="flex items-center gap-2">
        <span className="text-lg">🦊</span>
        <span className="text-sm font-semibold">附近（1 公里）</span>
      </div>
      <div className="flex items-center gap-3 text-slate-400">
        <span className="text-xs">下午 1:27</span>
        <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
      </div>
    </div>
  );
}

function YapCard({
  name,
  text,
  time,
  color = "text-orange-600",
}: {
  name: string;
  text: string;
  time: string;
  color?: string;
}) {
  return (
    <div className="mb-5">
      <div className="mb-1 flex items-baseline gap-2 text-xs text-slate-500">
        <span className={`font-semibold ${color}`}>{name}</span>
        <span>•</span>
        <span>{time}</span>
      </div>
      <div className="whitespace-pre-wrap rounded-2xl border border-slate-200 bg-white p-3 text-[15px] leading-snug shadow-sm">
        {text}
      </div>
      <div className="mt-2 flex items-center gap-3 text-xs text-slate-500">
        <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1">
          ⬆️ 42
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1">
          💬 5
        </span>
        <span className="ml-auto">500 公尺</span>
      </div>
    </div>
  );
}

function Composer() {
  return (
    <div className="sticky bottom-0 border-t border-slate-100 bg-white p-3">
      <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2">
        <div className="h-2 w-2 rounded-full bg-purple-500" />
        <input
          disabled
          className="flex-1 bg-transparent text-sm text-slate-500 outline-none"
          placeholder="問問附近的人…"
        />
        <button
          disabled
          className="rounded-lg bg-slate-900 px-3 py-1 text-xs font-semibold text-white opacity-70"
        >
          思考中…
        </button>
      </div>
    </div>
  );
}
