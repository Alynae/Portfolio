import React from "react";
import data from "../data";

export default function ConvertisseurC() {
  return (
    <div className="section">
       <div className="container">
        <h1>Hello</h1>
        <section>
          <div>
            <img src={data[0].img} alt={data[0].img}/>
          </div>
        </section>
        <section></section>
      </div>
    </div>
  );
}
