import { useEffect, useState } from "react";
import ProductCard, { TProduct } from "../components/ProductCard";

export type TProducts = {
  products: TProduct[];
};

const Products = () => {
  const [products, setProducts] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const productsPerPage = 9;
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://dummyjson.com/products?limit=${productsPerPage}&skip=${
        (currentPage - 1) * productsPerPage
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setTotalPages(Math.ceil(data.total / productsPerPage));
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [currentPage]);

  return (
    <div>
      <h1>Hello, From Products!</h1>
      <div>
        {isLoading && <p>Data is loading...</p>}
        {error && <p>{error}</p>}
        {!isLoading && !error && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products?.products?.map((product: TProduct) => (
                <ProductCard product={product} key={product.id}></ProductCard>
              ))}
            </div>
            <div className="my-4">
              {Array.from({ length: totalPages }, (_, index) => {
                return (
                  <button
                    key={index}
                    className="mr-2 border rounded p-2 bg-gray-50"
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
