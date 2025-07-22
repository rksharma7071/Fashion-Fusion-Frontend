import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function SamsungCollection() {
  const category = useLoaderData();

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Samsung</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {category.mobiles.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SamsungCollection;
