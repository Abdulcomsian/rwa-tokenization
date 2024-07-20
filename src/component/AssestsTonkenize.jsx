import React from 'react';
import screen3 from "../assets/screen3.png";

const AssetsTokenize = () => {
  return (
    <div className="relative my-8 md:mt-14  p-4 md:p-0 w-full min-h-screen 6xl-h-[30%] 4xl:w-[44vw] mb-[6rem] 3xl:mb-0">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 3xl:h-[80vh] 4xl:h-[85vh]"
        style={{
          backgroundImage: `url(${screen3})`,
        }}
      ></div>
      <div className="relative z-10 mx-2 md:ml-10 lg:ml-20 xl:mx-24 py-6 md:py-0 2xl:pt-32 lg:space-y-6 2xl:space-y-12 4xl:space-y-16 6xl:space-y-24">
        <h1 className="text-[30px] sm:text-[36px] md:text-[40px] lg:text-[50px] 2xl:text-[80px] 4xl:text-[130px] leading-[34px] sm:leading-[42px] 2xl:leading-[90px] 4xl:leading-[130px]  mb-4 font-extrabold">
          Tokenize Any Assets, Anywhere
        </h1>
        <h3 className="text-[20px] md:text-[24px] 2xl:text-[42px] 4xl:text-[70px] 6xl:text-[90px] 2xl:leading-[60px] 4xl:leading-[90px] 6xl:leading-[120px] font-bold w-full lg:w-[80vw] xl:w-[55vw] 4xl:w-[37vw] xsm:my-4 md:my-8  xl:my-4  2xl:my-10">
          The promise of tokenization is vast, offering unprecedented opportunities for asset liquidity, access, and efficiency. Our firm is at the vanguard of this revolution, equipped to tokenize a diverse range of real-world assets.
        </h3>
        <p className="w-full lg:w-[80vw] xl:w-[56vw] 4xl:w-[37vw]  text-[16px] md:text-[20px] 2xl:text-[32px] 4xl:text-[54px] 6xl:text-[72px] lg:pr-9">
          Regardless of where your assets are located or what they consist of, our team has the expertise to guide you through the tokenization process. We ensure that your assets are transformed into digital tokens in a manner that maximizes their value and accessibility while maintaining legal compliance and operational efficiency.
        </p>
      </div>
    </div>
  );
};

export default AssetsTokenize;
