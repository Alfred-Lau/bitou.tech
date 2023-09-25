import BlogList from '@/app/components/BlogList';
import Banner from '@/app/components/Banner';

export default async function Home() {
  return (
    <main className="md:min-h-screen md:m-auto md:mt-[-88px]">
      <Banner />
      <div className="md:max-w-[1280px] md:flex md:flex-col md:mt-[324px] md:justify-center md:items-center md:m-auto ">
        <h3 className="text-[32px]">最近更新</h3>
        <BlogList />
      </div>
    </main>
  );
}
