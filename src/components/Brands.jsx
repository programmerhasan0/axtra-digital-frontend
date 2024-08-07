import BrandItem from "@components/BrandItem";

const Brands = () => {
    const imagesUrl = [
        "/images/brands/1.webp",
        "/images/brands/2.webp",
        "/images/brands/3.webp",
        "/images/brands/4.webp",
        "/images/brands/5.webp",
        "/images/brands/6.webp",
    ];
    return (
        <section className="container p">
            <h2 className="text-uppercase text-center">
                we worked with global largest brands
            </h2>
            <div className="brandImages d-flex justify-content-around">
                {imagesUrl.map((url, index) => (
                    <BrandItem url={url} key={index} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Brands;
