import * as React from "react";
import "./Article.css";

function Article({ title, date, time }) {
  return (
    <div className="article">
      <div>
        <span className="title">{title}</span>
        <div className="details">
          <span>
            {date} - {time} read
          </span>
        </div>
      </div>
    </div>
  );
}

export default Article;
