import BlogList from './components/BlogList';
import { Navigation } from './components/Navigation';
import { useRouter } from 'next/navigation';

export default async function Home() {
  return (
    <main>
      <div>
        <Navigation navLinks={[]} />
      </div>
      <div className="flex min-h-screen flex-col items-center justify-between p-24 ">
        <BlogList />
      </div>
    </main>
  );
}
