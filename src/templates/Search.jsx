import React from "react";
import { IoMdSearch } from "react-icons/io";

function Search() {
  return (
    <div className="flex- justify-center text-center pt-10">
      <h1 className="text-3xl pb-4">Search here</h1>
      {/* <p>Find the best deals on smartphones, tablets, and electronics at unbeatable prices.</p> */}
      <div className="flex justify-center">
        <input
          type="search"
          className="w-md p-2 rounded border border-gray-300  outline-gray-400"
          placeholder="Search for products, brands, or categories..."
        />
        <button className=" border border-gray-300 rounded h-10 w-10 flex justify-center items-center text-2xl">
          <IoMdSearch />
        </button>
      </div>
    </div>
  );
}

export default Search;
