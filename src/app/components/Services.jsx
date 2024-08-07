import Image from "next/image";
import React from "react";

function Services() {
  return (
    <section className="pt-[93px] pb-[121px] bg-[#F0F2FC]">
      <div className="container">
        <h2 className="text-center text-5xl font-bold text-mainBlack">
          WHAT{" "}
          <span className="py-[8px] px-[12px] text-mainWhite bg-mainBlue border rounded-[8px] -rotate-3 inline-block">
            SERVICES
          </span>{" "}
          CATCH
        </h2>
        <p className="mt-[33px] text-center text-5xl font-bold text-mainBlack">
          YOUR ATTENTION?
        </p>
        <ul className="mt-[72px] grid grid-cols-3 gap-[24px] text-center">
          <li className="flex flex-col justify-between border rounded-[8px] px-[16px] py-[30px] bg-mainWhite">
            <Image
              src="/services1.png"
              alt="icon"
              width={72}
              height={72}
              className="mx-auto"
            />
            <h3 className="my-[24px] text-2xl text-mainBlue font-semibold">Executive Coaching</h3>
            <p className="mb-[24px] text-sm text-mainBlack">
              Executive coaching is a personalized form of learning and
              self-development. It helps leaders achieve change, effective
              action, personal growth, and improved performance, leading to
              higher team performance and better business results
            </p>
            <button className="py-[12px] w-[168px] mx-auto px-[24px] text-base font-bold border bg-mainBlue text-mainWhite rounded-[8px] hover:bg-mainWhite hover:text-mainBlue ease-in duration-200 hover:border-mainBlue">
              Learn More
            </button>
          </li>
          <li className="flex flex-col justify-between border rounded-[8px] px-[16px] py-[30px] bg-mainWhite">
            <Image
              src="/services2.png"
              alt="icon"
              width={72}
              height={72}
              className="mx-auto"
            />
            <h3 className="my-[24px] text-2xl text-mainBlue font-semibold">Team Coaching</h3>
            <p className="mb-[24px] text-sm text-mainBlack">
              Team coaching enhances team effectiveness and success. I help
              teams thrive by building the necessary conditions: a clear
              direction, strong structure, supportive context, and shared
              mindset. I analyze your team&apos;s setup and identify areas for
              improvement
            </p>
            <button className="w-[168px] mx-auto py-[12px] px-[24px] text-base font-bold border bg-mainBlue text-mainWhite rounded-[8px] hover:bg-mainWhite hover:text-mainBlue ease-in duration-200 hover:border-mainBlue">
              Learn More
            </button>
          </li>
          <li className="flex flex-col justify-between border rounded-[8px] px-[16px] py-[30px] bg-mainWhite">
            <Image
              src="/services3.png"
              alt="icon"
              width={72}
              height={72}
              className="mx-auto"
            />
            <h3 className="my-[24px] text-2xl text-mainBlue font-semibold">Leader Development</h3>
            <p className="mb-[24px] text-sm text-mainBlack">
              Leaders are mostly made, not born. The ability to effectively
              lead, motivate and direct a group of people requires a complex set
              of skills, acquired through experiences, self development and
              training. I help leaders develop these skills through assessment,
              reflection, challenge and support.
            </p>
            <button className="w-[168px] mx-auto py-[12px] px-[24px] text-base font-bold border bg-mainBlue text-mainWhite rounded-[8px] hover:bg-mainWhite hover:text-mainBlue ease-in duration-200 hover:border-mainBlue">
              Learn More
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Services;
