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
        spaceBetween: 30, // Загальний відступ між слайдами для великих екранів
        slidesPerView: 4,  // Кількість слайдів для великих екранів
        autoplay: {
          delay: 200,
        },
        speed: 4000,
        freeMode: false,
        breakpoints: {
          0: { // Breakpoint для мобільних пристроїв
            slidesPerView: 3,
            spaceBetween: 18, // Відстань між слайдами для мобільних пристроїв
          },
          768: { // Breakpoint для планшетів
            slidesPerView: 4,
            spaceBetween: 18,
          },
          1024: { // Breakpoint для великих екранів
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
      });
    }
  }, []);

  return (
    <section className="py-[48px] bg-[#F5F7FF]">
      <div className="container">
        <h2 className="mb-[26px] text-center text-mainBlue text-2xl">ACCREDITATIONS</h2>     
        <div className="swiper">
          <div className="swiper-wrapper flex items-center">
            <div className="swiper-slide"><Image src="/assosiation.png" alt='association for coaching' width={266} height={78}/></div>
            <div className="swiper-slide"><Image src="/pcm.png" alt='pcm' width={266} height={86}/></div>
            <div className="swiper-slide"><Image src="/mbti.png" alt='mbti' width={175} height={86}/></div>
            <div className="swiper-slide"><Image src="/aoec.png" alt='aoec' width={160} height={50}/></div>
            <div className="swiper-slide"><Image src="/hogan.png" alt='hogan' width={229} height={53}/></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SwiperAccreditations;
