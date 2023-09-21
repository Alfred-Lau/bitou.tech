import Link from 'next/link';

export default function Header() {
  return (
    <div className=" sticky h-20 bg-white top-0 ">
      <div className="px-[20px] m-auto flex justify-between items-center h-full text-[#3B3C4A]">
        <h1 className="text-2xl  leading-20">笔头</h1>
        <ul className="flex ">
          <li className="px-[20px] hover_text">
            <Link href={'/'}> Home</Link>
          </li>
          <li className="px-[20px] hover_text">
            <Link href={'/blog'}> Blog</Link>
          </li>
          <li className="px-[20px] hover_text">
            <Link href={'/docs'}> Docs</Link>
          </li>
          <li className="px-[20px] hover_text">
            <Link href={'/about'}> About</Link>
          </li>
        </ul>
        <div className="flex gap-[10px]">
          <div>search</div>
          <div>切换主题</div>
        </div>
      </div>
    </div>
  );
}
