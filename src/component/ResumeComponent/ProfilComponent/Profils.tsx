import React from 'react';
import profile from '../../../img/profile.jpg'


export default function Profils() {
    return (
        <section id="profile" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 headline " >
                        <h2>Jérémy Le bricquer</h2>
                        <p>Dev Web Junior | Front &amp; Back</p></div>
                    <div className="col-md-3 col-sm-6 hidden-xs " >
                        <img className="avatar" src={profile} alt="" />
                    </div>
                    <div className="col-md-3 col-sm-6 ">
                        <div className="profile-widget">
                            <h3>Compétences</h3>
                            <h5>HTML5 / CSS3 </h5>
                            <div className="skill-bar">
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-off"></div>
                                <div className="skill-rate-off"></div></div>
                            <h5>Symfony / Laravel</h5>
                            <div className="skill-bar">
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-off"></div>
                                <div className="skill-rate-off"></div>
                                <div className="skill-rate-off"></div>
                            </div>
                            <h5>Angular / React / Jquery / Javascript</h5>
                            <div className="skill-bar">
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-off"></div>
                                <div className="skill-rate-off"></div>
                            </div>
                            <h5>MySQL</h5>
                            <div className="skill-bar"><div className="skill-rate-on">
                            </div><div className="skill-rate-on">
                                </div><div className="skill-rate-on"></div>
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-off"></div>
                                <div className="skill-rate-off"></div>
                            </div><h5>Photoshop / Figma / Web Design</h5>
                            <div className="skill-bar">
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-off"></div>
                                <div className="skill-rate-off"></div>
                            </div>
                            <h5>Windows / Ubuntu </h5>
                            <div className="skill-bar">
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-off"></div>
                                <div className="skill-rate-off"></div>
                                <div className="skill-rate-off"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 line-height">
                        <h3>Présentation</h3>
                        <p>
                            Développeur Web <b> Junior </b> / Geek passionné des nouvelles technologies.
                            Suite à ma formation et mes stages, je suis à même de mener des projets Web complets que ce soit
                            <b> Front / Back </b> dans le cadre d'un développement en mode <b> Agile </b>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}