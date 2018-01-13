import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import ReactTooltip from 'react-tooltip';

export default class InevitableWar extends Component {
    render() {
        return(
        <div>
            <div id="inevitable-war-div" className="inevitable-war-div">
                <div className="container">
                    <div className="row">
                        <h1 id="neizbezhnaya-voyna" className="text-center" tabIndex="0">Неизбежная Война</h1>
                        <h1 id="inevitable-war" className="text-center" tabIndex="0">Inevitable War</h1>
                    </div>
                    <div className="row">
                        <div id="stalin" className="col-xs-4 col-xs-offset-0" data-tip data-for="stalin-tooltip"></div>
                        <p id="inevitable-war-paragraph" className="col-xs-7 col-xs-offset-5 text-right">
                            Stalin was himself suspicious of Finland. He believed that Finland would welcome the defeat of communist Russia – after all, Finland had helped anti-communist groups in the Russian Civil War and Stalin believed that Finland would allow her land to be used as a base by invading forces for an attack on the Soviet Union.<br/><br/>
                            After discussions in Helsinki, Stalin’s proposals were rejected. Ironically, two people did show some ‘support’ for them – Juho Paasikivi <a href="https://en.wikipedia.org/wiki/Juho_Kusti_Paasikivi" target="_blank">(click to read more...)</a> and Marshal Carl Mannerheim <a href="https://en.wikipedia.org/wiki/Carl_Gustaf_Emil_Mannerheim" target="_blank">(click to read more...)</a>, c-in-c of designate of Finland’s military in time of war. Both felt that some islands in the Gulf of Finland should be ceded to ‘buy off’ the Soviets as both feared that if war did occur, Finland would have to fight the entire U.S.S.R. by itself with no help from any other country. However, their beliefs were rejected by the Finnish government, even though Germany urged Finland to accept the Soviet's demands. By the end of November 1939, war between Finland and the U.S.S.R. seemed inevitable.
                        </p>
                    </div>
                </div>
            </div>
            <ReactTooltip id="stalin-tooltip" place="bottom" type="light"
            effect="float" role="tooltip">
                <span className="tooltip-span">Joseph Stalin, General Secretary<br/> of the Communist Party of the<br/> Soviet Union from 1922-1952</span>
            </ReactTooltip>
        </div>
        );
    }
}
