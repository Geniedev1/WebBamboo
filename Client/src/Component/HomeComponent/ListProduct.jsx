import React, { useEffect, useState } from "react";
import { ProductCard } from "../ShopComponent/ProductCard";
import axiosFetch from "../../Helper/Axios";

export const ListProduct = () => {
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axiosFetch({
        url: "api/products/products/",
        method: "GET",
      });

      console.log("API Response:", response);

      if (response?.data && Array.isArray(response.data)) {
        setData(response.data);
      } else {
        setData([]); // Nếu dữ liệu không hợp lệ, set về mảng rỗng
      }
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
      setData([]); // Đảm bảo state luôn có giá trị hợp lệ
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section id="products" className="section product">
        <div className="container">
          <p className="section-subtitle"> -- Organic Products --</p>
          <h2 className="h2 section-title">All Organic Products</h2>
          <ul className="filter-list">
            <li>
              <button className="filter-btn active">
                <img
                  src="./images/filter-1.png"
                  width={20}
                  alt=""
                  className="default"
                />
                <img
                  src="./images/filter-1-active.png"
                  width={20}
                  alt=""
                  className="color"
                />
                <p className="filter-text">Fresh Vegetables</p>
              </button>
            </li>
            <li>
              <button className="filter-btn">
                <img
                  src="./images/filter-2.png"
                  width={20}
                  alt=""
                  className="default"
                />
                <img
                  src="./images/filter-2-active.png"
                  width={20}
                  alt=""
                  className="color"
                />
                <p className="filter-text">Fish &amp; Meat</p>
              </button>
            </li>
            <li>
              <button className="filter-btn">
                <img
                  src="./images/filter-3.png"
                  width={20}
                  alt=""
                  className="default"
                />
                <img
                  src="./images/filter-3-active.png"
                  width={20}
                  alt=""
                  className="color"
                />
                <p className="filter-text">Healthy Fruit</p>
              </button>
            </li>
            <li>
              <button className="filter-btn">
                <img
                  src="./images/filter-1.png"
                  width={20}
                  alt=""
                  className="default"
                />
                <img
                  src="./images/filter-1-active.png"
                  width={20}
                  alt=""
                  className="color"
                />
                <p className="filter-text">Dairy Products</p>
              </button>
            </li>
          </ul>
          <ul className="grid-list">
          {data.length > 0 ? (
    data.map((item) => (
      <ProductCard
        key={item.id} // Sửa từ item.productid thành item.id
        id={item.id}
        name={item.name} // Sửa từ item.productName thành item.name
        description={item.description}
        price={parseFloat(item.price)} // Chuyển price từ string thành số
        img={item.image_url} // Sửa từ item.img thành item.image_url
      />
    ))
  ) : (
    <p>No products available</p>
  )}
          </ul>
        </div>
      </section>
    </>
  );
};
