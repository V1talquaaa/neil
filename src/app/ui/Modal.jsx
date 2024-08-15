import React from "react";
import CloseBtnIcon from "../svg/CloseBtnIcon";

function Modal({setOpenModal}) {

const closeModal = () => {
  setOpenModal(false);

}

  return (
    <div className="h-lvh w-lvw bg-gray-800/45 fixed top-0 left-0 z-20 flex items-center justify-center">
      <div className="w-[80vw] max-w-[780px] h-[90vh] max-h-[890px] pt-[48px] pb-[89px] px-[67px] rounded-[8px] bg-white relative">
      <button type="button" onClick={() => closeModal()} className="absolute top-[24px] right-[24px]">
      <CloseBtnIcon />
      </button>
        <div className="text-center px-[45px]">
          <h2 className="mb-[12px] text-mainBlack text-4xl font-bold">GET IN TOUCH</h2>
          <p className="text-base text-mainBlack text-center">
            If you have any questions about my services, would like to discuss
            working together or a general enquiry please get in touch using the
            details below or by filling in the form
          </p>
          <ul className="mt-[24px] text-mainBlue">
            <li>
              <a href="mailto:neil.meyrick@gmail.com">
                Email: <span className="underline">neil.meyrick@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="tel:+4407802595216">
                Tel: <span className="underline">+44 0 7802 595216</span>
              </a>
            </li>
          </ul>
        </div>
        <form action="" className="mt-[32px] text-mainBlack">
            <label htmlFor="" className="">Email <span className="text-red-600">*</span>
            <input type="email" id="email" name="email" required className="w-[100%]  mt-[12px] mb-[36px] p-2 bg-[#DCDCDC] rounded-[4px]"/>
            </label>
            <label htmlFor="">Phone <span className="text-red-600">*</span>
            <input type="tel" id="tel" name="tel" required className="w-[100%]  p-2 mt-[12px] mb-[36px] bg-[#DCDCDC] rounded-[4px]"/>
            </label>
            <label htmlFor="">Message <span className="text-red-600">*</span>
            <textarea name="text" id="text" rows={7} cols={20} required className="w-[100%] p-2 mt-[12px] bg-[#DCDCDC] rounded-[4px] resize-none"></textarea>
            </label>
            <button type="submit" className="mt-[48px] px-[45px] py-[15px] border rounded-[8px] font-bold text-mainWhite bg-mainBlue hover:bg-blue-800 ease-in duration-200">
                Submit
              </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
