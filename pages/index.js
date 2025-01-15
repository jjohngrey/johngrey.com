import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  function copyToClipboard() {
    navigator.clipboard.writeText("john1grey9@gmail.com");
    alert("Copied email");
  }

  return (
    <div className={styles.container}>
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
          <img src="/images/headshot.jpg" height={300} />
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
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Experiences &rarr;</h3>
            <p>Prev @ Government of Canada, Department of National Defense</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Projects &rarr;</h3>
            <p>Feat. Stock Market Simulation, Hackathon Projects and more!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h3>Blog &rarr;</h3>
            <p>Thoughts on career, life and everything in between</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Life &rarr;</h3>
            <p>
              Learn about my hobbies, interests and current pursuits
            </p>
          </a>
        </div>
      </main>

      <ul className={styles.contact}>
          <li>
            <a href="https://github.com/jjohngrey">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                  fill="currentColor"
                ></path>
              </svg>{" "}
              Github
            </a>
          </li>
          <li>
            <a href="www.linkedin.com/in/john-grey">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                  fill="currentColor"
                ></path>
              </svg>{" "}
              LinkedIn
            </a>
          </li>
          <li>
            <a onClick={copyToClipboard}>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                  fill="currentColor"
                ></path>
              </svg>{" "}
              Email
            </a>
          </li>
        </ul>

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
