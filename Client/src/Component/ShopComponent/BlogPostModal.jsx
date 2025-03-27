import React, { useState } from 'react';
import axios from 'axios';

const BlogPostModal = ({ product, onClose }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = sessionStorage.getItem('token');
      await axios.post(`http://localhost:9090/api/blog/products/${product.id}/posts/`, {
        title,
        content
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Đăng bài thành công!');
      onClose();
    } catch (error) {
      console.error('Lỗi đăng bài:', error);
      alert('Đăng bài thất bại');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-2">
          Viết bài blog cho: <span className="text-green-600">{product.name}</span>
        </h2>


        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Tiêu đề bài viết"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <textarea
            placeholder="Nội dung bài viết"

            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
            >
              Đăng bài
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogPostModal;
