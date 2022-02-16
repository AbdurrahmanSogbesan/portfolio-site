import React, { useState } from "react";
import Label from "../Label/Label";
import "./ProjectFilter.css";

function ProjectFilter({ filters }) {
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);
  return (
    <div>
      {filters.map((filter) => (
        <Label
          text={filter}
          onClick={() => setSelectedFilter(filter)}
          className={
            filter === selectedFilter ? "projectFilterClicked" : "projectFilter"
          }
        />
      ))}
    </div>
  );
}

export default ProjectFilter;
