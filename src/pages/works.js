import React from "react";
import {
  worksContainer,
  titleName,
  projectContent,
  filterSection,
  projectSection,
  worksOverlay,
} from "./works.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProjectFilter from "../components/ProjectFilter/ProjectFilter";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Sidebar from "../components/Sidebar/Sidebar";

function works() {
  const projectCards = [
    {
      title: "Bloco",
      description: "An event planning website",
      labels: ["VueJS", "NodeJS", "ExpressJS", "MongoDB", "Firebase"],
      text: "Bloco",
    },
    {
      title: "Bloco",
      description: "An event planning website",
      labels: ["VueJS", "NodeJS", "ExpressJS", "MongoDB", "Firebase"],
      text: "Bloco",
    },
    {
      title: "Bloco",
      description: "An event planning website",
      labels: ["VueJS", "NodeJS", "ExpressJS", "MongoDB", "Firebase"],
      text: "Bloco",
    },
    {
      title: "Bloco",
      description: "An event planning website",
      labels: ["VueJS", "NodeJS", "ExpressJS", "MongoDB", "Firebase"],
      text: "Bloco",
    },
    {
      title: "Bloco",
      description: "An event planning website",
      labels: ["VueJS", "NodeJS", "ExpressJS", "MongoDB", "Firebase"],
      text: "Bloco",
    },
    {
      title: "Bloco",
      description: "An event planning website",
      labels: ["VueJS", "NodeJS", "ExpressJS", "MongoDB", "Firebase"],
      text: "Bloco",
    },
    {
      title: "Bloco",
      description: "An event planning website",
      labels: ["VueJS", "NodeJS", "ExpressJS", "MongoDB", "Firebase"],
      text: "Bloco",
    },
    {
      title: "Bloco",
      description: "An event planning website",
      labels: ["VueJS", "NodeJS", "ExpressJS", "MongoDB", "Firebase"],
      text: "Bloco",
    },
    {
      title: "Bloco",
      description: "An event planning website",
      labels: ["VueJS", "NodeJS", "ExpressJS", "MongoDB", "Firebase"],
      text: "Bloco",
    },
    {
      title: "Bloco",
      description: "An event planning website",
      labels: ["VueJS", "NodeJS", "ExpressJS", "MongoDB", "Firebase"],
      text: "Bloco",
    },
    {
      title: "Bloco",
      description: "An event planning website",
      labels: ["VueJS", "NodeJS", "ExpressJS", "MongoDB", "Firebase"],
      text: "Bloco",
    },
    {
      title: "Bloco",
      description: "An event planning website",
      labels: ["VueJS", "NodeJS", "ExpressJS", "MongoDB", "Firebase"],
      text: "Bloco",
    },
    {
      title: "Bloco",
      description: "An event planning website",
      labels: ["VueJS", "NodeJS", "ExpressJS", "MongoDB", "Firebase"],
      text: "Bloco",
    },
    {
      title: "Bloco",
      description: "An event planning website",
      labels: ["VueJS", "NodeJS", "ExpressJS", "MongoDB", "Firebase"],
      text: "Bloco",
    },
    {
      title: "Bloco",
      description: "An event planning website",
      labels: ["VueJS", "NodeJS", "ExpressJS", "MongoDB", "Firebase"],
      text: "Bloco",
    },
    {
      title: "Bloco",
      description: "An event planning website",
      labels: ["VueJS", "NodeJS", "ExpressJS", "MongoDB", "Firebase"],
      text: "Bloco",
    },
    {
      title: "Bloco",
      description: "An event planning website",
      labels: ["VueJS", "NodeJS", "ExpressJS", "MongoDB", "Firebase"],
      text: "Bloco",
    },
    {
      title: "Bloco",
      description: "An event planning website",
      labels: ["VueJS", "NodeJS", "ExpressJS", "MongoDB", "Firebase"],
      text: "Bloco",
    },
  ];
  return (
    <div className={worksOverlay} id="outer-container">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap">
        <Header />
        <div className={worksContainer}>
          <span className={titleName}>My Works</span>
          <div className={projectContent}>
            <div className={filterSection}>
              <ProjectFilter
                filters={[
                  "All",
                  "Projects",
                  "Dev Tools",
                  "Open  Source",
                  "Designs",
                ]}
              />
            </div>
            <div className={projectSection}>
              {projectCards.map(({ title, description, labels, text }) => (
                <ProjectCard
                  title={title}
                  description={description}
                  labels={labels}
                  text={text}
                />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default works;
