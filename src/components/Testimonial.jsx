import TestimonialSlider from "@components/TestimonialSlider";
import TestimonialImages from "@components/TestimonialImages";
import "@styles/Testimonial.css";

const Testimonial = () => {
    const testimonialContent = [
        {
            name: "Muhammad H. Hasan",
            role: "Managing Director",
            text: "When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!",
        },
        {
            name: "Rifat H. Emon",
            role: "Chief Executive officer",
            text: "When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!",
        },
    ];
    return (
        <section className="testimonial position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12">
                        <TestimonialSlider
                            testimonialData={testimonialContent}
                        />
                    </div>
                </div>
                <div>
                    <TestimonialImages />
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
