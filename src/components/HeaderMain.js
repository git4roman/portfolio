import styled from "styled-components";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "../assets/wrappers/HeaderMain";
import ThemeToggle from "../utils/ThemeToggle";

const HeaderMain = () => {
  const [themeToggle, setThemeToggle] = useState(false);
  const [sidebarToggle, setSidebarToggle] = useState(false);

  const handleTheme = () => {
    setThemeToggle(!themeToggle);
  };

  const handleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };

  return (
    <Wrapper>
      <div className="frontContainer">
        <Link to="/" style={{textDecoration:"none"}}>
          <div className="logo">
            R<span>oman</span>
          </div>
        </Link>
        <div className="themeToggle">
          <ThemeToggle />
          <button onClick={handleSidebar}>
            {!sidebarToggle ? <VscGrabber /> : <VscClose />}
          </button>
        </div>
      </div>
      {sidebarToggle && (
        <div className="bigSidebar">
          <button onClick={handleSidebar} className="closeBtn">
            <VscClose />
          </button>
          <div className="backContainer">
            <ul>
              <li>
                <Link
                  onClick={() => {
                    setSidebarToggle(!sidebarToggle);
                  }}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setSidebarToggle(!sidebarToggle);
                  }}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setSidebarToggle(!sidebarToggle);
                  }}
                  to="/portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setSidebarToggle(!sidebarToggle);
                  }}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default HeaderMain;
