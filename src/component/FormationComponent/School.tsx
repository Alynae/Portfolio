import React from "react";

export default function School() {
  return (
    <div className="row resume-items">
      <div className="col-md-3 ">
        <h3>Formation</h3>
      </div>
      <div className="col-md-6 col-sm-8 resume-items">
        <h4>Titre professionnel de niveau 5 (BTS/DUT)</h4>
        <p>Formation développeur web &amp; web mobile</p>
        <hr className="d-none d-sm-block"></hr>
      </div>
      <div className="col-md-3 col-sm-4 resume-place">
        <h4>
          {" "}
          <i className="fa fa-suitcase"></i> Callac Soft Collège - Callac
        </h4>
        <i className="fa fa-calendar"></i> Avril 2019 - Mars 2020
        <hr className="d-block d-sm-none"></hr>
      </div>
      <div className="col-md-6 offset-md-3 col-sm-8 resume-items">
        <h4>DCG</h4>
        <p>Diplôme comptabilité gestion (Non obtenu)</p>
        <hr className="d-none d-sm-block"></hr>
      </div>
      <div className="col-md-3 col-sm-4 resume-place ">
        <h4>
          <i className="fa fa-suitcase"></i> Pôle supérieur Saint-Brieuc{" "}
        </h4>
        <i className="fa fa-calendar"></i> Septembre 2009 à Juin 2012
        <hr className="d-block d-sm-none"></hr>
      </div>

      <div className="col-md-6 offset-md-3 col-sm-8 resume-items ">
        <h4>Baccalauréat générale</h4>
        <p>Economique et sociale spécialité économie</p>
        <hr className="d-none d-sm-block"></hr>
      </div>
      <div className="col-md-3 col-sm-4 resume-place">
        <h4>
          <i className="fa fa-suitcase"></i> Lycée Bossuet - Lannion{" "}
        </h4>
        <i className="fa fa-calendar"></i> Juin 2009
        <hr className="d-block d-sm-none"></hr>
      </div>
    </div>
  );
}
