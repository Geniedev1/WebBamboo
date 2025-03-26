import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { ProductDetails } from "../Pages/ProductDetails";
import { Shop } from "../Pages/Shop";
import { Cart } from "../Pages/Cart";
import { CheckOut } from "../Pages/CheckOut";
import { Login } from "../Pages/Login";
import { Singup } from "../Pages/Singup";
import { Protected } from "../Component/Protected";
import { Blog } from "../Pages/Blog";
import { Contact } from "../Pages/Contact";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route
          path="/cart"
          element={
            <Protected>
              <Cart />
            </Protected>
          }
        />
        <Route
          path="/checkout"
          element={
            <Protected>
              <CheckOut />
            </Protected>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />
      </Routes>
    </>
  );
};
