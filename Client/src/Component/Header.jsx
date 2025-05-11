import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as Scroll from "react-scroll";
import axios from "axios";
// Cuộn trong page
const LinkScroll = Scroll.Link;

export const Header = () => {
  const navigate = useNavigate();

  // trạng thái login
  const [isLogin, setIsLogin] = useState(sessionStorage.getItem("token"));

  // scroll hide/show header
  const [scrollPos, setScrollPos] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const cur = window.pageYOffset || document.documentElement.scrollTop;
      setHeaderVisible(cur <= scrollPos);
      setScrollPos(cur);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollPos]);

  // === Search states ===
  const [searchOpen, setSearchOpen] = useState(false);
  const [q, setQ] = useState("");
  const [suggestions, setSuggestions] = useState([]);


  // Fetch gợi ý khi q thay đổi
  useEffect(() => {
    let cancel;
    if (q.trim()) {
      axios
        .get("http://localhost:9090/api/products/products/", {
          cancelToken: new axios.CancelToken(c => (cancel = c)),
        })
        .then(res => {
          const names = res.data
            .map(p => p.name)
            .filter(n => n.toLowerCase().startsWith(q.toLowerCase()))
            .slice(0, 5);
          setSuggestions(names);
        })
        .catch(() => {});
    } else {
      setSuggestions([]);
    }
    return () => cancel && cancel();
  }, [q]);

  const handleSelect = name => {
    setSearchOpen(false);
    setQ("");
    navigate(`/shop?search=${encodeURIComponent(name)}`);
  };

  const handleKeyDown = e => {
    if (e.key === "Enter" && q.trim()) {
      handleSelect(q.trim());
    }
  };

  // Toggle input search
  const toggleSearch = () => {
    setSearchOpen(o => !o);
    setQ("");
    setSuggestions([]);
  };

  // Authentication buttons
  const handleCart = () =>
    navigate(isLogin ? "/cart" : "/login");
  const handleProfile = () =>
    navigate(isLogin ? "/Profile" : "/login");
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setIsLogin(false);
    navigate("/");
  };

  return (
    <header className={`header ${headerVisible ? "show" : "hide"}`}>
      <div className="nav-wrapper">
        <div className="container flex items-center justify-between">

          {/* logo */}
          <h1 className="h1">
            <Link to="/" className="logo">
              Bam<span className="span">Boo</span>
            </Link>
          </h1>

          {/* menu */}
          <nav className="navbar">
            <ul className="navbar-list flex gap-6">
              <li><Link to="/" className="navbar-link">Home</Link></li>
              <li>
                <LinkScroll
                  activeClass="active"
                  className="navbar-link"
                  smooth="linear"
                  spy
                  to="contact"
                  offset={-30}
                >About</LinkScroll>
              </li>
              <li><Link to="/shop" className="navbar-link">Shop</Link></li>
              <li><Link to="/blog" className="navbar-link">Blog</Link></li>
              <li>
                <LinkScroll
                  activeClass="active"
                  className="navbar-link"
                  smooth="linear"
                  spy
                  to="products"
                  offset={-30}
                >Products</LinkScroll>
              </li>
              <li><Link to="/contact" className="navbar-link">Contact</Link></li>
            </ul>
          </nav>

          {/* header actions */}
          <div className="header-action flex items-center gap-4 relative">
            {/* ––– Search ––– */}
            <div className="relative">
              <button
                className="header-action-btn"
                aria-label="Toggle search"
                onClick={toggleSearch}
              >
                <ion-icon name="search-outline" />
              </button>

              {searchOpen && (
                <div className="absolute top-2 right-56 mt-2 w-[700px] bg-white rounded-xl   z-50">
                  <input
                    autoFocus
                    type="text"
                    value={q}
                    onChange={e => setQ(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full px-3 py-2 focus:outline-none rounded-xl border border-gray-300"
                    placeholder="Tìm sản phẩm..."
                  />
                  <ul className="max-h-48 overflow-y-auto">
                    {suggestions.map((name, i) => (
                      <li
                        key={i}
                        onClick={() => handleSelect(name)}
                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {name}
                      </li>
                    ))}
                    {q && suggestions.length === 0 && (
                      <li className="px-3 py-2 text-gray-500">
                        Không có kết quả
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>

            {/* ––– Cart / Login ––– */}
            {!isLogin ? (
              <button
                className="header-action-btn"
                aria-label="Login"
                onClick={handleCart}
              >
                <ion-icon name="log-in-outline" />
              </button>
            ) : (
              <>
                <button
                  className="header-action-btn"
                  aria-label="Cart"
                  onClick={handleCart}
                >
                  <ion-icon name="basket-outline" />
                </button>
                <button
                  className="header-action-btn"
                  aria-label="Profile"
                  onClick={handleProfile}
                >
                  <ion-icon name="person-circle-outline" />
                </button>
              </>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};
