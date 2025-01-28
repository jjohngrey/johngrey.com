import Head from "next/head";
import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";

import { useLocation } from "react-router-dom";
import { initGA, logPageView } from "../utils/analytics";

import Link from "next/link";
import Image from "next/image";

const TrackPageViews = () => {
  const location = useLocation();

  useEffect(() => {
    logPageView(location.pathname); // Log page views on route change
  }, [location]);

  return null;
};


export default function Home() {
  useEffect(() => {
    initGA(); // Initialize GA once
  }, []);
  
  return (
    <div>
      <Head>
        {/* Google Tag Manager Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=${"GTM-ND5SFH99"}'+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-ND5SFH99');
            `,
          }}
        />
        <title>John Grey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-ND5SFH99"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      <main>
        <div className={styles.hero}>
          <div>
            <h1 className={styles.title}>👋 Hi! I am</h1>
            <h1 className={styles.title}>
              <a href="https://www.linkedin.com/in/john-grey">John Grey!</a>
            </h1>
          </div>
          <Image
            src="/images/headshot.jpg"
            alt="headshot"
            height={300}
            width={300}
          />
        </div>

        <p className={styles.description}>
          I am a software engineer, pho connoisseur, and occasional runner 🏃.
          I'm currently studying{" "}
          <a href="https://mybcom.sauder.ubc.ca/bucs">
            Business and Computer Science
          </a>{" "}
          at the{" "}
          <a href="https://www.ubc.ca/">🎓 University of British Columbia</a>.
          I share my experiences, projects, learnings and personal thoughts on
          here. Feel free to take a look. 😊
        </p>

        <div className={styles.grid}>
          <Link href="/experiences/page" className={styles.card}>
            <h3>💼 Experiences &rarr;</h3>
            <p>
              Prev @ Government of Canada ✈️, Department of National Defense
            </p>
          </Link>

          <Link href="/projects/page" className={styles.card}>
            <h3>🛠️ Projects &rarr;</h3>
            <p>
              Feat. Stock Market Simulation 📈, hackathon projects and more!
            </p>
          </Link>

          <Link href="/blog/page" className={styles.card}>
            <h3>🖋️ Blog &rarr;</h3>
            <p>Thoughts on career, life and everything in between 📖</p>
          </Link>

          <Link href="/life/page" className={styles.card}>
            <h3>🌱 Life &rarr;</h3>
            <p>Learn about my hobbies, interests and current pursuits 🚀</p>
          </Link>
        </div>
      </main>

      <style jsx>{`
        main {
          padding: 1rem 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
