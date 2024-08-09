import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "@styles/FeaturedSlider.css";
import { useState } from "react";

const FeaturedSlider = ({ sliderData }) => {
    return (
        <div className="featured-slider">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                loop={true}
                autoplay={true}
                speed={1200}
                modules={[Navigation, Pagination, Autoplay]}
                pagination={{ clickable: true }}
            >
                <div className="slider-add-wrapper">
                    {sliderData.map((sliderSingle, index) => (
                        <SwiperSlide key={index}>
                            <div className="featured-slider-content-wrapper d-flex">
                                <h3 className="featured-slider-title text-uppercase">
                                    {sliderSingle.title
                                        .split(" ")
                                        .map((titleWord, index) => (
                                            <div key={index}>{titleWord}</div>
                                        ))}
                                </h3>
                                <img
                                    src={sliderSingle.img}
                                    className=""
                                    alt=""
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </div>
    );
};

export default FeaturedSlider;
