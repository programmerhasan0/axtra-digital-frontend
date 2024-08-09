import "@styles/Services.css";
import ServicesList from "@components/ServicesList";

const Services = () => {
    return (
        <>
            <section className="services">
                <div className="container services-main">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="services-wrapper pt-130">
                                <div className="services-sub-wrapper">
                                    <h2 className="services-sub-title text-uppercase">
                                        services
                                    </h2>
                                    <h3 className="text-uppercase services-title">
                                        <div>Our Marketing</div>
                                        <div>Services</div>
                                    </h3>
                                </div>
                                <p className="services-text">
                                    Consumers today rely heavily on digital
                                    means to research products. We research a
                                    brand of bldend engaging with it, according
                                    to the meanwhile, 51% of consumers say they
                                    use Google to research products before
                                    buying.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services-list">
                <ServicesList />
            </section>
        </>
    );
};

export default Services;
