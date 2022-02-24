import React from "react";
import "./ProjectModal.css";
import Icon from "../Icon/Icon";
import Label from "../Label/Label";
import { StaticImage } from "gatsby-plugin-image";

function ProjectModal(handleClose, show) {
  const labels = ["VueJS", "NODEJS", "EXPRESSJS", "MONGODB", "FIREBASE"];

  const showHideClassName = show
    ? "projectModal display-block"
    : "projectModal display-none";

  return (
    <div className={showHideClassName}>
      <div className="projectModal__header">
        <Icon height="48" width="48" className="iconSpacing" icon="github" />
        <Icon height="48" width="48" icon="link" />
        <div className="closeIcon">
          <Icon icon="close" onClick={handleClose} width="40" height="40" />
        </div>
      </div>
      <StaticImage layout="fixed" src="../../images/project.png" />
      <span className="projectModal__title">BLOCO</span>
      <div className="projectModal__labels">
        {labels.map((text) => (
          <Label className="projectLabel" text={text} />
        ))}
      </div>
      <span className="projectModal__description">
        Since beginning my journey as a software engineer nearly 4 years ago,
        I've done both physical and remote work for agencies, and collaborated
        with talented people to create seamless software products for both
        business and consumer use. I'm naturally curious, passionale about
        problem solving and perpetually working on improving my skills one line
        of code at a time.
      </span>
    </div>
  );
}

export default ProjectModal;
