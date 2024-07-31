import { Link } from "react-router-dom";

export type TProduct = {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  category: string;
};

const ProductCard = ({ product }: TProduct) => {
  const { id, title, description, price, rating, category } = product;
  return (
    <div className="border p-4">
      <h2 className="text-xl font-medium">{title}</h2>
      <p className="text-gray-500">{description.substring(0, 100)}...</p>
      <p>Ratting: {rating}</p>
      <p className="text-lg font-medium">Price: {price} $</p>
      <p>Category: {category}</p>
      <Link to={`/products/${id}`} state={product}>
        Show Details
      </Link>
    </div>
  );
};

export default ProductCard;
