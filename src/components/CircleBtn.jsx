import "@styles/CircleBtn.css";
import { useRef } from "react";

const CircleBtn = ({ elementClass, text, url }) => {
    const btnRef = useRef(null);

    return (
        <a href={url} className="circle-link">
            <div className={`circle-wrapper text-uppercase ${elementClass}`}>
                {text}
            </div>
        </a>
    );
};

export default CircleBtn;
