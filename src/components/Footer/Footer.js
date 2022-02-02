import * as React from "react";
import Icon from "../Icon/Icon";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <span>© 2021 Habib Sogbesan</span>
      <div className="footerLinks">
        <Icon className="footerIcon" icon="github" />
        <Icon className="footerIcon" icon="linkedin" />
        <Icon className="footerIcon" icon="twitter" />
      </div>
    </div>
  );
}

export default Footer;
