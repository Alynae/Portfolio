import React from "react";
import School from "./School";
import Experience from "./Experience";
import Outils from "./Outils";
import PdfFile from "./Pdfcreator";

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
        <Experience />
        <School />
        <PdfFile />
      </div>
      <Outils />
    </section>
  );
}
