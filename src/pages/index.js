import * as React from "react";
// import Article from "../components/Article/Article";
import Header from "../components/Header/Header";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import { container } from "./index.module.css";

function IndexPage() {
  const articles = [
    {
      title: "Creating a design system in Figma: a practical guide",
      date: "Mar 3",
      time: "11 min",
    },
    {
      title: "Creating a design system in Figma: a practical guide",
      date: "Mar 3",
      time: "11 min",
    },
    {
      title: "Creating a design system in Figma: a practical guide",
      date: "Mar 3",
      time: "11 min",
    },
  ];
  return (
    <div className={container}>
      <Header />
      {/* {articles.map(({ title, date, time }) => (
        <Article title={title} date={date} time={time} />
      ))} */}
    </div>
  );
}

export default IndexPage;
