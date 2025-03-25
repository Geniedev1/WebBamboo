import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import BlogModal from "./BlogModal"; // thêm dòng này

export const ProductCard = (props) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [showModal, setShowModal] = useState(false); // quản lý trạng thái modal

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
      <li>
        <div className="product-card">
          <figure className="card-banner">
            <img src={props.img} width={189} height={189} loading="lazy" alt={props.name} />
            <div className="btn-wrapper">
              <button className="product-btn" aria-label="Add to Wishlist">
                <ion-icon name="heart-outline" />
                <div className="tooltip">Add to Wishlist</div>
              </button>
              <button
                className="product-btn"
                onClick={() => handalClick(props.id)}
                aria-label="Quick View"
              >
                <ion-icon name="eye-outline" />
                <div className="tooltip">Quick View</div>
              </button>
            </div>
          </figure>
          <h3 className="h4 card-title">
            <a href={`/product/${props.id}`}>{props.name}</a>
          </h3>
          <div className="price-wrapper">
            <del className="del">Rs {props.price + 100}</del>
            <data className="price">Rs {props.price}</data>
          </div>
          <button className="btn btn-primary" onClick={handalCart}>
            Add to Cart
          </button>
          <button className="btn mt-2 bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setShowModal(true)}>
            Viết bài
          </button>
        </div>
      </li>
      {showModal && <BlogModal product={props} onClose={() => setShowModal(false)} />}
    </>
  );
};
