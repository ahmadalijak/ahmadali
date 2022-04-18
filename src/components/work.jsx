import React from "react";
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

const work = (props) => {
  return (
    <>
      <div className="portfoliogrid">
        <div className="image_block">
          <Link to={props.item.slug} transition="flip-left">
            <div className="image">
              <img
                className="image__img"
                src={props.item.image}
                alt={props.item.name}
              />
              <div className="image__overlay image__overlay--primary">
                <div className="image__btn">{props.item.name}</div>
                <p className="image__description">{props.item.shortintro}</p>
                <p className="image__description">{props.item.description}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default work;
