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

function Login () {
  const handleSignUp = () => {
    const container = document.querySelector(`.${styles.container}`);
    container.classList.add(styles["signup_mode"]);
  };

  const handleSignIn = () => {
    const container = document.querySelector(`.${styles.container}`);
    container.classList.remove(styles["signup_mode"]);
  };

  return (
    <div className={styles.container}>
      <div className={styles["forms_container"]}>
        <div className={styles["signin_signup"]}>
          <form action="" className={styles["signin_form"]}>
            <h2 className={styles.title}>Sign In</h2>
            <div className={styles["input_field"]}>
              <FiUser className={styles.icon} />
              <input type="text" placeholder="Username" />
            </div>
            <div className={styles["input_field"]}>
              <FiLock className={styles.icon} />
              <input type="password" placeholder="Password" />
            </div>
            <input
              type="submit"
              value="Login"
              className={`btn solid ${styles.btn}`}
            />

            <p className={styles["social_text"]}>
              Or Sign in with social platforms
            </p>
            <div className={styles["social_media"]}>
              <a href="#" className={styles["social_icon"]}>
                <FiFacebook />
              </a>
              <a href="#" className={styles["social_icon"]}>
                <FiTwitter />
              </a>
              <a href="#" className={styles["social_icon"]}>
                <FiGithub />
              </a>
              <a href="#" className={styles["social_icon"]}>
                <FiLinkedin />
              </a>
            </div>
          </form>

          <form action="" className={styles["signup_form"]}>
            <h2 className={styles.title}>Sign Up</h2>
            <div className={styles["input_field"]}>
              <FiUser className={styles.icon} />
              <input type="text" placeholder="Username" />
            </div>
            <div className={styles["input_field"]}>
              <FiMail className={styles.icon} />
              <input type="email" placeholder="Email" />
            </div>
            <div className={styles["input_field"]}>
              <FiLock className={styles.icon} />
              <input type="password" placeholder="Password" />
            </div>
            <input
              type="submit"
              value="Sign Up"
              className={`btn solid ${styles.btn}`}
            />

            <p className={styles["social_text"]}>
              Or Sign up with social platforms
            </p>
            <div className={styles["social_media"]}>
              <a href="#" className={styles["social_icon"]}>
                <FiFacebook />
              </a>
              <a href="#" className={styles["social_icon"]}>
                <i className="fab fa-twitter"></i>
                <FiTwitter />
              </a>
              <a href="#" className={styles["social_icon"]}>
                <FiGithub />
              </a>
              <a href="#" className={styles["social_icon"]}>
                <FiLinkedin />
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className={styles["panels_container"]}>
        <div className={`${styles.panel} ${styles["left_panel"]}`}>
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

        <div className={`${styles.panel} ${styles["right_panel"]}`}>
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
export default Login;
