import * as React from "react";
import {
  header,
  headerItems,
  headerHamburger,
  activeStyles,
} from "./Header.module.css";
import DarkToggle from "../DarkToggle/DarkToggle";
import Logo from "../Logo/Logo";
import { Link } from "gatsby";

function Header() {
  return (
    <div className={header}>
      <Link to="/">
        <Logo />
      </Link>
      <div className={headerItems}>
        <Link
          className="d-md-flex d-none"
          to="/works"
          activeClassName={activeStyles}
        >
          <span>Work</span>
        </Link>
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
