import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import ReactTooltip from 'react-tooltip';

export default class Aftermath extends Component {
    render() {
        return(
        <div>
            <div id="aftermath-div" className="aftermath-div">
                <div className="container">
                    <div className="row">
                        <h1 id="jalkiseuraukset" className="text-center" tabIndex="0">Jälkiseuraukset</h1>
                        <h1 id="aftermath" className="text-center" tabIndex="0">Aftermath</h1>
                    </div>
                    <div className="row">
                        <div id="vyborg" className="col-xs-4 col-xs-offset-0" data-tip data-for="vyborg-tooltip"></div>
                        <p id="aftermath-paragraph" className="col-xs-7 col-xs-offset-5 text-right">
                            By the terms of the treaty, Finland lost almost 10% of its national territory. However, Finland also avoided being absorbed into the Soviet Union. On July 31, 1940, Adolf Hitler gave the order to start planning an assault on the Soviet Union.  One month later the Germans allowed the secret sale of weapons to Finland. German and Finnish military authorities made an agreement on September 12, and an official exchange of diplomatic notes was sent on September 22.<br/><br/>
                            
                            Despite several Soviet attempts improve relations & reduce German influence, Finland became allies with Nazi Germany & invaded the Soviet Union together in the Continuation war. During this war Finland was able to temporarily recapture Karelia for 3 years until the Soviets drove out Nazi Germany & its allies. Today, the formerly Finnish terrority is under control of the Russian Federation. 
                        </p>
                    </div>
                </div>
            </div>
            <ReactTooltip id="vyborg-tooltip" place="bottom" type="light"
            effect="float" role="tooltip">
                <span className="tooltip-span">Vyborg (formerly Viipuri, Finland),<br/> located in Leningrad Oblast, Russia.</span>
            </ReactTooltip>
        </div>
        );
    }
}
