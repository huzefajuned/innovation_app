import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

// Home component
const Home = () => {
  // State to store the fetched products
  const [products, setProducts] = useState([]);
  // State to store search term
  const [searchTerm, setSearchTerm] = useState("");

  // Function to fetch products from the API
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/product");

      //   console.log("response is", response);
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  // Filter products based on search term
  // Filter products based on search term
  const filteredProducts = products.filter(
    (product) =>
      product.name &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 ">
      {products.length <= 0 ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      )}
      {/* Product list */}
    </div>
  );
};

export default Home;
