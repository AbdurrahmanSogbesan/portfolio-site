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
import { toast, ToastContainer } from "react-toastify";

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
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "60px",
          className: "center",
          centerMode: true,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "60px",
          className: "center",
          centerMode: true,
        },
      },
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
  const [items, setItems] = useState([]);

  const mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/pramie-technologies-limited";

  const fetchArticles = async () => {
    await fetch(mediumURL)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
        throw resp;
      })
      .then((resp) => {
        console.log("resp.items", resp.items);
        setItems(resp.items);
      })
      .catch(() => {
        toast.error(
          "Could not fetch articles. Please try again",
          { position: toast.POSITION.TOP_CENTER },
          { autoClose: 10000 }
        );
      });
  };

  useEffect(() => {
    fetchArticles();
  }, []);

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
                  I am a Fullstack Software Engineer with over 4 years of
                  experience, and a proven track record in building web
                  applications, backend APIs and mobile applications. I am
                  comfortable working with a number of programming languages
                  which include JavaScript and Python; as well as within their
                  respective ecosystems (Typescript, React.js, Vue.js, Node.js,
                  Nest.js, Django, Flask, and more).
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
              <Link to="/works/">
                <span className={seeAll}>
                  See All <Icon icon="arrow" />
                </span>
              </Link>
            </div>

            <span className={carouselContainer}>
              <Slider {...settings}>
                {projectCards.map((projectCard) => (
                  <ProjectCard
                    id={projectCard.id}
                    key={projectCard.id}
                    link={projectCard.data.link}
                    title={projectCard.data.title}
                    description={projectCard.data.description}
                    labels={projectCard.data.labels}
                    text={projectCard.data.text}
                    image={projectCard.data.thumbnail}
                  />
                ))}
              </Slider>
            </span>
          </div>

          <div className={articlesSection}>
            <div className={articleTitle}>
              <span className={articleIntro}>ARTICLES</span>
              <a
                className={seeAll}
                href="https://medium.com/pramie-technologies-limited"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--textNormal)" }}
              >
                See All <Icon icon="arrow" />
              </a>
            </div>
            <div className={articleContent}>
              {items.map(({ title, pubDate, link, index }) => (
                <Article title={title} date={pubDate} link={link} key={index} />
              ))}
            </div>
          </div>

          <div
            className={contactOverlay}
            style={{ backgroundColor: "var(--contact-bg)" }}
          >
            <BackgroundImage className={contactBackground} fluid={imageData}>
              <div className={contactSection}>
                <span className={like}>Like what you see?</span>
                <span className={subText}>
                  You can reach me on multiple channels
                </span>
                <Link to="/contact/">
                  <Button className="button" text="Contact" />
                </Link>
              </div>
              <ToastContainer limit={1} />
            </BackgroundImage>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default IndexPage;
