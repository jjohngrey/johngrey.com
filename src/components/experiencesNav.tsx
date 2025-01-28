import styles from "../styles/Home.module.css";
import React from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function ExperiencesNav() {
  const router = useRouter();
  const [current, setCurrent] = useState(router.pathname);

  useEffect(() => {
    setCurrent(router.pathname);
  }, [router.pathname]);


  return (
    <ul className={styles.experiences}>
      <li>
        <Link
          href="/experiences/page"
          className={router.pathname == "/experiences/page" ? styles.selected : null}
        >
          Work
        </Link>
      </li>
      <li>
        <Link
          href="/experiences/leadership"
          className={router.pathname == "/experiences/leadership" ? styles.selected : null}
        >
          Leadership
        </Link>
      </li>
      <li>
        <Link
          href="/experiences/education"
          className={router.pathname == "/experiences/education" ? styles.selected : null}
        >
          Education
        </Link>
      </li>
      <li>
        <Link
          href=""
          onClick={() => {
            window.open("/john_grey_resume.pdf");
          }}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}
