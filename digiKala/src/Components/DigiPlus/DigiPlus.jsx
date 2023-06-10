import React from "react";

import "./DigiPlus.css";
import DigiPlusProduct from "./DigiPlusProduct/DigiPlusProduct";

export default function DigiPlus() {
  return (
    <section className="digiplus mt-5">
      <div className="digiplus__right">
        <a href="#" className="digiplus__right-logo">
          <img
            src="./images/digiplus/digiplus-logo.svg"
            alt="logo"
            className="digiplus__right-logo-img"
          />
        </a>
        <p className="digiplus__right-text">خدمات ویژه برای اعضای دیجی پلاس</p>
        <a href="#" className="digiplus__right-btn">
          عضویت
          <svg
            className="digiplus__right-btn-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            id="arrow-left"
          >
            <rect width="256" height="256" fill="none"></rect>
            <line
              x1="216"
              x2="40"
              y1="128"
              y2="128"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
            <polyline
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
              points="112 56 40 128 112 200"
            ></polyline>
          </svg>
        </a>
      </div>
      <div className="digiplus__left">
        <div className="digiplus__left-top">
          <p className="digiplus__left-top-title">
            <svg
              className="digiplus__left-top-title-icon"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 1000 1000"
              id="jet-plane"
            >
              <path d="M884.28 687a16 16 0 01-6.53-1.4l-96.08-43a16 16 0 0113.08-29.2l81.48 36.47 1.54-3.44a71.25 71.25 0 00-35.88-94l-60.22-27a16 16 0 0113.08-29.2l60.22 27a103.27 103.27 0 0152 136.31l-8.08 18A16 16 0 01884.28 687zM733.19 502.16a15.93 15.93 0 01-6.53-1.4l-182.27-81.6a16 16 0 01-9.46-14.6V186.89c0-14.53-3.3-27-9.29-35.22S511.36 139.72 500 139.72c-23.18 0-34.93 16.29-34.93 48.43V404.56a16 16 0 01-9.46 14.6l-182.27 81.6a16 16 0 11-13.08-29.2l172.81-77.37v-206c0-22.67 5-41.2 14.8-55.07 11.76-16.59 29.78-25.36 52.13-25.36 21.65 0 39.44 8.66 51.45 25 10.13 13.83 15.48 32.54 15.48 54.13v207.3l172.81 77.37a16 16 0 01-6.55 30.6zM673 892.28a16 16 0 01-8-2.14L500 794.89 335 890.14a16 16 0 01-21.85-5.86l-9.89-17.12a88.5 88.5 0 0132.38-120.92l97.56-56.32V558.74a17 17 0 01-.16-2.27V546.41l-159.73 71.5a16 16 0 01-13.08-29.2l182.27-81.59a16 16 0 0122.54 14.6V554.2a15.45 15.45 0 01.16 2.27V699.16a16 16 0 01-8 13.86L351.67 774A56.49 56.49 0 00331 851.16l1.88 3.27L492 762.55a16 16 0 0116 0l159.12 91.88 1.89-3.27A56.51 56.51 0 00648.33 774L542.77 713a16 16 0 01-8-13.86V556.47a15.45 15.45 0 01.16-2.27V521.72a16 16 0 0122.54-14.6l182.27 81.59a16 16 0 11-13.08 29.2l-159.73-71.5v10.06a15.45 15.45 0 01-.16 2.27V689.92l97.56 56.32a88.51 88.51 0 0132.39 120.92l-9.9 17.12A16 16 0 01673 892.28zM115.72 687a16 16 0 01-14.61-9.46l-8.08-18a103.27 103.27 0 0152-136.31l60.22-27a16 16 0 0113.08 29.2l-60.22 27a71.25 71.25 0 00-35.88 94l1.54 3.44 81.48-36.47a16 16 0 1113.08 29.2l-96.08 43A16 16 0 01115.72 687z"></path>
              <path d="M266.8,702.17a16,16,0,0,1-16-16v-291c0-13.57-6.14-39.47-11.51-51.08-5.36,11.61-11.5,37.51-11.5,51.08v291a16,16,0,0,1-32,0v-291c0-11.54,3.26-30.67,7.93-46.53,5-17.06,13.91-39.73,32.93-39.73h5.29c19,0,27.9,22.67,32.93,39.73,4.67,15.86,7.93,35,7.93,46.53v291A16,16,0,0,1,266.8,702.17Z"></path>
              <path d="M196.16 761.13a16 16 0 01-16-16v-59a16 16 0 0116-16h15.63a16 16 0 01.37 32v19.28l21.17-8.51a16 16 0 0111.93 0l21.17 8.51V702.17a16 16 0 01.37-32h15.63a16 16 0 0116 16v59a16 16 0 01-22 14.85l-37.17-15-37.16 15A16.12 16.12 0 01196.16 761.13zM788.21 702.17a16 16 0 01-16-16v-291c0-13.57-6.14-39.47-11.5-51.08-5.37 11.61-11.51 37.51-11.51 51.08v291a16 16 0 01-32 0v-291c0-11.54 3.26-30.67 7.93-46.53 5-17.06 13.9-39.73 32.93-39.73h5.29c19 0 27.9 22.67 32.93 39.73 4.67 15.86 7.93 35 7.93 46.53v291A16 16 0 01788.21 702.17z"></path>
              <path d="M803.84,761.13a16.12,16.12,0,0,1-6-1.15l-37.16-15-37.17,15a16,16,0,0,1-22-14.85v-59a16,16,0,0,1,16-16H733.2a16,16,0,0,1,.37,32v19.28l21.17-8.51a16,16,0,0,1,11.93,0l21.17,8.51V702.17a16,16,0,0,1,.37-32h15.63a16,16,0,0,1,16,16v59a16,16,0,0,1-16,16Z"></path>
            </svg>
            ارسال فوری رایگان
          </p>
          <a href="#" className="digiplus__left-top-see-all">
            مشاهده همه
            <svg
              className="digiplus__left-top-see-all-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              id="arrow"
            >
              <path
                fill="#941b80"
                d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
              ></path>
            </svg>
          </a>
        </div>
        <div className="digiplus__left-bottom" id="digiplus-products-container">
          <DigiPlusProduct />
          <DigiPlusProduct />
          <DigiPlusProduct />
          <DigiPlusProduct />
          <DigiPlusProduct />
          <DigiPlusProduct />
          <DigiPlusProduct />
          <DigiPlusProduct />
        </div>
      </div>
    </section>
  );
}
