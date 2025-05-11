import { useLocation } from 'react-router-dom';

export const Vnpay = () => {
  const query = new URLSearchParams(useLocation().search);
  const total = query.get('total');

  return (
    <div>
      <h1>Thanh toán VNPAY</h1>
      <p>Tổng tiền cần thanh toán: {Number(total).toLocaleString('vi-VN')}đ</p>
      {/* Bạn có thể thêm nút gọi API thanh toán ở đây */}
    </div>
  );
};

export default Vnpay;
