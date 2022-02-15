import React from "react";
import Header from "../components/Header/Header";
import {
  resumeContainer,
  resumeTitle,
  resumePic,
  resumeOverlay,
} from "./resume.module.css";
import { StaticImage } from "gatsby-plugin-image";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";

function resume() {
  return (
    <div className={resumeOverlay} id="outer-container">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />

      <div id="page-wrap">
        <Header />
        <div className={resumeContainer}>
          <span className={resumeTitle}>Resume.</span>
          <p className="subtitle">
            Reach out to me via my <strong>contact page</strong>,{" "}
            <strong>view</strong> or <strong>download</strong> the resume
          </p>
          <div className={resumePic}>
            <StaticImage layout="fixed" src="../images/resume.jpg" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default resume;
