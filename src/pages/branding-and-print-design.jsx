import React from "react";
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

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Close from "../svgs/close.svg";
import { IconButton } from "@material-ui/core";
import WebsiteDevelop from "../components/websitedevelop";

const useStyles = makeStyles((theme) => ({
  screen: {
    backgroundColor: "#f04f54",
    overflowY: "hidden",
  },
  btn: {
    background: "linear-gradient(45deg, #03a5db 30%, #03a5db 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    marginBottom: "10px",
  },
}));

const Branding = () => {
  const classes = useStyles();

  return (
    <>
      <Screen className={classes.screen}>
        <MetaData title="creativebonds - ui-ux-design" />
        <Carousel
          autoPlay={true}
          useKeyboardArrows={true}
          swipeable={true}
          emulateTouch={true}
          autoFocus={true}
          showArrows={false}
          showThumbs={true}
          showStatus={false}
          showIndicators={true}
          speed={2000}
          infiniteLoop={true}
          stopOnHover={true}
        >
          <WebsiteDevelop
            link="/service/logo-design"
            c_img="/assets/wordpress.png"
            c_title="Logo Design"
            c_para=" Print design is a graphic design, creat Print design is a
                graphic design, creat Print design is a graphic design, creat
                Print design is a graphic design, creat Print design is a
                graphic design, creat"
            c_view_more_btn="View our Work"
            c_more_btn="I want to print"
          />
          <WebsiteDevelop
            link="/service/print-design"
            c_img="/assets/print.png"
            c_title="Print Design"
            c_para="Print design is a graphic design, creat Print design is a
                graphic design, creat Print design is a graphic design, creat
                Print design is a graphic design, creat Print design is a
                graphic design, creat"
            c_view_more_btn="View our Work"
            c_more_btn="I want a logo"
          />
          <WebsiteDevelop
            link="/service/stationery-design"
            c_img="/assets/stationary.png"
            c_title="Stationery Design"
            c_para="Print design is a graphic design, creat Print design is a
                graphic design, creat Print design is a graphic design, creat
                Print design is a graphic design, creat Print design is a
                graphic design, creat"
            c_view_more_btn="View our Work"
            c_more_btn="I want a Stationery Design"
          />
        </Carousel>
      </Screen>
      <div className="close_btn">
        <Link to="/" transition="flip-right" className="slide-close-button">
          <IconButton>
            <img src={Close} alt="Creativebonds Home" />
          </IconButton>
        </Link>
      </div>
    </>
  );
};

export default Branding;
