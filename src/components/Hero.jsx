import React from "react"
import groupImg from '../assets/group-logo.png';

export function Hero(){
    return (
        <>
            <div className="hero">
                <img src={groupImg} alt="Group"/>
            </div>
            <div className="hero-text">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts - all without leaving home</p>
            </div>
        </>
    )
}
