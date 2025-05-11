import React, { useState, useEffect,useRef } from 'react';
import { Header } from '../Component/Header';
import { Footer } from '../Component/Footer';
import { useNavigate } from 'react-router-dom';
import { showToast } from '../Component/ShopComponent/toast';
const sidebarItems = [
  { icon: '🏠', label: 'Adress' },
  { icon: '🔗', label: 'Link' },
  { icon: '🔒', label: 'Account' },
  {icon:'🔒',label:'Password'},
  { label: 'Đăng xuất', icon: '🚪' } // nút cuối
];
const Taskbar = () => {
    return (
      <div className="my-4 flex items-end  w-full ">
        <div className="h-[5px] w-[50px] md:w-[200px] bg-green-500"></div>
        <div className="h-[2px] flex-1 bg-gray-200"></div>
      </div>
    );
  };
  const Sidebar = ({ active, onSelect }) => (
    <aside className="fixed top-36 left-0 h-full w-[12%] bg-white">
      <div className="p-4 font-bold text-xl">Trang quản lý</div>
      <nav className="py-2 text-sm">
        {sidebarItems.map((item, idx) => (
          <div
            key={idx}
            onClick={() => onSelect(item.label)}
            className={`h-16 w-full flex items-center border-t-2 border-mint cursor-pointer hover:font-bold hover:shadow-md hover:border-b-2 hover:border-green-400 ${
              active === item.label ? 'bg-green-50 font-bold' : ''
            }`}
          >
            <span className="pl-6 text-2xl">{item.icon}</span>
            <span className={`pl-2 text-2xl font-medium ${
  item.label === 'Đăng xuất' ? 'text-red-600' : ''
}`}>{item.label}</span>

          </div>
        ))}
      </nav>
    </aside>
  );


// Address tab content matching design
const AccountContent = ({ userData, onUpdate }) => {
  const [formData, setFormData] = useState({
    phone: userData.phone !== '--' ? userData.phone : '',
    gender: userData.gender !== '--' ? userData.gender : '',
    date_of_birth: userData.date_of_birth !== '--' ? userData.date_of_birth : '',
    avatar_url: userData.avatar_url !== '--' ? userData.avatar_url : '',
  });
   const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    // tạo URL tạm để preview
    const preview = URL.createObjectURL(file);
    setFormData(prev => ({
      ...prev,
      avatar_url: preview,
      // có thể lưu file để upload lên server sau
      avatar_file: file
    }));
  };
   const openFileDialog = () => {
    fileInputRef.current?.click();
  };
  const handleSave = () => {
    Object.entries(formData).forEach(([key, val]) => {
      if (val) onUpdate(key, val);
    });
  };


  return (
    <div className="bg-white p-6 rounded shadow w-[70%] space-y-6">
      <h2 className="text-3xl font-bold mb-4">Cập nhật tài khoản</h2>
      <Taskbar />
      <div className="grid grid-cols-2 gap-6 text-xl">
        <div className="flex flex-col space-y-4">
          <label>
            Số điện thoại:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mt-1 border border-gray-300 rounded p-2"
            />
          </label>
          <label>
            Ngày sinh:
            <input
              type="date"
              name="date_of_birth"
              value={formData.date_of_birth}
              onChange={handleChange}
              className="w-full mt-1 border border-gray-300 rounded p-2"
            />
          </label>
          <label>
            Giới tính:
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full mt-1 border border-gray-300 rounded p-2"
            >
              <option value="">-- Chọn giới tính --</option>
              <option value="M">Nam</option>
              <option value="F">Nữ</option>
              <option value="O">Khác</option>
            </select>
          </label>
        </div>
                <div className="flex flex-col items-center space-y-4">
          <div
            className="cursor-pointer"
            onClick={openFileDialog}
          >
            <img
              src={
                formData.avatar_url
                  ? formData.avatar_url
                  : "/images/avatar-placeholder.png"
              }
              alt="Avatar Preview"
              className="w-32 h-32 object-cover rounded-full border"
              onError={e => {
                e.currentTarget.src = "/images/avatar-placeholder.png";
              }}
            />
          </div>
          <button
            type="button"
            onClick={openFileDialog}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Upload ảnh
          </button>
          {/* input file ẩn */}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      </div>
      <button
        onClick={handleSave}
        className="mt-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Lưu thay đổi
      </button>
    </div>
  );
};


