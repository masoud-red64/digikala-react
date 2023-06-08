import React, { useEffect, useState } from "react";
import { iranData } from "./statesAndCities";

import "./LocationModal.css";

export default function LocationModal({
  isShowLocationModal,
  setIsShowLocationModal,
  mainState,
  setMainState,
  setMainCity,
  isShowStates,
  setIsShowStates,
}) {
  const [cities, setCities] = useState({});
  const [isShowCities, setIsShowCities] = useState(false);

  useEffect(() => {
    let mainData = iranData.find((data) => data.state === mainState);
    console.log(mainData);
    setCities(mainData && mainData.cities);
    console.log(cities);
  }, [mainState]);

  console.log(mainState);

  return (
    <>
      <div
        className={`select-location-modal ${isShowLocationModal ? "show" : ""}`}
      >
        <div className="select-location-modal__top">
          <p className="select-location-modal__top-text">انتخاب شهر</p>
          <span
            className="select-location-modal__top-close-icon"
            onClick={() => setIsShowLocationModal(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="close"
            >
              <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
            </svg>
          </span>
        </div>
        <div className="select-location-modal__bottom">
          {isShowStates && (
            <div className="select-location-modal__bottom-gps">
              <span className="select-location-modal__bottom-gps-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  id="gps-fixed"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0 0 13 3.06V2c0-.55-.45-1-1-1s-1 .45-1 1v1.06A8.994 8.994 0 0 0 3.06 11H2c-.55 0-1 .45-1 1s.45 1 1 1h1.06A8.994 8.994 0 0 0 11 20.94V22c0 .55.45 1 1 1s1-.45 1-1v-1.06A8.994 8.994 0 0 0 20.94 13H22c.55 0 1-.45 1-1s-.45-1-1-1h-1.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path>
                </svg>
              </span>
              <p className="select-location-modal__bottom-gps-text">
                مکان‌یابی خودکار
              </p>
            </div>
          )}
          {isShowCities && (
            <div className="select-location-modal__bottom-back">
              <span
                className="select-location-modal__bottom-back-icon"
                onClick={() => {
                  setIsShowCities(false);
                  setIsShowStates(true);
                  setMainCity("");
                }}
              >
                <svg
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
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  ></line>
                  <polyline
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                    points="112 56 40 128 112 200"
                  ></polyline>
                </svg>
              </span>
              <p className="select-location-modal__bottom-back-text">
                بازگشت به لیست استان ها
              </p>
            </div>
          )}
          <div className="select-location-modal__bottom-states-cities">
            <ul className="select-location-modal__bottom-states-cities-list">
              {isShowStates &&
                iranData.map((data) => (
                  <li
                    key={data.state}
                    className="select-location-modal__bottom-states-cities-item"
                    onClick={(e) => {
                      setMainState(e.target.innerText);
                      setIsShowStates(false);
                      setIsShowCities(true);
                    }}
                  >
                    {data.state}
                    <svg
                      className="select-location-modal__bottom-states-cities-item-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 64"
                      id="arrow"
                    >
                      <path
                        fill="#134563"
                        d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                      ></path>
                    </svg>
                  </li>
                ))}
              {isShowCities &&
                cities &&
                cities.map((city) => (
                  <li
                    key={city}
                    className="select-location-modal__bottom-states-cities-item"
                    onClick={(e) => {
                      setIsShowLocationModal(false);
                      setIsShowCities(false);
                      setMainCity(e.target.innerText);
                    }}
                  >
                    {city}
                    <svg
                      className="select-location-modal__bottom-states-cities-item-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 64"
                      id="arrow"
                    >
                      <path
                        fill="#134563"
                        d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                      ></path>
                    </svg>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`overlay-when-select-location-open ${
          isShowLocationModal ? "show" : ""
        }`}
      ></div>
    </>
  );
}
