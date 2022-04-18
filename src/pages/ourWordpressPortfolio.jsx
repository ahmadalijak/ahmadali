import React from "react";
import MetaData from "../components/MetaData";
import "../css/OurWordpressPortfolio.css";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

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
import { IconButton } from "@material-ui/core";
import { useAlert } from "react-alert";

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

const OurWordpressPortfolio = () => {
  const classes = useStyles();
  const alert = useAlert();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  return (
    <>
      <MetaData title="creaticvebonds - ourwordpressportfolio" />
      <Screen className={classes.screen}>
        <div className="menu_btn">
          <IconButton>
            <i className="fa-solid fa-bars bar"></i>
          </IconButton>
        </div>
        <div className="arrow_btn">
          <Link to="/websiteDevelopment" transition="flip-right">
            <i className="fa-solid fa-angle-up"></i>
          </Link>
        </div>
        <div className="wordpressportfolio">
          <div className="tops">
            <div className="left">
              <p>Portfolio</p>&nbsp;
              <h2>Wordpress Websites</h2>
            </div>
            <div className="mid">
              <div className="c_btn" onClick={() => setOpen(true)}>
                I want a cool App
              </div>
            </div>
          </div>
          <div className="w_main">
            <div className="internal_scrolling_w">
              <img src="/assets/worpress-portfolio.png" className="w__img" />
              <img src="/assets/worpress-portfolio.png" className="w__img" />
            </div>
            <div className="right_info">
              <h1>LiveResume </h1>
              <p>Wordpress website design and development </p>
              <p>
                “Responsive web design is becoming more important is amount
                Icons are also appropriate for toggle buttons that allow a
                single choice to be selected or deselected, such as adding or
                removing a star to an item such as adding or removing a star to
                an item“.
              </p>
            </div>
          </div>
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

export default OurWordpressPortfolio;
