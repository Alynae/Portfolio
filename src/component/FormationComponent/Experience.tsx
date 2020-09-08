import React from "react";

export default function Experience() {

  return (
    <div className="row resume-items">
    <div className="col-md-3">
        <h3>Experiences</h3>
    </div>

    <div className="col-md-6 col-sm-8 resume-items">
        <h4> Stagiaire - Equipe de Développement Web</h4>
        <p> Mise en place d'une IHM. Environnement : Angular, Bootstrap, TypeScript, API RestFul, GitLab, Docker, Artifactory...</p>
        <hr className="d-none d-sm-block"></hr>
    </div>
    <div className="col-md-3 col-sm-4 resume-place ">
        <h4><i className="fa fa-suitcase"></i> Orange Labs – Lannion </h4>
        <i className="fa fa-calendar"></i> Novembre 2019 - Janvier 2020
       <hr className="d-block d-sm-none"></hr>
    </div>

    <div className="col-md-6 offset-md-3 col-sm-8 resume-items">
        <h4> Stagiaire - Equipe de Développement Web</h4>
        <p> Stage d'immersion métier - Découverte du développement</p>
        <hr className="d-none d-sm-block"></hr>
    </div>
    <div className="col-md-3 col-sm-4 resume-place">
        <h4><i className="fa fa-suitcase"></i> Orange Labs – Lannion</h4>
        <i className="fa fa-calendar"></i> Du 19 Novembre au 30 Novembre 2018
          <hr className="d-block d-sm-none"></hr>
    </div>

    <div className="col-md-6 offset-md-3 col-sm-8 resume-item ">
        <h4> Marin d’Etat</h4>
        <p> Ressource humaine , secrétariat , informatique </p>
        <hr className="d-none d-sm-block"></hr>
    </div>
    <div className="col-md-3 col-sm-4 resume-place">
        <h4><i className="fa fa-suitcase"></i> Marine Nationale  - Brest</h4>
        <i className="fa fa-calendar"></i> De Juin 2013 à Juin 2017
     <hr className="d-block d-sm-none"></hr>
    </div>

    <div className="col-md-6 offset-md-3 col-sm-8 resume-item ">
        <h4> Stage en comptabilité</h4>
        <p> Saisie factures , TVA </p>
        <hr className="d-none d-sm-block"></hr>
    </div>
    <div className="col-md-3 col-sm-4 resume-place">
        <h4><i className="fa fa-suitcase"></i> Cabinet Fidacem – Lannion</h4>
        <i className="fa fa-calendar"></i> Juillet 2010 -Juillet 2011
       <hr className="d-block d-sm-none"></hr>
    </div>
</div>
  );
}
