import React from "react";
import "./ProjectCard.css";
import Label from "../Label/Label";

function ProjectCard({
  title,
  description,
  labels,
  text,
  onClick,
  link,
  image,
}) {
  return (
    <div className="projectCard__container">
      <div
        className="projectCard__background"
        style={{
          backgroundImage: `url(${
            image ||
            "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png"
          })`,
        }}
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="projectCard">
            <div className="projectCard__overlay" onClick={onClick}></div>
            <div className="projectCard__content">
              <span className="projectCard__title">{title}</span>
              <span className="projectBaseText">{description}</span>
              <div className="labelRow">
                {labels?.map((text) => (
                  <Label className="projectCard__label" text={text} />
                ))}
              </div>
            </div>
          </div>
        </a>
      </div>
      <span className="projectCard__name">{text}</span>
    </div>
  );
}

export default ProjectCard;
