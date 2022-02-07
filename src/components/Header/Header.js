import * as React from "react";
import { header, headerItems, headerHamburger } from "./Header.module.css";
import DarkToggle from "../DarkToggle/DarkToggle";
import Logo from "../Logo/Logo";

function Header() {
  return (
    <div className={header}>
      <Logo />
      <div className={headerItems}>
        <span className="d-md-flex d-none">Work</span>
        <span className="d-md-flex d-none">About</span>
        <span className="d-md-flex d-none">Resume</span>
        <DarkToggle />
        <div className="d-md-none d-flex flex-column mx-3">
          <div className={`${headerHamburger} d-md-none d-flex`}></div>
          <div className={`${headerHamburger} d-md-none d-flex`}></div>
          <div className={`${headerHamburger} d-md-none d-flex`}></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
