import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "./Button";
import DefaultThumbnail from "../assets/images/default-thumbnail.png";

const AnimalCard = (props) => {
  return (
    <div className="animal-card">
      <Link to={`/catalog/${props.slug}`}>
        <div className="animal-card__image">
          {props.image ? (
            <div>
              <img src={props.image} alt="" />
              <img src={props.image2} alt="" />
            </div>
          ) : (
            <div>
              <img src={DefaultThumbnail} alt="" />
              <img src={DefaultThumbnail} alt="" />
            </div>
          )}
        </div>
        <h3 className="animal-card__name">{props.name}</h3>
        <h3 className="animal-card__class">{props.class}</h3>
      </Link>
      <div className="animal-card__btn">
        <Link to={`/catalog/${props.slug}`}>
          <Button size="sm">{props.title}</Button>
        </Link>
      </div>
    </div>
  );
};

AnimalCard.propTypes = {
  image: PropTypes.string.isRequired,
  image2: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  class: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default AnimalCard;
