import Navbar from "@components/Navbar";
import Hero from "@components/Hero";
import Brands from "@components/Brands";
import About from "@components/About";
import Services from "@components/Services";
import FeaturedWork from "@components/FeaturedWork";
import Testimonial from "@components/Testimonial";
import WhyChooseUs from "@components/WhyChooseUs";
import Pricing from "@components/Pricing";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Brands />
            <About />
            <Services />
            <FeaturedWork />
            <Testimonial />
            <WhyChooseUs />
            <Pricing />
        </>
    );
};

export default Home;
