import React from "react";
import "../../src/css/404.css";

export default function NoMatchPage() {
  return (
    <section>
      <div className="opacity404">
        <div className="container" id="page404">
          <div className="home-content">
            <h1><span>404</span></h1>
            <h2>The page you are looking for doesn't exist.</h2>
            <a href="/" className="btn-outline">go back</a>
          </div>
        </div>
      </div>
    </section>
  );
}
