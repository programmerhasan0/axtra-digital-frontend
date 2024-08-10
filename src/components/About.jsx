import CircleBtn from "@components/CircleBtn";
import "@styles/About.css";
import "aos/dist/aos.css";

const About = () => {
    return (
        <>
            <section className="about-sec text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                            <img
                                src="/images/about.webp"
                                alt="About Image"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 about-description">
                            <h2 className="about-sec-sub-title text-uppercase">
                                who we are
                            </h2>
                            <div className="about-sec-title text-uppercase">
                                <h2>We are leading</h2>
                                <h2>Digital Marketing</h2>
                                <h2>Agency.</h2>
                                <p className="about-sec-text text-justify text-capitalize">
                                    We’re a team of strategic mdigital marketing
                                    working globally with largest brands, We
                                    believe that progress only happens when you
                                    refused to play things safe. We combine
                                    ideas and behaviors, and insights with
                                    design, technologi`cal data to produce brand
                                    experiences that customers love our
                                    services.
                                </p>
                                <CircleBtn
                                    elementClass="about-circle-btn"
                                    text="Explore us"
                                    url="#"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
