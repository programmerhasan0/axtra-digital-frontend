import ServicesSingle from "@components/ServicesSingle";
import { useEffect, useState } from "react";

const ServicesList = () => {
    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/services/all`)
            .then((res) => res.json())
            .then((data) => setServicesData(data));
    }, []);

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
