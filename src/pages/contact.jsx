import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import MetaData from "../components/MetaData";
import "../css/contact.css";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
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

const useStyles = makeStyles({
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
});

const Contact = () => {
  const alert = useAlert();
  const history = useHistory();
  const classes = useStyles();

  const [contact, setContact] = useState({
    name: "",
    company: "",
    website: "",
    email: "",
    phone: "",
    budget: "",
    work: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, company, website, email, phone, budget, work, message } =
      contact;
    if (
      name &&
      company &&
      website &&
      email &&
      phone &&
      budget &&
      work &&
      message
    ) {
      axios
        .post("http://localhost:5000/contact", contact)
        .then((res) => alert.success(res.data.message));
      history.push("/");
    } else {
      alert.error("invalid input");
    }
  };

  return (
    <>
      <div className="close_btn">
        <Link to="/" transition="flip-right">
          <i className="fa-solid fa-xmark c_close"></i>
        </Link>
      </div>
      <MetaData title="creativebond - contactus" />
      <div className="bg-color">
        <div className="c_title">contact us</div>
        <div className="contact-form">
          <div className="contact-form-inner">
            <span>Interested in working together?</span>
            <p>
              Fill out the Inquiry form below with some information about your
              project.
            </p>
            <form action="" className="c_form">
              <input
                type="text"
                className="c_input"
                placeholder="Full Name"
                name="name"
                value={contact.name}
                onChange={handleChange}
              />
              <div className="row_input">
                <input
                  type="text"
                  className="c_input2"
                  placeholder="Company"
                  name="company"
                  value={contact.company}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  className="c_input2"
                  placeholder="Website"
                  name="website"
                  value={contact.website}
                  onChange={handleChange}
                />
              </div>
              <div className="row_input">
                <input
                  type="text"
                  className="c_input2"
                  placeholder="Email"
                  name="email"
                  value={contact.email}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  className="c_input2"
                  placeholder="Phone"
                  name="phone"
                  value={contact.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="row_input">
                <select id="cars" className="c_input3">
                  <option value="volvo">Budget</option>
                  <option value="saab">$100.00</option>
                  <option value="opel">$500.00</option>
                  <option value="audi">$500.00</option>
                  <option value="audi">$500.00</option>
                  <option value="audi">$500.00</option>
                  <option value="audi">$500.00</option>
                  <option value="audi">$500.00</option>
                </select>

                <select id="cars" className="c_input3">
                  <option value="volvo">I Am Intersted In</option>
                  <option value="saab">clean and fast code</option>
                  <option value="opel">My cheap price</option>
                  <option value="audi">My delivery is fast</option>
                </select>
              </div>
              <textarea
                className="c_input"
                type="text"
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Your Message"
                value={contact.message}
                onChange={handleChange}
              ></textarea>
              <Link
                to="/clients"
                transition="flip-left"
                className="more-s-client"
              >
                be our next satisfied client
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
