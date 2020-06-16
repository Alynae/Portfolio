import React from 'react';


export default function ProfilsContact() {
    return (
        <section id="profile-contact">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 " style={{"textAlignLast": "center"}}>
                        <div className="profile-item"><i className="fa fa-envelope-o"></i>
                            <h5>
                                <a href="mailto:jeremylebricquer@gmail.com">jeremylebricquer@gmail.com</a>
                            </h5>
                        </div>
                    </div>
                    <div className="col-sm-4 " style={{"textAlignLast": "center"}}>
                        <div className="profile-item"><i className="fa fa-phone"></i>
                            <h5>06 13 26 05 66</h5>
                        </div>
                    </div>
                    <div className="col-sm-4 " style={{"textAlignLast": "center"}}>
                        <div className="profile-item">
                            <i className="fa fa-map-marker"></i>
                            <h5>Lannion , Bretagne , France</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}