import React from "react";
import styles from "../styles/Home.module.css";

import Contact from "../components/contact";
import Header from "../components/header";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className={styles.layout}>
          <main className={styles.children}>{children}</main>
      </div>
      <Contact />
    </div>
  );
};

export default RootLayout;
