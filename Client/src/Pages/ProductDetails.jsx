import React, { useEffect, useState } from 'react'
import { Header } from '../Component/Header'
import { Footer } from '../Component/Footer'
import { useParams } from 'react-router-dom';
import { showToast } from '../Component/ShopComponent/toast'; 
export const ProductDetails = () => {
  const [data, setData] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [token] = useState(sessionStorage.getItem("token"));
  const { id } = useParams();

  // State cho tabs
  const [activeTab, setActiveTab] = useState("description");

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  }
  const handleMinus = () => {
    if (quantity >1) {
      setQuantity(quantity - 1);
    }
  }
  const handlePlus = () => {
    if (quantity > 0) {
      setQuantity(quantity + 1);
    }
  }
  const handleCart = async () => {
    console.log(quantity);
    const res = await fetch(
      `http://localhost:9090/api/orders/cart/add/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        },
        body: JSON.stringify({
          product: id,
          quantity: quantity,
        }),
      }
    );
    if (res.status === 201) {
      showToast("Add successful", "success");
    }
    else {
      showToast("Add failed", "error");
    }
  };
  


  
  useEffect(() => {
    window.scrollTo(0, 0);
    const fatchData = async () => {
      const response = await fetch(`http://localhost:9090/api/products/products/${id}`, {
        headers: {
          "Authorization": "Bearer " + token
        },
      });
      const res = await response.json();
      setData(res);
    }
    fatchData();
  }, [id, token]);

  return (
    <>
      <Header />
      <section className="bg-[#F1F7EE] h-[400px]">
  <div className="container mx-auto text-center">
    <h1 className="text-2xl md:text-3xl font-semibold mb-2">PRODUCT DETAILS - DEFAULT</h1>
    <nav className="text-sm text-gray-600 space-x-2">
      <a href="/" className="hover:underline">Home</a>
      <span>&gt;</span>
      <a href="/shop" className="hover:underline">Shop</a>
      <span>&gt;</span>
      <span className="text-gray-800">Product Details Default</span>
    </nav>
  </div>
</section>
      <div className="pd-wrap">
        <div className="container">
          {/* Thông tin sản phẩm */}
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center">
              {!data.image_url
                ? null
                : <img
                    className='w-[300px] h-[400px] object-contain bg-slate-100'
                    src={`${data.image_url}`}
                    alt="Product"
                  />
              }
            </div>
            <div className="col-md-6">
              <div className="product-dtl">
                <div className="product-info">
                  <div className="product-name">{data.productName}</div>
                  <div className="reviews-counter">
                    {/* Rate stars & review count */}
                    <span>3 Reviews</span>
                  </div>
                  <div className="product-price-discount">
                    <span>Rs {data.price}</span>
                    <span className="line-through">Rs {data.price+100}</span>
                  </div>
                </div>
                <p>{data.productDescription}</p>
                <div className="product-count">
                  <label htmlFor="size">Quantity</label>
                  <form action="#" className="display-flex">
                    <div className="qtyminus" onClick={handleMinus}>-</div>
                    <input
                      type="number"
                      name="quantity"
                      onChange={handleQuantity}
                      value={quantity}
                      className="qty"
                    />
                    <div className="qtyplus" onClick={handlePlus}>+</div>
                  </form>
                  <button
                    className="round-black-btn"
                    onClick={handleCart}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-8">
            {/* Tab titles */}
            <ul className="flex space-x-6 border-b">
              <li
                className={`pb-2 cursor-pointer ${activeTab === "description" ? "border-b-2 border-black font-semibold" : "text-gray-500"}`}
                onClick={() => setActiveTab("description")}
              >
                DESCRIPTION
              </li>
              <li
                className={`pb-2 cursor-pointer ${activeTab === "specification" ? "border-b-2 border-black font-semibold" : "text-gray-500"}`}
                onClick={() => setActiveTab("specification")}
              >
                SPECIFICATION
              </li>
              <li
                className={`pb-2 cursor-pointer ${activeTab === "reviews" ? "border-b-2 border-black font-semibold" : "text-gray-500"}`}
                onClick={() => setActiveTab("reviews")}
              >
                REVIEWS (1)
              </li>
            </ul>

            {/* Tab content */}
            <div className="py-4">
              {activeTab === "description" && (
                <div>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor.
                    Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi,
                    vulputate adipiscing cursus eu, suscipit id nulla.
                  </p>
                  <p>
                    Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit.
                    Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero
                    hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              )}

              {activeTab === "specification" && (
                <div>
                  <table className="min-w-full border">
                    <thead>
                      <tr className="border-b">
                        <th className="px-4 py-2 text-left">Compositions</th>
                        <th className="px-4 py-2 text-left">Styles</th>
                        <th className="px-4 py-2 text-left">Properties</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="px-4 py-2">Polyester</td>
                        <td className="px-4 py-2">Girly</td>
                        <td className="px-4 py-2">Short Dress</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="mt-4">
                    Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering
                    stylish separates and statement dresses which have evolved into a full ready-to-wear collection in which every
                    item is a vital part of a woman's wardrobe.
                  </p>
                </div>
              )}

              {activeTab === "reviews" && (
                <div>
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">3 Reviews</h3>
                    <div className="space-y-4">
                      <div className="border-b pb-4">
                        <div className="flex items-center space-x-3 mb-1">
                          <img
                            src="https://i.pravatar.cc/40?img=1"
                            alt="User1"
                            className="w-8 h-8 rounded-full"
                          />
                          <span className="font-semibold">Kendry Reaser</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus inventore dolorum.
                        </p>
                      </div>
                      <div className="border-b pb-4">
                        <div className="flex items-center space-x-3 mb-1">
                          <img
                            src="https://i.pravatar.cc/40?img=2"
                            alt="User2"
                            className="w-8 h-8 rounded-full"
                          />
                          <span className="font-semibold">Onieke Ostom</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Dignissimos consequatur nam quaerat impedit. Tempora inventore dolorum nam odio sed.
                        </p>
                      </div>
                      <div className="pb-4">
                        <div className="flex items-center space-x-3 mb-1">
                          <img
                            src="https://i.pravatar.cc/40?img=3"
                            alt="User3"
                            className="w-8 h-8 rounded-full"
                          />
                          <span className="font-semibold">Jaydyn Iriss</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Quisquam maiores animi dolorem fugit delectus officiis ratione.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Add a review</h3>
                    <form className="space-y-2">
                      <div className="flex space-x-4">
                        <input
                          type="text"
                          placeholder="Your name"
                          className="border p-2 w-1/2"
                        />
                        <input
                          type="email"
                          placeholder="Your email"
                          className="border p-2 w-1/2"
                        />
                      </div>
                      <textarea
                        rows="4"
                        placeholder="Write a review..."
                        className="border p-2 w-full"
                      />
                      <button className="bg-black text-white py-2 px-6 mt-2">
                        SUBMIT
                      </button>
                    </form>
                    <p className="text-sm text-gray-500 mt-2">
                      Your email address will not be published. Required fields are marked *
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}
