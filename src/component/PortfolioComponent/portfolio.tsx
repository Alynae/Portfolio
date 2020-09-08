import React from "react";
import "./portfolio.scss";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import data from './data';

const Portfolio =  ( props: { match: any; } ) => {
  const { match } = props;

   const linkList = data.map((project:any) => {
    return (
      <li key={project.id}>
        <article className="production__article">
          <header className="production__article__header">
            <div className="production__article__header__overlay">
              <Nav.Link
                as={NavLink}
                title={project.name}
                className="productions__link"
                to={`${match.url}/${project.id}`
                }
              >
                <div className="icon-link">
                  <i className="fa fa-link" aria-hidden="true"></i>
                </div>
              </Nav.Link>
            </div>
            <img
              src={project.img}
              alt={project.name}
              className="production__article__header__cover"
            />
          </header>
          <footer className="production__article__footer">
            
            <h3 className="production__article__footer__title">
              {project.name}
            </h3>
            <span className="production__article__footersubtitle">
              {project.type}
            </span>
          </footer>
        </article>
      </li>
    );
  });

  return (
    <section id="portfolio" className="section productions__page">
      <div className="container">
        <div className="col-md-12 headline">
          <h2>Portfolio</h2>
          <p>Quelques Réalisations.</p>
        </div>
        <ul className="productions__list">{linkList}</ul>
      </div>
    </section>
  );
};

export default Portfolio;
