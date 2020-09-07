import React from "react";
import "../../src/css/404.scss";
import { Link } from "react-router-dom";

const NoMatchPage = () => {
  return (
    <section>
      <div className="opacity404">
        <div className="container" id="page404">
          <div className="home-content">
            <h1><span>404</span></h1>
            <h2>The page you are looking for doesn't exist.</h2>
            <Link to="/portfolio/about" className="btn-outline">go back</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default NoMatchPage;