import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import  {Header } from '../Component/Header';
import { Footer } from "../Component/Footer";
import { showToast } from '../Component/ShopComponent/toast';
import { toast } from 'react-toastify';
export const Blog = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <Header />
      <Headerlink />
      <MainContent />
      <BackToTop />
      <Footer />
    </div>
  );
};

// const Header = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-md">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <a href="#" className="text-2xl font-bold">HONO</a>
        
//         <nav className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block`}>
//           <ul className="md:flex space-y-4 md:space-y-0 md:space-x-6">
//             <NavItem text="HOME" hasDropdown />
//             <NavItem text="SHOP" hasDropdown />
//             <NavItem text="BLOG" hasDropdown />
//             <NavItem text="PAGES" hasDropdown />
//             <NavItem text="ABOUT US" />
//             <NavItem text="CONTACT US" />
//           </ul>
//         </nav>
        
//         <div className="flex items-center space-x-4">
//           <IconWithBadge icon="far fa-heart" count={0} />
//           <IconWithBadge icon="fas fa-shopping-bag" count={0} />
//           <a href="#" className="text-gray-800">
//             <i className="fas fa-search"></i>
//           </a>
//           <button 
//             className="md:hidden text-gray-800" 
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             <i className="fas fa-bars"></i>
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

const Headerlink = () => {
  return (
    <div class ="bg-mint m-full h-[400px]"></div>
  );
};
const MainContent = () => {
  return (
    <div className="mt-32 container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <Sidebar />
        <BlogContent />
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-full md:w-1/4">
      <SearchSection />
      <CategoriesSection />
      <TagsSection />
      <MetaSection />
    </div>
  );
};
const Taskbar = () => {
  return (
    <div className="my-4 flex items-end  w-full ">
      <div className="h-[5px] w-[50px] md:w-[100px] bg-green-500"></div>
      <div className="h-[2px] flex-1 bg-gray-200"></div>
    </div>
  );
};

const SearchSection = () => {
  return (
    <div className="mb-8">
      <h3 className = "font-bold text-3xl">SEARCH</h3>
      <Taskbar />
      <form className="relative">
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <button 
          type="submit" 
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        >
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
};

const CategoriesSection = () => {
  const categories = [
    'Audio', 'Company', 'Gallery', 'Other', 
    'Travel', 'Uncategorized', 'Video', 'Wordpress'
  ];

  return (
    <div className="mb-8">
     <h3 className = "font-bold text-3xl">CATEGORIES </h3>
     <Taskbar />
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li key={index}>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const TagsSection = () => {
  const tags = ['Technology', 'Information', 'Wordpress', 'Devs', 'Program'];

  return (
    <div className="mb-8">
        <h3 className = "font-bold text-3xl">TAGS </h3>
        <Taskbar />
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <a 
            key={index}
            href="#" 
            className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded hover:bg-gray-300 transition-colors"
          >
            {tag}
          </a>
        ))}
      </div>
    </div>
  );
};

const MetaSection = () => {
  return (
    <div className="mb-8">
  <h3 className = "font-bold text-3xl">META </h3>
  <Taskbar /> 
      {/* Meta content goes here */}
    </div>
  );
};


