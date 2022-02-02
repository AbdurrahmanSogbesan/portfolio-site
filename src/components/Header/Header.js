import * as React from "react";
import { header, headerItems } from "./Header.module.css";
import DarkToggle from "../DarkToggle/DarkToggle";
import Logo from "../Logo/Logo";

function Header() {
  return (
    <div className={header}>
        <Logo />
      <div className={headerItems}>
        <span>Work</span>
        <span>About</span>
        <span>Resume</span>
        <DarkToggle />
      </div>
    </div>
  );
}

export default Header;
