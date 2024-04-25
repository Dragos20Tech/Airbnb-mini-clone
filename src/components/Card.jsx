import React from "react"
import KatieZaferes from "../assets/katie-zaferes.png"
import star from "../assets/star.png"

export function Card() {
    return (
        <div className="card">
            <img src={KatieZaferes} className="card--image"  alt="Katie Zaferes"/>
            <div className="card--stats">
                <img src={star} className="card--star"  alt="star"/>
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}