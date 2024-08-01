import { useEffect, useState } from "react";
import ProductCard, { TProduct } from "../components/ProductCard";
import Pagination from "../components/pagination";

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

  const [searchedText, setSearchedText] = useState("");

  let url = `https://dummyjson.com/products?limit=${productsPerPage}&skip=${
    (currentPage - 1) * productsPerPage
  }`;
  if (searchedText) {
    url = `https://dummyjson.com/products/search?q=${searchedText}&limit=${productsPerPage}&skip=${
      (currentPage - 1) * productsPerPage
    }`;
  }

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setTotalPages(Math.ceil(data.total / productsPerPage));
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
    setCurrentPage(1);
  }, [currentPage, searchedText]);

  // search logic starts here

  return (
    <div>
      <h1>Hello, From Products!</h1>
      <div className="my-4">
        <div>
          <input
            type="text"
            name="searchedText"
            placeholder="search"
            onChange={(e) => setSearchedText(e.target.value)}
            className="p-2 bg-gray-100 me-2 rounded-lg border"
          />
        </div>
      </div>
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
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            ></Pagination>
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
