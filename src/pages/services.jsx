import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../css/services.css";
import MetaData from "../components/MetaData";
import WhatWeDo from "../components/whatwedo";
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

import Navbar from "../components/navbar";

const useStyles = makeStyles((theme) => ({
  screen: {
    backgroundColor: "white",
  },
}));

const Services = () => {
  const classes = useStyles();

  return (
    <Screen className={classes.screen}>
      <MetaData title="creativebonds - services" />
      <Navbar />
      <div className="services_section">
        <WhatWeDo title="our services" />
      </div>
    </Screen>
  );
};

export default Services;
