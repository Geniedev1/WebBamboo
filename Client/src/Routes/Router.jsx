import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { ProductDetails } from "../Pages/ProductDetails";
import { Shop } from "../Pages/Shop";
import { Cart } from "../Pages/Cart";
import { CheckOut } from "../Pages/CheckOut";
import { Login } from "../Pages/Login";
import { Singup } from "../Pages/Singup";
import { Protected } from "../Component/Protected";
import {Blog} from "../Pages/Blog";
import { Header } from "../Component/Header";
import { Footer } from "../Component/Footer";
import { Contact } from "../Pages/Contact"
export const Router = () => {
  const [isSignedIn, setIsSignedIn] = useState(
    sessionStorage.getItem("token") || false
  );

  return (
    <>
      <Routes>
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route
          path="/cart"
          element={
            <Protected isSignedIn={isSignedIn}>
              <Cart />
            </Protected>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/checkout" element={
        <Protected isSignedIn={isSignedIn}>
        <CheckOut />
      </Protected>
        } />
      </Routes>
    </>
  );
};
