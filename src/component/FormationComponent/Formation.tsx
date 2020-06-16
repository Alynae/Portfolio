import React from "react";
import School from "./School";
import Experience from "./Experience";
import Outils from "./Outils";
/* import Mypdf from "../../pdf/LeBricquerJeremy.pdf"; */

export default function Formation() {
  return (
    <section id="resume" className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 headline ">
            <h2>CV</h2>
            <p>Expériences et formation.</p>
          </div>
        </div>
        <School />
        <Experience />
      </div>
      <Outils />

      {/*      <div className="row d-flex justify-content-center">
        <a href={Mypdf} download="random.pdf"  target="_blank" >
          <button className="btn btn-outline-dark">
            <i className="fa fa-paper-plane-o icon-before"></i> Téléchargez Mon
            CV
          </button>
        </a>
      </div> */}
    </section>
  );
}
