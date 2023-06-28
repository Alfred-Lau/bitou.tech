import BlogList from './components/BlogList';

export default async function Home() {
  return (
    <main className="max-w-[1280px] m-auto">
      <div className=" h-[400px] bg-orange-400 rounded-[8px]"></div>
      <div className="mt-[24px] ">
        <h3 className="self-start text-[32px]">Latest Paper</h3>
        <BlogList />
      </div>
    </main>
  );
}
