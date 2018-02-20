import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import Particles from 'react-particles-js';
import KareliaImage from '../../img/karelia.png';

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

export default class BufferZone extends Component {   
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
            <div id="buffer-zone-div" className="buffer-zone-div">
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
                                detect_on: "window",
                                events: {
                                  onhover: {
                                    enable: "true",
                                    mode: "repulse"
                                  },
                                  onclick: {
                                    enable: "true",
                                    mode: "repulse"
                                  },
                                  resize: "true"
                                },
                                modes: {
                                  grab: {
                                    distance: 400,
                                    line_linked: {
                                      opacity: 0.5
                                    }
                                  },
                                  bubble: {
                                    distance: 400,
                                    size: 4,
                                    duration: 0.3,
                                    opacity: 1,
                                    speed: 3
                                  },
                                  repulse: {
                                    distance: 200,
                                    duration: 0.4
                                  },
                                  push: {
                                    particles_nb: 4
                                  },
                                  remove: {
                                    particles_nb: 2
                                  }
                                }
                              },
                        }
                    }}
                className="snow-background"/>
                <div className="container">
                    <div className="row">
                        <h1 id="bufernaya-zona" className="text-center">Буферная Зона</h1>
                        <h1 id="buffer-zone" className="text-center" tabIndex="0">Buffer Zone</h1>
                    </div>
                    <div className="row">
                        <p id="buffer-zone-paragraph" className="col-xs-10 col-xs-offset-1 col-lg-7 col-lg-offset-0 text-left">
                            The Soviet Union’s feud with its Nordic neighbor began in 1939, when Soviet leader Joseph Stalin looked to expand his influence over Eastern Europe. At the time Finland had control over Karelia, a large land mass in Finland's east that stretched to just outside of Leningrad (known today as St. Petersburg).<br/><br/>     
                            To defend a possible approach to Leningrad by the Nazis, Stalin wanted Karelia as well as several Finnish islands in the Gulf of Finland as a buffer zone. Throughout its history, Russia has always had a problem defending its western cities from invasion & has used conquered areas as buffer zones <a href="https://www.youtube.com/watch?v=HE6rSljTwdU" target="_blank">(view more on Russia's historical need of buffer zones...)</a>.  He also wanted to lease Hanko as a military base and to establish a garrison of 5,000 men there and he demanded more Finnish land on the Soviet border to be ceded to the U.S.S.R. In return, Stalin offered Finland land in Soviet Karelia and the right for Finland to fortify the Aaland Islands.<br/><br/>    
                            Finland was highly suspicious of anything required by Stalin. Relations between Russia and Finland had been fraught for many decades and nearly everyone in Finland saw Stalin’s demands as an attempt by Russia to re-establish her authority over Finland once again. 
                        </p>
                        <div id="buffer-zone-image" className="col-lg-4 col-lg-offset-8 hidden-xs hidden-sm" onMouseEnter={this.darken.bind(this)} onMouseLeave={this.lighten.bind(this)}> 
                            <img id="karelia-map" src={KareliaImage} alt="Map of Soviet-Finnish border region" style={styles[this.state.img_state]}></img>
                            <span className="text-container">
                                <p style={styles[this.state.img_text_state]}>Map of Karelia & its proximity to Leningrad <a href="http://helyla.onego.ru/history_eng.html" target="_blank">(read more on the history of Karelia...)</a></p>
                            </span>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        );
    }
}
