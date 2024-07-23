import React from 'react'
import screen5 from "../assets/screen5.png";

export const SelectedServices = () => {
  return (
    <>
       <div
          className="w-full h-[55vh]  md:h-[64vh] lg:h-[70vh] xl:h-[90vh]  1xl:h-[82vh] 11xl:h-[68vh] 3xl:h-[60vh] 4xl:h-[60vh] bg-contain bg-no-repeat bg-bottom flex flex-col items-center mb-32 md:mb-0"
          style={{
            backgroundImage: `url(${screen5})`,
          }}
        >
          
          <h1 className="md:pt-28 3xl:pt-20 4xl:pt-[26rem] text-[36px] md:text-[48px] lg:text-[60px] xl:text-[72px] 3xl:text-[96px] 4xl:text-[9rem] 6xl:text-[12rem] font-extrabold w-[90vw] md:w-[80vw] lg:w-[60vw] xl:w-[24vw] md:text-center leading-tight 3xl:leading-[100px]  4xl:leading-[140px] 6xl:leading-[170px] my-10 xl:my-10 3xl:my-14 4xl:my-28 6xl:my-32">
            Selected Services
          </h1>
          <p className=" text-[16px] md:text-[18px] lg:text-[20px] 3xl:text-[30px] 4xl:text-[54px] 6xl:text-[72px] md:text-center w-[90vw] md:w-[80vw] lg:w-[60vw] xl:w-[55vw] 2xl:w-[60vw] 1xl:w-[40vw] 11xl:w-[32vw] 3xl:w-[40vw] 4xl:w-[34vw] 6xl:w-[28vw]">
            Explore our specialized services in the realm of asset tokenization,
            where we bridge the gap between traditional finance and the digital
            world. Our expert team provides comprehensive legal support for the
            tokenization of real-world assets, ensuring secure and compliant
            transactions in this innovative space.
          </p>
        </div>
    </>
  )
}
