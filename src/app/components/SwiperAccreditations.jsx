'use client'
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';

function SwiperAccreditations() {
    useEffect(() => {
        if (typeof document !== 'undefined') {
          Swiper.use([Navigation, Pagination, Autoplay]);
          const swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            loop: true,
            spaceBetween: '30px',
            slidesPerView: 4,
            autoplay: {
                delay: 200,
            },
            speed: 4000,
            freeMode: false,
    
          });
        }
      }, []);
  return (
    <section className="py-[48px] bg-[#F5F7FF]">
    <div className="container">
      <h2 className="mb-[26px] text-center text-mainBlue text-base">ACCREDITATIONS</h2>     
      <div className="swiper">
      <div className="swiper-wrapper flex items-center">
        <div className="swiper-slide"><Image src="/assosiation.png" alt='association for coaching' width={266} height={78}/></div>
        <div className="swiper-slide"><Image src="/pcm.png" alt='pcm' width={266} height={86}/></div>
        <div className="swiper-slide"><Image src="/mbti.png" alt='mbti' width={175} height={86}/></div>
        <div className="swiper-slide"><Image src="/aoec.png" alt='aoec' width={160} height={50}/></div>
        <div className="swiper-slide"><Image src="/hogan.png" alt='hpgan' width={229} height={53}/></div>
      </div>
    </div>
    </div>
  </section>
  )
}

export default SwiperAccreditations