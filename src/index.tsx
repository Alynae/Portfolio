import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GoogleReCaptchaProvider,GoogleReCaptcha } from 'react-google-recaptcha-v3';
import logger from "./logger";

if (process.env.NODE_ENV !== "production") {
  localStorage.setItem("debug", "Logger:*");
}

const CaptchaKey = process.env.REACT_APP_RECAPTCHA_KEY;

ReactDOM.render(
  <React.StrictMode>
    <GoogleReCaptchaProvider
      reCaptchaKey={CaptchaKey}
      language="fr"
    >
       <GoogleReCaptcha onVerify={token => logger.info('token',token)} />
      <App />
    </GoogleReCaptchaProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
