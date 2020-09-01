import React from "react";
import ProfilsContact from "./ProfilContact";
import Intro from "./Intro";
import "./IntroComp.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function Home() {
  return (
    <>
      <Intro />
      <ProfilsContact />
    </>
  );
}
