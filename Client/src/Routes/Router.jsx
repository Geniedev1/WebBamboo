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
import {Payment} from "../Pages/Payment";
import { Profile } from "../Pages/Profile";
import { Vnpay } from "../Pages/Vnpay";
import { Bank } from "../Pages/Bank";
import { Cash } from "../Pages/Cash";
export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path ="/Vnpay" element={<Vnpay />} />
        <Route path="/Bank" element={<Bank />} />
        <Route path="/Cash" element={<Cash />} />
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
