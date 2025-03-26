import React, { useEffect, useState } from "react";
import { ProductCard } from "../ShopComponent/ProductCard";
import axiosFetch from "../../Helper/Axios";

export const AllProduct = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axiosFetch({
        url: "api/products/products/",
        method: "GET",
      });
      if (response?.data && Array.isArray(response.data)) {
        setData(response.data);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="py-8">
      <ul className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        px-4
      ">
        {data.length > 0 ? (
          data.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              price={parseFloat(item.price)}
              img={item.image_url}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products available
          </p>
        )}
      </ul>
    </section>
  );
};
