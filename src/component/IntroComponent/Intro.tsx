import React from "react";
import banner1 from "../../img/banner1.jpg";
import banner2 from "../../img/banner2.jpg";
import banner3 from "../../img/banner3.jpg";
import { Carousel } from "react-responsive-carousel";
import Typer from "./Typer/Typer";
// @ts-ignore
import WaterWave from "react-water-wave";

import "./IntroComp.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Intro = () => {
  return (
    <section>
      <div className="opacity">
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
            <WaterWave
              imageUrl={banner1}
              alt="banner1"
              className="bannerSize"
              dropRadius="10"
              perturbance="0.03"
              resolution="1200"
            >
            </WaterWave>
          </div>

          <div>
            {" "}
            <WaterWave
              imageUrl={banner2}
              alt="banner2"
              className="bannerSize"
            ></WaterWave>
          </div>

          <div>
            {" "}
            <WaterWave
              imageUrl={banner3}
              alt="banner3"
              className="bannerSize"
            ></WaterWave>
          </div>
        </Carousel>
      </div>

      <div className="container" id="overlay">
        <div className="row">
          <div className="col-md-12">
            <div className="intro-content">
              <span style={{ textShadow: "black -3px 3px 4px" }}>
                <h1> Bonjour, je suis Jérémy Le bricquer</h1>
                <p className="typer">
                  <Typer
                    title={""}
                    dataText={[" Dev junior", " Frontend & Backend"]}
                  />
                </p>
              </span>
            </div>
            <a href="/resume" aria-label="resume">
              <div className="mouse-icon">
                <div className="wheel"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
