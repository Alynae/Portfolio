import React from "react";
import banner1 from "../../img/banner1.jpg";
import banner2 from "../../img/banner2.jpg";
import banner3 from "../../img/banner3.jpg";
import { Carousel } from "react-responsive-carousel";

import "./IntroComp.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function Intro() {
  return (
    <section>
      <Carousel
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        dynamicHeight={true}
        autoPlay={true}
        thumbWidth={0}
        infiniteLoop={true}
        interval={2500}
        swipeable={true}
        
      >
        <div>
          <img src={banner1} alt="banner1" className="bannerSize"/>
        </div>
        <div>
          <img src={banner2} alt="banner2" className="bannerSize"/>
        </div>
        <div>
          <img src={banner3} alt="banner3" className="bannerSize"/>
        </div>    
      </Carousel>

      <div className="container" id="overlay" >
          <div className="row">
            <div className="col-md-12">
              <div className="hello ">
                <h1>Bonjour, je suis Jérémy Le bricquer</h1>
                <h3>
                  <span
                    style={{ textShadow: "black 0px 0px 0px", opacity: "1" }}
                  >
                    Dev junior - Front &amp; Back{" "}
                  </span>
                </h3>
              </div>

              <a href="/resume">
                <div className="mouse-icon">
                  <div className="wheel"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
    </section>
  );
}
