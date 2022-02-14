import * as React from "react";
import {
  header,
  headerItems,
  activeStyles,
  headerHamburger,
} from "./Header.module.css";
import Icon from "../Icon/Icon";
import Logo from "../Logo/Logo";
import { Link } from "gatsby";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

function Header() {
  return (
    <div>
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
          <Link
            className="d-md-flex d-none"
            to="/about"
            activeClassName={activeStyles}
          >
            <span>About</span>
          </Link>
          <Link
            className="d-md-flex d-none"
            to="/resume"
            activeClassName={activeStyles}
          >
            <span>Resume</span>
          </Link>
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              // <div className={header.toggleTheme}>
              <Icon width="30" height="30"
                icon={theme === "dark" ? "moon" : "sun"}
                onClick={() =>
                  theme === "dark" ? toggleTheme("light") : toggleTheme("dark")
                }
              />
              // </div>
            )}
          </ThemeToggler>
          <div className="d-md-none d-flex mx-3 flex-column">
            <div
              style={{ backgroundColor: "var(--burger-bg)" }}
              className={`${headerHamburger} d-md-none d-flex`}
            ></div>
            <div
              style={{ backgroundColor: "var(--burger-bg)" }}
              className={`${headerHamburger} d-md-none d-flex`}
            ></div>
            <div
              style={{ backgroundColor: "var(--burger-bg)" }}
              className={`${headerHamburger} d-md-none d-flex`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
