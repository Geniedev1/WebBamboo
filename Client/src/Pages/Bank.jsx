import { useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Bank = () => {
  const query = new URLSearchParams(useLocation().search);
  const total = query.get('total');
  const orderId = 1;
  const [copied, setCopied] = useState(false);
  const [countdown, setCountdown] = useState(900); // 15 phút countdown
  
  // Hằng số thông tin ngân hàng
  const bankInfo = {
    name: "MB Bank",
    accountNumber: "1086419727",
    accountName: "CÔNG TY BAMBOO VIỆT NAM",
    branch: "Chi nhánh Hà Nội",
    content: `THANHTOAN ${orderId || ""}`
  };
  
  // Copy số tài khoản
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  // Đếm ngược thời gian
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Format thời gian đếm ngược
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="h-screen  bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-[70%]  mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-green-600 py-4 px-6">
          <h1 className="text-2xl font-bold text-white text-center">Thanh toán qua Ngân Hàng</h1>
        </div>
        
        {/* Body */}
        <div className="p-6">
          {/* Countdown */}
          <div className="mb-6 text-center">
               <p className="text-xl text-gray-500">Đơn hàng sẽ hết hạn sau</p>
            <p className="text-2xl font-bold text-red-500">{formatTime(countdown)}</p>
          </div>
          
          {/* Thông tin thanh toán */}
          <div className="mb-6">
            <div className="flex justify-start ">
              <span className="text-gray-600 text-3xl">Số tiền cần thanh toán:</span>
              <span className="font-bold text-green-600 text-3xl ml-2">{Number(total).toLocaleString('vi-VN')}đ</span>
            </div>
           
          </div>
          
          {/* QR Code và Thông tin ngân hàng - CÙNG MỘT HÀNG */}
          <div className="mb-6 flex flex-col md:flex-row gap-6">
            {/* Thông tin ngân hàng */}
            <div className="border border-gray-200 rounded-lg p-4 md:w-2/3">
              <h2 className="font-semibold text-2xl mb-4">Thông tin chuyển khoản</h2>
              
              <div className="space-y-4">
                <div className="flex justify-start ">
                  <span className="text-gray-600 w-36">Ngân hàng:</span>
                  <span className="font-medium">{bankInfo.name}</span>
                </div>
                
                <div className="flex justify-start">
                  <span className="text-gray-600 w-40">Số tài khoản:</span>
                  <div className="flex items-center">
                    <span className="font-medium">{bankInfo.accountNumber}</span>
                    <button 
                      onClick={() => copyToClipboard(bankInfo.accountNumber)}
                      className="ml-2 text-green-600 hover:text-green-800"
                    >
                      {copied ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <span className="text-gray-600 w-44">Tên tài khoản:</span>
                  <span className="font-medium">{bankInfo.accountName}</span>
                </div>
                
                <div className="flex items-center">
                  <span className="text-gray-600 w-36">Chi nhánh:</span>
                  <span className="font-medium">{bankInfo.branch}</span>
                </div>
                
                <div className="flex items-center">
                  <span className="text-gray-600 w-40">Nội dung CK:</span>
                  <span className="font-medium">{bankInfo.content}</span>
                </div>
              </div>
            </div>
            
            {/* QR Code */}
            <div className="flex items-center justify-center md:w-1/3">
              <div className="relative w-[400px] h-[400px]  rounded-lg overflow-hidden flex items-center justify-center">
                <img src="/images/Mb2.jpg" alt="QR Code Thanh toán" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
          
          {/* Hướng dẫn */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <h3 className="font-medium text-yellow-800 mb-2">Lưu ý</h3>
            <ul className="list-disc pl-5 text-xl text-yellow-700 space-y-1">
              <li>Vui lòng chuyển khoản chính xác số tiền và nội dung để đơn hàng được xác nhận tự động</li>
              <li>Không hủy đơn sau khi đã chuyển khoản</li>
              <li>Hệ thống mất 1-5 phút để xác nhận giao dịch</li>
            </ul>
          </div>
          
          {/* Buttons */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 w-96 mx-auto">
            <Link 
              to="/"
              className="flex-1 py-2 px-4 border border-white text-white rounded-md text-center bg-green-500 hover:bg-gray-50 "
            >
              Quay lại trang chủ
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bank;
