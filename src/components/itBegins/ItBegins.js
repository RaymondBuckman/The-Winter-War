import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';

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
                        <div id="it-begins-image" className="col-xs-4 col-xs-offset-0">
                            <div id="soviet-troops"></div>
                            <span className="text-container">
                                <p>The Soviets had great difficulty traversing through Finnish territory.</p>
                            </span>
                        </div>
                        <p id="it-begins-paragraph" className="col-xs-7 col-xs-offset-5 text-right affix-top">
                            The war started on November 30th. The initial stages went to the Finns' plan as they held up the first advances of the Red Army in the Karelian Isthmus. Being massively undersupplied in weaponry compared to the Soviets, the Finns made use of home-made incendiary & explosive weapons. 
                            <br/><br/>
                            The most famous creation was the Molotov cocktail. Named after Soviet foreign minister Vyacheslav Molotov, a Molotov cocktail is a breakable glass bottle containing a flammable substance such as gasoline or alcohol, and usually a source of ignition such as a burning cloth wick held in place by the bottle's stopper. Finnish ski troopers would toss Molotov cocktails through the exhaust opening into the tanks’ bellows, causing the vehicles to explode from the inside out. Many instances, a Finnish ski trooper would get close enough to demobilize the tank, allowing other soldiers to throw Molotov cocktails inside <a href="https://youtu.be/_M8_hS0gqU8?t=107" target="_blank">(click to view...)</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
