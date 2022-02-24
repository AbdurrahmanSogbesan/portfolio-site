import React, { useState, useEffect } from "react";
import "./Timeline.css";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function Timeline() {
  const [sections, setSections] = useState(null);

  const fetchSections = async () => {
    const q = query(collection(db, "sections"), orderBy("events", "desc"));

    const querySnapshot = await getDocs(q);
    const newSections = [];
    querySnapshot.forEach((doc) => {
      newSections.push({
        id: doc.id,
        data: doc.data(),
      });
    });
    setSections(newSections);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchSections();
    }, 2000);
  }, []);

  console.log(sections);
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
      {sections &&
        sections.map((section) => (
          <div id={section.id} key={section.id}>
            <h3 className="bigTitle">{section.data.title}</h3>
            <div className="outer">{renderEvents(section.data.events)}</div>
          </div>
        ))}
      {!sections && (
        <SkeletonTheme color="#202020" highlightColor="#fff">
          <Skeleton
            className="d-flex flex-md-row flex-column my-3 skeleton-sizing"
          />
          <Skeleton
            className="d-flex flex-md-row flex-column my-3 skeleton-sizing"
          />
        </SkeletonTheme>
      )}
    </div>
  );
}

export default Timeline;
