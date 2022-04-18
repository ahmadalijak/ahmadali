import React from "react";
import "../css/services.css";

const service = (props) => {
  return (
    <>
      <div className="category">
        <img src={props.imgsrc} className="category_icon" />
        <h1>{props.stitle}</h1>
        <p>{props.spara}</p>
      </div>
    </>
  );
};

export default service;
