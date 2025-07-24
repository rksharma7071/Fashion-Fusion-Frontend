import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { MyContent } from "../Context/MainContent";

function Product() {
  const { product, category } = useLoaderData();
  const { cartItems, addToCart } = useContext(MyContent);

  const [showMsg, setShowMsg] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setShowMsg(true);
    setTimeout(() => setShowMsg(false), 2000); // hide after 2 sec
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow rounded-xl mt-10">
      {/* ✅ Toast-like success message */}
      {showMsg && (
        <div className="mb-4 bg-green-100 text-green-700 border border-green-300 px-4 py-2 rounded-lg transition-all duration-300">
          ✅ {product.model} added to cart!
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.model}
            className="rounded-2xl max-h-[500px] object-contain"
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
            {product.ram && (
              <p>
                <span className="font-semibold">RAM:</span> {product.ram}
              </p>
            )}
            {product.storage && (
              <p>
                <span className="font-semibold">Storage:</span>{" "}
                {product.storage}
              </p>
            )}
            {product.battery && (
              <p>
                <span className="font-semibold">Battery:</span>{" "}
                {product.battery}
              </p>
            )}
            {product.display && (
              <p>
                <span className="font-semibold">Display:</span>{" "}
                {product.display}
              </p>
            )}
            {product.camera && (
              <p>
                <span className="font-semibold">Camera:</span> {product.camera}
              </p>
            )}
            {product.os && (
              <p>
                <span className="font-semibold">Operating System:</span>{" "}
                {product.os}
              </p>
            )}
            {product.type && (
              <p>
                <span className="font-semibold">Type:</span> {product.type}
              </p>
            )}
            {product.connectivity && (
              <p>
                <span className="font-medium">Connectivity:</span> {product.connectivity}
              </p>
            )}
            {product.features && (
              <p>
                <span className="font-medium">Features:</span> {product.features}
              </p>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
