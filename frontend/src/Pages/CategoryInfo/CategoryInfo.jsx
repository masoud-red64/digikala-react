import React, { useEffect, useRef, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

import CategoriesItem from "../../Components/CategoryPage/CategoriesItem/CategoriesItem";
import CategoryProduct from "../../Components/CategoryPage/CategoryProduct/CategoryProduct";
import "./CategoryInfo.css";
import SidebarCategoryList from "../../Components/Sidebar/SidebarCategoryList/SidebarCategoryList";
import { enToPersianNumber } from "../../../../../../../DigiKala/frontend/js/funcs/utils";
import { useParams } from "react-router-dom";

export default function CategoryInfo() {
  const [isShowMoreCategory, setIsShowMoreCategory] = useState(false);
  const [isShowCategoriesFilter, setIsShowCategoriesFilter] = useState(false);
  const [isShowBrandFilter, setIsShowBrandFilter] = useState(false);
  const [isShowDigiPlusServices, setIsShowDigiPlusServices] = useState(false);
  const [isShowRangePrice, setIsShowRangePrice] = useState(false);
  const [isShowSeller, setIsShowSeller] = useState(false);
  const [sliderValue1, setSliderValue1] = useState(0);
  const [sliderValue2, setSliderValue2] = useState(27000000);
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [minGap, setMinGap] = useState(0);
  const [percent1, setPercent1] = useState(null);
  const [percent2, setPercent2] = useState(null);
  const [mainCategories, setMainCategories] = useState([]);
  const [categoryID, setCategoryID] = useState(null);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [mainTitle, setMainTitle] = useState("");
  const [categoryTitle, setCategoryTitle] = useState("");
  const [isShowOrderMobile, setIsShowOrderMobile] = useState(false);
  const [isShowFilterMobile, setIsShowFilterMobile] = useState(false);

  const slider1Ref = useRef();
  const { shortName, mainID } = useParams();

  useEffect(() => {
    // Add a split character (comma) every three digits using a regular expression
    setInputValue1(
      enToPersianNumber(
        String(sliderValue1).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      )
    );

    // Add a split character (comma) every three digits using a regular expression
    setInputValue2(
      enToPersianNumber(
        String(sliderValue2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      )
    );
  }, [sliderValue1, sliderValue2]);

  useEffect(() => {
    getAllCategories();
    getCategoryID();
    getAllCategoryProducts();
    getTargetMain();
  }, [categoryID, shortName]);

  const changePriceHandler1 = (event) => {
    // Remove any existing separators from the input value
    let value = event.target.value.replace(/[^\d۰۱۲۳۴۵۶۷۸۹]/g, "");
    // Limit the input to exactly 8 digits
    value = value.slice(0, 8);
    value = enToPersianNumber(value);

    // Format the input value with separators ,
    if (value) {
      let formattedValue = "";
      for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 3 === 0) {
          formattedValue = "," + formattedValue;
        }
        formattedValue = value[value.length - i - 1] + formattedValue;
      }

      // Set the input value to the formatted value
      setInputValue1(formattedValue);
      //   fillColor();
    }
  };
  const changePriceHandler2 = (event) => {
    // Remove any existing separators from the input value
    let value = event.target.value.replace(/[^\d۰۱۲۳۴۵۶۷۸۹]/g, "");
    // Limit the input to exactly 8 digits
    value = value.slice(0, 8);
    value = enToPersianNumber(value);

    // Format the input value with separators ,
    if (value) {
      let formattedValue = "";
      for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 3 === 0) {
          formattedValue = "," + formattedValue;
        }
        formattedValue = value[value.length - i - 1] + formattedValue;
      }

      // Set the input value to the formatted value
      setInputValue2(formattedValue);

      // Prevent from input 2 smaller than input 1
      if (inputValue2.length < inputValue1.length) {
        setInputValue2(inputValue1);
      }
      // change color of slider line lively
      //   fillColor();
    }
  };
  function sliderOne(event) {
    if (parseInt(sliderValue2) - parseInt(event.target.value) <= minGap) {
      setSliderValue1(parseInt(sliderValue2) - minGap);
    } else {
      setSliderValue1(event.target.value);
    }

    fillColor();
  }
  function sliderTwo(event) {
    // Handle space between slider
    if (parseInt(event.target.value) - parseInt(sliderValue1) <= minGap) {
      setSliderValue2(parseInt(sliderValue1) + minGap);
    } else {
      setSliderValue2(event.target.value);
    }
    fillColor();
  }
  // Handle backgroundColor of parent slider when slider move
  function fillColor() {
    setPercent1((sliderValue1 / slider1Ref.current.max) * 100);
    setPercent2((sliderValue2 / slider1Ref.current.max) * 100);
  }

  function getAllCategories() {
    fetch(
      `https://my-digikala.iran.liara.run/api/categories/category/${mainID}`
    )
      .then((res) => res.json())
      .then((categories) => {
        console.log(categories);
        setMainCategories(categories);
      });
  }

  function getCategoryID() {
    fetch(
      `https://my-digikala.iran.liara.run/api/categories/products/${shortName}`
    )
      .then((res) => res.json())
      .then((categories) => {
        setCategoryID(categories[0].id);
        setCategoryTitle(categories[0].title);
      });
  }

  function getAllCategoryProducts() {
    fetch("https://my-digikala.iran.liara.run/api/products")
      .then((res) => res.json())
      .then((products) => {
        let categoryProducts = products.filter(
          (product) => product.categoryID === categoryID
        );
        setCategoryProducts(categoryProducts);
      });
  }

  function getTargetMain() {
    fetch("https://my-digikala.iran.liara.run/api/main")
      .then((res) => res.json())
      .then((mains) => {
        let targetMain = mains.find((main) => main.id === Number(mainID));
        setMainTitle(targetMain.title);
      });
  }
  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <div className="category-page__top">
            <a href="#" className="category-page__top-digi">
              فروشگاه اینترنتی دیجی‌کالا
            </a>
            <span className="mx-3">/</span>
            <a href="#" className="category-page__top-main">
              {mainTitle}
            </a>
            <span className="mx-3">/</span>
            <a href="#" className="category-page__top-category">
              {categoryTitle}
            </a>
          </div>
          <div className="category-page__categories">
            <p className="category-page__categories-title">دسته بندی ها</p>
            <div
              className="d-flex overflow-auto mt-4 w-100"
              id="categories-container"
            >
              {mainCategories.slice(0, 6).map((category) => (
                <CategoriesItem key={category.id} {...category} />
              ))}

              {!isShowMoreCategory && mainCategories.length > 6 && (
                <div
                  className="category-page__categories-item category-page__categories-see-more"
                  onClick={() => setIsShowMoreCategory(true)}
                >
                  <p className="fs-5">مشاهده</p>
                  <p className="fs-1">۵</p>
                  <p className="fs-5">بسته دیگر</p>
                </div>
              )}
              {isShowMoreCategory && (
                <>
                  {mainCategories.slice(6, 20).map((category) => (
                    <CategoriesItem key={category.id} {...category} />
                  ))}
                </>
              )}
            </div>
          </div>

          <div className="product-list-wrapper">
            <div className="row">
              <div className="col-lg-3">
                <div className="product-list__right">
                  <div
                    className={`filtering-wrapper ${
                      isShowFilterMobile ? "mobile" : ""
                    }`}
                  >
                    <p className="filtering__title d-flex justify-content-between align-items-center">
                      فیلترها
                      <svg
                        className="filtering-wrapper__close-icon d-block d-lg-none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        style={{
                          width: "24px",
                          height: "24px",
                          fill: "#3f4064",
                        }}
                        onClick={() => setIsShowFilterMobile(false)}
                      >
                        <path
                          fillRule="evenodd"
                          d="M18.364 7.05L16.95 5.636 12 10.586l-4.95-4.95L5.636 7.05l4.95 4.95-4.95 4.95 1.414 1.414 4.95-4.95 4.95 4.95 1.414-1.414-4.95-4.95 4.95-4.95z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </p>
                    <ul className="filtering__list">
                      <li className="filtering__item">
                        <div
                          className="d-flex align-items-center justify-content-between cursor-pointer"
                          data-filter="category"
                          onClick={() =>
                            setIsShowCategoriesFilter(!isShowCategoriesFilter)
                          }
                        >
                          دسته بندی
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={{
                              width: "24px",
                              height: "24px",
                              fill: "#9e9fb1",
                            }}
                          >
                            <path d="M7.707 9.29l-1.414 1.414 5 5a1 1 0 001.414 0l5-5-1.414-1.414L12 13.583 7.707 9.29z"></path>
                          </svg>
                        </div>

                        {isShowCategoriesFilter && (
                          <div className="filtering__item-categories">
                            <SidebarCategoryList />
                          </div>
                        )}
                      </li>
                      <li className="filtering__item">
                        <div
                          className="d-flex align-items-center justify-content-between cursor-pointer"
                          data-filter="brand"
                          onClick={() =>
                            setIsShowBrandFilter(!isShowBrandFilter)
                          }
                        >
                          برند
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={{
                              width: "24px",
                              height: "24px",
                              fill: "#9e9fb1",
                            }}
                          >
                            <path d="M7.707 9.29l-1.414 1.414 5 5a1 1 0 001.414 0l5-5-1.414-1.414L12 13.583 7.707 9.29z"></path>
                          </svg>
                        </div>

                        {isShowBrandFilter && (
                          <div className="filtering__item-brand">
                            <div className="filtering__item-brand-search">
                              <svg
                                id="searchSearch"
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
                                  d="M10.5 18a7.5 7.5 0 115.973-2.963l4.369 4.246-1.394 1.434-4.387-4.263A7.467 7.467 0 0110.5 18zm5.5-7.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                              <input
                                type="text"
                                className="filtering__item-brand-search-input"
                                placeholder="جستجو برند ..."
                              />
                            </div>
                            <ul className="filtering__item-brand-list">
                              <li className="filtering__item-brand-item">
                                <input
                                  type="checkbox"
                                  className="filtering__item-brand-item-checkbox"
                                />
                                <p className="filtering__item-brand-item-text">
                                  ناب ساقه
                                </p>
                              </li>
                              <li className="filtering__item-brand-item">
                                <input
                                  type="checkbox"
                                  className="filtering__item-brand-item-checkbox"
                                />
                                <p className="filtering__item-brand-item-text">
                                  سالمین
                                </p>
                              </li>
                              <li className="filtering__item-brand-item">
                                <input
                                  type="checkbox"
                                  className="filtering__item-brand-item-checkbox"
                                />
                                <p className="filtering__item-brand-item-text">
                                  بانو جان
                                </p>
                              </li>
                              <li className="filtering__item-brand-item">
                                <input
                                  type="checkbox"
                                  className="filtering__item-brand-item-checkbox"
                                />
                                <p className="filtering__item-brand-item-text">
                                  چای بهشت
                                </p>
                              </li>
                              <li className="filtering__item-brand-item">
                                <input
                                  type="checkbox"
                                  className="filtering__item-brand-item-checkbox"
                                />
                                <p className="filtering__item-brand-item-text">
                                  بن مانو
                                </p>
                              </li>
                              <li className="filtering__item-brand-item">
                                <input
                                  type="checkbox"
                                  className="filtering__item-brand-item-checkbox"
                                />
                                <p className="filtering__item-brand-item-text">
                                  هاتی کارا
                                </p>
                              </li>
                              <li className="filtering__item-brand-item">
                                <input
                                  type="checkbox"
                                  className="filtering__item-brand-item-checkbox"
                                />
                                <p className="filtering__item-brand-item-text">
                                  کشمون
                                </p>
                              </li>
                              <li className="filtering__item-brand-item">
                                <input
                                  type="checkbox"
                                  className="filtering__item-brand-item-checkbox"
                                />
                                <p className="filtering__item-brand-item-text">
                                  روح بخش
                                </p>
                              </li>
                              <li className="filtering__item-brand-item">
                                <input
                                  type="checkbox"
                                  className="filtering__item-brand-item-checkbox"
                                />
                                <p className="filtering__item-brand-item-text">
                                  گلیران
                                </p>
                              </li>
                            </ul>
                          </div>
                        )}
                      </li>
                      <li className="filtering__item">
                        <div
                          className="d-flex align-items-center justify-content-between cursor-pointer"
                          data-filter="digiplus"
                          onClick={() =>
                            setIsShowDigiPlusServices(!isShowDigiPlusServices)
                          }
                        >
                          <p
                            className="d-flex align-items-center gap-2"
                            data-filter="digiplus"
                          >
                            خدمات دیجی پلاس
                            <img
                              src="/images/category/digiplus.svg"
                              alt="digiplus"
                              width="18"
                              height="18"
                              style={{ objectFit: "contain" }}
                            />
                          </p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={{
                              width: "24px",
                              height: "24px",
                              fill: "#9e9fb1",
                            }}
                          >
                            <path d="M7.707 9.29l-1.414 1.414 5 5a1 1 0 001.414 0l5-5-1.414-1.414L12 13.583 7.707 9.29z"></path>
                          </svg>
                        </div>

                        {isShowDigiPlusServices && (
                          <div className="filtering__item-digiplus">
                            <ul className="filtering__item-digiplus-list">
                              <li className="filtering__item-digiplus-item">
                                <div className="d-flex align-items-center gap-4">
                                  <input
                                    type="checkbox"
                                    className="filtering__item-digiplus-item-checkbox"
                                  />
                                  <p className="filtering__item-digiplus-item-text">
                                    ناب ساقه
                                  </p>
                                </div>
                                <img
                                  src="/images/category/gift.png"
                                  alt="gift"
                                  style={{ objectFit: "contain" }}
                                  width="20"
                                  height="20"
                                />
                              </li>
                              <li className="filtering__item-digiplus-item">
                                <div className="d-flex align-items-center gap-4">
                                  <input
                                    type="checkbox"
                                    className="filtering__item-digiplus-item-checkbox"
                                  />
                                  <p className="filtering__item-digiplus-item-text">
                                    سالمین
                                  </p>
                                </div>
                                <img
                                  src="/images/category/send.png"
                                  alt="send"
                                  style={{ objectFit: "contain" }}
                                  width="20"
                                  height="20"
                                />
                              </li>
                            </ul>
                          </div>
                        )}
                      </li>
                      <li className="filtering__item">
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="d-flex align-items-center gap-2">
                            ارسال فروشنده
                            <img
                              src="/images/category/seller.png"
                              alt="seller"
                              width="18"
                              height="18"
                              style={{ objectFit: "contain" }}
                            />
                          </p>
                          <label className="filtering__item-switch">
                            <span className="filtering__item-switch-action">
                              <input type="checkbox" />
                              <i></i>
                            </span>
                          </label>
                        </div>
                      </li>
                      <li className="filtering__item">
                        <div
                          className="d-flex align-items-center justify-content-between cursor-pointer"
                          data-filter="range-price"
                          onClick={() => setIsShowRangePrice(!isShowRangePrice)}
                        >
                          محدوده قیمت
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={{
                              width: "24px",
                              height: "24px",
                              fill: "#9e9fb1",
                            }}
                          >
                            <path d="M7.707 9.29l-1.414 1.414 5 5a1 1 0 001.414 0l5-5-1.414-1.414L12 13.583 7.707 9.29z"></path>
                          </svg>
                        </div>

                        {isShowRangePrice && (
                          <div className="filtering__item-range-price">
                            <div className="filtering__item-range-price-content">
                              <p className="filtering__item-range-price-content-text">
                                از
                              </p>
                              <input
                                type="text"
                                className="filtering__item-range-price-content-input"
                                value={inputValue1}
                                onInput={changePriceHandler1}
                              />
                              <svg
                                id="toman"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 14 14"
                                style={{
                                  width: "16px",
                                  height: "16px",
                                  fill: "#3f4064",
                                }}
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </div>
                            <div className="filtering__item-range-price-content">
                              <p className="filtering__item-range-price-content-text">
                                تا
                              </p>
                              <input
                                type="text"
                                className="filtering__item-range-price-content-input"
                                value={inputValue2}
                                onInput={changePriceHandler2}
                              />
                              <svg
                                id="toman"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 14 14"
                                style={{
                                  width: "16px",
                                  height: "16px",
                                  fill: "#3f4064",
                                }}
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </div>

                            <div
                              className="slider-track"
                              style={{
                                background: `linear-gradient(to left, #dadae5 ${percent1}%, #19bfd3 ${percent1}%, #19bfd3 ${percent2}%, #dadae5 ${percent2}%)`,
                              }}
                            >
                              <input
                                type="range"
                                name=""
                                id="slider-1"
                                min="0"
                                max="27000000"
                                value={sliderValue1}
                                onInput={sliderOne}
                                ref={slider1Ref}
                              />
                              <input
                                type="range"
                                name=""
                                id="slider-2"
                                min="0"
                                max="27000000"
                                value={sliderValue2}
                                onInput={sliderTwo}
                              />
                            </div>
                          </div>
                        )}
                      </li>
                      <li className="filtering__item">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center gap-2">
                            فقط کالاهای موجود
                          </div>
                          <label className="filtering__item-switch">
                            <span className="filtering__item-switch-action">
                              <input type="checkbox" />
                              <i></i>
                            </span>
                          </label>
                        </div>
                      </li>
                      <li className="filtering__item">
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="d-flex align-items-center gap-2">
                            فقط کالاهای موجود در انبار دیجی کالا
                          </p>
                          <label className="filtering__item-switch">
                            <span className="filtering__item-switch-action">
                              <input type="checkbox" />
                              <i></i>
                            </span>
                          </label>
                        </div>
                      </li>
                      <li className="filtering__item">
                        <div
                          className="d-flex align-items-center justify-content-between cursor-pointer"
                          data-filter="seller-type"
                          onClick={() => setIsShowSeller(!isShowSeller)}
                        >
                          نوع فروشنده
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={{
                              width: "24px",
                              height: "24px",
                              fill: "#9e9fb1",
                            }}
                          >
                            <path d="M7.707 9.29l-1.414 1.414 5 5a1 1 0 001.414 0l5-5-1.414-1.414L12 13.583 7.707 9.29z"></path>
                          </svg>
                        </div>

                        {isShowSeller && (
                          <div className="filtering__item-seller-type">
                            <ul className="filtering__item-seller-type-list">
                              <li className="filtering__item-seller-type-item">
                                <input
                                  type="checkbox"
                                  className="filtering__item-seller-type-item-checkbox"
                                />
                                <p className="filtering__item-seller-type-item-text">
                                  فروشنده رسمی
                                </p>
                              </li>
                              <li className="filtering__item-seller-type-item">
                                <input
                                  type="checkbox"
                                  className="filtering__item-brand-item-checkbox"
                                />
                                <p className="filtering__item-seller-type-item-text">
                                  فروشنده برگزیده
                                </p>
                              </li>
                              <li className="filtering__item-seller-type-item">
                                <input
                                  type="checkbox"
                                  className="filtering__item-brand-item-checkbox"
                                />
                                <p className="filtering__item-seller-type-item-text">
                                  کسب و کارهای بومی
                                </p>
                              </li>
                            </ul>
                          </div>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-9">
                <div className="product-list__left">
                  <div className="ordering-wrapper">
                    <div className="d-flex align-items-center gap-3 d-lg-none">
                      <div
                        className="filter d-flex gap-2"
                        onClick={() => setIsShowFilterMobile(true)}
                      >
                        <svg
                          id="filter"
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
                            d="M5.17 6a3.001 3.001 0 005.66 0H22V4H10.83a3.001 3.001 0 00-5.66 0H2v2h3.17zM9 5a1 1 0 11-2 0 1 1 0 012 0zm7 10a3.001 3.001 0 01-2.83-2H2v-2h11.17a3.001 3.001 0 015.66 0H22v2h-3.17A3.001 3.001 0 0116 15zm1-3a1 1 0 11-2 0 1 1 0 012 0zM5.17 18H2v2h3.17a3.001 3.001 0 005.66 0H22v-2H10.83a3.001 3.001 0 00-5.66 0zM9 19a1 1 0 11-2 0 1 1 0 012 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <p className="fs-5">فیلتر</p>
                      </div>
                      <div
                        className="order d-flex gap-2 border-0"
                        onClick={() => setIsShowOrderMobile(true)}
                      >
                        <svg
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
                            d="M6 15.793L3.707 13.5l-1.414 1.414 4 4a1 1 0 001.414 0l4-4-1.414-1.414L8 15.793V5H6v10.793zM22 5H10v2h12V5zm0 4H12v2h10V9zm0 4h-8v2h8v-2zm-6 4h6v2h-6v-2z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <p className="fs-5">پربازدیدترین</p>
                      </div>
                    </div>
                    <div className="d-none d-lg-flex align-items-center">
                      <svg
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
                          d="M6 15.793L3.707 13.5l-1.414 1.414 4 4a1 1 0 001.414 0l4-4-1.414-1.414L8 15.793V5H6v10.793zM22 5H10v2h12V5zm0 4H12v2h10V9zm0 4h-8v2h8v-2zm-6 4h6v2h-6v-2z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <p className="ordering__text">مرتب سازی:</p>
                      <ul className="ordering__list">
                        <li className="ordering__item order-item order-item--active">
                          مرتبط‌ترین
                        </li>
                        <li className="ordering__item order-item">
                          پربازدیدترین
                        </li>
                        <li className="ordering__item order-item">جدیدترین</li>
                        <li className="ordering__item order-item">
                          پرفروش‌ترین‌
                        </li>
                        <li className="ordering__item order-item">
                          ارزان‌ترین
                        </li>
                        <li className="ordering__item order-item">گران‌ترین</li>
                        <li className="ordering__item order-item">
                          سریع‌ترین ارسال
                        </li>
                        <li className="ordering__item order-item">
                          پیشنهاد خریداران
                        </li>
                        <li className="ordering__item order-item">منتخب</li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`ordering-wrapper-mobile d-lg-none ${
                      isShowOrderMobile ? "" : "hide"
                    }`}
                  >
                    <p className="ordering__text-mobile d-flex align-items-center justify-content-between">
                      مرتب سازی بر اساس
                      <svg
                        className="ordering-wrapper-mobile__close-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        style={{
                          width: "24px",
                          height: "24px",
                          fill: "#3f4064",
                        }}
                        onClick={() => setIsShowOrderMobile(false)}
                      >
                        <path
                          fillRule="evenodd"
                          d="M18.364 7.05L16.95 5.636 12 10.586l-4.95-4.95L5.636 7.05l4.95 4.95-4.95 4.95 1.414 1.414 4.95-4.95 4.95 4.95 1.414-1.414-4.95-4.95 4.95-4.95z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </p>
                    <ul className="ordering__list-mobile">
                      <li className="ordering__item-mobile order-item order-item--active">
                        مرتبط‌ترین
                      </li>
                      <li className="ordering__item-mobile order-item">
                        پربازدیدترین
                      </li>
                      <li className="ordering__item-mobile order-item">
                        جدیدترین
                      </li>
                      <li className="ordering__item-mobile order-item">
                        پرفروش‌ترین‌
                      </li>
                      <li className="ordering__item-mobile order-item">
                        ارزان‌ترین
                      </li>
                      <li className="ordering__item-mobile order-item">
                        گران‌ترین
                      </li>
                      <li className="ordering__item-mobile order-item">
                        سریع‌ترین ارسال
                      </li>
                      <li className="ordering__item-mobile order-item">
                        پیشنهاد خریداران
                      </li>
                      <li className="ordering__item-mobile order-item">
                        منتخب
                      </li>
                    </ul>
                  </div>

                  <div className="category-page__products-wrapper">
                    <div className="row" id="category-product-container">
                      {categoryProducts.map((product) => (
                        <CategoryProduct key={product.id} {...product} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
