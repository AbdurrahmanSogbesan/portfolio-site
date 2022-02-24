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
          <span>© 2022 Habib Sogbesan</span>
          <div className="footerLinks">
            <a href="https://github.com/hmoskva">
              <Icon className="footerIcon" icon="github" />
            </a>
            <a href="https://www.linkedin.com/in/habib-sogbesan-a6674512b/">
              <Icon className="footerIcon" icon="linkedin" />
            </a>
            <a href="https://twitter.com/HabibDee">
              <Icon className="footerIcon" icon="twitter" />
            </a>
          </div>
        </div>
      </BackgroundImage>
    </div>
  );
}

export default Footer;
