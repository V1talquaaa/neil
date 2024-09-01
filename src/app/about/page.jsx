import Image from "next/image";
import React from "react";
import AboutPageIcon from "../svg/AboutPageIcon";

function About() {
  return (
    <section className="pt-[12px] mb-[100px] relative">
        <div className="hidden lg:block absolute right-0 top-0 z-0">
        <AboutPageIcon />
        </div>
      <div className="container">
        <div className="hidden lg:flex items-center text-sm">
            <a href="/" className="text-[#B8B8B8]">Home screen <span className="text-base">&gt;</span></a>
            <span className="ml-[18px] text-[#5B5B5B]">About me</span>
        </div>
        <div className="lg:mt-[60px] lg:flex lg:items-cente relative">
        <Image src='/aboutAvatar.png' width={500} height={759} alt="neil meyrick" className="hidden lg:block"/>
        <div className="lg:ml-[24px] text-base lg:text-lg z-10">
          <h2 className="mb-[28px] text-[32px] lg:text-5xl lg:text-mainBlue font-bold leading-[1.2] lg:leading-[1.4]">LEARN & DEVELOP GROW</h2>
          <h3 className="mb-[32px] text-lg lg:text-xl font-light">
            Global Executive Coach, <br />
            Team Catalyst & Leadership Developer Facilitator
          </h3>
          <Image src='/aboutAvatarMob.png' width={400} height={386} alt="neil meyrick" className="rounded-[8px] mb-[20px] lg:hidden"/>
          <p>
            My first post-graduate job was as a teacher in Northern Spain. After
            a year there I spent ten years as a sales executive in three
            different textile businesses. Five years with the Sabanci export
            organisation in London, two years with Van Delden of Germany and
            three years back in the UK establishing a European operation for
            Panasia Indosyntec of Indonesia.
          </p>
          <p className="mt-[24px]">
            I started with Dell in 1998 as a trainer of European sales
            executives. I learned facilitation skills and group dynamics – the
            unspoken conversations in the room.{" "}
          </p>
          <p className="my-[24px]">
            Over the following years I was certified in Process Comms (PCM) MBTI
            and Hogan psychometrics. I learned of the need and ways to flex my
            communication styles to connect effectively with ‘more of the people
            more of the time.’{" "}
          </p>
          <p>
            I spent four years based in France and returned to the UK to become
            the leader of the first of several teams. My teams facilitated
            leadership development – giving leaders learning experiences and
            insights to develop their self awareness. I needed to practice what
            they preached and was grateful for feedback given and delighted to
            be rated a ‘rock star’ in successive rounds of the ‘Tell Dell’
            employee survey. 
          </p>
          <p className="my-[24px]">
            I practiced coaching as a leader, confident in the knowledge that my
            team members often knew better than me
          </p>
          <p className="mb-[24px]">
            I left Dell in 2018 and joined a cohort at the Academy of Executive
            Coaching in London where I became aware of how much more there was
            to coaching than I had previously known. Personal growth and
            learning are important to me.{" "}
          </p>
          <p>
            Since ‘graduating’ as a coach I have worked internationally and at
            home. I am very familiar with corporate environments and equally
            happy working with the third sector
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}

export default About;
