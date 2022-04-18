import React from "react";
import "../css/featuredwork.css";
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
import Work from "./work";
const jsonData= require('../data/portfolio.json'); 
console.log(jsonData);
var featured = jsonData.filter(function(i,v){
    return i.featured;
});
console.log(featured);

const Featuredwork = () => {
  return (
    <div className="featured-work">
      <h2>featured work</h2>
      {featured.map((row) => {
              return <><Work item={row} /></>
      
      })}
      <Link to="/ourportfolio" className="more-client" transition="flip-left">
        view our work
      </Link>
    </div>
  );
};
export default Featuredwork;
