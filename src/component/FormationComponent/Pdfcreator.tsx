import React from "react";
import pdf from "../../pdf/LeBricquerJeremy.pdf";

export default function PdfCreator() {
  return (
      <div className="row d-flex justify-content-center" style={{padding:'2rem'}}>
        <a href={pdf} target="_blank" rel="noopener noreferrer">
          <button className="btn btn-outline-dark">
            <i className="fa fa-cloud-download icon-before"></i> Téléchargez Mon
            CV
          </button>
        </a>
      </div>
  );
}
