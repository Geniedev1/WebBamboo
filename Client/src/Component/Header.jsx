import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as Scroll from "react-scroll";

// Cuộn đến một phần tử trên cùng một trang
const LinkScroll = Scroll.Link;

export const Header = () => {
  const [islogin, setislogin] = useState(sessionStorage.getItem("token"));

  // Lưu vị trí scroll trước đó
  const [scrollPosition, setScrollPosition] = useState(0);
  // Kiểm soát hiển thị header (true: hiện, false: ẩn)
  const [headerVisible, setHeaderVisible] = useState(true);

  const navigate = useNavigate();

  const handalRedirect = () => {
    if (islogin) {
      navigate(`/cart`);
    } else {
      navigate(`/login`);
    }
  };

  const handalLogout = () => {
    sessionStorage.removeItem("token");
    setislogin(false);
    navigate(`/`);
  };

  // Lắng nghe sự kiện scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      
      // Nếu cuộn xuống (currentScroll > scrollPosition) → ẩn header
      if (currentScroll > scrollPosition) {
        setHeaderVisible(false);
      } else {
        // Cuộn lên → hiện header
        setHeaderVisible(true);
      }

      setScrollPosition(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  return (
    // Thêm class "show" khi headerVisible = true, "hide" khi = false
    <header className={`header ${headerVisible ? "show" : "hide"}`} data-header="">
      <div className="nav-wrapper">
        <div className="container">
          <h1 className="h1">
            <a href="/" className="logo">
              Organ<span className="span">ica</span>
            </a>
          </h1>

          {/* Nút mở menu (nếu có dùng cho mobile) */}
          <button
            className="nav-open-btn"
            aria-label="Open Menu"
            data-nav-open-btn=""
          >
            <ion-icon name="menu-outline" />
          </button>

          <nav className="navbar" data-navbar="">
            <button
              className="nav-close-btn"
              aria-label="Close Menu"
              data-nav-close-btn=""
            >
              <ion-icon name="close-outline" />
            </button>

            <ul className="navbar-list">
              <li>
                <Link to="/" className="navbar-link">Home</Link>
              </li>
              <li>
                <LinkScroll
                  activeClass="active"
                  className="navbar-link"
                  smooth="linear"
                  spy
                  to="contact"
                  offset={-30}
                >
                  About
                </LinkScroll>
              </li>
              <li>
                <Link to="/shop" className="navbar-link">Shop</Link>
              </li>
              <li>
                <Link to="/blog" className="navbar-link">Blog</Link>
              </li>
              <li>
                <LinkScroll
                  activeClass="active"
                  className="navbar-link"
                  smooth="linear"
                  spy
                  to="products"
                  offset={-30}
                >
                  Products
                </LinkScroll>
              </li>
              <li>
                <LinkScroll
                  activeClass="active"
                  className="navbar-link"
                  smooth="linear"
                  spy
                  to="contact"
                  offset={-30}
                >
                  Contact
                </LinkScroll>
              </li>
            </ul>
          </nav>

          <div className="header-action">
            <div className="search-wrapper" data-search-wrapper="">
              <button
                className="header-action-btn"
                aria-label="Toggle search"
                data-search-btn=""
              >
                <ion-icon name="search-outline" className="search-icon" />
              </button>
              <div className="input-wrapper">
                <input
                  type="search"
                  name="search"
                  placeholder="Search here"
                  className="search-input"
                />
                <button className="search-submit" aria-label="Submit search">
                  <ion-icon name="search-outline" />
                </button>
              </div>
            </div>

            {/* Hiển thị icon đăng nhập/giỏ hàng dựa trên trạng thái islogin */}
            {!islogin ? (
              <button
                className="header-action-btn"
                aria-label="Open shopping cart"
                data-panel-btn="cart"
                onClick={handalRedirect}
              >
                <ion-icon name="person-circle-outline"></ion-icon>
              </button>
            ) : (
              <>
                <button
                  className="header-action-btn"
                  aria-label="Open shopping cart"
                  data-panel-btn="cart"
                  onClick={handalRedirect}
                >
                  <ion-icon name="basket-outline" />
                  <data className="btn-badge" value={2}>
                    02
                  </data>
                </button>
              </>
            )}

            {islogin && (
              <button
                className="header-action-btn"
                aria-label="Open shopping cart"
                data-panel-btn="cart"
                onClick={handalLogout}
              >
                <ion-icon name="log-out-outline"></ion-icon>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
