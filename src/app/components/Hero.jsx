import Image from "next/image";
import React from "react";
import SkyIconHero from "../svg/SkyIconHero";
import ArrowHeroIcon from "../svg/ArrowHeroIcon";

function Hero() {
  return (
    <section className="pt-[75px] pb-[134px] bg-mainBlue text-mainWhite relative">
      <div className="container flex items-center">
        <div className="z-10 ">
          <h1 className="text-[56px] font-bold">
            CLARITY AND FOCUS ON WELL DEFINED{" "}
            <span className="px-[12px] py-[8px] border bg-mainWhite text-mainBlue rounded-[8px] -rotate-3 inline-block">
              GOALS
            </span>
          </h1>
          <p className="mt-[12px] text-2xl">
            Greater resilience and{" "}
            <span className="font-bold">
              reduced stress <br /> Improved communication
            </span>{" "}
            and presentation skills <br /> Engaged and{" "}
            <span className="font-bold">thriving teams</span> in a virtual world
          </p>
          <div className="flex">
            <button className="mt-[48px] mr-[68px] py-[12px] px-[24px] text-base font-bold border bg-mainWhite text-mainBlue rounded-[8px] hover:bg-mainBlue hover:text-mainWhite ease-in duration-200">
              Get in touch
            </button>
            <ArrowHeroIcon />
          </div>
        </div>
        <Image src={"/hero.png"} width={556} height={435} alt="img" />
      </div>
      <div className="absolute bottom-0 z-0">
        <SkyIconHero />
      </div>
    </section>
  );
}

export default Hero;
