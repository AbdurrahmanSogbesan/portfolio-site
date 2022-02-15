import React from "react";
import { useForm, ValidationError } from "@formspree/react";

import Header from "../components/Header/Header";
import TextBox from "../components/TextBox/TextBox";
import TextArea from "../components/TextArea/TextArea";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import {
  contactContainer,
  contactTitle,
  contactForm,
  contactOverlay,
} from "./contact.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../components/Sidebar/Sidebar";

toast.configure();

function Contact() {
  const [state, handleSubmit] = useForm("xknyrojz");

  if (state.succeeded) {
    toast.success(
      "Message Sent",
      { position: toast.POSITION.BOTTOM_RIGHT },
      { autoClose: 10000 }
    );
    toast.clearWaitingQueue();
    document.getElementById("myForm").reset();
  }

  return (
    <div className={contactOverlay} id="outer-container">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap">
        <Header />
        <div className={contactContainer}>
          <span style={{ color: "var(--textNormal)" }} className={contactTitle}>
            Contact.
          </span>
          <p style={{ color: "var(--textNormal)" }} className="subtitle">
            Get in touch or shoot an email directly on
            <strong> abdurrahman0803@gmail.com</strong>
          </p>
          <form
            id="myForm"
            onSubmit={handleSubmit}
            className={contactForm}
            action="submit"
          >
            <TextBox
              name="name"
              type="text"
              placeholder="Name"
              required="true"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <TextBox
              name="email"
              type="email"
              placeholder="Email"
              required="true"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <TextArea
              name="message"
              placeholder="Message"
              rows="5"
              required="true"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <Button
              disabled={state.submitting}
              className="contactButton"
              text="Send Message"
            />
          </form>
          <ToastContainer limit={1} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
