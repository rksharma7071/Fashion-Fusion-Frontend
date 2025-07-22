import React from "react";
import { useLoaderData } from "react-router-dom";

function Product() {
  const { product, category } = useLoaderData();
  console.log(product);
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow rounded-xl mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.model}
            className="rounded-2xl shadow-lg max-h-[500px] object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">
            {product.brand} {product.model}
          </h2>
          <p className="text-xl text-green-600 font-semibold">
            ₹{product.price.toLocaleString()}
          </p>

          <div className="text-gray-600 space-y-2">
            <p>
              <span className="font-semibold">RAM:</span> {product.ram}
            </p>
            <p>
              <span className="font-semibold">Storage:</span> {product.storage}
            </p>
            <p>
              <span className="font-semibold">Battery:</span> {product.battery}
            </p>
            <p>
              <span className="font-semibold">Display:</span> {product.display}
            </p>
            <p>
              <span className="font-semibold">Camera:</span> {product.camera}
            </p>
            <p>
              <span className="font-semibold">Operating System:</span>{" "}
              {product.os}
            </p>
          </div>

          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
