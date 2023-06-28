export default function Header() {
  return (
    <div className=" sticky h-20 bg-white top-0 ">
      <div className="max-w-[1280px]  m-auto flex justify-between items-center h-full text-[#3B3C4A]">
        <h1 className="text-2xl  leading-20">Bi Tou</h1>
        <ul className="flex ">
          <li className="px-[20px] hover_text">home</li>
          <li className="px-[20px] hover_text">blog</li>
          <li className="px-[20px] hover_text">contact</li>
        </ul>
        <div className="flex gap-[10px]">
          <div>search</div>
          <div>切换主题</div>
        </div>
      </div>
    </div>
  );
}
