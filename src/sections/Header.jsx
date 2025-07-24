import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);

  const toggleSubMenu = (menu) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  return (
    <header className="border-b border-gray-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-medium">
          <Link to={"/"}>Fashion Fusion</Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-5 items-center text-sm text-gray-900">
          <Link to={"/"} className="px-4 py-2 hover:text-blue-600 ">Home</Link>

          <div className="relative group">
            <Link to={"/mobiles-tablets"} className="py-2 hover:text-blue-600">Mobiles & Tablets</Link>
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg hidden group-hover:block z-10">
              <Link to={"/"} className="block px-4 py-2 hover:bg-gray-100">Smartphones</Link>
              <Link to={"/"} className="block px-4 py-2 hover:bg-gray-100">Feature Phones</Link>
              <Link to={"/"} className="block px-4 py-2 hover:bg-gray-100">Tablets</Link>
              <Link to={"/"} className="block px-4 py-2 hover:bg-gray-100">Power Banks</Link>
              <Link to={"/"} className="block px-4 py-2 hover:bg-gray-100">Mobile Cases</Link>
            </div>
          </div>

          <div className="relative group">
            <Link to={"/laptops-computers"} className="py-2 hover:text-blue-600">Laptops & Computers</Link>
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg hidden group-hover:block z-10">
              <Link to={"/"} className="block px-4 py-2 hover:bg-gray-100">Laptops</Link>
              <Link to={"/"} className="block px-4 py-2 hover:bg-gray-100">Desktops</Link>
              <Link to={"/"} className="block px-4 py-2 hover:bg-gray-100">Monitors</Link>
              <Link to={"/"} className="block px-4 py-2 hover:bg-gray-100">Keyboards & Mice</Link>
              <Link to={"/"} className="block px-4 py-2 hover:bg-gray-100">Storage Devices</Link>
            </div>
          </div>

          <Link to={"/tvs-appliances"} className="py-2 hover:text-blue-600">TVs & Appliances</Link>
          <Link to={"/collections/audio"} className="py-2 hover:text-blue-600">Audio</Link>
          <Link to={"/collections/cameras"} className="py-2 hover:text-blue-600">Cameras & Accessories</Link>
        </nav>

        {/* Icons + Hamburger */}
        <div className="flex items-center gap-4">
          <Link to={"/search"} className="text-2xl text-gray-800"><IoMdSearch /></Link>
          <Link to={"/login"} className="text-2xl text-gray-800"><FiUser /></Link>
          <Link to={"/cart"} className="text-2xl text-gray-800"><MdOutlineShoppingCart /></Link>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-2xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-300 px-4 pb-4 space-y-1">
          <Link to={"/"} className="block py-2 hover:text-blue-600">Home</Link>

          {/* Accordion Item: Mobiles */}
          <div>
            <button onClick={() => toggleSubMenu('mobiles')} className="w-full text-left py-2 font-medium hover:text-blue-600">
              Mobiles & Tablets
            </button>
            {expandedMenu === 'mobiles' && (
              <div className="ml-4 space-y-1">
                <Link to={"/"} className="block py-1 hover:text-blue-600">Smartphones</Link>
                <Link to={"/"} className="block py-1 hover:text-blue-600">Feature Phones</Link>
                <Link to={"/"} className="block py-1 hover:text-blue-600">Tablets</Link>
                <Link to={"/"} className="block py-1 hover:text-blue-600">Power Banks</Link>
                <Link to={"/"} className="block py-1 hover:text-blue-600">Mobile Cases</Link>
              </div>
            )}
          </div>

          {/* Accordion Item: Laptops */}
          <div>
            <button onClick={() => toggleSubMenu('laptops')} className="w-full text-left py-2 font-medium hover:text-blue-600">
              Laptops & Computers
            </button>
            {expandedMenu === 'laptops' && (
              <div className="ml-4 space-y-1">
                <Link to={"/"} className="block py-1 hover:text-blue-600">Laptops</Link>
                <Link to={"/"} className="block py-1 hover:text-blue-600">Desktops</Link>
                <Link to={"/"} className="block py-1 hover:text-blue-600">Monitors</Link>
                <Link to={"/"} className="block py-1 hover:text-blue-600">Keyboards & Mice</Link>
                <Link to={"/"} className="block py-1 hover:text-blue-600">Storage Devices</Link>
              </div>
            )}
          </div>

          <Link to={"/tvs-appliances"} className="block py-2 hover:text-blue-600">TVs & Appliances</Link>
          <Link to={"/audio"} className="block py-2 hover:text-blue-600">Audio</Link>
          <Link to={"/cameras"} className="block py-2 hover:text-blue-600">Cameras & Accessories</Link>
        </div>
      )}
    </header>
  );
}

export default Header;
