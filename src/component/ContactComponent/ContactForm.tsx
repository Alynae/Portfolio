import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

export default function ContactForm(props: any) {
  
  (function () {
    emailjs.init("process.env.REACT_APP_EMAILJS_USERID");
  })();

  const template: string = (process.env.REACT_APP_EMAILJS_TEMPLATEID as string);
  const userID: string = (process.env.REACT_APP_EMAILJS_USERID as string);
  const service: string = "gmail";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setFeedback("");
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    emailjs.sendForm(service, template, e.target, userID).then(
      (result) => {
        const toastMsg = () => 
        <div style={{'textAlign':'center'}}>
            <i className="fa fa-paper-plane-o icon-before" aria-hidden="true" style={{'paddingRight':'2rem'}}></i>
            {"Let's go  !!!"}
        </div>;
        toast.success(toastMsg);
      },
      (error) => {
        toast.dark(error.text);
      }
    );
    resetForm();
  };

  return (
    <div className="col-md-6">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="sr-only" htmlFor="name">Nom</label>
          <input
            className="form-control"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            placeholder="Nom"
            required
          />
        </div>

        <div className="form-group">
          <label className="sr-only" htmlFor="email">email</label>
          <input
            className="form-control"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="E-mail"
            required
          />
        </div>

        <div className="form-group">
          <label className="sr-only" htmlFor="feedback">feedback</label>
          <textarea
            className="form-control"
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            name="feedback"
            placeholder="Votre message"
          ></textarea>
        </div>

        <button className="btn btn-outline-dark" type="submit" value="Submit">
          <i className="fa fa-bullhorn icon-before" aria-hidden="true"></i>
                      Envoyer
        </button>
      </form>
    </div>
  );
}
