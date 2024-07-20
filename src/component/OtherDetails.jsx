import React from 'react'
import screen7 from "../assets/screen7.png";

export const OtherDetails = () => {
  return (
    <>
      <div
          className=" w-full min-h-screen flex flex-col justify-center bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${screen7})`,
          }}
        >
          <div className=" mx-6 lg:mx-24 2xl:mx-40">
            <h1 className="text-[44px] text-center lg:text-[72px] 2xl:text-[96px] 4xl:text-[10rem] 6xl:text-[12rem] font-extrabold lg:w-10 
            lg:leading-[80px] 2xl:leading-[110px] 4xl:leading-[10rem] 6xl:leading-[12rem]">
              Other Details
            </h1>
            <p className="lg:w-[36rem] 2xl:w-[52rem] 4xl:w-[20vw] text-[16px] md:text-[20px] py-10 4xl:pt-24 text-[#333333] 2xl:text-[30px] 4xl:text-[54px] 6xl:text-[72px]">
              In the transformative field of asset tokenization, Aurum Law Firm
              is a trusted legal advisor, guiding clients through the
              complexities of digitizing real-world assets. Our selected cases,
              publications, and accolades in this area demonstrate our expertise
              in navigating the legal intricacies of tokenization, ensuring
              compliance and innovation in every transaction.
            </p>
          </div>
        </div>
    </>
  )
}
