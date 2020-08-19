import React from "react";
import data from "./data";
import { useParams } from "react-router-dom";
import "./project.css";

const ProjectDetail = () => {
  let { id } = useParams();
  const item = data[id];

  return (
    <div>
      <h3>{item.name}</h3>
      <h6>{item.type}</h6>
      <article>
        <p>{item.language}</p>
        <p>{item.desc}</p>
      </article>
      <div className="imgPreview">
        <img src={item.img} alt={item.img} />
      </div>
    </div>
  );
};
export default ProjectDetail;
