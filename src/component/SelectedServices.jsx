import React from 'react'
import screen5 from "../assets/screen5.png";

export const SelectedServices = () => {
  return (
    <>
       <div
          className="flex flex-col items-center mb-32 md:mb-0"
          style={{
            backgroundImage: `url(${screen5})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height:'100vh'
          }}
        >
          
          <h1 className="pt-28 text-[36px] md:text-[48px] lg:text-[60px] xl:text-[72px] font-extrabold w-[90vw] 
          md:w-[80vw] lg:w-[60vw] xl:w-[24vw] md:text-center leading-tight my-10">
            Selected Services
          </h1>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] md:text-center w-[90vw] md:w-[80vw] lg:w-[60vw] xl:w-[51vw]">
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
