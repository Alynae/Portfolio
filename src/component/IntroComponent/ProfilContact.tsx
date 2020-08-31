import React from 'react';
import "./IntroComp.css"


export default function ProfilsContact() {
    return (
        <section id="profile-contact">
            <div className="container">
                <div className="row " >
                    <div className="col-sm-6 " style={{"textAlignLast": "center"}}>
                        <div className="profile-item"><i className="fa fa-envelope-o"></i>
                            <p className="link">
                                <a className="not-active" href="mailto:jeremylebricquer@gmail.com">jeremylebricquer@gmail.com</a>
                            </p>
                        </div>
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