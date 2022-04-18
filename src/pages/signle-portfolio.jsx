import React, { useState, useEffect } from "react";
import "../css/ui_ux_design.css";
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
import { IconButton } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { useAlert } from "react-alert";

const useStyles = makeStyles((theme) => ({
  screen: {
    backgroundColor: "#03a5db",
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

const Ui_ux_design = () => {
  const classes = useStyles();
  const alert = useAlert();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Screen className={classes.screen}>
        <MetaData title="creativebonds - ui-ux-design" />
        <div className="tops">
          <div className="left">
            <p>Portfolio</p>&nbsp;
            <h2>Wordpress Websites</h2>
          </div>
          <div className="mid">
            <div className="ui_c_btn" onClick={() => setOpen(true)}>
              I want a cool App
            </div>
          </div>
        </div>
        <Carousel
          autoPlay={true}
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          speed={500}
          infiniteLoop={true}
        >
          <div className="wordpressportfolio">
            <div className="w_main">
              <div className="internal_scrolling_w">
                <img src="/assets/portfolio.jpg" className="w__img" />
                <img src="/assets/portfolio.jpg" className="w__img" />
              </div>
              <div className="right_info">
                <h1>LiveResume </h1>
                <p>Wordpress website design and development </p>
                <p>
                  “Responsive web design is becoming more important is amount
                  Icons are also appropriate for toggle buttons that allow a
                  single choice to be selected or deselected, such as adding or
                  removing a star to an item such as adding or removing a star
                  to an item“.
                </p>
              </div>
            </div>
          </div>

          <div className="service-content">
            <div className="service_img_ui_ux">
              <img src="/assets/android.png" className="b_img" />
            </div>
            <div className="service-detail">
              <h2>Android & iOS App UI</h2>
              <p>
                Print design is a graphic design, creat Print design is a
                graphic design, creat Print design is a graphic design, creat
                Print design is a graphic design, creat Print design is a
                graphic design, creat
              </p>
              <br />
              <br />
              <div className="service_actions">
                <Link
                  to="/ourWordpressPortfolio"
                  transition="flip-left"
                  className="view_more_btn_ui_ux"
                >
                  View our Work
                </Link>
                <div className="c_more_btn_ui_ux" onClick={() => setOpen(true)}>
                  I want a logo
                </div>
              </div>
              <div className="c_icon">
                <Link to="/ourWordpressPortfolio" transition="flip-left">
                  <div
                    className="w_icon_ui_ux"
                    data-tooltip="Wordpress Development"
                  >
                    <img src="/assets/wordpress.png" className="w_img" />
                  </div>
                </Link>
                <Link to="/ourWordpressPortfolio" transition="flip-left">
                  <div className="w_icon_ui_ux2" data-tooltip="Web Design">
                    <img src="/assets/web-design.png" className="w_img" />
                  </div>
                </Link>
                <Link to="/ourWordpressPortfolio" transition="flip-left">
                  <div className="w_icon_ui_ux3" data-tooltip="Web Development">
                    <img src="/assets/development.png" className="w_img" />
                  </div>
                </Link>
                <Link to="/ourWordpressPortfolio" transition="flip-left">
                  <div
                    className="w_icon_ui_ux4"
                    data-tooltip="Responsive Design"
                  >
                    <img src="/assets/laptop-mob.png" className="w_img" />
                  </div>
                </Link>
                <Link to="/ourWordpressPortfolio" transition="flip-left">
                  <div
                    className="w_icon_ui_ux5"
                    data-tooltip="Ecommerce Development"
                  >
                    <img src="/assets/cart.png" className="w_img" />
                  </div>
                </Link>
                <Link to="/ourWordpressPortfolio" transition="flip-left">
                  <div className="w_icon_ui_ux6" data-tooltip="Psd To Html">
                    <img src="/assets/psdtohtml.png" className="w_img" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="service-content">
            <div className="service_img_ui_ux">
              <img src="/assets/webapp.png" className="b_img" />
            </div>
            <div className="service-detail">
              <h2>Web App Design</h2>
              <p>
                Print design is a graphic design, creat Print design is a
                graphic design, creat Print design is a graphic design, creat
                Print design is a graphic design, creat Print design is a
                graphic design, creat
              </p>
              <br />
              <br />
              <div className="service_actions">
                <Link
                  to="/ourWordpressPortfolio"
                  transition="flip-left"
                  className="view_more_btn_ui_ux"
                >
                  View our Work
                </Link>
                <div className="c_more_btn_ui_ux" onClick={() => setOpen(true)}>
                  I want a logo
                </div>
              </div>
              <div className="c_icon">
                <Link to="/ourWordpressPortfolio" transition="flip-left">
                  <div
                    className="w_icon_ui_ux"
                    data-tooltip="Wordpress Development"
                  >
                    <img src="/assets/wordpress.png" className="w_img" />
                  </div>
                </Link>
                <Link to="/ourWordpressPortfolio" transition="flip-left">
                  <div className="w_icon_ui_ux2" data-tooltip="Web Design">
                    <img src="/assets/web-design.png" className="w_img" />
                  </div>
                </Link>
                <Link to="/ourWordpressPortfolio" transition="flip-left">
                  <div className="w_icon_ui_ux3" data-tooltip="Web Development">
                    <img src="/assets/development.png" className="w_img" />
                  </div>
                </Link>
                <Link to="/ourWordpressPortfolio" transition="flip-left">
                  <div
                    className="w_icon_ui_ux4"
                    data-tooltip="Responsive Design"
                  >
                    <img src="/assets/laptop-mob.png" className="w_img" />
                  </div>
                </Link>
                <Link to="/ourWordpressPortfolio" transition="flip-left">
                  <div
                    className="w_icon_ui_ux5"
                    data-tooltip="Ecommerce Development"
                  >
                    <img src="/assets/cart.png" className="w_img" />
                  </div>
                </Link>
                <Link to="/ourWordpressPortfolio" transition="flip-left">
                  <div className="w_icon_ui_ux6" data-tooltip="Psd To Html">
                    <img src="/assets/psdtohtml.png" className="w_img" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="service-content">
            <div className="service_img_ui_ux">
              <img src="/assets/ui-ux-design-service.png" className="b_img" />
            </div>
            <div className="service-detail">
              <h2>User Experience Design</h2>
              <p>
                Print design is a graphic design, creat Print design is a
                graphic design, creat Print design is a graphic design, creat
                Print design is a graphic design, creat Print design is a
                graphic design, creat
              </p>
              <br />
              <br />
              <div className="service_actions">
                <Link
                  to="/ourWordpressPortfolio"
                  transition="flip-left"
                  className="view_more_btn_ui_ux"
                >
                  View our Work
                </Link>
                <div className="c_more_btn_ui_ux" onClick={() => setOpen(true)}>
                  I want a logo
                </div>
              </div>
              <div className="c_icon">
                <Link to="/ourWordpressPortfolio" transition="flip-left">
                  <div
                    className="w_icon_ui_ux"
                    data-tooltip="Wordpress Development"
                  >
                    <img src="/assets/wordpress.png" className="w_img" />
                  </div>
                </Link>
                <Link to="/ourWordpressPortfolio" transition="flip-left">
                  <div className="w_icon_ui_ux2" data-tooltip="Web Design">
                    <img src="/assets/web-design.png" className="w_img" />
                  </div>
                </Link>
                <Link to="/ourWordpressPortfolio" transition="flip-left">
                  <div className="w_icon_ui_ux3" data-tooltip="Web Development">
                    <img src="/assets/development.png" className="w_img" />
                  </div>
                </Link>
                <Link to="/ourWordpressPortfolio" transition="flip-left">
                  <div
                    className="w_icon_ui_ux4"
                    data-tooltip="Responsive Design"
                  >
                    <img src="/assets/laptop-mob.png" className="w_img" />
                  </div>
                </Link>
                <Link to="/ourWordpressPortfolio" transition="flip-left">
                  <div
                    className="w_icon_ui_ux5"
                    data-tooltip="Ecommerce Development"
                  >
                    <img src="/assets/cart.png" className="w_img" />
                  </div>
                </Link>
                <Link to="/ourWordpressPortfolio" transition="flip-left">
                  <div className="w_icon_ui_ux6" data-tooltip="Psd To Html">
                    <img src="/assets/psdtohtml.png" className="w_img" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Carousel>
        <div className="arrow_btn">
          <Link to="/" transition="flip-right">
            <i className="fa-solid fa-angle-up"></i>
          </Link>
        </div>
      </Screen>
      {/* model start */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="model_main">
          <Typography
            className="display_flex"
            id="modal-modal-title"
            variant="h5"
            component="h2"
          >
            <span className="arrow_none">
              <Link to="/" transition="flip-left">
                <i className="fa-solid fa-arrow-left"></i>
              </Link>
            </span>
            Contact Us
          </Typography>
          <FormControl fullWidth sx={{ m: 1 }}>
            <TextField
              id="outlined-adornment-amount"
              label="Full Name"
              variant="outlined"
            />
          </FormControl>
          <br />
          <br />
          <FormControl>
            <TextField
              id="outlined-adornment-amount"
              label="Company"
              variant="outlined"
              className="field"
            />
          </FormControl>
          &nbsp; &nbsp;
          <FormControl>
            <TextField
              id="outlined-adornment-amount"
              label="Website"
              variant="outlined"
              className="field"
            />
          </FormControl>
          <br />
          <br />
          <FormControl>
            <TextField
              id="outlined-adornment-amount"
              label="Email"
              variant="outlined"
              className="field"
            />
          </FormControl>
          &nbsp; &nbsp;
          <FormControl>
            <TextField
              id="outlined-adornment-amount"
              label="Phone"
              variant="outlined"
              className="field"
            />
          </FormControl>
          <br />
          <br />
          <FormControl>
            <TextField
              id="outlined-adornment-amount"
              label="Budget"
              variant="outlined"
              className="field"
            />
          </FormControl>
          &nbsp; &nbsp;
          <FormControl>
            <TextField
              id="outlined-adornment-amount"
              label="I Am Intrested In"
              variant="outlined"
              className="field"
            />
          </FormControl>
          <br />
          <br />
          <FormControl fullWidth sx={{ m: 1 }}>
            <TextField
              id="outlined-adornment-amount"
              label="Your Message"
              variant="outlined"
            />
          </FormControl>
          <br />
          <br />
          <FormControl fullWidth sx={{ m: 1 }}>
            <Button
              onClick={() => {
                alert.success("clicked");
              }}
              className={classes.btn}
              variant="contained"
            >
              Submit
            </Button>
          </FormControl>
        </Box>
      </Modal>
    </>
  );
};

export default Ui_ux_design;
