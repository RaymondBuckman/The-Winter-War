import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import ReactTooltip from 'react-tooltip';

export default class Perseverance extends Component {
    render() {
        return(
        <div>
            <div className="perseverance-div">
                <div className="container">
                    <div className="row">
                        <h1 id="sisu" className="text-center" tabIndex="0">Sisu</h1>
                        <h1 id="perseverance" className="text-center" tabIndex="0">Perseverance</h1>
                    </div>
                    <div className="row">
                        <div id="finnish-flag" className="col-xs-4 col-xs-offset-0"></div>
                        <p id="perseverance-paragraph" className="col-xs-7 col-xs-offset-5 text-right">
                            The exact meaning of sisu is hard to describe. There isn’t a single word in English with a literal parallel, and even in Finland the idiom stands in for a cluster of traits. That cluster includes stoic determination, hardihood, grit, bravery, willpower, tenacity, guts, and resilience. Perseverance, one might say. Sisu is an action-oriented mindset; it is manifested in the decision to grapple with an endeavor with long odds; to take on a challenge seemingly above one’s mental and physical capacities. It is called upon when adversity and opposition push you to give up, and your white-knuckled courage allows you to hold on.<br/>
                            The Finnish people feel that sisu constitutes the heart of their national culture. It was certainly the heart of their resistance during the Winter War. Sisu is what allowed Finnish soldiers to creep close to Soviet tanks to throw grenades, plant charges, and even attempt to crow bar off their treads. It’s what inspired them to keep volunteering for the job, despite its 70% casualty rate.<br/>
                            Sisu is what inspired Finnish pilots to fly their half-as-fast, two-decades-old biplanes into formations of modern Russian fighters that outnumbered them 20 to 1. It’s what enabled them to overcome such handicaps to shoot down 10X as many of the enemy as they lost themselves.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
