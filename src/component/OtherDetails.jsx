import React from "react";
import screen7 from "../assets/screen7.png";

export const OtherDetails = () => {
  return (
    <>
      <div
        className=" w-full xl:h-[90vh] 1xl:h-[85vh] 11xl:h-[80vh] 3xl:h-[55vh] 4xl:h-[56vh] 6xl:h-[52vh] bg-bottom  flex flex-col justify-center bg-contain bg-no-repeat "
        style={{
          backgroundImage: `url(${screen7})`,
        }}
      >
        <div className=" mx-6 lg:mx-24 3xl:mx-40">
          <h1
            className="text-[44px] text-center lg:text-[72px] 3xl:text-[96px] 4xl:text-[10rem] 6xl:text-[12rem] font-extrabold lg:w-10 
            lg:leading-[80px] 3xl:leading-[110px] 4xl:leading-[10rem] 6xl:leading-[12rem]"
          >
            Other Details
          </h1>
          <p className="md:w-[75vw] lg:w-[36rem] 3xl:w-[52rem] 4xl:w-[24vw] text-[16px] md:text-[20px] py-10 4xl:pt-24 text-[#333333] 3xl:text-[30px] 4xl:text-[54px] 6xl:text-[72px]">
            In the transformative field of asset tokenization, Aurum Law Firm is
            a trusted legal advisor, guiding clients through the complexities of
            digitizing real-world assets. Our selected cases, publications, and
            accolades in this area demonstrate our expertise in navigating the
            legal intricacies of tokenization, ensuring compliance and
            innovation in every transaction.
          </p>
        </div>
      </div>
    </>
  );
};
