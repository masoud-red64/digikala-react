import React, { useEffect, useState } from "react";

import "./NotEmptyCart.css";
import CartProduct from "../CartProduct/CartProduct";
import {
  enToPersianNumber,
  formatNumberWithSeparators,
} from "../../../func/utils";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Product from "../../Product/Product";

export default function NotEmptyCart({
  products,
  removeCartProduct,
  sumPrice,
  setSumPrice,
  sumDiscount,
  setSumDiscount,
  totalPrice,
  setTotalPrice,
  moveProductToNextCart,
}) {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((products) => {
        setAllProducts(products);
      });
  }, []);

  return (
    <div className="not-empty-cart">
      <div className="not-empty-cart__content">
        <div className="row mt-4">
          <div className="col-12 col-lg-8">
            <div className="cart-digiplus">
              <div className="cart-digiplus__content d-flex flex-column align-items-start gap-0 flex-lg-row">
                <div className="cart-digiplus__content-right">
                  <img
                    src="./images/cart-page/digiplus-purple.svg"
                    alt="digiplus"
                    className="cart-digiplus__content-right-img"
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
                      مهلت بیشتر مرجوعی کالا تا ۳۰ روز (جز موبایل و کالای
                      بهداشتی)
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

            <div className="cart mt-4">
              <div className="cart__title">
                <p className="cart__title-text">سبد خرید شما</p>
                <svg
                  className="cart__title-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-2 4c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm2 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="cart__subtitle">
                <span className="cart__subtitle-count">
                  {enToPersianNumber(products.length)}
                </span>{" "}
                کالا
              </p>

              <div className="cart-content" id="cart-product-container">
                <div className="row">
                  {products.map((product) => (
                    <CartProduct
                      key={product.id}
                      {...product}
                      setSumPrice={setSumPrice}
                      setSumDiscount={setSumDiscount}
                      setTotalPrice={setTotalPrice}
                      sumDiscount={sumDiscount}
                      removeCartProduct={removeCartProduct}
                      moveProductToNextCart={moveProductToNextCart}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="" style={{ position: "sticky", top: "5rem" }}>
              <div className="order">
                <div className="order__products-price">
                  <p className="order__products-price-text">
                    قیمت کالاها
                    <span className="order__products-price-text-count">
                      {`(${enToPersianNumber(products.length)})`}
                    </span>
                  </p>
                  <p className="order__products-price-count">
                    <span>
                      {" "}
                      {formatNumberWithSeparators(
                        enToPersianNumber(Math.floor(sumPrice))
                      )}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 14"
                      style={{ height: "1.7rem" }}
                      fill="#5a5c7a"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </p>
                </div>
                <div className="order__total-cart">
                  <p className="order__total-cart-text">جمع سبد خرید</p>
                  <p className="order__total-cart-price">
                    <span>
                      {" "}
                      {formatNumberWithSeparators(
                        enToPersianNumber(Math.floor(totalPrice))
                      )}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 14"
                      style={{ height: "1.7rem" }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </p>
                </div>
                <div className="order__benefit">
                  <p className="order__benefit-text">سود شما از خرید</p>
                  <p className="order__benefit-price">
                    <span className="order__benefit-price-percent">
                      `(
                      {enToPersianNumber(
                        Math.floor((sumDiscount / sumPrice) * 100)
                      )}
                      %)`
                    </span>
                    <span className="order__benefit-price-price">
                      {formatNumberWithSeparators(
                        enToPersianNumber(Math.floor(sumDiscount))
                      )}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 14"
                      style={{ height: "1.7rem" }}
                      fill="#ef4056"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </p>
                </div>
                <button className="order__btn">ثبت سفارش</button>
                <div className="order__digiclub">
                  <p className="order__digiclub-text">
                    <img
                      className="order__digiclub-text-img"
                      src="./images/cart-page/club-point.svg"
                      alt=""
                    />
                    دیجی‌کلاب
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      style={{ height: "1.7rem" }}
                      fill="#9e9fb1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12zm18 0a8 8 0 11-16 0 8 8 0 0116 0zm-10-2h3v7h-2v-5h-1v-2zm3-2a1 1 0 10-2 0 1 1 0 002 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </p>
                  <p className="order__digiclub-score">
                    <span>۴۵</span>
                    امتیاز
                  </p>
                </div>
              </div>

              <p className="mt-4 text-muted">
                هزینه این سفارش هنوز پرداخت نشده‌ و در صورت اتمام موجودی، کالاها
                از سبد حذف می‌شوند
              </p>

              <div className="digi-pay">
                <div className="digi-pay__top d-flex align-items-center justify-content-between">
                  <div className="d-flex gap-4 align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      style={{ width: "24px", height: "24px", fill: "#0040ff" }}
                    >
                      <path d="M20 9h-2.5v2.5H20V9zM9 18.5h5v1H9v-1z"></path>
                      <path
                        fillRule="evenodd"
                        d="M11.428 1V0h-2v1H9a3 3 0 00-3 3v7H2a2 2 0 00-2 2v8a2 2 0 002 2h13a2 2 0 002-2v-2h4a3 3 0 003-3V4a3 3 0 00-3-3h-.43V0h-2v1h-7.142zM15 11H8V7h14v9a1 1 0 01-1 1h-4v-4a2 2 0 00-2-2zm0 2H2v1.75h13V13zm0 4.25H2V21h13v-3.75z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    الان بخر، بعدا پرداخت کن!
                    <svg
                      width="34"
                      height="14"
                      viewBox="0 0 34 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="34" height="14" rx="7" fill="#EF4056" />
                      <path
                        d="M8.70411 10.75L7.96206 9.99872L8.69483 9.24002L9.45534 9.99872L8.70411 10.75ZM10.3087 10.7463L9.56675 9.99501L10.2994 9.23538L11.06 9.99501L10.3087 10.7463ZM18.0812 9.87722L18.8696 9.08049L19.6765 9.88463L18.8789 10.6814L18.0812 9.87722ZM8.35926 8.62971C7.98826 8.62971 7.63579 8.47853 7.30188 8.17801C7.19058 8.29395 7.0701 8.39042 6.93097 8.46647C6.67127 8.61302 6.38368 8.68629 6.05905 8.68629C5.69732 8.68629 5.26145 8.62693 4.73277 8.50821C4.56582 8.47018 4.39883 8.42844 4.23188 8.38299L4.00928 8.32178L4 8.31807L4.37103 7.13085C4.4545 7.1559 4.55649 7.18464 4.67707 7.21804C4.82547 7.25606 4.97384 7.29038 5.11297 7.32006C5.50252 7.40354 5.8179 7.44527 6.05905 7.44527C6.24455 7.44527 6.37443 7.3887 6.43008 7.27462C6.4579 7.23937 6.46721 7.20228 6.46721 7.16517C6.46721 7.09932 6.43931 7.02697 6.38366 6.94813L5.36342 5.42701L5.06666 4.98273L6.10547 4.30379L6.1982 4.43643C6.26312 4.53753 6.34663 4.66923 6.45793 4.83155C6.75473 5.27397 7.10721 5.80729 7.52459 6.43243L7.69148 6.67545C7.78423 6.79695 7.86773 6.90268 7.94193 6.99357C8.16453 7.25699 8.3408 7.3887 8.4521 7.3887H8.52626V7.38499L9.36261 7.3312C9.58521 7.3312 9.7429 7.30059 9.83565 7.2403C9.93767 7.18186 9.98408 7.08912 9.98408 6.96298C9.98408 6.92495 9.97479 6.8832 9.96551 6.83775L9.83565 6.13564C9.79855 5.9288 9.77075 5.7804 9.7522 5.69229L10.9394 5.33148C11.0136 5.68764 11.097 6.12729 11.1991 6.64762C11.2176 6.76913 11.2269 6.88599 11.2269 6.9973C11.2269 7.3414 11.1249 7.64934 10.9302 7.92295C10.6148 8.35796 10.0954 8.57592 9.38118 8.57592L8.35926 8.62971ZM16.4117 8.57498V8.57592H16.0593C15.6883 8.57592 15.3358 8.42473 14.9927 8.12422C14.8906 8.24016 14.7608 8.33662 14.6216 8.41268C14.3619 8.55923 14.0744 8.6325 13.7497 8.6325C13.3973 8.6325 12.9521 8.57314 12.4234 8.45442C12.2565 8.41639 12.0895 8.37464 11.9225 8.32919L11.7092 8.26798L11.7 8.26427L12.071 7.07706C12.1545 7.1021 12.2564 7.13085 12.3677 7.16424C12.5161 7.20227 12.6646 7.23659 12.8038 7.26627C13.1933 7.34974 13.5086 7.39148 13.7497 7.39148C13.9445 7.39148 14.0651 7.33491 14.13 7.22082C14.1486 7.18558 14.1579 7.14848 14.1579 7.11138C14.1579 7.04553 14.1301 6.97317 14.0744 6.89433L13.0541 5.37322L12.7573 4.92893L13.7961 4.25L13.8889 4.38264C13.9538 4.48374 14.0373 4.61544 14.1579 4.77775C14.4454 5.22018 14.7979 5.7535 15.2153 6.37864L15.3914 6.62165C15.4749 6.74316 15.5584 6.84888 15.6419 6.93978C15.8645 7.20319 16.0315 7.33491 16.1521 7.33491H16.2262V7.3312C17.2279 7.3312 17.9606 7.29595 18.4058 7.22453C18.9438 7.1392 19.4262 6.96019 19.8528 6.68936L18.8233 6.40183C18.4894 6.31001 18.276 6.26455 18.1925 6.26455C18.1276 6.26455 18.0627 6.30444 17.9978 6.38235C17.9329 6.4584 17.8865 6.56228 17.8587 6.69399L16.6528 6.37864C16.7734 5.92879 16.9868 5.58098 17.3022 5.33519C17.5711 5.12557 17.8586 5.01984 18.1647 5.01984C18.2389 5.01984 18.3224 5.02633 18.4058 5.03931C18.6099 5.06992 19.1293 5.19885 19.9548 5.42609C20.2424 5.50493 20.5392 5.58933 20.8638 5.68023C21.1142 5.7535 21.309 5.811 21.4481 5.85088L21.6429 6.94813C20.6597 7.66602 19.927 8.11031 19.4354 8.28004C18.8789 8.46925 17.8679 8.56756 16.4117 8.57498Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M27.289 4.7383C27.3097 4.68863 27.3557 4.65697 27.4067 4.65697C27.4573 4.65697 27.5033 4.68863 27.524 4.7383L28.1518 6.23028C28.2189 6.38986 28.3422 6.51932 28.4983 6.5942L29.8853 7.25964C29.9317 7.28197 29.9613 7.33097 29.9613 7.38497C29.9613 7.4393 29.9317 7.4883 29.8853 7.51063L28.4983 8.17607C28.3422 8.25095 28.2189 8.38041 28.1518 8.53999L27.524 10.032C27.5033 10.0816 27.4573 10.1133 27.4067 10.1133C27.3557 10.1133 27.3097 10.0816 27.289 10.032L26.6612 8.53999C26.5941 8.38041 26.4708 8.25095 26.3147 8.17607L24.9277 7.51063C24.8817 7.4883 24.8517 7.4393 24.8517 7.38497C24.8517 7.33097 24.8817 7.28197 24.9277 7.25964L26.3147 6.5942C26.4708 6.51932 26.5941 6.38986 26.6612 6.23028L27.289 4.7383ZM25.2177 8.40297C25.224 8.38897 25.2377 8.37997 25.253 8.37997C25.2683 8.37997 25.282 8.38897 25.2883 8.40297L25.3983 8.64859C25.4692 8.80688 25.5957 8.93366 25.7538 9.00491L25.998 9.11497C26.012 9.1213 26.0207 9.13497 26.0207 9.1503C26.0207 9.16564 26.012 9.17964 25.998 9.18597L25.7537 9.29607C25.5956 9.3673 25.4692 9.49401 25.3983 9.65222L25.2883 9.89764C25.282 9.91164 25.2683 9.92063 25.253 9.92063C25.2377 9.92063 25.224 9.91164 25.2177 9.89764L25.1077 9.65222C25.0368 9.49401 24.9104 9.3673 24.7523 9.29607L24.508 9.18597C24.4943 9.17964 24.4853 9.16564 24.4853 9.1503C24.4853 9.13497 24.4943 9.1213 24.508 9.11497L24.7522 9.00491C24.9104 8.93366 25.0368 8.80688 25.1077 8.64859L25.2177 8.40297ZM29.5297 4.8723C29.5357 4.85863 29.5497 4.84963 29.565 4.84963C29.58 4.84963 29.594 4.85863 29.6003 4.8723L29.71 5.11765C29.7809 5.2761 29.9074 5.40303 30.0657 5.47434L30.3097 5.5843C30.3237 5.59063 30.3327 5.60463 30.3327 5.61997C30.3327 5.63497 30.3237 5.64897 30.3097 5.6553L30.0657 5.76527C29.9074 5.83658 29.7809 5.9635 29.71 6.12195L29.6003 6.3673C29.594 6.3813 29.58 6.3903 29.565 6.3903C29.5497 6.3903 29.5357 6.3813 29.5297 6.3673L29.4197 6.12168C29.3488 5.96339 29.2224 5.83661 29.0642 5.76536L28.82 5.6553C28.806 5.64897 28.797 5.63497 28.797 5.61997C28.797 5.60463 28.806 5.59063 28.82 5.5843L29.0642 5.47424C29.2224 5.40299 29.3488 5.27621 29.4197 5.11793L29.5297 4.8723ZM24.859 3.92297C24.869 3.90097 24.8917 3.88663 24.9163 3.88663C24.9413 3.88663 24.9637 3.90097 24.974 3.92297L25.2198 4.45638C25.2923 4.61374 25.42 4.73906 25.5786 4.80865L26.1297 5.0503C26.1523 5.05997 26.167 5.08197 26.167 5.1063C26.167 5.13063 26.1523 5.15263 26.1297 5.1623L25.5786 5.40396C25.42 5.47354 25.2923 5.59887 25.2198 5.75622L24.974 6.28964C24.9637 6.31164 24.9413 6.32597 24.9163 6.32597C24.8917 6.32597 24.869 6.31164 24.859 6.28964L24.6132 5.75622C24.5407 5.59887 24.4131 5.47354 24.2544 5.40396L23.7033 5.1623C23.6807 5.15263 23.666 5.13063 23.666 5.1063C23.666 5.08197 23.6807 5.05997 23.7033 5.0503L24.2544 4.80865C24.4131 4.73906 24.5407 4.61374 24.6132 4.45638L24.859 3.92297Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    style={{ width: "24px", height: "24px", fill: "#9e9fb1" }}
                  >
                    <path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path>
                  </svg>
                </div>
                <div className="digi-pay__bottom">
                  با اعتبار دیجی‌پی الان بخرید، ابتدای ماهِ بعد بپردازید
                </div>
              </div>

              <div className="send-free-digiplus mt-4">
                <p className="fs-4" style={{ color: "#a6358a" }}>
                  <svg
                    id="plus"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    style={{ width: "20px", height: "20px", fill: "#a6358a" }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M20.362 13.877a.738.738 0 00.638-.732v-2.29l-.008-.11a.738.738 0 00-.63-.622l-.1-.007-.16.005-.066-.001-.276.014a5.745 5.745 0 01-4.215-1.68 5.748 5.748 0 01-1.665-4.492L13.88 3.9l.01-.002v-.159l-.008-.11a.739.739 0 00-.63-.621L13.15 3h-2.302l-.1.007a.738.738 0 00-.638.731v.159l.01.002-.001.063a5.748 5.748 0 01-1.665 4.492 5.746 5.746 0 01-4.491 1.666h-.067l-.16-.004-.1.007a.738.738 0 00-.637.732v2.29l.008.11a.738.738 0 00.63.622l.1.007.16-.005.066.001.276-.014a5.745 5.745 0 014.215 1.68 5.748 5.748 0 011.665 4.492l.001.063-.01.002v.159l.008.11a.739.739 0 00.63.621l.1.007h2.302l.1-.007a.738.738 0 00.638-.731v-.159l-.01-.002.001-.063a5.748 5.748 0 011.665-4.492 5.746 5.746 0 014.491-1.666h.067l.16.004.1-.007zM12.06 17.88l-.056.266-.003-.007-.003.014-.056-.273-.081-.322a7.734 7.734 0 00-5.715-5.495L5.835 12l.31-.063a7.737 7.737 0 005.796-5.816l.054-.264.005.004.003-.014.056.273.081.322a7.733 7.733 0 005.715 5.495l.31.063-.31.063a7.737 7.737 0 00-5.796 5.816z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  ارسال <span className="fw-bold">رایگان</span> سفارش‌ها برای
                  اعضای دیجی‌پلاس
                </p>
                <p className="fs-5 mt-4">
                  ۳۹ هزارتومان هزینه ارسال به سراسر ایران برای کاربران غیر
                  دیجی‌پلاس
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="same-product-for-buy">
        <p className="same-product-for-buy__title">
          خریداران این محصولات، محصولات زیر را هم خریده‌اند
        </p>

        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={2}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper same-product-for-buy__swiper"
        >
          {allProducts.slice(0, 5).map((product) => (
            <SwiperSlide key={product.id}>
              <Product {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="recent-visits">
        <p className="recent-visits__title">بازدیدهای اخیر</p>

        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={2}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper same-product-for-buy__swiper"
        >
          {allProducts.slice(20, 25).map((product) => (
            <SwiperSlide key={product.id}>
              <Product {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
