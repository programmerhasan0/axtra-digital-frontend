import React from "react";
import "@styles/Accordion.css";

const Accordion = ({ accordionData }) => {
    return (
        <div>
            <div className="accordion pricing-accordion" id="accordionExample">
                {accordionData.map((data, index) => (
                    <div className="accordion-item" key={index}>
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button bg-transparent collapsed"
                                type="button"
                                data-bs-toggle={`collapse`}
                                data-bs-target={`#collapse${index}`}
                                aria-expanded="false"
                                aria-controls={`collapse${index}`}
                            >
                                {data.question}
                            </button>
                        </h2>
                        <div
                            id={`collapse${index}`}
                            className={`accordion-collapse collapse`}
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">{data.answer}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accordion;
