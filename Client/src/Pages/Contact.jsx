import React, { useEffect, useState } from 'react';
import { Header } from '../Component/Header';
import { Footer } from '../Component/Footer';

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:9090/api/contact/send/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok) {
        alert("Đã gửi liên hệ!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert(data.error || "Lỗi khi gửi liên hệ.");
      }
    } catch (err) {
      console.error(err);
      alert("Lỗi kết nối máy chủ.");
    }
  };

  return (
    <>
      <Header />
      <div className = "header_hef"></div>
    <div class = "Contact">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51474.488389005564!2d105.65763418039862!3d20.926002731676657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31344def665bc727%3A0x6b9b39cae8be2b53!2zVHLGsOG7nW5nIFRIUFQgQ2jGsMahbmcgTeG7uSBB!5e1!3m2!1svi!2s!4v1741062351687!5m2!1svi!2s"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class = "Contact_map"></iframe>

    </div>
      <div className=" mx-auto px-4 py-8 mb-20">
        <div className="  flex gap-20  rounded-lg mx-52">
          <div className="bg-gray-100 p-12 space-y-6 w-1/3 h-[350px]">
            <div className="flex items-center space-x-4">
              <i className="fas fa-phone text-2xl font-bold"></i>
              <span>+012 345 678 102</span>
            </div>
            <div className="flex items-center space-x-4">
              <i className="fas fa-envelope text-xl"></i>
              <span>username@email.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <i className="fas fa-map-marker-alt text-xl"></i>
              <span>Address goes here, street, Crossroad 123.</span>
            </div>
            <div className="mt-8">
              <h3 className="font-semibold">Follow Us</h3>
              <div className="flex space-x-4 mt-2 text-xl">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-youtube"></i>
                <i className="fab fa-google-plus"></i>
                <i className="fab fa-instagram"></i>
              </div>
            </div>
          </div>

          <div className="p-8 bg-gray-100 w-2/3 h-[600px]  ">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Get In Touch</h2>
            <form onSubmit={handleSend} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="15"
                className="w-full bg-gray-100 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
              <button
                type="submit"
                className="w-52 bg-gray-800 text-white py-6 my-8 rounded-md hover:bg-gray-700 transition duration-300"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
