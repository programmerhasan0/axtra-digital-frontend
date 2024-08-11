import React, { useLayoutEffect, useRef } from "react";
import "@styles/WhyChooseUs.css";
import CircleBtn from "@components/CircleBtn";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
    const whyChooseUsRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: whyChooseUsRef.current,
                    pin: true,
                    scrub: 3,
                },
                markers: true,
            });

            timeline.to(".choosing-content", {
                xPercent: -100 * 3,
                marker: true,
            });
        }, whyChooseUsRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="whyChooseUs" ref={whyChooseUsRef}>
            <div className="whyChooseUs-title choosing-content">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12 col-xl-6 col-lg-6 col-md-6">
                            <div className="choose-title-wrapper">
                                <div className="choose-title text-uppercase text-center">
                                    <div>why</div>
                                    <div>choose us</div>
                                </div>
                            </div>{" "}
                        </div>
                    </div>
                </div>
            </div>
            <div className="whyChooseUs-skills choosing-content">
                {" "}
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                            <div className="skills-wrapper">
                                <h2 className="whyChooseUs-skills-sub-title text-uppercase">
                                    <div>why</div>
                                    <div>choose us</div>
                                </h2>
                                <div className="whyChooseUs-skills-title text-uppercase">
                                    <h2>Keword,Research</h2>
                                    <h2>Strategy, Survey,</h2>
                                    <h2>& Analytics</h2>
                                </div>
                                <p className="whyChooseUs-skills-text text-justify text-capitalize">
                                    Attention, we take out our round glasses and
                                    our sweater with elbow patches to go back to
                                    the origins of the user experience: the
                                    first mention of the user and its importance
                                    was born in the
                                </p>
                                <div className="btnGroup">
                                    <button>Google</button>
                                    <button>Pinterest</button>
                                    <button>instagram</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                            <div className="skills-item">
                                <CircleBtn
                                    text="60%"
                                    elementClass="services-skills-circle-btn"
                                />
                                <div className="skill-info">
                                    <div className="services-skills-title text-uppercase">
                                        Strategy
                                    </div>
                                    <div className="services-skills-text">
                                        Your marketing strategy optimizing
                                        performances doesn’t have to be a
                                        guessing game
                                    </div>
                                </div>
                            </div>
                            <div className="skills-item">
                                <CircleBtn
                                    text="95%"
                                    elementClass="services-skills-circle-btn"
                                />
                                <div className="skill-info">
                                    <div className="services-skills-title text-uppercase">
                                        Audience
                                    </div>
                                    <div className="services-skills-text">
                                        Your marketing strategy optimizing
                                        performances doesn’t have to be a
                                        guessing game
                                    </div>
                                </div>
                            </div>
                            <div className="skills-item">
                                <CircleBtn
                                    text="70%"
                                    elementClass="services-skills-circle-btn"
                                />
                                <div className="skill-info">
                                    <div className="services-skills-title text-uppercase">
                                        keyword
                                    </div>
                                    <div className="services-skills-text">
                                        Your marketing strategy optimizing
                                        performances doesn’t have to be a
                                        guessing game
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="whyChooseUs-success choosing-content">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                            <div className="success-list">
                                <div className="success-list-single text-capitalize">
                                    <span>25k</span>
                                    <div>
                                        project <br /> completed
                                    </div>
                                </div>
                                <div className="success-list-single text-capitalize">
                                    <span>8k</span>
                                    <div>
                                        project <br /> completed
                                    </div>
                                </div>
                                <div className="success-list-single text-capitalize">
                                    <span>15k</span>
                                    <div>
                                        project <br /> completed
                                    </div>
                                </div>
                                <div className="success-list-single text-capitalize">
                                    <span>98</span>
                                    <div>
                                        project <br /> completed
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                            <img
                                src="/images/counter-3.webp"
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="whyChooseUs-offer choosing-content">
                <div className="offer-wrapper">
                    <h1 className="offer-subtitle">
                        Have you project in mind?
                    </h1>
                    <h2 className="offer-title">
                        <div>Let's make something</div>
                        <div>great together!</div>
                    </h2>
                    <CircleBtn
                        elementClass="offer-circle-btn"
                        text="Contact With Us"
                        url="#"
                    />
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
