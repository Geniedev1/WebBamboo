import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import BlogPostModal from "./BlogPostModal";
import { showToast } from "./toast";
import FadeInWrapper from "../FadeInWrapper";
export const ProductCard = (props) => {
  const navigate = useNavigate();
  const [token] = useState(sessionStorage.getItem("token"));
  const [showModal, setShowModal] = useState(false);

  const onToast = () => {
    toast.success('Added to cart!', {
      position: "bottom-center",
      autoClose: 5000,
    });
  };

  const handalClick = (id) => {
    navigate(`/product/${id}`);
  };

  const handalCart = async () => {
    if (!token) {
      return navigate("/login");
    }
    const res = await fetch("http://localhost:9090/api/orders/cart/add/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      },
      body: JSON.stringify({
        product: props.id,
        quantity: 1,
      }),
    });
    if (res.status === 201) {
      showToast("Add successful", "success");
    }
     else {
      showToast("Add failed", "error");
    }
  };

  return (
    <>
    <FadeInWrapper key={props.id} delay={props.id *30}>
    <li className="group relative bg-white  overflow-hidden ">
        <div className="relative overflow-hidden">
          <img
            src={props.img}
            alt={props.name}
            className="w-full h-[400px] object-cover bg-slate-100"
          />

          {/* Overlay trượt từ dưới lên */}
          <div
            className="
              absolute 
              bottom-0 
              left-0 
              w-full 
              h-24 
              bg-black 
              text-white 
              transform 
              translate-y-full 
              group-hover:translate-y-0 
              transition-transform 
              duration-500 
              ease-in-out 
              flex 
              items-center 
              justify-between 
              px-4 
              py-3 
              text-sm
            "
          >
            <button onClick={handalCart} className="font-semibold hover:underline text-xl ">
              ADD TO CART
            </button>
            <button onClick={() => handalClick(props.id)} title="Quick View" className = "text-2xl">
              <ion-icon name="eye-outline" />
            </button>
            <button title="Wishlist" className = "text-2xl">
              <ion-icon name="heart-outline" />
            </button>
            <button onClick={() => setShowModal(true)} title="Viết bài" className = "text-2xl">
              <ion-icon name="create-outline"/>
            </button>
          </div>
        </div>

        <div className="p-4 ">
          <h3 className="font-semibold text-gray-800 mb-1 text-start text-3xl">{props.name}</h3>
          <div className="text-sm text-gray-500 flex justify-between">
          <div className = "text-2xl flex">
             <ion-icon name="star"></ion-icon>
             <ion-icon name="star"></ion-icon>
             <ion-icon name="star"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
          </div>
          <div className ="flex">
            <del className="text-2xl">{props.price + 100} VNĐ</del>
            <span className="text-black text-2xl px-2 font-medium"> {props.price} VNĐ</span>
          </div>  
        </div>
      </div>
    </li>
    </FadeInWrapper>
     

      {showModal && (
        <BlogPostModal
          product={props}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};
