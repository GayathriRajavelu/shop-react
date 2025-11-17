import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white shadow rounded-xl p-4 flex flex-col items-center">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain"
      />
      <h2 className="font-semibold text-center mt-3">{product.title}</h2>
      <p className="text-lg font-bold mt-2">${product.price}</p>

      <button
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
