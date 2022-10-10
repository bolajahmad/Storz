import React from "react";
import styles from "./Error.module.css";
import error_anim from "../../assets/images/error-anim.gif";
import app_logo from "../../assets/icons/app-logo.png";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  return (
    <div className={styles["Error-con"]}>
      <div className={styles["login-storz"]}>
        <a href="/">
          <img id="app-logo" src={app_logo} alt="" />
          <p>Storz</p>
        </a>
      </div>
      <img src={error_anim} alt="404 Not Found!" />
      <div className={styles["error-sub"]}>
        <p>
          The page you are looking for is temporarily unavailable.
          <span
            className={styles["go-back"]}
            onClick={() => {
              navigate("/");
            }}
          >
            {" "}
            Go back to Storz.
          </span>
        </p>
      </div>
    </div>
  );
}

export default Error;
