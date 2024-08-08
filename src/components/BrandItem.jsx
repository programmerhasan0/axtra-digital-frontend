const BrandItem = ({ url, index }) => {
    return (
        <div className="brand-item" id={`brand${index}`}>
            <img src={url} alt={`Brand Image ${index}`} />
        </div>
    );
};

export default BrandItem;
