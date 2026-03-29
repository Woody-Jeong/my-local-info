import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";

export default function Home() {
  const allPosts = getSortedPostsData();
  
  // 카테고리에 따라 포스트를 분류합니다.
  const events = allPosts.filter(item => item.category === "행사/축제");
  const benefits = allPosts.filter(item => item.category === "지원금/혜택");

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* 1. 상단 대형 배너 */}
      <header className="bg-sky-400 py-20 px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight shadow-sm">우리 동네 소식통</h1>
        <p className="text-lg md:text-xl text-sky-50 opacity-90">내 주변의 유익한 정보와 즐거운 소식을 전합니다.</p>
      </header>

      <main className="max-w-5xl mx-auto py-12 px-6 space-y-20">
        {/* 2. 이번 달 행사/축제 목록 */}
        <section>
          <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <span className="text-sky-500">🗓️</span> 이번 달 행사/축제
            </h2>
            <Link href="/blog" className="text-sm font-bold text-sky-600 hover:underline">
              전체 보기 →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.length > 0 ? (
              events.map((post) => {
                const date = new Date(post.date);
                return (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                    <article className="flex gap-6 bg-white p-6 rounded-xl shadow-sm border border-gray-100 group-hover:border-sky-300 group-hover:shadow-md transition-all h-full">
                      <div className="flex flex-col items-center justify-center min-w-[70px] h-[70px] bg-sky-50 text-sky-600 rounded-lg font-bold group-hover:bg-sky-500 group-hover:text-white transition-colors capitalize">
                        <span className="text-xs">{date.getMonth() + 1}월</span>
                        <span className="text-2xl">{date.getDate()}</span>
                      </div>
                      <div className="flex flex-col justify-center overflow-hidden">
                        <h3 className="text-lg font-bold text-gray-900 mb-1 truncate">{post.title}</h3>
                        <p className="text-sm text-gray-500 line-clamp-2">
                          {post.summary}
                        </p>
                      </div>
                    </article>
                  </Link>
                );
              })
            ) : (
              <div className="col-span-full py-12 text-center bg-white rounded-xl border border-dashed border-gray-200">
                <p className="text-gray-400">등록된 행사나 축제가 아직 없습니다.</p>
              </div>
            )}
          </div>
        </section>

        {/* 3. 지원금/혜택 정보 목록 */}
        <section>
          <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <span className="text-green-500">💰</span> 지원금/혜택 정보
            </h2>
            <Link href="/blog" className="text-sm font-bold text-green-600 hover:underline">
              전체 보기 →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.length > 0 ? (
              benefits.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <article className="bg-white p-8 rounded-xl shadow-sm border-2 border-green-500 flex flex-col h-full hover:shadow-lg hover:border-green-600 transition-all">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-md uppercase">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors uppercase">{post.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {post.summary}
                    </p>
                    <div className="mt-auto w-full py-3 bg-gray-900 text-white text-center rounded-lg font-bold group-hover:bg-green-700 transition-colors">
                      상세 정보 확인하기
                    </div>
                  </article>
                </Link>
              ))
            ) : (
              <div className="col-span-full py-12 text-center bg-white rounded-xl border border-dashed border-gray-200">
                <p className="text-gray-400">등록된 지원금 정보가 아직 없습니다.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* 4. 하단 푸터 */}
      <footer className="bg-white py-14 px-6 border-t border-gray-100 mt-20">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg font-black text-gray-400 mb-6 tracking-widest uppercase">My Local Info</p>
          <div className="flex justify-center gap-6 mb-8 text-sm font-bold text-gray-400">
            <Link href="/" className="hover:text-gray-600">홈</Link>
            <Link href="/blog" className="hover:text-gray-600">블로그</Link>
            <a href="#" className="hover:text-gray-600">개인정보처리방침</a>
          </div>
          <div className="text-sm text-gray-400 space-y-2">
            <p>데이터 출처: 공공데이터포털(data.go.kr)</p>
            <p>마지막 업데이트: {new Date().toLocaleDateString('ko-KR')}</p>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-50 text-[10px] text-gray-300">
            © 2026 Our Neighborhood Info. All rights reserved. 본 사이트는 지역 소식을 편리하게 제공하기 위해 제작되었습니다.
          </div>
        </div>
      </footer>
    </div>
  );
}
