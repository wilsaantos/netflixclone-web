import React from "react";
import './styles.modules.scss';

export function Header() {
    return (
        <header>
            <div className="header--logo">
                <a href="/"><img src="src\assets\logo\netflixlogo.png" alt="logo"></img></a> 
            </div>
            <div className="header--user">
                <a href="https://github.com/wilsaantos"><img src="src\assets\eu.jpg" alt="user"></img></a>
            </div>
        </header>
    )
}