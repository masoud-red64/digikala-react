import React, { useState } from "react";
import "./Cart.css";
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import NotEmptyCart from "../../Components/CartPage/NotEmptyCart/NotEmptyCart";
import EmptyCart from "../../Components/CartPage/EmptyCart/EmptyCart";
import EmptyNextCart from "../../Components/CartPage/EmptyNextCart/EmptyNextCart";
import NotEmptyNextCart from "../../Components/CartPage/NotEmptyNextCart/NotEmptyNextCart";

export default function Cart() {
  return (
   <>
   <Header/>
   
   <div className="main">
      <div className="container">
        <div className="cart-navbar">
          <ul className="cart-navbar__list">
            <li
              className="cart-navbar__item cart-navbar__item--active"
              data-nav-cart="cart"
            >
              سبد خرید
              <span className="cart-navbar__item-cart-count">۱</span>
            </li>
            <li className="cart-navbar__item" data-nav-cart="next-cart">
              خرید بعدی
              <span className="cart-navbar__item-next-cart-count">۱</span>
            </li>
          </ul>
        </div>
        <EmptyCart />
        <NotEmptyCart />
        <EmptyNextCart />
        <NotEmptyNextCart />
      </div>
    </div>
   
   <Footer/>
   </>
  );
}
