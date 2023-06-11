import React from "react";

import "./Categories.css";
import CategoryItem from "./CategoryItem/CategoryItem";

export default function Categories({title,mains}) {
  return (
    <section className="categories">
      <p className="categories__title">{title}</p>
      <div className="row" id="categories-container">
        {
          mains.map(main => (
            <CategoryItem key={main.id} {...main}/>
          ))
        }
      </div>
    </section>
  );
}
