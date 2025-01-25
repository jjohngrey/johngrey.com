import styles from "../styles/Home.module.css";
import React from "react";

import Link from "next/link";

export default function Header() {
    return (
        <div className={styles.header}>
            <Link href="/">johngrey &larr;</Link>
        </div>
    )
}