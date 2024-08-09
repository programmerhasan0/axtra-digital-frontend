import FeaturedSlider from "@components/FeaturedSlider";
import "@styles/FeaturedWork.css";

const FeaturedWork = () => {
    const featuredSliderData = [
        {
            title: "benjon website 2012",
            img: "/images/featured/1.webp",
        },
        {
            title: "benjon website 2013",
            img: "/images/featured/2.webp",
        },
        {
            title: "benjon website 2014",
            img: "/images/featured/3.webp",
        },
        {
            title: "benjon website 2015",
            img: "/images/featured/4.webp",
        },
    ];

    return (
        <section className="featured-work">
            <div className="container featured-work-wrapper">
                <h2 className="featured-work-sec-sub-title text-uppercase">
                    <div>featured</div>
                    <div>work</div>
                </h2>

                <div className="row">
                    <div className="col-xxl-12">
                        <FeaturedSlider sliderData={featuredSliderData} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedWork;
