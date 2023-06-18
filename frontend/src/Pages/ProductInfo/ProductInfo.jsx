import React, { useEffect, useRef, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

import "./ProductInfo.css";
import ProductImg from "../../Components/ProductInfoPage/ProductImg/ProductImg";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import SameProducts from "../../Components/ProductInfoPage/SameProducts/SameProducts";
import CommentsDesktop from "../../Components/ProductInfoPage/CommentsDesktop/CommentsDesktop";
import CommentsMobile from "../../Components/ProductInfoPage/CommentsMobile/CommentsMobile";
import { useParams } from "react-router-dom";
import { enToPersianNumber } from "../../../../../../../DigiKala/frontend/js/funcs/utils";
import { formatNumberWithSeparators } from "../../../../../../../DigiKala/frontend/js/funcs/utils";

export default function ProductInfo() {
  const [isShowMoreSpecifications, setIsShowMoreSpecifications] =
    useState(false);
  const [showActiveNavbar, setShowActiveNavbar] = useState("specifications");
  const [productInfo, setProductInfo] = useState({});
  const [categoryID, setCategoryID] = useState(null);
  const [mainID, setMainID] = useState(null);
  const [mainInfo, setMainInfo] = useState({});
  const [categoryInfo, setCategoryInfo] = useState({});
  const [colorTitle, setColorTitle] = useState("سبز");
  const [sizeTitle, setSizeTitle] = useState("31");
  const [productImages, setProductImages] = useState([]);
  const [productFeatures, setProductFeatures] = useState([]);
  const [allSameProducts, setAllSameProducts] = useState([]);
  const [comments, setComments] = useState([]);
  const [lengthOfQuestionTextArea, setLengthOfQuestionTextArea] = useState("0");

  const { shortName } = useParams();

  const specifications = useRef();
  const commentsDesktop = useRef();
  const commentsMobile = useRef();
  const questions = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const observer = new IntersectionObserver(
        (allSection) => {
          allSection.map((section) => {
            if (section.isIntersecting) {
              if (section.target.id === "specifications") {
                setShowActiveNavbar("specifications");
              } else if (section.target.id === "commentsDesktop") {
                setShowActiveNavbar("commentsDesktop");
              } else if (section.target.id === "commentsMobile") {
                setShowActiveNavbar("commentsMobile");
              } else if (section.target.id === "questions") {
                setShowActiveNavbar("questions");
              }
            }
          });
        },
        {
          threshold: 0.3, // 50% of section visibility => isIntersecting is true
        }
      );
      [
        specifications.current,
        commentsDesktop.current,
        commentsMobile.current,
        questions.current,
      ].forEach((section) => {
        observer.observe(section);
      });
    });
    return () => window.removeEventListener("scroll", () => {});
  }, []);

  useEffect(() => {
    getProductInfos();
  }, [mainID, shortName]);
  useEffect(() => {
    getMainCategory();
    getTargetMain();
    getProductImages();
    getProductFeatures();
    getSameProducts();
    getAllComments();
  }, [productInfo]);

  function getProductInfos() {
    fetch(`http://localhost:3000/api/products/${shortName}`)
      .then((res) => res.json())
      .then((product) => {
        setProductInfo(product[0]);
        setCategoryID(product[0].categoryID);
        setMainID(product[0].mainID);
      });
  }

  function getMainCategory() {
    fetch("http://localhost:3000/api/categories")
      .then((res) => res.json())
      .then((categories) => {
        let mainCategory = categories.filter(
          (category) => category.id === categoryID
        );
        setCategoryInfo(mainCategory[0]);
      });
  }

  function getTargetMain() {
    fetch("http://localhost:3000/api/main")
      .then((res) => res.json())
      .then((mains) => {
        let targetMain = mains.filter((main) => main.id === mainID);
        setMainInfo(targetMain[0]);
      });
  }

  function getProductImages() {
    fetch(`http://localhost:3000/api/productImg/productID/${productInfo.id}`)
      .then((res) => res.json())
      .then((productImages) => {
        setProductImages(productImages);
      });
  }

  function getProductFeatures() {
    fetch(
      `http://localhost:3000/api/productFeature/productID/${productInfo.id}`
    )
      .then((res) => res.json())
      .then((features) => {
        setProductFeatures(features);
      });
  }

  function getSameProducts() {
    fetch(`http://localhost:3000/api/products/categoryID/${categoryID}`)
      .then((res) => res.json())
      .then((products) => {
        // Get All Same Products Without Product That We Show In Page
        let productsExceptThis = products.filter(
          (product) => product.id !== productInfo.id
        );
        setAllSameProducts(productsExceptThis);
      });
  }

  function getAllComments() {
    fetch(`http://localhost:3000/api/comments/${productInfo.id}`)
      .then((res) => res.json())
      .then((comments) => {
        console.log(comments);
        setComments(comments);
      });
  }
  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <section className="product-top">
            <div className="product-top__right">
              <a href="#" className="product-top__right-link">
                دیجی کالا
              </a>
              <span className="mx-3">/</span>
              <a href="#" className="product-top__right-link">
                {mainInfo && mainInfo.title}
              </a>
              <span className="mx-3">/</span>
              <a href="#" className="product-top__right-link">
                {categoryInfo && categoryInfo.title}
              </a>
              <span className="mx-3">/</span>
              <a href="#" className="product-top__right-link">
                {productInfo.title}
              </a>
            </div>
            <div className="product-top__left">
              <p className="product-top__left-text">
                ثبت آگهی در پیندو
                <svg
                  id="ads"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style={{ width: "18px", height: "18px", fill: "#9e9fb1" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M20.198 1.408l2.779 15.757-4.803.847-2.737-.302a4 4 0 01-7.972-.207l-.006-.205-.005-.442-4.694.827-1.737-9.848 4.782-.843 9.591-4.737 4.802-.847zM9.456 17.05l.003.238a2 2 0 003.99.203l-3.993-.441zm7.15-12.979l1.97-.346 2.084 11.818-1.97.347L16.606 4.07zm-1.898.753L7.236 8.516l1.129 6.402 8.284.913-1.94-11.007zM3.34 9.458l1.97-.348 1.042 5.91-1.97.346L3.34 9.458z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </p>
              <p className="product-top__left-text">
                فروش در دیجی کالا
                <svg
                  id="seller"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style={{ width: "18px", height: "18px", fill: "#9e9fb1" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M19.5 3h-15a1 1 0 00-.959.715l-1.5 5.053A1 1 0 002 9.053V12a1 1 0 001 1h.006l.038 7.006A1 1 0 004.048 21l9.956-.035a1 1 0 00.996-1V13h4v8h2v-8a1 1 0 001-1V9.053a1 1 0 00-.041-.285l-1.5-5.053A1 1 0 0019.5 3zm.5 8V9.198L18.754 5H5.246L4 9.198V11h16zm-7 2H5.006l.033 5.997L13 18.968V13z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </p>
            </div>
          </section>

          <section className="product-content">
            <div className="row">
              <div className="col-12 col-lg-4">
                <div className="product-content__right">
                  {productInfo.wonder ? (
                    <div className="product-content__right-suggest">
                      <div className="">
                        <img
                          src="/images/product-page/IncredibleOffer.svg"
                          alt="IncredibleOffer"
                          width="100"
                          height="14"
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                      <p className="timer">
                        {enToPersianNumber(productInfo.time)}
                      </p>
                    </div>
                  ) : null}
                  <div className="product-content__right-photo-and-option flex-column flex-lg-row">
                    <ul className="product-content__right-option-list flex-row flex-lg-column justify-content-end justify-content-lg-start">
                      <li className="product-content__right-option-item">
                        <svg
                          id="favoriteOff"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          style={{
                            width: "22px",
                            height: "22px",
                            fill: "#3f4064",
                          }}
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.5 3a6 6 0 00-3.844 10.607l6.982 6.492a2 2 0 002.724 0l6.993-6.503C21.685 12.504 22.5 10.818 22.5 9A6 6 0 0012 5.03 5.995 5.995 0 007.5 3zm-2.502 9.124l-.044-.039a4 4 0 116.147-4.83 1 1 0 001.799 0A4 4 0 0120.5 9a3.99 3.99 0 01-1.461 3.091L12 18.634l-7.002-6.51z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </li>
                      <li className="product-content__right-option-item">
                        <svg
                          id="share"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          style={{
                            width: "22px",
                            height: "22px",
                            fill: "#3f4064",
                          }}
                        >
                          <path d="M15.917 14.16l-6.94 3.47a3 3 0 11-.895-1.789l6.94-3.47a3.021 3.021 0 010-.742l-6.94-3.47a3 3 0 11.895-1.789l6.94 3.47a3 3 0 110 4.319z"></path>
                        </svg>
                      </li>
                      <li className="product-content__right-option-item">
                        <svg
                          id="notificationActiveOutline"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          style={{
                            width: "22px",
                            height: "22px",
                            fill: "#3f4064",
                          }}
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.667 13.886A2.001 2.001 0 005 12V9a7 7 0 0114 0v3c0 .854.54 1.606 1.333 1.886a1 1 0 01.667.943V19a1 1 0 01-1 1H4a1 1 0 01-1-1v-4.17a1 1 0 01.667-.944zM19 18v-2.535A4 4 0 0117 12V9A5 5 0 007 9v3a4 4 0 01-2 3.465V18h14zm-7 5c-1.385 0-2.563-.835-3-2h6c-.437 1.165-1.615 2-3 2zm6.02-19.262l1.504-1.318a9.964 9.964 0 012.477 6.589h-2a7.964 7.964 0 00-1.981-5.27zM4 9.008c0-1.966.711-3.82 1.981-5.27L4.477 2.42A9.964 9.964 0 002 9.009h2z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </li>
                      <li className="product-content__right-option-item">
                        <svg
                          id="priceChart"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          style={{
                            width: "22px",
                            height: "22px",
                            fill: "#3f4064",
                          }}
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 18V4H2v15a1 1 0 001 1h19v-2H4zM22 8a2 2 0 10-3.933.517l-2.55 2.55a2.003 2.003 0 00-1.034 0l-1.55-1.55A2.003 2.003 0 0011 7a2 2 0 00-1.933 2.517l-1.55 1.55A2.003 2.003 0 005 13a2 2 0 103.933-.517l1.55-1.55a2.003 2.003 0 001.035 0l1.55 1.55A2.003 2.003 0 0015 15a2 2 0 001.933-2.517l2.55-2.55A2.002 2.002 0 0022 8z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </li>
                      <li className="product-content__right-option-item">
                        <svg
                          id="compare"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          style={{
                            width: "22px",
                            height: "22px",
                            fill: "#3f4064",
                          }}
                        >
                          <path
                            fillRule="evenodd"
                            d="M13 2h-2v2H4a2 2 0 00-2 2v12a2 2 0 002 2h7v2h2V2zm1 16v2h6a2 2 0 002-2V6a2 2 0 00-2-2h-6v2h6v12h-6z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </li>
                      <li className="product-content__right-option-item">
                        <svg
                          id="list"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          style={{
                            width: "22px",
                            height: "22px",
                            fill: "#3f4064",
                          }}
                        >
                          <path
                            fillRule="evenodd"
                            d="M15 6v2H5V6h10zm0 7v-2H5v2h10zm0 5v-2H5v2h10zm5-5v-2h-3v2h3zm0 3v2h-3v-2h3zm0-8V6h-3v2h3z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </li>
                    </ul>
                    <div className="product-content__right-photo">
                      <img
                        src={`/img/${productInfo.img}`}
                        style={{
                          width: "100%",
                          height: "auto",
                          display: "block",
                          pointerEvents: "none",
                        }}
                        alt=""
                        className="product-content__right-photo-img"
                      />
                    </div>
                  </div>

                  {productImages.length ? (
                    <ul
                      className="product-content__right-product-photos-list"
                      id="product-images-container"
                    >
                      {productImages.slice(0, 1).map((img) => (
                        <li
                          key={img.id}
                          className="product-content__right-product-photos-item"
                        >
                          <img
                            src={`/img/${img.img}`}
                            alt=""
                            className="product-content__right-product-photos-img"
                            width="60"
                            height="60"
                          />
                          <svg
                            id="video"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={{
                              width: "20px",
                              height: "20px",
                              fill: "#3f4064",
                            }}
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 3c2.372 0 4.989.256 7.86.767l.712.13a2 2 0 011.562 1.46C22.711 7.57 23 9.785 23 12c0 1.994-.234 3.988-.704 5.991l-.162.651a2 2 0 01-1.562 1.46C17.425 20.7 14.568 21 12 21c-2.372 0-4.989-.256-7.86-.767l-.712-.13a2 2 0 01-1.562-1.46A26.229 26.229 0 011 12c0-1.994.234-3.988.704-5.991l.162-.651a2 2 0 011.562-1.46C6.575 3.3 9.432 3 12 3zm0 2c-2.435 0-5.169.287-8.2.863l-.152.615A24.091 24.091 0 003 12c0 2.044.267 4.09.8 6.137l.697.128C7.251 18.755 9.753 19 12 19c2.435 0 5.169-.287 8.2-.863l.152-.615A24.09 24.09 0 0021 12c0-2.044-.267-4.09-.8-6.137l-.697-.128C16.749 5.245 14.247 5 12 5zm4 7L9 8v8l7-4z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </li>
                      ))}
                      {productImages.slice(1).map((img) => (
                        <ProductImg key={img.id} img={img.img} />
                      ))}
                    </ul>
                  ) : null}

                  <div className="product-content__right-send-report">
                    <p className="product-content__right-send-report-text">
                      <svg
                        id="infoOutline"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        style={{
                          width: "18px",
                          height: "18px",
                          fill: "#81858b",
                        }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12zm18 0a8 8 0 11-16 0 8 8 0 0116 0zm-10-2h3v7h-2v-5h-1v-2zm3-2a1 1 0 10-2 0 1 1 0 002 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      گزارش نادرستی مشخصات
                    </p>
                    <p className="product-content__right-send-report-code">
                      DKP-4177659
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-5">
                <div className="product-content__center">
                  <div className="product-content__center-brand">
                    <p className="product-content__center-brand-text">
                      {mainInfo && mainInfo.title}
                    </p>
                    <span className="mx-2">/</span>
                    <p className="product-content__center-brand-text">
                      {categoryInfo && categoryInfo.title}
                    </p>
                  </div>
                  <div className="product-content__center-title">
                    {productInfo.title}
                  </div>

                  <div className="product-content__center-score-and-comment">
                    <div className="product-content__center-score">
                      <img
                        src="/images/product-page/star-yellow.png"
                        alt=""
                        className="product-content__center-score-img"
                        width="14"
                        height="14"
                        style={{ objectFit: "contain" }}
                      />
                      <p className="product-content__center-score-num">
                        {productInfo.score &&
                          enToPersianNumber(productInfo.score)}
                      </p>
                      <p className="product-content__center-score-people">
                        (۱۹)
                      </p>
                      <svg
                        id="dotOutline"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        style={{
                          width: "16px",
                          height: "16px",
                          fill: "#e0e0e6",
                        }}
                      >
                        <circle cx="8" cy="8" r="2"></circle>
                      </svg>
                    </div>
                    <div className="product-content__center-comment">
                      <a
                        href="#"
                        className="product-content__center-comment-text"
                      >
                        <span className="product-content__center-comment-number">
                          {enToPersianNumber(comments.length)}
                        </span>
                        دیدگاه
                      </a>
                    </div>
                  </div>
                  {productInfo.colorOrSize === "color" ? (
                    <div className="product-content__center-colors">
                      <h2 className="product-content__center-colors-title">
                        رنگ: <span>{colorTitle}</span>
                      </h2>
                      <div className="d-flex gap-3">
                        <div
                          className={`color-wrapper ${
                            colorTitle === "قرمز" ? "color-wrapper--active" : ""
                          }`}
                          onClick={() => setColorTitle("قرمز")}
                        >
                          <div className="color red">
                            <svg
                              id="done"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              style={{
                                width: "20px",
                                height: "20px",
                                fill: "#fff",
                              }}
                            >
                              <path d="M9.5 15.586l9.293-9.293 1.414 1.414-10 10a1 1 0 01-1.414 0l-4.5-4.5 1.414-1.414L9.5 15.586z"></path>
                            </svg>
                          </div>
                        </div>
                        <div
                          className={`color-wrapper ${
                            colorTitle === "سبز" ? "color-wrapper--active" : ""
                          }`}
                          onClick={() => setColorTitle("سبز")}
                        >
                          <div className="color green">
                            <svg
                              id="done"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              style={{
                                width: "20px",
                                height: "20px",
                                fill: "#fff",
                              }}
                            >
                              <path d="M9.5 15.586l9.293-9.293 1.414 1.414-10 10a1 1 0 01-1.414 0l-4.5-4.5 1.414-1.414L9.5 15.586z"></path>
                            </svg>
                          </div>
                        </div>
                        <div
                          className={`color-wrapper ${
                            colorTitle === "آبی" ? "color-wrapper--active" : ""
                          }`}
                          onClick={() => setColorTitle("آبی")}
                        >
                          <div className="color blue">
                            <svg
                              id="done"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              style={{
                                width: "20px",
                                height: "20px",
                                fill: "#fff",
                              }}
                            >
                              <path d="M9.5 15.586l9.293-9.293 1.414 1.414-10 10a1 1 0 01-1.414 0l-4.5-4.5 1.414-1.414L9.5 15.586z"></path>
                            </svg>
                          </div>
                        </div>
                        <div
                          className={`color-wrapper ${
                            colorTitle === "زرد" ? "color-wrapper--active" : ""
                          }`}
                          onClick={() => setColorTitle("زرد")}
                        >
                          <div className="color yellow">
                            <svg
                              id="done"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              style={{
                                width: "20px",
                                height: "20px",
                                fill: "#fff",
                              }}
                            >
                              <path d="M9.5 15.586l9.293-9.293 1.414 1.414-10 10a1 1 0 01-1.414 0l-4.5-4.5 1.414-1.414L9.5 15.586z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : productInfo.colorOrSize === "size" ? (
                    <div className="product-content__center-infos">
                      <p className="product-content__center-infos-size">
                        اندازه: {sizeTitle}
                      </p>
                      <div className="product-content__center-infos-select-size">
                        <select
                          name=""
                          id=""
                          className="product-content__center-infos-select"
                          onChange={(e) => setSizeTitle(e.target.value)}
                        >
                          <option value="31">۳۱</option>
                          <option value="32">۳۲</option>
                          <option value="33">۳۳</option>
                          <option value="34">۳۴</option>
                        </select>
                      </div>
                    </div>
                  ) : null}

                  <div className="product-content__center-attributes">
                    <p className="product-content__center-attributes-title">
                      ویژگی‌ها
                    </p>
                    <ul
                      className="product-content__center-attributes-list"
                      id="product-feature-container"
                    >
                      {productFeatures.map((feature) => (
                        <li
                          key={feature.id}
                          className="product-content__center-attributes-item"
                        >
                          <p className="product-content__center-attributes-item-key">
                            <svg
                              id="dotOutline"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 16 16"
                              style={{
                                width: "16px",
                                height: "16px",
                                fill: "#9e9fb1",
                              }}
                            >
                              <circle cx="8" cy="8" r="2"></circle>
                            </svg>
                            {feature.key} :
                          </p>
                          <p className="product-content__center-attributes-item-value">
                            {feature.value}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="send-free-digiplus mt-4">
                    <p className="fs-5" style={{ color: "#a6358a" }}>
                      <svg
                        id="plus"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        style={{
                          width: "18px",
                          height: "18px",
                          fill: "#a6358a",
                        }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M20.362 13.877a.738.738 0 00.638-.732v-2.29l-.008-.11a.738.738 0 00-.63-.622l-.1-.007-.16.005-.066-.001-.276.014a5.745 5.745 0 01-4.215-1.68 5.748 5.748 0 01-1.665-4.492L13.88 3.9l.01-.002v-.159l-.008-.11a.739.739 0 00-.63-.621L13.15 3h-2.302l-.1.007a.738.738 0 00-.638.731v.159l.01.002-.001.063a5.748 5.748 0 01-1.665 4.492 5.746 5.746 0 01-4.491 1.666h-.067l-.16-.004-.1.007a.738.738 0 00-.637.732v2.29l.008.11a.738.738 0 00.63.622l.1.007.16-.005.066.001.276-.014a5.745 5.745 0 014.215 1.68 5.748 5.748 0 011.665 4.492l.001.063-.01.002v.159l.008.11a.739.739 0 00.63.621l.1.007h2.302l.1-.007a.738.738 0 00.638-.731v-.159l-.01-.002.001-.063a5.748 5.748 0 011.665-4.492 5.746 5.746 0 014.491-1.666h.067l.16.004.1-.007zM12.06 17.88l-.056.266-.003-.007-.003.014-.056-.273-.081-.322a7.734 7.734 0 00-5.715-5.495L5.835 12l.31-.063a7.737 7.737 0 005.796-5.816l.054-.264.005.004.003-.014.056.273.081.322a7.733 7.733 0 005.715 5.495l.31.063-.31.063a7.737 7.737 0 00-5.796 5.816z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      ارسال <span className="fw-bold">رایگان</span> سفارش‌ها
                      برای اعضای دیجی‌پلاس
                    </p>
                    <p className="fs-5 mt-4">
                      ۳۹ هزارتومان هزینه ارسال به سراسر ایران برای کاربران غیر
                      دیجی‌پلاس
                    </p>
                  </div>

                  <div className="product-content__center-members-digiplus mt-3">
                    <div className="product-content__center-members-digiplus-head">
                      <p className="product-content__center-members-digiplus-head-text">
                        <svg
                          id="plus"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          style={{
                            width: "16px",
                            height: "16px",
                            fill: "#a6358a",
                          }}
                        >
                          <path
                            fillRule="evenodd"
                            d="M20.362 13.877a.738.738 0 00.638-.732v-2.29l-.008-.11a.738.738 0 00-.63-.622l-.1-.007-.16.005-.066-.001-.276.014a5.745 5.745 0 01-4.215-1.68 5.748 5.748 0 01-1.665-4.492L13.88 3.9l.01-.002v-.159l-.008-.11a.739.739 0 00-.63-.621L13.15 3h-2.302l-.1.007a.738.738 0 00-.638.731v.159l.01.002-.001.063a5.748 5.748 0 01-1.665 4.492 5.746 5.746 0 01-4.491 1.666h-.067l-.16-.004-.1.007a.738.738 0 00-.637.732v2.29l.008.11a.738.738 0 00.63.622l.1.007.16-.005.066.001.276-.014a5.745 5.745 0 014.215 1.68 5.748 5.748 0 011.665 4.492l.001.063-.01.002v.159l.008.11a.739.739 0 00.63.621l.1.007h2.302l.1-.007a.738.738 0 00.638-.731v-.159l-.01-.002.001-.063a5.748 5.748 0 011.665-4.492 5.746 5.746 0 014.491-1.666h.067l.16.004.1-.007zM12.06 17.88l-.056.266-.003-.007-.003.014-.056-.273-.081-.322a7.734 7.734 0 00-5.715-5.495L5.835 12l.31-.063a7.737 7.737 0 005.796-5.816l.054-.264.005.004.003-.014.056.273.081.322a7.733 7.733 0 005.715 5.495l.31.063-.31.063a7.737 7.737 0 00-5.796 5.816z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        ویژه اعضای دیجی‌پلاس
                      </p>
                      <svg
                        id="chevronLeft"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        style={{
                          width: "20px",
                          height: "20px",
                          fill: "#9e9fb1",
                        }}
                      >
                        <path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path>
                      </svg>
                    </div>
                    <p className="product-content__center-members-digiplus-text">
                      <svg
                        id="variationColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        style={{
                          width: "5px",
                          height: "5px",
                          fill: " #a6358a",
                        }}
                      >
                        <path d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10z"></path>
                        <path
                          stroke="#030A16"
                          strokeOpacity=".1"
                          d="M.5 10a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"
                        ></path>
                      </svg>
                      ارسال رایگان
                    </p>
                    <p className="product-content__center-members-digiplus-text">
                      <svg
                        id="variationColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        style={{
                          width: "5px",
                          height: "5px",
                          fill: " #a6358a",
                        }}
                      >
                        <path d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10z"></path>
                        <path
                          stroke="#030A16"
                          strokeOpacity=".1"
                          d="M.5 10a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"
                        ></path>
                      </svg>
                      ارسال فوری برای شهر تهران (رایگان)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                <div className="product-content__left">
                  <div className="product-content__left-infos">
                    <div className="product-content__left-seller">
                      <p className="product-content__left-seller-title">
                        فروشنده
                      </p>
                      <div className="product-content__left-seller-shop">
                        <div className="product-content__left-seller-shop-icons">
                          <svg
                            id="seller"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={{
                              width: "20px",
                              height: "20px",
                              fill: "#3f4064",
                            }}
                          >
                            <path
                              fillRule="evenodd"
                              d="M19.5 3h-15a1 1 0 00-.959.715l-1.5 5.053A1 1 0 002 9.053V12a1 1 0 001 1h.006l.038 7.006A1 1 0 004.048 21l9.956-.035a1 1 0 00.996-1V13h4v8h2v-8a1 1 0 001-1V9.053a1 1 0 00-.041-.285l-1.5-5.053A1 1 0 0019.5 3zm.5 8V9.198L18.754 5H5.246L4 9.198V11h16zm-7 2H5.006l.033 5.997L13 18.968V13z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <div className="product-content__left-seller-shop-verify-icon">
                            <svg
                              id="verifiedUser"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              style={{
                                width: "13px",
                                height: "13px",
                                fill: "#0081b9",
                              }}
                            >
                              <path
                                fillRule="evenodd"
                                d="M20.661 7l-.274 2.623a.347.347 0 00.065.24L22 12l-1.548 2.137a.347.347 0 00-.065.24L20.661 17l-2.41 1.073a.346.346 0 00-.177.176L17 20.661l-2.624-.274a.347.347 0 00-.24.065L12 22l-2.138-1.548a.345.345 0 00-.238-.065l-2.625.274-1.073-2.41a.348.348 0 00-.176-.177L3.339 17l.274-2.624a.349.349 0 00-.065-.24L2 12l1.548-2.137a.349.349 0 00.065-.24L3.339 7l2.41-1.073a.345.345 0 00.177-.176L7 3.339l2.625.274a.35.35 0 00.24-.065L12 2l2.137 1.548a.35.35 0 00.24.065L17 3.34l1.073 2.41a.348.348 0 00.176.177L20.661 7zM7.707 10.292l2.793 2.793 5.793-5.793 1.414 1.414-6.5 6.5a1 1 0 01-1.414 0l-3.5-3.5 1.414-1.414z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <a
                          href="#"
                          className="product-content__left-seller-shop-link"
                        >
                          سمفونی آبی
                        </a>
                        <p className="product-content__left-seller-shop-official">
                          منتخب
                        </p>
                      </div>
                      <p className="product-content__left-seller-performance">
                        عملکرد
                        <span className="product-content__left-seller-performance-level">
                          خوب
                        </span>
                      </p>
                    </div>

                    <div className="product-content__left-warranty">
                      <svg
                        id="guarantee"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        style={{
                          width: "20px",
                          height: "20px",
                          fill: "#3f4064",
                        }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.725 4.038l7-2a1 1 0 01.55 0l7 2A1 1 0 0120 5v7.938a8 8 0 01-4.03 6.946l-3.474 1.984a1 1 0 01-.992 0L8.03 19.884A8 8 0 014 12.938V5a1 1 0 01.725-.962zM6 5.754v7.184a6 6 0 003.023 5.21l2.977 1.7 2.977-1.7A6 6 0 0018 12.937V5.754L12 4.04 6 5.754zm9 2.539l-3.793 3.793-1.793-1.793L8 11.707l2.5 2.5a1 1 0 001.414 0l4.5-4.5L15 8.293z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      گارانتی اصالت و سلامت فیزیکی کالا
                    </div>

                    <div className="product-content__left-exist">
                      <div className="product-content__left-exist-head">
                        <div className="product-content__left-exist-head-title">
                          <svg
                            id="productAvailable"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={{
                              width: "20px",
                              height: "20px",
                              fill: "#19bfd3",
                            }}
                          >
                            <path
                              fillRule="evenodd"
                              d="M7 19H6a1 1 0 01-1-1V6a1 1 0 011-1h2v7h8V5h2a1 1 0 011 1v12a1 1 0 01-1 1h-1v2h1a3 3 0 003-3V6a3 3 0 00-3-3H6a3 3 0 00-3 3v12a3 3 0 003 3h1v-2zm3-9V5h4v5h-4zm-.293 7.793l1.755 1.755 3.795-4.217 1.486 1.338-4.5 5a1 1 0 01-1.45.038l-2.5-2.5 1.414-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          موجود در انبار دیجی‌کالا
                        </div>
                        <svg
                          id="chevronLeft"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          style={{
                            width: "20px",
                            height: "20px",
                            fill: "#9e9fb1",
                          }}
                        >
                          <path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path>
                        </svg>
                      </div>

                      <ul className="product-content__left-exist-send-list">
                        <li className="product-content__left-exist-send-item">
                          <svg
                            id="variationColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            style={{
                              width: "5px",
                              height: "5px",
                              fill: " #19bfd3",
                            }}
                          >
                            <path d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10z"></path>
                            <path
                              stroke="#030A16"
                              strokeOpacity=".1"
                              d="M.5 10a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"
                            ></path>
                          </svg>
                          <p className="product-content__left-exist-send-item-text">
                            <svg
                              id="deliveryExpress"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              style={{
                                width: "16px",
                                height: "16px",
                                fill: "#e6123d",
                              }}
                            >
                              <path
                                fillRule="evenodd"
                                d="M14.17 19H8.83a3.001 3.001 0 01-5.66 0H2a1 1 0 01-1-1v-7.333C1 8.097 3.033 6 5.556 6H9V5a1 1 0 011-1h12a1 1 0 011 1v13a1 1 0 01-1 1h-2.17a3.001 3.001 0 01-5.66 0zm0-2H11V6h10v11h-1.17a3.001 3.001 0 00-5.66 0zM9 17h-.17a3.001 3.001 0 00-5.66 0H3v-3h5v-2H3v-1.333C3 9.187 4.151 8 5.556 8H9v9zm-2 1a1 1 0 11-2 0 1 1 0 012 0zm10 1a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            ارسال دیجی‌کالا
                          </p>
                        </li>
                        <li className="product-content__left-exist-send-item">
                          <svg
                            id="variationColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            style={{
                              width: "5px",
                              height: "5px",
                              fill: " #19bfd3",
                            }}
                          >
                            <path d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10z"></path>
                            <path
                              stroke="#030A16"
                              strokeOpacity=".1"
                              d="M.5 10a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"
                            ></path>
                          </svg>
                          <p className="product-content__left-exist-send-item-text">
                            <svg
                              id="deliveryJet"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              style={{
                                width: "16px",
                                height: "16px",
                                fill: "#1028ff",
                              }}
                            >
                              <path
                                fillRule="evenodd"
                                d="M11.539 1.083l.224-.054a1 1 0 01.452-.006A6.098 6.098 0 0117 6.98v2.486l2.555 1.703a1 1 0 01.394.516l2 6a1 1 0 01-1.145 1.297L15.9 18H8.099l-4.903.98a1 1 0 01-1.145-1.296l2-6a1 1 0 01.394-.516L7 9.465V6.979a6.104 6.104 0 014.539-5.896zM7 11.868v4.312l-2.507.501 1.346-4.039L7 11.868zM15 10v6H9V6.979a4.099 4.099 0 012.839-3.9L12 3.03l.178.054A4.099 4.099 0 0115 6.98V10zm2 6.18l2.506.501-1.346-4.039-1.16-.773v4.311zM10 9a2 2 0 114 0 2 2 0 01-4 0zm0 13v-3H8v3h2zm6-3v3h-2v-3h2zm-3 4v-4h-2v4h2z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            ارسال دیجی‌کالا ارسال فوری (شهر تهران)
                          </p>
                        </li>
                      </ul>
                    </div>

                    <div className="product-content__left-point">
                      <img
                        src="/images/product-page/club-point.svg"
                        alt="point"
                        style={{ objectFit: "contain" }}
                        width="18"
                        height="18"
                      />
                      <p className="product-content__left-point-text">
                        <span>۱۰۵</span> امتیاز دیجی‌کلاب
                      </p>
                      <svg
                        id="infoOutline"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        style={{
                          width: "16px",
                          height: "16px",
                          fill: "#81858b",
                        }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12zm18 0a8 8 0 11-16 0 8 8 0 0116 0zm-10-2h3v7h-2v-5h-1v-2zm3-2a1 1 0 10-2 0 1 1 0 002 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>

                    <div className="d-none d-lg-block">
                      <div className="product-content__left-price">
                        <p className="product-content__left-price-text">
                          <svg
                            id="infoOutline"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={{
                              width: "16px",
                              height: "16px",
                              fill: "#81858b",
                            }}
                          >
                            <path
                              fillRule="evenodd"
                              d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12zm18 0a8 8 0 11-16 0 8 8 0 0116 0zm-10-2h3v7h-2v-5h-1v-2zm3-2a1 1 0 10-2 0 1 1 0 002 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          قیمت فروشنده
                        </p>
                        <div id="product-price-container">
                          {productInfo.off ? (
                            <div className="d-flex align-items-center gap-2">
                              <p className="product-content__left-price-discount">
                                {formatNumberWithSeparators(
                                  enToPersianNumber(productInfo.price)
                                )}
                              </p>
                              <p className="product-content__left-percent discount-percent">
                                {enToPersianNumber(productInfo.off)}
                              </p>
                            </div>
                          ) : null}
                          <p className="product-content__left-price-num">
                            <span>
                              {formatNumberWithSeparators(
                                enToPersianNumber(
                                  productInfo.price -
                                    (productInfo.price * productInfo.off) / 100
                                )
                              )}
                            </span>
                            <svg
                              id="toman"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 14 14"
                              style={{
                                width: "14px",
                                height: "14px",
                                fill: "#3f4064",
                              }}
                            >
                              <path
                                fillRule="evenodd"
                                d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </p>
                        </div>
                      </div>
                      {productInfo.inventoryCount < 10 ? (
                        <div className="product-content__left-remain">
                          تنها{" "}
                          <span>
                            {enToPersianNumber(productInfo.inventoryCount)}
                          </span>{" "}
                          عدد در انبار دیجی‌کالا باقی مانده
                        </div>
                      ) : null}
                      <div className="product-content__left-add">
                        <button className="product-content__left-add-btn">
                          افزودن به سبد خرید
                        </button>
                      </div>
                    </div>

                    <div className="product-content__left-show-price-mobile position-fixed bottom-0 start-0 bg-white w-100">
                      <div className="d-flex d-lg-none align-items-center justify-content-between">
                        <div className="product-content__left-remain">
                          تنها{" "}
                          <span>
                            {productInfo.inventoryCount &&
                              enToPersianNumber(productInfo.inventoryCount)}
                          </span>{" "}
                          عدد در انبار دیجی‌کالا باقی مانده
                        </div>
                        <p className="product-content__left-price-text">
                          قیمت فروشنده
                          <svg
                            id="infoOutline"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={{
                              width: "16px",
                              height: "16px",
                              fill: "#81858b",
                            }}
                            className="me-2"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12zm18 0a8 8 0 11-16 0 8 8 0 0116 0zm-10-2h3v7h-2v-5h-1v-2zm3-2a1 1 0 10-2 0 1 1 0 002 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </p>
                      </div>
                      <div className="d-flex d-lg-none align-items-center justify-content-between mt-4">
                        <button className="product-content__left-add-btn w-50">
                          افزودن به سبد خرید
                        </button>
                        <div id="mobile-product-price-container">
                          {productInfo.off ? (
                            <div className="d-flex align-items-center gap-2">
                              <p className="product-content__left-price-discount">
                                {formatNumberWithSeparators(
                                  enToPersianNumber(productInfo.price)
                                )}
                              </p>
                              <p className="product-content__left-percent discount-percent">
                                {enToPersianNumber(productInfo.off)}
                              </p>
                            </div>
                          ) : null}
                          <p className="product-content__left-price-num">
                            <span>
                              {formatNumberWithSeparators(
                                enToPersianNumber(
                                  productInfo.price -
                                    (productInfo.price * productInfo.off) / 100
                                )
                              )}
                            </span>
                            <svg
                              id="toman"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 14 14"
                              style={{
                                width: "14px",
                                height: "14px",
                                fill: "#3f4064",
                              }}
                            >
                              <path
                                fillRule="evenodd"
                                d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="product-content__left-pricing-process mt-3">
                    <a
                      href="#"
                      className="product-content__left-pricing-process-text"
                    >
                      <svg
                        id="infoOutline"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        style={{
                          width: "16px",
                          height: "16px",
                          fill: "#81858b",
                        }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12zm18 0a8 8 0 11-16 0 8 8 0 0116 0zm-10-2h3v7h-2v-5h-1v-2zm3-2a1 1 0 10-2 0 1 1 0 002 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      فرآیند قیمت‌گذاری و نظارت بر قیمت
                    </a>
                    <svg
                      id="chevronLeft"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      style={{ width: "20px", height: "20px", fill: "#9e9fb1" }}
                    >
                      <path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path>
                    </svg>
                  </div>

                  <div className="product-content__left-better-price">
                    قیمت بهتری سراغ دارید؟
                    <svg
                      id="priceTag"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      style={{ width: "16px", height: "16px", fill: "#9e9fb1" }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.293 12.293l9-9A1 1 0 0112 3h5a1 1 0 01.707.293l3 3A1 1 0 0121 7v5a1 1 0 01-.293.707l-9 9a1 1 0 01-1.414 0l-8-8a1 1 0 010-1.414zM4.414 13L11 19.586l8-8V7.414L16.586 5h-4.172l-8 8zM15 12a3 3 0 110-6 3 3 0 010 6zm0-2a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="product-services">
            <div className="d-flex justify-content-between gap-2">
              <a
                href="#"
                className="product-services__content d-flex flex-column flex-lg-row align-items-center gap-1"
              >
                <div style={{ width: "40px", height: "40px" }}>
                  <img
                    src="/images/product-page/services/express-delivery.svg"
                    alt=""
                    width="40"
                    height="40"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p className="product-services__content-text">
                  اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس
                </p>
              </a>
              <a
                href="#"
                className="product-services__content d-flex flex-column flex-lg-row align-items-center gap-1"
              >
                <div style={{ width: "40px", height: "40px" }}>
                  <img
                    src="/images/product-page/services/cash-on-delivery.svg"
                    alt=""
                    width="40"
                    height="40"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p className="product-services__content-text">
                  امکان پرداخت در محل
                </p>
              </a>
              <a
                href="#"
                className="product-services__content d-flex flex-column flex-lg-row align-items-center gap-1"
              >
                <div style={{ width: "40px", height: "40px" }}>
                  <img
                    src="/images/product-page/services/support.svg"
                    alt=""
                    width="40"
                    height="40"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p className="product-services__content-text">
                  ۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ
                </p>
              </a>
              <a
                href="#"
                className="product-services__content d-flex flex-column flex-lg-row align-items-center gap-1"
              >
                <div style={{ width: "40px", height: "40px" }}>
                  <img
                    src="/images/product-page/services/days-return.svg"
                    alt=""
                    width="40"
                    height="40"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p className="product-services__content-text">
                  هفت روز ضمانت بازگشت کالا
                </p>
              </a>
              <a
                href="#"
                className="product-services__content d-flex flex-column flex-lg-row align-items-center gap-1"
              >
                <div style={{ width: "40px", height: "40px" }}>
                  <img
                    src="/images/product-page/services/original-products.svg"
                    alt=""
                    width="40"
                    height="40"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p className="product-services__content-text">
                  ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ
                </p>
              </a>
            </div>
          </section>

          <section className="product-same">
            <div className="same-product-for-buy">
              <p className="same-product-for-buy__title">کالاهای مشابه</p>
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
                {allSameProducts.map((product) => (
                  <SwiperSlide key={product.id}>
                    <SameProducts {...product} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>

          <section className="product-specifications-comments">
            <div className="product-specifications-comments__navbar">
              <ul className="product-specifications-comments__navbar-list">
                <li
                  className={`product-specifications-comments__navbar-item ${
                    showActiveNavbar === "specifications"
                      ? "product-specifications-comments__navbar-item--active"
                      : ""
                  }`}
                >
                  مشخصات
                </li>
                <li
                  className={`product-specifications-comments__navbar-item ${
                    showActiveNavbar === "commentsDesktop" ||
                    showActiveNavbar === "commentsMobile"
                      ? "product-specifications-comments__navbar-item--active"
                      : ""
                  }`}
                >
                  دیدگاه‌ها
                </li>
                <li
                  className={`product-specifications-comments__navbar-item ${
                    showActiveNavbar === "questions"
                      ? "product-specifications-comments__navbar-item--active"
                      : ""
                  }`}
                >
                  پرسش‌ها
                </li>
              </ul>
            </div>

            <div
              className="product-specifications"
              id="specifications"
              ref={specifications}
            >
              <p className="product-specifications__title">مشخصات</p>
              <div className="product-specifications__content">
                <p className="product-specifications__content-title d-none d-lg-block">
                  مشخصات
                </p>
                <ul
                  className={`product-specifications__content-list ${
                    isShowMoreSpecifications ? "more" : ""
                  }`}
                  id="product-specifications-container"
                >
                  {productFeatures.map((feature) => (
                    <>
                      <li
                        key={feature.id}
                        className="product-specifications__content-item"
                      >
                        <p className="product-specifications__content-item-key">
                          {feature.key}
                        </p>
                        <div className="product-specifications__content-item-values">
                          <p className="product-specifications__content-item-value">
                            {feature.value}
                          </p>
                        </div>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
              {isShowMoreSpecifications ? (
                <span
                  className="footer__digi-about-us-see-more"
                  onClick={() => setIsShowMoreSpecifications(false)}
                >
                  بستن
                </span>
              ) : (
                <span
                  className="product-specifications__see-more mt-3"
                  onClick={() => setIsShowMoreSpecifications(true)}
                >
                  مشاهده بیشتر
                  <svg
                    id="chevronLeft"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    style={{ width: "18px", height: "18px", fill: "#19bfd3" }}
                  >
                    <path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path>
                  </svg>
                </span>
              )}
            </div>

            <CommentsDesktop commentRef={commentsDesktop} comments={comments} />

            <CommentsMobile commentRef={commentsMobile} comments={comments} />

            <div className="modal-submit-comment">
              <div className="modal-submit-comment__header">
                <div className="modal-submit-comment__header-right">
                  <p className="modal-submit-comment__header-title">
                    دیدگاه شما
                  </p>
                  <p className="modal-submit-comment__header-text">
                    در مورد کفش مخصوص پیاده روی پسرانه پاما مدل 104 کد G1460
                  </p>
                </div>
                <svg
                  className="modal-submit-comment__header-close-icon cursor-pointer"
                  id="close"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style={{ width: "20px", height: "20px", fill: "#3f4064" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M18.364 7.05L16.95 5.636 12 10.586l-4.95-4.95L5.636 7.05l4.95 4.95-4.95 4.95 1.414 1.414 4.95-4.95 4.95 4.95 1.414-1.414-4.95-4.95 4.95-4.95z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>

              <div className="modal-submit-comment__content">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="modal-submit-comment__content-right">
                      <div className="modal-submit-comment__content-right-give-score">
                        <div className="d-flex justify-content-center mb-3">
                          <p className="modal-submit-comment__content-right-give-score-text">
                            امتیاز دهید!:‌
                          </p>
                          <p className="modal-submit-comment__content-right-give-score-value">
                            خیلی بد
                          </p>
                        </div>
                        <div>
                          <div className="slider-track">
                            <input
                              className="modal-submit-comment__content-right-give-score-input"
                              type="range"
                              name=""
                              min="0"
                              max="5"
                              value="0"
                              step="1"
                            />
                          </div>
                          <div className="modal-submit-comment__content-right-dots">
                            <span className="modal-submit-comment__content-right-dot"></span>
                            <span className="modal-submit-comment__content-right-dot"></span>
                            <span className="modal-submit-comment__content-right-dot"></span>
                            <span className="modal-submit-comment__content-right-dot"></span>
                            <span className="modal-submit-comment__content-right-dot"></span>
                            <span className="modal-submit-comment__content-right-dot"></span>
                          </div>
                        </div>
                      </div>

                      <div className="modal-submit-comment__content-right-form">
                        <p className="modal-submit-comment__content-right-form-title">
                          دیدگاه خود را شرح دهید
                        </p>
                        <label className="modal-submit-comment__content-right-form-topic">
                          عنوان نظر
                          <input
                            type="text"
                            className="modal-submit-comment__content-right-form-topic-input"
                            id="modal-comment-topic-input"
                          />
                        </label>
                        <label className="modal-submit-comment__content-right-form-pos-point">
                          نکات مثبت
                          <div
                            className="d-flex align-items-center justify-content-between"
                            style={{
                              border: "1px solid var(--border-color-200)",
                              borderRadius: "1rem",
                              padding: "1rem",
                            }}
                          >
                            <input
                              type="text"
                              className="modal-submit-comment__content-right-form-pos-point-input"
                              id="comment-positive-input"
                            />
                            <svg
                              className="add-valueOf-input"
                              id="comment-positive-button"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              style={{
                                width: "20px",
                                height: "20px",
                                fill: "#9e9fb1",
                              }}
                            >
                              <path
                                fillRule="evenodd"
                                d="M13 4h-2v7H4v2h7v7h2v-7h7v-2h-7V4z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </div>
                          <p
                            className="modal-submit-comment__content-right-form-pos-point-error d-none"
                            id="modal-comment-form-positive-error"
                          >
                            متن وارد شده باید حداقل ۳ کاراکتر باشد
                          </p>
                          <div id="comment-positive-container">
                            <div className="modal-submit-comment__content-right-form-pos-point-item">
                              <p className="modal-submit-comment__content-right-form-pos-point-item-text">
                                <svg
                                  id="addSimple"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  style={{
                                    width: "18px",
                                    height: "18px",
                                    fill: "#4caf50",
                                  }}
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M13 4h-2v7H4v2h7v7h2v-7h7v-2h-7V4z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                                عالی
                              </p>
                              <svg
                                id="delete"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                style={{
                                  width: "18px",
                                  height: "18px",
                                  fill: "#9e9fb1",
                                }}
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M8 2v2h8V2H8zM4 7V5h16v2H4zm13 1h2v11a3 3 0 01-3 3H8a3 3 0 01-3-3V8h2v11a1 1 0 001 1h8a1 1 0 001-1V8zm-6 0H9v10h2V8zm2 0h2v10h-2V8z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </div>
                            <div className="modal-submit-comment__content-right-form-pos-point-item">
                              <p className="modal-submit-comment__content-right-form-pos-point-item-text">
                                <svg
                                  id="addSimple"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  style={{
                                    width: "18px",
                                    height: "18px",
                                    fill: "#4caf50",
                                  }}
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M13 4h-2v7H4v2h7v7h2v-7h7v-2h-7V4z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                                عالی
                              </p>
                              <svg
                                id="delete"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                style={{
                                  width: "18px",
                                  height: "18px",
                                  fill: "#9e9fb1",
                                }}
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M8 2v2h8V2H8zM4 7V5h16v2H4zm13 1h2v11a3 3 0 01-3 3H8a3 3 0 01-3-3V8h2v11a1 1 0 001 1h8a1 1 0 001-1V8zm-6 0H9v10h2V8zm2 0h2v10h-2V8z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </label>
                        <label className="modal-submit-comment__content-right-form-neg-point">
                          نکات منفی
                          <div
                            className="d-flex align-items-center justify-content-between"
                            style={{
                              border: "1px solid var(--border-color-200)",
                              borderRadius: "1rem",
                              padding: "1rem",
                            }}
                          >
                            <input
                              type="text"
                              className="modal-submit-comment__content-right-form-neg-point-input"
                              id="comment-negative-input"
                            />
                            <svg
                              className="add-valueOf-input"
                              id="comment-negative-button"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              style={{
                                width: "20px",
                                height: "20px",
                                fill: "#9e9fb1",
                              }}
                            >
                              <path
                                fillRule="evenodd"
                                d="M13 4h-2v7H4v2h7v7h2v-7h7v-2h-7V4z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </div>
                          <p
                            className="modal-submit-comment__content-right-form-neg-point-error d-none"
                            id="modal-comment-form-negative-error"
                          >
                            متن وارد شده باید حداقل ۳ کاراکتر باشد
                          </p>
                          <div id="comment-negative-container">
                            <div className="modal-submit-comment__content-right-form-neg-point-item">
                              <p className="modal-submit-comment__content-right-form-neg-point-item-text">
                                <svg
                                  id="removeSimple"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  style={{
                                    width: "18px",
                                    height: "18px",
                                    fill: "#d32f2f",
                                  }}
                                >
                                  <path d="M20 11v2H4v-2h16z"></path>
                                </svg>
                                عالی
                              </p>
                              <svg
                                id="delete"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                style={{
                                  width: "18px",
                                  height: "18px",
                                  fill: "#9e9fb1",
                                }}
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M8 2v2h8V2H8zM4 7V5h16v2H4zm13 1h2v11a3 3 0 01-3 3H8a3 3 0 01-3-3V8h2v11a1 1 0 001 1h8a1 1 0 001-1V8zm-6 0H9v10h2V8zm2 0h2v10h-2V8z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </div>
                            <div className="modal-submit-comment__content-right-form-neg-point-item">
                              <p className="modal-submit-comment__content-right-form-neg-point-item-text">
                                <svg
                                  id="removeSimple"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  style={{
                                    width: "18px",
                                    height: "18px",
                                    fill: "#d32f2f",
                                  }}
                                >
                                  <path d="M20 11v2H4v-2h16z"></path>
                                </svg>
                                عالی
                              </p>
                              <svg
                                id="delete"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                style={{
                                  width: "18px",
                                  height: "18px",
                                  fill: "#9e9fb1",
                                }}
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M8 2v2h8V2H8zM4 7V5h16v2H4zm13 1h2v11a3 3 0 01-3 3H8a3 3 0 01-3-3V8h2v11a1 1 0 001 1h8a1 1 0 001-1V8zm-6 0H9v10h2V8zm2 0h2v10h-2V8z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </label>
                        <label className="modal-submit-comment__content-right-form-text">
                          متن نظر
                          <textarea
                            type="text"
                            className="modal-submit-comment__content-right-form-textarea"
                            id="modal-comment-opinion-input"
                          ></textarea>
                        </label>
                      </div>

                      <label className="modal-submit-comment__content-right-form-checkbox">
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className="modal-submit-comment__content-right-form-checkbox-input"
                        />
                        ارسال دیدگاه به صورت ناشناس
                      </label>
                    </div>
                    <div className="col-md-6 d-none d-md-block">
                      <div className="modal-submit-comment__content-left">
                        <p className="mb-4">
                          دیگران را با نوشتن نظرات خود، برای انتخاب این محصول
                          راهنمایی کنید.
                        </p>
                        <p
                          style={{
                            fontSize: "1.2rem",
                            color: "#2980b9",
                            lineHeight: "2",
                          }}
                        >
                          لطفا پیش از ارسال نظر، خلاصه قوانین زیر را مطالعه
                          کنید:
                        </p>
                        <p style={{ fontSize: "1.2rem", lineHeight: "2" }}>
                          لازم است محتوای ارسالی منطبق برعرف و شئونات جامعه و با
                          بیانی رسمی و عاری از لحن تند، تمسخرو توهین باشد.
                        </p>
                        <p style={{ fontSize: "1.2rem", lineHeight: "2" }}>
                          از ارسال لینک‌ سایت‌های دیگر و ارایه‌ی اطلاعات شخصی
                          نظیر شماره تماس، ایمیل و آی‌دی شبکه‌های اجتماعی پرهیز
                          کنید.
                        </p>
                        <strong style={{ fontSize: "1.2rem", lineHeight: "2" }}>
                          در نظر داشته باشید هدف نهایی از ارائه‌ی نظر درباره‌ی
                          کالا ارائه‌ی اطلاعات مشخص و مفید برای راهنمایی سایر
                          کاربران در فرآیند انتخاب و خرید یک محصول است.
                        </strong>
                        <p style={{ fontSize: "1.2rem", lineHeight: "2" }}>
                          با توجه به ساختار بخش نظرات، از پرسیدن سوال یا درخواست
                          راهنمایی در این بخش خودداری کرده و سوالات خود را در
                          بخش «پرسش و پاسخ» مطرح کنید.
                        </p>
                        <p
                          className="my-1"
                          style={{
                            fontSize: "1.4rem",
                            color: "#e74c3c",
                            lineHeight: "2",
                          }}
                        >
                          افزودن عکس و ویدیو به نظرات:
                        </p>
                        <p style={{ fontSize: "1.2rem", lineHeight: "2" }}>
                          با مطالعه‌ی
                          <a
                            href="#"
                            style={{
                              color: "#2980b9",
                              textDecoration: "underline",
                            }}
                          >
                            این لینک
                          </a>
                          می‌توانید مفید‌ترین الگوی عکاسی از کالایی که خریداری
                          کرده‌اید را مشاهده کنید.
                        </p>
                        <p
                          style={{
                            fontSize: "1.2rem",
                            color: "#2980b9",
                            lineHeight: "2",
                          }}
                        >
                          پیشنهاد می‌شود قوانین کامل ثبت نظر را در
                          <a
                            href="#"
                            style={{
                              color: "#2980b9",
                              textDecoration: "underline",
                            }}
                          >
                            این صفحه
                          </a>
                          مطالعه کنید.
                        </p>
                        <p style={{ fontSize: "1.2rem", lineHeight: "2" }}>
                          هرگونه نقد و نظر در خصوص سایت دیجی‌کالا، مشکلات دریافت
                          خدمات و درخواست کالا و نیز گزارش تخلف فروش (نظیر گزارش
                          کالای غیراصل یا مغایر) را با ایمیل
                          <a href="#" style={{ color: "#0000ee" }}>
                            info@digikala.com
                          </a>
                          یا با شماره‌ی
                          <a href="#" style={{ color: "#0000ee" }}>
                            {" "}
                            ۶۱۹۳۰۰۰۰ - ۰۲۱{" "}
                          </a>{" "}
                          در میان بگذارید و از نوشتن آن‌ها در بخش نظرات خودداری
                          کنید.
                        </p>
                      </div>
                    </div>
                    <div className="modal-submit-comment__footer">
                      <div className="row align-items-center">
                        <div className="col-6">
                          <button
                            className="modal-submit-comment__footer-btn"
                            id="submit-comment-btn"
                          >
                            ثبت دیدگاه
                          </button>
                        </div>
                        <div className="col-6">
                          <p className="modal-submit-comment__footer-text">
                            ثبت دیدگاه به معنی موافقت با
                            <a href="#">قوانین انتشار دیجی‌کالا</a> است.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="product-question" id="questions" ref={questions}>
            <p className="product-question__title">پرسش‌ها</p>

            <div className="product-question__content">
              <p className="product-question__content-title">
                درباره این کالا چه پرسشی دارید؟
              </p>
              <textarea
                className="product-question__content-textarea"
                rows="5"
                maxLength="100"
                onChange={(e) =>
                  setLengthOfQuestionTextArea(e.target.value.length)
                }
              ></textarea>
              <p className="product-question__content-letter-num">
                ۱۰۰/{enToPersianNumber(lengthOfQuestionTextArea)}
              </p>
              <button className="product-question__content-btn">
                ثبت پرسش
              </button>
              <p className="product-question__content-rule">
                ثبت پاسخ به معنی موافقت با
                <a href="#">قوانین انتشار دیجی‌کالا</a> است.
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
