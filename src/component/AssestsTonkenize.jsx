import React from 'react';
import screen3 from "../assets/screen3.png";

const AssetsTokenize = () => {
  return (
    <>
      <div
        className="my-8 md:mt-14 p-4 md:p-0 w-full min-h-screen bg-no-repeat bg-contain bg-center"
        style={{
          backgroundImage: `url(${screen3})`,
        }}
      >
        <div className="mx-2 md:mx-10 lg:mx-20 xl:mx-24 py-6 md:py-[80px]">
          <h1 className="text-[36px] lg:text-[56px] leading-[42px] mb-4 font-extrabold">
            Tokenize Any Assets, Anywhere
          </h1>
          <h3 className="text-[20px] md:text-[24px] font-bold w-full lg:w-[55vw] my-10">
            The promise of tokenization is vast, offering unprecedented opportunities for asset liquidity, access, and efficiency. Our firm is at the vanguard of this revolution, equipped to tokenize a diverse range of real-world assets.
          </h3>
          <p className="w-full lg:w-[56vw] text-[18px] md:text-[20px] lg:pr-9">
            Regardless of where your assets are located or what they consist of, our team has the expertise to guide you through the tokenization process. We ensure that your assets are transformed into digital tokens in a manner that maximizes their value and accessibility while maintaining legal compliance and operational efficiency.
          </p>
        </div>
      </div>
    </>
  );
};

export default AssetsTokenize;