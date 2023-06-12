import React, { useEffect, useState } from "react";

import "./BaseVisitedCategories.css";
import BaseVisitedCategory from "./BaseVisitedCategory/BaseVisitedCategory";
import { shuffled } from "../../func/utils";
import BaseVisitedProduct from "./BaseVisitedProduct/BaseVisitedProduct";

export default function BaseVisitedCategories({
  mt,
  page,
  cheapestProducts,
  popularityProducts,
  mostOffsProducts,
}) {
  const [categories, setCategories] = useState([]);
  const [baseVisitedProducts, setBaseVisitedProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/categories")
      .then((res) => res.json())
      .then((categories) => {
        setCategories(categories);
        fetch("http://localhost:3000/api/products")
          .then((res) => res.json())
          .then((products) => {
            setBaseVisitedProducts(products);
          });
      });
  }, []);
  console.log(baseVisitedProducts);

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
                    products={baseVisitedProducts.filter(
                      (product) => product.categoryID === category.id
                    )}
                  />
                ))}
          </>
        )}
        {page === "mainPage" && (
          <>
            <BaseVisitedCategory
              page={page}
              title={"محبوب ترین ها"}
              products={popularityProducts.slice(0, 4)}
            />
            <BaseVisitedCategory
              page={page}
              title={"بیشترین تخفیف ها"}
              products={mostOffsProducts.slice(0, 4)}
            />
            <BaseVisitedCategory
              page={page}
              title={"ارزان ترین ها"}
              products={cheapestProducts.slice(0, 4)}
            />
          </>
        )}
      </div>
    </section>
  );
}
