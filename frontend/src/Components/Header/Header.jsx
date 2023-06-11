import React, { useState } from "react";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import Sidebar from "../Sidebar/Sidebar";
import LocationModal from "./LocationModal/LocationModal";

export default function Header() {
  const [isShowLocationModal, setIsShowLocationModal] = useState(false);
  const [isShowStates, setIsShowStates] = useState(true);
  const [mainState, setMainState] = useState("");
  const [mainCity, setMainCity] = useState("");
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  return (
    <>
      <div className="header">
        <div className="container-fluid">
          <HeaderDesktop
            setIsShowLocationModal={setIsShowLocationModal}
            mainCity={mainCity}
            mainState={mainState}
            setIsShowStates={setIsShowStates}
          />
          <HeaderMobile
            setIsShowLocationModal={setIsShowLocationModal}
            mainCity={mainCity}
            mainState={mainState}
            setIsShowStates={setIsShowStates}
            setIsShowSidebar={setIsShowSidebar}
          />
          <Sidebar
            isShowSidebar={isShowSidebar}
            setIsShowSidebar={setIsShowSidebar}
          />
        </div>
      </div>
      <LocationModal
        isShowLocationModal={isShowLocationModal}
        setIsShowLocationModal={setIsShowLocationModal}
        mainCity={mainCity}
        setMainCity={setMainCity}
        mainState={mainState}
        setMainState={setMainState}
        isShowStates={isShowStates}
        setIsShowStates={setIsShowStates}
      />
    </>
  );
}
