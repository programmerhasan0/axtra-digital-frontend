import "@styles/CircleBtn.css";
import { useRef } from "react";

const CircleBtn = ({ elementClass, text }) => {
    const btnRef = useRef(null);

    return (
        <a href="#" className="circle-link">
            <div className={`circle-wrapper ${elementClass}`}>{text}</div>
        </a>
    );
};

export default CircleBtn;
