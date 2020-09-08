import React from "react";
import Typer from "./Typer/Typer";
import { Link } from "react-router-dom";
import RenderContent from "./RenderContent"


const Intro = () => {
 

  return (
    <section>
      <RenderContent  />
      <div className="container" id="overlay">
        <div className="row">
          <div className="col-md-12">
            <div className="intro-content">
              <span style={{ textShadow: "black -3px 3px 4px" }}>
                <h1> Bonjour, je suis Jérémy Le bricquer</h1>
                <p className="typer">
                  <Typer
                    title={""}
                    dataText={[" Dev junior", " Frontend & Backend"]}
                  />
                </p>
              </span>
            </div>
            <Link to="/portfolio/resume" aria-label="resume">
              <div className="mouse-icon">
                <div className="wheel"></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
