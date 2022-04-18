import React, { useState, useEffect } from "react";
import MetaData from "../components/MetaData";
import "../css/websiteDevelopment.css";
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
import Close from "../svgs/close.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { IconButton } from "@material-ui/core";
import WebsiteDevelop from "../components/websitedevelop";

const useStyles = makeStyles((theme) => ({
  screen: {
    backgroundColor: "#1fae55",
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

const customRenderThumb = (children) =>
  children.map((item) => {
    return (
      <>
        <div className="w_icon" data-tooltip={item.props.c_title}>
          <img src={item.props.c_img} />
        </div>
      </>
    );
  });

const WebsiteDevelopment = () => {
  const classes = useStyles();
  return (
    <>
      <Screen className={classes.screen}>
        <MetaData title="creativebond - websitedevelopment" />
        <Carousel
          // autoPlay={true}
          useKeyboardArrows={true}
          swipeable={true}
          emulateTouch={true}
          autoFocus={true}
          showArrows={false}
          showThumbs={true}
          showStatus={false}
          showIndicators={false}
          speed={2000}
          infiniteLoop={true}
          stopOnHover={true}
          renderThumbs={customRenderThumb}
        >
          <WebsiteDevelop
            link="/service/wordpress-design-and-development"
            c_img="/assets/wordpress.png"
            c_title="Wordpress Design & Development"
            c_para=" Wordpress Design & Development Responsive web design is becomi
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod,
        beatae. Magni laboriosam repellat tempora, maiores eveniet fugiat.
        maiores eveniet fugiat."
            c_view_more_btn="Wordpress Portfolio"
            c_more_btn="I want a cool wordpress website"
            className="c1"
          />
          <WebsiteDevelop
            link="/service/wed-design"
            c_img="/assets/web-design.png"
            c_title="Web Design"
            c_para="Print design is a graphic design, creative process.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod,
        beatae. Magni laboriosam repellat tempora, maiores eveniet fugiat.
        maiores eveniet fugiat."
            c_view_more_btn="Web Design portfolio"
            c_more_btn="I want a Web Design"
          />
          <WebsiteDevelop
            link="/service/web-development"
            c_img="/assets/development.png"
            c_title="Web Development"
            c_para="A logo is not your brand, nor is it your ident.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod,
        beatae. Magni laboriosam repellat tempora, maiores eveniet fugiat.
        maiores eveniet fugiat."
            c_view_more_btn="Web Development portfolio"
            c_more_btn="I want a Website"
          />
          <WebsiteDevelop
            link="/service/responsive-design-and-development"
            c_img="/assets/laptop-mob.png"
            c_title="Responsive Design & Development"
            c_para="Responsive web design is becom.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod,
        beatae. Magni laboriosam repellat tempora, maiores eveniet fugiat.
        maiores eveniet fugiat."
            c_view_more_btn="Responsive Design portfolio"
            c_more_btn="I want a Responsive website"
          />
          <WebsiteDevelop
            link="/service/e-commerce-design-and-development"
            c_img="/assets/cart.png"
            c_title="Ecommerce Development"
            c_para="Responsive web design is becom.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod,
        beatae. Magni laboriosam repellat tempora, maiores eveniet fugiat.
        maiores eveniet fugiat."
            c_view_more_btn="Ecommerce portfolio"
            c_more_btn="I want a ecommerce website"
          />
          <WebsiteDevelop
            link="/service/psd-to-html"
            c_img="/assets/psdtohtml.png"
            c_title="Psd To Html"
            c_para="Responsive web design is becom.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod,
        beatae. Magni laboriosam repellat tempora, maiores eveniet fugiat.
        maiores eveniet fugiat."
            c_view_more_btn="Psd To Html portfolio"
            c_more_btn="I want a psd to html"
          />
          <WebsiteDevelop
            link="/service/landing-page-design"
            c_img="/assets/landingpage.png"
            c_title="Landing Pages Design"
            c_para="Responsive web design is becom.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod,
        beatae. Magni laboriosam repellat tempora, maiores eveniet fugiat.
        maiores eveniet fugiat."
            c_view_more_btn="Landing Pages portfolio"
            c_more_btn="I want a landing pages"
          />
          <WebsiteDevelop
            link="/service/custom-website-design-and-development"
            c_img="/assets/custom.png"
            c_title="Custom Website Development"
            c_para="Responsive web design is becom.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod,
        beatae. Magni laboriosam repellat tempora, maiores eveniet fugiat.
        maiores eveniet fugiat."
            c_view_more_btn="Website portfolio"
            c_more_btn="I want a website"
          />
        </Carousel>
      </Screen>
      <div className="menu_btn">
        <IconButton>
          <i className="fa-solid fa-bars bar"></i>
        </IconButton>
      </div>
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

export default WebsiteDevelopment;
