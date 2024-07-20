import React, { useState } from "react";

const FAQS = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "Setting up a tokenization project",
      answer:
        "To create an account, find the 'Sign up' or 'Create account' button, fill out the registration form with your personal information, and click 'Create account' or 'Sign up.' Verify your email address if needed, and then log in to start using the platform.",
    },
    {
      question: "Releasing tokenization products",
      answer:
        "Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease.",
    },
    {
      question: "Fundraising",
      answer:
        "If you forgot your password, click on the 'Forgot password' link on the login page. Follow the instructions to reset your password via email.",
    },
    {
      question: "Managing intellectual property",
      answer:
        "To change your email address, go to your account settings and update your email information. Save the changes and verify your new email address.",
    },
    {
      question: "Regulatory Strategy",
      answer:
        "Yes, you can delete your account by going to the account settings and selecting the delete account option. Please note that this action is irreversible.",
    },
    {
      question: "Transitioning to DAO",
      answer:
        "A premium account provides additional features such as advanced analytics, priority customer support, and more customization options.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-1 3xl:grid-cols-2 gap-4 mx-6 md:mx-10 lg:mx-20 xl:mx-24 2xl:mx-24 my-20 md:my-16 3xl:mt-48 4xl:mt-72 6xl:mt-96 xl:pr-20 lg:mt-40 2xl:mt-16">
      {faqs.map((faq, index) => (
        <div
          className={`accordion pb-4 border-b border-solid border-gray-200 ${
            activeIndex === index ? "active" : ""
          }`}
          id={`faq-${index}`}
          key={index}
        >
          <button
            className="accordion-toggle flex justify-between items-center w-full text-left group leading-8 transition duration-500 hover:text-indigo-600"
            aria-controls={`collapse-${index}`}
            onClick={() => handleToggle(index)}
          >
            <p className="text-[#333333] text-lg sm:text-xl md:text-2xl lg:text-[24px] 2xl:text-[32px] 4xl:text-[4rem] 6xl:text-[6rem] 
                  4xl:leading-[80px] 6xl:leading-[100px] font-bold">
              {faq.question}
            </p>
            <svg
              className={`text-gray-900 w-6 h-6 lg:w-8 lg:h-8 2xl:w-10 2xl:h-10 4xl:w-24 4xl:h-24 6xl:w-28 6xl:h-24  mr-4 md:mr-8 lg:mr-16 2xl:mr-[18rem] transition duration-500
                 group-hover:text-indigo-600 transform ${
                activeIndex === index ? "rotate-45" : ""
              }`}
              
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 4v14M4 11h14"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
          <div
            id={`collapse-${index}`}
            className={`accordion-content overflow-hidden transition-all duration-500 ${
              activeIndex === index
                ? "max-h-[200px] md:max-h-[1000px]"
                : "max-h-0"
            }`}
            aria-labelledby={`faq-${index}`}
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-[30px] 4xl:text-[54px] 6xl:text-[72px] text-gray-600 leading-6 2xl:leading-10 6xl:leading-[100px] px-4 md:px-10">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQS;
