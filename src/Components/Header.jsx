import React from "react";
import "./header.css";
import { RiRhythmFill } from "react-icons/ri";

function Header() {
  return (
    <>
      <div className="header-parent">
        <div className="header-component header-logo">
          <RiRhythmFill size="30" />
        </div>

        <div className="header-component header-name">
          <h1>Simple Rhythm</h1>
        </div>

        <div className="header-component header-calendar-month-year"></div>
        <div className="header-component header-change-week"></div>
        <div className="header-component header-search"></div>
        <div className="header-component header-settings"></div>
        <div className="header-component header-user"></div>
      </div>
    </>
  );
}

export default Header;
