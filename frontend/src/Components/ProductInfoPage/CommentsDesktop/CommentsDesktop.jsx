import React from "react";

import "./CommentsDesktop.css";
import CommentDesktop from "./CommentDesktop/CommentDesktop";

export default function CommentsDesktop({
  commentRef,
  comments,
  setIsShowModalComment,
  isShowAllCommentsModal,
  setIsShowAllCommentsModal,
  productImages,
}) {
  return (
    <div
      className={`product-comments-desktop ${
        isShowAllCommentsModal ? "show" : ""
      } ${comments.length ? "" : "border-0"}`}
      id="commentsDesktop"
      ref={commentRef}
    >
      <p className="product-comments-desktop__title d-flex d-lg-block justify-content-between">
        امتیاز و دیدگاه کاربران
        <svg
          className="d-lg-none cursor-pointer product-comments-desktop__title-icon"
          id="arrowRight"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          style={{
            width: "20px",
            height: "20px",
            fill: "var(--color-icon-high-emphasis)",
          }}
          onClick={() => setIsShowAllCommentsModal(false)}
        >
          <path
            fillRule="evenodd"
            d="M12.707 19.707l-1.414-1.414L16.586 13H4v-2h12.586l-5.293-5.293 1.414-1.414 7 7a1 1 0 010 1.414l-7 7z"
            clipRule="evenodd"
          ></path>
        </svg>
      </p>

      {comments.length ? (
        <div className="product-comments-desktop__container">
          <div className="row">
            <div className="col-12 col-lg-3">
              <div className="product-comments-desktop__right">
                <div className="product-comments-desktop__right-score">
                  <p className="product-comments-desktop__right-score-num">
                    <span>۳.۸</span> از ۵
                  </p>
                  <div className="product-comments-desktop__right-score-star">
                    <img
                      loading="lazy"
                      src="/images/product-page/star-yellow.png"
                      alt="star"
                      width="20"
                      height="20"
                      style={{ objectFit: "contain" }}
                    />
                    <img
                      loading="lazy"
                      src="/images/product-page/star-yellow.png"
                      alt="star"
                      width="20"
                      height="20"
                      style={{ objectFit: "contain" }}
                    />
                    <img
                      loading="lazy"
                      src="/images/product-page/star-yellow.png"
                      alt="star"
                      width="20"
                      height="20"
                      style={{ objectFit: "contain" }}
                    />
                    <img
                      loading="lazy"
                      src="/images/product-page/star-yellow.png"
                      alt="star"
                      width="20"
                      height="20"
                      style={{ objectFit: "contain" }}
                    />
                    <img
                      loading="lazy"
                      src="/images/product-page/star.png"
                      alt="star"
                      width="20"
                      height="20"
                      style={{ objectFit: "contain" }}
                    />
                    <p className="product-comments-desktop__right-score-star-from-total">
                      از مجموع ۱۹ امتیاز
                    </p>
                  </div>
                </div>

                <div className="product-comments-desktop__right-topic">
                  <p className="product-comments-desktop__right-topic-title">
                    موضوع دیدگاه‌ها
                  </p>
                  <div className="product-comments-desktop__right-topic-item">
                    <div className="product-comments-desktop__right-topic-item-top">
                      <p className="product-comments-desktop__right-topic-item-top-text">
                        کیفیت و کارایی
                      </p>
                      <p className="product-comments-desktop__right-topic-item-top-num">
                        ۱۴ دیدگاه
                      </p>
                    </div>
                    <div className="product-comments-desktop__right-topic-item-progress">
                      <div className="product-comments-desktop__right-topic-item-progress-pos-quality"></div>
                      <div className="product-comments-desktop__right-topic-item-progress-neg-quality"></div>
                    </div>
                    <div className="product-comments-desktop__right-topic-item-percent">
                      <p className="product-comments-desktop__right-topic-item-percent-pos">
                        ۸۶% مثبت
                      </p>
                      <p className="product-comments-desktop__right-topic-item-percent-neg">
                        ۷% منفی
                      </p>
                    </div>
                  </div>
                  <div className="product-comments-desktop__right-topic-item">
                    <div className="product-comments-desktop__right-topic-item-top">
                      <p className="product-comments-desktop__right-topic-item-top-text">
                        قیمت و ارزش خرید
                      </p>
                      <p className="product-comments-desktop__right-topic-item-top-num">
                        ۴ دیدگاه
                      </p>
                    </div>
                    <div className="product-comments-desktop__right-topic-item-progress">
                      <div className="product-comments-desktop__right-topic-item-progress-pos-worth"></div>
                      <div className="product-comments-desktop__right-topic-item-progress-neg-worth"></div>
                    </div>
                    <div className="product-comments-desktop__right-topic-item-percent">
                      <p className="product-comments-desktop__right-topic-item-percent-pos">
                        ۲۵% مثبت
                      </p>
                      <p className="product-comments-desktop__right-topic-item-percent-neg">
                        ۷۵% منفی
                      </p>
                    </div>
                  </div>
                  <div className="product-comments-desktop__right-topic-item">
                    <div className="product-comments-desktop__right-topic-item-top">
                      <p className="product-comments-desktop__right-topic-item-top-text">
                        کیفیت و کارایی
                      </p>
                      <p className="product-comments-desktop__right-topic-item-top-num">
                        ۱ دیدگاه
                      </p>
                    </div>
                    <div className="product-comments-desktop__right-topic-item-progress">
                      <div className="product-comments-desktop__right-topic-item-progress-pos-Similarity-or-contrast"></div>
                      <div className="product-comments-desktop__right-topic-item-progress-neg-Similarity-or-contrast"></div>
                    </div>
                    <div className="product-comments-desktop__right-topic-item-percent">
                      <p className="product-comments-desktop__right-topic-item-percent-pos">
                        ۸۶% مثبت
                      </p>
                      <p className="product-comments-desktop__right-topic-item-percent-neg">
                        ۱۰۰% منفی
                      </p>
                    </div>
                  </div>

                  <p className="product-comments-desktop__right-topic-caption">
                    این جداسازی به صورت آزمایشی انجام شده است و ممکن است دقیق
                    نباشد
                  </p>
                </div>

                <div className="product-comments-desktop__right-submit-comment">
                  <p className="product-comments-desktop__right-submit-comment-text mt-4">
                    شما هم درباره این کالا دیدگاه ثبت کنید
                  </p>
                  <button
                    className="product-comments-desktop__right-submit-comment-btn"
                    onClick={() =>
                      authContext.isLogin
                        ? setIsShowModalComment(true)
                        : navigate("/login")
                    }
                  >
                    ثبت دیدگاه
                  </button>
                  <p className="product-comments-desktop__right-submit-comment-text">
                    <svg
                      id="infoOutline"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      style={{
                        width: "16px",
                        height: "16px",
                        fill: "#81858b",
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12zm18 0a8 8 0 11-16 0 8 8 0 0116 0zm-10-2h3v7h-2v-5h-1v-2zm3-2a1 1 0 10-2 0 1 1 0 002 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    ۵ امتیاز دیجی‌کلاب
                  </p>
                  <p className="product-comments-desktop__right-submit-comment-text">
                    پس از تایید شدن دیدگاه، با رفتن به صفحه ماموریت‌های
                    دیجی‌کلاب امتیازتان را دریافت کنید.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-9">
              <div className="product-comments-desktop__left">
                <div className="product-comments-desktop__left-buyers-photos">
                  {productImages.length ? (
                    <div id="comments-image-container" className="d-flex gap-3">
                      {productImages.map((img) => (
                        <img
                          loading="lazy"
                          key={img.id}
                          src={`/img/${img.img}`}
                          alt="product"
                          width="57"
                          height="57"
                          style={{ objectFit: "cover", borderRadius: "8px" }}
                        />
                      ))}
                    </div>
                  ) : null}

                  <p className="product-comments-desktop__left-buyers-photos-see-all">
                    مشاهده همه
                    <svg
                      id="chevronLeft"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      style={{
                        width: "18px",
                        height: "18px",
                        fill: "#19bfd3",
                      }}
                    >
                      <path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path>
                    </svg>
                  </p>
                </div>

                <div className="product-comments-desktop__left-navbar">
                  <div className="product-comments-desktop__left-navbar-sort">
                    <p className="product-comments-desktop__left-navbar-sort-text">
                      <svg
                        id="sort"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        style={{
                          width: "20px",
                          height: "20px",
                          fill: "#3f4064",
                        }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 15.793L3.707 13.5l-1.414 1.414 4 4a1 1 0 001.414 0l4-4-1.414-1.414L8 15.793V5H6v10.793zM22 5H10v2h12V5zm0 4H12v2h10V9zm0 4h-8v2h8v-2zm-6 4h6v2h-6v-2z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>مرتب سازی:</span>
                    </p>
                    <ul className="product-comments-desktop__left-navbar-sort-list">
                      <li className="product-comments-desktop__left-navbar-sort-item product-comments-desktop__left-navbar-sort-item--active">
                        جدیدترین
                      </li>
                      <li className="product-comments-desktop__left-navbar-sort-item">
                        دیدگاه خریداران
                      </li>
                      <li className="product-comments-desktop__left-navbar-sort-item">
                        مفیدترین
                      </li>
                    </ul>
                  </div>
                  <p className="product-comments-desktop__left-navbar-comment-num">
                    ۱۶ دیدگاه
                  </p>
                </div>

                <div id="product-comments-container">
                  {comments.map((comment) => (
                    <CommentDesktop key={comment.id} {...comment} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
