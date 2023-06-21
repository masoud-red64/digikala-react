import React from "react";

import './Store.css'

export default function Store() {
  return (
    <div className="col-12 col-lg-4">
      <div className="seller-wrapper">
        <div className="seller-container">
          <div className="seller__top">
            <div className="seller__top-right">
              <div className="seller__top-right-icons">
                <svg
                  id="seller"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style={{width: '24px', height: '24px', fill: '#3f4064'}}
                >
                  <path
                    fillRule="evenodd"
                    d="M19.5 3h-15a1 1 0 00-.959.715l-1.5 5.053A1 1 0 002 9.053V12a1 1 0 001 1h.006l.038 7.006A1 1 0 004.048 21l9.956-.035a1 1 0 00.996-1V13h4v8h2v-8a1 1 0 001-1V9.053a1 1 0 00-.041-.285l-1.5-5.053A1 1 0 0019.5 3zm.5 8V9.198L18.754 5H5.246L4 9.198V11h16zm-7 2H5.006l.033 5.997L13 18.968V13z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="seller__topRight-verify-icon">
                  <svg
                    id="verifiedUser"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    style={{width: '16px', height: '16px', fill: '#00a049'}}
                  >
                    <path
                      fillRule="evenodd"
                      d="M20.661 7l-.274 2.623a.347.347 0 00.065.24L22 12l-1.548 2.137a.347.347 0 00-.065.24L20.661 17l-2.41 1.073a.346.346 0 00-.177.176L17 20.661l-2.624-.274a.347.347 0 00-.24.065L12 22l-2.138-1.548a.345.345 0 00-.238-.065l-2.625.274-1.073-2.41a.348.348 0 00-.176-.177L3.339 17l.274-2.624a.349.349 0 00-.065-.24L2 12l1.548-2.137a.349.349 0 00.065-.24L3.339 7l2.41-1.073a.345.345 0 00.177-.176L7 3.339l2.625.274a.35.35 0 00.24-.065L12 2l2.137 1.548a.35.35 0 00.24.065L17 3.34l1.073 2.41a.348.348 0 00.176.177L20.661 7zM7.707 10.292l2.793 2.793 5.793-5.793 1.414 1.414-6.5 6.5a1 1 0 01-1.414 0l-3.5-3.5 1.414-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <a href="#" className="seller__top-right-link">
                سمفونی آبی
              </a>
              <p className="seller__top-right-selected">منتخب</p>
            </div>
            <div className="seller__top-left">
              <a href="#" className="seller__top-left-see">
                مشاهده فروشگاه
                <svg
                  id="chevronLeft"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style={{width: '18px', height: '18px', fill: '#19bfd3'}}
                >
                  <path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="seller__content">
            <div className="seller__content-img-wrapper">
              <img
                src="/images/main/seller/20e66e0650317e412a7b799d067791ec289dfe00_1604945758.jpg"
                alt="product"
                className="seller__content-img"
                loading="lazy"
              />
            </div>
            <div className="seller__content-img-wrapper">
              <img
                src="/images/main/seller/6d6ea6b47d2e3992cf201fa39d73bc4e0e7e7dff_1599974245.jpg"
                alt="product"
                className="seller__content-img"
                loading="lazy"
              />
            </div>
            <div className="seller__content-img-wrapper">
              <img
                src="/images/main/seller/971ea788578d46732e2947666e99ba71833c3b29_1620584406.webp"
                alt="product"
                className="seller__content-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
