import React from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowRightBtnIcon from "../svg/ArrowRightBtnIcon";

function LeaderDevelopment() {
  return (
    <section className="pt-[12px] pb-[148px] relative">
      <div className="container">
        <div className="flex items-center text-sm">
          <a href="/" className="text-[#B8B8B8]">
            Home screen <span className="text-base">&gt;</span>
          </a>
          <span className="ml-[18px] text-[#5B5B5B]">Leadership coaching</span>
        </div>
        <div className="flex items-center mb-[24px] mt-[48px] text-5xl font-bold">
          <h2 className="py-[8px] px-[12px] mr-[8px] bg-mainBlue text-mainWhite rounded-[8px] inline-flex">
            LEADER
          </h2>
          <h2 className="text-mainBlack bg-transparent">DEVELOPMENT</h2>
        </div>
        <div className="flex gap-[22px]">
          <div className="">
            <p className="max-w-[549px] mb-[32px] text-base text-mainBlue text-right ml-auto">
              “The true value of a leader is not measured by the work they do. A
              leader’s true value is measured by the work they inspire others to
              do.” — Simon Sinek
            </p>
            <p className="text-xl text-mainBlack">
              How can your leaders truly unleash the potential of the people in
              their teams in service of your business? True leadership
              facilitates the execution of a company’s strategy by building
              alignment, generating engagement and growing the capabilities of
              others.
            </p>
            <p className="my-[16px] text-xl text-mainBlack">
              I facilitate leadership development programs on content including
              ‘leading a thriving team in a virtual world’, coaching skills,
              decision-making, delegation, effective feedback, personal & team
              development, strategic alignment and change leadership. I give
              simple and valuable tools to leaders to enable them to make a real
              difference to the teams they serve, as well as to the goals of
              their business. Programs can include a range of supplementary
              supports including mentoring, action learning, 360 degree and peer
              feedback.
            </p>
            <p className="text-xl text-mainBlack">
            What could your leaders do differently to benefit their teams and the wider organisation?
            </p>
          </div>
          <Image
            src="/LeaderDevelopmentImg.png"
            width={465}
            height={505}
            alt="neil meyrick"
          />
        </div>
        <h3 className="mt-[68px] text-3xl font-bold">OTHER SERVICES</h3>
        <ul className="mt-[24px] grid grid-cols-2 gap-[24px]">
          <li className="p-[24px] flex justify-between items-center bg-[#EAEDFF] rounded-[4px]">
            <div className="">
              <h4 className="mb-[8px] text-2xl text-mainBlue font-semibold">
                Executive Coaching
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
              href="/executive-coaching"
              className="ml-[149px] p-[16px] bg-mainBlue text-mainWhite rounded-[8px]"
            >
              <ArrowRightBtnIcon />
            </Link>
          </li>
          <li className="p-[24px] flex justify-between items-center bg-[#CFD6FF] rounded-[4px]">
            <div className="">
              <h4 className="mb-[8px] text-2xl text-mainBlue font-semibold">
              Team Coaching
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
              href="/team-coaching"
              className="ml-[149px] p-[16px] bg-mainBlue text-mainWhite rounded-[8px]"
            >
              <ArrowRightBtnIcon />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default LeaderDevelopment;
