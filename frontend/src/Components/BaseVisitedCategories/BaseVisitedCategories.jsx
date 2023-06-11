import React from "react";

import "./BaseVisitedCategories.css";
import BaseVisitedCategory from "./BaseVisitedCategory/BaseVisitedCategory";

export default function BaseVisitedCategories({ mt, page }) {
  return (
    <section className={`categories-based-visited ${mt}`}>
      <div className="row" id="categories-based-visited-container">
        {page === "indexPage" && (
          <>
            <BaseVisitedCategory page={page} title={"گوشی موبایل"} />
            <BaseVisitedCategory page={page} title={"گوشی موبایل"} />
            <BaseVisitedCategory page={page} title={"گوشی موبایل"} />
            <BaseVisitedCategory page={page} title={"گوشی موبایل"} />
          </>
        )}
        {page === "mainPage" && (
          <>
            <BaseVisitedCategory page={page} title={"محبوب ترین ها"} />
            <BaseVisitedCategory page={page} title={"جدیدترین ها"} />
            <BaseVisitedCategory page={page} title={"ارزان ترین ها"} />
          </>
        )}
      </div>
    </section>
  );
}
