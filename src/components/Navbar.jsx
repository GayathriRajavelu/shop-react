import React from "react";

const Navbar = ({ cartCount, openCart }) => {
  return (
    <div className="w-full bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Product List</h1>

      <button
        className="bg-white text-blue-600 px-4 py-2 rounded font-semibold"
        onClick={openCart}
      >
        <img className="h-8 w-8" src="https://static.vecteezy.com/system/resources/previews/031/899/921/non_2x/shopping-cart-icon-vector.jpg" alt="Cart"/ >
        ({cartCount})
      </button>
    </div>
  );
};

export default Navbar;
