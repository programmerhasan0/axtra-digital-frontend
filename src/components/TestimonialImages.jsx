import React from "react";
import "@styles/TestimonialImages.css";
import SimpleParallax from "simple-parallax-js";

const TestimonialImages = () => {
    const testimonialImages = [
        "/images/testimonial/1.webp",
        "/images/testimonial/2.webp",
        "/images/testimonial/3.webp",
        "/images/testimonial/4.webp",
        "/images/testimonial/5.webp",
        "/images/testimonial/6.webp",
    ];
    return (
        <div className="testimonial-images-wrapper">
            {testimonialImages.map((testimonialImage, index) => (
                <img
                    src={testimonialImage}
                    alt={`testimonial image ${index}`}
                    key={index}
                />
            ))}
        </div>
    );
};

export default TestimonialImages;
