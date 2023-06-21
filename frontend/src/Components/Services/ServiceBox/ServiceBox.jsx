import React from "react";

import "./ServiceBox.css";

export default function ServiceBox({img, title}) {
  return (
    <div className="col-3 col-xl-1 mb-5">
      <div className="services__content">
        <a className="services__content-link" href="#">
          <img
            src={img}
            alt="service img"
            className="services__content-img"
            loading="lazy"
          />
          <p className="services__content-text">{title}</p>
        </a>
      </div>
    </div>
  );
}
