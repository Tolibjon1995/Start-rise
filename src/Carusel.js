import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';

import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/pagination/pagination.min.css';

import './sass/style.scss';

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

export default function Carusel(props) {
 
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        initialSlide={1}
        coverflowEffect={{
          rotate: 40,
          stretch: -100,
          
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        className='mySwiper'
      >
        <SwiperSlide>
          <div data-aos="zoom-in-down" className='card'>
            <div className='card-body'>
              <div className='cirkl vebsit'>
              <img src="/images/flag/Artboard 2.svg" alt="" />
              </div>
              <h5>{props.hed.web}</h5>
              <p>
              {props.hed.webp}
              </p>
              <Link to='/ishlar' className='btn btn1 third  m-auto'>
                {props.hed.battn}
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div data-aos="zoom-in-down" className='card'>
            <div className='card-body'>
              <div className='cirkl vebsit'>
              <img src="/images/flag/Artboard 2 copy 2.svg" alt="" />
              </div>
              <h5 className='non'>{props.hed.web2}</h5>
              <p>
              {props.hed.web2p}
              </p>
              <Link to='/ishlar' className='btn btn1 third  m-auto'>
              {props.hed.battn}
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div data-aos="zoom-in-down" className='card'>
            <div className='card-body'>
              <div className='cirkl vebsit'>
              <img src="/images/flag/Artboard 2 copy.svg" alt="" />
              </div>
              <h5>{props.hed.web3}</h5>
              <p>
              {props.hed.web3p}
              </p>
              <Link to='/ishlar2' className='btn btn1 third  m-auto'>
              {props.hed.battn}
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