// Placeholder contents for other tabs
const LinkContent = () => <div className="p-6">Đây là nội dung Link (placeholder).</div>;
const AdressContent = ({ userData, onUpdate }) => {
  const [address, setAddress] = useState(userData.address || '');


  const handleSave = () => {
    if (address.trim()) {
      onUpdate('address', address);
    }
  };


  return (
    <div className="w-[70%] space-y-6">
      <div className="bg-white p-6 rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col w-full">
            <h2 className="text-4xl font-semibold">Thông tin Địa Điểm</h2>
            <Taskbar />
          </div>
          <span className="text-gray-400 text-sm cursor-pointer" title="Chi tiết">?</span>
        </div>


        <div className="flex flex-col space-y-4 text-xl">
          <label htmlFor="address" className="font-semibold">Địa chỉ:</label>
          <input
            id="address"
            name="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Nhập địa chỉ của bạn"
            className="border rounded p-2 w-full"
          />
          <div className="text-right">
            <button
              onClick={handleSave}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              Lưu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


const FinceContent = () => <div className="p-6">Đây là nội dung Fince (placeholder).</div>;


export const Profile = () => {
  const [activeItem, setActiveItem] = useState(sidebarItems[0].label);
  const [userData, setUserData] = useState({ gender: '--', phone: '--', date_of_birth: '--', avatar_url: '--',address: '' });
  const [userData2, setUserData2] = useState({ username: '--',email:'--' });
  const [islogin, setislogin] = useState(sessionStorage.getItem("token"));
  const[token,setToken]=useState(sessionStorage.getItem("token"));
  const navigate = useNavigate();
  const handalLogout = () => {
    sessionStorage.removeItem("token");
    setislogin(false);
    navigate(`/`);
  };
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:9090/api/profile/me/", {headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer "+token
        },
      });
 
        if (res.status === 401) {
          console.error("Token không hợp lệ hoặc hết hạn");
          return;
        }
 
        const data = await res.json();
        setUserData({
          gender: data.gender ?? '--',
          phone: data.phone ?? '--',
          date_of_birth: data.date_of_birth ?? '--',
          avatar_url: data.avatar_url ?? '--',
          address: data.address ?? '',
        });
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);
  const handleUpdate = async (field, value) => {
    setUserData(prev => ({ ...prev, [field]: value }));
    try {
      await fetch('http://localhost:9090/api/profile/me/', { method: 'PUT', headers: { 'Content-Type': 'application/json', "Authorization": "Bearer "+token
      }, body: JSON.stringify({ [field]: value }) });
      showToast('Cập nhật thành công!', 'success');
    } catch (err) {
      console.error(err);
      showToast('Cập nhật thất bại!', 'error');
    }
 
  };
  useEffect(() => {
    if (activeItem === 'Đăng xuất') {
      handalLogout();
    }
  }, [activeItem]);




  const renderContent = () => {
    switch (activeItem) {
      case 'Account': return <AccountContent userData={userData} onUpdate={handleUpdate} />;
      case 'Link': return <LinkContent />;
      case 'Adress': return <AdressContent  userData={userData} onUpdate={handleUpdate} />;
      case 'Fince': return <FinceContent />;
      default: return null;
    }
  };


  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar active={activeItem} onSelect={setActiveItem} />
        <main className=" flex-1  ml-[12%] p-8 bg-gray-100 min-h-screen  ">
        <div className = "mt-32 flex justify-center ">
        {renderContent()}
        </div>
        </main>
      </div>
    </>
  );
};


export default Profile;

