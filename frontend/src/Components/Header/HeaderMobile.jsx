import React, { useContext } from "react";

import "./HeaderMobile.css";
import AuthContext from "../../contexts/authContext";
import { Link } from "react-router-dom";

export default function HeaderMobile({
  setIsShowLocationModal,
  mainCity,
  mainState,
  setIsShowStates,
  setIsShowSidebar,
}) {
  const authContext = useContext(AuthContext);
  return (
    <div className="header-mobile">
      <div className="header-mobile__top">
        <svg
          className="header-mobile__top-menu-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="14"
          viewBox="0 0 20 14"
          id="menu"
          onClick={() => setIsShowSidebar(true)}
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            transform="translate(1 1)"
          >
            <path d="M0 6h18M0 0h18M0 12h18"></path>
          </g>
        </svg>
        <svg
          className="header-mobile__top-logo"
          xmlns="http://www.w3.org/2000/svg"
          width="115"
          height="30"
          viewBox="0 0 115 30"
        >
          <g fill="none" fillRule="evenodd">
            <g fill="#EE384E">
              <g>
                <g>
                  <path
                    d="M76.916 19.024h6.72v-8.78h-6.72c-1.16 0-2.24 1.061-2.24 2.195v4.39c0 1.134 1.08 2.195 2.24 2.195zm26.883 0h6.72v-8.78h-6.72c-1.16 0-2.24 1.061-2.24 2.195v4.39c0 1.134 1.08 2.195 2.24 2.195zM88.117 6.951v15.366c0 .484-.625 1.098-1.12 1.098l-2.24.023c-.496 0-1.12-.637-1.12-1.12v-.733l-1.017 1.196c-.31.413-1.074.634-1.597.634h-4.107c-3.604 0-6.721-3.063-6.721-6.586v-4.39c0-3.523 3.117-6.585 6.72-6.585h10.082c.495 0 1.12.613 1.12 1.097zm26.883 0v15.366c0 .484-.624 1.098-1.12 1.098l-2.24.023c-.496 0-1.12-.637-1.12-1.12v-.733l-1.017 1.196c-.31.413-1.074.634-1.597.634h-4.107c-3.604 0-6.721-3.063-6.721-6.586v-4.39c0-3.523 3.117-6.585 6.72-6.585h10.082c.495 0 1.12.613 1.12 1.097zm-74.675 3.293h-6.721c-1.16 0-2.24 1.061-2.24 2.195v4.39c0 1.134 1.08 2.195 2.24 2.195h6.72v-8.78zm4.48-3.293V23.78c0 3.523-3.117 6.22-6.72 6.22H34.62c-.515 0-1-.236-1.311-.638l-1.972-2.55c-.327-.424-.144-1.202.399-1.202h6.347c1.16 0 2.24-.696 2.24-1.83v-.365h-6.72c-3.604 0-6.72-3.063-6.72-6.586v-4.39c0-3.523 3.116-6.585 6.72-6.585h4.107c.514 0 1.074.405 1.437.731l1.177 1.098V6.95c0-.483.625-1.097 1.12-1.097h2.24c.496 0 1.12.613 1.12 1.097zM4.481 16.83c0 1.134 1.08 2.195 2.24 2.195h6.72v-8.78h-6.72c-1.16 0-2.24 1.061-2.24 2.195v4.39zM16.8 0c.497 0 1.121.613 1.121 1.098v21.22c0 .483-.624 1.097-1.12 1.097h-2.24c-.496 0-1.12-.613-1.12-1.098v-.732l-1.175 1.232c-.318.346-.932.598-1.44.598H6.722C3.117 23.415 0 20.352 0 16.829v-4.356c0-3.523 3.117-6.62 6.72-6.62h6.722V1.099c0-.485.624-1.098 1.12-1.098h2.24zm46.3 14.634L69.336 6.9c.347-.421.04-1.048-.513-1.048h-3.566c-.27 0-.525.119-.696.323l-6.314 7.727V1.098c0-.485-.625-1.098-1.12-1.098h-2.24c-.496 0-1.12.613-1.12 1.098v21.22c0 .483.624 1.097 1.12 1.097h2.24c.495 0 1.12-.614 1.12-1.098v-6.951l6.317 7.744c.17.207.428.328.7.328h3.562c.554 0 .86-.627.514-1.048l-6.24-7.756zM48.166 0c-.496 0-1.12.613-1.12 1.098v2.195c0 .484.624 1.097 1.12 1.097h2.24c.495 0 1.12-.613 1.12-1.097V1.098c0-.485-.625-1.098-1.12-1.098h-2.24zm0 5.854c-.496 0-1.12.613-1.12 1.097v15.366c0 .484.8 1.12 1.295 1.12l2.065-.022c.495 0 1.12-.614 1.12-1.098V6.951c0-.484-.625-1.097-1.12-1.097h-2.24zM21.282 0c-.495 0-1.12.613-1.12 1.098v2.195c0 .484.625 1.097 1.12 1.097h2.24c.496 0 1.12-.613 1.12-1.097V1.098c0-.485-.624-1.098-1.12-1.098h-2.24zm0 5.854c-.495 0-1.12.613-1.12 1.097v15.366c0 .484.625 1.098 1.12 1.098h2.24c.496 0 1.12-.614 1.12-1.098V6.951c0-.484-.624-1.097-1.12-1.097h-2.24zm73.556-4.756v21.22c0 .483-.625 1.097-1.12 1.097h-2.24c-.496 0-1.12-.614-1.12-1.098V1.097c0-.484.624-1.097 1.12-1.097h2.24c.495 0 1.12.613 1.12 1.098z"
                    transform="translate(-1235 -19) translate(-238) translate(1473 19)"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
        <a href="#" className="header-mobile__top-question">
          <svg
            className="header-mobile__top-question-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            id="question"
          >
            <g fill="#222" data-name="Question">
              <path d="M32 39.49a2 2 0 0 1-2-2 6.69 6.69 0 0 1 1.59-4.41c.15-.16.36-.35.61-.58 1.24-1.11 3.8-3.43 3.8-6a3.76 3.76 0 0 0-4-4 3.76 3.76 0 0 0-4 4 2 2 0 0 1-4 0 7.75 7.75 0 0 1 8-8 7.75 7.75 0 0 1 8 8c0 4.35-3.45 7.48-5.11 9l-.48.43a3.19 3.19 0 0 0-.41 1.6 2 2 0 0 1-2 1.96zm0 6.01a2 2 0 0 1-1.41-.58 2 2 0 0 1 0-2.84 2.07 2.07 0 0 1 2.82 0 1.79 1.79 0 0 1 .25.31 2.27 2.27 0 0 1 .19.34 2.38 2.38 0 0 1 .11.38 1.92 1.92 0 0 1 0 .78 2.26 2.26 0 0 1-.11.37 2 2 0 0 1-.19.35 1.79 1.79 0 0 1-.25.31 2 2 0 0 1-1.41.58z"></path>
              <path d="M38.42 56.42H25.58a18 18 0 0 1-18-18V25.58a18 18 0 0 1 18-18h12.84a18 18 0 0 1 18 18v12.84a18 18 0 0 1-18 18ZM25.58 11.58a14 14 0 0 0-14 14v12.84a14 14 0 0 0 14 14h12.84a14 14 0 0 0 14-14V25.58a14 14 0 0 0-14-14Z"></path>
            </g>
          </svg>
        </a>
      </div>
      <div className="header-mobile__middle">
        <div className="header-mobile__middle-searchbar">
          <svg
            className="header-mobile__middle-searchbar-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="search"
          >
            <path
              fill="#a5a6b7"
              d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"
            ></path>
          </svg>
          <input
            className="header-mobile__middle-searchbar-input"
            type="text"
            placeholder="جستجو"
          />
        </div>
        <div className="header-mobile__middle-basket-login">
          {authContext.isLogin ? (
            <a href="#" className="header-mobile__middle-login">
              <p className="fs-5 border rounded p-2">{`${
                authContext.userInfo && authContext.userInfo.firstname
              } ${authContext.userInfo && authContext.userInfo.lastname}`}</p>
            </a>
          ) : (
            <Link to={"/login"} className="header-mobile__middle-login">
              <svg
                className="header-mobile__middle-login-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="signin"
              >
                <path
                  fill="#3f4064"
                  d="M20,12a1,1,0,0,0-1-1H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H19A1,1,0,0,0,20,12ZM17,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V16a1,1,0,0,0-2,0v3a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V5A3,3,0,0,0,17,2Z"
                ></path>
              </svg>
              <p className="header-mobile__middle-login-text">ورود</p>
            </Link>
          )}
          <Link
            to={`${authContext.isLogin ? "/cart" : "/login"}`}
            className="header-mobile__middle-basket"
          >
            <svg
              className="header-mobile__middle-basket-icon"
              id="shopping-cart"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="#3f4064"
                d="M8.5,19A1.5,1.5,0,1,0,10,20.5,1.5,1.5,0,0,0,8.5,19ZM19,16H7a1,1,0,0,1,0-2h8.49121A3.0132,3.0132,0,0,0,18.376,11.82422L19.96143,6.2749A1.00009,1.00009,0,0,0,19,5H6.73907A3.00666,3.00666,0,0,0,3.92139,3H3A1,1,0,0,0,3,5h.92139a1.00459,1.00459,0,0,1,.96142.7251l.15552.54474.00024.00506L6.6792,12.01709A3.00006,3.00006,0,0,0,7,18H19a1,1,0,0,0,0-2ZM17.67432,7l-1.2212,4.27441A1.00458,1.00458,0,0,1,15.49121,12H8.75439l-.25494-.89221L7.32642,7ZM16.5,19A1.5,1.5,0,1,0,18,20.5,1.5,1.5,0,0,0,16.5,19Z"
              ></path>
            </svg>
            <span className="header-mobile__middle-basket-count">۱</span>
          </Link>
        </div>
      </div>
      <div className="header-mobile__bottom">
        <button
          className="header-mobile__bottom-btn"
          onClick={() => {
            setIsShowLocationModal(true);
            setIsShowStates(true);
          }}
        >
          <div className="header-mobile__bottom-location">
            <svg
              className="header-mobile__bottom-location-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="location"
            >
              <path d="M12,2a8,8,0,0,0-8,8c0,5.4,7.05,11.5,7.35,11.76a1,1,0,0,0,1.3,0C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,17.65c-2.13-2-6-6.31-6-9.65a6,6,0,0,1,12,0C18,13.34,14.13,17.66,12,19.65ZM12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z"></path>
            </svg>
            <p className="header-mobile__bottom-location-text">
              {mainCity.length && mainState.length
                ? `${mainState},${mainCity}`
                : "لطفا شهر خود را انتخاب کنید"}
            </p>
          </div>
          <svg
            className="header-mobile__bottom-arrow-icon"
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
    </div>
  );
}