const BlogContent = () => {
  const [posts, setPosts] = useState([]);
  const [expandedPostId, setExpandedPostId] = useState(null);
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState({});

  useEffect(() => {
    fetch("http://localhost:9090/api/blog/all-posts/")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          console.error("Dữ liệu blog không hợp lệ:", data);
          setPosts([]);
        }
      })
      .catch((err) => console.error("Lỗi khi load bài viết:", err));
  }, []);

  const handleLike = async (postId) => {
    const token = sessionStorage.getItem("token");
    if (!token) return showToast("You need login to Like.","error");
    try {
      const res = await fetch("http://localhost:9090/api/blog/likes/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ post: postId })
      });
      if (res.ok) {
        setPosts(prev => prev.map(p =>
          p.id === postId ? { ...p, like_count: p.like_count + 1 } : p
        ));
      }
    } catch (error) {
      console.error("Lỗi like:", error);
    }
  };

  const handleShare = async (postId) => {
    const token = sessionStorage.getItem("token");
    if (!token) return showToast("You need login to Share.","error");

    try {
      const res = await fetch("http://localhost:9090/api/blog/shares/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ post: postId })
      });
      if (res.ok) {
        setPosts(prev => prev.map(p =>
          p.id === postId ? { ...p, share_count: p.share_count + 1 } : p
        ));
      }
    } catch (error) {
      console.error("Lỗi share:", error);
    }
  };

  const toggleComments = async (postId) => {
    if (expandedPostId === postId) {
      setExpandedPostId(null);
      return;
    }

    setExpandedPostId(postId);

    try {
      const res = await fetch(`http://localhost:9090/api/blog/comments/?post=${postId}`);
      const data = await res.json();
      setComments(prev => ({ ...prev, [postId]: data }));
    } catch (error) {
      console.error("Lỗi khi tải bình luận:", error);
    }
  };

  const handleCommentSubmit = async (postId) => {
    const token = sessionStorage.getItem("token");
    const content = newComment[postId]?.trim();
    if(!token) return showToast("You need login to Comment.","error");
    if (!content) return showToast("Comment can't be empty.","error");
    try {
      const res = await fetch("http://localhost:9090/api/blog/comments/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ post: postId, content })
      });

      if (res.ok) {
        const data = await res.json();
        setComments(prev => ({
          ...prev,
          [postId]: [...(prev[postId] || []), data]
        }));
        setNewComment(prev => ({ ...prev, [postId]: "" }));
      }
    } catch (error) {
      console.error("Lỗi khi gửi bình luận:", error);
    }
  };

  return (
    <div className="w-full md:w-3/4 space-y-6">
      {posts.map((post) => (
        <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow">
          <img
            src={post.product.image_url || "https://via.placeholder.com/800x350"}
            alt={post.product.name}
            className="w-full h-[400px] object-cover  bg-orange-50"
          />
          <div className="p-6">
            <div className="text-gray-500 text-sm mb-4">
              <span className="mr-4">POSTED BY: {post.author_username}</span>
              <span>ON: {new Date(post.created_at).toLocaleDateString()}</span>
            </div>
            <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
            <div className="text-gray-600 leading-relaxed mb-4">
              <p>{post.content}</p>
            </div>
            <div className="text-xl text-gray-500 mb-2">
              <p className = "flex">
                <strong>Sản phẩm:</strong> {post.product.name} – 
                <span className="text-green-600 font-semibold">{post.product.price} VND</span>
              </p>
            </div>
            <div className="flex space-x-4 items-center mb-2  justify-between px-24 mt-8">
              <button
                className="text-gray-700 hover:underline  text-3xl flex"
                onClick={() => handleLike(post.id)}
              >
                👍 ({post.like_count}) 
              </button>
              <button
                className="text-gray-700 hover:underline font-semibold"
                onClick={() => toggleComments(post.id)}
              >
                💬 Bình luận
              </button>
              <button
                className="text-gray-700 hover:underline font-semibold"
                onClick={() => handleShare(post.id)}
              >
                🔁 Share ({post.share_count})
              </button>
            </div>

            {expandedPostId === post.id && (
              <div className="mt-4 border-t pt-4 space-y-2">
                <h4 className="text-lg font-semibold">Bình luận:</h4>
                {(comments[post.id] || []).map((comment) => (
                  <div key={comment.id} className="border-b pb-2">
                    <p className="font-semibold">{comment.user_username}</p>
                    <p className="text-gray-700">{comment.content}</p>
                  </div>
                ))}
                <textarea
                  className="w-full border rounded p-2 mt-2"
                  rows="2"
                  placeholder="Viết bình luận..."
                  value={newComment[post.id] || ""}
                  onChange={(e) =>
                    setNewComment(prev => ({ ...prev, [post.id]: e.target.value }))
                  }
                />
                <button
                  className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-300"
                  onClick={() => handleCommentSubmit(post.id)}
                >
                  Gửi bình luận
                </button>
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
};

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      onClick={scrollToTop}
      className="fixed right-6 bottom-6 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};


export default Blog;