import React, { useState } from "react";
import "./Home.module.css";
import { FaUser } from "react-icons/fa";
import Slider from "react-slick";
import Footer from "../Mainpage/Footer";

const imgs = [
  "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1555626906-fcf10d6851b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1493238792000-8113da705763?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1490641815614-b45106d6dd04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
];

const Home = () => {
  const [open, setOpen] = useState(false);
  const Menus = ["Profile", "Settings", "Logout"];
  const settings = {
    centerMode: true,
    centerPadding: "10px",
    slidesToShow: 5,
    speed: 500,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  const renderSlides = imgs.map((num) => (
    <img className="trending-img" key={num} src={num} alt="" />
  ));

  return (
    <div className="home=page">
      <div className="skills-navbar">
        <div className="skills-navbar-logo">
          <img src={require("../mainpage/homescreen/rys.png")} alt="logo" />
        </div>
        <div>
          <div className="skills-navbar-user-icon">
            {" "}
            <FaUser
              size={30}
              color="#9E11A8"
              onClick={() => setOpen(!open)}
            />{" "}
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
                      {" "}
                      Python Programming Test{" "}
                    </p>
                    <p className="selected-test-content">
                      {" "}
                      CTC up to 8 LPA • 1000+ Jobs{" "}
                    </p>
                  </div>
                </a>
                <div className="selected-test-boundary" />
              </div>
              <div className="first-test-styling">
                <a href="/#">
                  <div className="first-test">
                    <p className="first-test-heading">
                      {" "}
                      Java Programming Test{" "}
                    </p>
                    <p className="first-test-content">
                      {" "}
                      CTC up to 8 LPA • 1000+ Jobs{" "}
                    </p>
                  </div>
                </a>
                <div className="first-test-boundary" />
              </div>
              <div className="first-test-styling">
                <a href="/#">
                  <div className="first-test">
                    <p className="first-test-heading">
                      {" "}
                      Ruby Programming Test{" "}
                    </p>
                    <p className="first-test-content">
                      {" "}
                      CTC up to 8 LPA • 1000+ Jobs{" "}
                    </p>
                  </div>
                </a>
                <div className="first-test-boundary" />
              </div>
            </div>
          </div>

          <div className="home-right-section">
            <div className="home-right-choosenSkills">
              <h3> Choosen Skills </h3>
              <div className="choosen-slider">
                <Slider {...settings}>{renderSlides}</Slider>
              </div>
            </div>

            <div className="line" />

            <div className="home-right-recommSkills">
              <h3> Recommendation Skills </h3>
              <div className="recomm-slider">
                <Slider {...settings}>{renderSlides}</Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
