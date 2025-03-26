import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as Scroll from "react-scroll";

const LinkScroll = Scroll.Link;

export const Header = () => {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  // 👉 Hàm chuyển hướng đến cart hoặc login
  const handleRedirect = () => {
    const token = sessionStorage.getItem("token"); // luôn lấy token mới nhất
    if (token) {
      navigate("/cart");
    } else {
      navigate("/login");
    }
  };

  // 👉 Hàm đăng xuất
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };

  // 👉 Ẩn/hiện header khi scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      setHeaderVisible(currentScroll < scrollPosition);
      setScrollPosition(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  const token = sessionStorage.getItem("token"); // lấy token mỗi lần render

  return (
    <header className={`header ${headerVisible ? "show" : "hide"}`} data-header="">
      <div className="nav-wrapper">
        <div className="container">
          <h1 className="h1">
            <Link to="/" className="logo">
              Organ<span className="span">ica</span>
            </Link>
          </h1>

          <button className="nav-open-btn" aria-label="Open Menu" data-nav-open-btn="">
            <ion-icon name="menu-outline" />
          </button>

          <nav className="navbar" data-navbar="">
            <button className="nav-close-btn" aria-label="Close Menu" data-nav-close-btn="">
              <ion-icon name="close-outline" />
            </button>

            <ul className="navbar-list">
              <li><Link to="/" className="navbar-link">Home</Link></li>
              <li>
                <LinkScroll to="contact" smooth="linear" spy offset={-30} className="navbar-link">
                  About
                </LinkScroll>
              </li>
              <li><Link to="/shop" className="navbar-link">Shop</Link></li>
              <li><Link to="/blog" className="navbar-link">Blog</Link></li>
              <li>
                <LinkScroll to="products" smooth="linear" spy offset={-30} className="navbar-link">
                  Products
                </LinkScroll>
              </li>
              <li><Link to="/contact" className="navbar-link">Contact</Link></li>
            </ul>
          </nav>

          <div className="header-action">
            <div className="search-wrapper" data-search-wrapper="">
              <button className="header-action-btn" aria-label="Toggle search" data-search-btn="">
                <ion-icon name="search-outline" className="search-icon" />
              </button>
              <div className="input-wrapper">
                <input type="search" placeholder="Search here" className="search-input" />
                <button className="search-submit" aria-label="Submit search">
                  <ion-icon name="search-outline" />
                </button>
              </div>
            </div>

            {!token ? (
              // 🔒 Chưa login → hiện icon người dùng → vào login
              <button className="header-action-btn" onClick={handleRedirect} aria-label="Login">
                <ion-icon name="person-circle-outline"></ion-icon>
              </button>
            ) : (
              <>
                {/* ✅ Đã login → icon giỏ hàng → vào cart */}
                <button className="header-action-btn" onClick={handleRedirect} aria-label="Cart">
                  <ion-icon name="basket-outline" />
                  <data className="btn-badge" value={2}>02</data>
                </button>

                {/* 🔓 Nút logout */}
                <button className="header-action-btn" onClick={handleLogout} aria-label="Logout">
                  <ion-icon name="log-out-outline"></ion-icon>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
