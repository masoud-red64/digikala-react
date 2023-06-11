import React from "react";
import CategoryBannerBox from "./CategoryBannerBox/CategoryBannerBox";

import "./CategoryBanner.css";
import { shuffled } from "../../func/utils";

export default function CategoryBanner({ col, banners }) {
  return (
    <section className="products-categories-banner">
      <div className="row">
        {banners &&
          shuffled([...banners])
            .slice(0, 4)
            .map((banner) => (
              <CategoryBannerBox key={banner.id} col={col} banner={banner} />
            ))}
      </div>
    </section>
  );
}
