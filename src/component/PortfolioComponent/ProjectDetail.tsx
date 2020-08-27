import React from "react";
import data from "./data";
import { useParams } from "react-router-dom";
import "./project.css";
import work from "../../img/project/WorkBlur.jpg";

const ProjectDetail = () => {
  let { id } = useParams();
  const item = data[id];

  return (
    <div className="bodyWork">
      <div className="pimg1" style={{ backgroundImage: `url(${work})` }}>
        <div className="opac">
          <section className="art">
            <div className="container">
              <div className="row" style={{ padding: "2%" }}>
                <div
                  className="col-md-12  text-center "
                  style={{ marginBottom: "100px" }}
                >
                  <h2 className="titleItem">{item.name}</h2>
                </div>

                <div className="col-md-5 offset-md-1 col-sm-12 col-xs-12 description">
                  <p>{item.desc}</p>
                </div>

                <div className="col-md-4 offset-md-1 col-sm-12 col-xs-12 item">
                  <ul className="list">
                    <li>
                      <label className="itemLi">Langage:</label>
                      {item.language}
                    </li>
                    <li>
                      <label className="itemLi">Type:</label>
                      {item.type}
                    </li>
                    <li>
                      <label className="itemLi">Client:</label>
                      {item.client}
                    </li>
                    <li>
                      <label className="itemLi">Date:</label>
                      {item.date}
                    </li>
                    <li>
                      <label className="itemLi">Service:</label>
                      {item.service}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="callout imgPreview">
            {item.imgSub.photo.map((e: any, index: any) => {
              return (<div className="imgPreview" key={index}>
                <img className="preview" src={e} alt={e} />
              </div>);
            })}
          </section>
          <div className="back">
            <a href="/portfolio">
              <button
                className="btn btn-outline-light"
                style={{ fontSize: "1.15rem" }}
              >
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
                <span style={{ paddingLeft: "20px" }}>Back </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetail;
