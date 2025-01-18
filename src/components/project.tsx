import styles from "src/styles/Home.module.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Project(props) {
  
  return (
    <div className={styles.experience}>
      <div>
        <div className={styles.projectName}>
          <Link href={props.companyLink}>
            <h2>{props.company}</h2>
          </Link>
        </div>
      </div>

      <h3>{props.position}</h3>
      <p>
        {props.description}
      </p>

      <ul>
        {props.bulletpoints.map((bullet) => (
          <li>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}
