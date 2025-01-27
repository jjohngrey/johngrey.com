import React from "react";

import Link from "next/link";

import Section from "@/components/section";
import Experience from "@/components/experience";
import styles from "@/styles/Home.module.css";
import ExperiencesNav from "@/components/experiencesNav";

export default function Leadership() {
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
      <ExperiencesNav />
      </div>
      <Section title="Leadership" />
      <Experience
        imageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2WpPhGCdMXHbbQ5TKWLIQqkgifXfxof0uww&s"
        company="BUCS Community Team"
        companyLink=""
        position="Co-Chair"
        date="April 2024 - Present"
        description="I helped create events to engage over 400 students in the Business and Computer Science program. Our initiatives include hackathons, socials, career fairs and our yearly mentorship program."
      />
    </div>
  );
}
