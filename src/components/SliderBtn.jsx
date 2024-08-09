import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@styles/SliderBtn.css";

const SliderBtn = ({ slider, isNext, elementClass }) => {
    const changeSlider = () =>
        isNext ? slider.slideNext() : slider.slidePrev();
    return (
        <div className={`slider-btn ${elementClass}`} onClick={changeSlider}>
            <FontAwesomeIcon icon={isNext ? faArrowRight : faArrowLeft} />
        </div>
    );
};

export default SliderBtn;
