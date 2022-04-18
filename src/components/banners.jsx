import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navber from "./navbar";
import { Carousel } from "react-responsive-carousel";
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
  slide,
} from "react-tiger-transition";

const useStyles = makeStyles((theme) => ({
  screen: {
    backgroundColor: "white",
  },
}));

const Banners = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const classes = useStyles();
  return (
    <>
      <div className="banner">
        <Navber />
        <div className="bubbles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Carousel
          // autoPlay={true}
          useKeyboardArrows={true}
          swipeable={true}
          stopOnHover={true}
          emulateTouch={true}
          autoFocus={true}
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          speed={500}
          infiniteLoop={true}
          showIndicators={false}
        >
          {/* first banner */}
          <div className="banner-boxes">
            <div className="banner-content">
              <div className="bannercontent">
                <h1 className="we">WE</h1>
                <div className="create-section">
                  <h1 className="create">CREATE</h1>
                  <h3 className="awesome">AWESOME SOLUTION</h3>
                  <Link
                    to="/services"
                    transition="glide-right"
                  className="banner_btn"
                  >
                    view our services
                  </Link>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="banner-image">
              <img src="/assets/banner1.png" className="banner-img1" />
            </div>
          </div>
          {/* second banner */}
          <div className="banner-boxes">
            <div className="banner-content">
              <div className="bannercontent">
                <h1 className="we">WE</h1>
                <div className="create-section">
                  <h1 className="create">DEVELOP</h1>
                  <h3 className="awesome">ENGAGING EXPERIENCE</h3>
                  <Link
                    to="/ourportfolio"
                    transition="slide-left"
                    className="banner_btn"
                  >
                    view our work
                  </Link>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="banner-image">
              <img src="/assets/banner2.png" />
            </div>
          </div>
          {/* third banner */}
          <div className="banner-boxes">
            <div className="banner-content">
              <div className="bannercontent">
                <h1 className="we">WE</h1>
                <div className="create-section">
                  <h1 className="create">BUILD</h1>
                  <h3 className="awesome"> LASTING BONDS</h3>
                  <Link
                    to="/clients"
                    transition="slide-left"
                    className="banner_btn"
                  >
                    satisfied client
                  </Link>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="banner-image">
              <img src="/assets/banner3.png" />
            </div>
          </div>
          {/* forth banner */}
          <div className="banner-boxes">
            <div className="banner-content">
              <div className="bannercontent">
                <h1 className="we">WE</h1>
                <div className="create-section">
                  <h1 className="create">DEVELOP</h1>
                  <h3 className="awesome">ENGAGING EXPERIENCES</h3>
                  <Link
                    to="/ourportfolio"
                    transition="slide-left"
                    className="banner_btn"
                  >
                    view our work
                  </Link>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="banner-image">
              <img src="/assets/gallery3.png" />
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};
export default Banners;
