import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { showToast } from '../Component/ShopComponent/toast';
import FadeInWrapper from '../Component/FadeInWrapper';

export const Login = () => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) navigate("/");
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:9090/api/accounts/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username || formData.email,
          password: formData.password,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Invalid Credentials");
      }

      const data = await res.json();
      sessionStorage.setItem("token", data.access);
      showToast("Login successful!", "success");
      navigate("/");
    } catch (error) {
      showToast(error.message);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.password2) {
      return showToast("Passwords do not match!");
    }

    try {
      const res = await fetch("http://localhost:9090/api/accounts/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.status === 201) {
        showToast("Signup successful!", "success");
        setTimeout(() => setIsSignup(false), 1000);
      } else {
        showToast(data.error || "Signup failed!");
      }
    } catch (error) {
      showToast(error.message);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <FadeInWrapper delay={400}>
      <div className="flex h-screen w-screen items-center justify-center bg-mint overflow-hidden">
      <div className="relative w-[900px] h-[500px] bg-mint rounded-3xl shadow-xl overflow-hidden ring-1 ring-gray-200">
        <div className={`flex w-[1800px] h-full transition-transform duration-700 ease-in-out ${isSignup ? "-translate-x-1/2" : "translate-x-0"}`}>
          
          {/* LOGIN FORM */}
          <div className="w-[900px] flex items-center justify-end p-32 bg-green-50 ">
            <form onSubmit={handleLogin} className="w-full max-w-md space-y-4">
              <h2 className="text-4xl font-bold">Login</h2>
              <input type="text" name="username" placeholder="Username or Email" value={formData.username} onChange={handleChange} required className="w-full p-2 rounded bg-gray-200" />
              <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required className="w-full p-2 rounded bg-gray-200" />
              <button type="submit" className="w-full py-2 bg-green-500 hover:bg-green-700 rounded text-white">Login</button>
              <p className="text-center text-gray-600">Don’t have an account? <span onClick={() => setIsSignup(true)} className="text-green-500 cursor-pointer hover:underline">Sign Up</span></p>
            </form>
          </div>

          {/* SIGNUP FORM */}
          <div className="w-[900px] flex items-center justify-start p-32 bg-mint">
            <form onSubmit={handleSignup} className="w-full max-w-md space-y-4">
              <h2 className="text-4xl font-bold">Create Account</h2>
              <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required className="w-full p-2 rounded bg-gray-200" />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full p-2 rounded bg-gray-200" />
              <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required className="w-full p-2 rounded bg-gray-200" />
              <input type="password" name="password2" placeholder="Confirm Password" value={formData.password2} onChange={handleChange} required className="w-full p-2 rounded bg-gray-200" />
              <button type="submit" className="w-full py-2 bg-green-500 hover:bg-green-700 rounded text-white">Sign Up</button>
              <p className="text-center text-gray-600">Already have an account? <span onClick={() => setIsSignup(false)} className="text-green-500 cursor-pointer hover:underline">Login</span></p>
            </form>
          </div>
        </div>

        {/* BACKGROUND IMAGE */}
      <FadeInWrapper delay={800}>
      <div className={`absolute top-0 left-0 w-1/2 h-full bg-cover bg-center transition-transform duration-700 ease-in-out  ${isSignup ? "translate-x-full" : "translate-x-0"}`} style={{ backgroundImage: "url('https://phunugioi.com/wp-content/uploads/2021/11/hinh-anh-chill-anime-cute.jpg')" }}>
          <div className="bg-green-200 bg-opacity-10 w-full h-full flex flex-col justify-between p-8">
            <h1 className="text-2xl font-bold">AMU</h1>
            <p className="text-4xl tracking-wider font-bold text-yellow-800 mb-10">Welcome!</p>
            <button onClick={() => navigate("/")} className="self-end text-sm text-yellow-800 hover:underline bg-slate-50 bg-opacity-30 rounded-3xl p-4">← Back to website</button>
          </div>
        </div>
      </FadeInWrapper>
      </div>
    </div>
    </FadeInWrapper>
  );
};

export default Login;
