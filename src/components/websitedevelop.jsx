import React from "react";
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
import { useAlert } from "react-alert";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

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

const WebsiteDevelop = (props) => {
  const classes = useStyles();
  const alert = useAlert();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="serviceslide">
        <div className="service-content">
          <div className="service-img">
            <img src={props.c_img} />
          </div>
          <div className="service-detail">
            <h2>{props.c_title}</h2>
            <p>{props.c_para}</p>
            <br />
            <br />
            <div className="service_actions">
              <Link
                to={props.link}
                transition="flip-left"
                className="view_more_btn"
              >
                {props.c_view_more_btn}
              </Link>
              <div className="c_more_btn" onClick={() => setOpen(true)}>
                {props.c_more_btn}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* model start */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="model_main">
          <Typography id="modal-modal-title">{props.c_more_btn}</Typography>
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
              value={props.c_title}
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

export default WebsiteDevelop;
