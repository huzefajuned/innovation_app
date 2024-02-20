import React, { useContext } from "react";
import { CartContext } from "../Context";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const { cartDispatch, cartState } = useContext(CartContext);

  const handleAddToCart = () => {
    // Implement add to cart functionality
    cartDispatch({ type: "ADD_TO_CART", payload: product });
    toast.success(`${product.title} added successfully 🎉`);
  };

  console.log("cartState is", cartState);

  return (
    <div className="cursor-pointer p-4 flex flex-col items-center justify-between rounded-2xl shadow-2xl border-2 hover:border-2">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-32 mb-2 object-cover rounded-md border-2"
      />
      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
      <p className="text-gray-700 mb-2 font-bold">Price: ${product.price}</p>
      <p className="text-gray-700 mb-2">Brand: {product.brand}</p>
      <p className="text-gray-700 mb-2">Category: {product.category}</p>
      <p className="text-gray-700 mb-2">Rating: {product.rating}</p>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors mt-2 focus:outline-none"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
