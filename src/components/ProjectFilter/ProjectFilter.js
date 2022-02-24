import React, { useState } from "react";
import Label from "../Label/Label";
import "./ProjectFilter.css";

function ProjectFilter({ filters, onClick, selected}) {
  // const [selectedFilter, setSelectedFilter] = useState(filters[0]);
  // const handleClick = (value) => {
  //   setSelectedFilter(value);
  //   filterCards(value);
  // };

  return (
    <div>
      {filters.map((filter) => (
        <Label
          text={filter}
          onClick={() => onClick(filter)}
          className={
            filter === selected ? "projectFilterClicked" : "projectFilter"
          }
        />
      ))}
    </div>
  );
}

export default ProjectFilter;
