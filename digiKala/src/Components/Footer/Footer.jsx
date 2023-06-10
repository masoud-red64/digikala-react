import React, { useState } from "react";

import "./Footer.css";

export default function Footer() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="footer__top">
          <img
            src="/images/footer/digi.svg"
            alt="logo"
            className="footer__top-img"
          />
          <button
            className="footer__top-go-up-btn"
            onClick={() => scrollTo(0, 0)}
          >
            بازگشت به بالا
            <svg
              className="footer__top-go-up-btn-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              id="arrow"
            >
              <path
                fill="#134563"
                d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
              ></path>
            </svg>
          </button>
        </div>
        <div className="footer__contact-us mt-4 d-flex flex-column flex-lg-row">
          <p className="footer__contact-us-phone mb-2 ms-3 fs-5 text-secondary">
            تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱
          </p>
          <span className="d-none d-lg-inline">|</span>
          <p className="footer__contact-us-text me-lg-3 fs-5 text-secondary">
            ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم
          </p>
        </div>

        <div className="footer__services d-none d-lg-block m-5">
          <div className="container d-flex justify-content-between">
            <div className="footer__services-content d-flex flex-column align-items-center">
              <img
                src="/images/footer-services/express-delivery.svg"
                alt=""
                className="footer__services-content-img"
              />
              <p className="footer__services-content-text fs-5 text-secondary">
                اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس
              </p>
            </div>
            <div className="footer__services-content d-flex flex-column align-items-center">
              <img
                src="/images/footer-services/cash-on-delivery.svg"
                alt=""
                className="footer__services-content-img"
              />
              <p className="footer__services-content-text fs-5 text-secondary">
                امکان پرداخت در محل
              </p>
            </div>
            <div className="footer__services-content d-flex flex-column align-items-center">
              <img
                src="/images/footer-services/support.svg"
                alt=""
                className="footer__services-content-img"
              />
              <p className="footer__services-content-text fs-5 text-secondary">
                ۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ
              </p>
            </div>
            <div className="footer__services-content d-flex flex-column align-items-center">
              <img
                src="/images/footer-services/days-return.svg"
                alt=""
                className="footer__services-content-img"
              />
              <p className="footer__services-content-text fs-5 text-secondary">
                هفت روز ضمانت بازگشت کالا
              </p>
            </div>
            <div className="footer__services-content d-flex flex-column align-items-center">
              <img
                src="/images/footer-services/original-products.svg"
                alt=""
                className="footer__services-content-img"
              />
              <p className="footer__services-content-text fs-5 text-secondary">
                ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ
              </p>
            </div>
          </div>
        </div>

        <div className="row w-100 mt-3 no-gutter-row">
          <div className="footer__with-digi-list d-flex flex-column col-6 col-lg-3 gap-3 flex-grow-1">
            <p className="fs-4">با دیجی‌کالا</p>
            <a className="text-muted fs-5" href="#">
              اتاق خبر دیجی‌کالا
            </a>
            <a className="text-muted fs-5" href="#">
              فروش در دیجی‌کالا
            </a>
            <a className="text-muted fs-5" href="#">
              فرصت‌های شغلی
            </a>
            <a className="text-muted fs-5" href="#">
              گزارش تخلف در دیجی‌کالا
            </a>
            <a className="text-muted fs-5" href="#">
              تماس با دیجی‌کالا
            </a>
            <a className="text-muted fs-5" href="#">
              درباره دیجی‌کالا
            </a>
          </div>
          <div className="footer__-services-list d-flex flex-column col-6 col-lg-3 gap-3 flex-grow-1">
            <p className="fs-4">خدمات مشتریان</p>
            <a className="text-muted fs-5" href="#">
              پاسخ به پرسش‌های متداول
            </a>
            <a className="text-muted fs-5" href="#">
              رویه‌های بازگرداندن کالا
            </a>
            <a className="text-muted fs-5" href="#">
              شرایط استفاده
            </a>
            <a className="text-muted fs-5" href="#">
              حریم خصوصی
            </a>
            <a className="text-muted fs-5" href="#">
              گزارش باگ
            </a>
          </div>
          <div className="footer__guide-list d-flex flex-column col-12 col-lg-3 gap-3 mt-3 flex-grow-1">
            <p className="fs-4">راهنمای خرید از دیجی‌کالا</p>
            <a className="text-muted fs-5" href="#">
              نحوه ثبت سفارش
            </a>
            <a className="text-muted fs-5" href="#">
              رویه ثبت سفارش
            </a>
            <a className="text-muted fs-5" href="#">
              شیوه‌های پرداخت
            </a>
          </div>
          <div className="footer__with-us-list col-12 col-lg-3 mt-4 flex-grow-1 pe-0">
            <div className="d-flex flex-row flex-lg-column gap-lg-3 justify-content-between mb-5">
              <p className="fs-4">همراه ما باشید!</p>
              <ul className="d-flex">
                <li className="ms-5">
                  <a href="#">
                    <svg
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                      id="instagram"
                    >
                      <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"></path>
                    </svg>
                  </a>
                </li>
                <li className="ms-5">
                  <a href="#">
                    <svg
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                      id="twitter"
                    >
                      <path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"></path>
                    </svg>
                  </a>
                </li>
                <li className="ms-5">
                  <a href="#">
                    <svg
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                      id="linkedin"
                    >
                      <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 33 32"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.58 4.07a5.768 5.768 0 00-.804.33c-.66.324-1.321.978-1.626 1.609-.172.347-.546 1.597-.804 2.667-.029.11.184-.075.781-.671 1.184-1.192 2.31-1.95 3.763-2.546.65-.266 1.92-.625 2.47-.7.168-.024.294-.052.277-.064a28.734 28.734 0 00-1.195-.347c-1.046-.284-1.241-.319-1.856-.342-.494-.017-.781 0-1.005.064zm1.207 2.523a10.498 10.498 0 013.493-.984 10.5 10.5 0 016.877 1.76c2.333 1.573 3.861 3.911 4.436 6.77.149.746.149 2.957 0 3.703-.575 2.859-2.103 5.197-4.436 6.77a10.405 10.405 0 01-10.37.776 10.4 10.4 0 01-5.831-7.899c-.11-.74-.11-2.257 0-2.997a10.399 10.399 0 015.831-7.9zm4.395 5.463c.408-1.592-.643-3.276-2.258-3.611-.994-.209-1.947.086-2.688.827-1.173 1.18-1.178 2.969-.018 4.138 1.615 1.626 4.39.868 4.964-1.354zm5.332-2.142c1.333.348 2.223 1.482 2.223 2.83 0 .874-.247 1.499-.833 2.09-.402.404-.89.682-1.413.81-.724.167-1.333.092-2.04-.261-1.149-.567-1.81-1.898-1.557-3.13.132-.649.35-1.06.816-1.534.603-.608 1.224-.874 2.068-.886.224-.005.558.035.736.081zm-3.982 6.111c0-.463-.27-.885-.706-1.11-1.08-.562-2.264.566-1.758 1.683.155.347.258.457.597.614.902.428 1.867-.186 1.867-1.187zm-5.165.284c.173.029.523.162.776.289 1.149.567 1.81 1.898 1.557 3.13-.132.649-.35 1.06-.816 1.534-.942.955-2.258 1.163-3.464.55-1.546-.787-2.057-2.83-1.069-4.277.66-.954 1.85-1.44 3.016-1.226zm9.813 4.93c.316-1.522-.643-3.055-2.154-3.449a2.991 2.991 0 00-2.838.776 2.935 2.935 0 00.017 4.172c.89.897 2.24 1.11 3.43.532.695-.335 1.379-1.238 1.545-2.031zM23.48 7.212c-.144-.104-.259-.208-.259-.231 0-.024.172.011.39.069.213.058.8.214 1.305.347 1.23.319 1.746.579 2.327 1.152a3.627 3.627 0 011.091 2.639c0 .457-.046.694-.367 1.932a46.007 46.007 0 01-.397 1.435c-.017.012-.057-.167-.098-.399-.235-1.504-.89-3.165-1.723-4.41-.609-.92-1.614-2.036-2.27-2.534zM4.893 17.831c0 .023-.144.578-.316 1.238-.27 1.036-.316 1.273-.316 1.725 0 1.024.373 1.92 1.086 2.632.614.608 1.028.81 2.545 1.216.672.179 1.235.318 1.246.312.012-.011-.051-.08-.143-.15-.322-.25-1.362-1.296-1.707-1.725-1.05-1.302-1.867-3.026-2.223-4.664-.103-.492-.172-.717-.172-.584zm19.442 6.151c.287-.295.626-.671.752-.84.127-.161.236-.277.247-.248.023.07-.591 2.367-.74 2.755-.288.787-.995 1.545-1.788 1.938-1.074.532-1.786.544-3.55.07-1.334-.358-1.333-.36-1.31-.382a5.53 5.53 0 01.62-.145 11.493 11.493 0 005.769-3.148z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <p className="fs-5 mb-4">
              با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید
            </p>
            <form
              action=""
              className="d-flex justify-content-between align-items-center gap-1 w-100"
            >
              <input
                className="footer__email-input flex-grow-1 p-3"
                type="email"
                placeholder="ایمیل شما"
              />
              <button
                className="footer__send-email-btn p-3 border-0 text-white"
                type="submit"
              >
                ثبت
              </button>
            </form>
          </div>
        </div>

        <div className="footer__digi-app">
          <div className="footer__digi-app-title">
            <img
              src="/images/footer/footerlogo2.png"
              alt=""
              className="footer__digi-app-title-img"
            />
            <p className="footer__digi-app-title-text">
              دانلود اپلیکیشن دیجی‌کالا
            </p>
          </div>
          <div className="footer__digi-apps-for-download">
            <a href="#" className="footer__digi-apps-for-download-link">
              <img
                src="/images/footer/google-play.svg"
                alt="google-play"
                className="footer__digi-apps-for-download-img"
              />
            </a>
            <a href="#" className="footer__digi-apps-for-download-link">
              <img
                src="/images/footer/coffe-bazzar.svg"
                alt="coffe-bazzar"
                className="footer__digi-apps-for-download-img"
              />
            </a>
            <a href="#" className="footer__digi-apps-for-download-link">
              <img
                src="/images/footer/myket.svg"
                alt="myket"
                className="footer__digi-apps-for-download-img"
              />
            </a>
            <a href="#" className="footer__digi-apps-for-download-link">
              <img
                src="/images/footer/sib-app.svg"
                alt="sib-app"
                className="footer__digi-apps-for-download-img"
              />
            </a>
          </div>
          <div className="footer__digi-app-see-more">
            <a href="#" className="footer__digi-app-see-more-link">
              <img
                src="/images/footer/More.svg"
                alt="More"
                className="footer__digi-app-see-more-img"
              />
            </a>
            <a href="#" className="footer__digi-app-see-more-text-link">
              اطلاعات بیشتر
              <svg
                className="footer__digi-app-see-more-text-link-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                id="arrow"
              >
                <path
                  fill="#fff"
                  d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer__digi-about-us mt-5 py-5">
          <div className="">
            <div
              className={`footer__digi-about-us-description ${
                showMore ? "footer__digi-about-us-description--active" : ""
              }`}
            >
              <h1 className="footer__digi-about-us-description-title">
                فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین.
              </h1>
              <p className="footer__digi-about-us-description-text">
                یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی
                متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست
                مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی
                که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و
                توانسته از این طریق مشتریان ثابت خود را داشته باشد.
              </p>
              <h2 className="footer__digi-about-us-description-subtitle">
                کدام محصولات در دیجی‌کالا قابل سفارش هستند؟
              </h2>
              <p className="footer__digi-about-us-description-text">
                تقریبا می‌توان گفت محصولی وجود ندارد که دیجی‌کالا برای مشتریان
                خود در سراسر کشور فراهم نکرده باشد. شما می‌توانید در تمامی
                روزهای هفته و تمامی شبانه روز یا در روزهای خاصی مثل حراج شگفت
                انگیز دیجی‌کالا که محصولات دارای تخفیف عالی می‌شوند، سفارش خود
                را به سادگی ثبت کرده و در روز و محدوده زمانی مناسب خود، درب منزل
                تحویل بگیرید. بعضی از گروه‌های اصلی و زیر مجموعه‌های پرطرفدار
                محصولات دیجی‌کالا شامل مواردی می‌شود که در ادامه به معرفی آن‌ها
                می‌پردازیم.
              </p>
              <h2 className="footer__digi-about-us-description-subtitle">
                کالای دیجیتال
              </h2>
              <p className="footer__digi-about-us-description-text">
                انواع گوشی موبایل از برندهای مختلفی مثل آیفون، &nbsp;
                <a href="#" target="_blank">
                  گوشی سامسونگ
                </a>
                ،&nbsp;
                <a href="#" target="_blank">
                  گوشی نوکیا
                </a>
                ،&nbsp;
                <a href="#" target="_blank">
                  گوشی شیائومی
                </a>
                ،&nbsp;
                <a href="#" target="_blank">
                  گوشی هواوی
                </a>
                ، و...، انواع کنسول بازی ps4 و ps5، انواع تبلت‌های پرطرفدار
                مثل&nbsp;
                <a href="#" target="_blank">
                  تبلت سامسونگ
                </a>
                &nbsp;نوت 10، انواع هندزفری مثل&nbsp;
                <a href="#" target="_blank">
                  هندزفری بی سیم
                </a>
                ،&nbsp;
                <a href="#" target="_blank">
                  تلوزیون
                </a>
                &nbsp;از برندهای مختلف مثل تلویزیون سامسونگ، سونی و...، انواع
                مانیتور، کیس، کیبورد، مودم از برندهای مختلف مثل&nbsp;
                <a href="#" target="_blank">
                  مودم ایرانسل
                </a>
                ،&nbsp;
                <a href="#" target="_blank">
                  آنتن
                </a>
                &nbsp;و ... تنها بخشی از محصولاتی هستند که زیر مجموعه کالای
                دیجیتال در دیجی‌کالا قرار دارند.
              </p>
              <h2 className="footer__digi-about-us-description-subtitle">
                خودرو، ابزار و تجهیزات صنعتی
              </h2>
              <p className="footer__digi-about-us-description-text">
                انواع خودروهای ایرانی و خارجی از برندهای مطرحی مثل هوندا، کیا
                و...، موتور سیکلت از برندهایی مثل کویر موتور و...، لوازم جانبی
                خودرو مثل سیستم صوتی تصویر، ضبط و...، لوازم یدکی مثل دیسک و صفحه
                کلاج و... و لوازم مصرفی خودرو مثل&nbsp;
                <a href="#" target="_blank">
                  کفپوش سانا
                </a>
                &nbsp;در این گروه قرار می‌گیرند.
              </p>
              <h2 className="footer__digi-about-us-description-subtitle">
                مد و پوشاک
              </h2>
              <p className="footer__digi-about-us-description-text">
                محصولاتی مثل انواع لباس مثل لباس مجلسی زنانه و مردانه، لباس
                راحتی، لباس ورزشی، اکسسوری، کیف، کفش، عینک آفتابی، لباس زیر، شال
                و روسری و... جزو مواردی هستند که می‌توانید آن‌ها را از برندهای
                مطرح ایرانی و خارجی موجود در دیجی کالا مثل آدیداس، نایکی،
                دبنهامز، آلدو، درسا و... خریداری کنید.
              </p>
              <h2 className="footer__digi-about-us-description-subtitle">
                اسباب بازی کودک و نوزاد
              </h2>
              <p className="footer__digi-about-us-description-text">
                در این دسته از کالاهای دیجی‌کالا، انواع لوازم بهداشتی و حمام
                کودک و نوزاد، انواع پوشاک و کفش،&nbsp;
                <a href="#/" target="_blank">
                  تبلت
                </a>
                ،&nbsp;
                <a href="#" target="_blank">
                  اسباب‌بازی
                </a>
                ، لوازم اتاق خواب کودک، لوازم ایمنی، لوازم شخصی و غذا خوری و ...
                قرار می‌گیرد تا خرید را برای پدر و مادرها به کاری سریع و آسان
                تبدیل کند.
              </p>
              <h2 className="footer__digi-about-us-description-subtitle">
                کالاهای سوپر مارکتی
              </h2>
              <p className="footer__digi-about-us-description-text">
                هر چیزی از مواد خوراکی که به آن نیاز دارید، در&nbsp;
                <a href="#" target="_blank">
                  سوپرمارکت
                </a>
                &nbsp;دیجی‌کالا پیدا می‌شود، محصولات پرطرفداری مثل&nbsp;
                <a href="#" target="_blank">
                  کره بادام‌زمینی
                </a>
                ،&nbsp;
                <a href="#" target="_blank">
                  عسل
                </a>
                ،&nbsp;
                <a href="#" target="_blank">
                  سس
                </a>
                ،&nbsp;
                <a href="#" target="_blank">
                  قهوه
                </a>
                ،&nbsp;
                <a href="#" target="_blank">
                  زعفران
                </a>
                ، شکلات، انواع نان و ... از برندهای معتبر و معروفی مثل&nbsp;
                <a href="#" target="_blank">
                  نستله
                </a>
                ، نوتلا، استارباکس، مزمز، چی توز و ... همگی در اختیار شما هستند
                و تا رسیدن به آشپزخانه شما تنها چند کلیک فاصله دارند.
              </p>
              <h2 className="footer__digi-about-us-description-subtitle">
                زیبایی و سلامت
              </h2>
              <p className="footer__digi-about-us-description-text">
                انواع لوازم آرایش مثل لاک، رنگ مو، لوازم آرایش لب، چشم، صورت
                و... همگی در دیجی‌کالا موجود هستند. همچنین محصولات بهداشتی مثل
                انواع شامپو، کرم،&nbsp;
                <a href="#" target="_blank">
                  ماسک صورت
                </a>
                ، ضد تعریق،&nbsp;
                <a href="#" target="_blank">
                  ماسک مو
                </a>
                &nbsp; و...، انواع لوازم شخصی برقی، ست هدیه، بهترین انواع عطر و
                اسپری، انواع زیورآلات طلا و نقره مثل&nbsp;
                <a href="#" target="_blank">
                  سرویس طلا
                </a>
                ، سرویس نقره و... به همراه وسایل مراقبت شخصی طبی در گروه زیبایی
                و سلامت دیجی‌کالا قرار می‌گیرد. در این بخش برندهای مطرحی مثل
                اسنس، پنبه ریز، سینره و... حضور دارند.
              </p>
              <h2 className="footer__digi-about-us-description-subtitle">
                خانه و آشپزخانه
              </h2>
              <p className="footer__digi-about-us-description-text">
                یکی از متنوع‌ترین بخش‌های دیجی‌کالا، بخش لوازم خانه و آشپزخانه
                است که از محصولاتی مثل صندلی گیمینگ در بخش صندلی‌ها گرفته تا
                انواع&nbsp;
                <a href="#" target="_blank">
                  مبل راحتی
                </a>
                ، انواع آبگرمکن مثل&nbsp;
                <a href="#" target="_blank">
                  آبگرمکن بوتان
                </a>
                ، لباسشویی‌های متنوع مثل انواع&nbsp;
                <a href="#" target="_blank">
                  لباسشویی اسنوا
                </a>
                ، شیرآلات مختلف مثل شیرآلات قهرمان و...، ظروف و همچنین لوازم
                برقی آشپزخانه مثل توستر و... را شامل می‌شود و امکان خریدی عالی
                را برای مشتریان فراهم کرده است. در بخش لوازم خانگی دیجی‌کالا،
                برندهای معتبری مثل تفال، اخوان، فیلیپس، ال جی، اسنوا، جی پلاس
                و... حضور دارند.
              </p>
              <h2 className="footer__digi-about-us-description-subtitle">
                کتاب، لوازم تحریر و هنر
              </h2>
              <p className="footer__digi-about-us-description-text">
                بخش هنر، کتاب، رمان و لوازم تحریر دیجی‌کالا نیز یکی از
                متنوع‌ترین بخش‌های این فروشگاه اینترنتی است. انواع کتاب و مجله،
                بازی، لوازم تحریر، سازهایی مثل&nbsp;
                <a href="#" target="_blank">
                  پیانو
                </a>
                ،&nbsp;
                <a href="#" target="_blank">
                  سنتور
                </a>
                ،&nbsp;
                <a href="#" target="_blank">
                  هنگ درام
                </a>
                &nbsp; و... با بهترین قیمت‌ها و از بهترین برندها در دسترس شما
                قرار دارند.
              </p>
              <h2 className="footer__digi-about-us-description-subtitle">
                ورزش و سفر
              </h2>
              <p className="footer__digi-about-us-description-text">
                هر نوع وسیله و لباس ورزشی که فکرش را کنید، انواع وسایل کمپینگ و
                کوهنوردی، ساک و قمقمه ورزشی و... در این بخش قرار می‌گیرند.
                همچنین شما می‌توانید وسایل مد نظر خود را بر اساس نوع ورزش (آبی،
                هوازی، بدنسازی و...) در دسته‌بندی‌های دیجی‌کالا پیدا کنید.
              </p>
              <h2 className="footer__digi-about-us-description-subtitle">
                محصولات بومی و محلی
              </h2>
              <p className="footer__digi-about-us-description-text">
                و در آخر دیجی‌کالا از طریق به فروش رساندن محصولات بومی و سنتی
                متفاوتی مثل انواع خوراکی، گلیم و گبه، ابزار و ... تلاش کرده تا
                بین هنر ایرانی و متقاضیان آن کوتاه‌ترین راه را پیدا کند. در این
                بخش شما می‌توانید انواع محصولات از جمله ظروف زیبای مخصوص
                به&nbsp;
                <a href="#/" target="_blank">
                  سفره هفت‌سین
                </a>
                &nbsp; و پذیرایی از مهمانان در روزهای&nbsp;
                <a href="#" target="_blank">
                  نوروز
                </a>
                ، انواع آیینه و شمعدان و هر آن چیزی را که برای خلق زیبایی در
                روزهای بهاری به آن نیاز دارید، با قیمت مناسب و تنوع بسیار بالا
                انتخاب کنید. دیجی‌کالا همچنین برای اینکه حال و هوای عید را به
                اعضای خود هدیه کند،&nbsp;
                <a href="#" target="_blank">
                  تقویم ۱۴۰۱
                </a>
                ، انواع ایده&nbsp;
                <a href="#" target="_blank">
                  عکس پروفایل عید نوروز
                </a>
                ،&nbsp;
                <a href="#" target="_blank">
                  آهنگ‌های عید نوروز
                </a>
                &nbsp;و موزیک‌های شاد بهاری، وسایل مربوط به&nbsp;
                <a href="#" target="_blank">
                  خانه‌تکانی
                </a>
                &nbsp;و&nbsp;
                <a href="#" target="_blank">
                  انواع لباس های عید
                </a>
                &nbsp; را برای شما فراهم کرده است تا بتوانید در کنار خرید خود،
                از این حال و هوای تازه نهایت لذت را ببرید.
              </p>
              <h2 className="footer__digi-about-us-description-subtitle">
                گزارش های سالیانه دیجی کالا
              </h2>
              <p className="footer__digi-about-us-description-text">
                در راستای توجه ویژه به شفافیت به عنوان یکی از اصلی‌ترین ارزش‌های
                محوری دیجی‌کالا، با شروع سال ۱۳۹۸ داستان‌پردازی با داده‌های
                آماری و ارائه گزارش‌های سالانه آغاز شد. مسیری که دستاورد آن تا
                امروز چندین گزارش سالانه و تخصصی مثل&nbsp;
                <a href="#" target="_blank">
                  گزارش سالانه ۱۳۹۸
                </a>
                ،&nbsp;
                <a href="#" target="_blank">
                  گزارش سالانه ۱۳۹۹
                </a>
                &nbsp;و&nbsp;
                <a href="#" target="_blank">
                  گزارش سالانه ۱۴۰۰
                </a>
                &nbsp; دیجی‌کالا هستند. علاوه بر این،&nbsp;
                <a href="#" target="_blank">
                  گزارش منابع انسانی سال ۱۳۹۹
                </a>
                ،&nbsp;
                <a href="#" target="_blank">
                  گزارش منابع انسانی سال ۱۴۰۰
                </a>
                &nbsp; و همچنین&nbsp;
                <a href="#" target="_blank">
                  گزارش کتاب دیجی‌کالا
                </a>
                ، از دیگر گزارش‌های تخصصی دیجی‌کالا به حساب می‌آیند. انتشار این
                گزارش‌ها امکان رصد شفاف‌تر و دقیق‌تر خدمات دیجی‌کالا را فراهم
                می‌کند، وضعیت بازار آنلاین کشور را به نمایش می‌گذارد و به تمامی
                کسب‌وکارهای ایرانی کمک می‌کند تا با فرایندهای فروش و عرضه آنلاین
                کالاهای خود بیشتر آشنا شوند.
              </p>
              <h2 className="footer__digi-about-us-description-subtitle">
                جام جهانی قطر 2022
              </h2>
              <p className="footer__digi-about-us-description-text">
                <a href="#" target="_blank">
                  جام‌ جهانی ۲۰۲۲ قطر
                </a>
                &nbsp;از ۲۹ آبان شروع می شود و دیجی‌کالا به همراه بازی‌ و مسابقه
                پیش‌بینی و جوایز میلیونی در کنار شما خواهد بود. شما می‌توانید با
                شرکت در مسابقه پیش‌بینی بازی‌ها، شانس خود را در قرعه‌کشی
                روزانه&nbsp;
                <a href="#" target="_blank">
                  جام‌جهانی ۲۰۲۲ قطر
                </a>
                &nbsp;امتحان کنید. در کنار بازی، مسابقه و قرعه‌کشی، در اینجا با
                جدول برنامه مسابقات، اخبار جام‌جهانی و نتایج بازی‌ها به روز
                خواهیم بود.
              </p>
              <h2 className="footer__digi-about-us-description-subtitle">
                بلک فرایدی دیجی کالا
              </h2>
              <p className="footer__digi-about-us-description-text">
                <a href="#" target="_blank">
                  بلک فرایدی دیجی کالا
                </a>
                &nbsp;همراه با میلیاردها تخفیف برای میلیون‌ها کالا، از چهارشنبه
                دوم آذرماه آغاز و تا پایان جمعه چهارم ادامه خواهد داشت. در&nbsp;
                <a href="#" target="_blank">
                  بلک فرایدی دیجی کالا
                </a>
                ، علاوه‌ بر اینکه برندهای موردعلاقه شما از تمامی دسته‌بندی‌های
                موبایل، خانه و آشپزخانه، سلامت و زیبایی، پوشاک و ... با
                تخفیف‌های ویژه حضور دارند، می‌توانید بازی کنید، امتیاز به دست
                آورید و با کدهای تخفیف&nbsp;جذاب و شگفت‌انگیز خرید کنید.
              </p>
            </div>
            {!showMore && (
              <span
                className="footer__digi-about-us-see-more mt-3"
                onClick={() => setShowMore(true)}
              >
                مشاهده بیشتر
                <svg
                  id="chevronLeft"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style={{ width: "18px", height: "18px", fill: "#19bfd3" }}
                >
                  <path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path>
                </svg>
              </span>
            )}
            {showMore && (
              <span
                className="footer__digi-about-us-see-more"
                onClick={() => setShowMore(false)}
              >
                بستن
                <svg
                  id="chevronLeft"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style={{ width: "18px", height: "18px", fill: "#19bfd3" }}
                >
                  <path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path>
                </svg>
              </span>
            )}
          </div>
          <div className="footer__digi-about-us-confidences-wrapper mt-3">
            <a href="#" className="footer__digi-about-us-confidences-logo">
              <img
                src="/images/footer/rezi.png"
                alt="rezi"
                className="footer__digi-about-us-confidences-logo-img"
              />
            </a>
            <a href="#" className="footer__digi-about-us-confidences-logo">
              <img
                src="/images/footer/kasbokar.png"
                alt="kasbokar"
                className="footer__digi-about-us-confidences-logo-img"
              />
            </a>
          </div>
        </div>

        <div className="footer__copywrite-text">
          برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع»
          کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه
          آنلاین دیجی‌کالا) است.
        </div>
      </div>
      <div className="footer__brand">
        <a href="#" className="footer__brand-link">
          <div className="">
            <img
              src="/images/footer/brand/digiclub.svg"
              alt="digiclub"
              className="footer__brand-img"
            />
          </div>
        </a>
        <a href="#" className="footer__brand-link">
          <div className="">
            <img
              src="/images/footer/brand/digiexpress.svg"
              alt="digiclub"
              className="footer__brand-img"
            />
          </div>
        </a>
        <a href="#" className="footer__brand-link">
          <div className="">
            <img
              src="/images/footer/brand/digify.svg"
              alt="digiclub"
              className="footer__brand-img"
            />
          </div>
        </a>
        <a href="#" className="footer__brand-link">
          <div className="">
            <img
              src="/images/footer/brand/digikala-business.svg"
              alt="digiclub"
              className="footer__brand-img"
            />
          </div>
        </a>
        <a href="#" className="footer__brand-link">
          <div className="">
            <img
              src="/images/footer/brand/digimag.svg"
              alt="digiclub"
              className="footer__brand-img"
            />
          </div>
        </a>
        <a href="#" className="footer__brand-link">
          <div className="">
            <img
              src="/images/footer/brand/digiMehr.svg"
              alt="digiclub"
              className="footer__brand-img"
            />
          </div>
        </a>
        <a href="#" className="footer__brand-link">
          <div className="">
            <img
              src="/images/footer/brand/diginext.svg"
              alt="digiclub"
              className="footer__brand-img"
            />
          </div>
        </a>
        <a href="#" className="footer__brand-link">
          <div className="">
            <img
              src="/images/footer/brand/digipay.svg"
              alt="digiclub"
              className="footer__brand-img"
            />
          </div>
        </a>
        <a href="#" className="footer__brand-link">
          <div className="">
            <img
              src="/images/footer/brand/digipay.svg"
              alt="digiclub"
              className="footer__brand-img"
            />
          </div>
        </a>
        <a href="#" className="footer__brand-link">
          <div className="">
            <img
              src="/images/footer/brand/digiplus.svg"
              alt="digiclub"
              className="footer__brand-img"
            />
          </div>
        </a>
        <a href="#" className="footer__brand-link">
          <div className="">
            <img
              src="/images/footer/brand/digistyle.svg"
              alt="digiclub"
              className="footer__brand-img"
            />
          </div>
        </a>
        <a href="#" className="footer__brand-link">
          <div className="">
            <img
              src="/images/footer/brand/fidibo.svg"
              alt="digiclub"
              className="footer__brand-img"
            />
          </div>
        </a>
        <a href="#" className="footer__brand-link">
          <div className="">
            <img
              src="/images/footer/brand/ganjeh.svg"
              alt="digiclub"
              className="footer__brand-img"
            />
          </div>
        </a>
        <a href="#" className="footer__brand-link">
          <div className="">
            <img
              src="/images/footer/brand/jet.svg"
              alt="digiclub"
              className="footer__brand-img"
            />
          </div>
        </a>
        <a href="#" className="footer__brand-link">
          <div className="">
            <img
              src="/images/footer/brand/komodaa.svg"
              alt="digiclub"
              className="footer__brand-img"
            />
          </div>
        </a>
        <a href="#" className="footer__brand-link">
          <div className="">
            <img
              src="/images/footer/brand/magnet.svg"
              alt="digiclub"
              className="footer__brand-img"
            />
          </div>
        </a>
        <a href="#" className="footer__brand-link">
          <div className="">
            <img
              src="/images/footer/brand/pindo.svg"
              alt="digiclub"
              className="footer__brand-img"
            />
          </div>
        </a>
        <a href="#" className="footer__brand-link">
          <div className="">
            <img
              src="/images/footer/brand/smartech.svg"
              alt="digiclub"
              className="footer__brand-img"
            />
          </div>
        </a>
      </div>
    </div>
  );
}
