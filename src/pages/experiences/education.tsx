import React from "react";

import Link from "next/link";

import Section from "@/components/section";
import Experience from "@/components/experience";
import styles from "@/styles/Home.module.css";

export default function Education() {
  // const itojt = [
  //   "Selected as one of six cadets nationwide to use PowerApps to improve the cadet experience to prototype a Uniform Measurement App to streamline uniform distribution, size matching, and inventory management",
  //   "Developed the cadets.ca website with HTML using the Government of Canada’s Adobe Experience Manager",
  //   "Created data visualization models with PowerBI to analyze the cadet website and Microsoft 365 engagement",
  //   "Worked with Microsoft's HoloLens 2 to assist cadets with maintaining uniform standards and instructional techniques",
  // ];
  // const best = [
  //   "Increased 88% in site traffic and engagement by leading a redesign of the website from collected feedback",
  //   "Maintained a 99.9% uptime and simplifying team updates by deploying on Vercel with CI/CD pipelines",
  //   "Boosted follower count by 20% by using UX principles on the frontend in collaboration with the media team",
  // ];
  // const bucs = [
  //   "Managed a budget of $5600 across 10 events for 350+ students in the Business and Computer Science program",
  //   "Increased hiring applications by 200% and expanded the team with 2 new positions and 4 additional hires",
  //   "Boosted student participation by 68.2% across 4+ initiatives through feedback forms and student surveys",
  // ];
  // const ubc = [];

  return (
    <div>
      <div className={styles.container}>
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
        </ul>
      </div>
      <Section title="Education" />
      <Experience
        imageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqDUf4YmX5K43iSB0gDaZfEtPZrA04Lt4xA&s"
        company="University of British Columbia"
        companyLink="https://www.ubc.ca/"
        position="Business and Computer Science Combined Major"
        date=""
        description=""
      />
    </div>
  );
}
