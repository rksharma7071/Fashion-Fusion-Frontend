import React from "react";
import { Link } from "react-router-dom";

function CollectionList() {
  return (
    <div className="shadow-sm mt-10 m-3 p-3 border border-gray-50">
      <h1 className="text-center pb-5 text-2xl uppercase">Top Brands</h1>
      <div className="flex flex-wrap justify-center gap-10 py-3">
        <Link to={"/mens"} className="text-center">
          <div className="h-30 w-30 flex justify-center items-center rounded-full border border-gray-300 bg-amber-500 text-white shadow">
            Men
          </div>
          <div className="pt-2 uppercase font-medium">Men</div>
        </Link>
        <Link to={"/mens"} className="text-center">
          <div className="h-30 w-30 flex justify-center items-center rounded-full border border-gray-300 bg-blue-500 text-white shadow">
            Women
          </div>
          <div className="pt-2 uppercase font-medium">Women</div>
        </Link>
        <Link to={"/mens"} className="text-center">
          <div className="h-30 w-30 flex justify-center items-center rounded-full border border-gray-300 bg-sky-500 text-white shadow">
            Kids
          </div>
          <div className="pt-2 uppercase font-medium">Kids</div>
        </Link>
        <Link to={"/mens"} className="text-center">
          <div className="h-30 w-30 flex justify-center items-center rounded-full border border-gray-300 bg-green-500 text-white shadow">
            Home
          </div>
          <div className="pt-2 uppercase font-medium">Home</div>
        </Link>
        <Link to={"/mens"} className="text-center">
          <div className="h-30 w-30 flex justify-center items-center rounded-full border border-gray-300 bg-amber-500 text-white shadow">
            Beauty
          </div>
          <div className="pt-2 uppercase font-medium">Beauty</div>
        </Link>
      </div>
    </div>
  );
}

export default CollectionList;
