import React from "react";

import "./CommentDesktop.css";
import { enToPersianNumber } from "../../../../../../../../../DigiKala/frontend/js/funcs/utils";

export default function CommentDesktop({
  title,
  text,
  userID,
  productID,
  point,
  suggest,
  date,
}) {
  return (
    <div className="product-comments-desktop__left-content">
      <div className="">
        <p
          className={`product-comments-desktop__left-content-score ${
            point < 2 ? "red" : point < 4 ? "yellow" : "green"
          }`}
        >
          {enToPersianNumber(point)}.۰
        </p>
      </div>
      <div className="flex-grow-1">
        <div className="product-comments-desktop__left-content-top">
          <div className="d-flex align-items-center justify-content-between">
            <p className="product-comments-desktop__left-content-top-title">
              {title}
            </p>
            <svg
              id="moreVert"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              style={{
                width: "20px",
                height: "20px",
                fill: "#9e9fb1",
              }}
            >
              <path
                fillRule="evenodd"
                d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-2 4c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm2 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="product-comments-desktop__left-content-top-details">
            <p className="product-comments-desktop__left-content-top-details-date">
              {date}
            </p>
            <svg
              className="mx-2"
              id="dotOutline"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              style={{
                width: "16px",
                height: "16px",
                fill: "#e0e0e6",
              }}
            >
              <circle cx="8" cy="8" r="2"></circle>
            </svg>
            <p className="product-comments-desktop__left-content-top-details-user">
              {userID}
            </p>
            <p className="product-comments-desktop__left-content-top-details-buyer">
              خریدار
            </p>
          </div>
        </div>
        <div className="product-comments-desktop__left-content-center">
          {suggest ? (
            <p className="product-comments-desktop__left-content-center-suggest green">
              <svg
                id="thumbsUp"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                style={{ width: "16px", height: "16px", fill: "#00a049" }}
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 8l3.15-4.2a4.5 4.5 0 013.6-1.8 2.483 2.483 0 012.449 2.89L16.18 8h2.424a3 3 0 012.951 3.537l-.974 5.357A5 5 0 0115.661 21h-6.55c-.148 0-.294-.033-.428-.096l-.824-.39A1 1 0 017 21H3a1 1 0 01-1-1V9a1 1 0 011-1h4.5zm.5 2v8.367L9.336 19h6.326a3 3 0 002.951-2.463l.974-5.358A1 1 0 0018.603 10H15a1 1 0 01-.986-1.164l.712-4.274A.482.482 0 0014.25 4a2.5 2.5 0 00-2 1L8.8 9.6a1 1 0 01-.8.4zm-2 0H4v9h2v-9z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>پیشنهاد می‌کنم</span>
            </p>
          ) : (
            <p className="product-comments-desktop__left-content-center-suggest yellow">
              <svg
                id="thumbsDown"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                style={{ width: "16px", height: "16px", fill: "#f9a825" }}
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 16l3.15 4.2a4.5 4.5 0 003.6 1.8 2.482 2.482 0 002.449-2.89L16.18 16h2.424a3 3 0 002.951-3.537l-.974-5.357A5 5 0 0015.661 3h-6.55a1 1 0 00-.428.096l-.824.39A1 1 0 007 3H3a1 1 0 00-1 1v11a1 1 0 001 1h4.5zm.5-2V5.633L9.336 5h6.326a3 3 0 012.951 2.463l.974 5.358A1 1 0 0118.603 14H15a1 1 0 00-.986 1.164l.712 4.274a.482.482 0 01-.476.562 2.5 2.5 0 01-2-1L8.8 14.4A1 1 0 008 14zm-2 0H4V5h2v9z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>پیشنهاد نمی‌کنم</span>
            </p>
          )}
          <p className="product-comments-desktop__left-content-center-text">
            {text}
          </p>
          <div className="product-comments-desktop__left-content-center-point">
            <div className="product-comments-desktop__left-content-center-point-pos">
              <svg
                id="addSimple"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                style={{
                  width: "14px",
                  height: "14px",
                  fill: " #00a049",
                }}
              >
                <path
                  fillRule="evenodd"
                  d="M13 4h-2v7H4v2h7v7h2v-7h7v-2h-7V4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              کفی خوب
            </div>
            <div className="product-comments-desktop__left-content-center-point-neg">
              <svg
                id="removeSimple"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                style={{
                  width: "14px",
                  height: "14px",
                  fill: " #d32f2f",
                }}
              >
                <path d="M20 11v2H4v-2h16z"></path>
              </svg>
              دوخت بد
            </div>
          </div>
        </div>
        <div className="product-comments-desktop__left-content-bottom">
          <div className="d-flex align-items-center">
            <p className="product-comments-desktop__left-content-bottom-seller">
              <svg
                id="seller"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                style={{
                  width: "16px",
                  height: "16px",
                  fill: "#3f4064",
                }}
              >
                <path
                  fillRule="evenodd"
                  d="M19.5 3h-15a1 1 0 00-.959.715l-1.5 5.053A1 1 0 002 9.053V12a1 1 0 001 1h.006l.038 7.006A1 1 0 004.048 21l9.956-.035a1 1 0 00.996-1V13h4v8h2v-8a1 1 0 001-1V9.053a1 1 0 00-.041-.285l-1.5-5.053A1 1 0 0019.5 3zm.5 8V9.198L18.754 5H5.246L4 9.198V11h16zm-7 2H5.006l.033 5.997L13 18.968V13z"
                  clipRule="evenodd"
                ></path>
              </svg>
              پاما شوز
            </p>
            <svg
              className="mx-2"
              id="dotOutline"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              style={{
                width: "16px",
                height: "16px",
                fill: "#e0e0e6",
              }}
            >
              <circle cx="8" cy="8" r="2"></circle>
            </svg>
            <p className="product-comments-desktop__left-content-bottom-info">
              <svg
                id="variationSize"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                style={{
                  width: "16px",
                  height: "16px",
                  fill: "#3f4064",
                }}
              >
                <path
                  fillRule="evenodd"
                  d="M12 2h9a1 1 0 011 1v18a1 1 0 01-1 1h-9a1 1 0 01-1-1V3a1 1 0 011-1zm1 17v1h7V4h-7v1h2v2h-2v2h2v2h-2v2h2v2h-2v2h2v2h-2zm-4.707-2.707L7 17.586V6.414l1.293 1.293 1.414-1.414-3-3a1 1 0 00-1.414 0l-3 3 1.414 1.414L5 6.414v11.172l-1.293-1.293-1.414 1.414 3 3a1 1 0 001.414 0l3-3-1.414-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              36
            </p>
          </div>

          <div className="product-comments-desktop__left-content-bottom-useful">
            <p className="product-comments-desktop__left-content-bottom-useful-text">
              آیا این دیدگاه مفید بود؟
            </p>
            <div className="product-comments-desktop__left-content-bottom-useful-btns">
              <button className="product-comments-desktop__left-content-bottom-useful-like-btn">
                <span>۰</span>
                <svg
                  id="thumbsUp"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style={{ width: "18px", height: "18px" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 8l3.15-4.2a4.5 4.5 0 013.6-1.8 2.483 2.483 0 012.449 2.89L16.18 8h2.424a3 3 0 012.951 3.537l-.974 5.357A5 5 0 0115.661 21h-6.55c-.148 0-.294-.033-.428-.096l-.824-.39A1 1 0 017 21H3a1 1 0 01-1-1V9a1 1 0 011-1h4.5zm.5 2v8.367L9.336 19h6.326a3 3 0 002.951-2.463l.974-5.358A1 1 0 0018.603 10H15a1 1 0 01-.986-1.164l.712-4.274A.482.482 0 0014.25 4a2.5 2.5 0 00-2 1L8.8 9.6a1 1 0 01-.8.4zm-2 0H4v9h2v-9z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <button className="product-comments-desktop__left-content-bottom-useful-dis-like-btn">
                <span>۱</span>
                <svg
                  id="thumbsDown"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style={{ width: "18px", height: "18px" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 16l3.15 4.2a4.5 4.5 0 003.6 1.8 2.482 2.482 0 002.449-2.89L16.18 16h2.424a3 3 0 002.951-3.537l-.974-5.357A5 5 0 0015.661 3h-6.55a1 1 0 00-.428.096l-.824.39A1 1 0 007 3H3a1 1 0 00-1 1v11a1 1 0 001 1h4.5zm.5-2V5.633L9.336 5h6.326a3 3 0 012.951 2.463l.974 5.358A1 1 0 0118.603 14H15a1 1 0 00-.986 1.164l.712 4.274a.482.482 0 01-.476.562 2.5 2.5 0 01-2-1L8.8 14.4A1 1 0 008 14zm-2 0H4V5h2v9z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
