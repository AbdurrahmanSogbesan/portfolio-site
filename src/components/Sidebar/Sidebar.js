import React from "react";
import { elastic as Menu } from "react-burger-menu";
import "./Sidebar.css";
import { Link } from "gatsby";

function Sidebar() {
  return (
    <Menu right >
      <Link className="menu-item" to="/works">
        <span>Work</span>
      </Link>
      <Link className="menu-item" to="/about">
        <span>About</span>
      </Link>
      <Link className="menu-item" to="/resume">
        <span>Resume</span>
      </Link>
    </Menu>
  );
}

export default Sidebar;
