import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import Particles from 'react-particles-js';
import sovietTanksImage from '../../img/soviet-tanks.jpg';

var styles = {
    normal: {
        filter: 'brightness(100%)'
    },
    darken: {
        filter: 'brightness(30%)'
    },
    invisible: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
};

export default class ItBegins extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img_state: 'normal',
            img_text_state: 'invisible'
        };
    }
    
    darken() {
        this.setState({
            img_state: 'darken',
            img_text_state: 'visible'
        });
    }
    
    lighten() {
        this.setState({
            img_state: 'normal',
            img_text_state: 'invisible'
        });
    }    
        
    render() {
        return(
        <div>
            <div id="it-begins-div" className="it-begins-div">
                <Particles 
                    params={{
                        particles: {
                            number: {
                                value: 80,
                            },
                            size: {
                                value: 7,
                                random: true,
                            },
                            line_linked: {
                                enable: false
                            },
                            move: {
                                enable: true,
                                speed: 7,
                                direction: "bottom",
                                random: false,
                                straight: false,
                                out_mode: "out",
                                bounce: false,
                                attract: {
                                    enable: false,
                                    rotateX: 600,
                                    rotateY: 1200
                                }
                            },
                            interactivity: {
                                detect_on: "canvas",
                                events: {
                                    onhover: {
                                        enable: true,
                                        mode: "repulse"
                                    },
                                    onclick: {
                                        enable: true,
                                        mode: "repulse"
                                    },
                                }
                            }
                        }
                    }}
                className="snow-background"/>
                <div className="container">
                    <div className="row">
                        <h1 id="nachinayetsya" className="text-center">Начинается</h1>
                        <h1 id="it-begins" className="text-center" tabIndex="0">It Begins</h1>
                    </div>
                    <div className="row">
                        <div id="it-begins-image" className="col-lg-4 col-lg-offset-0 hidden-xs hidden-sm" onMouseEnter={this.darken.bind(this)} onMouseLeave={this.lighten.bind(this)}>
                            <img id="soviet-tanks" src={sovietTanksImage} alt="Military green Soviet tanks struggling with the Finnish terrain" style={styles[this.state.img_state]}></img>
                            <span className="text-container">
                                <p style={styles[this.state.img_text_state]}>Soviet tanks, while powerful from a distance, struggled with the terrain & were vulnurable to Molotov cocktail attacks</p>
                            </span>
                        </div>
                        <p id="it-begins-paragraph" className="col-xs-10 col-xs-offset-1 col-lg-7 col-lg-offset-5 text-right affix-top">
                            The war started on November 30th. The initial stages went to the Finns' plan as they held up the first advances of the Red Army in the Karelian Isthmus. Being massively undersupplied in weaponry compared to the Soviets, the Finns made use of home-made incendiary & explosive weapons. 
                            <br/><br/>
                            The most famous creation was the Molotov cocktail. Named after Soviet foreign minister Vyacheslav Molotov, a Molotov cocktail is a breakable glass bottle containing a flammable substance such as gasoline or alcohol, and usually a source of ignition such as a burning cloth wick held in place by the bottle's stopper. Finnish ski troopers would toss Molotov cocktails through the exhaust opening into the tanks’ bellows, causing the vehicles to explode from the inside out. Many instances, a Finnish ski trooper would get close enough to demobilize the tank, allowing other soldiers to throw Molotov cocktails inside <a href="https://youtu.be/_M8_hS0gqU8?t=107" target="_blank">(view a Molotov cocktail attack...)</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
