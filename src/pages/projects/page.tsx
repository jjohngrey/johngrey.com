import React from "react";

import Section from "@/components/section";
import Project from "@/components/project";

export default function Projects() {
  const ytclone = [];
  const stock = [];
  const spclone = [];

  return (
    <div>
      <Section title="Projects" />
      <Project
        company="📷 Video Sharing Platform"
        companyLink="https://github.com/jjohngrey/youtube-clone"
        position="TypeScript, Next.js, Express.js, FFmpeg, Firebase, Google Cloud"
        description="Built a video-sharing platform using Google Cloud services, integrating Firebase store uploaded videos."
        bulletpoints={ytclone}
      />
      <Project
        company="📊 Stock Market Simulation"
        companyLink="https://github.com/jjohngrey/Stock-Market-Simulation"
        position="Java"
        description="Designed a Java application using Object Oriented Programming to simulate realistic market operations."
        bulletpoints={stock}
      />
      <Project
        company="🎵 Music Playback Platform"
        companyLink="https://github.com/jjohngrey/Spotify-Clone"
        position="React.js, JavaScript, TypeScript, Supabase, PostgreSQL, Tailwind"
        description="Developed a full-stack music-playing web page through Next.js, React and Tailwind CSS for song playback."
        bulletpoints={spclone}
      />
    </div>
  );
}
