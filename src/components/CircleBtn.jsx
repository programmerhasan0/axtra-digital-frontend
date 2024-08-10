import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@styles/CircleBtn.css";
import { useRef } from "react";

const CircleBtn = ({ elementClass, text, url }) => {
    const btnRef = useRef(null);

    return (
        <a href={url} className="circle-link">
            <div className={`circle-wrapper text-uppercase ${elementClass}`}>
                {text} {"  "}{" "}
                <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ rotate: "315deg", paddingLeft: "4px" }}
                    className="faArrow-icon"
                />
            </div>
        </a>
    );
};

export default CircleBtn;
