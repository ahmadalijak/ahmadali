import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import "../css/services.css";
import MetaData from "../components/MetaData";
import Service from "../components/service";
import WhatWeDo from "../components/whatwedo";
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
import Navbar from "../components/navbar";

const useStyles = makeStyles((theme) => ({
  screen: {
    backgroundColor: "white",
  },
}));

const Services = () => {
  const classes = useStyles();

  return (
    <Screen className={classes.screen}>
      <MetaData title="creativebonds - services" />
      <Navbar />
      <div className="services_section">
  
        <WhatWeDo title="our services"/>
        {/*
     *       <div className="c-section">
          <Service
            imgsrc="/assets/angular.png"
            stitle="Angular Services"
            spara="Experts in creating angular application using open source solutions & custom build."
          />
          <Service
            imgsrc="/assets/edit.png"
            stitle="Logo Designing"
            spara="We design pro looking logo which express the business."
          />
          <Service
            imgsrc="/assets/mobile.png"
            stitle="App Designing"
            spara="We are professional web and mobile application developers."
          />
          <Service
            imgsrc="/assets/laptop.png"
            stitle="Web Development"
            spara="Develop from simple websites to complex web apps using php and angular."
          />
          <Service
            imgsrc="/assets/wordpress1.png"
            stitle="Wordpress"
            spara="Developing blogs and pro websites using wordpress."
          />
          <Service
            imgsrc="/assets/yii.png"
            stitle="Yii Services"
            spara="We are experts of Yii1, Yii2 and Yii3 Development Services."
          />
          <Service
            imgsrc="/assets/shopify.png"
            stitle="Shopify"
            spara="We are expert e-store builder of shopify platform."
          />
          <Service
            imgsrc="/assets/jomla2.png"
            stitle="Joomla"
            spara="Hands on Experience in developing cooperate websites using joomla."
          />
          <Service
            imgsrc="/assets/shopping.png"
            stitle="Shopping Carts"
            spara="Experts in creating online stores using open source solutions and custom build."
          /> 
     </div>
 */}
    
      </div>
    </Screen>
  );
};

export default Services;
