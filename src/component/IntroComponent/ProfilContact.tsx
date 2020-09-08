import React from 'react';
import {NavLink} from 'react-router-dom'


export default function ProfilsContact() {
    return (
        <section id="profile-contact">
            <div className="container">
                <div className="row " >
                    <div className="col-sm-6 " style={{"textAlignLast": "center"}}>
                    <NavLink className="not-active" to="/portfolio/contact">
                        <div className="profile-item"><i className="fa fa-envelope-o"></i>
                            <p className="link">
                                lebricquerjeremy@gmail.com
                            </p>
                        </div>
                        </NavLink>
                    </div>
                    <div className="col-sm-6 " style={{"textAlignLast": "center"}}>
                        <div className="profile-item">
                            <i className="fa fa-map-marker"></i>
                            <p className="link">Lannion , Bretagne , France</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}