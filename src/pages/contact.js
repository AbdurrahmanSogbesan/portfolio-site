import React from "react";
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
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

function contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(
      "Message Sent",
      { position: toast.POSITION.TOP_CENTER },
      { autoClose: 10000 }
    );
    document.getElementById("myForm").reset();
  };

  return (
    <div className={contactOverlay}>
      <Header />
      <div className={contactContainer}>
        <span className={contactTitle}>Contact.</span>
        <p className="subtitle">
          Get in touch or shoot an email directly on
          <strong> abdurrahman0803@gmail.com</strong>
        </p>
        <form
          id="myForm"
          onSubmit={handleSubmit}
          className={contactForm}
          action="submit"
        >
          <TextBox name="name" type="text" placeholder="Name" required="true" />
          <TextBox
            name="email"
            type="email"
            placeholder="Email"
            required="true"
          />
          <TextArea
            name="message"
            placeholder="Message"
            rows="5"
            required="true"
          />
          <Button className="contactButton" text="Send Message" />
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default contact;
