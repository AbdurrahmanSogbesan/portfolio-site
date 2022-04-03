import React from "react";
import Header from "../components/Header/Header";
import {
  resumeContainer,
  resumeTitle,
  resumeOverlay,
} from "./resume.module.css";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import ResumePDF from "../resume/resume.pdf";

function resume() {
  return (
    <>
      <Helmet>
        <title>Habib Sogbesan's Portfolio Site</title>
      </Helmet>
      <div className={resumeOverlay} id="outer-container">
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />

        <div id="page-wrap">
          <Header />
          <div className={resumeContainer}>
            <span className={resumeTitle}>Resume.</span>
            <p className="subtitle" style={{ color: "var(--textNormal)" }}>
              Reach out to me via my{" "}
              <Link to="/contact">
                <strong>contact page</strong>
              </Link>{" "}
              or{" "}
              <a href={ResumePDF} target="_blank" rel="noopener noreferrer">
                <strong>view</strong>
              </a>{" "}
              the resume
            </p>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default resume;
