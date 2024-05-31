import React from "react";
import "./header.css";
import { RiRhythmFill } from "react-icons/ri";

function Header() {
  return (
    <>
      <div className="header-parent">
        <div className="header-component header-logo">
          <RiRhythmFill />
        </div>

        <div className="header-component header-name"></div>
        <div className="header-component"></div>
        <div className="header-component"></div>
        <div className="header-component"></div>
        <div className="header-component"></div>
        <div className="header-component"></div>
      </div>
    </>
  );
}

export default Header;
