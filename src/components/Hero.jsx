import "@styles/Hero.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useLayoutEffect } from "react";
import { useRef } from "react";

const Hero = () => {
    const heroRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const t1 = gsap.timeline();

            t1.from([".marketing", "#hero-text"], {
                opacity: 0,
                xPercent: 10,
                duration: 1,
                stagger: 0.1,
                reversed: true,
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);
    return (
        <>
            <section>
                <div className="hero-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-12">
                                <div
                                    className="section-title-wrapper text-uppercase position-relative"
                                    ref={heroRef}
                                >
                                    <h2 className="sec-sub-title">Digital</h2>
                                    <h3 className="sec-title title-left">
                                        <span className="marketing">M</span>
                                        <span className="marketing">A</span>
                                        <span className="marketing">R</span>
                                        <span className="marketing">K</span>
                                    </h3>
                                    <h3 className="sec-title title-right position-absolute">
                                        <span className="marketing">E</span>
                                        <span className="marketing">T</span>
                                        <span className="marketing">I</span>
                                        <span className="marketing">N</span>
                                        <span className="marketing">G</span>
                                    </h3>
                                    <p
                                        className="hero-text text-capitalize"
                                        id="hero-text"
                                    >
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
            <section className="hero-img" style={{ paddingBottom: "50px" }}>
                <img
                    src="/images/hero_background.webp"
                    className="img-fluid"
                    alt=""
                />
            </section>
        </>
    );
};

export default Hero;
