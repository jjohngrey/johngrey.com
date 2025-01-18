import styles from "src/styles/Home.module.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Experience(props) {
  
  return (
    <div className={styles.experience}>
      <div>
        <div className={styles.company}>
          <Image
            src={props.imageLink}
            alt="company-log"
            height={60}
            width={60}
          />
          <Link href={props.companyLink}>
            <h2>{props.company}</h2>
          </Link>
        </div>
      </div>

      <h3>{props.position}</h3>
      <h4>{props.date}</h4>
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
