import React from "react"
import groupImg from '../../public/assets/group-logo.png';

export function Hero(){
    return (
        <section className="hero">
            <img src={groupImg} className="hero--photo" alt="group-photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by
                one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}
