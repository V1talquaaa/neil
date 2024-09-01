'use client';
import React, { useState } from "react";
import LinkedinIcon from "../svg/LinkedinIcon";
import Modal from "../ui/Modal";
import Link from "next/link";

function Header() {

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  }


  return (
    <section className="hidden lg:block py-[24px] bg-mainBlue text-mainWhite z-30">
      <div className="absolute top-[13px] z-20">
      </div>
      <div className="container">
        <div className="flex justify-between items-center">
          <Link href='/' className="text-[24px] font-semibold">Neil Meyrick</Link>
          <div className="flex items-center text-base">
            <ul className="flex">
              <li className="mr-[16px] hover:-translate-y-2 hover:border-b ease-in duration-200">
                <a href="/#about">About me</a>
              </li>
              <li className="mr-[16px] hover:-translate-y-2 hover:border-b ease-in duration-200">
                <a href="/#services">Services</a>
              </li>
              <li className="mr-[16px] hover:-translate-y-2 hover:border-b ease-in duration-200">
                <a href="/#reviews">Reviews</a>
              </li>
            </ul>
            <div className="ml-[60px] flex items-center z-10">
              <button type="button" onClick={handleOpenModal} className="mr-[16px] p-3 border rounded-[8px] font-bold hover:bg-mainWhite hover:text-mainBlue ease-in duration-200">
                Keep in Contact
              </button>
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
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </section>
  );
}

export default Header;
