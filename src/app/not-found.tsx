import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">找不到頁面</h2>
        <p className="text-gray-600 mb-6">抱歉，您要找的頁面不存在。</p>
        <Link
          href="/"
          className="inline-flex items-center px-4 py-2 bg-[#FDBA74] text-white font-semibold rounded-lg hover:bg-[#FB923C] transition-colors"
        >
          返回首頁
        </Link>
      </div>
    </div>
  );
}
