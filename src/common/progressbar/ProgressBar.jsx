import React, { useState, useEffect } from "react";
import styles from "./ProgressBar.module.css";

export default function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const currentScrollHeight = window.scrollY;
      const progress = (currentScrollHeight / totalScrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.progress_bar}>
      <div
        className={styles.progress}
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
}
