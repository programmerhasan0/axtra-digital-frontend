import React from "react";
import "@styles/Journal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Journal = () => {
    return (
        <>
            <section className="journal">
                <div className="container journal-main">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="journal-wrapper pt-130">
                                <div className="journal-sub-wrapper">
                                    <h2 className="journal-sub-title text-uppercase">
                                        recent blog
                                    </h2>
                                    <h3 className="text-uppercase journal-title">
                                        <div>Read Updated </div>
                                        <div>Journal</div>
                                    </h3>
                                </div>
                                <p className="journal-text">
                                    Read our blog and try to see everything from
                                    every perspective. Our passion lies in
                                    making everything accessible and aesthetic
                                    for everyone.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="journal-list">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 journal-card">
                            <article className="journal-item">
                                <div className="journal-img-wrapper">
                                    <a href="#">
                                        <div className="img-box">
                                            <img
                                                src="/images/journals/1.webp"
                                                alt=""
                                            />
                                        </div>
                                    </a>
                                </div>
                                <div className="journal-content">
                                    <h4 className="journal-meta">
                                        <a href="/category/ui-design">
                                            UI Design . 02 May 2019
                                        </a>
                                    </h4>
                                    <h5>
                                        <a
                                            href="#"
                                            className="journal-article-title"
                                        >
                                            {" "}
                                            How to bring fold to your startup
                                            company axtra
                                        </a>
                                    </h5>
                                    <a href="#" className="journal-btn">
                                        Read More{" "}
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </a>
                                </div>
                            </article>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 journal-card">
                            <article className="journal-item">
                                <div className="journal-img-wrapper">
                                    <a href="#">
                                        <div className="img-box">
                                            <img
                                                src="/images/journals/2.webp"
                                                alt=""
                                            />
                                        </div>
                                    </a>
                                </div>
                                <div className="journal-content">
                                    <h4 className="journal-meta">
                                        <a href="/category/ui-design">
                                            UI Design . 02 May 2019
                                        </a>
                                    </h4>
                                    <h5>
                                        <a
                                            href="#"
                                            className="journal-article-title"
                                        >
                                            {" "}
                                            How to bring fold to your startup
                                            company axtra
                                        </a>
                                    </h5>
                                    <a href="#" className="journal-btn">
                                        Read More{" "}
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </a>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Journal;
