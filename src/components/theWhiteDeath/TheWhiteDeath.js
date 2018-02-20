import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import simoHayhaImage from '../../img/simo-hayha.jpg';

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

export default class TheWhiteDeath extends Component {
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
            <div id="the-white-death-div" className="the-white-death-div">
                <div className="container">
                    <div className="row">
                        <h1 id="valkoinen-kuolema" className="text-center">Valkoinen Kuolema</h1>
                        <h1 id="the-white-death" className="text-center" tabIndex="0">The White Death</h1>
                    </div>
                    <div className="row">
                        <p id="the-white-death-paragraph" className="col-xs-10 col-xs-offset-1 col-lg-7 col-lg-offset-0 text-left">
                            Simo Häyhä, dubbed “The White Death” by the Soviets, is widely regarded as the most skilled and successful sniper there ever was, with over 500 kills to his name.<br/><br/>
            
                            During the winter war with his Mosin-Nagant M91 rifle, he would dress in white winter camouflage, and carry with him only a day’s worth of supplies and ammunition. While hiding out in the snow, he would then take out any Soviet who entered his killing zone. Häyhä preferred to use iron sights on his gun instead of scopes, as scopes had a tendency to glare in the sunlight and reveal his position. He would put snow in his mouth to hide his breath from being seen in the cold air. While he may sound like an ordinary sniper, this was far from the case: over the course of 100 days during the winter he racked up over 500 kills, earning him the nickname “The White Death”. The Soviets feared him so much that they mounted numerous counter sniper and artillery attacks to get rid of him, all of which failed miserably. However, on March 6th, 1940, he was hit in the jaw by an explosive round from a counter sniper, disfiguring his face. He fell into an 11-day coma, awakening on the day that the war ended.<br/><br/>
            
                            Häyhä was given numerous awards, and was also promoted from corporal to second lieutenant, a jump in the ranks that had never been seen in Finland’s history. Despite being slightly disfigured, he recovered from his injury, and went on to live until the age of 96.
                        </p>
                        <div id="the-white-death-image" className="col-lg-4 col-lg-offset-8 hidden-xs hidden-sm" onMouseEnter={this.darken.bind(this)} onMouseLeave={this.lighten.bind(this)}>
                            <img id="simo-hayha" src={simoHayhaImage} alt="Grayscale portrait of Simo Hayha" style={styles[this.state.img_state]}></img>
                            <span className="text-container">
                                <p style={styles[this.state.img_text_state]}>Simo Häyhä, widely considered to be the greatest sniper of all time <a href="https://www.youtube.com/watch?v=pkKVhqsYva4" target="_blank">(view more on Simo Häyhä...)</a></p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
