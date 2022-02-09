import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Timeline from "../components/Timeline/Timeline";
import { aboutBody, aboutContainer } from "./about.module.css";

function about() {
  return (
    <div className={aboutContainer}>
      <Header />
      <div className={aboutBody}>
        <Timeline />
      </div>
      <Footer />
    </div>
  );
}

export default about;
