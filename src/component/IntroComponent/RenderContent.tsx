import React from "react";
import banner1 from "../../img/banner1.webp";
import banner2 from "../../img/banner2.webp";
import banner3 from "../../img/banner3.webp";
import { Carousel } from "react-responsive-carousel";

import {
  BrowserView,
  MobileView,
  CustomView,
  browserName,
  isFirefox,
  isMobile,
} from "react-device-detect";
// @ts-ignore
import WaterWave from "react-water-wave";

const renderContent = () => {
  if (isFirefox) {
    return (
      <CustomView condition={browserName === "Firefox"}>
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
            interval={10000}
            swipeable={true}
          >
            <div>
              <img src={banner1} alt="banner1" className="bannerSize" />
            </div>

            <div>
              <img src={banner2} alt="banner2" className="bannerSize" />
            </div>

            <div>
              <img src={banner3} alt="banner3" className="bannerSize" />
            </div>
          </Carousel>
        </div>
      </CustomView>
    );
  }

  if (isMobile) {
    return (
      <MobileView>
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
            interval={10000}
            swipeable={true}
          >
            <div>
              <img src={banner1} alt="banner1" className="bannerSize" />
            </div>

            <div>
              <img src={banner2} alt="banner2" className="bannerSize" />
            </div>

            <div>
              <img src={banner3} alt="banner3" className="bannerSize" />
            </div>
          </Carousel>
        </div>
      </MobileView>
    );
  } else {
    return (
      <BrowserView>
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
            interval={10000}
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
              ></WaterWave>
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
      </BrowserView>
    );
  }
};

export default renderContent;
