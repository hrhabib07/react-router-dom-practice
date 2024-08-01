import { Link, useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const ProductDetails = () => {
  const { state } = useLocation();
  const {
    id,
    title,
    description,
    price,
    rating,
    category,
    thumbnail,
    shippingInformation,
    availabilityStatus,
    warrantyInformation,
    brand,
  } = state;
  return (
    <div>
      <div className="border p-4 flex flex-col md:flex-row">
        <div>
          <img src={thumbnail} alt="" />
        </div>
        <div>
          <h2 className="text-xl font-medium">{title}</h2>
          <p className="text-gray-500">{description}</p>
          <p>Ratting: {rating}</p>
          <p className="text-lg font-medium">Price: {price} $</p>
          <p>Category: {category}</p>
          <p>Brand: {brand}</p>
          <p>Delivery time: {shippingInformation}</p>
          <p>Warranty: {warrantyInformation}</p>
          <p>Stock: {availabilityStatus}</p>
          <div>
            <button className="p-2 rounded bg-blue-600 text-white m-4 uppercase text-lg font-medium hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600">
              Add to cart
            </button>

            <Link to={`/products`}>
              <button className="p-2 rounded bg-red-600 text-white m-4 uppercase text-lg font-medium hover:bg-white hover:text-red-600 hover:border hover:border-red-600">
                Previous Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
