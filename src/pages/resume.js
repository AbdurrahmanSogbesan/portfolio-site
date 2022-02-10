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

function resume() {
  return (
    <div className={resumeOverlay}>
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
  );
}

export default resume;
