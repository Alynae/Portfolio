import React from 'react'


export default function Contact() {

    return (
        <section id="contact" className="section">
            <div className="container">

                <div className="row">
                    <div className="col-md-12 headline">
                        <h2>Contactez moi</h2>
                        <p>Une question ? une remarque ? laissez moi un message !</p>
                    </div>
                    <div className="col-md-6 wow ">
                        <ul className="icon-list">
                            <li><i className="fa fa-fw fa-map-marker"></i>Lannion - Bretagne (France)</li>
                            <li><i className="fa fa-fw fa-phone"></i>06 13 26 05 66</li>
                            <li style={{ color: "white" }}>
                                <i className="fa fa-fw fa-envelope-o"></i><a style={{ color: "white" }} href="mailto:jeremylebricquer@gmail.com">jeremylebricquer@gmail.com</a>
                            </li>
                        </ul>
                        <ul className="icon-list">
                            <li>Linkedin</li>
                            <li>Gitlab</li>
                        </ul>
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
                                <textarea className="form-control" id="c_message" name="c_message" rows="7" placeholder="Votre message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-outline-danger">
                                <i className="fa fa-bullhorn icon-before"></i> Envoyer
                            </button>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    )
}