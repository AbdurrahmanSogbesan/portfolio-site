import React, { useState } from "react";
import "./Timeline.css";

function Timeline() {
  const [sections, setSections] = useState([
    {
      title: "",
      events: [
        {
          title: "Engineering",
          rightText: "View Github",
          description:
            "When it comes to business, first impressions matter, and good website design is the key to capitalizing on them. An excellent site is not judged solely on its looks, but on its functionality and usability as well. My experience as a programmer allows me to come up with intelligent solutions to technical challenges, while at the same time designing sleek and visually appealing websites. Aside from having extensive knowledge of recognized technical standards, I am conversant with modern building practices.",
        },
        {
          title: "Product",
          rightText: "View Product",
          description:
            "In spite of not being an atypical product manager, I have strong backgrounds in research, product design, and product coordination that can help the product grow from 0 to 1. As a first-rate analytical thinker, I am able to maintain the product's vision from start to finish, both technically and product-wise.",
        },
        {
          title: "Design",
          rightText: "View Dribbble",
          description:
            "Although I am not the typical designer, I do possess excellent visual abilities, and this makes me an excellent presenter, allowing me to successfully communicate design ideas to stakeholders and design teams. With my strong conceptualization ability, I am able to visualize and create beautiful works. Lastly, you can find me mostly tweaking stylesheets and creating fluid user experiences.",
        },
      ],
    },
    {
      title: "My Reads",
      events: [
        {
          title: "Human Centered Design 101.",
          subtitle: "Acumen",
          rightText: "2017 - 2018",
          description:
            "This is an intensive, hands-on learning experience that will challenge you to get out of your chair and out into the real world to talk to people and test your ideas. You’ll leave this experience equipped and energized to apply the human-centered design process to challenges across industries, sectors, and geographies to generate breakthrough ideas.",
        },
        {
          title: "Data Structure And Algorithm.",
          subtitle: "Udemy",
          rightText: "2019",
          description: `Many developers who are "self taught", feel that one of the main disadvantages they face compared to college educated graduates in computer science is the fact that they don't have knowledge about algorithms, data structures and the notorious Big-O Notation`,
        },
        {
          title: "Adaptive Leadership.",
          subtitle: "edX",
          rightText: "2019",
          description: `This introductory course helps you identify and make progress on a leadership challenge in your own life, team, or community. You’ll apply the tools and techniques of Adaptive Leadership, a practical framework developed at Harvard Kennedy School of Government for leading change, particularly during times of uncertainty or when there are no easy answers.`,
        },
        {
          title: "Learning to Learn [Efficient Learning]",
          subtitle: "udemy",
          rightText: "2020",
          description: `Improve memory & productivity using the skills of the world's top performers and learning strategies proven by research.`,
        },
        {
          title: "Learning Somethign Great 😉",
          subtitle: "",
          rightText: "Currently",
          description: `We continue learning everyday.`,
        },
      ],
    },
    {
      title: "My Playlist",
      events: [
        {
          title: "Codewonders.",
          subtitle: "Spotify",
          rightText: "View Playlist",
          description:
            "This is an intensive, energizing songs list that helps me through the day and inspires generate breakthrough ideas.",
        },
        {
          title: "Chill Lofi Study Beats",
          subtitle: "Spotify",
          rightText: "View Playlist",
          description:
            "The perfect study beats, twenty four seven. with over 178 SONGS",
        },
        {
          title: "Mellow Drive",
          subtitle: "Spotify",
          rightText: "View Playlist",
          description: "Easy listening for pleasant drive",
        },
        {
          title: "Rap UK",
          subtitle: "Spotify",
          rightText: "View Playlist",
          description: "One of the finest rap in UK. Cover: Aitch",
        },
        {
          title: "Mood Booster 🎅🏿",
          subtitle: "Spotify",
          rightText: "View Playlist",
          description: "Get happy with today's dose of feel-good songs!",
        },
      ],
    },
    {
      title: "My Photochromic Lens",
      events: [
        {
          title: "Adenekan's Collection.",
          subtitle: "©Adenekan",
          rightText: "Visit Page",
          description:
            "This is an intensive, curation of the photochromic lenses that standout and the ones that i personally love, NOTE this is just by preference actually.",
        },
      ],
    },
  ]);

  const renderEvents = (events) => {
    return events.map((event) => (
      <div className="card" style={{ background: "var(--timeline-card)" }}>
        <div className="info">
          <div className="title__row">
            <span className="timelineTitle">
              {event.title}
              {event.subtitle ? (
                <span className="subtitle">{event.subtitle}</span>
              ) : null}
            </span>
            <span className="title__link">{event.rightText}</span>
          </div>
          <span className="text">{event.description}</span>
        </div>
      </div>
    ));
  };

  return (
    <div className="timeline">
      <span className="aboutMe">About Me.</span>
      {sections.map(({ title, events }) => (
        <>
          <h3 className="bigTitle">{title}</h3>
          <div className="outer">{renderEvents(events)}</div>
        </>
      ))}
    </div>
  );
}

export default Timeline;
