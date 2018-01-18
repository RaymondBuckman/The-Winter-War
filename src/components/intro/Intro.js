import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import forestVideo from '../../img/forest-video.mp4';
import ReactTooltip from 'react-tooltip';

export default class Intro extends Component {
    render() {
        return(
        <div>
            <div className="intro-div">
                <video preload="preload" id="intro-video" autoPlay="autoplay" loop="loop" muted>
                    <source src={forestVideo} type="video/mp4"></source>
                </video> 
                <div className="text-container">
                    <h1 id="the-winter-war" className="text-center">The Winter War</h1>
                    <h1 id="talvisota" className="text-center">Talvisota</h1>
                    <h2 id="the-story" className="text-center">The story of how Finland held its own against the Soviet Union</h2>
                    <h1 id="down-arrow" className="text-center" data-tip data-for="down-arrow-tooltip">|<br/>v</h1>
                </div>
            </div>
            <ReactTooltip id="down-arrow-tooltip" place="top" type="light"
            effect="solid" role="tooltip">
                <span className="tooltip-span">Scroll down</span>
            </ReactTooltip>
        </div>
        );
    }
}
