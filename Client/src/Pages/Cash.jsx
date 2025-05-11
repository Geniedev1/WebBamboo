import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Cash = () => {
  const query = new URLSearchParams(useLocation().search);
  const total = query.get('total');
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);
  
  // Thiết lập bộ đếm ngược và chuyển hướng
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prevCount => {
        if (prevCount <= 1) {
          clearInterval(timer);
          navigate('/'); // Chuyển về trang chủ khi đếm ngược kết thúc
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);
    
    // Cleanup function để tránh memory leak
    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="bg-gray-100 p-8 max-w-lg mx-auto mt-96 rounded-lg shadow-lg text-center">

      {/* Thanh toán thành công */}
      <div className="bg-green-50 p-6 rounded-lg shadow-md mb-6">
        <img src="./images/success-icon.png" alt="Thanh toán thành công" className="w-24 h-24 mx-auto mb-4 shake-btn" />
        <p className="text-2xl font-semibold text-green-600 mb-4">Đặt hàng thành công!</p>  
        <p className="text-gray-500">Tự động chuyển về trang chủ sau <span className="font-bold text-green-500">{countdown}</span> giây</p>
      </div>

      {/* Nút quay lại trang chủ với hiệu ứng rung lắc */}
      <a 
        href="/"
        className="inline-block bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition"
      >
        Quay lại trang chủ ngay
      </a>
    </div>
  );
};

export default Cash;
