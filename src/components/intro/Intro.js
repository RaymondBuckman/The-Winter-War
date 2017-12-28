import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import snowVideo from '../../img/snow-video.mp4';

export default class Intro extends Component {
    render() {
        return(
        <div>
            <div className="Intro-div">
                <video preload="preload" id="intro-video" autoPlay="autoplay" loop="loop" muted>
                    <source src={snowVideo} type="video/mp4"></source>
                </video> 
                <div className="text-container">
                    <h1 id="the-winter-war" className="text-center">The Winter War</h1>
                    <h1 id="talvisota" className="text-center">Talvisota</h1>
                    <h2 id="the-story" className="text-center">The story of how Finland held its own against the Soviet Union</h2>
                </div>
            </div>
        </div>
        );
    }
}
