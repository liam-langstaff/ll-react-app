import React, { Component } from 'react';
import logo from '../../assets/logo-abstract.png'
import Triangle from '../../assets/Triangle.svg'
import Circle from '../../assets/Circle.svg'
import Square from '../../assets/Square.svg'
import Cross from '../../assets/cross.svg'
import './Header.css'

class Header extends Component {
    render() {
        return(
            <header>
                <div className="logo-name">
                    <h1>Liam Langstaff</h1>
                </div>
                <div className="logo-image">
                    <img src={logo} alt=""/>
                </div>
                <nav>
                    <ul>
                        <li className="nav-about nav-item"><img src={Triangle} alt=""/><span>About</span></li>
                        <li className="nav-exp nav-item"><img src={Circle} alt=""/><span>Experience</span></li>
                        <li className="nav-work nav-item"><img src={Square} alt=""/><span>Work</span></li>
                        <li className="nav-contact nav-item"><img src={Cross} alt=""/><span>Contact</span></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header
