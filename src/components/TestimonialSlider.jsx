import { Autoplay, Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "@styles/TestimonialSlider.css";
import SliderBtn from "@components/SliderBtn";
import { useState } from "react";
const TestimonialSlider = ({ testimonialData }) => {
    const [sliderAction, setSliderAction] = useState({});

    return (
        <div className="testimonial-slider">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                loop={true}
                speed={1200}
                modules={[Navigation, Autoplay]}
                onSwiper={(swiper) => setSliderAction(swiper)}
                className="swiper-testimonial-slider"
            >
                {testimonialData.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <p className="testimonial-text">{testimonial.text}</p>
                        <h2 className="testimonial-client text-uppercase">
                            {testimonial.name}
                        </h2>
                        <h3 className="testimonial-client-role text-uppercase">
                            {testimonial.role}
                        </h3>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="testimonial-slider-btn">
                {" "}
                <SliderBtn slider={sliderAction} elementClass="left" />
                <SliderBtn
                    slider={sliderAction}
                    elementClass="right"
                    isNext={true}
                />
            </div>
        </div>
    );
};

export default TestimonialSlider;
