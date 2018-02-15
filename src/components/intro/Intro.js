import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import forestVideo from '../../img/forest-video.mp4';
import $ from "jquery";

export default class Intro extends Component {
    movePageDown(e){
        e.preventDefault();            
            $('html, body').animate({
                scrollTop: $("#buffer-zone-div").offset().top
            }, 1000);
    }
    
    render() {        
        return(
        <div>
            <div className="intro-div">
                <video preload="preload" id="intro-video" autoPlay="autoplay" loop="loop" muted>
                    <source src={forestVideo} type="video/mp4"></source>
                </video> 
                <div className="text-container">
                    <h1 id="the-winter-war" className="text-center" role="banner" tabIndex="0">The Winter War</h1>
                    <h2 id="the-story" className="text-center">The story of how Finland held its own against the Soviet Union</h2>
                    <h1 id="down-arrow" className="text-center" tabIndex="0" onClick={this.movePageDown}>|<br/>v</h1>
                </div>
            </div>
        </div>
        );
    }
}
