import React from "react";
import styles from "./TextureBgComp.module.css";

const TextureBgComp = () => {
  return (
    <div className={styles.textBg}>
      <div className={styles.content}>
        <div className={styles.col1}>
          <p>Contact Info</p>
          <h1>We are always happy to assist you</h1>
        </div>
        <div className={styles.col2}>
          <div>
            <h3>Email Address</h3>
            <div className={styles.line} />
            <h3>Support@RMax.com</h3>
            <p>Assistance hours: Monday - Friday 6 am to 8 pm EST</p>
          </div>
          <div>
            <h3>Contact Number</h3>
            <div className={styles.line} />
            <h3>+91-8657491236</h3>
            <p>Assistance hours: Monday - Friday 6 am to 8 pm EST</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextureBgComp;
