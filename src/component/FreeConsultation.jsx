import React, { useState } from "react";
import layoutBG from "../assets/layoutBG.png";
import Ellipse1 from "../assets/Ellipse1.png";

export const FreeConsultation = () => {
  const [bounce, setBounce] = useState(false);

  const handleClick = () => {
    setBounce(true);
    setTimeout(() => setBounce(false), 1000);
  };

  return (
      <div
        className="w-full lg:w-[100vw] xl:w-[90vw] 2xl:w-[70vw] 4xl:w-[44vw]  relative bg-cover bg-no-repeat  xl:flex flex-col"
        style={{
          backgroundImage: `url(${layoutBG})`,
        }}
      >
        <div
          className="absolute xl:min-w-screen bg-contain 2xl:bg-start  w-full h-full bg-no-repeat "
          style={{
            backgroundImage: `url(${Ellipse1})`,
          }}
        />
        <div
          className={`relative ml-6 md:ml-10 lg:ml-20 xl:ml-24 w-[80%] h-[80%] 2xl:max-w-fit `}
        >
          <div className="w-full   bg-opacity-80">
            <div className="pt-1 pr-10 md:pt-2 lg:pt-4 2xl:pt-5 4xl:pt-20 6xl:pt-32">
              <h1 className="text-3xl md:text-4xl lg:text-[48px] xl:text-[72px] 2xl:text-[7rem] 4xl:text-[8.6rem] 6xl:text-[11rem] font-extrabold md:leading-[60px] xl:leading-[85px] 2xl:leading-[115px] 4xl:leading-[150px]">
                Tokenization of Real-World Assets
              </h1>
            </div>
            <div className="text-[16px] md:text-base lg:text-lg xl:text-[20px] 2xl:text-[32px] 4xl:text-[54px] 6xl:text-[72px] my-4 md:my-6 lg:my-8 xl:my-10 4xl:my-16 6xl:my-20">
              <p className="2xl:leading-[3rem] 4xl:leading-[5rem] 6xl:leading-[6.3rem]">
                We see the RWA tokenization as a transformative opportunity for
                businesses seeking to unlock new value and access broader
                markets. Tokenization finds itself uniquely challenged by a
                landscape of legal uncertainty, largely because specific
                regulations directly addressing this innovative domain remain
                absent. As a result, those operating within the tokenization
                market are compelled to adeptly navigate and apply the nearest
                applicable regulatory frameworks, seeking the best fit to meet
                the intricate demands of this evolving space.
              </p>
            </div>
          </div>

          <div className={`space-y-6 md:space-y-8 lg:space-y-14 mt-8 lg:mt-16`}>
            <div
              className={`flex flex-col md:flex-row gap-4 md:gap-6 md:items-center justify-between ${
                bounce ? "animate-bounce-up" : ""
              }`}
            >
              {" "}
              {/* use here*/}
              <h1 className="text-xl md:text-2xl lg:text-[28px]   font-extrabold text-center md:text-left 2xl:text-[35px] 4xl:text-[80px] 6xl:text-[100px] 2xl:leading-[45px] 4xl:leading-[80px] 6xl:leading-[100px]">
                Book a free consultation
              </h1>
              <input
                type="text"
                placeholder="Your name"
                className="bg-white rounded px-2 2xl:px-5 w-full lg:w-[10rem] xl:w-[18rem] 2xl:w-[18rem] 3xl:w-[23rem]  2xl:h-[5rem] 4xl:h-[7rem] 
                4xl:w-[26rem] 6xl:w-[40rem] 6xl:py-16 6xl:text-[4.5rem] text-base md:text-lg 2xl:text-[2.2rem] 4xl:text-[3rem] py-2 2xl:py-4 border border-gray-300"
              />
              <input
                type="email"
                placeholder="Your email"
                className="bg-white rounded px-2 2xl:px-5 w-full lg:w-[10rem] xl:w-[18rem] 2xl:w-[18rem] 3xl:w-[23rem] 2xl:h-[5rem] 4xl:h-[7rem] 4xl:w-[26rem] text-base 
                md:text-lg 2xl:text-[2.2rem] 4xl:text-[3rem] 6xl:w-[40rem] 6xl:py-16 6xl:text-[4.5rem] py-2 2xl:py-4 border border-gray-300"
              />
              <input
                type="button"
                value="BOOK"
                className="bg-black text-white rounded px-2 2xl:px-5 w-full lg:w-28 xl:w-[10.6rem] 2xl:w-[9rem] 3xl:w-[14rem] 4xl:w-[15rem] 6xl:w-[22rem] text-base md:text-lg 2xl:text-[1.4rem] 4xl:text-[3rem] 6xl:text-[4rem]  py-2 2xl:py-6 4xl:py-9 6xl:py-11"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-10 mb-4 justify-between pb-8 4xl:pt-10 6xl:pt-20">
              <div
                onClick={handleClick}
                className="border-2 border-[#020202] py-4 px-6 lg:py-6 2xl:py-10 4xl:py-20 4xl:px-16 lg:px-8 2xl:px-12 w-full lg:w-[370px] 2xl:w-[37.5rem] 4xl:w-[55rem] 6xl:w-[80rem] bg-white bg-opacity-40 rounded shadow-custom cursor-pointer"
              >
                <h1 className="text-lg md:text-xl lg:text-[24px] 2xl:text-[45px] 4xl:text-[60px] 6xl:text-[84px] font-bold 2xl:leading-[54px]
                6xl:leading-[80px]">
                  What can be tokenized
                </h1>
                <p className="2xl:text-[30px] 4xl:text-[50px] 6xl:text-[70px] 6xl:pt-10">
                  Find out if your product is eligible
                </p>
              </div>

              <div
                onClick={handleClick}
                className="border-2 border-[#020202] py-4 px-6 lg:py-6 2xl:py-10 4xl:py-20 4xl:px-16 lg:px-8 2xl:px-12 w-full lg:w-[370px] 2xl:w-[37.5rem] 4xl:w-[55rem] 6xl:w-[80rem] bg-white bg-opacity-40 rounded shadow-custom cursor-pointer"
              >
                <h1 className="text-lg md:text-xl lg:text-[24px] 2xl:text-[45px] 4xl:text-[60px] 6xl:text-[84px] font-bold 2xl:leading-[54px]">
                  Legal aspects
                </h1>
                <p className="2xl:text-[30px] 4xl:text-[50px] 6xl:text-[70px] 6xl:pt-10">
                  Details on the regulation of RWA
                </p>
              </div>

              <div
                onClick={handleClick}
                className="border-2 border-[#020202] py-4 px-6 lg:py-6 2xl:py-10 4xl:py-20 4xl:px-16 lg:px-8 2xl:px-12 w-full lg:w-[370px] 2xl:w-[37.5rem] 4xl:w-[55rem] 6xl:w-[80rem] bg-white bg-opacity-40 rounded shadow-custom cursor-pointer"
              >
                <h1 className="text-lg md:text-xl lg:text-[24px] 2xl:text-[45px] 4xl:text-[60px] 6xl:text-[84px] font-bold 2xl:leading-[54px] 6xl:leading-[80px]">
                  Obtain case studies
                </h1>
                <p className="2xl:text-[30px] 4xl:text-[50px] 6xl:text-[70px] 6xl:pt-10">
                  We've already helped several companies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default FreeConsultation;
