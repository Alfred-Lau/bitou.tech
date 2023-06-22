'use client';

import { Navigation } from './components/Navigation';
import { useRouter } from 'next/navigation';

export default async function Home() {
  // 接口数据冗余，直接删除.next 文件夹
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div>
        <Navigation navLinks={[]} />
      </div>
      <div>
        <div onClick={() => router.push('/byhand')}>
          我来通过代码的方式进行跳转
        </div>
      </div>
    </main>
  );
}
