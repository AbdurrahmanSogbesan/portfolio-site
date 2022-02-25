import React from "react";
import "./ProjectCard.css";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import Label from "../Label/Label";

function ProjectCard({ title, description, labels, text, onClick, link }) {
  // const data = useStaticQuery(graphql`
  //   {
  //     fireimage {
  //       imgUrl
  //     }
  //   }
  // `);

  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "projectScreenshot.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 443) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  // const imageData = data.fireimage.imgUrl;
  const imageData = data.desktop.childImageSharp.fluid;

  return (
    <div className="projectCard__container">
      <BackgroundImage className="projectCard__background" fluid={imageData}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="projectCard">
            <div className="projectCard__overlay" onClick={onClick}></div>
            <div className="projectCard__content">
              <span className="projectCard__title">{title}</span>
              <span className="projectBaseText">{description}</span>
              <div className="labelRow">
                {labels.map((text) => (
                  <Label className="projectCard__label" text={text} />
                ))}
              </div>
            </div>
          </div>
        </a>
      </BackgroundImage>
      <span className="projectCard__name">{text}</span>
    </div>
  );
}

export default ProjectCard;
