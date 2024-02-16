const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
    // Implement add to cart functionality
  };

  return (
    <div className=" cursor-pointer p-4 flex flex-col items-center justify-between  rounded-2xl shadow-2xl border-2 hover:border-2">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-32 mb-2 object-cover rounded-md border-2"
      />
      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
      <p className="text-gray-700 mb-2">Price: ${product.price}</p>
      <p className="text-gray-700 mb-2">Brand: {product.brand}</p>
      <p className="text-gray-700 mb-2">Category: {product.category}</p>
      <p className="text-gray-700 mb-2">Description: {product.description}</p>
      <p className="text-gray-700 mb-2">Rating: {product.rating}</p>
      <p className="text-gray-700 mb-2">Stock: {product.stock}</p>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
