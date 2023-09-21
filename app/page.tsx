import Link from 'next/link';
import BlogList from './components/BlogList';

export default async function Home() {
  return (
    <main className=" m-auto">
      <div className=" h-[400px] bg-orange-400 ">
        <div className="flex justify-center items-center h-full">
          <Link
            href="https://work.bitou.tech"
            className="w-[200px] bg-slate-100 px-[20px] py-[8px] rounded-[4px] text-[#3B3C4A] hover:bg-slate-200 hover:text-[#3B3C4A] transition-all duration-200 ease-in-out"
          >
            快速开始
          </Link>
        </div>
      </div>
      <div className="mt-[24px] ">
        <h3 className="self-start text-[32px]">最近更新</h3>
        <BlogList />
      </div>
    </main>
  );
}
