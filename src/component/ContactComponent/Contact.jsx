import React from 'react'
import "./Contact.css"
import Footer from "../FooterComponent/Footer"


export default function Contact() {

    return (
        <>
            <section id="contact" className="section">
                <div className="container">

                    <div className="row">
                        <div className="col-md-12 headline">
                            <h2>Contactez moi</h2>
                            <p>Une question ? une remarque ? laissez moi un message !</p>
                        </div>

                        <div className="col-md-6">
                            <div className="contact">
                            <ul className="icon-list">
                                <li><i className="fa fa-fw fa-map-marker"></i>Lannion - Bretagne (France)</li>
                                <li><i className="fa fa-fw fa-phone"></i>06 13 26 05 66</li>
                                <li style={{ color: "black" }}>
                                    <i className="fa fa-fw fa-envelope-o"></i><a style={{ color: "black" }} href="mailto:jeremylebricquer@gmail.com">jeremylebricquer@gmail.com</a>
                                </li>
                            </ul>
                            </div>
                            <div className="social-icons">
                                <ul className="icon-list">
                                    <li>
                                        <a href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-l-aa1bbb195/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                            <span>Linkedin</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/Alynae" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-github"></i>
                                            <span> Github</span>

                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://gitlab.com/jeremylebricquer" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-gitlab"></i>
                                            <span> Gitlab</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <form id="contact-form" >
                                <div className="form-group">
                                    <label className="sr-only" >Nom</label>
                                    <input type="text" id="c_name" className="form-control" name="c_name" placeholder="Nom" />
                                </div>
                                <div className="form-group">
                                    <label className="sr-only" >Email</label>
                                    <input type="email" id="c_email" className="form-control" name="c_email" placeholder="E-mail" />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" id="c_message" name="c_message" rows="5" placeholder="Votre message"></textarea>
                                </div>
                                <button className="btn btn-outline-dark" type="submit" value="Submit">
                                    <i className="fa fa-bullhorn icon-before"></i> Envoyer
                            </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}