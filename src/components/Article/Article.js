import * as React from "react";
import "./Article.css";

function Article({ title, date, time, link }) {
  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const convertedDate = new Date(date).toLocaleDateString("en-GB", options);

    return convertedDate;
  };
  return (
    <a
      href={link}
      className="article"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <span className="title">{title}</span>
        <div className="details">
          <span>{formatDate(date)}</span>
        </div>
      </div>
    </a>
  );
}

export default Article;
