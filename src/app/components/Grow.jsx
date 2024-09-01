import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArrowAboutIcon from "../svg/ArrowAboutIcon";

function Grow() {
  return (
    <section id="about" className="py-[80px] lg:pt-[136px] lg:pb-[120px]">
      <div className="container lg:flex lg:items-center">
        <div className="lg:mr-[24px] max-w-[845px] text-xl text-main relative">
          <div className="hidden lg:block absolute right-0 top-10">
            <ArrowAboutIcon />
          </div>
          <h2 className="lg:ml-[12px] text-[32px] lg:text-5xl  lg:text-mainBlue font-bold">
            LEARN & DEVELOP GROW
          </h2>
          <h3 className="mt-[30px] mb-[27px] font-light">
            Global Executive Coach, <br /> Team Catalyst & Leadership Developer
            Facilitator
          </h3>
          <Image src="/growAvatar.png" width={343} height={386} alt="avatar" className="lg:hidden mx-auto"/>
          <p className="my-[24px]">
            The statements above are examples of outcomes I can deliver for you,
            your leaders and their teams.{" "}
            <span className="font-bold">
              I have a track record of great results
            </span>{" "}
            working internationally and virtually across the world in both
            technology and the third sector
          </p>
          <p>
            I specialize in helping leaders realize their potential by{" "}
            <span className="font-bold">inspiring and engaging</span> their
            teams <span className="font-bold">to achieve better results</span>{" "}
            for their business and stakeholders. I have worked across many
            cultures and several languages
          </p>
          <p className="mt-[24px]">
            {" "}
            I would be delighted to work with you, your team or organisation{" "}
            <span className="font-bold">
              to support you in clearly defining and attaining your goals
            </span>
          </p>
          <ul className="mt-[32px]  lg:mt-[56px] ml-[18px] lg:ml-[29px] lg:flex">
            <li className="mb-[18px] lg:mb-0 lg:mr-[62px] text-2xl text-mainBlue font-semibold relative">
              <div className="absolute bottom-0 -left-5 w-[70px] h-[70px] bg-[#E3F2FF] rounded-full z-0"></div>
              <div className="relative z-10">
                10+ years
                <p className="text-xl font-normal">global sales experience</p>
              </div>
            </li>
            <li className="lg:mr-[62px] text-2xl text-mainBlue font-semibold relative">
              <div className="absolute bottom-0 -left-5 w-[70px] h-[70px] bg-[#E3F2FF] rounded-full z-0"></div>
              <div className="relative z-10">
                20+ years
                <p className="text-xl font-normal">
                  in sales and leadership development at Dell
                </p>
              </div>
            </li>
          </ul>
          <Link
            href="/about"
            className="mt-[65px] py-[12px] px-[24px] inline-block text-base font-bold border bg-mainBlue text-mainWhite rounded-[8px] hover:bg-mainWhite hover:text-mainBlue ease-in duration-200 hover:border-mainBlue"
          >
            Learn More
          </Link>
        </div>
        <Image src="/growAvatar.png" width={411} height={466} alt="avatar" className="hidden lg:block"/>
      </div>
    </section>
  );
}

export default Grow;
