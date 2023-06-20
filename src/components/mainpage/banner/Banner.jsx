import React, { useEffect, useRef } from "react";
import styles from "./Banner.module.css";
import Typed from "typed.js";

export default function Banner() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Deep Skills", "Learning", "Proficiency", "Knowledge"],
      typeSpeed: 80,
      loop: true,
      smartBackspace: true,
    };

    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={styles.Banner}>
      <div className={styles.navbar_container}>
          <img src="/rys-images/rys-logo.png" style={{width: '328px', paddingLeft: '48px', paddingTop: '20px'}} />
        <div className={styles.navbar_links}>
          <a href="/login">
            Log In / Register
          </a>
          <a href="/demo">
            Request a demo
          </a>
        </div>
      </div>
      <div className={styles.banner_down}>
        <div className={styles.banner_content}>
          <div className={styles.banner_left}>
            <h1>
              Mission to <span className={styles.content_head} ref={typedRef}></span>
            </h1>
            <p className={styles.content_para}>
              RateYourSkills is a skill assessment platform used to upgrade,
              improve, and boost confidence by achieving a higher score in a
              desired test. It is an objective platform that verifies and
              assesses a candidate's competencies.
              <div className={styles.rate}>
                <a href="/#" className={styles.items}>
                  250K+ User Enrolled
                </a>
                <div />
                <a href="/#" className={styles.items}>
                  1M+ Test Taken
                </a>
              </div>
            </p>
          </div>
          <div className={styles.banner_right}>
            <div className={styles.overlay_laptop}>
              {/* <div className={styles.overlay_mobile}></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

