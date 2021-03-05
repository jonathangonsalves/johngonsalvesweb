import Head from "next/head";
import ReactFullpage from "@fullpage/react-fullpage";
import { Navbar } from "../components/navbar/index";
import styles from "../styles/pages/home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />
      
      <ReactFullpage
        navigation
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={1000} /* Options here */
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div id={styles.section1} className="section">
                <p>Section 1wdee (welcome to fullpage.js)</p>
              </div>
              <div id={styles.section2} className="section">
                <p>Section 2</p>
              </div>
              <div id={styles.section3} className="section">
              
                <p>Section 3</p>
              </div>              
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}



// <button onClick={() => fullpageApi.moveSectionDown()}>
// Click me to move down
// </button>