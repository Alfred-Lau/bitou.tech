export function Item({ number, title }) {
  return (
    <>
      <div className="text-[42px] font-[800] leading-[50px]">{number}</div>
      <div className="text-[20px] font-[600] leading-[30px] pt-[10px]">
        {title}
      </div>
    </>
  );
}

const data = [
  {
    number: "100+",
    title: "Active Users",
  },
  {
    number: "500+",
    title: "Excellent Piecework",
  },
  {
    number: "1M+",
    title: "Improvement",
  },
];

export default function User() {
  return (
    <div className="container-v2">
      <div className="flex content-center py-[92px] my-[92px]">
        <ul className="w-[624px] h-[84px] flex items-center justify-between m-auto">
          {data.map((item, index) => (
            <li key={index} className="flex items-center flex-col">
              <Item {...item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
