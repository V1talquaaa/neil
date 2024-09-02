import React from "react";
import CloseBtnIcon from "../svg/CloseBtnIcon";

function Modal({ setOpenModal }) {
  const closeModal = () => {
    setOpenModal(false);
  };

  const handleBackdropClick = (event) => {
    // Якщо клік був на бекдропі, закриваємо модалку
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="h-lvh w-lvw bg-gray-800/45 fixed top-0 left-0 z-20 flex items-center justify-center px-[15px] py-[45px] lg:px-[450px] "
    >
      <div className="pt-[24px] pb-[24px] px-[48px] rounded-[8px] bg-white relative">
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-[24px] right-[24px]"
        >
          <CloseBtnIcon />
        </button>
        <div className="text-center px-[20px] flex-grow-0">
          <h2 className="mb-[12px] text-mainBlack text-4xl font-bold">
            GET IN TOUCH
          </h2>
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
        <form
          action=""
          className="mt-[16px] text-mainBlack flex-grow flex flex-col"
        >
          <label htmlFor="tel" className="">
            Name<span className="text-red-600">*</span>
            <input
              type="name"
              id="name"
              name="name"
              required
              className="w-full p-2 mt-[8px] mb-[16px] bg-[#DCDCDC] rounded-[4px] flex-grow"
            />
          </label>
          <label htmlFor="email" className="">
            Email<span className="text-red-600">*</span>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full mt-[8px] mb-[16px] p-2 bg-[#DCDCDC] rounded-[4px] flex-grow"
            />
          </label>
          <label htmlFor="text" className="">
            Message<span className="text-red-600">*</span>
            <textarea
              name="text"
              id="text"
              rows={4}
              required
              className="w-full p-2 mt-[8px] bg-[#DCDCDC] rounded-[4px] resize-none flex-grow"
            ></textarea>
          </label>
          <button
            type="submit"
            className="mt-[25px] px-[40px] py-[12px] border rounded-[8px] font-bold text-mainWhite bg-mainBlue hover:bg-blue-800 ease-in duration-200 self-start"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
