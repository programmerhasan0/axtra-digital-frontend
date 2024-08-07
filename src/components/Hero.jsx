import { useState } from "react";
import "@styles/Hero.css";

const Hero = () => {
    return (
        <>
            <section>
                <div className="hero-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-12">
                                <div className="section-title-wrapper text-uppercase position-relative">
                                    <h2 className="sec-sub-title">Digital</h2>
                                    <h3 className="sec-title title-left">
                                        <span>M</span>
                                        <span>A</span>
                                        <span>R</span>
                                        <span>K</span>
                                    </h3>
                                    <h3 className="sec-title title-right position-absolute">
                                        <span>E</span>
                                        <span>T</span>
                                        <span>I</span>
                                        <span>N</span>
                                        <span>G</span>
                                    </h3>
                                    <p className="hero-text text-capitalize">
                                        Static and dynamic secure code review
                                        can prevent a day before your product is
                                        even released. We can integrate with
                                        your dev environment
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="hero-img">
                <img src="/images/hero_background.webp" alt="" />
            </section>
        </>
    );
};

export default Hero;
