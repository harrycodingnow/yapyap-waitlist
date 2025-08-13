import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yapyap - 即時匿名陪伴你社區的夥伴",
  description: "讓你與附近的人分享即時想法——有趣、有用，有時候還有點辛辣。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body className="antialiased">{children}</body>
    </html>
  );
}
