import styles from "../styles/Home.module.css";
import React from "react";

import Link from "next/link";

export default function ExperiencesNav() {

    return (
        <ul className={styles.experiences}>
          <li>
            <Link href="/experiences/page">Work</Link>
          </li>
          <li>
            <Link href="/experiences/leadership">Leadership</Link>
          </li>
          <li>
            <Link href="/experiences/education">Education</Link>
          </li>
          <li>
            <Link href="" onClick={() => {
                 window.open('/john_grey_resume.pdf');
            }}>Resume</Link>
          </li>
        </ul>
    )
}