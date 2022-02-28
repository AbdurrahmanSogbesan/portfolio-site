import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Timeline from "../components/Timeline/Timeline";
import { aboutBody, aboutContainer } from "./about.module.css";
import Sidebar from "../components/Sidebar/Sidebar";
import { Helmet } from "react-helmet";

function about() {
  return (
    <>
      <Helmet>
        <title>Habib Sogbesan's Portfolio Site</title>
      </Helmet>
      <div className={aboutContainer} id="outer-container">
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
        <div id="page-wrap">
          <Header />
          <div className={aboutBody}>
            <Timeline />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default about;
