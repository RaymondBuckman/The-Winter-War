import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import finnishFlagImage from '../../img/finn-flag.jpg';

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


export default class Perseverance extends Component {
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
            <div id="perseverance-div" className="perseverance-div">
                <div className="container">
                    <div className="row">
                        <h1 id="sisu" className="text-center">Sisu</h1>
                        <h1 id="perseverance" className="text-center" tabIndex="0">Perseverance & Guts</h1>
                    </div>
                    <div className="row">
                        <div id="perseverance-image" className="col-lg-4 col-lg-offset-0 hidden-xs hidden-sm" onMouseEnter={this.darken.bind(this)} onMouseLeave={this.lighten.bind(this)}>
                            <img id="finnish-flag" src={finnishFlagImage} alt="Image of soldiers holding up the Finnish flag" style={styles[this.state.img_state]}></img>
                            <span className="text-container">
                                <p style={styles[this.state.img_text_state]}>Soldiers raising the Finnish Flag <a href="https://finland.fi/facts-stats-and-info/the-finnish-flag/" target="_blank">(read more about the Finnish flag...)</a></p>
                            </span>
                        </div>
                        <p id="perseverance-paragraph" className="col-xs-10 col-xs-offset-1 col-lg-7 col-lg-offset-5 text-right">
                            The exact meaning of sisu is hard to describe. There isn’t a single word in English with a literal parallel, and even in Finland the idiom stands in for a cluster of traits. That cluster includes stoic determination, hardihood, grit, bravery, willpower, tenacity, guts, and resilience. Perseverance, one might say. Sisu is an action-oriented mindset; it is manifested in the decision to grapple with an endeavor with long odds; to take on a challenge seemingly above one’s mental and physical capacities. It is called upon when adversity and opposition push you to give up, and your white-knuckled courage allows you to hold on.<br/><br/>
                                
                            The Finnish people feel that sisu constitutes the heart of their national culture <a href="http://www.finlandia.edu/about/our-finnish-heritage/" target="_blank">(read more...)</a>. It was certainly the heart of their resistance during the Winter War. Sisu is what allowed Finnish soldiers to creep close to Soviet tanks to throw grenades, plant charges, and even attempt to crow bar off their treads. It’s what inspired them to keep volunteering for the job, despite its 70% casualty rate.<br/><br/>
                                
                            Sisu is what inspired Finnish pilots to fly their half-as-fast, two-decades-old biplanes into formations of modern Soviet fighters that outnumbered them 20 to 1. It’s what enabled them to overcome such handicaps to shoot down 10X as many of the enemy as they lost themselves.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

