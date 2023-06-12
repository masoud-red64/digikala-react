import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";

import Footer from "../../Components/Footer/Footer";
import TopSwiperJs from "../../Components/TopSwiper/TopSwiperJs";
import Services from "../../Components/Services/Services";
import SuggestSwiper from "../../Components/SuggestSwiper/SuggestSwiper";
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
import DOMPurify from "dompurify";

import "./Main.css";
import Stores from "../../Components/Stores/Stores";
import { useParams } from "react-router-dom";

export default function Main() {
  const [mainID, setMainID] = useState(null);
  const [wonderfulProducts, setWonderfulProducts] = useState([]);
  const [banners1, setBanners1] = useState([]);
  const [banners2, setBanners2] = useState([]);
  const [allMains, setAllMains] = useState([]);
  const [suggestedCategories, setSuggestedCategories] = useState([]);
  const [popularBrands, setPopularBrands] = useState([]);
  const [cheapestProducts, setCheapestProducts] = useState([]);
  const [popularityProducts, setPopularityProducts] = useState([]);
  const [mostOffsProducts, setMostOffsProducts] = useState([]);
  const [bestSellingProducts, setBestSellingProducts] = useState([]);
  const [repeatedProducts, setRepeatedProducts] = useState([]);
  const [mainSliders, setMainSliders] = useState([]);
  const [mainInformation, setMainInformation] = useState([]);
  const [isShowMainInfo, setIsShowMainInfo] = useState(false);

  const { shortName } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/api/main/${shortName}`)
      .then((res) => res.json())
      .then((main) => {
        setMainID(main[0].id);
        console.log(main);
        setMainInformation(main[0].information);
      });
  }, [shortName]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((products) => {
        let wonderfulProducts = products.filter(
          (product) => product.mainID === mainID && product.wonder
        );
        setWonderfulProducts(wonderfulProducts);

        let cheapestProducts = products
          .filter((product) => product.mainID === mainID)
          .sort((a, b) => a.price - b.price);
        setCheapestProducts(cheapestProducts);

        let popularityProducts = products
          .filter((product) => product.mainID === mainID)
          .sort((a, b) => a.score - b.score);
        setPopularityProducts(popularityProducts);

        let mostOffsProducts = products
          .filter((product) => product.mainID === mainID)
          .sort((a, b) => a.off - b.off);
        setMostOffsProducts(mostOffsProducts);

        let bestSellingProducts = products.filter(
          (product) => product.bestSell && product.mainID === mainID
        );
        setBestSellingProducts(bestSellingProducts);

        let repeatedProducts = products.filter(
          (product) => product.mostRepeated && product.mainID === mainID
        );
        setRepeatedProducts(repeatedProducts);
      });

    getAllBanner1();
    getAllBanner2();
    getAllMain();
    getSuggestedCategory();
    getAllPopularBrands();
    getMainSliders();
  }, [mainID]);

  async function getAllBanner1() {
    fetch("http://localhost:3000/api/banner/1")
      .then((res) => res.json())
      .then((banners1) => {
        let mainBanners1 = banners1.filter(
          (banner1) => banner1.mainID === mainID
        );
        setBanners1(mainBanners1);
      });
  }

  async function getAllBanner2() {
    fetch("http://localhost:3000/api/banner/2")
      .then((res) => res.json())
      .then((banners2) => {
        let mainBanners2 = banners2.filter(
          (banner2) => banner2.mainID === mainID
        );
        setBanners2(mainBanners2);
      });
  }

  function getAllMain() {
    fetch("http://localhost:3000/api/main")
      .then((res) => res.json())
      .then((mains) => {
        setAllMains(mains);
      });
  }

  async function getSuggestedCategory() {
    fetch("http://localhost:3000/api/categories")
      .then((res) => res.json())
      .then((categories) => {
        let mainSuggestedCategories = categories.filter(
          (category) => category.mainID === mainID && category.suggested
        );
        setSuggestedCategories(mainSuggestedCategories);
      });
  }

  async function getAllPopularBrands() {
    fetch("http://localhost:3000/api/brands")
      .then((res) => res.json())
      .then((brands) => {
        let mainBrands = brands.filter((brand) => brand.mainID === mainID);
        setPopularBrands(mainBrands);
      });
  }

  async function getMainSliders() {
    fetch("http://localhost:3000/api/slider")
      .then((res) => res.json())
      .then((sliders) => {
        let mainSliders = sliders.filter((slider) => slider.mainID === mainID);
        setMainSliders(mainSliders);
      });
  }

  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <TopSwiperJs borderRadius={true} sliders={mainSliders} />
          <SuggestSwiper
            wonderfulProducts={wonderfulProducts}
            color={shortName}
          />
          <Categories title={"خرید بر اساس دسته بندی"} mains={allMains} />
          <CategoryBanner col={"col-12 col-lg-6"} banners={[...banners1]} />
          <BaseVisitedCategories
            mt={"mt-1"}
            page={"mainPage"}
            cheapestProducts={cheapestProducts}
            popularityProducts={popularityProducts}
            mostOffsProducts={mostOffsProducts}
          />
          <SuggestCategoriesSwiper
            title={"دسته بندی های پیشنهادی"}
            suggestedCategories={suggestedCategories}
          />
          <CategoryBanner col={"col-6 col-lg-3"} banners={[...banners2]} />
          <BestSelling bestSellingProducts={bestSellingProducts} />
          <Stores />
          <SelectedProducts
            title={"پرتکرارترین کالاها"}
            icon={false}
            allSelectedProducts={repeatedProducts}
          />
          <PopularBrandSwiper popularBrands={popularBrands} />
          <Articles />
          {mainInformation && (
            <section
              className="footer__digi-about-us mt-5 pt-5 border-0"
              id="about-main-container"
            >
              <div>
                <div
                  className={`footer__digi-about-us-description ${
                    isShowMainInfo
                      ? "footer__digi-about-us-description--active"
                      : ""
                  }`}
                  id="about-main-content-container"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(mainInformation),
                  }}
                ></div>

                {isShowMainInfo ? (
                  <span
                    className="footer__digi-about-us-see-more"
                    onClick={() => setIsShowMainInfo(false)}
                  >
                    بستن
                    <svg
                      className="footer__digi-about-us-see-more-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 64"
                      id="arrow"
                      style={{ width: "18px", height: "18px", fill: "#19bfd3" }}
                    >
                      <path
                        fill="#19bfd3"
                        d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                      ></path>
                    </svg>
                  </span>
                ) : (
                  <span
                    className="footer__digi-about-us-see-more mt-3"
                    onClick={() => setIsShowMainInfo(true)}
                  >
                    مشاهده بیشتر
                    <svg
                      className="footer__digi-about-us-see-more-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 64"
                      id="arrow"
                      style={{ width: "18px", height: "18px", fill: "#19bfd3" }}
                    >
                      <path
                        fill="#19bfd3"
                        d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                      ></path>
                    </svg>
                  </span>
                )}
              </div>
            </section>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
