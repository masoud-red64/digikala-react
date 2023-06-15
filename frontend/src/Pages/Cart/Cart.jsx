import React, { useState } from "react";
import "./Cart.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import NotEmptyCart from "../../Components/CartPage/NotEmptyCart/NotEmptyCart";
import EmptyCart from "../../Components/CartPage/EmptyCart/EmptyCart";
import EmptyNextCart from "../../Components/CartPage/EmptyNextCart/EmptyNextCart";
import NotEmptyNextCart from "../../Components/CartPage/NotEmptyNextCart/NotEmptyNextCart";

export default function Cart() {
  const [isShowNotEmptyCart, setIsShowNotEmptyCart] = useState(false);
  const [isShowNotEmptyNextCart, setIsShowNotEmptyNextCart] = useState(false);
  const [isShowEmptyCart, setIsShowEmptyCart] = useState(true);
  const [isShowEmptyNextCart, setIsShowEmptyNextCart] = useState(false);
  const [navbarTitle, setNavbarTitle] = useState("cart");

  return (
    <>
      <Header />

      <div className="main">
        <div className="container">
          <div className="cart-navbar">
            <ul className="cart-navbar__list">
              <li
                className={`cart-navbar__item ${
                  navbarTitle === "cart" ? "cart-navbar__item--active" : ""
                }`}
                onClick={() => {
                  setNavbarTitle("cart");
                  setIsShowEmptyCart(true);
                  setIsShowEmptyNextCart(false);
                }}
              >
                سبد خرید
                <span className="cart-navbar__item-cart-count">۱</span>
              </li>
              <li
                className={`cart-navbar__item ${
                  navbarTitle === "next-cart" ? "cart-navbar__item--active" : ""
                }`}
                onClick={() => {
                  setNavbarTitle("next-cart");
                  setIsShowEmptyCart(false);
                  setIsShowEmptyNextCart(true);
                }}
              >
                خرید بعدی
                <span className="cart-navbar__item-next-cart-count">۱</span>
              </li>
            </ul>
          </div>
          {isShowNotEmptyCart && <NotEmptyCart />}
          {isShowEmptyCart && <EmptyCart />}
          {isShowNotEmptyNextCart && <NotEmptyNextCart />}
          {isShowEmptyNextCart && <EmptyNextCart />}
        </div>
      </div>

      <Footer />
    </>
  );
}
