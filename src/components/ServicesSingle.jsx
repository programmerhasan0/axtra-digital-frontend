import CircleBtn from "@components/CircleBtn";
import "@styles/ServicesSingle.css";

const ServicesSingle = ({ title, text, services, url }) => {
    return (
        <div className="services-list-single">
            <div className="text-uppercase service-list-title">{title}</div>
            <div className="services-list-single-content">
                <p>{text}</p>
                <ul>
                    {JSON.parse(services).map((serviceName, index) => (
                        <li key={index} className="text-capitalize">
                            {serviceName}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="">
                <CircleBtn
                    text="Details"
                    elementClass="services-circle-btn"
                    url={url}
                />
            </div>
        </div>
    );
};

export default ServicesSingle;
