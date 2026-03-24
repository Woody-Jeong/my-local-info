import Link from "next/link";

// 샘플 데이터를 불러옵니다. (나중에 진짜 API로 연결할 예정입니다)
const LOCAL_DATA = [
  {
    "id": 1,
    "name": "성남시 봄꽃 축제",
    "category": "행사/축제",
    "startDate": "2026-04-05",
    "endDate": "2026-04-13",
    "place": "중앙공원",
    "target": "전체 시민",
    "summary": "성남시의 아름다운 봄꽃을 만끽할 수 있는 대표 축제입니다.",
    "link": "#"
  },
  {
    "id": 2,
    "name": "판교 청년 창업 박람회",
    "category": "행사/축제",
    "startDate": "2026-04-19",
    "endDate": "2026-04-20",
    "place": "판교 테크노밸리",
    "target": "청년 창업가 및 대학생",
    "summary": "혁신적인 아이디어를 만나고 네트워킹할 수 있는 창업 박람회입니다.",
    "link": "#"
  },
  {
    "id": 3,
    "name": "성남시 어린이날 큰잔치",
    "category": "행사/축제",
    "startDate": "2026-05-05",
    "endDate": "2026-05-05",
    "place": "성남종합운동장",
    "target": "어린이 및 동반 가족",
    "summary": "온 가족이 즐거운 어린이날을 보낼 수 있는 다양한 체험 행사입니다.",
    "link": "#"
  },
  {
    "id": 4,
    "name": "성남시 청년 월세 지원금",
    "category": "지원금/혜택",
    "startDate": "2026-01-01",
    "endDate": "2026-12-31",
    "place": "성남시 거주지 관할 행정복지센터",
    "target": "만 19~34세 무주택 청년",
    "summary": "성남시에 거주하는 청년들의 주거 부담을 덜어주기 위해 월 최대 20만원을 지원합니다.",
    "link": "#"
  },
  {
    "id": 5,
    "name": "경기도 출산지원금",
    "category": "지원금/혜택",
    "startDate": "2026-01-01",
    "endDate": "2026-12-31",
    "place": "온라인 신청 및 행정복지센터",
    "target": "경기도 내 출산 가정",
    "summary": "출산을 축하하며 첫째 100만원, 둘째 150만원을 지원해 드립니다.",
    "link": "#"
  }
];

export default function Home() {
  const events = LOCAL_DATA.filter(item => item.category === "행사/축제");
  const benefits = LOCAL_DATA.filter(item => item.category === "지원금/혜택");

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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event) => {
              const date = new Date(event.startDate);
              return (
                <Link key={event.id} href="/blog" className="group">
                  <article className="flex gap-6 bg-white p-6 rounded-xl shadow-sm border border-gray-100 group-hover:border-sky-300 group-hover:shadow-md transition-all">
                    <div className="flex flex-col items-center justify-center min-w-[70px] h-[70px] bg-sky-50 text-sky-600 rounded-lg font-bold group-hover:bg-sky-500 group-hover:text-white transition-colors">
                      <span className="text-xs">{date.getMonth() + 1}월</span>
                      <span className="text-2xl">{date.getDate()}</span>
                    </div>
                    <div className="flex flex-col justify-center overflow-hidden">
                      <h3 className="text-lg font-bold text-gray-900 mb-1 truncate">{event.name}</h3>
                      <p className="text-sm text-gray-500 flex items-center gap-1">
                        <span>📍</span> {event.place}
                      </p>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </section>

        {/* 3. 지원금/혜택 정보 목록 */}
        <section>
          <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <span className="text-green-500">💰</span> 지원금/혜택 정보
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <Link key={benefit.id} href="/blog" className="group">
                <article className="bg-white p-8 rounded-xl shadow-sm border-2 border-green-500 flex flex-col h-full hover:shadow-lg hover:border-green-600 transition-all">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-md uppercase">
                      {benefit.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">{benefit.name}</h3>
                  <div className="p-4 bg-green-50/50 rounded-lg mb-6 border border-green-100">
                    <p className="text-sm text-gray-800 leading-relaxed font-semibold">
                      <span className="text-green-600 mr-2">●</span> 대상: {benefit.target}
                    </p>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {benefit.summary}
                  </p>
                  <div className="mt-auto w-full py-3 bg-gray-900 text-white text-center rounded-lg font-bold group-hover:bg-green-700 transition-colors">
                    상세 정보 확인하기
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* 4. 하단 푸터 */}
      <footer className="bg-white py-14 px-6 border-t border-gray-100 mt-20">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg font-black text-gray-400 mb-6 tracking-widest uppercase">My Local Info</p>
          <div className="text-sm text-gray-400 space-y-2">
            <p>데이터 출처: 공공데이터포털(data.go.kr)</p>
            <p>마지막 업데이트: {new Date().toLocaleDateString('ko-KR')}</p>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-50 text-[10px] text-gray-300">
            © 2026 Our Neighborhood Info. All rights reserved. 본 사이트는 성남시 소식을 편리하게 제공하기 위해 제작되었습니다.
          </div>
        </div>
      </footer>
    </div>
  );
}
