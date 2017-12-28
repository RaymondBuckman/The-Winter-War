import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import ReactTooltip from 'react-tooltip';

export default class TheWhiteDeath extends Component {
    render() {
        return(
        <div>
            <div className="The-White-Death-div">
                <div className="container">
                    <div className="row">
                        <h1 id="valkoinen-kuolema" className="text-center" tabIndex="0">Valkoinen Kuolema</h1>
                        <h1 id="the-white-death" className="text-center" tabIndex="0">The White Death</h1>
                    </div>
                    <div className="row">
                        <p id="the-white-death-paragraph" className="col-xs-7 col-xs-offset-0 text-left">
                            Simo Häyhä, dubbed “The White Death” by the Soviets, is widely regarded as the most skilled and successful sniper there ever was, with over 500 kills to his name.<br/><br/>
                            With his Mosin-Nagant M91 rifle, he would dress in white winter camouflage, and carry with him only a day’s worth of supplies and ammunition. While hiding out in the snow, he would then take out any Russian who entered his killing zone. Hayha preferred to use iron sights on his gun instead of scopes, as scopes had a tendency to glare in the sunlight and reveal his position. He would put snow in his mouth to hide his breath from being seen in the cold air. While he may sound like an ordinary sniper, this was far from the case: over the course of 100 days during the winter he racked up over 500 kills, earning him the nickname “The White Death”. The Soviets feared him so much that they mounted numerous counter sniper and artillery attacks to get rid of him, all of which failed miserably. However, on March 6th, 1940, he was hit in the jaw by an explosive round from a counter sniper, disfiguring his face. He fell into an 11-day coma, awakening on the day that the war ended.<br/><br/>
                            Hayha was given numerous awards, and was also promoted from corporal to second lieutenant, a jump in the ranks that had never been seen in Finland’s history. Despite being slightly disfigured, he recovered from his injury, and went on to live until the age of 96.
                        </p>
                        <div id="simo-hayha" className="col-xs-4 col-xs-offset-8"></div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
