import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import ReactTooltip from 'react-tooltip';

export default class Aftermath extends Component {
    render() {
        return(
        <div>
            <div className="aftermath-div">
                <div className="container">
                    <div className="row">
                        <h1 id="jalkiseuraukset" className="text-center" tabIndex="0">Jälkiseuraukset</h1>
                        <h1 id="aftermath" className="text-center" tabIndex="0">Aftermath</h1>
                    </div>
                    <div className="row">
                        <div id="stalin" className="col-xs-4 col-xs-offset-0" data-tip data-for="stalin-tooltip"></div>
                        <p id="aftermath-paragraph" className="col-xs-7 col-xs-offset-5 text-right">
                            Stalin was himself suspicious of Finland. He believed that Finland would welcome the defeat of communist Russia – after all, Finland had helped anti-communist groups in the Russian Civil War and Stalin believed that Finland would allow her land to be used as a base by invading forces for an attack on the Soviet Union.<br/><br/>
                            After discussions in Helsinki, Stalin’s proposals were rejected. Ironically, two people did show some ‘support’ for them – Paasikivi and Marshall Mannerheim, c-in-c of designate of Finland’s military in time of war. Both felt that some islands in the Gulf of Finland should be ceded to ‘buy off’ the Soviets as both feared that if war did occur, Finland would have to fight the entire U.S.S.R. by itself with no help from any other country. However, their beliefs were rejected by the Finnish government, even though Germany urged Finland to accept the Soviet's demands. By the end of November 1939, war between Finland and the U.S.S.R. seemed inevitable.
                        </p>
                    </div>
                </div>
            </div>
            <ReactTooltip id="stalin-tooltip" place="bottom" type="light"
            effect="float" role="tooltip">
                <span className="tooltip-span">Joseph Stalin</span>
            </ReactTooltip>
        </div>
        );
    }
}