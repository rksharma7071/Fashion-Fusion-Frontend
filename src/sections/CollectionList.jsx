import React from "react";
import { Link } from "react-router-dom";

function CollectionList() {
  return (
    <div className="shadow-sm mt-10 m-3 p-3 border border-gray-50">
      <h1 className="text-center pb-5 text-3xl font-medium uppercase">Top Brands</h1>
      <div className="flex flex-wrap justify-center gap-10 py-3">
        <Link to={"/apple"} className="text-center">
          <div className="h-30 w-30 p-2 flex justify-center items-center rounded-full border border-gray-300 bg-white text-white shadow">
            <img src="/brands/apple.png" alt="Apple" />
          </div>
          <div className="pt-2 uppercase font-medium">Apple</div>
        </Link>
        <Link to={"/samsung"} className="text-center">
          <div className="h-30 w-30 p-2 flex justify-center items-center rounded-full border border-gray-300 bg-white text-white shadow">
            <img src="/brands/samsung.png" alt="Samsung" />
          </div>
          <div className="pt-2 uppercase font-medium">Samsung</div>
        </Link>
        <Link to={"/vivo"} className="text-center">
          <div className="h-30 w-30 p-2 flex justify-center items-center rounded-full border border-gray-300 bg-white text-white shadow">
            <img src="/brands/vivo.png" alt="Vivo" />
          </div>
          <div className="pt-2 uppercase font-medium">Vivo</div>
        </Link>
        <Link to={"/oppo"} className="text-center">
          <div className="h-30 w-30 p-2 flex justify-center items-center rounded-full border border-gray-300 bg-white text-white shadow">
            <img src="/brands/oppo.png" alt="OPPO" />
          </div>
          <div className="pt-2 uppercase font-medium">OPPO</div>
        </Link>
        <Link to={"/realme"} className="text-center">
          <div className="h-30 w-30 p-2 flex justify-center items-center rounded-full border border-gray-300 bg-[#ffc913] text-white shadow">
            <img src="/brands/Realme.png" alt="RealMe" />
          </div>
          <div className="pt-2 uppercase font-medium">RealMe</div>
        </Link>
        <Link to={"/nokia"} className="text-center">
          <div className="h-30 w-30 p-2 flex justify-center items-center rounded-full border border-gray-300 bg-white text-white shadow">
            <img src="/brands/nokia.jpg" alt="Nokia" />
          </div>
          <div className="pt-2 uppercase font-medium">Nokia</div>
        </Link>
      </div>
    </div>
  );
}

export default CollectionList;
