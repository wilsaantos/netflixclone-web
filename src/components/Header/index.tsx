import React from "react";
import './styles.modules.scss';
import logo from '../../assets/logo/netflixlogo.png';
import user from '../../assets/eu.jpg'

export function Header(prop: {black: boolean}) {
    return (
        <header className={prop.black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/"><img src={logo} alt="logo"></img></a> 
            </div>
            <div className="header--user">
                <a href="https://github.com/wilsaantos"><img src={user} alt="user"></img></a>
            </div>
        </header>
    )
}