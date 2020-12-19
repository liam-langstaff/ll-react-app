import React, { Component } from 'react';
import {data} from '../../content.js'
import './Hero.css'
import ShapeGroup from '../../assets/ShapeGroup.svg'


class HeroComponent extends Component {
    render() {
        return(
            <section className="HeroSection">
                <div className="HeroSection__title">
                    <span>{data.HeroSection.Title}</span>
                </div>
                <div className="HeroSection__main">
                    <span>{data.HeroSection.Role}</span>
                </div>
                <div className="HeroSection__desc">
                    <span>{data.HeroSection.Desc}</span>
                    <img src={ShapeGroup} alt="" />
                </div>


            </section>
        )
    }
}

export default HeroComponent
