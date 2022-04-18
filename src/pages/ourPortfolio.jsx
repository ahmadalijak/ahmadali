import React from "react";
import "../css/clients.css";
import MetaData from "../components/MetaData";
import "../css/ourPortfolio.css";
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
import Work from "../components/work";

const useStyles = makeStyles((theme) => ({
  screen: {
    backgroundColor: "#fff",
  },
}));

const OurPortfolio = () => {
  const classes = useStyles();
  return (
    <>
      <MetaData title="creativebonds - ourportfolio" />
      <Screen className={classes.screen}>
        <div className="h1">our portfolio</div>
        <div className="feature_box">
          <Work />
        </div>
      </Screen>
    </>
  );
};

export default OurPortfolio;
