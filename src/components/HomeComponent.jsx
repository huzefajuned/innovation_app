// HomeComponent.js
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const HomeComponent = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    // Fetch products from API
    const response = await fetch("https://dummyjson.com/docs/products");
    const data = await response.json();
    setProducts(data);
    setFilteredProducts(data);
  };

  useEffect(() => {
    // Filter products based on search term and price
    const filtered = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!minPrice || product.price >= minPrice) &&
        (!maxPrice || product.price <= maxPrice)
      );
    });
    setFilteredProducts(filtered);
  }, [searchTerm, minPrice, maxPrice, products]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = (e) => {
    const { name, value } = e.target;
    if (name === "minPrice") {
      setMinPrice(value);
    } else {
      setMaxPrice(value);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div>
        <input
          type="number"
          placeholder="Min price"
          name="minPrice"
          value={minPrice}
          onChange={handleFilter}
        />
        <input
          type="number"
          placeholder="Max price"
          name="maxPrice"
          value={maxPrice}
          onChange={handleFilter}
        />
      </div>
      <div>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomeComponent;
