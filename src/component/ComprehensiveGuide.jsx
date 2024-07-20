import React from "react";
import screen2 from "../assets/screen2.png";
import shape from "../assets/Shape.png";

export const ComprehensiveGuide = () => {
  return (
    <div className="flex flex-col lg:flex-row xl:items-center gap-6 lg:gap-10 2xl:gap-0 mx-6 md:mx-10 lg:mx-2">
      {/* <div className=""> */}
        <img src={screen2} alt="" className="md:w-[70vw] lg:w-[50vw] 2xl:w-[50vw] 3xl:w-[35vw] 4xl:w-[23vw] 4xl:h-[60vh]" />
      {/* </div> */}
      <div className="w-full lg:w-[70vw] 2xl:w-[48rem] 4xl:w-[45vw] space-y-8 lg:pr-14 xl:pr-8 4xl:pr-0">
        <h1 className="text-[30px] md:text-[44px] xl:text-[56px] 2xl:text-[55px] font-extrabold md:leading-[50px] xl:leading-[66px]
        2xl:leading-[60px] 4xl:leading-[7.5rem] 4xl:text-[7rem]">
          Comprehensive Guidance
        </h1>
        <p className="xl:text-[20px] 2xl:text-[30px] 4xl:text-[54px] 6xl:text-[72px]">
          Our firm provides comprehensive guidance, making the tokenization of
          real-world assets seamless for our clients. From real estate and fine
          art to commodities and beyond, we understand the nuances of various
          asset classes and the specific legal considerations each entails.
        </p>
        <h1 className="text-[28px] 4xl:text-[6rem] 6xl:text-[8rem] md:text-[24px] 2xl:text-[36px] 4xl:leading-[90px] 6xl:leading-[120px] font-bold">
          Our practice is built on:
        </h1>
        <div className="space-y-5 2xl:space-y-2">
          <div className="flex gap-4 md:gap-6 2xl:gap-10">
            <img src={shape} alt="" className="4xl:w-[1vw]"/>
            <p className="xl:text-[20px] 2xl:text-[30px] 4xl:text-[54px] 6xl:text-[72px]">Foundation of innovation</p>
          </div>
          <div className="flex gap-4 md:gap-6 2xl:gap-10 ">
            <img src={shape} alt="" className="4xl:w-[1vw]"/>
            <p className="xl:text-[20px] 2xl:text-[30px] 4xl:text-[54px] 6xl:text-[72px]">Integrity</p>
          </div>
          <div className="flex gap-4 md:gap-6 2xl:gap-10">
            <img src={shape} alt="" className="4xl:w-[1vw]"/>
            <p className="xl:text-[20px] 2xl:text-[30px] 4xl:text-[54px] 6xl:text-[72px]">Unwavering focus on client needs</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ComprehensiveGuide;
