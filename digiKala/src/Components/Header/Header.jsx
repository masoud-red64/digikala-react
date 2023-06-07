import React from "react";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import Sidebar from "../Sidebar/Sidebar";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="container-fluid">
          <HeaderDesktop />
          <HeaderMobile />
          <Sidebar />
        </div>
      </div>
    </>
  );
}
