import React from "react";

import styles from "src/styles/Home.module.css";

export default function Experiences() {
  return (
    <div>
      <div className={styles.section}>
        <h1>Experiences</h1>
        <p></p>
        <div>
            <h2>
            Government of Canada
            </h2>
            <h3>
                Informational Technology Intern
            </h3>
            <h4>
                JUN 2022 - AUG 2022
            </h4>
            <ul>
                <li>
                Selected as one of six cadets nationwide to use PowerApps to improve the cadet experience to prototype a
                Uniform Measurement App to streamline uniform distribution, size matching, and inventory management
                </li>
                <li>
                Developed the cadets.ca website with HTML using the Government of Canada’s Adobe Experience Manager
                </li>
                <li>
                Created data visualization models with PowerBI to analyze the cadet website and Microsoft 365 engagement
                </li>
                <li>
                Worked with Microsoft's HoloLens 2 to assist cadets with maintaining uniform standards and instructional techniques
                </li>
            </ul>
        </div>
      </div>

      <div>
        <h1>Education</h1>
        <p></p>
        <div>
            <h2>University of British Columbia</h2>
        </div>
      </div>
    </div>
  );
}
