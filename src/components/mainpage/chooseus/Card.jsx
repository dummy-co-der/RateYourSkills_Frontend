import styles from "./Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

export default function Card({ imagen, head, subject }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    opacity: 1,
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });
  return (
    <animated.div
      className={styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imagen} alt="" />
      <h2> {head} </h2>
      <p> {subject} </p>
      <div className={styles.btnn}>
        {/* <Button text="Demo" />
        <Button text="Code" /> */}
      </div>
    </animated.div>
  );
}
