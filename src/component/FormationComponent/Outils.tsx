import React from "react";
import html from "../../img/logo/html5.webp";
import css from "../../img/logo/css3.webp";
import php from "../../img/logo/php.webp";
import laravel from "../../img/logo/laravel.webp";
import symfony from "../../img/logo/symfony.webp";
import javascript from "../../img/logo/javascript.webp";
import angular from "../../img/logo/angular.webp";
import reactjs from "../../img/logo/reactjs.webp";
import bootstrap from "../../img/logo/bootstrap.webp";
import intelliJ from "../../img/logo/intellij.webp";
import vscode from "../../img/logo/vscode.webp";
import mysql from "../../img/logo/mysql.webp";
import git from "../../img/logo/git.webp";
import gitlab from "../../img/logo/gitlab.webp";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Outils.scss";

export default function Outils() {
  return (
    <section id="clients" className="callout" >
      <div className="container">
        <div className="col-md-3 hidden-xs" >
          <h3 style={{fontSize: "22px",fontFamily: "Montserrat,sans-serif",marginBottom: "15%"}}>Mes Outils</h3>
        </div>

        <div className="col-md-auto hidden-xs" >
          <div style={{paddingBottom: "30px",position: "relative",}}>
            <Carousel
              additionalTransfrom={0}
              arrows={false}
              autoPlay
              autoPlaySpeed={1000}
              centerMode={false}
              className=""
              containerClass="container-with-dots"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 3,
                  partialVisibilityGutter: 40,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 2,
                  partialVisibilityGutter: 30,
                },
              }}
              showDots={true}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              <div className="logoTitle" >
                <img src={html} alt="HTML 5" />
                <h4 >HTML 5</h4>
              </div>

              <div className="logoTitle" >
                <img src={css} alt="CSS 3" />
                <h4>CSS 3</h4>
              </div>

              <div className="logoTitle">
                <img src={javascript} alt="Javascript"  />
                <h4>Javascript</h4>
              </div>

              <div className="logoTitle">
                <img src={bootstrap} alt="Bootstrap"  />
                <h4>Bootstrap</h4>
              </div>

              <div className="logoTitle">
                <img src={php} alt="PHP Objet"  />
                <h4>PHP Objet</h4>
              </div>

              <div className="logoTitle">
                <img src={angular} alt="Angular"  />
                <h4 >Angular</h4>
              </div>

              <div className="logoTitle">
                <img src={reactjs} alt="React"  />
                <h4>React</h4>
              </div>

              <div className="logoTitle">
                <img src={laravel} alt="Laravel"  />
                <h4>Laravel</h4>
              </div>

              <div className="logoTitle">
                <img src={symfony} alt="Symfony"  />
                <h4>Symfony</h4>
              </div>

              <div className="logoTitle">
                <img src={mysql} alt="MySQL Workbench"  />
                <h4>MySQL Workbench</h4>
              </div>

              <div className="logoTitle">
                <img src={git} alt="Git"  />
                <h4>Git</h4>
              </div>

              <div className="logoTitle">
                <img src={gitlab} alt="Gitlab"  />
                <h4>Gitlab</h4>
              </div>

              <div className="logoTitle">
                <img src={intelliJ} alt="Editeur IntelliJ IDEA" />
                <h4>Editeur IntelliJ IDEA</h4>
              </div>

              <div className="logoTitle">
                <img src={vscode} alt="Editeur VScode"  />
                <h4>Editeur VScode</h4>
              </div>
            </Carousel>
    
          </div>
        </div>
      </div>
    </section>
  );
}
