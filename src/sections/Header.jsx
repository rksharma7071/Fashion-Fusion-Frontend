import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";


function Header() {
  return (
    <div className="max-w-7xl mx-auto px-2 py-3 flex justify-between">
      <div className="text-xl uppercase font-medium">Fashion Fusion</div>

      <div className="flex gap-4 uppercase">
        <Link to={'/mens'}>Mens</Link>
        <Link to={'/womens'}>Womens</Link>
        <Link to={'/kids'}>Kids</Link>
        <Link to={'/appliances'}>Appliances</Link>
      </div>
      <div className="flex gap-4">
        <Link to={'/cart'} className="text-2xl text-gray-900"><IoMdSearch/></Link>
        <Link to={'/cart'} className="text-2xl text-gray-900"><FiUser/></Link>
        <Link to={'/cart'} className="text-2xl text-gray-900"><MdOutlineShoppingCart/></Link>
      </div>
    </div>
  );
}

export default Header;
