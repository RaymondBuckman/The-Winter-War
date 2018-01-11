import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import ReactTooltip from 'react-tooltip';

export default class ItBegins extends Component {
    render() {
        return(
        <div>
            <div id="it-begins-div" className="it-begins-div">
                <div className="container">
                    <div className="row">
                        <h1 id="nachinayetsya" className="text-center" tabIndex="0">Начинается</h1>
                        <h1 id="it-begins" className="text-center" tabIndex="0">It Begins</h1>
                    </div>
                    <div className="row">
                        <div id="soviet-troops" className="col-xs-4 col-xs-offset-0" data-tip data-for="soviet-troops-tooltip"></div>
                        <p id="it-begins-paragraph" className="col-xs-7 col-xs-offset-5 text-right affix-top">
                            The war started on November 30th. The initial stages went to the Finns' plan as they held up the first advances of the Red Army in the Karelian Isthmus. Being massively undersupplied in weaponry compared to the Soviets, the Finns made use of home-made incendiary & explosive weapons. 
                            <br/><br/>
                            The most famous creation was the Molotov cocktail. Named after Soviet foreign minister Vyacheslav Molotov, a Molotov cocktail is a breakable glass bottle containing a flammable substance such as gasoline or alcohol, and usually a source of ignition such as a burning cloth wick held in place by the bottle's stopper. Finnish ski troopers would toss Molotov cocktails through the exhaust opening into the tanks’ bellows, causing the vehicles to explode from the inside out. Many instances, a Finnish ski trooper would get close enough to pry the treads off, demobilizing the tank and allowing other soldiers to throw explosives inside <a href="https://youtu.be/_M8_hS0gqU8?t=107" target="_blank">(click to view...)</a>.
                        </p>
                    </div>
                </div>
            </div>
            <ReactTooltip id="soviet-troops-tooltip" place="bottom" type="light"
            effect="float" role="tooltip">
                <span className="tooltip-span">The Soviets had great difficulty<br/> traversing through Finnish territory</span>
            </ReactTooltip>
        </div>
        );
    }
}
