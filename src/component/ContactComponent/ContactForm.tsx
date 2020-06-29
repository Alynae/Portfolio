import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import logger from "../../logger";
import toastr from "toastr";

/* export default function ContactForm() {

  (function () {
    emailjs.init("process.env.REACT_APP_EMAILJS_USERID");
  })();


  const template: any = process.env.REACT_APP_EMAILJS_TEMPLATEID;
  const userID = process.env.REACT_APP_EMAILJS_USERID;
  const service = "gmail";

  
  function sendEmail(e: any) {
    e.preventDefault();
   
    toastr.options = {
      positionClass: "toast-top-full-width",
      hideDuration: 300,
      timeOut: 60000,
    }
  
    emailjs.sendForm(service, template, e.target, userID).then(
      
      (result: any) => {
        toastr.success("Sucess");
        logger.info("Success!!", result.text);
      },
      (error: any) => {
        alert("error");
        toastr.error("Error");
        logger.error("Failed", error.text);
      }
    );
    toastr.clear();
 
  }

  return (
    <div className="col-md-6">
      <form className="contact-form" id="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <div className="form-group">
            <label className="sr-only">Nom</label>
            <input
              type="text"
              id="c_name"
              className="form-control"
              name="c_name"
              placeholder="Nom"
              required
            />
          </div>
          <div className="form-group">
            <label className="sr-only">Email</label>
            <input
              type="email"
              id="c_email"
              className="form-control"
              name="c_email"
              placeholder="E-mail"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              id="c_message"
              name="c_message"
              placeholder="Votre message"
            ></textarea>
          </div>
          <button className="btn btn-outline-dark" type="submit" value="Submit">
            <i className="fa fa-bullhorn icon-before" aria-hidden="true"></i> Envoyer
          </button>
      </form>
    </div>
  );
} */

 export default function ContactForm(props: any) {

  
   (function () {
    emailjs.init("process.env.REACT_APP_EMAILJS_USERID");
  })();

  const template:any = process.env.REACT_APP_EMAILJS_TEMPLATEID;
  const userID = process.env.REACT_APP_EMAILJS_USERID;
  const service = "gmail";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const resetForm = () => {
    setName("") ; 
    setEmail("") ;
    setMsg("")
  }

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log("Form",{name,email,msg});

    emailjs.sendForm(service,template, e.target,userID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    resetForm();
  };



  return (
    <div className="col-md-6">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="sr-only">Nom </label>
          <input
           className="form-control"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            placeholder="Nom"
            required
          />
        </div>

        <div className="form-group">
          <label className="sr-only">Nom </label>
          <input
           className="form-control"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="E-mail"
            required
          />
        </div>

        <div className="form-group">
          <label className="sr-only">Nom </label>
          <input
           className="form-control"
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            name="message"
            placeholder="Votre message"
          />
        </div>

        <button className="btn btn-outline-dark" type="submit" value="Submit">
            <i className="fa fa-bullhorn icon-before" aria-hidden="true"></i> Envoyer
          </button>
      </form>
    </div>
    
  );
} 
