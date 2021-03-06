import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Button from "./Button";

const AnimalSlider = (props) => {
  const data = props.data;

  const timeOut = props.timeOut ? props.timeOut : 3000;

  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = useCallback(() => {
    const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1;
    setActiveSlide(index);
  }, [activeSlide, data]);

  const prevSlide = () => {
    const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1;
    setActiveSlide(index);
  };

  useEffect(() => {
    if (props.auto) {
      const slideAuto = setInterval(() => {
        nextSlide();
      }, timeOut);
      return () => {
        clearInterval(slideAuto);
      };
    }
  }, [nextSlide, timeOut, props]);

  return (
    <div className="animal-slider">
      {data.map((item, index) => (
        <AnimalSliderItem
          key={index}
          item={item}
          active={index === activeSlide}
        />
      ))}
      {props.control ? (
        <div className="animal-slider__control">
          <div className="animal-slider__control__item" onClick={prevSlide}>
            {"<"}
          </div>
          <div className="animal-slider__control__item">
            <div className="index">
              {activeSlide + 1}/{data.length}
            </div>
          </div>
          <div className="animal-slider__control__item" onClick={nextSlide}>
            {">"}
          </div>
        </div>
      ) : null}
    </div>
  );
};

AnimalSlider.propTypes = {
  data: PropTypes.array.isRequired,
  control: PropTypes.bool,
  auto: PropTypes.bool,
  timeOut: PropTypes.number,
};

const AnimalSliderItem = (props) => (
  <div className={`animal-slider__item ${props.active ? "active" : ""}`}>
    <div className="animal-slider__item__info">
      <div
        className={`animal-slider__item__info__title color-${props.item.color}`}
      >
        <span>{props.item.title}</span>
      </div>
      <div className="animal-slider__item__info__description">
        <span>{props.item.description}</span>
      </div>
      <div className="animal-slider__item__info__btn">
        <Link to={props.item.path}>
          <Button backgroundColor={props.item.color} title=">" animate={true}>
            xem chi ti???t
          </Button>
        </Link>
      </div>
    </div>
    <div className="animal-slider__item__image">
      {/* <div className={`shape bg-${props.item.color}`}></div> */}
      <img src={props.item.img} alt="" />
    </div>
  </div>
);

export default AnimalSlider;
