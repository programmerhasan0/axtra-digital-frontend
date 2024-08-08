import "@styles/CircleBtn.css";
import { useRef } from "react";

const CircleBtn = ({ elementClass, text, fontColor, rColor }) => {
    const changeColor = () => (btnRef.current.style.color = fontColor);
    const retriveColor = () => {
        btnRef.current.style.color = rColor;
    };

    const btnRef = useRef(null);

    return (
        <div
            className={`circle-wrapper ${elementClass}`}
            onMouseOver={changeColor}
            onMouseOut={retriveColor}
        >
            <a
                ref={btnRef}
                href="#"
                className="link color-white circle-btn-global align-middle"
            >
                {text}
            </a>
        </div>
    );
};

export default CircleBtn;
