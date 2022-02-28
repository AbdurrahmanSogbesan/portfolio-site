import React from "react";
import Label from "../Label/Label";
import "./ProjectFilter.css";

function ProjectFilter({ filters, onClick, selected }) {
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
