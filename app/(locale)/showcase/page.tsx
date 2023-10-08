import React from 'react';

export default function Showcase() {
  return (
    <div className="container min-h-[calc(100vh-400px)] mt-[60px]">
      <div className="my-[60px]">
        <ul className="grid grid-cols-12 gap-[20px]">
          {[1, 2, 3, 4, 5, 6].map((item, index) => {
            return (
              <li
                className="col-span-4 border rounded-[4px] h-[300px]"
                key={index}
              >
                <div className="flex justify-center items-center h-full">
                  <a href="http://shujufaner.online">shujufaner</a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
