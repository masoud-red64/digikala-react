import React, { useContext, useEffect, useRef, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/authContext";
import swal from "sweetalert";
import { toast } from "react-toastify";

export default function Login() {
  const [isShowLogin, setIsShowLogin] = useState(true);
  const [isShowSmsLogin, setIsShowSmsLogin] = useState(false);
  const [isShowEmailLogin, setIsShowEmailLogin] = useState(false);
  const [loginInputValue, setLoginInputValue] = useState("");
  const [smsInputValue, setSmsInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
  const [isDisabledLoginBtn, setIsDisabledLoginBtn] = useState(true);
  const [randomCode, setRandomCode] = useState();
  const [time, setTime] = useState("۰۳:۰۰");

  const navigate = useNavigate();

  const authContext = useContext(AuthContext);

  useEffect(() => {
    checkValueLoginInput();
    setRandomCode(Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000);
    document.title = "ورود";
  }, [loginInputValue]);

  function checkValueLoginInput() {
    if (loginInputValue.length == 0) {
      setErrorLogin("لطفا این قسمت را خالی نگذارید");
    } else if (/[\u0600-\u06FF]/.test(loginInputValue)) {
      setErrorLogin("لطفا کیبورد خود را به انگلیسی تغییر دهید");
    } else {
      if (
        /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(loginInputValue) ||
        /^(\+98|0)?9\d{9}$/.test(loginInputValue)
      ) {
        setIsDisabledLoginBtn(false);
        setErrorLogin("");
      } else {
        setIsDisabledLoginBtn(true);
        setErrorLogin("شماره تلفن یا ایمیل صحیح نیست");
      }
    }
  }

  function loginHandler(e) {
    e.preventDefault();

    if (/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(loginInputValue)) {
      setIsShowEmailLogin(true);
      setIsShowLogin(false);
      toast.warn(`your password is ${randomCode}`);
    } else {
      setIsShowSmsLogin(true);
      setIsShowLogin(false);
      toast.warn(`your code is ${randomCode}`);
      reverseTimer(time);
    }
  }

  function enterSiteHandler(e) {
    e.preventDefault();
    if (+smsInputValue === randomCode || +emailInputValue === randomCode) {
      swal({
        title: "با موفقیت وارد شدید",
        icon: "success",
      }).then(() => {
        navigate("/");
      });
      localStorage.setItem(
        "user",
        JSON.stringify({
          token: "748e7284-52df-02b5-64a6-35d3c95fc979",
        })
      );
      authContext.getUserInfo();
    }
  }

  function reverseTimer(time) {
    const endTime = time;
    // Convert the end time to seconds
    const timeParts = endTime.split(":");
    const minutes = convertToNumber(timeParts[0]);
    const seconds = convertToNumber(timeParts[1]);
    const endTimeSeconds = minutes * 60 + seconds;

    let remainingTimeSeconds = endTimeSeconds;

    let timerInterval = setInterval(() => {
      remainingTimeSeconds--;
      if (remainingTimeSeconds < 0) {
        clearInterval(timerInterval);
      } else {
        const remainingMinutes = Math.floor((remainingTimeSeconds % 3600) / 60);
        const remainingSeconds = remainingTimeSeconds % 60;
        const remainingTimeString = `${convertToPersianNumber(
          remainingMinutes.toString().padStart(2, "0")
        )}:${convertToPersianNumber(
          remainingSeconds.toString().padStart(2, "0")
        )}`;
        setTime(remainingTimeString);
      }
    }, 1000);

    function convertToNumber(numString) {
      // Check if the number string contains Persian numerals
      if (/[۰-۹]/.test(numString)) {
        // Convert Persian numerals to English numerals
        numString = numString.replace(/[۰-۹]/g, function (c) {
          return String.fromCharCode(c.charCodeAt(0) - 1728);
        });
      }
      return parseInt(numString, 10);
    }

    function convertToPersianNumber(numString) {
      const persianNumbers = "۰۱۲۳۴۵۶۷۸۹";
      let result = "";
      for (let i = 0; i < numString.length; i++) {
        if (/[0-9]/.test(numString[i])) {
          result += persianNumbers.charAt(parseInt(numString[i], 10));
        } else {
          result += numString[i];
        }
      }
      return result;
    }
  }

  return (
    <div className="container-fluid h-100 w-100 d-flex align-items-center justify-content-center">
      {isShowLogin && (
        <div className="login">
          <div className="login__logo">
            <img
              src="./images/login/logo.svg"
              alt="logo"
              className="login__logo-img"
              loading="lazy"
            />
          </div>
          <p className="login__title">ورود | ثبت‌نام</p>
          <p className="login__subtitle">سلام!</p>
          <p className="login__subtitle">
            لطفا شماره موبایل یا ایمیل خود را وارد کنید
          </p>
          <form className="login__form">
            <input
              type="text"
              className="login__form-input"
              value={loginInputValue}
              onChange={(e) => setLoginInputValue(e.target.value)}
            />
            <p className="login__form-input-error mt-1">{errorLogin}</p>
            <button
              className="login__form-btn"
              type="submit"
              disabled={isDisabledLoginBtn}
              onClick={loginHandler}
            >
              ورود
            </button>
          </form>
          <div className="login__footer">
            <p className="login__footer-text">
              ورود شما به معنای پذیرش
              <a href="#" className="login__footer-link">
                شرایط دیجی‌کالا
              </a>{" "}
              و
              <a href="#" className="login__footer-link">
                قوانین حریم‌خصوصی
              </a>{" "}
              است
            </p>
          </div>
        </div>
      )}
      {isShowSmsLogin && (
        <div className="login-sms">
          <div
            className="login-sms__logo"
            onClick={() => {
              setIsShowLogin(true);
              setIsShowSmsLogin(false);
            }}
          >
            <svg
              className="login__back-btn"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              style={{ width: "24px", height: "24px", fill: "#3f4064" }}
            >
              <path
                fillRule="evenodd"
                d="M12.707 19.707l-1.414-1.414L16.586 13H4v-2h12.586l-5.293-5.293 1.414-1.414 7 7a1 1 0 010 1.414l-7 7z"
                clipRule="evenodd"
              ></path>
            </svg>
            <img
              src="./images/login/logo.svg"
              alt="logo"
              className="login-sms__logo-img"
              loading="lazy"
            />
          </div>
          <p className="login-sms__title">کد تایید را وارد کنید</p>
          <p className="login-sms__subtitle">
            {` کد تایید برای ایمیل ${loginInputValue} ارسال شد`}
          </p>
          <form className="login-sms__form">
            <input
              type="text"
              className="login-sms__form-input"
              value={smsInputValue}
              onChange={(e) => setSmsInputValue(e.target.value)}
            />
            <p className="login-sms__form-input-time">
              {time === "۰۰:۰۰" ? (
                <span>
                  دریافت مجدد کد از طریق
                  <a
                    style={{ color: "#19bfd3" }}
                    onClick={() => {
                      reverseTimer("۰۳:۰۰");
                    }}
                  >
                    {" "}
                    پیامک{" "}
                  </a>
                  یا{" "}
                  <a
                    style={{ color: "#19bfd3" }}
                    onClick={() => {
                      reverseTimer("۰۳:۰۰");
                    }}
                  >
                    تماس
                  </a>
                </span>
              ) : (
                <span id="timer">
                  {time}
                  مانده تا دریافت مجدد کد
                </span>
              )}
            </p>
            <button
              className="login-sms__form-btn"
              type="submit"
              onClick={enterSiteHandler}
            >
              تایید
            </button>
          </form>
        </div>
      )}
      {isShowEmailLogin && (
        <div className="login-email">
          <div
            className="login-email__logo"
            onClick={() => {
              setIsShowLogin(true);
              setIsShowEmailLogin(false);
            }}
          >
            <svg
              className="login__back-btn"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              style={{ width: "24px", height: "24px", fill: "#3f4064" }}
            >
              <path
                fillRule="evenodd"
                d="M12.707 19.707l-1.414-1.414L16.586 13H4v-2h12.586l-5.293-5.293 1.414-1.414 7 7a1 1 0 010 1.414l-7 7z"
                clipRule="evenodd"
              ></path>
            </svg>
            <img
              src="./images/login/logo.svg"
              alt="logo"
              className="login-email__logo-img"
              loading="lazy"
            />
          </div>
          <p className="login-email__title">رمز عبور را وارد کنید</p>
          <form className="login-email__form">
            <input
              type="password"
              className="login-email__form-input"
              value={emailInputValue}
              onChange={(e) => setEmailInputValue(e.target.value)}
            />
            <i className="eye-icon far fa-eye-slash"></i>
            <p className="login-email__form-input-forget">
              فراموشی رمز عبور
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                style={{ width: "20px", height: "20px", fill: "#19bfd3" }}
              >
                <path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path>
              </svg>
            </p>
            <button
              className="login-email__form-btn"
              type="submit"
              onClick={enterSiteHandler}
            >
              تایید
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
