import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.slug}`}
      key={product.model}
      className="max-w-sm w-full rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-xl transition-shadow border border-gray-300 hover:cursor-pointer flex flex-col"
    >
      {/* Image */}
      <img
        src={product.image}
        alt={product.model}
        className="h-48 w-full object-contain bg-white"
      />

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold text-gray-800 mb-1">
          {product.model}
        </h2>
        <p className="text-sm text-gray-500 mb-1">
          Brand:{" "}
          <span className="font-medium text-gray-700">{product.brand}</span>
        </p>
        <p className="text-sm text-gray-500 mb-3">
          Price:{" "}
          <span className="font-semibold text-green-600">
            ₹{product.price.toLocaleString()}
          </span>
        </p>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
          {product.ram && (
            <div>
              <span className="font-medium">RAM:</span> {product.ram}
            </div>
          )}
          {product.storage && (
            <div>
              <span className="font-medium">Storage:</span> {product.storage}
            </div>
          )}
          {product.battery && (
            <div>
              <span className="font-medium">Battery:</span> {product.battery}
            </div>
          )}
          {product.display && (
            <div>
              <span className="font-medium">Display:</span> {product.display}
            </div>
          )}
          {product.camera && (
            <div>
              <span className="font-medium">Camera:</span> {product.camera}
            </div>
          )}
          {product.os && (
            <div>
              <span className="font-medium">OS:</span> {product.os}
            </div>
          )}
          {product.type && (
            <div>
              <span className="font-medium">Type:</span> {product.type}
            </div>
          )}
          {product.connectivity && (
            <div>
              <span className="font-medium">Connectivity:</span> {product.connectivity}
            </div>
          )}
          {product.features && (
            <div>
              <span className="font-medium">Features:</span> {product.features}
            </div>
          )}
          {product.megapixels && (
            <div>
              <span className="font-medium">Megapixels:</span> {product.megapixels}
            </div>
          )}
          {product.sensor && (
            <div>
              <span className="font-medium">Sensor:</span> {product.sensor}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
