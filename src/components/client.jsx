import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Navigation,
  Route,
  Screen,
  Link,
  scale,
  glideIn,
  glideOut,
  drop,
  flip,
  glide,
} from "react-tiger-transition";

const useStyles = makeStyles((theme) => ({
  screen: {
    backgroundColor: "white",
  },
}));

const Client = () => {
  const classes = useStyles();
  return (
    <>
      <div className="client-boxes">
        <div className="client-content">
          <p>
            Sometimes you might want to have icons for certain buttons to
            enhance the UX of the application as we recognize logos more easily
            than plain text. Sometimes you might want to have icons for certain
            buttons to enhance the UX of the application as we recognize logos
            more easily than plain text.
          </p>
          <div className="qoutes_img">
            <img src="/assets/quote.png" className="qoute_img" />
          </div>
        </div>
        <div className="client-chat">
          <div className="client-img">
            <img src="/assets/f-client.jpg" />
            <h1>
              Tina Schomburg | Meducated<p>Vancouver, Canada</p>
            </h1>
          </div>
        </div>
      </div>
      <div className="client-boxes">
        <div className="client-content blue">
          <p>
            Sometimes you might want to have icons for certain buttons to
            enhance the UX of the application as we recognize logos more easily
            than plain text. Sometimes you might want to have icons for certain
            buttons to enhance the UX of the application as we recognize logos
            more easily than plain text.
          </p>
          <div className="qoutes_img blue">
            <img src="/assets/quote.png" className="qoute_img" />
          </div>
        </div>
        <div className="client-chat">
          <div className="client-img">
            <img src="/assets/t-client.jpg" />
            <h1>
              Nick Glanville | AMUR<p>Dallas, USA</p>
            </h1>
          </div>
        </div>
      </div>
      <div className="client-boxes">
        <div className="client-content red">
          <p>
            Sometimes you might want to have icons for certain buttons to
            enhance the UX of the application as we recognize logos more easily
            than plain text. Sometimes you might want to have icons for certain
            buttons to enhance the UX of the application as we recognize logos
            more easily than plain text.
          </p>
          <div className="qoutes_img red">
            <img src="/assets/quote.png" className="qoute_img" />
          </div>
        </div>
        <div className="client-chat">
          <div className="client-img">
            <img src="/assets/s-client.jpg" />
            <h1>
              Josh Groban | Techzilla<p>Berlin, Germany</p>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default Client;
