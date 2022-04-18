import React from "react";
import "../css/what-we-do.css";
import Wave from "react-wavify";
import "../css/wave.css";
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

const WhatWeDo = (props) => {
  const classes = useStyles();

  return (
    <div className="what-we" id="what-we">
      <div className="container">
        <h1>{props.title}</h1>
        <div className="what-we-box">
          <div className="what-we-boxes">
            <Link to="/website-design-and-development" transition="slide-left">
              <div className="do-img">
                <img src="/assets/branding-design-service.png" />
              </div>
              <div className="do-content">
                <h2>Web Design and Development</h2>
                <p>
                  This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                  vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                  bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                  nibh.
                </p>
              </div>
            </Link>
          </div>

          <div className="what-we-boxes blue">
            <Link to="/ui-ux-design" transition="slide-left">
              <div className="do-content">
                <h2>UI & UX Design</h2>
                <p>
                  This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                  vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                  bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                  nibh.
                </p>
              </div>
              <div className="do-img">
                <img src="/assets/ui-ux-design-service.png" />
              </div>
            </Link>
          </div>

          <div className="what-we-boxes red">
            <Link to="/branding-and-print-design" transition="slide-left">
              <div className="do-img">
                <img src="/assets/web-design-service-1.png" />
              </div>
              <div className="do-content">
                <h2>Branding & Print Design</h2>
                <p>
                  This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                  vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                  bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                  nibh.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Wave
          fill="#a4e4e4"
          paused={false}
          options={{
            height: 100,
            amplitude: 20,
            speed: 0.2,
            points: 4,
          }}
        />
      </div>
    </div>
  );
};
export default WhatWeDo;
