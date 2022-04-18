import React, { useState, useEffect } from "react";
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

import Banners from "../components/banners";
import WhatWeDo from "../components/whatwedo";
import Featuredwork from "../components/featuredwork";
import Ourclients from "../components/ourclients";

const useStyles = makeStyles((theme) => ({
  screen: {
    backgroundColor: "white",
    overflowX: "hidden",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Screen className={classes.screen}>
      <Banners />
      <WhatWeDo title="what we do"/>
      <Featuredwork />
      <Ourclients />
    </Screen>
  );
};

export default Home;
