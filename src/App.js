import React from "react";
import "./App.css";
import "./css/mediaquery.css";
import { BrowserRouter as Router } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import "react-tiger-transition/styles/main.min.css";
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

// components
import Home from "./pages/home";
import WebsiteDevelopment from "./pages/website-development";
import UiUxDesign from "./pages/ui-ux-design";
import Branding from "./pages/branding-and-print-design";
import Services from "./pages/services";
import OurPortfolio from "./pages/ourPortfolio";
import OurWordpressPortfolio from "./pages/ourWordpressPortfolio";

// inject styles
scale({
  name: "scale",
  scale: 1.2,
  exit: {
    delay: 100,
  },
});
glide({
  name: "glide-left",
  direction: "left",
  opacity: 0.3,
});
glide({
  name: "glide-right",
  direction: "right",
  opacity: 0.3,
});
glideIn({
  name: "glideIn-left",
  direction: "left",
});
glideIn({
  name: "glideIn-top",
  direction: "top",
});
glideOut({
  name: "glideOut-bottom",
  direction: "bottom",
});
glideOut({
  name: "glideOut-right",
  direction: "right",
});
flip({
  name: "flip-right",
  direction: "right",
  duration: 200,
});
flip({
  name: "flip-left",
  direction: "left",
  duration: 200,
});

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

document.getElementById("root").style.height = "100vh";
document.getElementById("root").style.backgroundColor = "#fff";

const App = () => {
  const classes = useStyles();

  const hideInsteadOfUnmount = {
    mountOnEnter: true,
    unmountOnExit: true,
    onExited: (node) => node.classList.add(classes.hide),
    onEnter: (node) => node.classList.remove(classes.hide),
  };

  return (
    <>
      <Router>
        <Navigation>
          <Route exact path="/" transitionProps={{ ...hideInsteadOfUnmount }}>
            <Home />
          </Route>
          <Route exact path="/website-design-and-development">
            <WebsiteDevelopment />
          </Route>
          <Route exact path="/ui-ux-design">
            <UiUxDesign />
          </Route>
          <Route exact path="/branding-and-print-design">
            <Branding />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/ourportfolio">
            <OurPortfolio />
          </Route>
          <Route exact path="/ourWordpressPortfolio">
            <OurWordpressPortfolio />
          </Route>
        </Navigation>
      </Router>
    </>
  );
};

export default App;
