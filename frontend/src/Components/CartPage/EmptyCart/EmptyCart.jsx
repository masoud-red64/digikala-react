import React from 'react'

import './EmptyCart.css'

export default function EmptyCart() {
  return (
    <div className="empty-cart">
    <div className="cart-digiplus">
      <div
        className="cart-digiplus__content d-flex flex-column align-items-start gap-0 flex-lg-row"
      >
        <div className="cart-digiplus__content-right">
          <img
            src="./images/cart-page/digiplus-purple.svg"
            alt="digiplus"
            className="cart-digiplus__content-right-img"
            loading='lazy'
          />
          <p className="cart-digiplus__content-right-title">
            خدمات ویژه با اشتراک دیجی‌پلاس
          </p>
        </div>
        <div className="cart-digiplus__content-left mb-3 mb-lg-0">
          <ul className="cart-digiplus__content-left-list">
            <li className="cart-digiplus__content-left-item">
              ارسال رایگان این سفارش و ۳ سفارش دیگر (در هرماه اشتراک)
            </li>
            <li className="cart-digiplus__content-left-item">
              مهلت بیشتر مرجوعی کالا تا ۳۰ روز (جز موبایل و کالای بهداشتی)
            </li>
          </ul>
        </div>
      </div>
      <button className="cart-digiplus-btn">
        دریافت این خدمات ویژه
        <svg
          className="cart-digiplus-btn-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          id="arrow"
        >
          <path
            fill="#134563"
            d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
          ></path>
        </svg>
      </button>
    </div>

    <div className="empty-cart__content">
      <img
        src="./images/cart-page/empty-cart.svg"
        alt="empty cart"
        className="empty-cart__content-img"
        loading='lazy'
      />
      <p className="empty-cart__content-title">سبد خرید شما خالی است!</p>
      <p className="empty-cart__content-text">
        می‌توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید:
      </p>
    </div>
  </div>
  )
}
