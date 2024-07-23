import React from "react";
import screen6 from "../assets/screen6.png";

export const RealestateTokenization = () => {
  return (
    <>
      <div className="mx-auto md:mx-12 lg:flex justify-center  items-center gap-10 lg:mx-44 my-20 3xl:my-28 4xl:mt-72">
        <div>
          <img src={screen6} alt="" className="relative  1xl:w-[36vw]  4xl:w-[40vw]" />
        </div>
        <div className="lg:w-[20rem] 3xl:w-[35rem] 4xl:w-[50rem]  text-center">
          <h1 className="text-[24px] 3xl:text-[36px] 4xl:text-[60px] 6xl:text-[80px] my-8 font-extrabold ">
            Advised a tokenization project on the tokenization of real estate in
            Dubai, UAE,
          </h1>
          <p className="text-[16px] 3xl:text-[30px] 4xl:text-[54px] 6xl:text-[72px]">
            and developed a tailored tokenization model for the client with a
            focus on regulatory compliance and scalability.
          </p>
        </div>
      </div>
    </>
  );
};
