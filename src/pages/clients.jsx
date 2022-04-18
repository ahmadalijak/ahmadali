import React from "react";
import "../css/clients.css";
import MetaData from "../components/MetaData";
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
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  screen: {
    backgroundColor: "#fff",
    overflowX: "hidden",
  },
}));

const AllClients = () => {
  const classes = useStyles();

  return (
    <>
      <MetaData title="creativebonds - clients" />
      <Screen className={classes.screen}>
        <div className="arrow_btns">
          <Link to="/" transition="flip-right">
            <i className="fa-solid fa-close"></i>
          </Link>
        </div>
        <div className="h3">our clients</div>
        <div className="client_page">
          {/* first client */}
          <div className="client-boxes">
            <div className="client-content">
              <p>
                Sometimes you might want to have icons for certain buttons to
                enhance the UX of the application as we recognize logos more
                easily than plain text. Sometimes you might want to have icons
                for certain buttons to enhance the UX of the application as we
                recognize logos more easily than plain text. Sometimes you
                might.
              </p>
              <div className="qoutes_imgs">
                <img src="/assets/quote.png" className="qoute_img" />
              </div>
            </div>
            <div className="client-chat">
              <div className="client-img">
                <img src="/assets/f-client.jpg" />
                <h2 className="external_styling_p">
                  Tina Schomburg | Meducated<p>Vancouver, Canada</p>
                </h2>
              </div>
            </div>
          </div>
          {/* second client */}
          <div className="client-boxes">
            <div className="client-content blue">
              <p>
                Sometimes you might want to have icons for certain buttons to
                enhance the UX of the application as we recognize logos more
                easily than plain text. For example, if you have a delete button
                you can label it with a dustbin icon. label it with a dustbin
                icon. label it with a dustbin icon.
                <br />
                <br />
                Quam excepturi obcaecati, voluptas quibusdam ipsum quaerat
                expedita recusandae dolore molestias dolorum ducimus sapiente
                facere ut nisi ad est vero! ad est vero! ad est vero! ad est
                vero!
              </p>
              <div className="qoutes_imgs blue">
                <img src="/assets/quote.png" className="qoute_img" />
              </div>
            </div>
            <div className="client-chat">
              <div className="client-img">
                <img src="/assets/t-client.jpg" />
                <h2>
                  Nick Glanville | AMUR<p>Dallas, USA</p>
                </h2>
              </div>
            </div>
          </div>
          {/* third client */}
          <div className="client-boxes">
            <div className="client-content red">
              <p>
                Sometimes you might want to have icons for certain buttons to
                enhance the UX of the application as we recognize logos more
                easily than plain text. For example, if you have a delete button
                you can label it with a dustbin icon. label it with a dustbin
                icon. label it with a dustbin icon. label it with a dustbin
                icon. label it with a dustbin icon.
              </p>
              <div className="qoutes_imgs red">
                <img src="/assets/quote.png" className="qoute_img" />
              </div>
            </div>
            <div className="client-chat">
              <div className="client-img">
                <img src="/assets/s-client.jpg" />
                <h2>
                  Josh Groban | Techzilla<p>Berlin, Germany</p>
                </h2>
              </div>
            </div>
          </div>
          {/* forth client */}
          <div className="client-boxes">
            <div className="client-content">
              <p>
                Sometimes you might want to have icons for certain buttons to
                enhance the UX of the application as we recognize logos more
                easily than plain text. Sometimes you might want to have icons
                for certain buttons to enhance the UX of the application as we
                recognize logos more easily than plain text. Sometimes you
                might.
              </p>
              <div className="qoutes_imgs">
                <img src="/assets/quote.png" className="qoute_img" />
              </div>
            </div>
            <div className="client-chat">
              <div className="client-img">
                <img src="/assets/f-client.jpg" />
                <h2 className="external_styling_p">
                  Tina Schomburg | Meducated<p>Vancouver, Canada</p>
                </h2>
              </div>
            </div>
          </div>

          {/* fifth client */}
          <div className="client-boxes">
            <div className="client-content blue">
              <p>
                Sometimes you might want to have icons for certain buttons to
                enhance the UX of the application as we recognize logos more
                easily than plain text. For example, if you have a delete button
                you can label it with a dustbin icon. label it with a dustbin
                icon. label it with a dustbin icon.
                <br />
                <br />
                Quam excepturi obcaecati, voluptas quibusdam ipsum quaerat
                expedita recusandae dolore molestias dolorum ducimus sapiente
                facere ut nisi ad est vero! ad est vero! ad est vero! ad est
                vero!
              </p>
              <div className="qoutes_imgs blue">
                <img src="/assets/quote.png" className="qoute_img" />
              </div>
            </div>
            <div className="client-chat">
              <div className="client-img">
                <img src="/assets/t-client.jpg" />
                <h2>
                  Nick Glanville | AMUR<p>Dallas, USA</p>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <Link to="/clients" className="more-clients" transition="flip-left">
          be our next satisfied client
        </Link>
      </Screen>
    </>
  );
};

export default AllClients;
