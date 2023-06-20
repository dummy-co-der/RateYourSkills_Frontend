import React, { useState } from "react";
import styles from "./Faq.module.css";
import FaqData from "../../../Data/FaqData";

export default function Faq() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) return setSelected(null);
    setSelected(i);
  };

  return (
    <div className={styles.Faq}>
      <div className={styles.faq_content}>
        <div className={styles.faq_heading}>
          <h1 className={styles.faq_head}> Frequently Asked Questions </h1>
          <p>
            As with any new platform, users may have questions regarding how it
            works and what it can offer them. To address these concerns, the
            RateYourSkill website features a Frequently Asked Questions (FAQ)
            section. The FAQ section contains a list of common questions that
            users may have about the platform, such as how to sign up, how to
            take an assessment, and how to view their results.
          </p>
        </div>
        <div className={styles.faq_questions}>
          <div className={styles.accordion}>
            {FaqData.map((item, i) => (
              <div className={styles.item}>
                <div className={styles.title} onClick={() => toggle(i)}>
                  <h4> {item.question} </h4>
                  <span> {selected === i ? "-" : "+"} </span>
                </div>
                <div
                  className={
                    selected === i ? styles.content_show : styles.content
                  }
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
