import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const ProductDetails = () => {
  const { state } = useLocation();
  return (
    <div>
      <ProductCard product={state}></ProductCard>
    </div>
  );
};

export default ProductDetails;
