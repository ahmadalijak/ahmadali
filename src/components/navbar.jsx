import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import "react-responsive-carousel/lib/styles/carousel.min.css";
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
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  screen: {
    backgroundColor: "white",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to="/" transition="flip-right">
            <img src="/assets/logo.png" />
          </Link>
        </div>
        <div className="site-menu">
          <i className="fa-solid fa-bars bars" onClick={showSidebar}></i>
          <nav className={sidebar ? "site-menu show" : "site-menu"}>
            <ul>
              <li>
                <Button>
                  <Link to="/" className="anchor" transition="flip-left">
                    Home
                  </Link>
                </Button>
              </li>
              <li>
                <Button>
                  <Link
                    to="/services"
                    className="anchor"
                    transition="flip-left"
                  >
                    Services
                  </Link>
                </Button>
              </li>
            </ul>
            <i className="fa-solid fa-xmark close" onClick={showSidebar}></i>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Navbar;
