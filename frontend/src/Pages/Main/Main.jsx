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

  const { shortName } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/api/main/${shortName}`)
      .then((res) => res.json())
      .then((main) => {
        setMainID(main[0].id);
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
      });

    getAllBanner1();
    getAllBanner2();
    getAllMain();
    getSuggestedCategory();
    getAllPopularBrands();
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

  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <TopSwiperJs borderRadius={true} />
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
          <SelectedProducts title={"پرتکرارترین کالاها"} icon={false} />
          <PopularBrandSwiper popularBrands={popularBrands} />
          <Articles />
        </div>
      </div>
      <Footer />
    </>
  );
}
