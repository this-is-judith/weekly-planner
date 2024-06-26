import React, { useState } from "react";
import "./header.css";
import { RiRhythmFill } from "react-icons/ri";
import { FaLessThan, FaGreaterThan, FaMagnifyingGlass } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";

const Header = ({
  toggleCalendarVisibility,
  toggleTasksVisibility,
  toggleNotesVisibility,
}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleIconClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleOptionClick = (option) => {
    if (option === "Hide Calendar") {
      toggleCalendarVisibility();
    }

    if (option === "Hide Tasks") {
      toggleTasksVisibility();
    }

    if (option === "Hide Notes") {
      toggleNotesVisibility();
    }

    setDropdownVisible(false);
  };

  return (
    <>
      <div className="header-parent">
        {dropdownVisible && (
          <div className="dropdown-menu">
            <div
              onClick={() => handleOptionClick("Hide Calendar")}
              className="dropdown-item"
            >
              Hide Calendar
            </div>

            <div
              onClick={() => handleOptionClick("Hide Tasks")}
              className="dropdown-item"
            >
              Hide Tasks
            </div>

            <div
              onClick={() => handleOptionClick("Hide Notes")}
              className="dropdown-item"
            >
              Hide Notes
            </div>
          </div>
        )}

        <div className="header-component header-logo">
          <RiRhythmFill size="30" onClick={handleIconClick} />
        </div>

        <div className="header-component header-name">
          <h1>Simple Rhythm</h1>
        </div>

        <div className="header-component header-calendar-month-year">
          <h2>May 2024</h2>
        </div>

        <div className="header-component header-previous-week">
          <FaLessThan size="20" />
        </div>

        <div className="header-component header-next-week">
          <FaGreaterThan size="20" />
        </div>

        <div className="header-component header-search">
          <FaMagnifyingGlass size="25" />
        </div>

        <div className="header-component header-settings">
          <IoSettingsSharp size="30" />
        </div>

        <div className="header-component header-user">User</div>
      </div>
    </>
  );
};

export default Header;
