import React from "react";
import banner1 from "../../img/banner1.jpg";
import './IntroComp.css'

export default function Intro() {
  return (
    <section id="intro" className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="hello ">
              <h1>Bonjour, je suis Jérémy Le bricquer</h1>
              <h3>
                <span style={{ textShadow: "black 0px 0px 0px", opacity: "1" }}>
                  Dev junior - Front &amp;Back{" "}
                </span>
              </h3>
            </div>

            <a href="profile">
              <div className="mouse-icon">
                <div className="wheel"></div>
              </div>
            </a>

          </div>
        </div>
      </div>

      <div /* style={{ "left": "0px", "top": "0px", "overflow": "hidden", "margin": "0px", "padding": "0px", "zIndex": "-999998", "position": "absolute", "width": "1900px", "height": "768px" }} */
      >
        <img /* style={{ "position": "absolute", "margin": "0px", "padding": "0px", "border": "none", "maxHeight": "none", 'maxWidth': "none", 'zIndex': '-999999', 'width': '1900px', "height": "803.823px", "left": "0px", "top": "-17.9117px" }} */
          src={banner1}
          alt="banner"
          className="banner"
        />
      </div>
    </section>
  );
}
