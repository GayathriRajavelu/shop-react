import React from "react";

const CartModal = ({ cart, closeModal, removeFromCart }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-11/12 md:w-2/4 p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-700">Your cart is empty.</p>
        ) : (
          <>
            {/* Cart items */}
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-2 mb-3"
              >
                <img src={item.image} className="h-16" alt={item.title} />

                <p className="w-1/2 font-semibold">{item.title}</p>
                <p className="font-bold">${item.price}</p>

                <button
                  className="bg-red-600 text-white px-3 py-1 rounded"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Item-wise Total Breakdown */}
            <div className="mt-6 border-t pt-4">
              <h3 className="text-lg font-semibold mb-2">Price Breakdown:</h3>

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-gray-700 mb-1"
                >
                  <span>{item.title}</span>
                  <span>${item.price.toFixed(2)}</span>
                </div>
              ))}

              <hr className="my-3" />

              {/* Final Total */}
              <div className="flex justify-between text-xl font-bold">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </>
        )}

        <button
          className="mt-4 bg-gray-700 text-white px-4 py-2 ml-70 rounded"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
