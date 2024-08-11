import React from "react";
import Accordion from "@components/Accordion";
import CircleBtn from "@components/CircleBtn";
import "@styles/Pricing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Pricing = () => {
    const accordionData = [
        {
            question: "Design should enrich our day",
            answer: "Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people",
        },
        {
            question: "Bring their individual experience and creative",
            answer: "Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people",
        },
        {
            question: "Human entred design to challaenges",
            answer: "Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people",
        },
        {
            question: "Design should enrich our day",
            answer: "Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people",
        },
        {
            question: "Developing core web applications",
            answer: "Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people",
        },
    ];
    return (
        <section className="pricing-section">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                        <div className="pricing-subtitle text-uppercase">
                            pricing table
                        </div>
                        <h2 className="text-uppercase pricing-title">
                            be kind to your mind
                        </h2>
                        <Accordion accordionData={accordionData} />
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 pricing-card">
                        <div className="pricing-card-black d-flex">
                            <div className="price-icon">
                                <div className="pricing-card-checkBox d-flex align-items-center justify-content-center checked">
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className="fontAwesomeIcon"
                                    />
                                </div>
                            </div>
                            <div className="price-info">
                                <button className="price-type text-uppercase">
                                    yearly
                                </button>
                                <h2 className="text-uppercase">14 days free</h2>
                                <p>
                                    Subscription fee is $129.99 USD and
                                    automatically renews each year.
                                </p>
                            </div>
                            <div className="price-amount">
                                <span>199</span>.99
                            </div>
                        </div>
                        <div className="pricing-card-white">
                            <div className="price-icon">
                                <div className="pricing-card-checkBox d-flex align-items-center justify-content-center">
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className="fontAwesomeIcon"
                                    />
                                </div>
                            </div>
                            <div className="price-info">
                                <button className="price-type text-uppercase">
                                    monthly
                                </button>
                                <h2 className="text-uppercase">7 days free</h2>
                                <p>
                                    Subscription fee is $12.99 USD and
                                    automatically renews each year.
                                </p>
                            </div>
                            <div className="price-amount">
                                <span>12</span>.99
                            </div>
                        </div>
                        <CircleBtn
                            text="Try It Free Now"
                            elementClass="pricing-circle-btn"
                            url="#"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
