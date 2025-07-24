import React, { useContext } from "react";
import { MyContent } from "../Context/MainContent";

function Cart() {
  const { cartItems, incrementQty, decrementQty, removeFromCart } =
    useContext(MyContent);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="flex gap-5">
        <div className="w-4xl">
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 p-4 border border-gray-300 rounded-lg shadow-sm"
                  >
                    <img
                      src={item.image}
                      alt={item.model}
                      className="w-24 h-24 object-contain rounded"
                    />
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold">{item.model}</h2>
                      <p className="text-sm text-gray-600">{item.brand}</p>
                      <p className="text-sm text-gray-600">
                        {item.ram} | {item.storage}
                      </p>

                      <div className="flex items-center gap-2 mt-2">
                        <button
                          className="px-2 bg-gray-200 text-lg rounded hover:bg-gray-300"
                          onClick={() => decrementQty(item.id)}
                        >
                          −
                        </button>
                        <span className="font-semibold">{item.quantity}</span>
                        <button
                          className="px-2 bg-gray-200 text-lg rounded hover:bg-gray-300"
                          onClick={() => incrementQty(item.id)}
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="mt-2 text-sm text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-lg font-semibold">₹{item.price}</p>
                      <p className="text-sm text-gray-500">
                        Subtotal: ₹{item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              
            </>
          )}
        </div>
        <div className="w-sm border border-gray-300 rounded-lg shadow p-3">
          <div className="flex justify-between items-center pt-4">
                <h2 className="text-xl font-bold">Total:</h2>
                <p className="text-xl font-bold text-green-600">₹{total}</p>
              </div>

              <div className="mt-6 text-right">
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full">
                  Proceed to Checkout
                </button>
              </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
