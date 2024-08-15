import Image from "next/image";
import React from "react";

function Feedback() {
  return (
    <section id="reviews" className="pt-[92px] pb-[170px]">
      <div className="container grid grid-cols-2 gap-[24px]">
        <div className="">
          <h2 className="text-5xl font-bold text-mainBlack">WHAT </h2>
          <h2 className="py-[8px] px-[12px] w-[400px] text-5xl font-bold text-mainWhite bg-mainBlue border rounded-[8px]">
            CLIENTS THINK
          </h2>
          <p className="max-w-[556px] pt-[24px] pb-[32px] text-sm text-mainBlack">
            Discover the experiences and feedback from those who have worked
            with us. Read about their journeys and how our services have made an
            impact
          </p>
          <Image src="/feedbackImg.png" alt="nature" width={684} height={390} />
        </div>
        <div className="bg-[#F5F7FF]">
        <ul className="px-[16px] py-[32px] flex flex-col items-end relative bg-gradient-ul">
            <li className="order-1 py-[28px] px-[16px] max-w-[266px] bg-mainWhite rounded-[8px] shadow-md mb-[24px] mr-0 ml-auto">
              <Image
                src="/feedbackAvatar1.png"
                alt="avatar"
                width={42}
                height={42}
              />
              <p className="mt-[12px]">
                “Neil is a master facilitator. I have had the opportunity to
                work alongside him several times with senior leader audiences.
                He has a calm reassuring style, deep experience, and easily
                holds the attention of participants. Highly recommended.”
              </p>
            </li>
            <li className="order-2 py-[28px] px-[16px] max-w-[266px] bg-mainWhite rounded-[8px] shadow-md mb-[24px] ml-0 mr-auto absolute left-[60px] top-[210px]">
              <Image
                src="/feedbackAvatar2.png"
                alt="avatar"
                width={42}
                height={42}
              />
              <p className="mt-[12px]">
                “Neil is one of the best questioners I know and he taught me how
                to ask and frame great questions. He managed to challenge me far
                more than I thought possible, without being pushy. Excellent
                coach.”
              </p>
            </li>
            <li className="order-3 py-[28px] px-[16px] max-w-[266px] bg-mainWhite rounded-[8px] shadow-md ml-auto">
              <Image
                src="/feedbackAvatar3.png"
                alt="avatar"
                width={42}
                height={42}
              />
              <p className="mt-[12px]">
                “He can expertly open up and share the ‘collective wisdom’ of a
                class to the benefit of everyone present, and he will ensure
                that every voice is heard. I would recommend him without
                hesitation.”
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
