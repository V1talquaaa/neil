import Image from "next/image";
import React from "react";

function Grow() {
  return (
    <section className="pt-[136px] pb-[120px]">
      <div className="container flex items-center">
        <div className="mr-[24px] max-w-[845px] text-xl text-main">
          <h2 className="ml-[12px] text-5xl text-mainBlue">
            LEARN & DEVELOP{" "}
            <span className="py-[8px] px-[12px] text-mainWhite bg-mainBlue border rounded-[8px] -rotate-3 inline-block">
              GROW
            </span>
          </h2>
          <h3 className="mt-[30px] mb-[27px]">
            Global Executive Coach, <br /> Team Catalyst & Leadership Developer
            Facilitator
          </h3>
          <p className="my-[24px]">
            The statements above are examples of outcomes I can deliver for you,
            your leaders and their teams.{" "}
            <span className="font-bold">I have a track record of great results</span> working
            internationally and virtually across the world in both technology
            and the third sector
          </p>
          <p>
            I specialize in helping leaders realize their potential by{" "}
            <span className="font-bold">inspiring and engaging</span> their teams{" "}
            <span className="font-bold">to achieve better results</span> for their business and
            stakeholders. I have worked across many cultures and several
            languages
          </p>
          <p className="mt-[24px]">
            {" "}
            I would be delighted to work with you, your team or organisation{" "}
            <span className="font-bold">
              to support you in clearly defining and attaining your goals
            </span>
          </p>
          <ul className="mt-[56px] ml-[29px] flex">
  <li className="mr-[62px] text-2xl text-mainBlue font-semibold relative">
    <div className="absolute bottom-0 -left-5 w-[70px] h-[70px] bg-[#E3F2FF] rounded-full z-0"></div>
    <div className="relative z-10">
      10+ years
      <p className="text-xl font-normal">global sales experience</p>
    </div>
  </li>
  <li className="mr-[62px] text-2xl text-mainBlue font-semibold relative">
    <div className="absolute bottom-0 -left-5 w-[70px] h-[70px] bg-[#E3F2FF] rounded-full z-0"></div>
    <div className="relative z-10">
      20+ years
      <p className="text-xl font-normal">in sales and leadership development at Dell</p>
    </div>
  </li>
</ul>
          <button className="mt-[65px] py-[12px] px-[24px] text-base font-bold border bg-mainBlue text-mainWhite rounded-[8px] hover:bg-mainWhite hover:text-mainBlue ease-in duration-200 hover:border-mainBlue">Learn More</button>
        </div>
        <Image src="/growAvatar.png" width={411} height={466} alt="avatar" />
      </div>
    </section>
  );
}

export default Grow;
