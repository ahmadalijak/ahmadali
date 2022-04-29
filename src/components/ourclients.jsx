import React from "react";
import "../css/ourclients.css";

import Client from "./client";
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
import Twitter from "../svgs/twitter.svg";
import Pinterest from "../svgs/pinterest.svg";
import Linkedin from "../svgs/linkedin.svg";
import Behance from "../svgs/behance.svg";
import Facebook from "../svgs/facebook.svg";

const useStyles = makeStyles((theme) => ({
  screen: {
    backgroundColor: "white",
  },
}));

const Ourclients = () => {
  const classes = useStyles();

  return (
    <>
      <div className="our-client" id="our-client">
        <div className="container">
          <h2>our clients</h2>
          <div className="our-client" id="our-client">
            <div className="container">
              <div className="client-box">
                <Client />
              </div>
            </div>
          </div>
          <div className="fot-social lightSpeedIn animated">
            <Link to="" className="more-client" transition="flip-left">
              be our next satisfied client
            </Link>
            <ul>
              <li>
                <Link to="#">
                  <img
                    src={Facebook}
                    className="fot_icon"
                    alt="Creativebonds at Facebook"
                  />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img
                    src={Twitter}
                    className="fot_icon"
                    alt="Creativebonds at Twitter"
                  />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img
                    src={Pinterest}
                    className="fot_icon"
                    alt="Creativebonds at Pinterst"
                  />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img
                    src={Linkedin}
                    className="fot_icon"
                    alt="Creativebonds at Linkedin"
                  />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img
                    src={Behance}
                    className="fot_icon"
                    alt="Creativebonds at Behance"
                  />
                </Link>
              </li>
            </ul>
            <p>
              &copy; {new Date().getUTCFullYear()} Creative Bonds. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourclients;
