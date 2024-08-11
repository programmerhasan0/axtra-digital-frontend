import Navbar from "@components/Navbar";
import Hero from "@components/Hero";
import Brands from "@components/Brands";
import About from "@components/About";
import Services from "@components/Services";
import FeaturedWork from "@components/FeaturedWork";
import Testimonial from "@components/Testimonial";
import WhyChooseUs from "@components/WhyChooseUs";
import Pricing from "@components/Pricing";
import Journal from "@components/Journal";
import Footer from "@components/Footer";

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
            <Journal />
            <Footer />
        </>
    );
};

export default Home;
