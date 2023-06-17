import React from "react";

import "./CommentMobile.css";

export default function CommentMobile() {
  return (
    <div className="product-comments-mobile__content">
      <p className="product-comments-mobile__content-title">ناراضی</p>
      <p className="product-comments-mobile__content-suggest yellow">
        <svg
          id="thumbsDown"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          style={{
            width: "16px",
            height: "16px",
            fill: "#f9a825",
          }}
        >
          <path
            fillRule="evenodd"
            d="M7.5 16l3.15 4.2a4.5 4.5 0 003.6 1.8 2.482 2.482 0 002.449-2.89L16.18 16h2.424a3 3 0 002.951-3.537l-.974-5.357A5 5 0 0015.661 3h-6.55a1 1 0 00-.428.096l-.824.39A1 1 0 007 3H3a1 1 0 00-1 1v11a1 1 0 001 1h4.5zm.5-2V5.633L9.336 5h6.326a3 3 0 012.951 2.463l.974 5.358A1 1 0 0118.603 14H15a1 1 0 00-.986 1.164l.712 4.274a.482.482 0 01-.476.562 2.5 2.5 0 01-2-1L8.8 14.4A1 1 0 008 14zm-2 0H4V5h2v9z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span>پیشنهاد نمی‌کنم</span>
      </p>
      <p className="product-comments-mobile__content-text">
        واقعا برا دیجیکالا متاسم که روز به روز بدتر میشه و کم کم دارم به این
        نتیجه میرسم کلا از گوشیم پاکش کنم من چی سفارش دادم ان چی فرستاده خودتون
        ببینید
      </p>
      <div className="product-comments-mobile__content-details">
        <p className="product-comments-mobile__content-details-date">
          ۱۳ مهر ۱۴۰۰
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
        <p className="product-comments-mobile__content-details-user">
          مریم فلاح
        </p>
      </div>
    </div>
  );
}
