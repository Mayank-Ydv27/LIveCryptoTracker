import React from "react";
import Button from "../../Common/Button";
import "./styles.css";
import gradient from "../../../assets/gradient.png";
import iphone from "../../../assets/iphone.png";
import { motion } from "framer-motion";
import { RWebShare } from "react-web-share";
import { toast } from "react-toastify";

function MainComponent() {
  return (
    <div className="main-flex">
      <div className="info-landing">
        <motion.h1
          className="heading1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="heading2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="info-text"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration:1 }}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!{" "}
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.75 }}
        >
          <a href="/dashboard">
            <Button text={"Dashboard"} />
          </a>
          <RWebShare
            data={{
              text: "CryptoDashboard made by Mayank Yadav using React JS.",
              url: "https://l-ive-crypto-tracker.vercel.app/",
              title: "CryptoTracker.",
            }}
            onClick={() => toast.info("App Shared!")}
          >
            <Button text={"Share App"} outlined={true} />
          </RWebShare>
        </motion.div>
      </div>
      <div className="gradient-div">
        <img src={gradient} className="gradient" />
        <motion.img
          src={iphone}
          className="iphone"
          initial={{ y: -13 }}
          animate={{ y: 13 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
}

export default MainComponent;
