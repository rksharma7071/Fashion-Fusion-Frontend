import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import ProductCard from "../components/ProductCard";

function Search() {
  const [query, setQuery] = useState("");
  const [matchingProducts, setMatchingProducts] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await axios.get("http://localhost:3000/categories");
      const categories = response.data;

      const searchQuery = query.toLowerCase().trim();
      const matchingProduct = [];

      for (const category of categories) {
        for (const mobile of category.mobiles) {
          if (
            mobile.brand.toLowerCase().includes(searchQuery) ||
            mobile.model.toLowerCase().includes(searchQuery)
          ) {
            matchingProduct.push({
              category: {
                id: category.id,
                name: category.name,
                slug: category.slug,
              },
              product: { ...mobile },
            });
          }
        }
      }

      setMatchingProducts(matchingProduct);
    } catch (error) {
      console.error(`Failed to search products: ${error.message}`);
    }
  };

  useEffect(() => {
    if (query.trim() !== "") {
      handleSearch(query);
    } else {
      setMatchingProducts([]);
    }
  }, [query]);

  return (
    <div className="flex flex-col items-center text-center pt-10 px-4">
      <h1 className="text-3xl font-semibold">Search here</h1>
      <p className="text-gray-400 pb-4 max-w-xl">
        Find the best deals on smartphones, tablets, and electronics at
        unbeatable prices.
      </p>

      {/* Search input */}
      <div className="flex justify-center w-full max-w-md mb-6">
        <input
          type="search"
          className="flex-1 p-2 rounded-l border border-gray-300 outline-gray-400"
          placeholder="Search for products, brands, or categories..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="border border-gray-300 bg-white rounded-r h-10 w-10 flex justify-center items-center text-2xl">
          <IoMdSearch />
        </button>
      </div>

      {/* Search Results */}
      {query && (
        <div className="w-full max-w-5xl">
          <h2 className="text-xl font-medium mb-4 text-left">
            Showing results for:{" "}
            <span className="font-semibold text-blue-500">"{query}"</span>
          </h2>

          {matchingProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

              {matchingProducts.map((item, index) => (
                <ProductCard product={item.product} />
                // <div
                //   key={index}
                // >
                //   <img
                //     src={item.product.image}
                //     alt={item.product.model}
                //     className="w-full h-48 object-contain mb-4"
                //   />
                //   <h3 className="text-lg font-semibold text-gray-800">
                //     {item.product.model}
                //   </h3>
                //   <p className="text-sm text-gray-500 mb-1">
                //     Brand: {item.product.brand}
                //   </p>
                //   <p className="text-sm text-gray-600">
                //     Price: ₹{item.product.price.toLocaleString()}
                //   </p>
                //   <p className="text-sm text-gray-600">
                //     RAM: {item.product.ram} | Storage: {item.product.storage}
                //   </p>
                // </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No matching products found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
