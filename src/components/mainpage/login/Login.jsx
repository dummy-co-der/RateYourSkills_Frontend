import React, { useEffect, useState } from "react";
import validator from "validator";
import styles from "./login.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../../Pages/error";
import { handleloginsubmit } from "../../../Authentication/Action/User";
import Footer from "../footer/Footer";

export const Log = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userlogin = useSelector((state) => state.USERLOGIN);
  const { error, userInfo } = userlogin;

  useEffect(() => {
    const token = localStorage.getItem("TOKEN");
    if (token) {
      navigate("/home");
    }
  }, [navigate, userInfo]);

  const validateEmail = (e) => {
    var email = e.target.value;
    if (validator.isEmail(email)) {
      setEmailError("");
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    dispatch(handleloginsubmit(email, password));
  };

  return (
      <div className={styles.login}>
        <div className={styles.loginContainer}>
          <h1> Welcome Back! </h1>
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          <div className={styles.input_container}>
            <label> Email ID </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {
                validateEmail(e);
                setEmail(e.target.value);
              }}
              required
            />
            <span style={{ width: "300px", textAlign: "center", color: "red" }}>
              {emailError}
            </span>
            {/* {renderErrorMessage("uname")} */}
          </div>
          <div className={styles.input_container}>
            <label>Password </label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              type="password"
            />
          </div>

          <div className={styles.forget_password}>
            <Link to="/forget"> Forget password? </Link>
            <Link to="/register"> Create a new account </Link>
          </div>

          <button type="submit" onClick={handlesubmit} className={styles.loginBut}>
            <p>Login</p>
          </button>

          <button className={styles.siG}>
            <img
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
              alt="Trees"
              height="30"
            />
            <p> Sign in with Google </p>
          </button>
        </div>
        <div className={styles.login_footer}>
          <Footer />
        </div>
      </div>
  );
}

export default Log;
