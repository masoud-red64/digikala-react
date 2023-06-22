import React, { useEffect, useState } from "react";
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
import DigiPlus from "../../Components/DigiPlus/DigiPlus";
import DigiClub from "../../Components/DigiClub/DigiClub";
import BestSelling from "../../Components/BestSelling/BestSelling";
import SelectedProducts from "../../Components/SelectedProducts/SelectedProducts";
import Articles from "../../Components/Articles/Articles";
import PercentBox from "../../Components/PercentBox/PercentBox";
import { shuffled } from "../../func/utils";
import { Link } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";

export default function Index() {
  const [wonderfulProducts, setWonderfulProducts] = useState([]);
  const [superMarketProducts, setSuperMarketProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [banners2, setBanners2] = useState([]);
  const [allMains, setAllMains] = useState([]);
  const [suggestedCategories, setSuggestedCategories] = useState([]);
  const [popularBrands, setPopularBrands] = useState([]);
  const [digiPlusProducts, setDigiPlusProducts] = useState([]);
  const [bestSellingProducts, setBestSellingProducts] = useState([]);
  const [allSelectedProducts, setAllSelectedProducts] = useState([]);
  const [allTopSlider, setAllTopSlider] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://my-digikala.iran.liara.run/api/products")
      .then((res) => res.json())
      .then((products) => {
        const wonderfulProducts = products.filter((product) => product.wonder);
        setWonderfulProducts(wonderfulProducts);

        let superMarketProducts = products.filter(
          (product) => product.mainID === 5 && product.off
        );
        setSuperMarketProducts(superMarketProducts);

        let digiPlusProducts = products.filter((product) => product.digiplus);
        setDigiPlusProducts(digiPlusProducts);

        let bestSellingProducts = products.filter(
          (product) => product.bestSell
        );
        setBestSellingProducts(bestSellingProducts);

        let selectedProducts = products.filter((product) => product.selected);
        setAllSelectedProducts(selectedProducts);
      });

    getAllBanner1();
    getAllMain();
    getSuggestedCategory();
    getAllBrands();
    getAllSliders();
    document.title = "دیجی کالا";
  }, []);

  function getAllBanner1() {
    fetch("https://my-digikala.iran.liara.run/api/banner/2")
      .then((res) => res.json())
      .then((banners2) => {
        setBanners2(banners2);
      });
  }

  function getAllMain() {
    fetch("https://my-digikala.iran.liara.run/api/main")
      .then((res) => res.json())
      .then((mains) => {
        setAllMains(mains);
      });
  }

  function getSuggestedCategory() {
    fetch("https://my-digikala.iran.liara.run/api/categories")
      .then((res) => res.json())
      .then((categories) => {
        let suggestedCategories = categories.filter(
          (category) => category.suggested
        );
        setSuggestedCategories(suggestedCategories);
      });
  }

  function getAllBrands() {
    fetch("https://my-digikala.iran.liara.run/api/brands")
      .then((res) => res.json())
      .then((brands) => {
        setPopularBrands(brands);
      });
  }

  async function getAllSliders() {
    setIsLoading(true);
    fetch("https://my-digikala.iran.liara.run/api/slider")
      .then((res) => res.json())
      .then((sliders) => {
        let severalSliders = shuffled([...sliders]).slice(0, 6);
        setAllTopSlider(severalSliders);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <>
      {isLoading && <Loading />}
      <Header />
      <div className="main">
        <TopSwiperJs sliders={allTopSlider} />

        <div className="container">
          <Services />
          <SuggestSwiper wonderfulProducts={wonderfulProducts} />
          <section className="supermarket-amazing">
            <div className="supermarket-amazing__right">
              <div className="supermarket-amazing__right-title">
                <img
                  src="/images/supermarket-amazing/fresh.png"
                  alt="box"
                  className="supermarket-amazing__right-title-box-img"
                  loading="lazy"
                />
                <img
                  src="/images/supermarket-amazing/text.svg"
                  alt="text"
                  className="supermarket-amazing__right-title-text-img"
                  loading="lazy"
                />
              </div>
              <div
                className="supermarket-amazing__right-products"
                id="supermarket-products-container"
              >
                {shuffled([...superMarketProducts])
                  .slice(0, 4)
                  .map((product) => (
                    <Link
                      key={product.id}
                      to={`/product-info/${product.shortName}`}
                      className="supermarket-amazing__right-product"
                    >
                      <img
                        src={`/img/${product.img}`}
                        alt="product"
                        className="supermarket-amazing__right-product-img"
                        loading="lazy"
                      />
                      <div className="supermarket-amazing__right-product-discount">
                        <PercentBox percent={product.off} />
                      </div>
                    </Link>
                  ))}
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
          <CategoryBanner col={"col-6 col-lg-3"} banners={[...banners2]} />
          <Categories title={"دسته بندی ها دیجی کالا"} mains={allMains} />
          <SuggestCategoriesSwiper
            title={"پیشنهاد دیجی کالا"}
            suggestedCategories={suggestedCategories}
          />
          <PopularBrandSwiper popularBrands={popularBrands} />
          <BaseVisitedCategories mt={"mt-5"} page={"indexPage"} />
          <DigiPlus digiPlusProducts={digiPlusProducts} />
          <DigiClub />
          <BaseVisitedCategories mt={"mt-5"} page={"indexPage"} />
          <BestSelling bestSellingProducts={bestSellingProducts} />
          <SelectedProducts
            title={"منتخب محصولات تخفیف و حراج"}
            icon={true}
            allSelectedProducts={allSelectedProducts}
          />
          <Articles />
        </div>
      </div>
      <Footer />
    </>
  );
}
