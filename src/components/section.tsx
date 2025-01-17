import styles from "../styles/Home.module.css";
import React from "react";


export default function Section(props) {
  

  return (
    <div className={styles.section}>
      <h1>{props.title}</h1>
      <p></p>
      <hr />
    </div>
  );
}
