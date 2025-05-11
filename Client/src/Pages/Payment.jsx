import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../Component/Header';
import { Footer } from '../Component/Footer';
import { useLocation } from 'react-router-dom';

export const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { orderId, total } = location.state || { orderId: 0, totalcart: 0 };
  const [userData, setUserData] = useState({
    phone: '0345678902',
    address: '266 Đội Cấn',
    city: 'Hà Nội',
    district: 'Thị xã Sơn Tây',
    ward: 'Phường Lê Lợi',
    note: ''
  });
  const [userEmail, setUserEmail] = useState({
    email : 'trang@bamboo.com',
    name : 'Bamboo'
  })
  const [items, setItems] = useState([
    {
      product: {
        name: 'GM 301 BÚT KẺ CHẤY ĐEN',
        price: 70000,
        image_url: 'https://media.istockphoto.com/id/1216610305/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-b%C3%BAt-ch%C3%AC-eraser-pen-flat-design-v%C3%A0-back-to-school-concept-tr%C3%AAn-n%E1%BB%81n-tr%E1%BA%AFng.jpg?s=612x612&w=0&k=20&c=CKErcUIYfgdeppPImaILqpUkDkK7LRHmNgx8sNdd39A='
      },
      quantity: 1
    }
  ]);
  const [shippingFee, setShippingFee] = useState(0);
  const [selectedMethod, setSelectedMethod] = useState('');
  const [coupon, setCoupon] = useState('');
  const token = sessionStorage.getItem('token');

  // Load profile and cart data
  useEffect(() => {
    async function loadData() {
      try {
        if (!token) return;
        const [profileRes, cartRes,emailRes] = await Promise.all([
          fetch('http://localhost:9090/api/profile/me/', { headers: { Authorization: 'Bearer ' + token } }),
          fetch('http://localhost:9090/api/orders/cart/', { headers: { Authorization: 'Bearer ' + token } }),
          fetch('http://localhost:9090/api/accounts/profile/', { headers: { Authorization: 'Bearer ' + token } })

        ]);
        const profile = await profileRes.json();
        const cart = await cartRes.json();
        const email = await emailRes.json();

        if (profile) {
          setUserData({
            phone: profile.phone || '0345678902',
            address: profile.address || '266 Đội Cấn',
            city: profile.city || 'Hà Nội',
            district: profile.district || 'Thị xã Sơn Tây',
            ward: profile.ward || 'Phường Lê Lợi',
            note: ''
          });
        }
        if (email) {
            setUserEmail({
              email: email.email || 'trang@bamboo.com',
              name: email.username || 'Bamboo'
            });
        }

        if (cart && Array.isArray(cart.items)) {
          setItems(cart.items);
        }
      } catch (err) {
        console.error(err);
      }
    }
    loadData();
  }, [token]);

  const subtotal = items.reduce(
    (sum, item) => sum + (item.product?.price || 0) * (item.quantity || 0),
    0
  );
  const [order, setOrder] = useState(
    {
      total: total + shippingFee,
      order_id :orderId 
    }    
  );
  
  const paymentMethods = [
    { 
      key: 'Vnpay', 
      label: 'Thanh toán qua VNPAY',
      logo: 'https://sandbox.vnpayment.vn/paymentv2/images/brands/logo.svg'
    },
    { 
      key: 'Bank', 
      label: 'Thanh toán qua Ngân Hàng',
      logo: 'https://png.pngtree.com/png-clipart/20190614/original/pngtree-bank-icon-png-image_3700425.jpg'
    },
    {
      key: 'Cash', 
      label: 'Thanh toán khi nhận hàng',
      logo: 'https://cdn-icons-png.flaticon.com/512/1040/1040204.png'
    }
  ];
 const handleOrder = async () => {
  if (selectedMethod === 'Vnpay') {
    // Gửi POST request đến API VNPAY
    try {
      const response = await fetch('http://localhost:9090/vnpay/payment/', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          order_type: "billpayment", // Giá trị mặc định
          order_id: order.order_id, // Lấy từ order đã có
          amount: order.total, // Lấy từ order đã có
          order_desc: "Mô tả đơn hàng", // Mô tả mặc định
          bank_code: "", // Giá trị mặc định
          language: "vn" // Giá trị mặc định
        })
      });

      if (!response.ok) {
        throw new Error('Yêu cầu thanh toán VNPAY không thành công');
      }
      
      // Nhận dữ liệu trả về từ VNPAY nếu cần
      const data = await response.json();
      console.log('Response from VNPAY:', data);

      // Chuyển hướng đến trang thanh toán của VNPAY
      window.location.href = data.payment_url; // Giả sử VNPAY trả về một URL thanh toán
    } catch (error) {
      console.error('Error during VNPAY payment request:', error);
    }
  } else {
    // Nếu không phải VNPAY, thực hiện các hành động khác
    const paymentUrl = `/${selectedMethod}?total=${order.total}`;
    navigate(paymentUrl);
  }
};


  const haldeCoupon = async () => {
    try {
      // Gửi yêu cầu POST với chuỗi JSON rỗng
      const response = await fetch('http://localhost:9090/api/orders/orders/', {

        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          coupon
        }), // Gửi chuỗi JSON rỗng
      });

      if (!response.ok) {
        throw new Error('Yêu cầu thanh toán không thành công');
      }
      const data = await response.json();
      setOrder({
        order_id: data.order.id,
        total : data.final_total + shippingFee
      });
      if (data && Array.isArray(data.order.order_items)) {
          setItems(data.order.order_items);
        }
    } catch (error) {
      console.error('Error during payment request:', error);
    }
    
  }
  const [fee,setFee] = useState(0);
  const handleWardChange = (e) => {
    const selectedWard = e.target.value;
    setUserData({ ...userData, ward: selectedWard });

    let newShippingFee = 0;
    if (selectedWard === 'Phường Lê Lợi') {
      newShippingFee = 63000;
    } else if (selectedWard === 'Xã Phú Nghĩa') {
      newShippingFee = 12000;
    } else if (selectedWard === 'Phường Thanh Xuân') {
      newShippingFee = 30000;
    }
    setFee(newShippingFee);
  };  
