import React from "react";
import styles from "./Footer.module.css";
import { FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
import ios from "/footer-images/appstoreiOS.png";
import android from "/footer-images/appstoreAndroid.png";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.footer_up}>
          <div className={styles.popular_test}>
            <h3 className={styles.up_heading}>Popular Test</h3>
            <ul className={styles.boxlist}>
              <li> Search Study Materials </li>
              <li> Rewards Store </li>
              <li> Find Jobs </li>
              <li> Community Guidelines </li>
            </ul>
          </div>
          <div className={styles.other_links}>
            <h3 className={styles.up_heading}>Other Links</h3>
            <ul className={styles.boxlist}>
              <li> Search Study Materials </li>
              <li> Rewards Store </li>
              <li> Find Jobs </li>
              <li> Community Guidelines </li>
            </ul>
          </div>
          <div className={styles.social_logo}>
            <h3 className={styles.up_heading}>Social Media</h3>
            <ul className={styles.social_list}>
              <li>
                <a href="/">
                  <FiLinkedin style={{ fontSize: "30px", color: "#ffffff" }} />
                </a>
              </li>
              <li>
                <a href="/">
                  <FiInstagram style={{ fontSize: "30px", color: "#ffffff" }} />
                </a>
              </li>
              <li>
                <a href="/">
                  <FiMail style={{ fontSize: "30px", color: "#ffffff" }} />
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.store}>
            <a href="/">
              <img src={ios} alt="ios" height={55} width={175} />
            </a>
            <a href="/">
              <img src={android} alt="android" height={55} width={175} />
            </a>
          </div>
        </div>
        <div className={styles.footer_down}>
          <p className={styles.down_heading_one}>
            &copy; GetMyNotes 2023 - 2027
          </p>
          <p className={styles.down_heading_two}>
            Privacy Policy | Terms & Conditions
          </p>
          <p className={styles.down_heading_last}>Version 1.1.2</p>
        </div>
      </div>
    </div>
  );
}
