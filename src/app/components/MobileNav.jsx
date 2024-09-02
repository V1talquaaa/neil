"use client";
import React, { useState } from "react";
import Image from "next/image";
import LinkedinIcon from "../svg/LinkedinIcon";
import Modal from "../ui/Modal";

export const MobileNav = ({ closeMenuBtn }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  return (
    <nav className="fixed py-[40px] top-0 right-0 bg-[#071468] w-[80%] h-screen z-50">
      <div className="container">
        <div className="container flex justify-end">
          <button type="button" onClick={closeMenuBtn} className="inline-block">
            <Image src="/close.svg" width={24} height={24} alt="close" />
          </button>
        </div>
        <ul className="mt-[48px] lg:mt-0 flex flex-col gap-[32px] lg:flex-row items-center lg:gap-[16px] text-lg text-mainWhite">
          <li>
            <a href="/#about " onClick={closeMenuBtn}>
              About me
            </a>
          </li>
          <li>
            <a href="/#services" onClick={closeMenuBtn}>
              Services
            </a>
          </li>
          <li>
            <a href="/#reviews" onClick={closeMenuBtn}>
              Reviews
            </a>
          </li>
        </ul>
        <div className="mt-[48px] flex flex-col-reverse items-center z-10">
          <button
            type="button"
            onClick={handleOpenModal}
            className="mt-[16px] p-3 border rounded-[8px] font-bold hover:bg-mainWhite text-mainWhite hover:text-mainBlue ease-in duration-200"
          >
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
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </nav>
  );
};