const UpdateFree = () => {
  setOrder({
    ...order,
    total: subtotal
  });
}
  return (
   <>
   <Header />
   <div class ="bg-mint m-full h-[400px]"></div>
   <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
     

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row gap-2">
        {/* Left Column - Customer Info and Payment */}
        <div className="w-full ring-1 ring-white p-6 rounded-md md:w-2/3 grid grid-cols-2 gap-8 bg-white ">
          {/* Checkout Steps */}
   <div className = "grid-col-1 ">
   <div className="flex  mb-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold ">Thông tin mua hàng</span>
            </div>
            <div className="flex items-center ml-auto">
              
            </div>
    </div>

          {/* Customer Info Form */}
          <div className="grid grid-cols-1 gap-4 mb-8 font-normal text-base">
            <div>
              <input
                type="email"
                placeholder="Email (tùy chọn)"
                value={userEmail.email}
                onChange={e => setUserEmail({ ...userEmail, email: e.target.value })}
                className="w-full border rounded px-4 py-2"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Họ và tên"
                value={userEmail.name}
                onChange={e => setUserEmail({ ...userEmail, name: e.target.value })}
                className="w-full border rounded px-4 py-2"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Số điện thoại"
                value={userData.phone}
                onChange={e => setUserData({ ...userData, phone: e.target.value })}
                className="w-full border rounded px-4 py-2"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Địa chỉ (tùy chọn)"
                value={userData.address}
                onChange={e => setUserData({ ...userData, address: e.target.value })}
                className="w-full border rounded px-4 py-2"
              />
            </div>
            <div>
              <div className="relative">
                <select
                  value={userData.city}
                  onChange={e => setUserData({ ...userData, city: e.target.value })}
                  className="w-full border rounded px-4 py-2 appearance-none"
                >
                  <option>Tỉnh thành</option>
                  <option value="Hà Nội">Hà Nội</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <div className="relative">
                <select
                  value={userData.district}
                  onChange={e => setUserData({ ...userData, district: e.target.value })}
                  className="w-full border rounded px-4 py-2 appearance-none"
                >
                  <option>Quận huyện (tùy chọn)</option>
                  <option value="Thị xã Sơn Tây">Thị xã Sơn Tây</option>
                  <option value="Hà Nội">Hà Nội</option>
                  <option value="TP Hồ Chí Minh">Hà Giang</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <div className="relative">
                <select
                  value={userData.ward}
                onChange={handleWardChange}
                className="w-full border rounded px-4 py-2 appearance-none"
                >
                  <option>Phường xã </option>
                  <option value="Phường Lê Lợi">Phường Lê Lợi</option>
                  <option value="Xã Phú Nghĩa">Xã Phú Nghĩa</option>
                  <option value="Phường Thanh Xuân">Phường Thanh Xuân</option>

                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <input
                  id="shipping-address"
                  type="checkbox"
                  className="w-4 h-4 mr-2 border-gray-300 rounded"
                />
                <label htmlFor="shipping-address" className="text-lg">
                  Giao hàng đến địa chỉ khác
                </label>
              </div>
            </div>
            <div>
              <textarea
                placeholder="Ghi chú (tùy chọn)"
                rows={3}
                value={userData.note}
                onChange={e => setUserData({ ...userData, note: e.target.value })}
                className="w-full border rounded px-4 py-2"
              />
            </div>
          </div>

   </div>
    <div className = "grid-col-2">
             {/* Shipping Options */}
             <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Vận chuyển</h3>
            <div className="border rounded overflow-hidden text-xl text-gray-600">
              <label className="flex justify-between items-center p-4 cursor-pointer">
                <div className="flex items-center ">
                  <input
                    type="radio"
                    name="shipping"
                    checked={shippingFee === fee} // Thêm trạng thái checked
                    onChange={() => {
                      setShippingFee(fee);
                      setOrder(prev => ({
                        ...prev,
                        total: subtotal + fee // Sử dụng fee thay vì shippingFee
                      }));
      }}
                    className="w-4 h-4 text-purple-600"
                  />
                  <span className="ml-2 ">Giao hàng tận nơi</span>
                </div>
                <span>{fee.toLocaleString('vi-VN')}đ</span>
              </label>
              <div className="border-t"></div>
              <label className="flex justify-between items-center p-4 cursor-pointer">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="shipping"
                    checked={shippingFee === 0}
                    onChange={() => {
                      setShippingFee(0);
                      setOrder(prev => ({
                        ...prev,
                        total: subtotal  // Sử dụng fee thay vì shippingFee
                      }));
                  }}                   
                  className="w-4 h-4 text-purple-600"
                  />
                  <span className="ml-2">Tại Kho</span>
                </div>
                <span className="font-medium">Free</span>
              </label>
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Thanh toán</h3>
            <div className="border rounded overflow-hidden text-xl text-gray-600">
              {paymentMethods.map((method, idx) => (
                <React.Fragment key={method.key}>
                  {idx > 0 && <div className="border-t"></div>}
                  <label className="flex justify-between items-center p-4 cursor-pointer">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="payment"
                        checked={selectedMethod === method.key}
                        onChange={() => setSelectedMethod(method.key)}
                        className="w-4 h-4 text-purple-600"
                      />
                      <span className="ml-2">{method.label}</span>
                    </div>
                    <img src={method.logo} alt={method.label} className="h-8" />
                  </label>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
 </div>

        {/* Right Column - Order Summary */}
        <div className="w-full md:w-1/3 mt-8 md:mt-0">
          <div className="bg-gray-50  rounded p-4">
            <h3 className="text-2xl font-bold mb-4 border-b pb-4">Đơn hàng ({items.length} sản phẩm)</h3>
            
            {/* Order Items */}
            <div className="divide-y">
              {items.map((item, idx) => (
                <div key={idx} className="py-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="relative">
                      <img
                        src={item.product?.image_url}
                        alt={item.product?.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="ml-4">
                      <p className="text-xl">{item.product?.name}</p>
                    </div>
                  </div>
                  <span className="text-xl font-medium">
                    {(item.product?.price * item.quantity).toLocaleString('vi-VN')}đ
                    </span>
                </div>
              ))}
            </div>
            
            {/* Discount Code */}
            <div className="py-4 flex gap-2">
              <input
                type="text"
                placeholder="Nhập mã giảm giá"
                value={coupon}
                onChange={e => setCoupon(e.target.value)}
                className="flex-grow border rounded px-4 py-2 text-xl"
              />
              <button
                onClick={haldeCoupon}
                className="bg-green-500 text-white text-lg  p-2 rounded"
              >
                Áp dụng
              </button>
            </div>
            
            {/* Order Totals */}
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between text-xl">
                <span>Tạm tính</span>
                <span>{subtotal.toLocaleString('vi-VN')}đ</span>
              </div>
              <div className="flex justify-between text-xl">
                <span>Phí vận chuyển</span>
                <span>{shippingFee.toLocaleString('vi-VN')}đ</span>
              </div>
              <div className="flex justify-between text-4xl font-medium text-green-500 pt-2">
                <span>Tổng cộng</span>
                <span>{order.total.toLocaleString('vi-VN')}đ</span>
              </div>
            </div>
            
            {/* Actions */}
            <div className="mt-6 space-y-4">
              <Link to="/cart" className="flex items-center justify-center text-green-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                Quay về giỏ hàng
              </Link>
              <button
                onClick={handleOrder}
                className="w-full bg-green-500 hover:bg-green-700 text-white py-3 rounded font-medium"
              >
                ĐẶT HÀNG
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
   <Footer/>
   </>
  );
};

export default Payment;