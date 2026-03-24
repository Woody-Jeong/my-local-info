import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getPostData, getSortedPostsData } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const postData = getPostData(slug);

  if (!postData) {
    notFound();
  }

  const { title, date, content, category, tags } = postData;

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <nav className="mb-12">
        <Link href="/blog" className="inline-flex items-center text-gray-500 hover:text-blue-600 font-medium transition-colors">
          <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          목록으로 돌아가기
        </Link>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-bold rounded-full uppercase tracking-widest shadow-sm">
            {category}
          </span>
          <time className="text-gray-400 font-medium">{date}</time>
        </div>
        <h1 className="text-5xl font-black text-gray-900 mb-8 leading-tight tracking-tight">
          {title}
        </h1>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-md">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="prose prose-lg prose-blue max-w-none prose-headings:font-bold prose-a:text-blue-600 prose-img:rounded-3xl prose-img:shadow-2xl">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </div>

      <footer className="mt-20 pt-12 border-t border-gray-100 flex justify-center">
        <Link href="/blog" className="px-8 py-3 bg-gray-900 text-white rounded-full font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-200">
          블로그 다른 글 보기
        </Link>
      </footer>
    </div>
  );
}
