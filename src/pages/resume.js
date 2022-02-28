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
            <p className="subtitle">
              Reach out to me via my{" "}
              <Link to="/contact">
                <strong>contact page</strong>
              </Link>{" "}
              or{" "}
              <a
                href="https://www.canva.com/design/DAE5Yc0Ghxs/q4zgW6OFpOn1zD0rTRBQ1A/view?utm_content=DAE5Yc0Ghxs&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                target="_blank"
                rel="noopener noreferrer"
              >
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
