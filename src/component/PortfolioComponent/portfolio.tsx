import React from "react";
import data from "./data";
import "./portfolio.css";
import "../../img/logo/css3.png";
import Nav from "react-bootstrap/Nav";
import {NavLink} from 'react-router-dom'


export default function Portfolio() {
  
  console.log("data", data);
  return (
    <section id="portfolio" className="section">

      <div className="container">
        <div className="row">
          <div className="col-md-12 headline">
            <h2>Portfolio</h2>
            <p>Quelques Réalisations.</p>
          </div>
          {data.map((project: any) => (
            <div className="col-md-4 col-sm-6" key={project.name}>
              <div className="portfolio-item">
             
                <Nav.Link as={NavLink}  exact to={`/portfolio/${project.name}`} className="pop-up" title={project.name}>
                  <div className="portfolio-item-preview">
                    <img src={project.img} alt={project.img} />
                  </div>
                </Nav.Link>
                <div className="portfolio-item-description">
                  <a href={project.img} className="pop-up" title="">
                    <p>{project.name} </p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  
    </section>
  );
}
