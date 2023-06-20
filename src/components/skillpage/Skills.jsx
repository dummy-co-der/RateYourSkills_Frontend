import React, { useState } from "react";
import "./Skills.module.css";
import { FaUser } from "react-icons/fa";
import Footer from "../mainpage/footer/Footer";

const Skills = () => {
  const [open, setOpen] = useState(false);
  const Menus = ["Profile", "Settings", "Logout"];

  return (
    <div className="skills-page">
      <div className="skills-navbar">
        <div className="skills-navbar-logo">
          <img src={require("../mainpage/homescreen/rys.png")} alt="logo" />
        </div>
        <div>
          <div className="skills-navbar-user-icon">
            <FaUser size={30} color="#9E11A8" onClick={() => setOpen(!open)} />
          </div>
          {/* <img src={usericon} alt="user icon"/> */}
          {open && (
            <div className="list-items">
              <ul>
                {Menus.map((menu) => (
                  <li onClick={() => setOpen(false)} key={menu}>
                    <a href="/#"> {menu} </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="skills-page-content">
        <div className="main">
          <div className="sidebar">
            <h3 className="heading">Select Tests</h3>
            <div className="search-bar">
              <div className="searchbar">
                <div className="search_icon">
                  <svg
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 26 26"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12.0586"
                      cy="12.0588"
                      r="7.06194"
                      stroke="#3C4852"
                      stoke-width="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></circle>
                    <path
                      d="M21.0033 21.0034L17.0516 17.0518"
                      stroke="#3C4852"
                      stoke-width="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div className="search-content">
                  <input
                    className="searchcontent"
                    type="text"
                    autoComplete="off"
                    placeholder="Search for your test"
                  ></input>
                </div>
              </div>
              <div className="bg-white"></div>
            </div>
            <div className="test-box">
              <div className="test-heading">
                <p> Technical Tests </p>
                <div className="dash"></div>
              </div>
              <div className="selected-test-styling">
                <a href="/#">
                  <div className="selected-test">
                    <p className="selected-test-heading">
                      Python Programming Test
                    </p>
                    <p className="selected-test-content">
                      CTC up to 8 LPA • 1000+ Jobs
                    </p>
                  </div>
                </a>
                <div className="selected-test-boundary" />
              </div>
              <div className="first-test-styling">
                <a href="/#">
                  <div className="first-test">
                    <p className="first-test-heading">Java Programming Test</p>
                    <p className="first-test-content">
                      CTC up to 8 LPA • 1000+ Jobs
                    </p>
                  </div>
                </a>
                <div className="first-test-boundary" />
              </div>
              <div className="first-test-styling">
                <a href="/#">
                  <div className="first-test">
                    <p className="first-test-heading">Ruby Programming Test</p>
                    <p className="first-test-content">
                      CTC up to 8 LPA • 1000+ Jobs
                    </p>
                  </div>
                </a>
                <div className="first-test-boundary" />
              </div>
              <div className="first-test-styling">
                <a href="/#">
                  <div className="first-test">
                    <p className="first-test-heading">
                      Django Programming Test
                    </p>
                    <p className="first-test-content">
                      CTC up to 8 LPA • 1000+ Jobs
                    </p>
                  </div>
                </a>
                <div className="first-test-boundary" />
              </div>
              <div className="first-test-styling">
                <a href="/#">
                  <div className="first-test">
                    <p className="first-test-heading">
                      NodeJs Programming Test
                    </p>
                    <p className="first-test-content">
                      CTC up to 8 LPA • 1000+ Jobs
                    </p>
                  </div>
                </a>
                <div className="first-test-boundary" />
              </div>
              <div className="first-test-styling">
                <a href="/#">
                  <div className="first-test">
                    <p className="first-test-heading">Swift Programming Test</p>
                    <p className="first-test-content">
                      CTC up to 8 LPA • 1000+ Jobs
                    </p>
                  </div>
                </a>
                <div className="first-test-boundary" />
              </div>
            </div>
          </div>
          <div className="right-section">
            <div className="titleStickyHeader">
              <div className="stickySubContainer">
                <div className="stickySubContainer-heading">
                  <p> Python Programming Test </p>
                </div>
              </div>
              <div className="titleContainer">
                <div className="bar_items" style={{ width: 107.783 }}>
                  Skills required
                </div>
                <div className="bar_items" style={{ width: 105.367 }}>
                  Test structure
                </div>
                <div className="bar_items" style={{ width: 100.817 }}>
                  Downloads
                </div>
                <div className="bar_items" style={{ width: 83.6 }}>
                  FAQs
                </div>
              </div>
              <div className="bg-main-primary" />
            </div>
          </div>
        </div>
      </div>
      <div className="skills-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Skills;
