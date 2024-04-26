import React from "react"
import airbnbLogo from '../../public/assets/airbnb-logo.png';

export function Navbar(){
    return (
        <nav className="navbar">
            <img src={airbnbLogo} alt="Airbnb-logo"/>
        </nav>
    )
}
