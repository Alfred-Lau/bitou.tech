import React from 'react';

export default function FAQ() {
  return (
    <div className="container my-[90px]">
      <div className="text-center text-gray-900 text-[32px] font-bold font-['Poppins'] leading-[44.80px]">
        Frequently asked questions
      </div>
      <div className="text-center text-gray-900 text-opacity-60 text-sm font-semibold font-['Poppins'] leading-[25.20px] mt-[20px]">
        Get the best services at the lowest price
      </div>
      <div className="mt-[40px] grid grid-cols-12">
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return (
            <div
              className="col-span-4 h-[134px] justify-start items-start gap-5 inline-flex sm:col-span-12"
              key={index}
            >
              <div className="w-7 h-7 relative sm:w-0"></div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-gray-900 text-base font-bold font-['Poppins'] leading-snug">
                  How long do payouts take?
                </div>
                <div className="self-stretch text-gray-900 text-opacity-60 text-sm font-normal font-['Poppins'] leading-[25.20px]">
                  Once you’re set up, payouts arrive in your bank account on a
                  2-day rolling basis. Or you can opt to receive payouts weekly
                  or monthly.
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
