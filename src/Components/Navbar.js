import React from "react"
import "../index.css";
import React_logo from "../Images/React-icon.png"

export default function NavBar(){
    return(
        <nav class="nav-container">
            <img src={React_logo} alt="react-logo" className="React-logo"/>
            <h1 className="nav--logo_text">ReactFacts</h1>
            <h2 className="nav--title">React Course - Project 1</h2>
        </nav>
    )
}
