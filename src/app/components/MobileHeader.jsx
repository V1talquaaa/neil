'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { MobileNav } from './MobileNav';

export const HeaderMobile = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const menuBtnClick = () => {
    setMenuOpen(!menuOpen);
  }

  return (
        <header className='w-full py-[24px] bg-mainBlue lg:hidden'>
            <div className="container">
                <div className='flex justify-between items-center'>
                <Link href="/" className='text-white text-xl font-semibold'>
                Neil Meyrick 
                 </Link>
                <button type='button' onClick={menuBtnClick}>
                    <Image src="/menu.svg" width={24} height={24} alt='menu'/>
                </button>

                </div>
            </div>
            {menuOpen && <MobileNav closeMenuBtn={menuBtnClick}/>}
        </header>
  )
}