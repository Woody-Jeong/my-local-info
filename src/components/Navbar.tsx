import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-black text-gray-900 tracking-tighter">
          우리 동네 소식통
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors">
            홈
          </Link>
          <Link href="/blog" className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 px-3 py-1.5 rounded-lg">
            블로그
          </Link>
        </div>
      </div>
    </nav>
  );
}
