import { fetchArticles } from './api/article';

export default async function Home() {
  // 接口数据冗余，直接删除.next 文件夹
  const res = await fetchArticles({});
  const { data } = await res.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      {data.map((item) => {
        return (
          <div key={item.id} className="p-20">
            <h2 className="">{item.title}</h2>
            <p>{item.content}</p>
          </div>
        );
      })}
    </main>
  );
}
