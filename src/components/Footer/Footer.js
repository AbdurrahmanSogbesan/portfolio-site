import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import BackgroundImage from "gatsby-background-image";
import Icon from "../Icon/Icon";
import "./Footer.css";

function Footer() {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "bubble.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1440) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const imageData = data.desktop.childImageSharp.fluid;

  return (
    <div className="footerOverlay">
      <BackgroundImage className="footerBackground" fluid={imageData}>
        <div className="footer">
          <span>© 2021 Habib Sogbesan</span>
          <div className="footerLinks">
            <Icon className="footerIcon" icon="github" />
            <Icon className="footerIcon" icon="linkedin" />
            <Icon className="footerIcon" icon="twitter" />
          </div>
        </div>
      </BackgroundImage>
    </div>
  );
}

export default Footer;
