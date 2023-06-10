import React from "react";

import "./Articles.css";
import ArticleItem from "./ArticleItem/ArticleItem";

export default function Articles() {
  return (
    <section className="readigns mt-5">
      <div className="readigns__top">
        <p className="readigns__title">خواندنی ها</p>
        <a href="#" className="readigns__see-more">
          مطالب بیشتر در دیجی کالا مگ
          <svg
            className="readigns__see-more-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            id="arrow"
          >
            <path
              fill="#134563"
              d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
            ></path>
          </svg>
        </a>
      </div>
      <div className="readigns__content-wrapper">
        <div className="row gap-3 gap-lg-0">
          <ArticleItem
            desc={`
              آشنایی با هم‌بنیان‌گذار سوم اپل که احتمالا درباره‌اش چیزی
              نمی‌دانید (زیرنویس فارسی)`}
            img={"./images/readings/reading1.jpg"}
          />
          <ArticleItem
            desc={`بررسی مداد لب لیزر شماره ۰۷؛ با جلوه‌ی نهایی زیبا و مات`}
            img={"./images/readings/reading2.jpg"}
          />
          <ArticleItem
            desc={`بررسی گلکسی A04 سامسونگ؛ طراحی ساده با شارژدهی بسیار خوب`}
            img={"./images/readings/reading3.jpg"}
          />
          <ArticleItem
            desc={`تست باتری گلکسی A54 و A34 منتشر شد`}
            img={"./images/readings/reading4.jpg"}
          />
        </div>
      </div>
    </section>
  );
}
