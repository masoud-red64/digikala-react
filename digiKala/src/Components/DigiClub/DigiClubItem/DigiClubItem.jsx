import React from "react";

import "./DigiClubItem.css";

export default function DigiClubItem({ title, img, children }) {
  return (
    <div href="#" className="digiclub__content-left-item">
      <a href="#" className="digiclub__content-left-item-link">
        {children}
        <p className="digiclub__content-left-item-link-text">{title}</p>
        <img
          src={img}
          alt="wheel spinner"
          className="digiclub__content-left-item-link-img"
        />
      </a>
    </div>
  );
}
