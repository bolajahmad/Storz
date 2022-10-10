import React, { useContext, useEffect, useState } from "react";
import styles from "./Landing.module.css";
import landing_gradient from "../../assets/images/landing-gradient2.png";
import feature_gradient from "../../assets/images/landing-center.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import rings from "../../assets/images/rings.png";
import { UserContext } from "../../utils/UserContext";
import app_logo from "../../assets/icons/app-logo.png";
import sheild_gif from "../../assets/images/security.gif";
import cube_gif from "../../assets/images/fragments.gif";
import arrowup from "../../assets/icons/arrowup.svg";
import map from "../../assets/images/map.png";
import discord_logo from "../../assets/icons/discord.png";
import github_logo from "../../assets/icons/github.svg";
import { motion } from "framer-motion";
import Globe from "../../components/globe/Globe";

function Landing() {
  const navigate = useNavigate();
  const user = useContext(UserContext)[0];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const handleOnMouseOver = (event) => {
    event.target.style.cursor = "default";
  };

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listentoScroll = () => {
    let heightToHidden = 25;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listentoScroll);
    return () => window.removeEventListener("scroll", listentoScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <div className={styles["top-btn"]} onClick={goToBtn}>
          <img src={arrowup} alt="" className={styles["arrowup"]} />
        </div>
      )}
      <motion.div
        className={styles["landing-con"]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <img src={rings} alt="" className={styles["rings"]} />
        <img
          src={landing_gradient}
          alt=""
          className={styles["landing-gradient"]}
        />
        <img
          src={feature_gradient}
          alt=""
          className={styles["landing-center"]}
        />
        <div className={styles["landing-navbar"]}>
          <div className="logo-box" onMouseOver={handleOnMouseOver}>
            <img src={app_logo} alt="" />
            <p>Storz</p>
          </div>
          <div
            className={styles["sign-up-btn"]}
            onClick={() => {
              user && user.issuer ? navigate("/app/home") : navigate("/signin");
            }}
          >
            <p>{user && user.issuer ? "Upload files" : "Sign in"}</p>
          </div>
        </div>
        <div className={styles["hero-con"]}>
          <div className={styles["left-con"]}>
            <p className={styles["hero-con-head"]}>
              The <span className={styles["gradient-text"]}>Future</span> of
              File Sharing is Here
            </p>
            <p className={styles["hero-desc"]}>
              Store unlimited files and share it seamlessly with anyone.
            </p>
            <div className={styles["btn-con"]}>
              <div
                className={`${styles["use-btn"]} ${styles["landing-btn"]}`}
                onClick={() => {
                  user && user.issuer
                    ? navigate("/app/home")
                    : navigate("/signin");
                }}
              >
                <span>Use Now </span>
              </div>
              <div
                className={`${styles["join-btn"]} ${styles["landing-btn"]}}`}
              >
                <a
                  href="https://discord.gg/Z9hbT8RGNG"
                  className={styles["join-link"]}
                  target="_blank"
                  rel="noreferrer"
                >
                  Join Us
                </a>
              </div>
            </div>
          </div>
          <div className={styles["right-con"]}>
            <Globe />
          </div>
        </div>

        <div className={styles["feature-con"]}>
          <img
            className={styles["feature-img"]}
            src={sheild_gif}
            alt=""
            data-aos="zoom-in"
          />

          <div className={styles["feature-desc"]} data-aos="fade-up">
            <h1>
              {" "}
              <span>Privacy</span> First.
            </h1>
            <h1>
              {" "}
              Completely <span>Secured.</span>
            </h1>
            <p>
              Storz uses AES-256 bit password encryption to protect your data
              from hackers and malicious agents. Storz will keep your data safe
              behind trillions of lock combinations.
            </p>
          </div>
        </div>

        <div className={styles["feature-con"]} id="spcl">
          <div className={styles["feature-desc"]} data-aos="fade-up">
            <h1>
              <span>Decentralized.</span>{" "}
            </h1>
            <h1>
              Super <span>Fast</span> & <span>Reliable.</span>
            </h1>
            <p>
              Storz uses InterPlanetary File System (IPFS), a high-performance,
              distributed server network protocol. Your data is chopped into
              smaller chunks of itself, then hashed and stored.{" "}
            </p>
          </div>

          <img
            src={feature_gradient}
            alt=""
            className={styles["landing-center"]}
            id="hidden-gradient"
          />
          <img
            className={styles["feature-img"]}
            src={cube_gif}
            alt=""
            data-aos="zoom-in"
          />
        </div>

        <div className={styles["joinus-con"]} data-aos="fade-up">
          <h1>Join Our Community!</h1>
          <p>Help us on our quest to make this product even better.</p>
          <div className="use-btn landing-btn">
            <span>
              {" "}
              <a
                href="https://discord.gg/Z9hbT8RGNG"
                className={styles["join-link-b"]}
                target="_blank"
                rel="noreferrer"
              >
                Join Us
              </a>
            </span>
          </div>
          <img src={map} alt="" />
        </div>

        <div className={styles["footer-con"]}>
          <div className={styles["logo-box"]}>
            <img src={app_logo} alt="" />
          </div>
          <p>©2022 Storz</p>
          <div className={styles["socials-con"]}>
            <a
              href="https://discord.gg/Z9hbT8RGNG"
              className={styles["join-link"]}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={styles["disc"]}
                src={discord_logo}
                alt="Discord"
              />
            </a>
            <a
              href="https://github.com/anomic30/Storz"
              className={styles["join-link"]}
              target="_blank"
              rel="noreferrer"
            >
              <img className={styles["disc"]} src={github_logo} alt="GitHub" />
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Landing;
