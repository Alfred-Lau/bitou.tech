import React from "react";
import Image from "next/image";
import Nav from "../components/nav";

export default function Home() {
  return (
    <div>
      <div>
        <div className="relative bg-[url('https://render.bitou.tech/imgs/banner.png')] bg-no-repeat bg-center bg-cover min-h-[1024px]">
          <Nav />
          <div className="flex justify-center items-center mt-[85px] text-white flex-col">
            <span></span>
            <div>online payment processing is easy.</div>
            <div>
              make online payments and keep track of all your transactions.
            </div>

            <div>
              <div>download</div>
            </div>
          </div>
          <div className="absolute bottom-[-300px] w-full">
            {/* https://render.bitou.tech/imgs/Group.png */}
            <Image
              src="https://render.bitou.tech/imgs/Group.png"
              alt="bitou"
              width={1090}
              height={677}
              className="m-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
