const BrandItem = ({ url, index }) => {
    return (
        <div>
            <img src={url} alt={`Brand Image ${index}`} />
        </div>
    );
};

export default BrandItem;
