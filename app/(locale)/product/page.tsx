"use client";

import { getUserInfoURL } from "@/app/api/user";
import React from "react";

export default function Product() {
  const Products = [
    {
      id: 0,
      title: "bitou AI 平台",
      btnText: "开始使用",
      img: "",
      link: "https://work.bitou.tech",
    },
    {
      id: 1,
      title: "bitou AI 内容客户端",
      btnText: "下载试用",
      link: "https://work.bitou.tech",
      img: "",
      handler: async () => {
        const user = await getUserInfoURL({});
        console.log("🚀 ~ handler: ~ user:", user);
      },
    },
    {
      id: 2,
      title: "penjs 博客",
      btnText: "浏览",
      img: "",
      link: "https://pen.bitou.tech",
    },
  ];
  return (
    <div className="container min-h-[calc(100vh-400px)] mt-[60px]">
      <div className="my-[60px]">
        <ul className="grid  gap-[20px]">
          {Products.map((item, index) => {
            return (
              <li className="border rounded-[4px] h-[300px]" key={item.id}>
                <div className="flex justify-center items-center h-full">
                  <span>{item.title}</span>

                  <div>
                    {item.handler ? (
                      <span onClick={item.handler}> {item.btnText}</span>
                    ) : (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-[120px] h-[40px] leading-[40px] text-center text-white bg-blue-500 rounded-[4px] "
                      >
                        {item.btnText}
                      </a>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
