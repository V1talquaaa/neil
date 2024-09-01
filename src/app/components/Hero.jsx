'use client';
import React, { useState } from "react";
import Image from "next/image";
import SkyIconHero from "../svg/SkyIconHero";
import ArrowHeroIcon from "../svg/ArrowHeroIcon";
import Modal from "../ui/Modal";
import ElipseHeroIcon from "../svg/ElipseHeroIcon";
import RightHeroIcon from "../svg/RightHeroIcon";

function Hero() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <section className="py-[100px] lg:pt-[51px] lg:pb-[134px] bg-mainBlue bg-heroMob bg-right bg-no-repeat lg:bg-none text-mainWhite relative">
      <div className="absolute top-10 lg:-top-20">
        <ElipseHeroIcon />
      </div>
      <div className="hidden lg:block absolute right-0 -top-24">
        <RightHeroIcon />
      </div>
      <div className="container lg:flex lg:items-center relative z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[#041870] rounded-[469px] blur-[120px] -z-10 lg:hidden"></div>

        <div className="z-20">
          <h1 className="text-[32px] lg:text-[56px] font-bold relative">
            CLARITY AND FOCUS ON WELL DEFINED{" "}
            <span className="px-[12px] py-[8px] border bg-mainWhite text-mainBlue rounded-[8px] -rotate-3 inline-block">
              GOALS
            </span>
          </h1>
          <p className="mt-[12px] text-[16px] max-w-[232px] lg:max-w-[600px] lg:text-2xl relative">
            Greater resilience and{" "}
            <span className="font-bold">
              reduced stress <br /> Improved communication
            </span>{" "}
            and presentation skills <br /> Engaged and{" "}
            <span className="font-bold">thriving teams</span> in a virtual world
          </p>
          <div className="flex relative">
            <button
              type="button"
              onClick={handleOpenModal}
              className="mt-[48px] mr-[68px] py-[12px] px-[24px] text-base font-bold border bg-mainWhite text-mainBlue rounded-[8px] hover:bg-mainBlue hover:text-mainWhite ease-in duration-200"
            >
              Get in touch
            </button>
            <ArrowHeroIcon />
          </div>
        </div>
        <Image
          src={"/hero.png"}
          width={556}
          height={435}
          alt="img"
          className="hidden lg:block relative z-20"
        />
      </div>
      <div className="hidden lg:block absolute bottom-0 z-0">
        <SkyIconHero />
      </div>
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </section>
  );
}

export default Hero;
