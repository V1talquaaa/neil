import React from "react";
import LinkedinIcon from "../svg/LinkedinIcon";
import ElipseHeroIcon from "../svg/ElipseHeroIcon";

function Header() {
  return (
    <section className="pt-[34px] bg-mainBlue text-mainWhite z-30">
        <div className="absolute top-[13px] z-20">
            <ElipseHeroIcon />
        </div>
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="text-[24px] font-semibold">Neil Meyrick</div>
          <div className="flex items-center text-base">
            <ul className="flex">
              <li className="mr-[16px] hover:-translate-y-2 hover:border-b ease-in duration-200">
                <a href="">About me</a>
              </li>
              <li className="mr-[16px] hover:-translate-y-2 hover:border-b ease-in duration-200">
                <a href="">Services</a>
              </li>
              <li className="mr-[16px] hover:-translate-y-2 hover:border-b ease-in duration-200">
                <a href="">Reviews</a>
              </li>
            </ul>
            <div className="ml-[60px] flex items-center z-10">
              <button className="mr-[16px] p-3 border rounded-[8px] font-bold hover:bg-mainWhite hover:text-mainBlue ease-in duration-200">Keep in Contact</button>
              <a
                href="https://linkedin.com"
                target="_black"
                rel="noopener noreferrer nofollow"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Header;
