import React, { useEffect, useState } from "react";

import "./BaseVisitedCategories.css";
import BaseVisitedCategory from "./BaseVisitedCategory/BaseVisitedCategory";
import { shuffled } from "../../func/utils";

export default function BaseVisitedCategories({ mt, page }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/categories")
      .then((res) => res.json())
      .then((categories) => {
        setCategories(categories);
        console.log(categories);
      });
  }, []);

  return (
    <section className={`categories-based-visited ${mt}`}>
      <div className="row" id="categories-based-visited-container">
        {page === "indexPage" && (
          <>
            {categories &&
              shuffled([...categories])
                .slice(0, 4)
                .map((category) => (
                  <BaseVisitedCategory
                    key={category.id}
                    page={page}
                    title={category.title}
                    categoryID={category.id}
                  />
                ))}
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
