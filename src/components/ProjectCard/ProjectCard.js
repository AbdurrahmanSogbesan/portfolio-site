import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import "./ProjectCard.css";

function ProjectCard({ text }) {
  return (
    <div className="projectCard">
      <StaticImage
        width={443}
        height={414}
        src="../../images/projectScreenshot.png"
        layout="fixed"
      />
      <span className="projectCard__name">{text}</span>
    </div>
  );
}

export default ProjectCard;
