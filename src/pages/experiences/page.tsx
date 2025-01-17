import React from "react";

import styles from "src/styles/Home.module.css";

import Section from "@/components/section";
import Experience from "@/components/experience";

export default function Experiences() {
    const itojt = [
        "Selected as one of six cadets nationwide to use PowerApps to improve the cadet experience to prototype a Uniform Measurement App to streamline uniform distribution, size matching, and inventory management",
        "Developed the cadets.ca website with HTML using the Government of Canada’s Adobe Experience Manager",
        "Created data visualization models with PowerBI to analyze the cadet website and Microsoft 365 engagement",
        "Worked with Microsoft's HoloLens 2 to assist cadets with maintaining uniform standards and instructional techniques"
      ];

  return (
    <div>
      <Section title="Experiences" />
      <Experience
        imageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAUvsyXLOeY1jwfTnV4oq9d2TJ9wYW1q4uiA&amp;s"
        company="Government of Canada"
        companyLink="https://www.canada.ca/en/department-national-defence/services/cadets-junior-canadian-rangers/cadets/summer-training/staff-cadet.html#toc4"
        position="Informational Technology Intern"
        date="JUN 2022 - AUG 2022"
        description="I worked with multiple different high-level technologies in Quebec to
        enhance the cadet experience. I got to meet cadets from all across
        Canada and was also voted to be Vice President Internal to host socials
        for all staff cadets."
        // See our blog post here: href="https://www.facebook.com/photo.php?fbid=426479169523921&id=100064855231854&set=a.235994201905753&locale=gl_ES"
        bulletpoints={itojt}
      />

      <Section title="Education" />
    </div>
  );
}
