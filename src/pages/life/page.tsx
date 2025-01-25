import React from "react";
import div from "next/div";

import Section from "@/components/section";
import Experience from "@/components/experience";

import styles from "@/styles/Home.module.css";

export default function Life() {
  return (
    <div>
      <Section title="Life" />
        <div className={styles.card}>
          <h3>🏃 Running</h3>
          <p>I like to run fast. Registered for the BMO half-marathon in May 2025 and aiming for under 2 hours! </p>
        </div>

        <div className={styles.card}>
          <h3>🎹 Piano</h3>
          <p>I like to play fast songs. Completed RCM Level 10 with First Class Honours. Now I like to play jazz and occasionally classical / modern pop.</p>
        </div>

        <div className={styles.card}>
          <h3>⛰️ Bouldering</h3>
          <p>I like to climb fast. Attempting V5s but my current financials do not support this expensive hobby.</p>
        </div>

        <div className={styles.card}>
          <h3>🍜 Food Critic (aka. pho connoisseur)</h3>
          <p>I'm very bad at eating fast. Out to find the best pho place in Vancouver. Currently Calgary is still on top for best pho -shoutout Royal Oak.</p>
        </div>
      </div>
  );
}
