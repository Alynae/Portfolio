import React from "react";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="row">
          <div
            className="col-md-12 headline wow bounceInDown animated"
            style={{ visibility: "visible", animationName: "bounceInDown" }}
          >
            <h3>Ce que je peux faire</h3>
            <p>Mes compétences</p>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div
                className="col-sm-4 wow bounceInLeft animated"
                style={{ visibility: "visible", animationName: "bounceInLeft" }}
              >
                <div className="service">
                  <div className="icon">
                    <i className="fa fa-magic"></i>
                  </div>
                  <h4>Applications Web</h4>
                  <div className="text">
                    <p>
                      Création d'applications métier, d'Intranet, de réseaux
                      sociaux,sites vitrines, de Web apps...
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-4 wow bounceInUp animated"
                style={{ visibility: "visible", animationName: "bounceInUp" }}
              >
                <div className="service">
                  <div className="icon">
                    <i className="fa fa-desktop"></i>
                  </div>
                  <h4>Responsive design</h4>
                  <div className="text">
                    <p>
                      Utilisation des technologies HTML5 / CSS3 pour réaliser
                      des designs adaptatifs. Utilisation du framework Bootstrap
                      pour faciliter la réalisation et augmenter la productivité
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-4 wow bounceInRight animated"
                style={{
                  visibility: "visible",
                  animationName: "bounceInRight",
                }}
              >
                <div className="service">
                  <div className="icon">
                    <i className="fa fa-cog"></i>
                  </div>
                  <h4>Architecture logicielle</h4>
                  <div className="text">
                    <p>
                      Design pattern MVC pour séparer les couches et éviter le
                      code "spaghetti". PHP orienté objet / MySQL / AJAX /
                      Jquery / Javascript / WebService RestFul JSON{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-sm-4 wow bounceInUp animated"
                data-wow-delay=".2s"
                style={{ visibility: "visible", animationName: "bounceInUp" }}
              >
                <div className="service">
                  <div className="icon">
                    <i className="fa fa-code"></i>
                  </div>
                  <h4>Code clair</h4>
                  <div className="text">
                    <p>
                      Et commenté pour faciliter sa reprise et sa
                      maintenabilité.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-4 wow bounceInUp animated"
                data-wow-delay=".4s"
                style={{ visibility: "visible", animationName: "bounceInUp" }}
              >
                <div className="service">
                  <div className="icon">
                    <i className="fa fa-signal"></i>
                  </div>
                  <h4>SEO - Optimisations Web</h4>
                  <div className="text">
                    <p>Applications des règles et bonnes pratiques SEO.</p>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-4 wow bounceInUp animated"
                data-wow-delay=".6s"
                style={{ visibility: "visible", animationName: "bounceInUp" }}
              >
                <div className="service">
                  <div className="icon">
                    <i className="fa fa-users"></i>
                  </div>
                  <h4>Travailler en équipe</h4>
                  <div className="text">
                    <p>
                      Savoir écouter, échanger et s'entraider pour progresser
                      ensemble (Git, GitLab,...).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
