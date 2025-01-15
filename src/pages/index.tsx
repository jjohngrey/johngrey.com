import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>John Grey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.hero}>
          <div>
            <h1 className={styles.title}>👋 Hi! I am</h1>
            <h1 className={styles.title}>
              <a href="https://nextjs.org">John Grey!</a>
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
          I am a software engineer, pho connoisseur, and occasional runner. I'm
          currently studying{" "}
          <a href="https://mybcom.sauder.ubc.ca/bucs">
            Business and Computer Science
          </a>{" "}
          at the{" "}
          <a href="https://www.ubc.ca/">University of British Columbia</a>. I
          share my experiences, projects, learnings and personal thoughts on
          here. Feel free to take a look. 😊
        </p>

        <div className={styles.grid}>
          <Link href="/experiences/page" className={styles.card}>
            <h3>Experiences &rarr;</h3>
            <p>Prev @ Government of Canada, Department of National Defense</p>
          </Link>

          <Link href="/projects/page" className={styles.card}>
            <h3>Projects &rarr;</h3>
            <p>Feat. Stock Market Simulation, hackathon projects and more!</p>
          </Link>

          <Link href="/blog/page" className={styles.card}>
            <h3>Blog &rarr;</h3>
            <p>Thoughts on career, life and everything in between</p>
          </Link>

          <Link href="/life/page" className={styles.card}>
            <h3>Life &rarr;</h3>
            <p>Learn about my hobbies, interests and current pursuits</p>
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
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
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
