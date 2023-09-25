import Blog from '@/app/components/home/blog';
import Banner from '@/app/components/home/Banner';
import Why from '@/app/components/home/why';
import Showcase from '@/app/components/home/showcase';
import FAQ from '@/app/components/home/faq';

export default async function Home() {
  return (
    <main className="md:min-h-screen md:m-auto md:mt-[-88px]">
      <Banner />
      <Why></Why>
      <Blog />
      <Showcase />
      <FAQ />
    </main>
  );
}
