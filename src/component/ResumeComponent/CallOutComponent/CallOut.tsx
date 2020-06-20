import React from 'react'
import './CallOut.css'
import { Link } from 'react-router-dom'

export default function CallOut() {

    return (
        <section className="callout">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 hidden-xs">
                        <h3>En ce moment</h3>
                    </div>
                    <div className="col-md-9 headline nomargin ">
                        <h3>Je suis disponible pour travailler (CDI / Prestation).</h3>
                        <p>Quelques soit votre projet, n'hésitez pas à me contacter pour en parler ensemble.</p>
                        <Link to="contact">
                            <button type="button" className="btn btn-outline-dark" >
                                <i className="fa fa-paper-plane-o icon-before"></i>Contactez moi
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </section >
    )
}