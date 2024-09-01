import React from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowRightBtnIcon from "../svg/ArrowRightBtnIcon";

function ExecutiveCoaching() {
  return (
    <section className="pt-[12px] pb-[120px] lg:pb-[148px] relative">
      <div className="container">
        <div className="hidden lg:flex items-center text-sm">
          <a href="/" className="text-[#B8B8B8]">
            Home screen <span className="text-base">&gt;</span>
          </a>
          <span className="ml-[18px] text-[#5B5B5B]">Team coaching</span>
        </div>
        <div className="lg:flex items-center mb-[16px] lg:mb-[24px] mt-[32px] lg:mt-[48px] text-[32px] lg:text-5xl font-bold">
          <h2 className="py-[8px] px-[12px] mr-[8px] bg-mainBlue lg:text-5xl text-mainWhite rounded-[8px] inline-flex">
            TEAM
          </h2>
          <h2 className="text-mainBlack bg-transparent">COACHING</h2>
        </div>
        <div className="lg:grid lg:grid-cols-3 gap-[24px]">
          <div className="col-span-2">
            <p className="text-base lg:text-xl">
              Effective teamwork requires the right processes, structures,
              behaviors, and communication for successful goal setting and
              delivery. The team coaching process below{" "}
              <span className="font-bold">
                will help transform your team into a truly high-performing unit
              </span>
            </p>
            <Image
              src="/teamCoachingImgMob.png"
              width={465}
              height={762}
              alt="neil meyrick"
              className="my-[32px] lg:hidden"
            />
            <ul className="lg:mt-[48px] lg:grid lg:grid-cols-custom gap-[12px] text-base">
              <li className="bg-[#CFD6FF] mb-[24px] lg:mb-0 lg:col-span-1 lg:row-span-2 flex flex-col justify-start p-[12px] relative pt-[24px] lg:pt-[100px] pb-[65px] rounded-[4px]">
              <div className="absolute lg:top-[84px] left-2 w-[52px] h-[52px] bg-[#EAEDFF] rounded-full z-0"></div>
                <h3 className="mb-[24px] mt-[15px] lg:mt-0 ml-[16px] text-xl text-mainBlue font-semibold z-10">STEP 1</h3>
                <p>
                  Meet, scope and agree the initial contract. I’ll usually use a
                  survey, interviews and stakeholder input to to assess the
                  team, understand and agree the desired outcomes. How can this
                  team become greater than the sum of its parts? Is this a team
                  or a working group? Why does the team exist? What’s important
                  to its members? What do its stakeholders require from it?
                </p>
              </li>

              <li className="bg-[#EAEDFF] mb-[24px] lg:mb-0 col-span-2 row-span-1 flex flex-col justify-start p-[12px] relative rounded-[4px]">
              <div className="absolute top-[12px] w-[52px] h-[52px] bg-[#CFD6FF] rounded-full z-0"></div>
                <h3 className="mb-[24px] ml-[16px] mt-[16px] text-xl text-mainBlue font-semibold z-10">STEP 2</h3>
                <p>
                  From the data collected in step one we’ll design a programme
                  to meet the desired outcomes. What needs to change in terms of
                  relationships, team processes and results? How will progress
                  be measured along the course of the programme? I’ll also be
                  coaching the leader to support and prepare them for the launch
                  event.
                </p>
              </li>

              <li className="bg-[#CFD6FF] mb-[24px] lg:mb-0 col-span-2 row-span-1 flex flex-col justify-start p-[12px] relative rounded-[4px]">
              <div className="absolute top-[12px] w-[52px] h-[52px] bg-[#EAEDFF] rounded-full z-0"></div>
                <h3 className="mb-[24px] mt-[16px] ml-[16px] text-xl text-mainBlue font-semibold z-10">STEP 3</h3>
                <p>
                  The launch event will be used to co-create the team charter
                  and the learning agenda (which will typically run over 6-12
                  months). The programme will include coaching for the team and
                  for individual team members. One model I use is Professor
                  Peter Hawkins’ <span className="text-mainBlue">Five disciplines</span> of high performance teams.
                  We’ll work ‘inside-out’ and ‘outside-in’.
                </p>
              </li>

              <li className="bg-[#EAEDFF] col-span-3 row-span-1 flex flex-col justify-start pb-[24px] px-[12px] relative rounded-[4px]">
              <div className="absolute top-[26px] w-[52px] h-[52px] bg-[#CFD6FF] rounded-full z-0"></div>
                <h3 className="mb-[24px] mt-[40px] ml-[12px] text-xl text-mainBlue font-semibold z-10">STEP 4</h3>
                <p>
                  There will be ongoing learning reviews throughout the
                  programme to ensure intended process, relationships and
                  business results targets are on track and achieved. By the end
                  of the programme the role of coach will be successfully
                  transferred to the team leader to ensure sustained performance.
                </p>
              </li>
            </ul>
          </div>
          <div className="col-span-1 hidden lg:block">
            <Image
              src="/teamCoachingImg.png"
              width={465}
              height={762}
              alt="neil meyrick"
              className="h-full"
            />
          </div>
        </div>
        <h3 className="mt-[68px] text-3xl font-bold">OTHER SERVICES</h3>
        <ul className="mt-[24px] grid lg:grid-cols-2 gap-[24px]">
          <li className="p-[24px] flex justify-between items-center bg-[#EAEDFF] rounded-[4px]">
            
            <div>
              <h4 className="mb-[8px] text-xl lg:text-2xl text-mainBlue font-semibold">
                Executive Coaching
              </h4>
              <p className="text-base text-mainBlack line-clamp-3">
                Team coaching enhances team effectiveness and success. I help
                teams thrive by building the necessary conditions: a clear
                direction, strong structure, supportive context, and shared
                mindset. I analyze your team&apos;s setup and identify areas for
                improvement.
              </p>
            </div>
            <Link
              href="/executive-coaching"
              className="ml-[45px] lg:ml-[149px] p-[16px] bg-mainBlue text-mainWhite rounded-[8px]"
            >
              <ArrowRightBtnIcon />
            </Link>
          </li>
          <li className="p-[24px] flex justify-between items-center bg-[#CFD6FF] rounded-[4px]">
            <div>
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

export default ExecutiveCoaching;