import React, { useState } from "react";
import data from "../data";
import { useParams } from "react-router-dom";
import "./project.scss";
import work from "../../../img/project/WorkBlur.webp";
import ModalImg from "../Modal/modal";

const ProjectDetail = (props: any) => {
  
  let { id } = useParams();
  const item = data[id];

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [state, setState] = useState({
    index: "",
  });

  const handleClick = (value: any) => {
    console.log(value);
    setState({
      index: value,
    });
    handleShow()
  }
  

  return (
    <div className="bodyWork">
      <ModalImg show={show} onHide={handleClose} item={item} {...state}/>

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
              return (
                <div className="imgPreview" key={index}>
                  <img
                    className="preview"
                    src={e}
                    alt={e}
                    onClick={() => handleClick(index)}
                  />
                </div>
              );
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
