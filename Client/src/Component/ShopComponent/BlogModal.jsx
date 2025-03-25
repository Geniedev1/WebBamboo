// BlogModal.jsx
import React, { useState } from "react";

const BlogModal = ({ product, onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const token = sessionStorage.getItem("token");

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:9090/api/blog/posts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      },
      body: JSON.stringify({
        title,
        content,
        product: product.id
      }),
    });

    if (res.ok) {
      alert("Đăng bài thành công!");
      onClose();
    } else {
      alert("Lỗi đăng bài.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Viết bài cho sản phẩm: {product.name}</h2>
        <input
          type="text"
          placeholder="Tiêu đề"
          className="w-full p-2 border mb-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Nội dung bài viết"
          className="w-full p-2 border h-32 mb-3"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="flex justify-end gap-4">
          <button
            className="bg-gray-300 px-4 py-2 rounded"
            onClick={onClose}
          >
            Hủy
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            Đăng bài
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
