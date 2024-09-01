import React from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowRightBtnIcon from "../svg/ArrowRightBtnIcon";

function executiveCoaching() {
  return (
    <section className="pt-[12px] pb-[120px] lg:pb-[148px] relative">
      <div className="container">
        <div className="hidden lg:flex items-center text-sm">
          <a href="/" className="text-[#B8B8B8]">
            Home screen <span className="text-base">&gt;</span>
          </a>
          <span className="ml-[18px] text-[#5B5B5B]">Executive coaching</span>
        </div>
        <div className="lg:flex items-center mb-[24px] mt-[32px] lg:mt-[48px] text-[32px] lg:text-5xl font-bold">
          <h2 className="py-[8px] px-[12px] mr-[8px] bg-mainBlue text-mainWhite rounded-[8px] inline-flex">
            EXECUTIVE
          </h2>
          <h2 className="text-mainBlack bg-transparent">COACHING</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-[24px]">
          <div className="text-sm lg:text-lg">
            <p className="">
              <span className="font-bold">Coaching is used by business leaders to bring many and various
              benefits.</span> It has been shown in randomised trials (in this FT
              article) to be effective – not just in the opinion of the
              coachees, but also that of their managers.
            </p>
            <Image
            src="/executiveCoachingMob.png"
            width={343}
            height={408}
            alt="neil meyrick"
            className="mt-[24px] mx-auto lg:hidden"
          />
            <h3 className="mt-[50px] lg:mt-[70px] mb-[40px] ml-[24px] z-10 relative text-mainBlue font-semibold text-xl">
              <span className="relative">
                <span className="absolute left-[-35px] top-[-25px] w-[70px] h-[70px] bg-[#E3F2FF] rounded-full z-[-1]"></span>
                Some of the benefits that coaching can bring include:
              </span>
            </h3>
            <ul className="list-disc ml-4 grid gap-[16px]">
              <li>
                Helping you to establish goals and an action plan to achieve
                them
              </li>
              <li>
                Establishing longer-term professional and career strategies,
                tailored to your needs, values, goals and where you’d like to
                get to
              </li>
              <li>
                Serving as a strategic thinking partner, a trusted adviser and
                an objective sounding board
              </li>
              <li>Giving you time to think</li>
              <li>Helping to hone your management and leadership skills</li>
              <li>Finessing an authentic executive presence</li>
              <li>
                Enhancing communication skills – from inspirational and engaging
                presentations, to coaching and conflict resolution
              </li>
            </ul>
            <p className="mt-[46px] mb-[16px]">
              Socrates reportedly said ‘I cannot teach you anything, I can only
              make you think’. Coaching involves listening in a focused and
              mindful way, using questions as prompts to help you both reflect
              and then find the right solutions for yourself.
            </p>
            <p>
              I use an integrative model of coaching and subscribe to the
              Association for Coaching’s{" "}
              <span className="text-mainBlue">Global Code of Ethics</span>{" "}
            </p>
          </div>
          <Image
            src="/executiveCoaching.png"
            width={628}
            height={832}
            alt="neil meyrick"
            className="hidden lg:block"
          />
        </div>
        <h3 className="mt-[68px] text-3xl font-bold">OTHER SERVICES</h3>
        <ul className="mt-[24px] grid lg:grid-cols-2 gap-[24px]">
          <li className="p-[24px] flex justify-between items-center bg-[#EAEDFF] rounded-[4px]">
            <div className="">
              <h4 className="mb-[8px] text-xl lg:text-2xl text-mainBlue font-semibold">
                Team Coaching
              </h4>
              <p className="text-base text-mainBlack line-clamp-3">
                Team coaching enhances team effectiveness and success. I help
                teams thrive by building the necessary conditions: a clear
                direction, strong structure, supportive context, and shared
                mindset. I analyze your team&apos;s setup and identify areas for
                improvement
              </p>
            </div>
            <Link
              href="/team-coaching"
              className="ml-[45px] lg:ml-[149px] p-[16px] bg-mainBlue text-mainWhite rounded-[8px]"
            >
              <ArrowRightBtnIcon />
            </Link>
          </li>
          <li className="p-[24px] flex justify-between items-center bg-[#CFD6FF] rounded-[4px]">
            <div className="">
              <h4 className="mb-[8px] text-xl lg:text-2xl text-mainBlue font-semibold">
                Leader Development
              </h4>
              <p className="text-base text-mainBlack line-clamp-3">
                Leaders are mostly made, not born. The ability to effectively
                lead, motivate and direct a group of people requires a complex
                set of skills, acquired through experiences, self development
                and training. I help leaders develop these skills through
                assessment, reflection, challenge and support.
              </p>
            </div>
            <Link
              href="/leader-development"
              className="ml-[45px] lg:ml-[149px] p-[16px] bg-mainBlue text-mainWhite rounded-[8px]"
            >
              <ArrowRightBtnIcon />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default executiveCoaching;
