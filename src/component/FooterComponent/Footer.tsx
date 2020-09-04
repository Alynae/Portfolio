import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
              <div>
                 <p className="copy" style={{ textAlign: "center" }}> © 2020 Jérémy Le bricquer </p>
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
