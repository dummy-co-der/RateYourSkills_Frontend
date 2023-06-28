import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import styles from "./ChooseUs.module.css";
import ChooseData from "../../../data/ChooseData";

export default function ChooseUs() {
  const [offsetRadius, setOffsetRadius] = useState(4);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);

  useEffect(() => {
    setOffsetRadius(200);
    setShowArrows(false);
  }, []);

  const cards = ChooseData.map((data) => ({
    key: uuidv4(),
    content: (
      <Card imagen={data.image} head={data.header} subject={data.subject} />
    ),
  }));

  return (
    <div className={styles.choose}>
      <h1 className={styles.choose_heading}>Why Choose Us?</h1>
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
    </div>
  );
}
