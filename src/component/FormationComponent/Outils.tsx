import React from "react";
import Slider from "react-slick";
import html from "../../img/logo/html5.png"
import css from '../../img/logo/css3.png'
import php from '../../img/logo/php.png'
import laravel from '../../img/logo/laravel.png'
import symfony from '../../img/logo/symfony.png'
import javascript from '../../img/logo/javascript.png'
import angular from '../../img/logo/angular.png'
import reactjs from '../../img/logo/reactjs.png'
import bootstrap from '../../img/logo/bootstrap.png'
import intelliJ from '../../img/logo/intellij.png'
import vscode from '../../img/logo/vscode.png'
import mysql from '../../img/logo/mysql.png'
import git from '../../img/logo/git.png'
import gitlab from '../../img/logo/gitlab.png'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Outils.css"


export default function Outils() {

    var settings = {
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        autoplay: true,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
        autoplaySpeed: 3000,
        appendDots: (dots: React.ReactNode) => (
            <div
                style={{
                    backgroundColor: "",
                    borderRadius: "10px",
                    padding: "1px",
                    bottom: "-30%",
                }}

            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        <section id="clients" className="callout">
            <div className="container">

                    <div className="col-md-3 hidden-xs">
                        <h3 style={{"fontSize":"22px" ,"fontFamily":"Montserrat,sans-serif",'marginBottom':'15%'}}>Mes Outils</h3>
                    </div>

                    <div className="col-md-auto hidden-xs">

                        <Slider {...settings}>

                            <div>
                                <img src={html} alt="HTML 5" className="logoTitle"/>
                                <h4 className="logoTitle">HTML 5</h4>
                            </div>

                            <div>
                                <img src={css} alt="CSS 3" className="logoTitle"/>
                                <h4 >CSS 3</h4>
                            </div>

                            <div>
                                <img src={javascript} alt="Javascript" className="logoTitle"/>
                                <h4 >Javascript</h4>
                            </div>

                            <div>
                                <img src={bootstrap} alt="Bootstrap" className="logoTitle"/>
                                <h4 >Bootstrap</h4>
                            </div>

                            <div>
                                <img src={php} alt="PHP Objet" className="logoTitle"/>
                                <h4 >PHP Objet</h4>
                            </div>

                            <div>
                                <img src={angular} alt="Angular" className="logoTitle"/>
                                <h4 >Angular</h4>
                            </div>

                            <div>
                                <img src={reactjs} alt="React" className="logoTitle"/>
                                <h4 >React</h4>
                            </div>

                            <div >
                                <img src={laravel} alt="Laravel" className="logoTitle"/>
                                <h4 >Laravel</h4>
                            </div>

                            <div >
                                <img src={symfony} alt="Symfony" className="logoTitle"/>
                                <h4>Symfony</h4>
                            </div>

                            <div >
                                <img src={mysql} alt="MySQL Workbench" className="logoTitle"/>
                                <h4 >MySQL Workbench</h4>
                            </div>

                            <div >
                                <img src={git} alt="Git" className="logoTitle"/>
                                <h4 >Git</h4>
                            </div>

                            <div >
                                <img src={gitlab} alt="Gitlab" className="logoTitle"/>
                                <h4 >Gitlab</h4>
                            </div>

                            <div>
                                <img src={intelliJ} alt="Editeur IntelliJ IDEA" className="logoTitle"/>
                                <h4 >Editeur IntelliJ IDEA</h4>
                            </div>

                            <div >
                                <img src={vscode} alt="Editeur VScode" className="logoTitle"/>
                                <h4 >Editeur VScode</h4>
                            </div>


                        </Slider>
                    </div>
                </div>
          
        </section >
    )
}
