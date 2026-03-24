import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default function BlogListPage() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <header className="mb-12 border-b pb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">우리 동네 블로그</h1>
        <p className="text-lg text-gray-600">성남시의 생생한 소식과 유용한 팁을 전해드려요.</p>
      </header>

      <div className="grid gap-10">
        {allPostsData.length > 0 ? (
          allPostsData.map(({ slug, title, date, summary, category }) => (
            <article key={slug} className="group relative bg-white p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full uppercase tracking-wider">
                  {category}
                </span>
                <time className="text-sm text-gray-400 font-medium">{date}</time>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                <Link href={`/blog/${slug}`} className="absolute inset-0">
                  <span className="sr-only">{title} 읽기</span>
                </Link>
                {title}
              </h2>
              <p className="text-gray-600 leading-relaxed line-clamp-2 mb-4">
                {summary}
              </p>
              <div className="flex items-center text-blue-600 font-semibold text-sm">
                자세히 읽기
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </article>
          ))
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
            <p className="text-gray-500 text-lg">아직 작성된 글이 없습니다. 곧 멋진 소식들이 올라올 거예요!</p>
          </div>
        )}
      </div>
    </div>
  );
}
