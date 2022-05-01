import React, { useState, useEffect } from "react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import {
  worksContainer,
  titleName,
  projectContent,
  filterSection,
  projectSection,
  worksOverlay,
  skeletonSizing,
} from "./works.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProjectFilter from "../components/ProjectFilter/ProjectFilter";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Sidebar from "../components/Sidebar/Sidebar";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Helmet } from "react-helmet";

function Works() {
  const [projectCards, setProjectCards] = useState(null);

  const [filters, setFilters] = useState([
    "All",
    "E-Commerce",
    "SaaS",
    "Healthcare",
  ]);

  const [selectedFilter, setSelectedFilter] = useState("All");

  const fetchProjectCards = async () => {
    const q = query(collection(db, "projectCards"), orderBy("title", "asc"));

    const querySnapshot = await getDocs(q);
    const newProjectCard = [];
    querySnapshot.forEach((doc) => {
      newProjectCard.push({
        id: doc.id,
        data: doc.data(),
      });
    });

    setProjectCards(newProjectCard);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchProjectCards();
    }, 2000);
  }, []);

  const displayedCards =
    selectedFilter === "All"
      ? projectCards
      : projectCards.filter((p) => p.data.filters.includes(selectedFilter));

  // const openModal = () => {
  //   return <ProjectModal />;
  // };
  return (
    <>
      <Helmet>
        <title>Habib Sogbesan's Portfolio Site</title>
      </Helmet>
      <div className={worksOverlay} id="outer-container">
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
        <div id="page-wrap">
          <Header />
          <div className={worksContainer}>
            <span className={titleName}>My Works</span>
            <div className={projectContent}>
              <div className={filterSection}>
                <ProjectFilter
                  filters={filters}
                  onClick={(filter) => setSelectedFilter(filter)}
                  selected={selectedFilter}
                />
              </div>

              <div className={projectSection}>
                {projectCards &&
                  displayedCards.map((projectCard) => (
                    <ProjectCard
                      // onClick={openModal}
                      link={projectCard.data.link}
                      id={projectCard.id}
                      key={projectCard.id}
                      title={projectCard.data.title}
                      description={projectCard.data.description}
                      labels={projectCard.data.labels}
                      text={projectCard.data.text}
                      image={projectCard.data.thumbnail}
                    />
                  ))}
                {!projectCards && (
                  <SkeletonTheme color="#202020" highlightColor="#fff">
                    <Skeleton
                      className={`d-flex flex-md-row flex-column my-3 ${skeletonSizing}`}
                    />
                    <Skeleton
                      className={`d-flex flex-md-row flex-column my-3 ${skeletonSizing}`}
                    />
                  </SkeletonTheme>
                )}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Works;
