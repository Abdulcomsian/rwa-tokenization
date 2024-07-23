import React from 'react'
import screen4 from "../assets/screen4.png";

export const RegulatoryCompliance = () => {
  return (
    <>
       <div className=" lg:flex gap-10 1xl:gap-24 3xl:gap-20 4xl:gap-32 mt-20 1xl:mt-0">
          <div>
            <img src={screen4} alt="" className='1xl:w-[39vw] 11xl:w-[33vw] 3xl:w-[32vw] 4xl:w-[23vw]'/>
          </div>
          <div className=" lg:w-[30vw] xl:w-[34vw]  1xl:w-[25vw] mx-6">
            <h1 className="text-[30px] md:text-[32px] lg:text-[52px] 3xl:text-[70px] 4xl:text-[7rem] 6xl:text-[9rem] font-extrabold 
            my-6 md:my-10 3xl:mb-10 leading-[40px] lg:leading-[64px] 3xl:leading-[80px] 4xl:leading-[110px] 6xl:leading-[140px]">
              Let Us Deal with Regulatory Compliance
            </h1>
            <p className='3xl:text-[28px] 4xl:text-[54px] 6xl:text-[72px]'>
              The regulatory landscape for tokenized assets is complex and
              ever-changing. Our law firm takes the burden of regulatory
              compliance off your shoulders, allowing you to focus on your
              business while we ensure that your tokenization project meets all
              legal requirements. From securities regulations and AML/KYC
              compliance to cross-border transaction laws, our team is adept at
              navigating the regulatory maze. </p>
              <p className='3xl:text-[28px] 4xl:text-[54px] 6xl:text-[72px] 4xl:hidden'>We work diligently to keep your
              project compliant, informed by the latest legal developments and
              regulatory insights, ensuring that your tokenized assets are not
              just innovative but also secure and legally sound.
            </p>
          </div>
        </div> 
    </>
  )
}
export default RegulatoryCompliance