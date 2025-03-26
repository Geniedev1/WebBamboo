import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import BlogPostModal from "./BlogPostModal";

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
    const res = await fetch("http://localhost:9090/orders/cart/add/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      },
      body: JSON.stringify({
        productId: props.id,
        quantity: 1,
      }),
    });

    if (res.status === 200) {
      onToast();
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <li className="group relative bg-white shadow rounded overflow-hidden mx-10">
        <div className="relative overflow-hidden">
          <img
            src={props.img}
            alt={props.name}
            className="w-full h-auto object-contain"
          />

          {/* Overlay trượt từ dưới lên */}
          <div
            className="
              absolute 
              bottom-0 
              left-0 
              w-full 
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
              gap-3 
              text-sm
            "
          >
            <button onClick={handalCart} className="font-semibold hover:underline">
              ADD TO CART
            </button>
            <button onClick={() => handalClick(props.id)} title="Quick View">
              <ion-icon name="eye-outline" />
            </button>
            <button title="Wishlist">
              <ion-icon name="heart-outline" />
            </button>
            <button onClick={() => setShowModal(true)} title="Viết bài">
              <ion-icon name="create-outline" />
            </button>
          </div>
        </div>

        <div className="p-4 text-center">
          <h3 className="font-semibold text-gray-800 mb-1">{props.name}</h3>
          <div className="text-sm text-gray-500">
            <del className="mr-2">Rs {props.price + 100}</del>
            <span className="text-black font-medium">Rs {props.price}</span>
          </div>
        </div>
      </li>

      {showModal && (
        <BlogPostModal
          product={props}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};
