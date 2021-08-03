
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import videos1 from '../video/task_v1.mp4'
import videos2 from '../video/task_v1.mp4'
import videos3 from '../video/task_v1.mp4'

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "../sass/Car.css";


// import Swiper core and required modules
import SwiperCore, {
    Pagination, Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);







export default function VideoCarus() {
    const [vid] = useState([
        { id: 1, values: videos1 },
        { id: 2, values: videos2 },
        { id: 3, values: videos3 },
    ])
    

    function vidplay() {
        const playBtn = document.querySelectorAll('#player');
        const slideVideo = document.querySelectorAll('#videoPlayer');

        for (let i = 0; i < playBtn.length; i++) {
            playBtn[i].addEventListener('click', () => {
                slideVideo[i].play();
            })
        }




        for (let i = 0; i < slideVideo.length; i++) {
            slideVideo[i].addEventListener('play', () => {
                playBtn[i].classList.remove('assPlayer')
                playBtn[i].classList.add('remove-btn')
            })
            slideVideo[i].addEventListener('pause', () => {
                playBtn[i].classList.add('assPlayer')
                playBtn[i].classList.remove('remove-btn')
            })
        }
    }

    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerGroup={1}
                loop={true}
                centeredSlides={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    "clickable": true
                }}
                navigation={true}
                className="mySwiper"
                breakpoints={{
                    576: {
                        slidesPerView: 1
                    },
                    776: {
                        slidesPerView: 1.8
                    }
                }}
            >
                
                {
                    vid.map((item) => {
                        return (
                            <SwiperSlide>
                                <video
                                    src={item.values}
                                    controls
                                    id='videoPlayer'
                                    type="video/mp4"
                                    onClick={vidplay}
                                >

                                </video>
                                <div className="play" >
                                    <div className="playbtn" id='player' onClick={vidplay}>
                                        <i className="fa fa-play"></i>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }


            </Swiper>
        </>
    )
}