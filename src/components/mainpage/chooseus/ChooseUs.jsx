import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import styles from "./ChooseUs.module.css";

export default function ChooseUs() {
  const [offsetRadius, setOffsetRadius] = useState(4);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);

  useEffect(() => {
    setOffsetRadius(200);
    setShowArrows(false);
  }, []);

  const cards = [
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://images.pexels.com/photos/7088483/pexels-photo-7088483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://images.pexels.com/photos/3885744/pexels-photo-3885744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://images.pexels.com/photos/3755755/pexels-photo-3755755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      ),
    },
  ];

  return (
    <div className={styles.choose}>
      <h1 className={styles.choose_heading}>Why Choose Us?</h1>
      {/* <div className={styles.choose_carousel}> */}
        {/* <div className={styles.choose_head}>
          <h1 style={{marginTop: '0', fontSize: '2rem' }}>Why Choose Us?</h1>
          <p className={styles.choose_para}>
            Discover the many ways in which our clients have embraced the
            benefits of the RateYourSkills network.
            <ul style={{ listStyle: "none" }}>
              <li> Comprehensive Skill Assessment </li>
              <li> Accurate and Detailed Results </li>
              <li> Personalized Recommendations </li>
              <li> Continuous Learning and Development </li>
              <li> Flexibility, Convenience and Competitive Edge </li>
            </ul>
          </p>
        </div> */}
        <div className={styles.choose_container}>
          <Carousel
            slides={cards.map((element, index) => ({
              ...element,
              onClick: () => setGoToSlide(index),
            }))}
            goToSlide={goToSlide}
            offsetRadius={offsetRadius}
            showNavigation={showArrows}
            animationConfig={config.gentle}
          />
        </div>
      {/* </div> */}
    </div>
  );
}
