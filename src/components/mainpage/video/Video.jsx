import React, { useRef, useEffect, useState } from "react";
import styles from "./Video.module.css";
import { motion } from "framer-motion";

export default function Video() {
  const videoRef = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const { top, bottom } = videoRef.current.getBoundingClientRect();
        const isVisible = top < window.innerHeight && bottom >= 0;
        setVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.video} ref={videoRef}>
      <div className={styles.video_content}>
        <h1 className={styles.video_head}>Demo of the Test</h1>
        <div className={styles.video_vid}>
          <motion.p
            className={styles.video_para}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100 }}
            transition={{ duration: 0.6 }}
          >
            RateYourSkill platform is a visual representation of its features,
            purpose, and benefits. The demo test video aims to showcase the
            effectiveness of the platform as a valuable tool for self-assessment
            and skill development. It highlights the different categories
            available and how users can use it to evaluate their skills in each
            category. The video demonstrates the process of creating a profile
            on the platform, selecting categories to assess their skills, and
            taking the assessments. The feature provides feedback on the skill
            levels and areas for improvement. Furthermore, the video also
            exhibits the platform's user-friendly interface, including clear
            instructions and well-structured assessments. Overall, the demo test
            video of the Rate Your Skill platform is an informative and engaging
            way for personal and professional development, such as identifying
            skill gaps and setting goals for improvement.
          </motion.p>
          <div className={styles.video_container}>
            <motion.iframe
              title="rysVideo"
              src="https://www.youtube.com/embed/lo6wzEPfCrg"
              allow="autoplay:encrypted-media"
              allowFullScreen
              style={{ width: "600px", height: "280px" }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 100 }}
              transition={{ duration: 0.6 }}
            ></motion.iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
