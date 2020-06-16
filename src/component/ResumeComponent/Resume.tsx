import React from "react";
import Profils from "./ProfilComponent/Profils";
import Services from "./Services";
import CallOut from "./CallOutComponent/CallOut";
/* import Mypdf from '../../pdf/LeBricquerJeremy.pdf'; */

export default function Resume() {
  return (
    <>
      <Profils />
      <Services />
      <CallOut />
    </>
  );
}
