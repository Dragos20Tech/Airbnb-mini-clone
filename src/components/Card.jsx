import React from "react"
import star from "../../public/assets/star.png"

export function Card(props) {
    return (
        <div className="card">
            <img src={props.img} className="card--image"  alt="main card image"/>
            <div className="card--stats">
                <img src={star} className="card--star"  alt="star icon"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <h2>{props.title}</h2>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}