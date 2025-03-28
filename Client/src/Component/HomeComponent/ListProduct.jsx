import React, { useEffect, useState } from "react";
import { ProductCard } from "../ShopComponent/ProductCard";
import FadeInWrapper from "../FadeInWrapper";

export const ListProduct = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Gọi API lấy tất cả sản phẩm
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:9090/api/products/products/");
        const data = await res.json();
        setProducts(data);
        setFilteredProducts(data); // mặc định hiển thị tất cả
      } catch (error) {
        console.error("Lỗi khi tải sản phẩm:", error);
      }
    };
    fetchProducts();
  }, []);

  // Hàm lọc theo category ID
  const filterByCategoryId = (categoryId) => {
    setSelectedCategory(categoryId);
    if (categoryId === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.categories.some((cat) => cat.id === categoryId)
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <section className="py-8 px-4">
      {/* Nút lọc */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <button
          onClick={() => filterByCategoryId("all")}
          className={`px-4 py-2 rounded-full border ${
            selectedCategory === "all" ? "bg-green-600 text-white" : "bg-white text-gray-700"
          }`}
        >
          Tất cả
        </button>
        <button
          onClick={() => filterByCategoryId(1)}
          className={`px-4 py-2 rounded-full border ${
            selectedCategory === 1 ? "bg-green-600 text-white" : "bg-white text-gray-700"
          }`}
        >
          Fresh
        </button>
        <button
          onClick={() => filterByCategoryId(2)}
          className={`px-4 py-2 rounded-full border ${
            selectedCategory === 2 ? "bg-green-600 text-white" : "bg-white text-gray-700"
          }`}
        >
          Meat
        </button>
        <button
          onClick={() => filterByCategoryId(3)}
          className={`px-4 py-2 rounded-full border ${
            selectedCategory === 3 ? "bg-green-600 text-white" : "bg-white text-gray-700"
          }`}
        >
          Health
        </button>
        <button
          onClick={() => filterByCategoryId(4)}
          className={`px-4 py-2 rounded-full border ${
            selectedCategory === 4 ? "bg-green-600 text-white" : "bg-white text-gray-700"
          }`}
        >
          Dairy
        </button>
      </div>

      {/* Danh sách sản phẩm */}
      <ul className="
      grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        px-4
        justify-center
        mx-72
        gap-20">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <FadeInWrapper key={product.id} delay={product.id * 30}>
              <div>
              <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={parseFloat(product.price)}
              img={product.image_url}
              description={product.description}
            />
              </div>
            </FadeInWrapper>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            Không có sản phẩm nào.
          </p>
        )}
      </ul>
    </section>
  );
};
