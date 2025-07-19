"use client";

import { useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";
import { CardContext } from "@/context/CardContext";
import "./Header.css";

const Header = () => {
  const pathname = usePathname();
  const { isLogin } = useContext(AuthContext)!;
  const { cardItems } = useContext(CardContext)!;

  return (
    <header id="header">
      <div id="global-notification">
        <div className="container">
          <p>
            SUMMER SALE FOR ALL SWIM SUITS AND FREE EXPRESS INTERNATIONAL DELIVERY - OFF 50%!
          </p>
          <Link href="/shop">SHOP NOW</Link>
        </div>
      </div>

      <div id="header-row">
        <div className="container">
          <div id="header-wrapper">
            <div id="header-mobile">
              <i className="bi bi-list" id="btn-menu"></i>
            </div>

            <div id="header-left">
              <Link href="/" className="logo">LOGO</Link>
            </div>

            <div id="header-center">
              <nav id="navigation">
                <ul id="menu-list">
                  <li className="menu-list-item">
                    <Link
                      href="/"
                      className={`menu-link ${pathname === "/" ? "active" : ""}`}
                    >
                      Home <i className="bi bi-chevron-down"></i>
                    </Link>
                  </li>

                  <li className="menu-list-item megamenu-wrapper">
                    <Link href="/shop" className="menu-link">
                      Shop <i className="bi bi-chevron-down"></i>
                    </Link>
                  </li>

                  <li className="menu-list-item">
                    <Link href="/blog" className="menu-link">Blog</Link>
                  </li>

                  <li className="menu-list-item">
                    <Link href="/contact" className="menu-link">Contact</Link>
                  </li>
                </ul>
                <i className="bi bi-x-circle" id="close-sidebar"></i>
              </nav>
            </div>

            <div id="header-right">
              <div id="header-right-links">
                <div id="header-account">
                  {!isLogin ? (
                    <Link href="/auth">
                      <i className="bi bi-person"></i>
                    </Link>
                  ) : (
                    <Link href="/account">
                      <img src="/img/avatars/avatar2.jpg" alt="avatar" />
                    </Link>
                  )}
                </div>

                <div id="header-search">
                  <button id="search-button">
                    <i className="bi bi-search"></i>
                  </button>
                </div>

                <div id="header-heart">
                  <Link href="#">
                    <i className="bi bi-heart"></i>
                  </Link>
                </div>

                <div id="header-bag">
                  <Link href="/card" className="header-card-link">
                    <i className="bi bi-bag"></i>
                    <span className="header-card-count">
                      {cardItems.length}
                    </span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;