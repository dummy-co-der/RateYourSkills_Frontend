import React from "react";
import styles from "./Login.module.css";
import {
  FiFacebook,
  FiLinkedin,
  FiLock,
  FiGithub,
  FiTwitter,
  FiUser,
  FiMail,
} from "react-icons/fi";

export default function Login () {
  const handleSignUp = () => {
    const container = document.querySelector(`.${styles.container}`);
    container.classList.add(styles["sign-up-mode"]);
  };

  const handleSignIn = () => {
    const container = document.querySelector(`.${styles.container}`);
    container.classList.remove(styles["sign-up-mode"]);
  };

  return (
    <div className={styles.container}>
      <div className={styles["forms-container"]}>
        <div className={styles["signin-signup"]}>
          <form action="" className={styles["sign-in-form"]}>
            <h2 className={styles.title}>Sign In</h2>
            <div className={styles["input-field"]}>
              <FiUser className={styles.icon} />
              <input type="text" placeholder="Username" />
            </div>
            <div className={styles["input-field"]}>
              <FiLock className={styles.icon} />
              <input type="password" placeholder="Password" />
            </div>
            <input
              type="submit"
              value="Login"
              className={`btn solid ${styles.btn}`}
            />

            <p className={styles["social-text"]}>
              Or Sign in with social platforms
            </p>
            <div className={styles["social-media"]}>
              <a href="#" className={styles["social-icon"]}>
                <FiFacebook />
              </a>
              <a href="#" className={styles["social-icon"]}>
                <FiTwitter />
              </a>
              <a href="#" className={styles["social-icon"]}>
                <FiGithub />
              </a>
              <a href="#" className={styles["social-icon"]}>
                <FiLinkedin />
              </a>
            </div>
          </form>

          <form action="" className={styles["sign-up-form"]}>
            <h2 className={styles.title}>Sign Up</h2>
            <div className={styles["input-field"]}>
              <FiUser className={styles.icon} />
              <input type="text" placeholder="Username" />
            </div>
            <div className={styles["input-field"]}>
              <FiMail className={styles.icon} />
              <input type="email" placeholder="Email" />
            </div>
            <div className={styles["input-field"]}>
              <FiLock className={styles.icon} />
              <input type="password" placeholder="Password" />
            </div>
            <input
              type="submit"
              value="Sign Up"
              className={`btn solid ${styles.btn}`}
            />

            <p className={styles["social-text"]}>
              Or Sign up with social platforms
            </p>
            <div className={styles["social-media"]}>
              <a href="#" className={styles["social-icon"]}>
                <FiFacebook />
              </a>
              <a href="#" className={styles["social-icon"]}>
                <i className="fab fa-twitter"></i>
                <FiTwitter />
              </a>
              <a href="#" className={styles["social-icon"]}>
                <FiGithub />
              </a>
              <a href="#" className={styles["social-icon"]}>
                <FiLinkedin />
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className={styles["panels-container"]}>
        <div className={`${styles.panel} ${styles["left-panel"]}`}>
          <div className={styles.content}>
            <h3>New Here?</h3>
            <p>
                Fuel Your Passion for Learning - Sign Up and Begin Your Educational Adventure!"
            </p>
            <button
              className={`btn transparent ${styles["sign-up-btn"]} ${styles.btn1}`}
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </div>
          <img src="./login-images/log.svg" className={styles.image} alt="" />
        </div>

        <div className={`${styles.panel} ${styles["right-panel"]}`}>
          <div className={styles.content}>
            <h3>One of us?</h3>
            <p>
                Unleash your potential with our comprehensive educational platform, one login away.
            </p>
            <button
              className={`btn transparent ${styles["sign-in-btn"]} ${styles.btn1}`}
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </div>
          <img
            src="./login-images/register.svg"
            className={styles.image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
