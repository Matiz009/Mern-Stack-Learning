import React from "react";
import star from "../images/star.png";
export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} className="card--image" alt="katie's pic" />
      <div className="card--stats">
        <img src={star} className="card--star" alt="rating" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
