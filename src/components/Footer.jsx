import React, { useEffect } from "react";
import "@styles/Footer.css";
import { useAnimate } from "framer-motion";

const Footer = () => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(
            "span",
            { y: ["100px", "-100px"] },
            {
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
            }
        );
    }, []);

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-top-wrapper">
                    <div className="footer-logo-section">
                        <img src="/images/logo-white.webp" alt="" />
                        <p>
                            When do they work well, and when do they on us and
                            finally, when do we actually need how can we avoid
                            them.
                        </p>
                    </div>
                    <div className="footer-social-section">
                        <ul>
                            <li className="text-uppercase">
                                <a href="#">facebook</a>
                            </li>
                            <li className="text-uppercase">
                                <a href="#">twitter</a>
                            </li>
                            <li className="text-uppercase">
                                <a href="#">linkedIn</a>
                            </li>
                            <li className="text-uppercase">
                                <a href="#">instagram</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-contact-section">
                        <a className="text-uppercase" ref={scope}>
                            {"let's talk".split("").map((char, index) => (
                                <span key={index} className="d-inline-block">
                                    {char}
                                </span>
                            ))}
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="conainer-fluid">
                    <div className="row">
                        <div class="col-xxl-4 col-xl-4 col-lg-4">
                            <div class="footer-copyright">
                                <p>
                                    &copy; 2022-2025 | All rights reserved by{" "}
                                    <a href="#">Md H. Hasan </a>
                                </p>
                            </div>
                        </div>
                        <div class="col-xxl-8 col-xl-8 col-lg-8">
                            <div className="footer-menu-wrapper d-flex justify-content-end align-items-center">
                                <ul className="footer-menu">
                                    <li className="footer-item text-uppercase">
                                        about us
                                    </li>
                                    <li className="footer-item text-uppercase">
                                        contact
                                    </li>
                                    <li className="footer-item text-uppercase">
                                        career
                                    </li>
                                    <li className="footer-item text-uppercase">
                                        faqs
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
