import React from "react";

import Link from "next/link";

import Section from "@/components/section";
import Experience from "@/components/experience";
import styles from "@/styles/Home.module.css";

export default function Experiences() {
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
          {/* <li>
          <Link href="/experiences/resume">Resume</Link> 
          </li> */}
        </ul>
      </div>
      <Section title="Work" />
      <Experience
        imageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs0tQ0cRW7VQUDPhVBXU6VZ0-hucchzthIlQ&s"
        company="Biomedical Engineering Team"
        companyLink=""
        position="Fullstack Developer"
        date="MAR 2024 - PRESENT"
        description="I proposed and led the redesign and help build the website from scratch."
      />
      <Experience
        imageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAUvsyXLOeY1jwfTnV4oq9d2TJ9wYW1q4uiA&amp;s"
        company="Government of Canada"
        companyLink="https://www.canada.ca/en/department-national-defence/services/cadets-junior-canadian-rangers/cadets/summer-training/staff-cadet.html#toc4"
        position="Informational Technology Intern"
        date="JUN 2022 - AUG 2022"
        description="I was chosen as 1 out of 6 cadets in all of Canada to 
        work with technologies in Quebec to
        enhance the cadet experience."
        // See our blog post here: href="https://www.facebook.com/photo.php?fbid=426479169523921&id=100064855231854&set=a.235994201905753&locale=gl_ES"
      />
    </div>
  );
}
