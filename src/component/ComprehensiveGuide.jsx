import React from "react";
import screen2 from "../assets/screen2.png";
import shape from "../assets/Shape.png";

export const ComprehensiveGuide = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6 md:gap-24 mx-6 md:mx-10 lg:mx-24">
        <div className="">
          <img src={screen2} alt="" className="w-full md:w-auto" />
        </div>
        <div className="w-full lg:w-96 space-y-8">
          <h1 className="text-[32px] md:text-[44px] xl:text-[56px] font-extrabold md:leading-[50px] xl:leading-[66px]">
            Comprehensive Guidance
          </h1>
          <p className="">
            Our firm provides comprehensive guidance, making the tokenization of
            real-world assets seamless for our clients. From real estate and
            fine art to commodities and beyond, we understand the nuances of
            various asset classes and the specific legal considerations each
            entails.
          </p>
          <h1 className="text-[20px] md:text-[24px] font-bold">
            Our practice is built on:
          </h1>
          <div className="space-y-5">
            <div className="flex gap-4 md:gap-6">
              <img src={shape} alt="" />
              <p>Foundation of innovation</p>
            </div>
            <div className="flex gap-4 md:gap-6">
              <img src={shape} alt="" />
              <p>Integrity</p>
            </div>
            <div className="flex gap-4 md:gap-6">
              <img src={shape} alt="" />
              <p>Unwavering focus on client needs</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ComprehensiveGuide;
