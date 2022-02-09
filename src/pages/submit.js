import React from "react";
import {
  thanks,
  submitPageContainer,
  submitOverlay,
} from "./submit.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function submit() {
  return (
    <div className={submitOverlay}>
      <Header />
      <div className={submitPageContainer}>
        <span className={thanks}>Thanks for reaching out!</span>
      </div>
      <Footer />
    </div>
  );
}

export default submit;
