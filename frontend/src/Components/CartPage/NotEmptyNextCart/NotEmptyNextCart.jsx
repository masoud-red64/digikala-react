import React from "react";

import "./NotEmptyNextCart.css";
import NextCartProduct from "../NextCartProduct/NextCartProduct";

export default function NotEmptyNextCart({ products }) {
  return (
    <div className="not-empty-next-cart">
      <div className="row mt-4">
        <div className="col-12 col-lg-8">
          <div className="next-cart mt-4">
            <div className="next-cart__title">
              <p className="next-cart__title-text">لیست خرید بعدی شما</p>
              <div className="next-cart-content__next-buy">
                <p className="next-cart-content__next-buy-text">
                  انتقال همه به سبد خرید
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#19bfd3"
                    style={{ width: "2rem", height: "2rem" }}
                  >
                    <path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path>
                  </svg>
                </p>
              </div>
            </div>
            <p className="next-cart__subtitle">
              <span className="next-cart__subtitle-count">۳</span> کالا
            </p>
            <div id="next-cart-product-container">
              <div className="next-cart-content">
                <div className="row">
                  {products.map((product) => (
                    <NextCartProduct key={product.id} {...product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-none d-lg-block col-lg-4">
          <div className="" style={{ position: "sticky", top: "5rem" }}>
            <div className="what-is-next-cart">
              <p className="what-is-next-cart__title">لیست خرید بعدی چیست؟</p>
              <p className="what-is-next-cart__desc">
                شما می‌توانید محصولاتی که به سبد خرید خود افزوده اید و موقتا قصد
                خرید آن‌ها را ندارید، در لیست خرید بعدی خود قرار داده و هر زمان
                مایل بودید آن‌ها را مجدداً به سبد خرید اضافه کرده و خرید آن‌ها
                را تکمیل کنید.
              </p>
              <p className="what-is-next-cart__text">
                <span className="what-is-next-cart__product-count">۱ کالا</span>
                در لیست خرید بعدی شماست
              </p>
              <button className="what-is-next-cart__add-all-to-cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style={{ width: "20px", height: "20px", fill: " #ef4056" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M0 7.014h6.286L5 8.3l1.414 1.414 3-3a1 1 0 000-1.414l-3-3L5 3.714l1.3 1.3H0v2zM12 7V5h6V4a1 1 0 011-1h3v2h-2v11a1 1 0 01-1 1H4a1 1 0 01-.995-.9l-.71-7.097 2.01-.005.6 6.002H18V7h-6zM5 22a2 2 0 110-4 2 2 0 010 4zm13 0a2 2 0 110-4 2 2 0 010 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                انتقال همه به سبد خرید
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
