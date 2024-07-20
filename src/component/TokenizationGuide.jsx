import React from 'react';

export const TokenizationGuide = () => {
  return (
    <div className="container my-6 md:my-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:px-12 space-x-7 md:space-x-10 xl:space-x-12 2xl:space-x-40">
        <div className="lg:col-span-5 xl:col-span-4 2xl:col-span-3 place-content-center">
          <h1 className="leading-[39px] md:leading-[59px] 2xl:leading-[55px] 4xl:leading-[100px] text-[30px] md:text-[44px] xl:text-[52px] 2xl:text-[50px] 4xl:text-[90px] font-extrabold px-6 md:px-10">
            Guiding You Through Tokenization
          </h1>
        </div>
        <div className="lg:col-span-7 xl:col-span-8 xl:pr-24 2xl:pr-0 4xl:space-y-8 6xl:space-y-10">
          <h1 className="leading-[32px] md:leading-[40px] 
          xl:leading-[45px] 2xl:leading-[50px] 4xl:leading-[90px] 6xl:leading-[100px] xl:text-[40px] 2xl:text-[40px] 4xl:text-[5rem] 6xl:text-[6.3rem]
          text-[24px] md:text-[32px]  font-extrabold mt-6 lg:mt-0">
            Tokenization requires a nuanced understanding of the technological and legal frameworks.
          </h1>
          <p className="py-4 md:py-8 xl:text-[20px] 2xl:text-[32px] 4xl:text-[54px] 6xl:text-[72px]">
            Leveraging our deep expertise in blockchain technology, digital assets, and regulatory frameworks, we guide our clients through the complexities of the tokenization process, ensuring that their ventures into the digital asset space are both legally sound and strategically poised for success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TokenizationGuide;
