import React, { useState } from "react";
import layoutBG from "../assets/layoutBG.png";
import Ellipse1 from "../assets/Ellipse1.png";

export const FreeConsultation = () => {
  const [bounce, setBounce] = useState(false);

  const handleClick = () => {
    setBounce(true);
    setTimeout(() => setBounce(false), 1000); // Reset bounce after 1 second
  };

  return (
    <>
      <div
        className="w-full min-h-screen relative"
        style={{
          backgroundImage: `url(${layoutBG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${Ellipse1})`,
            backgroundRepeat: "no-repeat",
          }}
          className="absolute w-full h-full"
        />
        <div className={`relative ml-6 md:ml-10 lg:ml-20 xl:ml-24 w-[80%] h-[80%]`}>
          <div className="w-full lg:w-[55vw] bg-opacity-80">
            <div className="pt-1 pr-10 md:pt-2 lg:pt-4">
              <h1 className="text-3xl md:text-4xl lg:text-[48px] xl:text-[72px] font-extrabold md:leading-[60px] xl:leading-[85px]">
                Tokenization of Real-World Assets
              </h1>
            </div>
            <div className="text-sm md:text-base lg:text-lg xl:text-[20px] my-4 md:my-6 lg:my-8 xl:my-10">
              <p>
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
            <div className={`flex flex-col md:flex-row gap-4 md:gap-6 md:items-center justify-between ${bounce ? "animate-bounce-up" : ""}`}>  {/* use here*/}
              <h1 className="text-xl md:text-2xl lg:text-[28px] font-extrabold text-center md:text-left">
                Book a free consultation
              </h1>
              <input
                type="text"
                placeholder="Your name"
                className="bg-white rounded px-2 w-full lg:w-[270px] xl:w-[270px] text-base md:text-lg py-2 border border-gray-300"
              />
              <input
                type="email"
                placeholder="Your email"
                className="bg-white rounded px-2 w-full lg:w-[270px] xl:w-[270px] text-base md:text-lg py-2 border border-gray-300"
              />
              <input
                type="button"
                value="BOOK"
                className="bg-black text-white rounded px-2 w-full lg:w-28 xl:w-[170px] text-base md:text-lg py-2"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-10 mb-4 justify-between">
              <div
                onClick={handleClick}
                className="border-2 border-[#020202] py-4 px-6 lg:py-6 lg:px-8 w-full lg:w-[370px] bg-white bg-opacity-40 rounded shadow-custom cursor-pointer"
              >
                <h1 className="text-lg md:text-xl lg:text-[24px] font-bold">
                  What can be tokenized
                </h1>
                <p>Find out if your product is eligible</p>
              </div>

              <div
                onClick={handleClick}
                className="border-2 border-[#020202] py-4 px-6 lg:py-6 lg:px-8 w-full lg:w-[370px] bg-white bg-opacity-[40%] backdrop-blur-[25px] rounded cursor-pointer"
              >
                <h1 className="text-lg md:text-xl lg:text-[24px] font-bold">
                  Legal aspects
                </h1>
                <p>Details on the regulation of RWA</p>
              </div>
              <div
                onClick={handleClick}
                className="border-2 border-[#020202] py-4 px-6 lg:py-6 lg:px-8 w-full lg:w-[370px] bg-white bg-opacity-[40%] backdrop-blur-[25px] rounded cursor-pointer"
              >
                <h1 className="text-lg md:text-xl lg:text-[24px] font-bold">
                  Obtain case studies
                </h1>
                <p>We've already helped several companies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeConsultation;
