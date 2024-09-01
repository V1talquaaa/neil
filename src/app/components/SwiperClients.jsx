'use client'
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';

function SwiperClients() {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      Swiper.use([Navigation, Pagination, Autoplay]);
      const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 10, // Загальний відступ між слайдами
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
            spaceBetween: 10,
          },
        },
      });
    }
  }, []);

  return (
    <section className="py-[48px] bg-[#F5F7FF]">
      <div className="container">
        <h2 className="mb-[26px] text-center text-mainBlue text-2xl">CLIENTS</h2>     
        <div className="swiper">
          <div className="swiper-wrapper flex items-center">
            <div className="swiper-slide"><Image src="/hospice.png" alt='hospice' width={143} height={64}/></div>
            <div className="swiper-slide"><Image src="/dell.png" alt='hospice' width={111} height={118}/></div>
            <div className="swiper-slide"><Image src="/ferring.png" alt='hospice' width={140} height={64}/></div>
            <div className="swiper-slide"><Image src="/sketch.png" alt='hospice' width={139} height={32}/></div>
            <div className="swiper-slide"><Image src="/suse.png" alt='hospice' width={85} height={72}/></div>
            <div className="swiper-slide"><Image src="/merck.png" alt='hospice' width={144} height={40}/></div>
            <div className="swiper-slide"><Image src="/sdl.png" alt='hospice' width={104} height={48}/></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SwiperClients;
