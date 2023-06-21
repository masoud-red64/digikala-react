import React from "react";

import "./EmptyNextCart.css";

export default function EmptyNextCart() {
  return (
    <div className="empty-next-cart">
      <div className="empty-next-cart__content">
        <img
          src="./images/cart-page/empty-sfl.png"
          alt="empty cart"
          className="empty-next-cart__content-img"
          loading="lazy"
        />
        <p className="empty-next-cart__content-title">
          لیست خرید بعدی شما خالی است!
        </p>
        <p className="empty-next-cart__content-text">
          شما می‌توانید محصولاتی که به سبد خرید خود افزوده‌اید و فعلا قصد خرید
          آن‌ها را ندارید، در لیست خرید بعدی قرار داده و هر زمان مایل بودید
          آن‌ها را به سبد خرید اضافه کرده و خرید آن‌ها را تکمیل کنید.
        </p>
      </div>
    </div>
  );
}
