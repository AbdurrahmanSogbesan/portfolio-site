import React, { useState, useEffect } from "react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Header from "../components/Header/Header";
import Label from "../components/Label/Label";
import Icon from "../components/Icon/Icon";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Article from "../components/Article/Article";
import Button from "../components/Button/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PreviousArrow from "../components/PreviousArrow/PreviousArrow";
import NextArrow from "../components/NextArrow/NextArrow";
import Footer from "../components/Footer/Footer";
import {
  container,
  introductionSection,
  hello,
  name,
  lifeStory,
  background,
  projectSection,
  projectTitle,
  projectIntro,
  seeAll,
  articlesSection,
  articleIntro,
  articleTitle,
  articleContent,
  contactSection,
  like,
  subText,
  contactBackground,
  contactOverlay,
  carouselContainer,
} from "./index.module.css";
import BackgroundImage from "gatsby-background-image";
import { graphql, useStaticQuery, Link } from "gatsby";
import "./theme.css";
import Sidebar from "../components/Sidebar/Sidebar";
import "@popperjs/core/dist/umd/popper.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";

// import "bootstrap/dist/js/bootstrap.min.js";

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

  const settings = {
    slidesToShow: 3,
    infinite: true,
    dots: true,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    arrows: true,
    className: "slides",
    lazyLoad: true,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "60px",
          className: "center",
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "leaf.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 820) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const imageData = data.desktop.childImageSharp.fluid;

  //FIREBASE PROJECTCARDS CODE
  const [projectCards, setProjectCards] = useState([]);

  const [className, setClassName] = useState(null);

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
    setClassName(carouselContainer);
  };

  useEffect(() => {
    fetchProjectCards();
  }, []);

  return (
    <>
      <Helmet>
        <title>Habib Sogbesan's Portfolio Site</title>
      </Helmet>
      <div className={container} id="outer-container">
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
        <div id="page-wrap">
          <BackgroundImage className={background} fluid={imageData}>
            <div>
              <Header style={{ backgroundColor: "var(--bg)" }} />

              <div className={introductionSection}>
                <span className={hello}>NICE TO MEET YOU, I AM</span>
                <span className={name}>HABIB SOGBESAN</span>
                <span className={lifeStory}>
                  Since beginning my journey as a software engineer nearly 4
                  years ago, I've done both physical and remote work for
                  agencies, and collaborated with talented people to create
                  seamless software products for both business and consumer use.
                  I'm naturally curious, passionate about problem solving and
                  perpetually working on improving my skills one line of code at
                  a time.
                </span>
                <Label text="SOFTWARE DEVELOPER" className="titleLabel" />
              </div>
            </div>
          </BackgroundImage>

          <div
            className={projectSection}
            style={{ backgroundColor: "var(--projectbg)" }}
          >
            <div className={projectTitle}>
              <span className={projectIntro}>CHECK OUT MY PROJECTS</span>
              <Link to="/works">
                <span className={seeAll}>
                  See All <Icon icon="arrow" />
                </span>
              </Link>
            </div>

            <span className={className}>
              <Slider {...settings} style={{ maxWidth: "1419px" }}>
                {projectCards.map((projectCard) => (
                  <ProjectCard
                    id={projectCard.id}
                    key={projectCard.id}
                    link={projectCard.data.link}
                    title={projectCard.data.title}
                    description={projectCard.data.description}
                    labels={projectCard.data.labels}
                    text={projectCard.data.text}
                  />
                ))}
              </Slider>
            </span>
          </div>

          <div className={articlesSection}>
            <div className={articleTitle}>
              <span className={articleIntro}>ARTICLES</span>
              <span className={seeAll}>
                See All <Icon icon="arrow" />
              </span>
            </div>
            <div className={articleContent}>
              {articles.map(({ title, date, time }) => (
                <Article title={title} date={date} time={time} />
              ))}
            </div>
          </div>

          <div
            className={contactOverlay}
            style={{ backgroundColor: "var(--contact-bg)" }}
          >
            <BackgroundImage className={contactBackground} fluid={imageData}>
              <div className={contactSection}>
                <span className={like}>Like what you see</span>
                <span className={subText}>
                  Lorem ipsum dlor soli met islum doe net hit...
                </span>
                <Link to="/contact">
                  <Button className="button" text="Reach out" />
                </Link>
              </div>
            </BackgroundImage>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default IndexPage;
