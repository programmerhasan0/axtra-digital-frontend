import BrandItem from "@components/BrandItem";
import "@styles/Brands.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import { useRef } from "react";

//Registering ScrollTrigger Plugin
gsap.registerPlugin(ScrollTrigger);

const Brands = () => {
    const imagesUrl = [
        "/images/brands/1.webp",
        "/images/brands/2.webp",
        "/images/brands/3.webp",
        "/images/brands/4.webp",
        "/images/brands/5.webp",
        "/images/brands/6.webp",
    ];

    const brandsRef = useRef(null);
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const t1 = gsap.timeline({
                scrollTrigger: {
                    trigger: ["#brand-h2", ".brand-item"],
                    toggleActions: "play none none",
                },
            });

            t1.from(["#brand-h2", ".brand-item"], {
                y: 100,
                opacity: 0,
                stagger: 0.3,
            });
        }, brandsRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="container brands" ref={brandsRef}>
            <h2 className="text-uppercase text-center" id="brand-h2">
                we worked with global largest brands
            </h2>
            <div className="brandImages row row-cols-2 row-cols-lg-6 row-cols-md-3 text-center">
                {imagesUrl.map((url, index) => (
                    <BrandItem url={url} key={index} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Brands;
