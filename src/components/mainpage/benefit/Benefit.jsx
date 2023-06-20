import React, { useRef, useEffect, useState } from "react";
import styles from "./Benefit.module.css";
import BenefitData from "../../../data/BenefitData";
import { motion } from "framer-motion";

export default function Benefit() {
  const benefitRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.2,
      },
    },
  };
  const items = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const handleScroll = () => {
    if (benefitRef.current) {
      const { top, bottom } = benefitRef.current.getBoundingClientRect();
      const isVisible = top < window.innerHeight && bottom >= 0;
      setIsVisible(isVisible);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.benefit} ref={benefitRef}>
      <div className={styles.benefit_content}>
        <div className={styles.benefit_heading}>
          <h1 className={styles.benefit_head}> Benefits at a Glance </h1>
          <p>
            RateYourSkill platform provides users with a simple and
            user-friendly interface for taking assessments in a variety of skill
            categories, including programming, design, and writing. The
            assessments are designed to be comprehensive and accurate, providing
            users with clear feedback on their skill levels and areas for
            improvement.
          </p>
        </div>
        <motion.div
          className={styles.benefit_card_list}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {BenefitData.map((item, index) => (
            <motion.div
              key={index}
              variants={items}
              className={styles.benefit_point}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={styles.benefit_card_img}>
                <img src={item.image} alt="image" className={styles.img} />
              </div>
              <div className={styles.benefit_card_content}>
                <h3 className={styles.benefit_card_content_head}>
                  {item.header}
                </h3>
                <p style={{ marginTop: "0" }}>{item.subject}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
