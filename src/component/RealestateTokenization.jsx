import React from "react";
import screen6 from "../assets/screen6.png";

export const RealestateTokenization = () => {
  return (
    <>
      <div className="mx-8 md:mx-12 lg:flex items-center gap-10 lg:mx-44 my-20 2xl:my-28">
        <div>
          <img src={screen6} alt="" className="relative 2xl:w-full 4xl:w-[28vw]" />
        </div>
        <div className="lg:w-[20rem] 2xl:w-[35rem] 4xl:w-[44rem]  text-center">
          <h1 className="text-[24px] 2xl:text-[36px] 4xl:text-[60px] 6xl:text-[80px] my-8 font-extrabold ">
            Advised a tokenization project on the tokenization of real estate in
            Dubai, UAE,
          </h1>
          <p className="2xl:text-[30px] 4xl:text-[54px] 6xl:text-[72px]">
            and developed a tailored tokenization model for the client with a
            focus on regulatory compliance and scalability.
          </p>
        </div>
      </div>
    </>
  );
};
