import { Link } from "react-router-dom";

export type TProduct = {
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    rating: number;
    category: string;
    thumbnail: string;
  };
};

const ProductCard = ({ product }: TProduct) => {
  const { id, title, description, price, rating, category, thumbnail } =
    product;
  return (
    <div className="border p-4">
      <img src={thumbnail} alt="" />
      <h2 className="text-xl font-medium">{title}</h2>
      <p className="text-gray-500">{description.substring(0, 100)}...</p>
      <p>Ratting: {rating}</p>
      <p className="text-lg font-medium">Price: {price} $</p>
      <p>Category: {category}</p>
      <Link to={`/products/${id}`} state={product}>
        <button className="p-2 rounded bg-blue-600 text-white m-4 uppercase text-lg font-medium hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600">
          Show Details
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
