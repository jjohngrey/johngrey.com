import React from "react";

import Section from "@/components/section";
import Experience from "@/components/experience";

export default function Experiences() {
  const itojt = [
    "Selected as one of six cadets nationwide to use PowerApps to improve the cadet experience to prototype a Uniform Measurement App to streamline uniform distribution, size matching, and inventory management",
    "Developed the cadets.ca website with HTML using the Government of Canada’s Adobe Experience Manager",
    "Created data visualization models with PowerBI to analyze the cadet website and Microsoft 365 engagement",
    "Worked with Microsoft's HoloLens 2 to assist cadets with maintaining uniform standards and instructional techniques",
  ];
  const best = [
    "Increased 88% in site traffic and engagement by leading a redesign of the website from collected feedback",
    "Maintained a 99.9% uptime and simplifying team updates by deploying on Vercel with CI/CD pipelines",
    "Boosted follower count by 20% by using UX principles on the frontend in collaboration with the media team",
  ];
  const bucs = [
    "Managed a budget of $5600 across 10 events for 350+ students in the Business and Computer Science program",
    "Increased hiring applications by 200% and expanded the team with 2 new positions and 4 additional hires",
    "Boosted student participation by 68.2% across 4+ initiatives through feedback forms and student surveys",
  ];
  const ubc = [];

  return (
    <div>
      <Section title="Experiences" />
      <Experience
        imageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs0tQ0cRW7VQUDPhVBXU6VZ0-hucchzthIlQ&s"
        company="Biomedical Engineering Team"
        companyLink=""
        position="Fullstack Developer"
        date="MAR 2024 - PRESENT"
        description="I led the redesign and help build the website from scratch."
        bulletpoints={best}
      />
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
      <Section title="Leadership" />
      <Experience
        imageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2WpPhGCdMXHbbQ5TKWLIQqkgifXfxof0uww&s"
        company="BUCS Community Team"
        companyLink=""
        position="Co-Chair"
        date="APR 2024 - APR 2025"
        description=""
        bulletpoints={bucs}
      />

      <Section title="Education" />
      <Experience
        imageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqDUf4YmX5K43iSB0gDaZfEtPZrA04Lt4xA&s"
        company="University of British Columbia"
        companyLink="https://www.ubc.ca/"
        position="Business and Computer Science Combined Major"
        date=""
        description=""
        bulletpoints={ubc}
      />
    </div>
  );
}
