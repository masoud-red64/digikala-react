import React from "react";
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

export default function Main() {
  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <TopSwiperJs borderRadius={true} />
          <SuggestSwiper />
          <Categories title={"خرید بر اساس دسته بندی"} />
          <CategoryBanner
            col={"col-12 col-lg-6"}
            img={[
              "/images/main/product-banner/cloth-sleep.webp",
              "/images/main/product-banner/purse-men-women.webp",
              "/images/main/product-banner/women-shoes.webp",
              "/images/main/product-banner/مانتو.webp",
            ]}
          />
          <BaseVisitedCategories mt={"mt-1"} page={"mainPage"} />
          <SuggestCategoriesSwiper title={"دسته بندی های پیشنهادی"} />
          <CategoryBanner
            col={"col-6 col-lg-3"}
            img={[
              "/images/product-banner/product1.webp",
              "/images/product-banner/product2.webp",
              "/images/product-banner/product3.webp",
              "/images/product-banner/product4.webp",
            ]}
          />
          <BestSelling />
          <Stores />
          <SelectedProducts title={"پرتکرارترین کالاها"} icon={false} />
          <PopularBrandSwiper />
          <Articles />
        </div>
      </div>
      <Footer />
    </>
  );
}
