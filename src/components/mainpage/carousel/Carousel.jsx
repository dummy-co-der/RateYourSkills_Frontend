import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.css";
import { CarouselData } from "../../../data/CarouselData";
import { FiAward } from "react-icons/fi";

export default function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
          arrows: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel_content}>
        <div className={styles.carousel_heading}>
          <h1 className={styles.carousel_head}> Score board </h1>
          <p>
            The RateYourSkill platform includes a Scoreboard feature that
            displays the top users in each skill category. The Scoreboard ranks
            users based on their performance in assessments and their overall
            skill level. The Scoreboard feature is a valuable addition to the
            RateYourSkill platform, providing users with a way to track their
            progress, set goals, and stay motivated to improve their skills.
          </p>
        </div>
      </div>

      <div className={styles.mainpage_carousel}>
        <Slider {...settings}>
          {CarouselData.map((item) => (
            <div className={styles.card}>
              <div className={styles.cardith}>
                <div className={styles.image}>
                  <img src={item.img} alt={item.subject} />
                </div>
                <div className={styles.info}>
                  <h4> {item.subject}</h4>
                  <h3>
                    <FiAward /> <a href={item.firstrank}>{item.first}</a>
                  </h3>
                  <h3>
                    <FiAward /> <a href={item.secondrank}>{item.second}</a>
                  </h3>
                  <h3>
                    <FiAward /> <a href={item.thirdrank}>{item.third}</a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
