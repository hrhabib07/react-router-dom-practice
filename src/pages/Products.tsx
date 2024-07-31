import { Key, useEffect, useState } from "react";
import ProductCard, { TProduct } from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h1>Hello, From Products!</h1>
      <div className="grid grid-cols-3 gap-4">
        {isLoading && <p>Data is loading...</p>}
        {error && <p>{error}</p>}
        {!isLoading &&
          !error &&
          products?.products?.map((product: TProduct) => (
            <ProductCard product={product} key={product.id}></ProductCard>
          ))}
      </div>
    </div>
  );
};

export default Products;
