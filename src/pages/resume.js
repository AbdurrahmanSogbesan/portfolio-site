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
            <span className={resumeTitle}>My Resume.</span>
            <p className="subtitle" style={{ color: "var(--textNormal)" }}>
              Click{" "}
              <a href={ResumePDF} target="_blank" rel="noopener noreferrer">
                <strong>here</strong>
              </a>{" "}
              to view my resume. If you would like to send me a message, click{" "}
              <Link to="/contact">
                <strong>here</strong>
              </Link>{" "}
              to go to the Contact page
            </p>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default resume;
