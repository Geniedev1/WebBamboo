import React, { useEffect, useState } from "react";
import { Footer } from "../Component/Footer";
import { Header } from "../Component/Header";
import { Items } from "../Component/CartComponent/Items";
import { useNavigate } from "react-router-dom";
export const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [data, setData] = useState();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(9);
  const [totalAmount, setTotalAmount] = useState(0);
  const [token, setToken] = useState(sessionStorage.getItem("token"));

  const fetchCart = async () => {
    try {
      const res = await fetch("http://localhost:9090/api/orders/cart/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      const data = await res.json();

      let sum = 0;
      if (data.items) {
        data.items.forEach((item) => {
          sum += item.product.price * item.quantity;
        });
      }

      setItems(data.items || []);
      setTotalAmount(sum);
    } catch (err) {
      console.error("Lỗi lấy cart:", err);
      setTotalAmount(0);
      setItems([]);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [loading]);

  const createOrder = async () => {
    const res = await fetch(`http://localhost:9090/payment/${totalAmount}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const da = await res.json();
    setData(da);
    return da;
  };
   const navigate = useNavigate();
   const [orderId, setOrderId] = useState(0);
   const [total, setTotal] = useState(0);
  const handlePayment = async () => {
    try {
      // Gửi yêu cầu POST với chuỗi JSON rỗng
      const response = await fetch('http://localhost:9090/api/orders/orders/', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({}), // Gửi chuỗi JSON rỗng
      });
      const data = await response.json();
      setOrderId(data.order.id);
      setTotal(data.final_total);
      if (!response.ok) {
        throw new Error('Yêu cầu thanh toán không thành công');
      }

      // Chuyển hướng sau khi gửi yêu cầu
      navigate("/payment", { 
      state: { 
        orderId: data.order.id, 
        total: data.final_total 
      } 
    });
    } catch (error) {
      console.error('Error during payment request:', error);
    }
  };

  return (
    <>
      <Header />
      <div className="shopping-cart mt-48">
        <div className="px-4 px-lg-0">
          <div className="pb-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col" className="border-0 bg-light">
                            <div className="p-2 px-3 text-uppercase">Product</div>
                          </th>
                          <th scope="col" className="border-0 bg-light">
                            <div className="py-2 text-uppercase">Price</div>
                          </th>
                          <th scope="col" className="border-0 bg-light">
                            <div className="py-2 text-uppercase">Quantity</div>
                          </th>
                          <th scope="col" className="border-0 bg-light">
                            <div className="py-2 text-uppercase">Remove</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map((elem, index) => (
                          <Items key={index} prop={elem} setLoading={setLoading} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="row py-5 p-4 bg-white rounded shadow-sm">
                <div className="col-lg-6"></div>
                <div className="col-lg-6">
                  <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                    Order summary
                  </div>
                  <div className="p-4">
                    <p className="font-italic mb-4">
                      Shipping and additional costs are calculated based on
                      values you have entered.
                    </p>
                    <ul className="list-unstyled mb-4">
                      <li className="d-flex justify-content-between py-3 border-bottom">
                        <strong className="text-muted">Order Subtotal</strong>
                        <strong>Rs {totalAmount.toLocaleString("en-IN")}</strong>
                      </li>
                      <li className="d-flex justify-content-between py-3 border-bottom">
                        <strong className="text-muted">Shipping and handling</strong>
                        <strong>Rs 100.00</strong>
                      </li>
                      <li className="d-flex justify-content-between py-3 border-bottom">
                        <strong className="text-muted">Tax</strong>
                        <strong>Rs 0.00</strong>
                      </li>
                      <li className="d-flex justify-content-between py-3 border-bottom">
                        <strong className="text-muted">Total</strong>
                        <h3 className="font-weight-bold">
                          Rs {(totalAmount + 100).toLocaleString("en-IN")}
                        </h3>
                      </li>
                    </ul>
                    <button
                      className="btn btn-dark rounded-pill py-2 btn-block"
                      onClick={handlePayment}
                    >
                      Proceed to checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
      <Footer />
    </>
  );
};
