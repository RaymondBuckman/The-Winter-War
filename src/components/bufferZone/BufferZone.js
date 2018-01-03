import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import ReactTooltip from 'react-tooltip';

export default class BufferZone extends Component {
    render() {
        return(
        <div>
            <div id="buffer-zone-div" className="buffer-zone-div">
                <div className="container">
                    <div className="row">
                        <h1 id="bufernaya-zona" className="text-center" tabIndex="0">Буферная Зона</h1>
                        <h1 id="buffer-zone" className="text-center" tabIndex="0">Buffer Zone</h1>
                    </div>
                    <div className="row">
                        <p id="buffer-zone-paragraph" className="col-xs-7 col-xs-offset-0 text-left">
                            The Soviet Union’s feud with its Nordic neighbor began in 1939, when Soviet leader Joseph Stalin looked to expand his influence over Eastern Europe. At the time Finland had control over Karelia, a large land mass in Finland's east that stretched to just outside of Leningrad (known today as St. Petersburg).<br/><br/>     
                            To defend a possible approach to Leningrad by the Nazis, Stalin wanted Finnish islands in the Gulf of Finland, including Suursaari Island, handed over to the Soviet Union; he wanted to lease Hanko as a military base and to establish a garrison of 5,000 men there and he demanded more Finnish land on the Soviet border to be ceded to the U.S.S.R. In return, Stalin offered Finland land in Soviet Karelia and the right for Finland to fortify the Aaland Islands. Stalin couched all his land requirements in terms of defending parts of the U.S.S.R., be it Leningrad or Murmansk, from attack.<br/><br/>    
                            Finland was highly suspicious of anything required by Stalin. Relations between Russia and Finland had been fraught for many decades and nearly everyone in Finland saw Stalin’s demands as an attempt by Russia to re-establish her authority over Finland once again. 
                        </p>
                        <div id="karelia-map" className="col-xs-4 col-xs-offset-8" data-tip data-for="karelia-tooltip"></div>
                    </div>
                </div>
            </div>
            <ReactTooltip id="karelia-tooltip" place="bottom" type="light"
            effect="float" role="tooltip">
                <span className="tooltip-span">Map of Karelia & its proximity to Leningrad</span>
            </ReactTooltip>
        </div>
        );
    }
}
