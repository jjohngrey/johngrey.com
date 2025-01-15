import React from "react";
import styles from "../styles/Home.module.css";

import Contact from "../components/contact";
import Header from "../components/header";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <main>{children}</main>
      </div>
      <Contact />
    </>
  );
};

export default RootLayout;
