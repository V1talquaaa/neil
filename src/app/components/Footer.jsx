import React from 'react'

function Footer() {
  return (
    <footer className='bg-mainBlue py-[24px] lg:py-[32px] lg:px-[386px]'>
      <div className='container'>
        <ul className='flex flex-wrap justify-center text-mainWhite text-base lg:gap-[24px]'>
          <li className='mr-[24px] hover:-translate-y-2 hover:border-b ease-in duration-200'><a href="/#about">About me</a></li>
          <li className='mr-[24px] hover:-translate-y-2 hover:border-b ease-in duration-200'><a href="/#services">Services</a></li>
          <li className='mr-[24px] hover:-translate-y-2 hover:border-b ease-in duration-200'><a href="/#reviews">Reviews</a></li>
          <li className='w-full lg:w-auto mt-[24px] mb-[12px] lg:mt-0 lg:mb-0 text-[#0E1267] lg:text-mainWhite text-center hover:-translate-y-2 hover:border-b ease-in duration-200'><a href="">Privacy Policy</a></li>
          <li className='w-full lg:w-auto lg:mt-0 lg:mb-0 text-[#0E1267] lg:text-mainWhite text-center lg:hover:-translate-y-2 hover:border-b ease-in duration-200'><a href="">Cookie Policy</a></li>
        </ul>
        <p className='mt-[24px] text-[#0E1267] text-center text-base'>2024 Neil Meyrick</p>
      </div>
    </footer>
  )
}

export default Footer
