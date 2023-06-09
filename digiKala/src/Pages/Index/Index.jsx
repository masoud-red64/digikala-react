import React from "react";
import Header from "../../Components/Header/Header";

import Footer from "../../Components/Footer/Footer";
import TopSwiperJs from "../../Components/TopSwiper/TopSwiperJs";
import Services from "../../Components/Services/Services";
import SuggestSwiper from "../../Components/SuggestSwiper/SuggestSwiper";
import "./Index.css";
import CategoryBanner from "../../Components/CategoryBanner/CategoryBanner";
import Categories from "../../Components/Categoreis/Categories";
import SuggestCategoriesSwiper from "../../Components/SuggestCategoriesSwiper/SuggestCategoriesSwiper";
import PopularBrandSwiper from "../../Components/PopularBrandSwiper/PopularBrandSwiper";
import BaseVisitedCategories from "../../Components/BaseVisitedCategories/BaseVisitedCategories";

export default function Index() {
  return (
    <>
      <Header />
      <div className="main">
        <TopSwiperJs />

        <div className="container">
          <Services />
          <SuggestSwiper />
          <section className="supermarket-amazing">
            <div className="supermarket-amazing__right">
              <div className="supermarket-amazing__right-title">
                <img
                  src="./images/supermarket-amazing/fresh.png"
                  alt="box"
                  className="supermarket-amazing__right-title-box-img"
                />
                <img
                  src="./images/supermarket-amazing/text.svg"
                  alt="text"
                  className="supermarket-amazing__right-title-text-img"
                />
              </div>
              <div
                className="supermarket-amazing__right-products"
                id="supermarket-products-container"
              >
                <a href="#" className="supermarket-amazing__right-product">
                  <img
                    src="./images/supermarket-amazing/product2.webp"
                    alt="product"
                    className="supermarket-amazing__right-product-img"
                  />
                  <p className="discount-percent supermarket-amazing__right-product-discount">
                    ۲۵
                  </p>
                </a>
                <a href="#" className="supermarket-amazing__right-product">
                  <img
                    src="./images/supermarket-amazing/product2.webp"
                    alt="product"
                    className="supermarket-amazing__right-product-img"
                  />
                  <p className="discount-percent supermarket-amazing__right-product-discount">
                    ۲۵
                  </p>
                </a>
                <a href="#" className="supermarket-amazing__right-product">
                  <img
                    src="./images/supermarket-amazing/product3.webp"
                    alt="product"
                    className="supermarket-amazing__right-product-img"
                  />
                  <p className="discount-percent supermarket-amazing__right-product-discount">
                    ۲۳
                  </p>
                </a>
                <a href="#" className="supermarket-amazing__right-product">
                  <img
                    src="./images/supermarket-amazing/product4.webp"
                    alt="product"
                    className="supermarket-amazing__right-product-img"
                  />
                  <p className="discount-percent supermarket-amazing__right-product-discount">
                    ۴۴
                  </p>
                </a>
              </div>
            </div>
            <a
              href="main.html?shortname=supermarket"
              className="supermarket-left"
            >
              <p className="supermarket-left__text">بیش از ۹۰ کالا</p>
              <svg
                className="supermarket-left__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                id="arrow-left"
              >
                <rect width="256" height="256" fill="none"></rect>
                <line
                  x1="216"
                  x2="40"
                  y1="128"
                  y2="128"
                  fill="none"
                  stroke="#77c74f"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></line>
                <polyline
                  fill="none"
                  stroke="#77c74f"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                  points="112 56 40 128 112 200"
                ></polyline>
              </svg>
            </a>
          </section>
          <CategoryBanner />
          <Categories />
          <SuggestCategoriesSwiper />
          <PopularBrandSwiper />
          <BaseVisitedCategories />
        </div>
      </div>
      <Footer />
    </>
  );
}
