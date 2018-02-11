import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import vyborgImage from '../../img/vyborg.jpg';

export default class Aftermath extends Component {
    render() {
        return(
        <div>
            <div id="aftermath-div" className="aftermath-div">
                <div className="container">
                    <div className="row">
                        <h1 id="jalkiseuraukset" className="text-center">Jälkiseuraukset</h1>
                        <h1 id="aftermath" className="text-center" tabIndex="0">Aftermath</h1>
                    </div>
                    <div className="row">
                        <div id="aftermath-image" className="col-lg-4 col-lg-offset-0 hidden-xs">
                            <img id="vyborg" src={vyborgImage} alt="Current image of Vyborg, Russia (formerly Viipuri, Finland)"></img>
                            <span className="text-container">
                                <p>Vyborg (formerly Viipuri, Finland), located in Leningrad Oblast, Russia</p>
                            </span>
                        </div>
                        <p id="aftermath-paragraph" className="col-xs-10 col-xs-offset-1 col-lg-7 col-lg-offset-5 text-right">
                            By the terms of the treaty, Finland lost almost 10% of its national territory. However, Finland also avoided being absorbed into the Soviet Union. On July 31, 1940, Adolf Hitler gave the order to start planning an assault on the Soviet Union.  One month later the Germans allowed the secret sale of weapons to Finland. German and Finnish military authorities made an agreement on September 12, and an official exchange of diplomatic notes was sent on September 22.<br/><br/>
                            
                            Despite several Soviet attempts improve relations & reduce German influence, Finland became allies with Nazi Germany & invaded the Soviet Union together in The Continuation War <a href="http://media.wfyi.org/fireandice/history/continuation40.htm" target="_blank">(read more...)</a>. During this war Finland was able to temporarily recapture Karelia for 3 years until the Soviets drove out Nazi Germany & its allies. Today, the formerly Finnish terrority is under control of the Russian Federation. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
