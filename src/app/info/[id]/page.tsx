import Link from "next/link";
// JSON 데이터를 직접 임포트합니다.
import localData from "../../../../public/data/local-info.json";

// 데이터 타입 정의
interface LocalInfo {
  id: number;
  name: string;
  category: string;
  startDate: string;
  endDate: string;
  place: string;
  target: string;
  summary: string;
  link: string;
}

const data = localData as LocalInfo[];

// 정적 사이트 생성을 위해 모든 ID 파라미터를 미리 생성합니다.
export async function generateStaticParams() {
  return data.map((item) => ({
    id: item.id.toString(),
  }));
}

export default async function InfoDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const info = data.find((item) => item.id.toString() === id);

  if (!info) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>정보를 찾을 수 없습니다.</p>
        <Link href="/" className="ml-4 text-sky-500 underline">목록으로 돌아가기</Link>
      </div>
    );
  }

  const isBenefit = info.category === "지원금/혜택";
  
  // Tailwind 클래스 맵핑 (동적 클래스 깨짐 방지)
  const styles = {
    badge: isBenefit ? "bg-green-100 text-green-700" : "bg-sky-100 text-sky-700",
    button: isBenefit ? "bg-green-600 hover:bg-green-700" : "bg-sky-500 hover:bg-sky-600",
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-20">
      {/* 상단 네비게이션 */}
      <nav className="bg-white border-b border-gray-100 px-6 py-4 sticky top-0 z-10 shadow-sm">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-gray-500 hover:text-gray-900 flex items-center gap-1 font-medium transition-colors">
            ← 목록으로 돌아가기
          </Link>
          <span className="text-xs font-bold text-gray-300 tracking-widest uppercase">My Local Info</span>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto mt-12 px-6">
        {/* 헤더 섹션 */}
        <header className="mb-12">
          <div className={`inline-block px-3 py-1 ${styles.badge} text-xs font-bold rounded-md mb-6 uppercase`}>
            {info.category}
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight leading-tight">
            {info.name}
          </h1>
          
          <div className="grid grid-cols-1 gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex border-b border-gray-50 pb-3">
              <span className="w-24 text-gray-400 font-medium">📅 기간</span>
              <span className="font-bold">{info.startDate} ~ {info.endDate}</span>
            </div>
            <div className="flex border-b border-gray-50 pb-3">
              <span className="w-24 text-gray-400 font-medium">📍 장소/신청</span>
              <span className="font-bold">{info.place}</span>
            </div>
            <div className="flex">
              <span className="w-24 text-gray-400 font-medium">👤 대상</span>
              <span className="font-bold">{info.target}</span>
            </div>
          </div>
        </header>

        {/* 상세 설명 섹션 */}
        <section className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 mb-12 min-h-[300px]">
          <h2 className="text-xl font-bold mb-8 text-gray-400">상세 설명</h2>
          <div className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">
            {info.summary}
            {"\n\n"}
            이 내용은 샘플 데이터입니다. 향후 공공데이터 API 연동을 통해 실제 서비스의 실시간 상세 내용을 이곳에 표시하게 됩니다.
            장소 정보, 신청 방법, 구비 서류 등 구체적인 가이드가 제공될 예정입니다.
          </div>
        </section>

        {/* 하단 액션 버튼 */}
        <div className="flex flex-col gap-4">
          <a 
            href={info.link} 
            className={`w-full py-5 ${styles.button} text-white text-center rounded-2xl font-bold text-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2`}
          >
            공식 사이트에서 자세히 보기 →
          </a>
          <Link 
            href="/" 
            className="w-full py-5 bg-white text-gray-500 text-center rounded-2xl font-bold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            다음에 볼래요 (목록으로)
          </Link>
        </div>
      </main>

      <footer className="mt-20 text-center text-gray-300 text-xs">
        정보 업데이트: {new Date().toLocaleDateString('ko-KR')} | My Local Info
      </footer>
    </div>
  );
}
