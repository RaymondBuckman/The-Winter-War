import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import ReactTooltip from 'react-tooltip';

class InevitableWar extends Component {
    render() {
        return(
        <div>
            <div className="Inevitable-War-1">
                <div className="container">
                    <div className="row">
                        <h1 id="neizbezhnaya-voyna" className="text-center" tabIndex="0">Неизбежная Война</h1>
                        <h1 id="inevitable-war" className="text-center" tabIndex="0">Inevitable War</h1>
                    </div>
                    <div className="row">
                        <p id="inevitable-war-paragraph" className="col-xs-8 col-xs-offset-2 text-center">
                            Stalin was himself suspicious of Finland. He believed that Finland would welcome the defeat of communist Russia – after all, Finland had helped anti-communist groups in the Russian Civil War and Stalin believed that Finland would allow her land to be used as a base by invading forces for an attack on Russia.<br/><br/>
                            After discussions in Helsinki, Stalin’s proposals were rejected. Ironically, two people did show some ‘support’ for them – Paasikivi and Marshall Mannerheim, c-in-c of designate of Finland’s military in time of war. Both felt that some islands in the Gulf of Finland should be ceded to ‘buy off’ Russia as both feared that if war did occur, Finland would have to fight Russia by itself with no help from any other country. However, their beliefs were rejected by the Finnish government, even though Germany urged Finland to accept Russia’s demands. By the end of November 1939, was between Finland and Russia seemed inevitable.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default InevitableWar;
