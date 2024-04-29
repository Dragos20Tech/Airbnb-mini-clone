import React from "react"
import star from "../../public/assets/star.png"

export function Card(props) {
    let badgeText
    if (props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    }
    else if (props.item.location === "Online"){
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.item.coverImg} className="card--image"  alt="main card image"/>
            <div className="card--stats">
                <img src={star} className="card--star"  alt="star icon"/>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <h2>{props.item.title}</h2>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}