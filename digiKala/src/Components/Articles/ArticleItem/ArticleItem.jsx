import React from "react";

import "./ArticleItem.css";

export default function ArticleItem({ img, desc }) {
  return (
    <div className="col-12 col-lg-3">
      <a href="#" className="readigns__content">
        <img src={img} alt="Apple" className="readigns__content-img" />
        <p className="readigns__content-desc">{desc}</p>
      </a>
    </div>
  );
}
