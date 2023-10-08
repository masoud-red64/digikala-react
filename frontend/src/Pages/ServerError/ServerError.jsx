import React from "react";
import "./ServerError.css";

export default function ServerError() {
  return (
    <div className="server-page">
      <div className="server-page__content">
        <p className="server-page__content-title">Uh-Oh...</p>
        <p className="server-page__content-text">
          Server is updating... please try another time, we solve problem as
          soon as☺
        <p className="server-page__content-number">500</p>
        </p>
      </div>
    </div>
  );
}
