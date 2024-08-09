import ServicesSingle from "@components/ServicesSingle";

const ServicesList = () => {
    const servicesData = [
        {
            title: "search engine optimization",
            text: "We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.",
            services: ["Logo Design", "Advertisement", "promotion"],
            url: "/services/search-engine-optimization",
        },
        {
            title: "email marketing",
            text: "We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.",
            services: ["Logo Design", "Advertisement", "promotion"],
            url: "/services/email-marketing",
        },
        {
            title: "content marketing",
            text: "We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.",
            services: ["Logo Design", "Advertisement", "promotion"],
            url: "/services/content-marketing",
        },
        {
            title: "social marketing",
            text: "We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.",
            services: ["Logo Design", "Advertisement", "promotion"],
            url: "/services/social-marketing",
        },
    ];
    return (
        <div className="services-list container">
            <div className="services-list-wrapper">
                <div className="row">
                    <div className="col-xx-12">
                        {" "}
                        {servicesData.map(
                            ({ title, text, services, url }, index) => (
                                <ServicesSingle
                                    title={title}
                                    text={text}
                                    services={services}
                                    url={url}
                                    key={index}
                                />
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesList;
