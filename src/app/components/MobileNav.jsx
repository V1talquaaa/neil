import React from "react";
import Image from "next/image";

export const MobileNav = ({ closeMenuBtn }) => {
  return (
    <nav className="fixed py-[40px] top-0 right-0 bg-[#071468] w-[80%] h-screen z-50">
      <div className="container">
      <div className="container flex justify-end">
        <button type="button" onClick={closeMenuBtn} className="inline-block">
          <Image src="/close.svg" width={24} height={24} alt="close" />
        </button>
      </div>
        <ul className="mt-[48px] lg:mt-0 flex flex-col gap-[32px] lg:flex-row items-center lg:gap-[16px] text-lg text-mainWhite">
          <li>
            <a href="#about " onClick={closeMenuBtn}>About me</a>
          </li>
          <li> 
            <a href="#services" onClick={closeMenuBtn}>Services</a>
          </li>
          <li>
            <a href="#history" onClick={closeMenuBtn}>Reviews</a>
          </li>
        </ul>
        <div className="mt-[48px] lg:mt-0 text-base text-mainWhite">
          <p className="mb-[12px] text-center lg:text-left">
            Have any questions?
          </p>
          <a href="mailto:tim@brotherinblue.org" type="email" className="flex justify-center">
            <Image src="/sms-tracking.svg" width={24} height={24} alt="email" />
            <span className="ml-[6px]">tim@brotherinblue.org</span>
          </a>
        </div>
      </div>
    </nav>
  );
};
