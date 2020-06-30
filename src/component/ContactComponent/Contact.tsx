import React from "react";
import "./Contact.css";
import ContactForm from "./ContactForm";
import Footer from "../FooterComponent/Footer";

export default function Contact() {
  return (
    <>
      <section id="contact" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 headline">
              <h2>Contactez moi</h2>
              <p>Une question ? une remarque ? laissez moi un message !</p>
            </div>
            <div className="col-md-6">
              <div className="contact">
                <ul className="icon-list">
                  <li>
                    <i className="fa fa-fw fa-map-marker"></i>Lannion - Bretagne (France)
                  </li>
                  <li style={{ color: "black" }}>
                    <i className="fa fa-fw fa-envelope-o"></i>
                    <a style={{ color: "black" }}href="mailto:lebricquerjeremy@gmail.com">lebricquerjeremy@gmail.com</a>
                  </li>
                </ul>
              </div>
              <div className="social-icons">
                <ul className="icon-list">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-l-aa1bbb195/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-linkedin"></i>
                      <span>Linkedin</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Alynae"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-github"></i>
                      <span> Github</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://gitlab.com/jeremylebricquer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-gitlab"></i>
                      <span> Gitlab</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
