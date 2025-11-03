import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import {FaStar} from 'react-icons/fa6'
import {Avatar} from 'flowbite-react'
import proPic from '../assets/profile.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl  font-bold text-center mb-10 leading-snug'>Our Customers</h2>
        <div>
            <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border w-1/3'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                </div>
                {/* text */}
                <div className='mt-5'>
                    <p className='mb-5'>
                        Når du ikke klarer å slutte å scrolle på sosiale medier er det databaserte algoritmer du kan takke for minuttene du aldri får tilbake. Sommeren 2022 varslet en Google-ingeniør om et dataprogram som hadde blitt bevisst, og få måneder senere sendte norske lærere bekymringsmelding til Stortinget på grunn av en intelligent chatbot.
                    </p>
                    <Avatar
                        alt='avatar of jese'
                        img={proPic}
                        rounded
                        className='w-10 mb-4 mt-3'
                    />
                    <h5 className='text-lg font-medium'>Inga Strümke</h5>
                    <p className='text-base'>CEO, ABC company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border w-1/3'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                </div>
                {/* text */}
                <div className='mt-5'>
                    <p className='mb-5'>
                        Når du ikke klarer å slutte å scrolle på sosiale medier er det databaserte algoritmer du kan takke for minuttene du aldri får tilbake. Sommeren 2022 varslet en Google-ingeniør om et dataprogram som hadde blitt bevisst, og få måneder senere sendte norske lærere bekymringsmelding til Stortinget på grunn av en intelligent chatbot.
                    </p>
                    <Avatar
                        alt='avatar of jese'
                        img={proPic}
                        rounded
                        className='w-10 mb-4 mt-3'
                    />
                    <h5 className='text-lg font-medium'>Inga Strümke</h5>
                    <p className='text-base'>CEO, ABC company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border w-1/3'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                </div>
                {/* text */}
                <div className='mt-5'>
                    <p className='mb-5'>
                        Når du ikke klarer å slutte å scrolle på sosiale medier er det databaserte algoritmer du kan takke for minuttene du aldri får tilbake. Sommeren 2022 varslet en Google-ingeniør om et dataprogram som hadde blitt bevisst, og få måneder senere sendte norske lærere bekymringsmelding til Stortinget på grunn av en intelligent chatbot.
                    </p>
                    <Avatar
                        alt='avatar of jese'
                        img={proPic}
                        rounded
                        className='w-10 mb-4 mt-3'
                    />
                    <h5 className='text-lg font-medium'>Inga Strümke</h5>
                    <p className='text-base'>CEO, ABC company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border w-1/3'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                </div>
                {/* text */}
                <div className='mt-5'>
                    <p className='mb-5'>
                        Når du ikke klarer å slutte å scrolle på sosiale medier er det databaserte algoritmer du kan takke for minuttene du aldri får tilbake. Sommeren 2022 varslet en Google-ingeniør om et dataprogram som hadde blitt bevisst, og få måneder senere sendte norske lærere bekymringsmelding til Stortinget på grunn av en intelligent chatbot.
                    </p>
                    <Avatar
                        alt='avatar of jese'
                        img={proPic}
                        rounded
                        className='w-10 mb-4 mt-3'
                    />
                    <h5 className='text-lg font-medium'>Inga Strümke</h5>
                    <p className='text-base'>CEO, ABC company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border w-1/3'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                </div>
                {/* text */}
                <div className='mt-5'>
                    <p className='mb-5'>
                        Når du ikke klarer å slutte å scrolle på sosiale medier er det databaserte algoritmer du kan takke for minuttene du aldri får tilbake. Sommeren 2022 varslet en Google-ingeniør om et dataprogram som hadde blitt bevisst, og få måneder senere sendte norske lærere bekymringsmelding til Stortinget på grunn av en intelligent chatbot.
                    </p>
                    <Avatar
                        alt='avatar of jese'
                        img={proPic}
                        rounded
                        className='w-10 mb-4 mt-3'
                    />
                    <h5 className='text-lg font-medium'>Inga Strümke</h5>
                    <p className='text-base'>CEO, ABC company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border w-1/3'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                </div>
                {/* text */}
                <div className='mt-5'>
                    <p className='mb-5'>
                        Når du ikke klarer å slutte å scrolle på sosiale medier er det databaserte algoritmer du kan takke for minuttene du aldri får tilbake. Sommeren 2022 varslet en Google-ingeniør om et dataprogram som hadde blitt bevisst, og få måneder senere sendte norske lærere bekymringsmelding til Stortinget på grunn av en intelligent chatbot.
                    </p>
                    <Avatar
                        alt='avatar of jese'
                        img={proPic}
                        rounded
                        className='w-10 mb-4 mt-3'
                    />
                    <h5 className='text-lg font-medium'>Inga Strümke</h5>
                    <p className='text-base'>CEO, ABC company</p>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}

export default Review